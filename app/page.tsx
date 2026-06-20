import { Separator } from "@/components/ui/separator";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Hobbies } from "@/components/sections/hobbies";
import { Languages } from "@/components/sections/languages";
import { Projects } from "@/components/sections/projects";
import { SiteHeader } from "@/components/sections/site-header";
import { SocialLinks } from "@/components/sections/social-links";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4">
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Languages />
        <Hobbies />
      </main>
      <footer className="mx-auto w-full max-w-3xl px-4 py-10">
        <Separator className="mb-6" />
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground sm:flex-row">
          <p className="font-mono">
            © {new Date().getFullYear()} Franz Bascope — handcrafted by a human,
            vibe-coded with Claude 🤖
          </p>
          <SocialLinks className="-mr-2" />
        </div>
      </footer>
    </>
  );
}
