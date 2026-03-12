"use client";

import { ValueProposition } from "@/types/homepage";
import { valuePropositions } from "@/mockdata/ceovcci";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface ValuePropositionSectionProps {
  title?: string;
  subtitle?: string;
  items?: ValueProposition[];
}

const defaultItems: ValueProposition[] = valuePropositions;

export function ValuePropositionSection({ 
  title = "Triết Lý Đào Tạo Khác Biệt",
  subtitle = "Chúng tôi thiết kế một hệ sinh thái học tập toàn diện, nơi tư duy, kỹ năng và mạng lưới quan hệ hội tụ để kiến tạo nên những nhà lãnh đạo kiệt xuất.",
  items = defaultItems 
}: ValuePropositionSectionProps) {
  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#1e293b] relative overflow-hidden border-t border-white/5">
      {/* Dynamic Background */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
        }}
      />
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-blue-500/5 via-indigo-500/5 to-transparent rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="text-center mb-20 md:mb-28 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 mb-6">
            <Star className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-semibold text-indigo-400 uppercase tracking-[0.2em]">Khác Biệt</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl leading-tight mb-6">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-neutral-400 font-light max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Value Propositions Grid - Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item, i) => {
            // Give the middle item a slightly different styling for visual interest
            const isCenter = i % 3 === 1;
            
            return (
              <motion.div
                key={item.id || i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative h-full"
              >
                <div className={`relative h-full border rounded-[2rem] p-8 md:p-10 transition-all duration-500 flex flex-col items-start overflow-hidden ${
                  isCenter 
                    ? 'bg-gradient-to-b from-[#1e293b] to-[#1e293b] border-indigo-500/20 hover:border-indigo-500/40 shadow-[0_0_40px_rgba(99,102,241,0.05)]' 
                    : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04] hover:border-white/10'
                }`}>
                  
                  {/* Decorative glowing orb on hover */}
                  <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${
                    isCenter ? 'bg-indigo-500/20' : 'bg-amber-500/10'
                  }`} />
                  
                  {/* Icon Container */}
                  <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform duration-500 ease-out z-10 ${
                    isCenter 
                      ? 'bg-indigo-500/10 border border-indigo-500/30' 
                      : 'bg-[#0f172a] border border-white/10'
                  }`}>
                    <div className="text-3xl text-white opacity-90 drop-shadow-lg">
                      {item.icon}
                    </div>
                  </div>
                  
                  <h3 className={`text-2xl font-semibold mb-4 tracking-tight z-10 transition-colors duration-300 ${
                    isCenter ? 'text-indigo-100 group-hover:text-white' : 'text-white group-hover:text-amber-200'
                  }`}>
                    {item.title}
                  </h3>
                  
                  <p className="text-base text-neutral-400 leading-relaxed z-10 group-hover:text-neutral-300 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Number watermark */}
                  <div className="absolute right-4 -bottom-4 text-8xl font-black text-white/[0.03] group-hover:text-white/[0.05] transition-colors duration-500 pointer-events-none select-none">
                    0{i + 1}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
