"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skills } from "@/constants";
import { fadeUp, staggerContainer, viewport } from "@/lib/motion";

/* ─── Flatten skills for marquee ─────────────────────────────── */
const allSkills = skills.flatMap((cat) =>
  cat.items.map((item) => ({ name: item, category: cat.name })),
);
const doubled = [...allSkills, ...allSkills];

/* ─── Marquee row ─────────────────────────────────────────────── */
function SkillMarquee({ reverse = false }: { reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden py-2">
      <div
        className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16"
        style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }}
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16"
        style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }}
      />

      <div
        className={reverse ? "animate-marquee-rev flex gap-2.5" : "animate-marquee flex gap-2.5"}
        style={{ width: "max-content" }}
      >
        {doubled.map((skill, i) => (
          <span
            key={i}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-1.5"
            style={{
              borderColor: "hsl(var(--border))",
              background: "hsl(var(--card))",
              color: "hsl(var(--muted-foreground))",
              fontFamily: "'JetBrains Mono', var(--font-geist-mono), monospace",
              fontSize: "11px",
              whiteSpace: "nowrap",
            }}
          >
            <span
              className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
              style={{ background: "hsl(var(--acid) / 0.8)" }}
            />
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────── */
export function SkillsSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVars = shouldReduceMotion ? {} : staggerContainer;
  const itemVars      = shouldReduceMotion ? {} : fadeUp;

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
            02
          </span>
          <div
            className="h-px w-10"
            style={{ background: "hsl(var(--acid) / 0.4)" }}
          />
          <span
            className="font-code text-[11px] font-medium uppercase tracking-[0.22em]"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Skills
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
                      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 },
                    },
                  }
            }
            className="font-display text-3xl font-bold tracking-tight text-foreground"
          >
            Skills &amp; Technologies
          </motion.h2>
        </div>
      </motion.div>

      {/* Category cards */}
      <motion.div variants={containerVars} className="grid gap-4 md:grid-cols-2">
        {skills.map((category, catIndex) => (
          <motion.div
            key={category.name}
            variants={itemVars}
            className="group relative overflow-hidden rounded-xl border border-border bg-card p-5"
            style={{
              boxShadow: "0 1px 3px rgba(0,0,0,0.05), 0 4px 20px -8px rgba(0,0,0,0.1)",
            }}
          >
            {/* Acid left border */}
            <motion.div
              className="absolute left-0 top-0 h-full w-[2px] origin-top"
              style={{ background: "hsl(var(--acid))" }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={viewport}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
                delay: catIndex * 0.08,
              }}
            />

            {/* Hover glow */}
            <div
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ background: "hsl(var(--acid) / 0.03)" }}
            />

            {/* Category header */}
            <h3
              className="mb-4 pl-3 font-code text-[10px] font-semibold uppercase tracking-[0.24em]"
              style={{ color: "hsl(var(--acid))" }}
            >
              {category.name}
            </h3>

            {/* Skill pills */}
            <div className="flex flex-wrap gap-2 pl-3">
              {category.items.map((skill) => (
                <motion.span
                  key={skill}
                  className="cursor-default rounded-md border px-3 py-1 text-xs font-medium transition-colors duration-200"
                  style={{
                    borderColor: "hsl(var(--acid) / 0.25)",
                    color: "hsl(var(--foreground) / 0.8)",
                    background: "hsl(var(--acid) / 0.05)",
                    fontFamily: "'JetBrains Mono', var(--font-geist-mono), monospace",
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          borderColor: "hsl(var(--acid) / 0.65)",
                          backgroundColor: "hsl(var(--acid) / 0.1)",
                          color: "hsl(var(--foreground))",
                        }
                  }
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Marquee tape */}
      <motion.div variants={itemVars} className="space-y-2">
        <SkillMarquee />
        <SkillMarquee reverse />
      </motion.div>
    </motion.div>
  );
}
