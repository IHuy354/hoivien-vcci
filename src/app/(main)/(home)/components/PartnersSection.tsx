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
    <section id="doi-tac" className="py-24 bg-white overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-bold tracking-widest text-primary uppercase bg-primary/5 border border-primary/10 rounded-full"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          1 số đơn vị hợp tác
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-6xl font-black text-gray-900 tracking-tight leading-tight"
        >
          Đồng hành cùng <span className="text-primary italic">phát triển</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Hợp tác với những đơn vị uy tín là nền tảng để chúng tôi không ngừng hoàn thiện 
          và mang lại giá trị tốt nhất cho cộng đồng doanh nghiệp.
        </motion.p>
      </div>

      <div className="relative z-10">
        {/* Left and Right Fade Masks */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

        <div className="flex overflow-hidden group">
          <div className="flex py-16 animate-marquee whitespace-nowrap items-center hover:[animation-play-state:paused] transition-all duration-300">
            {[...partners, ...partners, ...partners, ...partners].map((partner, i) => (
              <motion.div 
                key={i} 
                whileHover={{ y: -12, scale: 1.05 }}
                className="mx-12 flex-shrink-0"
              >
                <div className="group/card relative h-40 w-80 flex items-center justify-center p-10 bg-white rounded-[2rem] border border-gray-100 shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] hover:border-primary/20 transition-all duration-500">
                  <div className="relative h-full w-full">
                    <Image 
                      src={partner.logo} 
                      alt={partner.name}
                      fill
                      className="object-contain transition-all duration-500"
                      sizes="(max-width: 768px) 300px, 600px"
                    />
                  </div>
                  
                  {/* Subtle Hover Glow */}
                  <div className="absolute inset-0 rounded-[2rem] bg-primary/5 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none" />
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
