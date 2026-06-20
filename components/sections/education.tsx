"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useContent } from "@/lib/i18n";

import { Section } from "./section";

export function Education() {
  const { title, items } = useContent().education;
  return (
    <Section id="education" title={title}>
      <div className="grid gap-4">
        {items.map((item, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle className="flex flex-wrap items-baseline justify-between gap-x-3">
                <span>
                  {item.credential}{" "}
                  <span className="text-muted-foreground">
                    @ {item.school}
                  </span>
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {item.period}
                </span>
              </CardTitle>
              {item.note ? (
                <CardDescription>{item.note}</CardDescription>
              ) : null}
            </CardHeader>
          </Card>
        ))}
      </div>
    </Section>
  );
}
