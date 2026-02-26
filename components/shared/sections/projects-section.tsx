"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/constants";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

/* Each project gets a rotating accent color */
const PROJECT_ACCENTS = [
  "hsl(152 60% 44%)",  // emerald
  "hsl(225 72% 62%)",  // indigo
  "hsl(285 60% 58%)",  // purple
  "hsl(180 62% 42%)",  // teal
  "hsl(var(--acid))",  // acid lime
  "hsl(202 82% 52%)",  // sky
  "hsl(342 72% 60%)",  // rose
  "hsl(8 76% 58%)",    // red-orange
];

/* Faster stagger for the cards grid */
const cardContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0 } },
};

export function ProjectsSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVars = shouldReduceMotion ? {} : staggerContainer;
  const itemVars      = shouldReduceMotion ? {} : fadeUp;
  const cardVars      = shouldReduceMotion ? {} : cardContainer;

  return (
    <motion.div
      variants={containerVars}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="space-y-8"
    >
      {/* Section header */}
      <motion.div variants={itemVars} className="space-y-3">
        <div className="flex items-center gap-3">
          <span
            className="font-code text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "hsl(var(--acid))" }}
          >
            03
          </span>
          <div
            className="h-px w-10"
            style={{ background: "hsl(var(--acid) / 0.4)" }}
          />
          <span
            className="font-code text-[11px] font-medium uppercase tracking-[0.22em]"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Work
          </span>
        </div>

        <div className="overflow-hidden">
          <motion.h2
            variants={
              shouldReduceMotion
                ? {}
                : {
                    hidden: { y: "100%" },
                    visible: {
                      y: "0%",
                      transition: {
                        duration: 0.8,
                        ease: [0.16, 1, 0.3, 1],
                        delay: 0.1,
                      },
                    },
                  }
            }
            className="font-display text-3xl font-bold tracking-tight text-foreground"
          >
            Featured Projects
          </motion.h2>
        </div>
      </motion.div>

      {/* Projects list */}
      <motion.div variants={cardVars} className="space-y-3">
        {projects.map((project, index) => {
          const accent = PROJECT_ACCENTS[index % PROJECT_ACCENTS.length];
          const num    = String(index + 1).padStart(2, "0");

          return (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} project`}
              variants={itemVars}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card outline-none focus-visible:ring-2 focus-visible:ring-ring"
              style={{
                boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 4px 20px -8px rgba(0,0,0,0.12)",
              }}
            >
              {/* Accent left border */}
              <motion.div
                className="absolute left-0 top-0 h-full w-[2px] origin-top"
                style={{ background: accent }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={viewport}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.04,
                }}
              />

              {/* Hover: inset glow border */}
              <div
                className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ boxShadow: `inset 0 0 0 1.5px ${accent}` }}
              />

              {/* Hover: background wash */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background: `radial-gradient(ellipse at 0% 50%, ${accent.replace(")", " / 0.07)")} 0%, transparent 70%)`,
                }}
              />

              <div className="relative p-5 pl-7">
                {/* Top row: number + title + arrow */}
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div className="flex items-baseline gap-3">
                    <span
                      className="font-code text-xs font-semibold"
                      style={{ color: accent }}
                    >
                      {num}
                    </span>
                    <h3 className="font-display text-base font-bold leading-snug tracking-tight text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  {/* Arrow — brightens on hover, no translation */}
                  <ArrowUpRight
                    aria-hidden="true"
                    size={16}
                    className="mt-0.5 shrink-0 transition-opacity duration-300 group-hover:opacity-100"
                    style={{ color: accent, opacity: 0.45 }}
                  />
                </div>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5">
                  {project.techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md px-2.5 py-0.5 font-code text-[11px] font-medium"
                      style={{
                        background: `${accent.replace(")", " / 0.09)")}`,
                        color: accent,
                        border: `1px solid ${accent.replace(")", " / 0.28)")}`,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
