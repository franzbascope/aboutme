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
          <div className="max-w-prose space-y-3 text-base leading-relaxed text-foreground/90">
            <p>
              Full-stack dev who talks to both ends of the stack — Java/Spring in
              the back, React/Angular up front. Started in QA breaking other
              people&apos;s code, then figured I&apos;d build my own and somehow
              ended up at a global bank.
            </p>
            <p>
              Lately I&apos;ve been teaching machines to read with AI &amp; NLP,
              and I earned a Master&apos;s while working full-time — mostly a
              crash course in functioning on very little sleep. ☕
            </p>
          </div>
          <SocialLinks className="-ml-2" />
        </div>
      </div>
    </section>
  );
}
