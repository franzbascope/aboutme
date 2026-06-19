import type { ReactNode } from "react";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type SectionProps = {
  /** Anchor id used by the in-page nav (e.g. "experience"). */
  id: string;
  /** Heading shown for the section. */
  title: string;
  /** Optional short line under the heading. */
  description?: string;
  className?: string;
  children: ReactNode;
};

/**
 * Shared section shell: gives every section a consistent retro heading
 * (terminal-style "// title" prefix), a divider, and an anchor id so the
 * site nav can scroll to it. Keeps the per-section files focused on content.
 */
export function Section({
  id,
  title,
  description,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-12", className)}>
      <header className="mb-6">
        <h2 className="inline-block text-xl font-bold tracking-tight">
          {title}
          <span
            aria-hidden
            className="mt-1 block h-1 w-full rounded-full bg-primary"
          />
        </h2>
        {description ? (
          <p className="mt-2 text-sm text-muted-foreground">{description}</p>
        ) : null}
        <Separator className="mt-4" />
      </header>
      {children}
    </section>
  );
}
