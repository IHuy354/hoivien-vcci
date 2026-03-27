"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "KHOA HỌC VÀ CÔNG NGHỆ",
    logo: "https://meu.com.vn/wp-content/uploads/2025/07/anax-partner-02.png"
  },
  {
    name: "sovereign SOLUTIONS",
    logo: "https://meu.com.vn/wp-content/uploads/2025/07/anax-partner-04.png"
  },
  {
    name: "Thang Long Real Group",
    logo: "https://meu.com.vn/wp-content/uploads/2025/07/anax-partner-03.png"
  },
  {
    name: "be - Nền tảng đa dịch vụ",
    logo: "https://meu.com.vn/wp-content/uploads/2025/07/anax-partner-10.png"
  },
  {
    name: "PRAGMA",
    logo: "https://meu.com.vn/wp-content/uploads/2025/07/anax-partner-07.png"
  },
  {
    name: "SAPATCO",
    logo: "https://meu.com.vn/wp-content/uploads/2025/07/anax-partner-06.png"
  },
  {
    name: "MLC MEDOCHEMIE",
    logo: "https://meu.com.vn/wp-content/uploads/2025/07/anax-partner-05.png"
  }
];

export const PartnersSection = () => {
  return (
    <section id="doi-tac" className="py-20 bg-white overflow-hidden relative">
      {/* High-Fidelity Network Node Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="nodePattern" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.5" fill="#3b82f6" />
            <path d="M2,2 L18,18 M18,2 L2,18" stroke="#3b82f6" strokeWidth="0.1" fill="none" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#nodePattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 text-center relative z-10">
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 mb-6 text-xs font-black tracking-[0.2em] text-blue-600 uppercase bg-blue-50 rounded-xl"
          >
            Trusted Ecosystem
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter leading-tight"
        >
          Đồng hành cùng <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 italic">
            phát triển bền vững
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium"
        >
          Hợp tác với những đơn vị uy tín là nền tảng để chúng tôi không ngừng hoàn thiện và mang lại giá thực nhất cho cộng đồng doanh nghiệp.
        </motion.p>
      </div>

      <div className="relative z-10">
        {/* Quality Fade Masks with Gradient Depth */}
        <div className="absolute inset-y-0 left-0 w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        <div className="flex overflow-hidden group">
          <div className="flex py-8 animate-marquee whitespace-nowrap items-center hover:[animation-play-state:paused] transition-all duration-300">
            {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -8, scale: 1.05 }}
                className="mx-8 flex-shrink-0"
              >
                <div className="group/card relative h-32 w-72 flex items-center justify-center p-8 bg-white rounded-[2rem] border border-slate-100 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.08)] hover:shadow-2xl hover:border-blue-100 transition-all duration-500">
                  <div className="relative h-full w-full filter brightness-[0.9] group-hover/card:brightness-[1] transition-all duration-500">
                    <Image 
                      src={partner.logo} 
                      alt={partner.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 300px, 600px"
                    />
                  </div>
                  {/* Subtle Glow Layer */}
                  <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover/card:opacity-100 rounded-[2rem] transition-opacity pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-25%); }
        }
        .animate-marquee {
          animation: marquee 50s linear infinite;
          width: fit-content;
        }
      `}</style>
    </section>
  );
};
