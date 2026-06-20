"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LOCALES, type Locale } from "@/content";
import { useContent, useLocale } from "@/lib/i18n";

/**
 * Flag-based language switcher in the header. Shows the active locale's flag
 * and opens a radio menu of the three locales (mirrors the flags used in the
 * Languages section). Selection is persisted via the LocaleProvider.
 */
export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();
  const { nav } = useContent();
  const active = LOCALES.find((l) => l.code === locale) ?? LOCALES[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label={nav.languageLabel}
            title={nav.languageLabel}
          >
            <span aria-hidden className="text-base leading-none">
              {active.flag}
            </span>
          </Button>
        }
      />
      <DropdownMenuContent align="end">
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={(value) => setLocale(value as Locale)}
        >
          {LOCALES.map(({ code, flag, label }) => (
            <DropdownMenuRadioItem key={code} value={code}>
              <span aria-hidden className="text-base leading-none">
                {flag}
              </span>
              <span>{label}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
