/**
 * Locale registry + the content barrel.
 *
 * Per-locale copy lives in `en.ts` / `es.ts` / `pt.ts` (each `satisfies
 * SiteContent`). This file maps locale codes to that content and exposes the
 * switcher metadata (flag + label) used by the header toggle.
 *
 * `content` (the English default) is re-exported so server-only, non-reactive
 * call sites — e.g. `metadata` in `app/layout.tsx` — can keep importing a
 * static object. Reactive, per-locale reads go through `useContent()`
 * (`@/lib/i18n`) instead.
 */
import { en } from "./en";
import { es } from "./es";
import { pt } from "./pt";

export * from "./types";

export type Locale = "en" | "es" | "pt";

export const DEFAULT_LOCALE: Locale = "en";

/** Content keyed by locale code. */
export const contentByLocale = { en, es, pt } as const;

/** Switcher metadata, in display order. `flag` matches the Languages section. */
export const LOCALES: { code: Locale; flag: string; label: string }[] = [
  { code: "en", flag: "🇺🇸", label: "English" },
  { code: "es", flag: "🇪🇸", label: "Español" },
  { code: "pt", flag: "🇧🇷", label: "Português" },
];

/** Default (English) content for static, non-reactive call sites. */
export const content = en;
