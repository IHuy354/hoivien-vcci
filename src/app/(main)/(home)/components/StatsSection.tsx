"use client";
import { useSiteSetting } from "@/hooks/use-site-settings";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

function useCountUp(target: number, duration = 2500, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      // Easing function for smoother slowing down at the end
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const StatItem = ({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(value, 2500, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className="relative flex flex-col items-center p-8 group"
    >
      {/* Subtle hover background glow */}
      <div className="absolute inset-0 bg-white/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="relative z-10 font-bold mb-3 flex items-baseline">
        <span className="text-6xl md:text-7xl lg:text-[5.5rem] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40 group-hover:from-amber-200 group-hover:via-amber-400 group-hover:to-amber-700 transition-all duration-700">
          {count.toLocaleString()}
        </span>
        <span className="text-3xl sm:text-4xl md:text-5xl text-amber-500/80 font-medium ml-1">
          {suffix}
        </span>
      </div>
      
      <div className="relative z-10 flex items-center gap-3">
        <div className="h-[1px] w-6 bg-amber-500/50" />
        <p className="text-sm md:text-base text-white/60 font-medium tracking-widest uppercase">{label}</p>
        <div className="h-[1px] w-6 bg-amber-500/50" />
      </div>
    </motion.div>
  );
};

export const StatsSection = () => {
  const counter_ceos = useSiteSetting('counter_ceos');
  const counter_cohorts = useSiteSetting('counter_cohorts');
  const counter_months = useSiteSetting('counter_months');
  const counter_community = useSiteSetting('counter_community');
  
  const stats = [
    { value: Number(counter_cohorts) || 12, suffix: "", label: "Niên khóa" },
    { value: Number(counter_ceos) || 500, suffix: "+", label: "CEO tham gia" },
    { value: Number(counter_months) || 6, suffix: "", label: "Tháng đào tạo" },
    { value: Number(counter_community) || 1000, suffix: "+", label: "Cộng đồng" },
  ];
  
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  
  return (
    <section ref={containerRef} className="py-16 sm:py-20 md:py-28 bg-[#0f172a] relative overflow-hidden">
      {/* Dark premium backdrop with subtle lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />
      
      {/* Decorative center glow */}
      <motion.div style={{ y }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-500/10 rounded-[100%] blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((s, i) => (
            <StatItem key={i} {...s} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};
