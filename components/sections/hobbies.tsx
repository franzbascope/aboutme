import { content } from "@/content/content";

import { Section } from "./section";

const { title, description, items } = content.hobbies;

export function Hobbies() {
  return (
    <Section id="hobbies" title={title} description={description}>
      <div className="grid gap-4 sm:grid-cols-3">
        {items.map((hobby) => (
          <div
            key={hobby.title}
            className="flex flex-col items-center gap-2 rounded-xl bg-card p-6 text-center ring-1 ring-foreground/10"
          >
            <div className="flex size-12 items-center justify-center rounded-lg bg-muted text-2xl">
              <span role="img" aria-label={hobby.title}>
                {hobby.emoji}
              </span>
            </div>
            <p className="font-medium">{hobby.title}</p>
            <p className="text-sm text-muted-foreground">{hobby.blurb}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
