"use client";

import { motion } from "framer-motion";
import { objectives } from "@/mockdata/ceovcci";

export const ObjectivesSection = () => (
  <section id="objectives" className="py-20 md:py-28 bg-[#0A192F] relative overflow-hidden">
    <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-yellow-500/5 blur-3xl" />
    <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-yellow-500/5 blur-3xl" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-sm font-semibold text-yellow-500 uppercase tracking-widest mb-3">Mục tiêu đào tạo</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Phát Triển Toàn Diện Năng Lực Lãnh Đạo
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {objectives.map((obj, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="bg-[#112240] rounded-2xl p-7 border border-[#233554] group hover:-translate-y-1 transition-all duration-300 shadow-xl"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/20 transition-colors">
                <obj.icon size={26} className="text-yellow-500" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{obj.title}</h3>
                <p className="text-base text-gray-300 leading-relaxed">{obj.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
