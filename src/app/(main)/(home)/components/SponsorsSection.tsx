/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { useGetApiV10PublicSponsors } from "@/api/endpoints/public";
import baseConfig from "@/configs/base";
import { Loader2 } from "lucide-react";

const SponsorLogo = ({ name, img, type }: { name: string; img: string, type: 'gold' | 'silver' }) => (
  <div className={`group/card bg-white/[0.04] backdrop-blur-md rounded-2xl p-6 md:p-8 flex items-center justify-center aspect-[5/3] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border transition-all duration-500 relative overflow-hidden ${
    type === 'gold' 
      ? 'border-amber-500/20 hover:border-amber-500/50 hover:bg-amber-500/10 hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]' 
      : 'border-slate-500/20 hover:border-slate-400/50 hover:bg-slate-500/10 hover:shadow-[0_0_30px_rgba(148,163,184,0.2)]'
  }`}>
    <div className={`absolute inset-0 opacity-0 group-hover/card:opacity-[0.05] transition-opacity duration-500 ${type === 'gold' ? 'bg-amber-400' : 'bg-white'}`} />
    <img 
      src={img} 
      alt={name || "Sponsor Image"} 
      className="w-full h-full object-contain opacity-90 group-hover/card:opacity-100 transition-all duration-500 group-hover/card:scale-110 drop-shadow-md group-hover/card:drop-shadow-lg" 
      loading="lazy" 
    />
  </div>
);

export const SponsorsSection = () => {
  const { data, isLoading } = useGetApiV10PublicSponsors({ grouped: true });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sponsorsData = data as any;

  const mainSponsors = sponsorsData?.responseData?.main || [];
  const goldSponsors = sponsorsData?.responseData?.gold || [];
  const silverSponsors = sponsorsData?.responseData?.silver || [];

  return (
    <section id="sponsors" className="py-16 sm:py-20 md:py-28 bg-[#0f172a] relative overflow-hidden border-t border-white/5">
      {/* Dark premium backdrop with subtle lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      
      {/* Ambient center glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-slate-500/10 rounded-[100%] blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="text-center mb-20 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-500/20 bg-slate-500/10 mb-6">
            <span className="text-sm font-semibold text-slate-400 uppercase tracking-[0.2em]">Đối tác đồng hành</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">Niềm Tự Hào Của CEO VCCI 2026</h2>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center py-16 md:py-24">
            <Loader2 className="w-8 h-8 animate-spin text-slate-400" />
          </div>
        ) : (
          <div className="space-y-20">
            {/* Main sponsor - Diamond Level */}
            {mainSponsors.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 rounded-3xl blur opacity-20 animate-pulse" />
                <div className="relative bg-[#1e293b] rounded-[2rem] p-10 md:p-16 border border-amber-500/30">
                  <div className="flex items-center justify-center gap-4 md:gap-6 mb-12 relative z-20">
                    <div className="h-[2px] w-16 md:w-32 bg-gradient-to-r from-transparent via-amber-500/50 to-amber-200" />
                    <p className="text-center text-base md:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 uppercase tracking-[0.4em] md:tracking-[0.5em] drop-shadow-[0_0_20px_rgba(251,191,36,0.8)] filter brightness-125">
                      Tài Trợ Chính
                    </p>
                    <div className="h-[2px] w-16 md:w-32 bg-gradient-to-l from-transparent via-amber-500/50 to-amber-200" />
                  </div>
                  
                  <div className="flex justify-center gap-8 flex-wrap">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {mainSponsors.map((sponsor: any, idx: number) => (
                      <a key={`main-${idx}`} href={sponsor.website_url || "#"} target="_blank" rel="noopener noreferrer" className="block w-full max-w-sm group">
                        <div className="bg-white rounded-2xl p-8 md:p-12 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_40px_rgba(251,191,36,0.3)] group-hover:scale-[1.02]">
                          <img 
                            src={`${baseConfig.imageDomain}/${sponsor.logo.path}`} 
                            alt={sponsor.name || "Main Sponsor"} 
                            className="w-full h-full aspect-[2/1] object-contain transition-transform duration-500 group-hover:scale-110" 
                          />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Gold Marquee */}
            {goldSponsors.length > 0 && (
              <div className="relative overflow-hidden group">
                <div className="flex justify-center mb-10 relative z-20">
                  <div className="relative inline-flex items-center gap-4 px-8 py-3 bg-gradient-to-r from-amber-500/10 via-amber-500/20 to-amber-500/10 border-y md:border border-amber-500/30 rounded-none md:rounded-full shadow-[0_0_30px_rgba(251,191,36,0.15)] backdrop-blur-md overflow-hidden">
                    <div className="absolute inset-x-0 h-px top-0 bg-gradient-to-r from-transparent via-amber-200 to-transparent opacity-50" />
                    <div className="hidden md:block w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
                    <h3 className="text-center text-lg md:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-500 uppercase tracking-[0.3em] md:tracking-[0.4em] drop-shadow-[0_0_20px_rgba(251,191,36,0.6)]">
                      Tài Trợ Vàng
                    </h3>
                    <div className="hidden md:block w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
                  </div>
                </div>
                
                {/* Gradient blur edges removed per request */}

                <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] items-center">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {[...goldSponsors, ...goldSponsors, ...goldSponsors, ...goldSponsors].map((s: any, i: number) => (
                    <div key={`gold-${s.id}-${i}`} className="w-[50vw] sm:w-[33vw] md:w-[280px] shrink-0 px-2 md:px-4">
                      <SponsorLogo name={s.name} img={s.logo?.path ? `${baseConfig.imageDomain}/${s.logo.path}` : ""} type="gold" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Silver Marquee */}
            {silverSponsors.length > 0 && (
              <div className="relative overflow-hidden group">
                <div className="flex justify-center mb-10 relative z-20 mt-8">
                  <div className="relative inline-flex items-center gap-4 px-8 py-3 bg-gradient-to-r from-slate-500/10 via-slate-500/20 to-slate-500/10 border-y md:border border-slate-500/30 rounded-none md:rounded-full shadow-[0_0_30px_rgba(148,163,184,0.1)] backdrop-blur-md overflow-hidden">
                    <div className="absolute inset-x-0 h-px top-0 bg-gradient-to-r from-transparent via-slate-300 to-transparent opacity-50" />
                    <div className="hidden md:block w-2.5 h-2.5 rounded-full bg-slate-400 animate-pulse shadow-[0_0_10px_rgba(148,163,184,0.8)]" />
                    <h3 className="text-center text-lg md:text-xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-100 to-slate-400 uppercase tracking-[0.3em] md:tracking-[0.4em] drop-shadow-[0_0_20px_rgba(148,163,184,0.6)]">
                      Tài Trợ Bạc
                    </h3>
                    <div className="hidden md:block w-2.5 h-2.5 rounded-full bg-slate-400 animate-pulse shadow-[0_0_10px_rgba(148,163,184,0.8)]" />
                  </div>
                </div>
                
                {/* Gradient blur edges removed per request */}

                <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused] items-center">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {[...silverSponsors, ...silverSponsors, ...silverSponsors, ...silverSponsors, ...silverSponsors, ...silverSponsors].map((s: any, i: number) => (
                    <div key={`silver-${s.id}-${i}`} className="w-[50vw] sm:w-[33vw] md:w-[240px] shrink-0 px-2 md:px-4">
                      <SponsorLogo name={s.name} img={s.logo?.path ? `${baseConfig.imageDomain}/${s.logo.path}` : ""} type="silver" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
