"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Briefcase } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const heroStats = [
    { icon: Calendar, label: "Thành lập", value: "8+ Năm" },
    { icon: Users, label: "Nhân sự", value: "100+ Chuyên gia" },
    { icon: Briefcase, label: "Đối tác", value: "100+ Doanh nghiệp" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#040B16]">
      {/* Background image overlay with enhanced premium blending */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000"
          alt="MeU Solutions Hero"
          fill
          priority
          className="object-cover opacity-30 mix-blend-soft-light"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040B16] via-[#040B16]/90 to-[#040B16]" />
        
        {/* Dynamic mesh gradient backdrops */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-gradient-to-tl from-indigo-500/10 to-transparent rounded-full blur-[150px] mix-blend-screen" />
      </div>

      {/* Starfield / Grid effect overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-32 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-12 text-center flex flex-col items-center"
          >
           

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Tối ưu hóa quản lý hội viên cùng
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-200 to-yellow-500 pb-2 inline-block">
                MeU Solutions
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              Giải pháp quản trị doanh nghiệp toàn diện cho VCCI và các tổ chức hiệp hội. Hiện đại hóa quy trình, nâng cao trải nghiệm hội viên và bảo mật dữ liệu tuyệt đối.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.open("https://vcci.erp.meu-solutions.com/dang-ky", "_blank")}
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-primary text-white font-bold text-lg overflow-hidden transition-all shadow-xl hover:bg-primary/90"
              >
                <span className="relative z-10">Bắt đầu ngay</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {}} // Placeholder for video
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold text-lg hover:bg-white/20 transition-all shadow-xl"
              >
                Xem video giới thiệu
              </motion.button>
            </div>

            {/* Floating Glass Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto w-full">
              {heroStats.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group rounded-3xl p-[1px] overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-full bg-[#1e293b]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 flex flex-col items-center gap-4 hover:bg-[#1e293b] transition-colors duration-500">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-400/20 to-indigo-600/5 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <item.icon size={26} className="text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white/50 font-medium tracking-wide uppercase mb-1">{item.label}</p>
                      <p className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
