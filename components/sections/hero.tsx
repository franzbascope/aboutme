import Image from "next/image";

import { SocialLinks } from "./social-links";

/**
 * Intro / hero: headshot + name + tagline + conversational bio + socials.
 * Bio adapted from the LinkedIn "About" summary in docs/overview.md, kept in
 * a friendlier, retro-personal voice (per the cassidoo.co reference).
 */
export function Hero() {
  return (
    <section id="top" className="scroll-mt-20 py-12">
      <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
        <Image
          src="/images/headshot.jpg"
          alt="Headshot of Franz Bascope"
          width={160}
          height={160}
          priority
          className="size-40 shrink-0 rounded-lg border border-border object-cover shadow-sm"
        />
        <div className="flex flex-col items-center gap-4 text-center sm:items-start sm:text-left">
          <div>
            <p className="text-sm text-muted-foreground">Hi, I&apos;m</p>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Franz Bascope
            </h1>
            <p className="mt-1 text-base text-muted-foreground">
              Full-stack developer — Java/Spring &amp; React/Angular, lately
              poking at AI &amp; NLP.
            </p>
          </div>
          <div className="max-w-prose space-y-3 text-sm leading-relaxed text-foreground/90">
            <p>
              I build things end to end — Java/Spring on the back, React or
              Angular up front — and I&apos;ve spent 6+ years shipping in
              fintech and global-finance shops. Recently I&apos;ve been pulled
              toward AI, especially natural language processing, and figuring
              out how to put it into real products.
            </p>
            <p>
              I wrapped up a Master&apos;s while working full-time, which mostly
              taught me how to stay calm and deliver when there&apos;s not
              enough time for any of it.
            </p>
          </div>
          <SocialLinks className="-ml-2" />
        </div>
      </div>
    </section>
  );
}
