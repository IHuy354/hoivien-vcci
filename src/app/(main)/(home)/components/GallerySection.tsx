"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["Tất cả", "Học tập", "Trao bằng", "Thuyết trình", "Kết nối"];

const images = [
  { src: "https://s3.meu-solutions.com/skh-event/public/images/khaigiang2.jpg", cat: "Học tập", title: "Khai giảng khóa học" },
  { src: "https://s3.meu-solutions.com/skh-event/public/images/z6676007734179_1bbb0f51730cac4358395f45566ddce1.jpg", cat: "Học tập", title: "Lớp học trực tiếp" },
  { src: "https://s3.meu-solutions.com/skh-event/public/images/NNS00012-768x512.jpg", cat: "Trao bằng", title: "Lễ tốt nghiệp CEO 2024" },
  { src: "https://s3.meu-solutions.com/skh-event/public/images/NNS09871-768x512.jpg", cat: "Trao bằng", title: "Trao chứng nhận" },
  { src: "https://s3.meu-solutions.com/skh-event/public/images/thuettrinh22.jpg", cat: "Thuyết trình", title: "Thuyết trình doanh nghiệp" },
  { src: "https://s3.meu-solutions.com/skh-event/public/images/z6368071764596_86c1f14c007ec1b1962d4283bfba15a1.jpg", cat: "Thuyết trình", title: "Kế hoạch kinh doanh" },
  { src: "https://s3.meu-solutions.com/skh-event/public/images/z6404282292064_5a9ea4692dfe628417919aa9d346fa6e.jpg", cat: "Kết nối", title: "Giao lưu doanh nghiệp" },
  { src: "https://s3.meu-solutions.com/skh-event/public/images/ketnoi22.jpg", cat: "Kết nối", title: "Giao lưu doanh nghiệp" },
  { src: "https://s3.meu-solutions.com/skh-event/public/images/NNS09932-768x495.jpg", cat: "Trao bằng", title: "Lễ tốt nghiệp CEO 2024" },
];

export const GallerySection = () => {
  const [active, setActive] = useState("Tất cả");

  const filtered = active === "Tất cả" ? images : images.filter((img) => img.cat === active);

  return (
    <section id="gallery" className="py-20 md:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold text-yellow-600 uppercase tracking-widest mb-3"> Hoạt động</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-5 mb-8">Hình Ảnh Chương Trình</h2>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 ${
                active === cat
                  ? "bg-yellow-500 text-gray-900 font-bold shadow-md transform scale-105"
                  : "bg-white/80 backdrop-blur-md border border-gray-100 text-gray-500 hover:text-gray-900 font-medium shadow-sm hover:shadow"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence>
            {filtered.map((img, i) => (
              <motion.div
                key={img.src + i}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-md border border-gray-100 bg-gray-200"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B]/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-gray-900 bg-yellow-500 rounded-full shadow-sm">{img.cat}</span>
                    <p className="text-lg font-bold text-white shadow-sm">{img.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
