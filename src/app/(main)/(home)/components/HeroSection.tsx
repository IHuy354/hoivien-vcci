"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Users, Briefcase } from "lucide-react";

export function HeroSection() {
  const heroStats = [
    { icon: Calendar, label: "Thành lập", value: "8+ Năm" },
    { icon: Users, label: "Nhân sự", value: "100+ Chuyên gia" },
    { icon: Briefcase, label: "Đối tác", value: "100+ Doanh nghiệp" },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#020617]">
      {/* High-Fidelity Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Deep Atmospheric Base */}
        <div className="absolute inset-0 bg-[#020617]" />
        
        {/* Atmospheric Light Glows */}
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-blue-600/20 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-purple-600/15 rounded-full blur-[120px]" />
        
        {/* Glowing Geometric Web Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-screen">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="webGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path 
              d="M0,20 L100,80 M100,20 L0,80 M50,0 L50,100 M0,50 L100,50 M25,0 L75,100 M75,0 L25,100" 
              stroke="url(#webGrad)" 
              strokeWidth="0.05" 
              fill="none" 
            />
          </svg>
        </div>

        {/* Floating Abstract Shapes */}
        <motion.div 
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-[15%] w-32 h-32 bg-white/5 backdrop-blur-3xl rounded-full border border-white/10 shadow-2xl" 
        />
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-40 left-[10%] w-24 h-24 bg-blue-500/10 backdrop-blur-2xl rounded-full border border-blue-400/20 shadow-xl" 
        />
      </div>

      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full pt-40 pb-16">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 px-6 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-xl text-blue-400 text-xs font-black tracking-[0.3em] uppercase"
          >
            Digital Ecosystem
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6 tracking-tighter"
          >
            Tối ưu hóa quản lý hội viên cùng <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-yellow-100 to-yellow-400">
              MeU Solutions
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
          >
            Giải pháp chuyên sâu cho VCCI và các tổ chức hiệp hội. Hiện đại hóa quy trình, bảo mật tối đa và nâng cao trải nghiệm hội viên doanh nghiệp.
          </motion.p>

          {/* Anti-Gravity Vibrant Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -4, boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.5)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => window.open("https://vcci.erp.meu-solutions.com/dang-ky", "_blank")}
              className="group relative px-10 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black text-lg transition-all shadow-[0_15px_30px_-10px_rgba(37,99,235,0.4)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Bắt đầu ngay <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -4, backgroundColor: "rgba(255,255,255,0.12)" }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white font-bold text-lg transition-all shadow-xl"
            >
              Tìm hiểu thêm
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {heroStats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                className="group relative p-8 rounded-[2rem] border border-white/10 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-600/5 flex items-center justify-center mb-6 shadow-inner ring-1 ring-white/10 group-hover:scale-110 transition-transform duration-500">
                  <item.icon size={22} className="text-blue-400 group-hover:text-white transition-colors" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] text-white/30 font-black uppercase tracking-[0.2em] mb-2">{item.label}</div>
                  <div className="text-2xl font-black text-white tracking-tight">{item.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
