"use client";

import { motion, useReducedMotion } from "framer-motion";
import { bio } from "@/constants";
import {
  fadeUp,
  staggerContainer,
  wordReveal,
  wordStagger,
  viewport,
} from "@/lib/motion";

export function AboutSection() {
  const shouldReduceMotion = useReducedMotion();

  const containerVars = shouldReduceMotion ? {} : staggerContainer;
  const itemVars      = shouldReduceMotion ? {} : fadeUp;

  const bioWords = bio.split(" ");

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
            01
          </span>
          <div
            className="h-px w-10"
            style={{ background: "hsl(var(--acid) / 0.4)" }}
          />
          <span
            className="font-code text-[11px] font-medium uppercase tracking-[0.22em]"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            About
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
            About Me
          </motion.h2>
        </div>
      </motion.div>

      {/* Bio card */}
      <motion.div
        variants={itemVars}
        className="relative overflow-hidden rounded-xl border border-border bg-card p-7"
        style={{
          boxShadow: "0 1px 3px rgba(0,0,0,0.06), 0 6px 28px -10px rgba(0,0,0,0.14)",
        }}
      >
        {/* Acid left accent */}
        <motion.div
          className="absolute left-0 top-0 h-full w-[2px] origin-top"
          style={{
            background: "linear-gradient(to bottom, hsl(var(--acid)), hsl(var(--acid) / 0))",
          }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={viewport}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Word-by-word bio reveal */}
        <motion.p
          variants={shouldReduceMotion ? {} : wordStagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="pl-4 text-base leading-[1.9] text-muted-foreground"
        >
          {bioWords.map((word, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom">
              <motion.span
                variants={shouldReduceMotion ? {} : wordReveal}
                className="mr-[0.28em] inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}
