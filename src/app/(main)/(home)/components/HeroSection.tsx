"use client";

import { motion } from "framer-motion";
import { ArrowRight, GraduationCap, Users, Calendar } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function HeroSection() {
  const router = useRouter();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-r from-[#020C1B] via-[#0A192F] to-[#112240]">
      {/* Background image overlay */}
      <div className="absolute inset-0">
        <Image
          src="/imgs/hero-banner.png"
          alt="CEO VCCI 2025"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/60 via-[#0A192F]/80 to-[#0A192F]" />
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gold/10 blur-3xl animate-float" />
      <div 
        className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-gold/5 blur-3xl animate-float" 
        style={{ animationDelay: "3s" }} 
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-28 pb-16 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#0A192F]/80 border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(0,0,0,0.2)] mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
            <span className="text-sm font-medium text-white/80">VCCI-HCM • Niên khóa 2025</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            Chương Trình Đào Tạo
            <br />
            <span className="text-yellow-500">CEO 4.0</span>
          </h1>

          <p className="text-lg md:text-xl text-white max-w-2xl mx-auto mb-6 font-light leading-relaxed">
            Nâng Tầm Lãnh Đạo Doanh Nghiệp Trong Kỷ Nguyên AI
          </p>

          <p className="text-sm text-white/70 max-w-xl mx-auto mb-10 leading-relaxed">
            Thực hiện Nghị quyết số 41-NQ/TW và Nghị quyết số 68-NQ/TW về xây dựng đội ngũ doanh nhân Việt Nam và phát triển kinh tế tư nhân
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => router.push("/registration")}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-yellow-500 text-gray-900 font-semibold text-base ios-shadow-lg hover:bg-yellow-400 transition-colors"
            >
              Đăng Ký Ngay
              <ArrowRight size={18} />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href="#objectives"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-[#0A192F]/40 backdrop-blur-lg border border-white/10 text-white font-medium text-base hover:bg-white/10 transition-colors shadow-xl"
            >
              Tìm Hiểu Thêm
            </motion.a>
          </div>

          {/* Info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { icon: Calendar, label: "Khai giảng", value: "11/07/2025" },
              { icon: GraduationCap, label: "Học bổng", value: "50 Triệu VNĐ" },
              { icon: Users, label: "Chi phí", value: "Chỉ 3 Triệu" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
                className="glass-card-navy p-5 flex items-center gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-yellow-500 flex items-center justify-center flex-shrink-0">
                  <item.icon size={20} className="text-gray-900" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-white/50 font-medium">{item.label}</p>
                  <p className="text-lg font-bold text-white">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
