"use client";

import { Badge } from "@/components/ui/badge";
import { useContent } from "@/lib/i18n";

import { Section } from "./section";

export function Languages() {
  const { title, items } = useContent().languages;
  return (
    <Section id="languages" title={title}>
      <ul className="flex flex-wrap gap-2">
        {items.map(({ language, proficiency, flag }) => (
          <li key={language}>
            <Badge variant="outline" className="h-auto gap-1.5 px-3 py-1 text-sm">
              <span aria-hidden className="text-base leading-none">
                {flag}
              </span>
              <span className="font-medium">{language}</span>
              <span className="text-muted-foreground">— {proficiency}</span>
            </Badge>
          </li>
        ))}
      </ul>
    </Section>
  );
}
