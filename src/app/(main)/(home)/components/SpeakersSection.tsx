/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGetApiV10PublicSpeakers } from "@/api/endpoints/public";
import baseConfig from "@/configs/base";
import { Loader2, Plus, Linkedin } from "lucide-react";

export const SpeakersSection = () => {
  const { data, isLoading } = useGetApiV10PublicSpeakers({
    type: 'speaker',
  });
  const [visibleCount, setVisibleCount] = useState(8);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const speakersData = data as any;
  const speakersList = speakersData?.responseData?.rows || [];
  const visibleSpeakers = speakersList.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <section id="speakers" className="py-16 sm:py-20 md:py-28 bg-[#0f172a] relative overflow-hidden border-t border-white/5">
      {/* Dynamic Network Background */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "64px 64px"
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-indigo-500/10 rounded-[100%] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="text-center mb-20 md:mb-24 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            <span className="text-sm font-semibold text-indigo-400 uppercase tracking-[0.2em] relative top-px">Diễn giả chuyên môn</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl leading-tight">
            Chuyên Gia Thực Chiến<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-400 to-neutral-200">Đồng Hành Phát Triển</span>
          </h2>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center py-16 md:py-24">
            <Loader2 className="w-8 h-8 animate-spin text-indigo-400" />
          </div>
        ) : (
          <>
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
              <AnimatePresence>
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {visibleSpeakers.map((s: any, i: number) => (
                  <motion.div
                    key={s.id || i}
                    layout // Ensure layout animations work
                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ delay: (i % 8) * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    viewport={{ once: true }}
                    className="group relative"
                  >
                    {/* Glow backdrop on hover */}
                    <div className="absolute inset-0 bg-indigo-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />

                    <div className="h-full bg-[#1e293b]/80 backdrop-blur-xl border border-white/5 rounded-3xl p-8 text-center flex flex-col items-center shadow-2xl hover:bg-[#1e293b] hover:border-white/10 transition-all duration-500 overflow-hidden relative">
                      
                      {/* Avatar Frame - sophisticated metallic ring */}
                      <div className="relative w-32 h-32 mb-6 shadow-2xl">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-400/30 to-purple-500/10 blur-md pointer-events-none group-hover:scale-110 transition-transform duration-700" />
                        <div className="absolute inset-0 rounded-full border border-indigo-400/20 group-hover:border-indigo-400/50 group-hover:rotate-12 transition-all duration-700 scale-105" />
                        
                        <div className="w-full h-full rounded-full overflow-hidden relative z-10 bg-slate-900 border-[3px] border-[#1e293b]">
                          <img 
                            src={s.avatar?.path ? `${baseConfig.imageDomain}/${s.avatar.path}` : ""} 
                            alt={s.full_name || "Speaker"} 
                            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-[1.02] group-hover:scale-110" 
                            loading="lazy" 
                          />
                        </div>
                        
                        {/* Fake LinkedIn badge */}
                        <div className="absolute bottom-0 right-0 w-8 h-8 rounded-full bg-[#0e76a8] border-2 border-[#1e293b] flex items-center justify-center z-20 group-hover:scale-110 transition-transform duration-300">
                          <Linkedin className="w-3.5 h-3.5 text-white" fill="currentColor" />
                        </div>
                      </div>

                      <div className="flex-1 flex flex-col justify-center w-full">
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-indigo-400 mb-2 truncate px-2">{s.position}</p>
                        <h3 className="text-xl font-bold text-white leading-tight mb-2 group-hover:text-amber-300 transition-colors duration-300 px-2">{s.full_name}</h3>
                        <p className="text-xs text-neutral-400 font-medium px-4 opacity-80 group-hover:opacity-100 transition-opacity whitespace-pre-wrap">{s.company}</p>
                      </div>

                      {/* Premium divider bottom */}
                      <div className="absolute bottom-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {visibleCount < speakersList.length && (
              <div className="mt-16 flex justify-center z-10 relative">
                <button
                  onClick={handleLoadMore}
                  className="group flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.02)]"
                >
                  <Plus className="w-5 h-5 text-indigo-400 group-hover:rotate-90 transition-transform duration-500" />
                  Hiển Thị Thêm Chuyên Gia
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
