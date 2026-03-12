"use client";
import { useSiteSetting } from "@/hooks/use-site-settings";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";


function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

const StatItem = ({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(value, 2000, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <p className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-sm text-gray-500 font-medium">{label}</p>
    </motion.div>
  );
};

export const StatsSection = () => {
  const counter_ceos = useSiteSetting('counter_ceos');
  const counter_cohorts = useSiteSetting('counter_cohorts');
  const counter_months = useSiteSetting('counter_months');
  const counter_community = useSiteSetting('counter_community');
  const stats = [
    { value: Number(counter_cohorts), suffix: "", label: "Niên khóa" },
    { value: Number(counter_ceos) || 500, suffix: "+", label: "CEO tham gia" },
    { value: Number(counter_months), suffix: "", label: "Tháng đào tạo" },
    { value: Number(counter_community), suffix: "+", label: "Cộng đồng CEO VCCI" },
  ];
  
  return (
    <section className="py-16 md:py-20 bg-gray-50/50">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 p-8 md:p-12 text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <StatItem key={i} {...s} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};
