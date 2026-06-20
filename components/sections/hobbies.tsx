import { Section } from "./section";

const hobbies: { title: string; emoji: string; blurb: string }[] = [
  {
    title: "Running",
    emoji: "🏃",
    blurb:
      "Running my first half marathon in Buenos Aires this August 23 — 21K and counting down.",
  },
  {
    title: "Gym",
    emoji: "🏋️",
    blurb:
      "Bench press PR: 225 lbs. Deadlift PR: 315 lbs. I'm told these are numbers and not personality traits, but I disagree.",
  },
  {
    title: "Surfing",
    emoji: "🏄",
    blurb:
      "Recently took surfing classes in Natal, Brazil — fully hooked and planning to keep chasing waves.",
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
        {hobbies.map((hobby) => (
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
