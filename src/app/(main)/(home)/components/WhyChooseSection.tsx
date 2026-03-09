"use client";

import { motion } from "framer-motion";
import { whyChooseFeatures as features } from "@/mockdata/ceovcci";

export const WhyChooseSection = () => (
  <section className="py-10 md:py-12 bg-gray-50/50">
    <div className="max-w-7xl mx-auto pb-10 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-xl font-semibold text-yellow-600 uppercase tracking-widest mb-3">Tại sao chọn chúng tôi</p>
        <h2 className="text-3xl md:text-5xl mt-5 font-bold text-gray-900">
          Đầu tư bản thân — Nâng tầm lãnh đạo
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-7 shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 group hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-yellow-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <f.icon size={24} className="text-gray-900" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
            <p className="text-base text-gray-600 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
