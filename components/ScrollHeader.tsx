"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export function ScrollHeader() {
  const scrollDirection = useScrollDirection(10);
  const scrollY = useScrollPosition();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide header when scrolling down past 100px, show when scrolling up
    if (scrollY < 100) {
      setIsVisible(true);
    } else if (scrollDirection === "down") {
      setIsVisible(false);
    } else if (scrollDirection === "up") {
      setIsVisible(true);
    }
  }, [scrollDirection, scrollY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
        >
          {/* Skip to content link for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white"
          >
            Skip to content
          </a>
          <nav className="flex items-center justify-between px-6 md:px-10 h-16" aria-label="Main navigation">
            <Link
              href="/"
              className="text-sm font-medium tracking-tight hover:opacity-60 transition-opacity duration-150"
            >
              HDGR
            </Link>

            <div className="flex items-center gap-8">
              <Link
                href="/projects"
                className="text-[13px] font-normal hover:opacity-60 transition-opacity duration-150 relative group"
              >
                Projects
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-150 origin-left" />
              </Link>
              <Link
                href="/contact"
                className="text-[13px] font-normal hover:opacity-60 transition-opacity duration-150 relative group"
              >
                Contact
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-150 origin-left" />
              </Link>
            </div>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
