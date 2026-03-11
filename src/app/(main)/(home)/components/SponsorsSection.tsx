/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { useGetApiV10PublicSponsors } from "@/api/endpoints/public";
import baseConfig from "@/configs/base";
import { Loader2 } from "lucide-react";

const SponsorLogo = ({ name, img }: { name: string; img: string }) => (
  <div className="group/card bg-white rounded-2xl p-4 flex items-center justify-center aspect-[3/2] hover:-translate-y-1 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 hover:shadow-md transition-all duration-300">
    <img src={img} alt={name || "Sponsor Image"} className="w-full h-full object-contain opacity-70 group-hover/card:opacity-100 transition-opacity mix-blend-multiply" loading="lazy" />
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
    <section id="sponsors" className="py-20 md:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-md font-semibold text-yellow-500 uppercase tracking-widest mb-3">Đối tác</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-5">Nhà Tài Trợ Đồng Hành 2025</h2>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
          </div>
        ) : (
          <>
            {/* Main sponsor */}
            {mainSponsors.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="mb-14"
              >
                <p className="text-center text-sm font-bold text-gray-600 mb-5 uppercase tracking-wider">Tài Trợ Chính</p>
                <div className="flex justify-center gap-6 flex-wrap">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {mainSponsors.map((sponsor: any, idx: number) => (
                    <a key={`main-${idx}`} href={sponsor.website_url || "#"} target="_blank" rel="noopener noreferrer" className="block w-full max-w-xs transition-all duration-300">
                      <div className="bg-white rounded-3xl p-8 flex items-center justify-center ring-4 ring-yellow-400 hover:shadow-xl w-full h-full aspect-[3/2]">
                        <img 
                          src={`${baseConfig.imageDomain}/${sponsor.logo.path}`} 
                          alt={sponsor.name || "Main Sponsor"} 
                          className="w-full h-full object-contain mix-blend-multiply" 
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Gold */}
            {goldSponsors.length > 0 && (
              <div className="mb-14 relative overflow-hidden group">
                <p className="text-center text-sm font-bold text-gray-600 mb-6 uppercase tracking-wider relative z-10 bg-gray-50/50 inline-block px-4 mx-auto left-1/2 -translate-x-1/2">Tài Trợ Vàng</p>
                
                {/* Gradient blur edges */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

                <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] items-center">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {[...goldSponsors, ...goldSponsors, ...goldSponsors, ...goldSponsors].map((s: any, i: number) => (
                    <div key={`gold-${s.id}-${i}`} className="w-[200px] shrink-0 px-3">
                      <SponsorLogo name={s.name} img={s.logo?.path ? `${baseConfig.imageDomain}/${s.logo.path}` : ""} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Silver */}
            {silverSponsors.length > 0 && (
              <div className="relative overflow-hidden group">
                <p className="text-center text-sm font-bold text-gray-600 mb-6 uppercase tracking-wider relative z-10 bg-gray-50/50 inline-block px-4 mx-auto left-1/2 -translate-x-1/2">Tài Trợ Bạc</p>
                
                {/* Gradient blur edges */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

                <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused] items-center">
                  {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                  {[...silverSponsors, ...silverSponsors, ...silverSponsors, ...silverSponsors, ...silverSponsors, ...silverSponsors].map((s: any, i: number) => (
                    <div key={`silver-${s.id}-${i}`} className="w-[180px] shrink-0 px-3">
                      <SponsorLogo name={s.name} img={s.logo?.path ? `${baseConfig.imageDomain}/${s.logo.path}` : ""} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
