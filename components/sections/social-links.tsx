import { Code2, Briefcase, Video } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Public profile links only (safe to publish per docs/overview.md).
// Note: this lucide-react version ships no brand icons, so we use the closest
// semantic glyphs (code/work/video) with accessible labels instead.
const socials = [
  {
    label: "GitHub",
    href: "https://github.com/franzbascope",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/franzbascope",
    icon: Briefcase,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@franzbasco",
    icon: Video,
  },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <nav
      aria-label="Social profiles"
      className={cn("flex items-center gap-1", className)}
    >
      {socials.map(({ label, href, icon: Icon }) => (
        <Button
          key={label}
          variant="ghost"
          size="icon"
          aria-label={label}
          nativeButton={false}
          render={
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Icon />
            </a>
          }
        />
      ))}
    </nav>
  );
}
