/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";

import { speakers } from "@/mockdata/ceovcci";

export const SpeakersSection = () => (
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {speakers.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            viewport={{ once: true }}
            className="bg-gray-50/80 border border-gray-100 rounded-3xl p-6 text-center group hover:-translate-y-2 transition-transform duration-300 shadow-[0_4px_20px_rgb(0,0,0,0.03)]"
          >
            <div className="w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-white shadow-lg group-hover:ring-yellow-400/50 transition-all">
              <img src={s.img} alt={s.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <h3 className="text-base font-bold text-gray-900 leading-tight mb-2 group-hover:text-yellow-600 transition-colors">{s.name}</h3>
            <p className="text-sm text-yellow-600 font-bold mb-1">{s.role}</p>
            <p className="text-xs text-gray-500 font-medium">{s.org}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
