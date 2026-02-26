"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import TwitterX from "./TwitterX";
import { infos } from "@/constants";
import Image from "next/image";
import { useState } from "react";
import { ContactModal } from "./contact-modal";
import { ModeToggle } from "./mode-toggle";
import { fadeUp, staggerContainer } from "@/lib/motion";

export function ProfileCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const container = shouldReduceMotion ? {} : staggerContainer;
  const item = shouldReduceMotion ? {} : fadeUp;

  const [firstName, lastName] = infos.fullName.split(" ");

  const socials = [
    {
      href: infos.github,
      label: "GitHub Profile",
      icon: <Github size={14} />,
      external: true,
    },
    {
      href: infos.linkedin,
      label: "LinkedIn Profile",
      icon: <Linkedin size={14} />,
      external: true,
    },
    {
      href: infos.x,
      label: "X (Twitter) Profile",
      icon: <TwitterX className="h-[12px] w-[12px] fill-current" />,
      external: true,
    },
    {
      href: `mailto:${infos.mail}`,
      label: "Send Email",
      icon: <Mail size={14} />,
      external: false,
    },
  ];

  return (
    <>
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="overflow-hidden rounded-xl border border-border bg-card"
        style={{
          boxShadow:
            "0 1px 3px rgba(0,0,0,0.12), 0 12px 48px -16px rgba(0,0,0,0.35)",
        }}
      >
        {/* Acid top stripe — animates in */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="h-[2px] origin-left"
          style={{
            background:
              "linear-gradient(90deg, hsl(var(--acid)), hsl(var(--acid) / 0))",
          }}
        />

        <div className="space-y-5 p-6">
          {/* Avatar + availability row */}
          <motion.div variants={item} className="flex items-start gap-4">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div
                className="relative h-16 w-16 overflow-hidden rounded-lg"
                style={{
                  boxShadow: "0 0 0 2px hsl(var(--acid) / 0.4)",
                }}
              >
                <Image
                  alt="Said Mounaim"
                  src={infos.avatar}
                  fill
                  className="object-cover"
                  priority
                  sizes="64px"
                />
              </div>
            </div>

            {/* Availability badge */}
            <div className="flex flex-col gap-1.5 pt-0.5">
              <div
                className="inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-0.5"
                style={{
                  background: "hsl(142 72% 50% / 0.1)",
                  border: "1px solid hsl(142 72% 50% / 0.25)",
                }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                <span
                  className="font-code text-[10px] font-semibold uppercase tracking-widest dark:text-emerald-400"
                  style={{ color: "hsl(142 60% 36%)" }}
                >
                  Available
                </span>
              </div>
              <p
                className="font-code text-[10px] uppercase tracking-[0.18em]"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                Open to work
              </p>
            </div>
          </motion.div>

          {/* Name — Unbounded editorial bold treatment */}
          <motion.div variants={item}>
            <h1 className="font-display text-[2.7rem] font-extrabold leading-[0.88] tracking-tighter text-foreground">
              <span className="block">{firstName}</span>
              <span className="block" style={{ color: "hsl(var(--acid))" }}>
                {lastName}
              </span>
            </h1>
            <p
              className="mt-3 font-code text-[10px] uppercase tracking-[0.2em]"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              {infos.status}
            </p>
          </motion.div>

          {/* Short bio */}
          <motion.p
            variants={item}
            className="text-sm leading-relaxed text-muted-foreground"
          >
            {infos.shortBio}
          </motion.p>

          {/* Divider */}
          <motion.div variants={item}>
            <div
              className="h-px w-full"
              style={{
                background:
                  "linear-gradient(90deg, hsl(var(--acid) / 0.35), transparent)",
              }}
            />
          </motion.div>

          {/* Contact CTA */}
          <motion.div variants={item}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="group relative w-full overflow-hidden rounded-lg px-4 py-2.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              style={{
                background: "hsl(var(--acid))",
                color: "hsl(var(--background))",
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 font-display text-[11px] font-semibold uppercase tracking-[0.06em]">
                Contact Me
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </span>
              {/* Shimmer sweep */}
              <span className="absolute inset-0 -translate-x-full skew-x-12 bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            </button>
          </motion.div>

          {/* Social links */}
          <motion.div variants={item} className="flex items-center gap-0.5">
            {socials.map(({ href, label, icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all duration-200 hover:bg-secondary hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {icon}
              </a>
            ))}
          </motion.div>

          {/* Theme toggle — desktop only */}
          <motion.div
            variants={item}
            className="hidden items-center justify-between md:flex"
          >
            <span
              className="font-code text-[10px] uppercase tracking-[0.18em]"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              Theme
            </span>
            <ModeToggle />
          </motion.div>
        </div>
      </motion.div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
