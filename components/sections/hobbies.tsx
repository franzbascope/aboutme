import { Camera, Gamepad2, Music, type LucideIcon } from "lucide-react";

import { Section } from "./section";

// TODO: replace placeholders with real hobbies.
const hobbies: { title: string; icon: LucideIcon; blurb: string }[] = [
  {
    title: "Hobby One",
    icon: Camera,
    blurb: "Placeholder — a line about what you love about it.",
  },
  {
    title: "Hobby Two",
    icon: Music,
    blurb: "Placeholder — a line about this interest.",
  },
  {
    title: "Hobby Three",
    icon: Gamepad2,
    blurb: "Placeholder — a line about this interest.",
  },
];

export function Hobbies() {
  return (
    <Section
      id="hobbies"
      title="Hobbies"
      description="What I get up to away from the keyboard."
    >
      <div className="grid gap-4 sm:grid-cols-3">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon;
          return (
            <div
              key={hobby.title}
              className="flex flex-col items-center gap-2 rounded-xl bg-card p-6 text-center ring-1 ring-foreground/10"
            >
              <div className="flex size-12 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                <Icon className="size-6" />
              </div>
              <p className="font-medium">{hobby.title}</p>
              <p className="text-sm text-muted-foreground">{hobby.blurb}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
