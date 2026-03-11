/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { useGetApiV10PublicSpeakers } from "@/api/endpoints/public";
import baseConfig from "@/configs/base";
import { Loader2 } from "lucide-react";

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
  <section id="speakers" className="py-20 md:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-sm font-semibold text-yellow-600 uppercase tracking-widest mb-3"> Diễn giả</p>
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-5 mb-4">Diễn Giả Qua Các Năm</h2>
        <p className="text-gray-600 text-lg">Những nhà lãnh đạo và chuyên gia hàng đầu</p>
      </motion.div>

      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {visibleSpeakers.map((s: any, i: number) => (
              <motion.div
                key={s.id || i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                viewport={{ once: true }}
                className="bg-gray-50/80 border border-gray-100 rounded-3xl p-6 text-center group hover:-translate-y-2 transition-transform duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
              >
                <div className="w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-white shadow-lg group-hover:ring-yellow-400/50 transition-all">
                  <img 
                    src={s.avatar?.path ? `${baseConfig.imageDomain}/${s.avatar.path}` : ""} 
                    alt={s.full_name || "Speaker"} 
                    className="w-full h-full object-cover" 
                    loading="lazy" 
                  />
                </div>
                <h3 className="text-base font-bold text-gray-900 leading-tight mb-2 group-hover:text-yellow-600 transition-colors">{s.full_name}</h3>
                <p className="text-sm text-yellow-600 font-bold mb-1">{s.position}</p>
                <p className="text-xs text-gray-500 font-medium">{s.company}</p>
              </motion.div>
            ))}
          </div>

          {visibleCount < speakersList.length && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={handleLoadMore}
                className="px-8 py-3 rounded-full bg-yellow-50 text-yellow-600 font-semibold border-2 border-yellow-100 hover:bg-yellow-100 transition-colors duration-300"
              >
                Xem thêm chuyên gia
              </button>
            </div>
          )}
        </>
      )}
    </div>
  </section>
  );
};
