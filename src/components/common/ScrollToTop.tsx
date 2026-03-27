"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-8 right-8 z-[60]",
            "w-14 h-14 rounded-2xl bg-primary text-black shadow-2xl shadow-primary/30",
            "flex items-center justify-center transition-all duration-300",
            "border border-white/20 hover:shadow-primary/50"
          )}
          aria-label="Scroll to top"
        >
          <div className="relative">
            <ChevronUp size={28} className="relative z-10" />
            <div className="absolute inset-x-0 bottom-0 h-1 bg-white/30 rounded-full blur-sm" />
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
