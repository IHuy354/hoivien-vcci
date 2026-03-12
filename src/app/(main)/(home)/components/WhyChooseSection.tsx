"use client";

import { motion } from "framer-motion";
import { whyChooseFeatures as features } from "@/mockdata/ceovcci";
import { Sparkles } from "lucide-react";

export const WhyChooseSection = () => {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#0f172a] relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-amber-500/5 via-indigo-500/5 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-purple-500/5 via-transparent to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20 md:mb-28 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-amber-500/20 bg-amber-500/10 mb-6">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-semibold text-amber-500 uppercase tracking-[0.2em]">Giá trị cốt lõi</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight">
            Đầu Tư Cho Bản Thân<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-200">Kiến Tạo Tương Lai Lãnh Đạo</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="group relative"
            >
              {/* Premium Card Container */}
              <div className="relative h-full bg-white/[0.02] border border-white/5 shadow-2xl backdrop-blur-3xl rounded-[2rem] p-8 md:p-10 hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 flex flex-col items-start overflow-hidden">
                
                {/* Decorative glowing orb on hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-500/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Icon Container */}
                <div className="relative w-16 h-16 rounded-2xl bg-[#1e293b] border border-white/10 flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 ease-out z-10">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-transparent rounded-2xl" />
                  <f.icon className="w-8 h-8 text-amber-400 drop-shadow-[0_0_10px_rgba(251,191,36,0.5)]" />
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4 tracking-tight z-10 group-hover:text-amber-300 transition-colors duration-300">
                  {f.title}
                </h3>
                
                <p className="text-base text-neutral-400 leading-relaxed z-10 group-hover:text-neutral-300 transition-colors duration-300">
                  {f.desc}
                </p>

                {/* Subtle border gradient line at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-center" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
