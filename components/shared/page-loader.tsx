"use client";

import { motion } from "framer-motion";
import { ease } from "@/lib/motion";

export function PageLoader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
      exit={{
        y: "-100%",
        transition: { duration: 0.8, ease: ease.expo },
      }}
    >
      {/* Subtle grid — matches main page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground) / 0.028) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground) / 0.028) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Top acid line — fills across */}
      <motion.div
        aria-hidden="true"
        className="absolute left-0 top-0 h-[2px] w-full origin-left"
        style={{ background: "hsl(var(--acid))" }}
        initial={{ scaleX: 0 }}
        animate={{
          scaleX: 1,
          transition: { duration: 1.2, ease: ease.smooth, delay: 0.15 },
        }}
      />

      {/* Name block */}
      <div className="relative flex flex-col items-center gap-1">
        {/* "Said" label */}
        <div className="overflow-hidden">
          <motion.span
            initial={{ y: "110%" }}
            animate={{
              y: "0%",
              transition: { duration: 0.65, ease: ease.expo, delay: 0.1 },
            }}
            className="block font-code text-[10px] uppercase tracking-[0.38em]"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Said
          </motion.span>
        </div>

        {/* "MOUNAIM" display */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "110%" }}
            animate={{
              y: "0%",
              transition: { duration: 0.75, ease: ease.expo, delay: 0.18 },
            }}
            className="font-display text-[3rem] font-extrabold leading-none tracking-tight sm:text-[3.5rem]"
            style={{ color: "hsl(var(--acid))" }}
          >
            MOUNAIM
          </motion.p>
        </div>

        {/* Progress line */}
        <motion.div
          className="mt-6 h-px w-32 origin-left"
          style={{ background: "hsl(var(--acid) / 0.55)" }}
          initial={{ scaleX: 0 }}
          animate={{
            scaleX: 1,
            transition: { duration: 1.0, ease: ease.smooth, delay: 0.45 },
          }}
        />
      </div>
    </motion.div>
  );
}
