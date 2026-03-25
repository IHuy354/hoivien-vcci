"use client";

import { motion } from "framer-motion";


const partners = [
  { name: "Partner 1", logo: "https://meu.com.vn/wp-content/uploads/2023/05/logo-vcci.png" },
  { name: "Partner 2", logo: "https://meu.com.vn/wp-content/uploads/2023/05/logo-fpt.png" },
  { name: "Partner 3", logo: "https://meu.com.vn/wp-content/uploads/2023/05/logo-viettel.png" },
  { name: "Partner 4", logo: "https://meu.com.vn/wp-content/uploads/2023/05/logo-vnpt.png" },
  { name: "Partner 5", logo: "https://meu.com.vn/wp-content/uploads/2023/05/logo-acb.png" },
  { name: "Partner 6", logo: "https://meu.com.vn/wp-content/uploads/2023/05/logo-bidv.png" },
];

export const PartnersSection = () => {
  return (
    <section id="doi-tac" className="py-20 bg-white overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary uppercase bg-primary/5 rounded-full"
        >
          Đơn vị hàng đầu
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Hàng trăm doanh nghiệp đã tin tưởng MeU Solutions
        </motion.h2>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="py-12 animate-marquee whitespace-nowrap flex items-center">
          {[...partners, ...partners, ...partners].map((partner, i) => (
            <div key={i} className="mx-12 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
              <div className="h-12 w-32 relative">
                 <div className="text-xl font-bold text-gray-300 italic uppercase select-none">{partner.name}</div>
                 {/* Once we have real logos, replace text with Image component */}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};
