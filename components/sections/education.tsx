import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { content } from "@/content/content";

import { Section } from "./section";

const { title, items } = content.education;

export function Education() {
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
