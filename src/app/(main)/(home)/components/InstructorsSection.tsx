/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

import { useGetApiV10PublicSpeakers } from "@/api/endpoints/public";
import baseConfig from "@/configs/base";
import { Loader2 } from "lucide-react";

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
    <section className="py-20 md:py-28 bg-[#0A192F] relative overflow-hidden">
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-yellow-500/5 blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-md font-semibold text-yellow-500 uppercase tracking-widest mb-3">Giảng viên</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-5 mb-4">Đội Ngũ Giảng Viên</h2>
          <p className="text-gray-300 mt-3 text-lg">Những chuyên gia giàu kinh nghiệm</p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
              {visibleInstructors.map((inst: any, i: number) => (
                <motion.div
                  key={inst.id || i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                  viewport={{ once: true }}
                  className="bg-[#112240] border border-[#233554] rounded-3xl p-6 text-center group hover:-translate-y-2 transition-transform duration-300 shadow-xl"
                >
                  <div className="w-24 h-24 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-[#233554] shadow-lg group-hover:ring-yellow-500/50 transition-all bg-[#0A192F]">
                    <img 
                      src={inst.avatar?.path ? `${baseConfig.imageDomain}/${inst.avatar.path}` : ""} 
                      alt={inst.full_name || "Instructor"} 
                      className="w-full h-full object-cover" 
                      loading="lazy" 
                    />
                  </div>
                  <p className="text-xs text-yellow-500 font-bold mb-2 tracking-wide uppercase">{inst.position}</p>
                  <h3 className="text-base font-bold text-white group-hover:text-yellow-400 transition-colors">{inst.full_name}</h3>
                </motion.div>
              ))}
            </div>

            {visibleCount < instructorsList.length && (
              <div className="mt-12 flex justify-center z-10 relative">
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-3 rounded-full bg-[#112240] text-yellow-500 font-semibold border border-[#233554] hover:bg-[#233554] transition-colors duration-300 shadow-lg"
                >
                  Xem thêm giảng viên
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
