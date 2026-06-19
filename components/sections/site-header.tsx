import { Button } from "@/components/ui/button";

import { SocialLinks } from "./social-links";

const navItems = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Languages", href: "#languages" },
  { label: "Hobbies", href: "#hobbies" },
];

/**
 * Sticky top nav with in-page anchor links (Cassidy-style clean nav) plus
 * social icons. Anchors map to the section ids set in each section component.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-14 w-full max-w-3xl items-center justify-between gap-2 px-4">
        <Button
          variant="ghost"
          className="font-bold"
          nativeButton={false}
          render={<a href="#top">~/franz</a>}
        />
        <div className="flex items-center gap-1">
          <nav aria-label="Sections" className="hidden items-center sm:flex">
            {navItems.map(({ label, href }) => (
              <Button
                key={href}
                variant="ghost"
                size="sm"
                nativeButton={false}
                render={<a href={href}>{label}</a>}
              />
            ))}
          </nav>
          <SocialLinks />
        </div>
      </div>
    </header>
  );
}
