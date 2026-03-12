"use client";

import { motion } from "framer-motion";
import { objectives } from "@/mockdata/ceovcci";
import { Target } from "lucide-react";

export const ObjectivesSection = () => {
  return (
    <section id="objectives" className="py-16 sm:py-20 md:py-28 bg-[#1e293b] relative overflow-hidden border-t border-white/5">
      {/* Complex Premium Background Geometry */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-indigo-500/10 via-blue-500/5 to-transparent rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-amber-500/5 via-transparent to-transparent rounded-full blur-[120px] pointer-events-none" />
      
      {/* Subtle Grid texture */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-24 mb-16 lg:mb-20 items-start lg:items-end">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 max-w-2xl text-left"
          >
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 mb-6">
                <Target className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-semibold text-blue-400 uppercase tracking-[0.2em]">Mục Tiêu</span>
              </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Khai Phá Tiềm Năng<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Lãnh Đạo Toàn Diện</span>
            </h2>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
             className="flex-1 lg:pb-4 border-l-2 border-white/10 pl-6 lg:pl-8 text-left"
          >
             <p className="text-lg md:text-xl text-neutral-400 font-light leading-relaxed">
               Chương trình được thiết kế tinh gọn nhưng chuyên sâu, cung cấp khung tri thức quản trị hiện đại và tư duy chiến lược nhạy bén cho các nhà điều hành trong kỷ nguyên số.
             </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((obj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <div className="h-full bg-white/[0.01] border border-white/5 rounded-3xl p-8 hover:bg-white/[0.03] hover:border-white/10 transition-all duration-500 overflow-hidden relative">
                
                {/* Floating animated icon container */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-blue-500/5 flex items-center justify-center mb-8 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] group-hover:scale-110 group-hover:rotate-6 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)] transition-all duration-500 z-10 relative">
                  <obj.icon className="w-7 h-7 text-blue-400" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-4 relative z-10 group-hover:text-blue-200 transition-colors">
                  {obj.title}
                </h3>
                
                <p className="text-neutral-400 text-sm leading-relaxed relative z-10 group-hover:text-neutral-300 transition-colors">
                  {obj.desc}
                </p>

                {/* Number watermark */}
                <div className="absolute right-2 -bottom-6 text-9xl font-black text-white/[0.02] group-hover:text-white/[0.04] transition-colors duration-500 pointer-events-none select-none">
                  0{i + 1}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
