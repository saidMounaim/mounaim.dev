"use client";

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ─── Custom Cursor ────────────────────────────────────────────── */
function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let mx = 0, my = 0;
    let rx = 0, ry = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!visible) setVisible(true);
    };

    const onLeave  = () => setVisible(false);
    const onEnter  = () => setVisible(true);

    const tick = () => {
      rx += (mx - rx) * 0.11;
      ry += (my - ry) * 0.11;

      if (dotRef.current) {
        dotRef.current.style.transform  = `translate(${mx - 4}px, ${my - 4}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx - 20}px, ${ry - 20}px)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove",  onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove",  onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      cancelAnimationFrame(rafId);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed z-[9999] hidden lg:block"
        style={{
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "hsl(var(--acid))",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.25s ease",
          willChange: "transform",
          mixBlendMode: "difference",
        }}
      />
      {/* Lagging ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed z-[9998] hidden lg:block"
        style={{
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "1px solid hsl(var(--acid) / 0.45)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.25s ease",
          willChange: "transform",
        }}
      />
    </>
  );
}

/* ─── Background Shapes ─────────────────────────────────────────── */
export function BackgroundShapes() {
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 1200], [0, -220]);
  const y2 = useTransform(scrollY, [0, 1200], [0, -100]);
  const y3 = useTransform(scrollY, [0, 1200], [0, -310]);

  return (
    <>
      <CustomCursor />

      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        {/* Acid orb — top left */}
        <motion.div
          style={{
            y: y1,
            background:
              "radial-gradient(circle, hsl(76 100% 63% / 0.14) 0%, transparent 65%)",
            filter: "blur(100px)",
          }}
          className="absolute -left-[12%] -top-[10%] h-[700px] w-[700px] animate-blob rounded-full"
        />

        {/* Violet orb — right */}
        <motion.div
          style={{
            y: y2,
            background:
              "radial-gradient(circle, hsl(270 55% 55% / 0.09) 0%, transparent 65%)",
            filter: "blur(110px)",
          }}
          className="absolute -right-[6%] top-[20%] h-[560px] w-[560px] animate-blob rounded-full animation-delay-2000"
        />

        {/* Acid orb — bottom */}
        <motion.div
          style={{
            y: y3,
            background:
              "radial-gradient(circle, hsl(76 100% 63% / 0.07) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
          className="absolute bottom-[5%] left-[28%] h-[420px] w-[420px] animate-blob rounded-full animation-delay-4000"
        />

        {/* Fine line grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--foreground) / 0.028) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--foreground) / 0.028) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />
      </div>
    </>
  );
}
