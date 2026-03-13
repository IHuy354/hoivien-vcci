/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGetApiV10PublicSpeakers } from "@/api/endpoints/public";
import baseConfig from "@/configs/base";
import { Loader2, Plus, ArrowUpRight } from "lucide-react";

export const InstructorsSection = () => {
  const { data, isLoading } = useGetApiV10PublicSpeakers({
    type: 'instructor',
  });
  const [visibleCount, setVisibleCount] = useState(8);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const instructorsData = data as any;
  const instructorsList = instructorsData?.responseData?.rows || [];
  const visibleInstructors = instructorsList.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-[#1e293b] relative overflow-hidden border-t border-white/5">
      {/* Abstract Gradient Mesh */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="text-center mb-20 md:mb-24 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/20 bg-purple-500/5 mb-6">
             <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
             <span className="text-sm font-semibold text-purple-400 uppercase tracking-[0.2em] relative top-px">Ban Giảng Huấn</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl leading-tight">
            Đội Ngũ Giảng Viên<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-200">Kinh Nghiệm Thực Chiến</span>
          </h2>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center py-16 md:py-24">
            <Loader2 className="w-8 h-8 animate-spin text-purple-400" />
          </div>
        ) : (
          <>
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              <AnimatePresence>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {visibleInstructors.map((inst: any, i: number) => (
                  <motion.div
                    key={inst.id || i}
                    layout 
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: (i % 8) * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-purple-500/10 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

                    <div className="h-full bg-white/[0.02] backdrop-blur-2xl border border-white/5 rounded-[2rem] p-8 text-center flex flex-col items-center shadow-2xl hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 overflow-hidden relative">
                      
                      <div className="relative w-32 h-32 mb-6">
                        <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-purple-500/20 to-transparent rounded-full blur-md" />
                        
                        <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative z-10 bg-slate-900 shadow-2xl group-hover:-translate-y-2 transition-transform duration-500 border border-white/10 group-hover:border-purple-500/50">
                          <img 
                            src={inst.avatar?.path ? `${baseConfig.imageDomain}/${inst.avatar.path}` : ""} 
                            alt={inst.full_name || "Instructor"} 
                            className="w-full h-full object-cover transition-all duration-700 scale-105 group-hover:scale-110" 
                            loading="lazy" 
                          />
                        </div>

                        {/* Hover badge indicator */}
                        <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                          <ArrowUpRight className="w-4 h-4 text-purple-400" />
                        </div>
                      </div>

                      <div className="flex-1 flex flex-col justify-center w-full">
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-500 mb-2 truncate px-2">{inst.position}</p>
                        <h3 className="text-xl font-bold text-white leading-tight mb-2 group-hover:text-purple-300 transition-colors duration-300 px-2">{inst.full_name}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {visibleCount < instructorsList.length && (
              <div className="mt-16 flex justify-center z-10 relative">
                <button
                  onClick={handleLoadMore}
                  className="group flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.02)]"
                >
                  <Plus className="w-5 h-5 text-purple-400 group-hover:rotate-90 transition-transform duration-500" />
                  Hiển Thị Thêm Giảng Viên
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
