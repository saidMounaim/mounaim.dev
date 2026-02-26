import { BackgroundShapes } from "@/components/shared/background-shapes";
import { ProfileCard } from "@/components/shared/profile-card";
import { AboutSection } from "@/components/shared/sections/about-section";
import { ProjectsSection } from "@/components/shared/sections/projects-section";
import { SkillsSection } from "@/components/shared/sections/skills-section";
import { ModeToggle } from "@/components/shared/mode-toggle";
import { IntroWrapper } from "@/components/shared/intro-wrapper";

export default function Home() {
  return (
    <IntroWrapper>
      <BackgroundShapes />

      {/* Grain texture overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-10"
        style={{
          opacity: "var(--noise-opacity, 0.04)",
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "200px 200px",
        }}
      />

      {/* Mobile theme toggle */}
      <div className="fixed right-4 top-4 z-50 md:hidden">
        <ModeToggle />
      </div>

      <main className="relative z-20 min-h-screen bg-background px-4 py-10 md:px-8 md:py-14 lg:px-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-[320px_1fr] md:gap-12 lg:grid-cols-[340px_1fr]">
            {/* Sidebar */}
            <aside className="md:sticky md:top-14 md:self-start">
              <ProfileCard />
            </aside>

            {/* Main content */}
            <div className="min-w-0 space-y-24">
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
            </div>
          </div>
        </div>
      </main>
    </IntroWrapper>
  );
}
