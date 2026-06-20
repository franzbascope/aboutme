"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import {
  contentByLocale,
  DEFAULT_LOCALE,
  type Locale,
  type SiteContent,
} from "@/content";

const STORAGE_KEY = "locale";

function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "es" || value === "pt";
}

/**
 * Tiny external store backing the locale, persisted to localStorage.
 *
 * Using `useSyncExternalStore` (rather than effect-driven `useState`) lets the
 * server snapshot return the default locale while the client reads the saved
 * value — React handles the post-hydration swap without a manual effect, and
 * cross-tab `storage` events stay in sync for free.
 */
const localeStore = {
  getSnapshot(): Locale {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return isLocale(saved) ? saved : DEFAULT_LOCALE;
  },
  getServerSnapshot(): Locale {
    return DEFAULT_LOCALE;
  },
  subscribe(onChange: () => void) {
    window.addEventListener("storage", onChange);
    window.addEventListener(STORAGE_KEY, onChange);
    return () => {
      window.removeEventListener("storage", onChange);
      window.removeEventListener(STORAGE_KEY, onChange);
    };
  },
  set(locale: Locale) {
    window.localStorage.setItem(STORAGE_KEY, locale);
    // Notify same-tab subscribers (the native `storage` event only fires in
    // other tabs).
    window.dispatchEvent(new Event(STORAGE_KEY));
  },
};

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: SiteContent;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

/**
 * Holds the selected locale and exposes the matching content tree. The first
 * render uses `DEFAULT_LOCALE` (server snapshot) so markup agrees across the
 * hydration boundary; the persisted choice is applied right after. Each change
 * is written to localStorage and reflected on `<html lang>` for a11y/SEO.
 */
export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    localeStore.subscribe,
    localeStore.getSnapshot,
    localeStore.getServerSnapshot,
  );

  // Keep <html lang> in sync with the active locale.
  useEffect(() => {
    document.documentElement.lang = contentByLocale[locale].site.htmlLang;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => localeStore.set(next), []);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, content: contentByLocale[locale] }),
    [locale, setLocale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

function useLocaleContext(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale/useContent must be used within a LocaleProvider");
  }
  return ctx;
}

/** Active locale plus the setter used by the language switcher. */
export function useLocale() {
  const { locale, setLocale } = useLocaleContext();
  return { locale, setLocale };
}

/** The content tree for the active locale. */
export function useContent(): SiteContent {
  return useLocaleContext().content;
}
