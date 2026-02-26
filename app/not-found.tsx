"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BackgroundShapes } from "@/components/shared/background-shapes";
import { ease } from "@/lib/motion";

export default function NotFound() {
  return (
    <>
      <BackgroundShapes />

      {/* Grain texture */}
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

      <main className="relative z-20 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: ease.expo, delay: 0.1 }}
          className="mb-6 flex items-center gap-3"
        >
          <span
            className="font-code text-[11px] font-semibold uppercase tracking-[0.22em]"
            style={{ color: "hsl(var(--acid))" }}
          >
            404
          </span>
          <div className="h-px w-10" style={{ background: "hsl(var(--acid) / 0.4)" }} />
          <span
            className="font-code text-[11px] font-medium uppercase tracking-[0.22em]"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            Not Found
          </span>
        </motion.div>

        {/* Big 404 */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.85, ease: ease.expo, delay: 0.18 }}
            className="font-display text-[8rem] font-extrabold leading-none tracking-tighter sm:text-[11rem]"
            style={{ color: "hsl(var(--acid))" }}
          >
            404
          </motion.h1>
        </div>

        {/* Title */}
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.75, ease: ease.expo, delay: 0.28 }}
            className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl"
          >
            Page Not Found
          </motion.p>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: ease.expo, delay: 0.42 }}
          className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground"
        >
          The page you're looking for doesn't exist or has been moved.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: ease.expo, delay: 0.54 }}
          className="mt-8"
        >
          <Link
            href="/"
            className="group relative inline-flex overflow-hidden rounded-lg px-6 py-2.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            style={{
              background: "hsl(var(--acid))",
              color: "hsl(var(--background))",
            }}
          >
            <span className="relative z-10 flex items-center gap-2 font-display text-[11px] font-semibold uppercase tracking-[0.06em]">
              Back to Home
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
            {/* Shimmer sweep */}
            <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </Link>
        </motion.div>

        {/* Acid accent line at bottom */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left"
          style={{ background: "linear-gradient(90deg, hsl(var(--acid)), hsl(var(--acid) / 0))" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: ease.smooth, delay: 0.3 }}
        />
      </main>
    </>
  );
}
