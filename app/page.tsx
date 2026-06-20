import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Hobbies } from "@/components/sections/hobbies";
import { Languages } from "@/components/sections/languages";
import { Projects } from "@/components/sections/projects";
import { SiteFooter } from "@/components/sections/site-footer";
import { SiteHeader } from "@/components/sections/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto w-full max-w-3xl flex-1 px-4">
        <Hero />
        <Experience />
        {/* Education sits above Projects — schooling is more relevant than personal projects. */}
        <Education />
        <Projects />
        <Languages />
        <Hobbies />
      </main>
      <SiteFooter />
    </>
  );
}
