"use client";

import { motion } from "framer-motion";
import { useGetApiV10PublicSpeakers } from "@/api/endpoints/public";
import baseConfig from "@/configs/base";
import { Loader2, Linkedin, Quote } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PersonCard = ({ person, i, type }: { person: any; i: number, type: 'advisor' | 'director' }) => {
  const isAdvisor = type === 'advisor';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      className="group relative"
    >
      <div className={`absolute inset-0 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 ${isAdvisor ? 'bg-amber-500/10' : 'bg-emerald-500/10'}`} />

      <div className="h-full bg-white/[0.02] backdrop-blur-2xl border border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col items-center text-center shadow-2xl hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 relative overflow-hidden">
        
        {/* Subtle decorative quotation mark */}
        <Quote className="absolute top-6 left-6 w-12 h-12 text-white/[0.03] rotate-180 pointer-events-none" />

        {/* Avatar Frame - sophisticated metallic ring */}
        <div className="relative w-36 h-36 mb-8 mt-4">
          <div className={`absolute inset-0 rounded-full blur-xl pointer-events-none group-hover:scale-110 transition-transform duration-700 ${isAdvisor ? 'bg-gradient-to-br from-amber-400/30 to-yellow-600/10' : 'bg-gradient-to-br from-emerald-400/30 to-teal-600/10'}`} />
          <div className={`absolute inset-0 rounded-full border group-hover:rotate-12 transition-all duration-700 scale-[1.05] ${isAdvisor ? 'border-amber-400/20 group-hover:border-amber-400/50' : 'border-emerald-400/20 group-hover:border-emerald-400/50'}`} />
          
          <div className="w-full h-full rounded-full overflow-hidden relative z-10 bg-[#0f172a] border-[4px] border-[#1e293b] shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={person.avatar?.path ? `${baseConfig.imageDomain}/${person.avatar.path}` : ""} 
              alt={person.full_name || "Person"} 
              className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-[1.02] group-hover:scale-110" 
              loading="lazy" 
            />
          </div>
          
          <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-[#0e76a8] border-4 border-[#1e293b] flex items-center justify-center z-20 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 shadow-lg">
            <Linkedin className="w-4 h-4 text-white" fill="currentColor" />
          </div>
        </div>

        <div className="relative z-20 w-fit mx-auto mb-4">
          <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)] ${isAdvisor ? 'bg-amber-500 text-[#0f172a]' : 'bg-emerald-500 text-[#0f172a]'}`}>
            {person.position}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors duration-300 px-2">{person.full_name}</h3>
        
        <p className={`text-xs font-bold uppercase tracking-wider mb-3 ${isAdvisor ? 'text-amber-400/80' : 'text-emerald-400/80'}`}>
          {person.company ? person.company.split('•')[0].trim() : ''}
        </p>
        
        {person.company && person.company.includes('•') && (
          <p className="text-sm text-neutral-400 leading-relaxed font-light opacity-80 group-hover:opacity-100 transition-opacity">
            {person.company.split('•')[1].trim()}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export const AdvisorsSection = () => {
  const { data: advisorsData, isLoading: advisorsLoading } = useGetApiV10PublicSpeakers({
    type: 'advisor',
  });
  
  const { data: directorsData, isLoading: directorsLoading } = useGetApiV10PublicSpeakers({
    type: 'director',
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const advisorsList = (advisorsData as any)?.responseData?.rows || [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const directorsList = (directorsData as any)?.responseData?.rows || [];

  const isLoading = advisorsLoading || directorsLoading;

  return (
    <section id="advisory" className="py-16 sm:py-20 md:py-28 bg-[#0f172a] relative overflow-hidden">
      {/* Premium Background Geometry */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b] via-[#0f172a] to-[#1e293b] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="text-center mb-24 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-6">
            <span className="text-sm font-semibold text-emerald-400 uppercase tracking-[0.2em]">Hội đồng chuyên môn</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
            Ban Cố Vấn & Ban Chủ Nhiệm
          </h2>
          <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto font-light">
            Những nhà lãnh đạo tận tâm định hướng chất lượng chương trình
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center py-16 md:py-24">
            <Loader2 className="w-8 h-8 animate-spin text-emerald-400" />
          </div>
        ) : (
          <div className="space-y-24">
            {/* Ban Cố Vấn */}
            {advisorsList.length > 0 && (
              <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-10"
                  >
                    <h3 className="text-2xl font-bold text-white tracking-tight">Ban Cố Vấn</h3>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-amber-500/50 to-transparent" />
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {advisorsList.map((p: any, i: number) => <PersonCard key={p.id || i} person={p} i={i} type="advisor" />)}
                  </div>
              </div>
            )}

            {/* Ban Chủ Nhiệm */}
            {directorsList.length > 0 && (
              <div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 mb-10"
                  >
                    <h3 className="text-2xl font-bold text-white tracking-tight">Ban Chủ Nhiệm</h3>
                    <div className="h-[1px] flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent" />
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {directorsList.map((p: any, i: number) => <PersonCard key={p.id || i} person={p} i={i} type="director" />)}
                  </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
