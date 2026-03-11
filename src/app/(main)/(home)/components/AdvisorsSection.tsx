"use client";

import { motion } from "framer-motion";
import { useGetApiV10PublicSpeakers } from "@/api/endpoints/public";
import baseConfig from "@/configs/base";
import { Loader2 } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PersonCard = ({ person, i, type }: { person: any; i: number, type: 'advisor' | 'director' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.1 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl p-8 border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.04)] transition-all text-center hover:-translate-y-1 hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)]"
  >
    <div className="relative z-10 flex flex-col items-center">
      <div className="w-24 h-24 mb-6 rounded-full overflow-hidden relative bg-gray-50 border border-gray-200">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={person.avatar?.path ? `${baseConfig.imageDomain}/${person.avatar.path}` : ""} 
          alt={person.full_name || "Person"} 
          className="w-full h-full object-cover" 
          loading="lazy" 
        />
      </div>

      <div className="-mt-10 mb-4 sticky z-20">
        <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide text-white ${type === 'advisor' ? 'bg-[#3eb653]' : 'bg-[#3eb653]'}`}>
          {person.position}
        </span>
      </div>

      <h3 className="text-base font-bold text-gray-800 mb-2 mt-2">{person.full_name}</h3>
      <p className="text-xs font-semibold text-[#2563eb] mb-2">{person.company ? person.company.split('•')[0].trim() : ''}</p>
      {person.company && person.company.includes('•') && (
        <p className="text-[11px] text-gray-500 max-w-[200px] leading-relaxed">
           {person.company.split('•')[1].trim()}
        </p>
      )}
    </div>
  </motion.div>
);

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
    <section id="advisory" className="py-20 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-gray-100 bg-gray-50 mb-5">
            <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">
              BAN CỐ VẤN & CHỦ NHIỆM
            </p>
          </div>
          <h2 className="text-3xl md:text-[40px] font-black text-gray-900 mb-4">
            Ban Cố Vấn & Ban Chủ Nhiệm
          </h2>
          <p className="text-sm font-medium text-gray-500 max-w-2xl mx-auto">
            Những nhà lãnh đạo và chuyên gia định hướng chương trình
          </p>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-gray-400" />
          </div>
        ) : (
          <div className="space-y-16">
            {/* Ban Cố Vấn */}
            {advisorsList.length > 0 && (
              <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <h3 className="text-xl font-bold text-gray-600">Ban Cố Vấn</h3>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {advisorsList.map((p: any, i: number) => <PersonCard key={p.id || i} person={p} i={i} type="advisor" />)}
                  </div>
              </div>
            )}

            {/* Ban Chủ Nhiệm */}
            {directorsList.length > 0 && (
              <div className="text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-8"
                  >
                    <h3 className="text-xl font-bold text-gray-600">Ban Chủ Nhiệm</h3>
                  </motion.div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
