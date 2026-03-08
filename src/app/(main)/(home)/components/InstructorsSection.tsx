"use client";

import { motion } from "framer-motion";

const instructors = [
  { name: "Nguyễn Hồng Thắng", title: "PGS Tiến Sĩ", img: "https://s3.meu-solutions.com/skh-event/public/images/hongthang-removebg-preview.png" },
  { name: "Lâm Bính Bảo", title: "Thạc Sĩ", img: "https://s3.meu-solutions.com/skh-event/public/images/B%C3%ADnh-B%E1%BA%A3o.png" },
  { name: "Nguyễn Mạnh Hiền", title: "Tiến Sĩ", img: "https://s3.meu-solutions.com/skh-event/public/images/M%E1%BA%A1nh-Hi%E1%BB%81n.png" },
  { name: "Võ Tiến Dũng", title: "Thạc Sĩ", img: "https://s3.meu-solutions.com/skh-event/public/images/Ti%E1%BA%BFn-D%C5%A9ng.png" },
  { name: "Vũ Đỗ Tuấn Huy", title: "Thạc Sĩ", img: "https://s3.meu-solutions.com/skh-event/public/images/Tu%E1%BA%A5n-Huy.png" },
  { name: "Mai Trường Giang", title: "Chuyên Gia Đầu Tư", img: "https://s3.meu-solutions.com/skh-event/public/images/truonggiang.png" },
  { name: "Võ Thái Lâm", title: "Coach", img: "https://s3.meu-solutions.com/skh-event/public/images/Th%C3%A1i-L%C3%A2m.png" },
  { name: "Ngô Quỳnh Anh", title: "Luật Sư", img: "https://s3.meu-solutions.com/skh-event/public/images/Qu%E1%BB%B3nh-Anh.png" },
];

export const InstructorsSection = () => (
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {instructors.map((inst, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            viewport={{ once: true }}
            className="bg-[#112240] border border-[#233554] rounded-3xl p-6 text-center group hover:-translate-y-2 transition-transform duration-300 shadow-xl"
          >
            <div className="w-24 h-24 mx-auto mb-5 rounded-full overflow-hidden ring-4 ring-[#233554] shadow-lg group-hover:ring-yellow-500/50 transition-all bg-[#0A192F]">
              <img src={inst.img} alt={inst.name} className="w-full h-full object-cover" loading="lazy" />
            </div>
            <p className="text-xs text-yellow-500 font-bold mb-2 tracking-wide uppercase">{inst.title}</p>
            <h3 className="text-base font-bold text-white group-hover:text-yellow-400 transition-colors">{inst.name}</h3>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
