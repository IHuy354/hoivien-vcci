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

const bgColors = [
  "bg-card/60 border-white/10", // Card 1: Deep Navy
  "bg-card/40 border-white/10", // Card 2: Strategic Navy
  "bg-card/60 border-white/10", // Card 3: Deep Navy
  "bg-card/40 border-white/10", // Card 4: Strategic Navy
];

const iconColors = [
  "bg-primary/20 text-primary",
  "bg-primary/20 text-primary",
  "bg-primary/20 text-primary",
  "bg-primary/20 text-primary",
];

export const FeaturesSection = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <section id="tinh-nang" className="py-20 bg-background relative overflow-hidden">
      {/* Floating Organic Background Assets */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 mb-6 text-xs font-black tracking-[0.2em] text-primary uppercase bg-primary/10 rounded-xl"
          >
            Core Ecosystem
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-foreground mb-6 leading-[1.1] tracking-tighter"
          >
            Hệ sinh thái <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60">
              quản lý chuyên nghiệp
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground font-medium leading-relaxed"
          >
            Giải pháp toàn diện giúp hiện đại hóa quy trình vận hành và nâng cao trải nghiệm cho hội viên trong kỷ nguyên số.
          </motion.p>
        </div>

        <div className="space-y-16">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center ${bgColors[i % 4]} p-8 md:p-12 rounded-[3rem] border-2 shadow-2xl shadow-black/50 transition-transform duration-500`}
            >
              {/* Image Column with enhanced dark glassmorphism */}
              <div className="w-full lg:w-1/2">
                <motion.div 
                  className="relative group cursor-zoom-in"
                  onClick={() => setSelectedImg(item.image)}
                >
                  <div className="absolute -inset-4 bg-primary/5 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden border-4 border-white/5 shadow-2xl bg-white/5 backdrop-blur-xl p-3">
                    <div className="relative h-full w-full rounded-[1.5rem] overflow-hidden bg-black/20">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain p-4 transition-transform duration-1000 brightness-90 group-hover:brightness-100"
                      />
                    </div>
                    {/* Visual Flare Overlay for 'Premium' feel */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-2xl transform scale-75 group-hover:scale-100 transition-all duration-500">
                          <Maximize2 className="text-black" size={24} />
                       </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Content Column */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className={`w-16 h-16 ${iconColors[i % 4]} rounded-[1.5rem] flex items-center justify-center shadow-xl`}>
                  <item.icon size={28} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl lg:text-3xl font-black text-foreground tracking-tight leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-base text-muted-foreground font-bold leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <ul className="grid grid-cols-1 gap-3">
                  {["Số hóa 100% dữ liệu", "Tự động hóa báo cáo", "Bảo mật cấp doanh nghiệp"].map((point, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-foreground/80 font-bold bg-white/5 backdrop-blur-sm p-3 rounded-xl border border-white/10">
                      <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-lg shadow-primary/20" />
                      <span className="text-sm">{point}</span>
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
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setSelectedImg(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-6xl aspect-[16/10] bg-card rounded-3xl overflow-hidden shadow-2xl cursor-default border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImg}
                alt="Preview"
                fill
                className="object-contain p-8"
              />
              <button
                onClick={() => setSelectedImg(null)}
                className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center backdrop-blur-md transition-all z-10"
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
