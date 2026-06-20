"use client";

import Image from "next/image";

import { useContent } from "@/lib/i18n";

import { SocialLinks } from "./social-links";

/**
 * Intro / hero: headshot + name + tagline + conversational bio + socials.
 * Bio adapted from the LinkedIn "About" summary in docs/overview.md, kept in
 * a friendlier, retro-personal voice (per the cassidoo.co reference).
 */
export function Hero() {
  const { greeting, name, tagline, headshotAlt, bio } = useContent().hero;
  return (
    <section id="top" className="scroll-mt-20 py-12">
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
        <Image
          src="/images/headshot.jpg"
          alt={headshotAlt}
          width={160}
          height={160}
          priority
          className="size-40 shrink-0 rounded-lg border border-border object-cover shadow-sm"
        />
        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <div>
            <p className="text-sm text-muted-foreground">{greeting}</p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {name}
            </h1>
            <p className="mt-1 text-base text-muted-foreground">{tagline}</p>
          </div>
          <div className="max-w-prose space-y-3 text-base leading-relaxed text-foreground/90">
            {bio.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <SocialLinks className="-ml-2" />
        </div>
      </div>
    </section>
  );
}
