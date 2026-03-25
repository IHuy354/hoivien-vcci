"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { 
  Users,
  Maximize2,
  X,
  Mail,
  Activity,
  Wallet
} from "lucide-react";

const features = [
  {
    title: "Quản lý danh sách & Phê duyệt",
    desc: "Số hóa toàn bộ hồ sơ hội viên, tích hợp bộ lọc thông minh và quy trình phê duyệt trực tuyến một chạm.",
    icon: Users,
    image: "https://drive.google.com/uc?id=1HR4aoKOWSFCcMFcYJpRnfsy3zc5r6UO4", 
  },
  {
    title: "Thư mời & Kết nạp tự động",
    desc: "Tự động gửi thư mời lễ kết nạp, thông báo xét duyệt hàng loạt qua email và hệ thống tin nhắn nội bộ.",
    icon: Mail,
    image: "https://drive.google.com/uc?id=1u57wATZ5f7VdQrs0tfoKCmqkhW_wAfQR",
  },
  {
    title: "Lịch sử hoạt động & Thống kê",
    desc: "Theo dõi chi tiết mọi tương tác của hội viên. Báo cáo thống kê tự động giúp đánh giá hiệu quả hoạt động chính xác.",
    icon: Activity,
    image: "https://drive.google.com/uc?id=1FeBs1vTMmMQSUWvezOW5vnut6qBsvpFt",
  },
  {
    title: "Xác nhận hội phí thông minh",
    desc: "Quản lý dòng tiền minh bạch. Tự động đối soát, nhắc phí và xuất hóa đơn điện tử cho từng hội viên doanh nghiệp.",
    icon: Wallet,
    image: "https://drive.google.com/uc?id=1BKYnuItdLAhZDP4TXTqDs0podsdcyMeT",
  },
];

export const FeaturesSection = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="tinh-nang" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-3xl -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-600/5 rounded-full blur-3xl -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary uppercase bg-primary/5 rounded-full"
          >
            Tính năng ưu việt
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight"
          >
            Hệ sinh thái <span className="text-primary">quản lý chuyên nghiệp</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed"
          >
            Giải pháp toàn diện giúp hiện đại hóa quy trình vận hành và nâng cao trải nghiệm cho hội viên trong kỷ nguyên số.
          </motion.p>
        </div>

        <div className="space-y-12">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center bg-white p-6 md:p-10 rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500`}
            >
              {/* Image Column */}
              <div className="w-full lg:w-1/2">
                <div 
                  className="relative group cursor-zoom-in"
                  onClick={() => setSelectedImg(item.image)}
                >
                  <div className="absolute inset-0 bg-primary/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative aspect-[16/10] rounded-3xl overflow-hidden border border-gray-100 shadow-xl bg-gray-50/50">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-2 transition-transform duration-700"
                    />
                    {/* Hover Hint */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-lg transform scale-90 group-hover:scale-100 transition-transform">
                          <Maximize2 className="text-primary" size={24} />
                       </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center">
                  <item.icon size={32} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
                <ul className="space-y-3">
                  {["Số hóa 100% dữ liệu", "Tự động hóa báo cáo", "Bảo mật cấp doanh nghiệp"].map((point, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-700 font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl aspect-[16/10] bg-white rounded-3xl overflow-hidden shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImg}
                alt="Preview"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-black/20 hover:bg-black/40 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all z-10"
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
