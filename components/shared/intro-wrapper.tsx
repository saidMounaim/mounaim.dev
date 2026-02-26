"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PageLoader } from "./page-loader";

export function IntroWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Skip intro on back-navigation within the same session
    if (sessionStorage.getItem("intro_shown")) {
      setLoading(false);
      setShowContent(true);
      return;
    }

    const t = setTimeout(() => {
      setLoading(false);
      sessionStorage.setItem("intro_shown", "1");
    }, 1600);

    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <AnimatePresence onExitComplete={() => setShowContent(true)}>
        {loading && <PageLoader />}
      </AnimatePresence>

      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
