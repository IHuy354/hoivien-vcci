"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSiteSetting } from "@/hooks/use-site-settings";
import { parse, format } from "date-fns";
import { vi } from "date-fns/locale";

function getTimeLeft(opening_date: string | null) {
  if (!opening_date) {
    const defaultDate = new Date("2025-07-11T08:30:00").getTime();
    const diff = Math.max(0, defaultDate - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  }
  
  const date = parse(opening_date, "dd/MM/yyyy HH:mm", new Date());
  const countdownTarget = date.getTime();
  const diff = Math.max(0, countdownTarget - Date.now());
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
}

export const CountdownSection = () => {
  const opening_date = useSiteSetting('opening_date');
  const [time, setTime] = useState(() => getTimeLeft(opening_date));
  const [mounted, setMounted] = useState(false);
  
  const formattedDate = opening_date 
    ? (() => {
        const date = parse(opening_date, "dd/MM/yyyy HH:mm", new Date());
        return `${format(date, "H'h'mm", { locale: vi })}, ${format(
          date,
          "EEEE 'ngày' d/M/yyyy",
          { locale: vi }
        )}`;
      })()
    : "8h30, Thứ Sáu ngày 11/7/2025";
  
  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setTime(getTimeLeft(opening_date)), 1000);
    return () => clearInterval(id);
  }, [opening_date]);

  const blocks = [
    { val: time.days, label: "Ngày" },
    { val: time.hours, label: "Giờ" },
    { val: time.minutes, label: "Phút" },
    { val: time.seconds, label: "Giây" },
  ];

  if (!mounted) return null;

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#0f172a] relative overflow-hidden border-t border-white/5">
      {/* Premium Cinematic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-[#0f172a] to-[#0f172a]" />
      
      {/* Decorative center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-500/10 rounded-[100%] blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-8 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-500/20 bg-amber-500/10 mb-6 relative">
            <span className="absolute -left-1 w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <span className="absolute -left-1 w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-sm font-semibold text-amber-500 uppercase tracking-[0.2em] ml-2">Đếm Ngược Thời Gian</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Lễ Khai Giảng <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 pb-2 inline-block">Khóa Mới</span>
          </h2>
          <p className="text-xl md:text-2xl text-neutral-400 font-light tracking-wide max-w-2xl mx-auto">
            {formattedDate}
          </p>
        </motion.div>

        {/* Premium Digital Clock Design */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto mb-16">
          {blocks.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="relative group w-32 md:w-44"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-amber-400/20 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative bg-[#1e293b]/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col items-center justify-center shadow-[inset_0_2px_20px_rgba(255,255,255,0.02)] hover:border-amber-500/30 transition-colors duration-500 overflow-hidden">
                
                {/* Glossy top highlight */}
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none" />
                
                {/* The numbers */}
                <div className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/40 mb-2 font-mono tabular-nums group-hover:from-amber-200 group-hover:via-amber-400 group-hover:to-amber-600 transition-all duration-700">
                   <AnimatePresence mode="popLayout">
                     <motion.span
                        key={b.val}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="inline-block"
                     >
                       {String(b.val).padStart(2, "0")}
                     </motion.span>
                   </AnimatePresence>
                </div>
                
                {/* Label */}
                <div className="flex items-center gap-2">
                  <div className="w-4 h-px bg-white/10" />
                  <p className="text-xs md:text-sm font-bold text-neutral-500 uppercase tracking-[0.2em]">{b.label}</p>
                  <div className="w-4 h-px bg-white/10" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Registration CTA inside Countdown section */}
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5, duration: 0.8 }}
        >
          <a
            href="/registration"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/20 transition-all shadow-xl group"
          >
            Đăng Ký Tham Gia Sinh Hoạt Khóa Tiếp Theo
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
              <span className="w-2 h-2 rounded-full bg-white block" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
