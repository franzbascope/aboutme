"use client";

import { Separator } from "@/components/ui/separator";
import { useContent } from "@/lib/i18n";

import { SocialLinks } from "./social-links";

/**
 * Page footer: copyright line (with the live year) + social icons. Client
 * component so the localized footer copy updates with the language switcher.
 */
export function SiteFooter() {
  const { site } = useContent();
  return (
    <footer className="mx-auto w-full max-w-3xl px-4 py-10">
      <Separator className="mb-6" />
      <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
        <p className="font-mono">
          © {new Date().getFullYear()} {site.footer}
        </p>
        <SocialLinks className="-mr-2" />
      </div>
    </footer>
  );
}
