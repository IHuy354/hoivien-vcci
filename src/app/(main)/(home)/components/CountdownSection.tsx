"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useSiteSetting } from "@/hooks/use-site-settings";
import { parse, format } from "date-fns";
import { vi } from "date-fns/locale";

function getTimeLeft(opening_date: string | null) {
  if (!opening_date) {
    // Default fallback date if no opening_date is set
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
    <section className="py-20 md:py-28 bg-[#0A192F] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/50 to-[#0A192F]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-yellow-500/5 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-yellow-500 text-sm font-semibold uppercase tracking-widest mb-3">Đếm ngược</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-10">
            Ngày Khai Giảng Khóa Học CEO
          </h2>
        </motion.div>

        <div className="grid grid-cols-4 gap-3 md:gap-6 max-w-lg mx-auto mb-8">
          {blocks.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#112240]/80 border border-[#233554] rounded-2xl p-4 md:p-6 shadow-xl backdrop-blur-md"
            >
              <p className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-yellow-600 bg-clip-text text-transparent">
                {String(b.val).padStart(2, "0")}
              </p>
              <p className="text-xs md:text-sm text-white/50 mt-2 font-medium uppercase tracking-wider">{b.label}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-white/60 text-sm md:text-base font-medium">({formattedDate})</p>
      </div>
    </section>
  );
};
