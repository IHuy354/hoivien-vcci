"use client";

import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import { ArrowRight, Calendar, Users, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 35, stiffness: 60 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const backgroundGlow = useMotionTemplate`radial-gradient(900px circle at ${springX}px ${springY}px, rgba(212, 175, 55, 0.12), transparent 90%)`;

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const heroStats = [
    { icon: Calendar, label: "Thành lập", value: "8+ Năm" },
    { icon: Users, label: "Nhân sự", value: "100+ Chuyên gia" },
    { icon: Briefcase, label: "Đối tác", value: "100+ Doanh nghiệp" },
  ];

  return (
    <section 
      onMouseMove={handleMouseMove}
      className="group/hero relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* High-Fidelity Background Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Deep Atmospheric Base with Warm Radial Accent */}
        <div className="absolute inset-0 bg-background" />
        
        {/* Mouse Following Magnetic Glow - High Performance Layer */}
        <motion.div 
          className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover/hero:opacity-100 transition-opacity duration-300"
          style={{ backgroundImage: backgroundGlow }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        {/* Atmospheric Light Glows - Warmer Gold Tones */}
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-primary/15 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary/8 rounded-full blur-[150px] opacity-70" />
        
        {/* Subtle Warm Amber Glow in the Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_50%)]" />
        
        {/* Glowing Geometric Web Pattern */}
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none mix-blend-screen">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <linearGradient id="webGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
                <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
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
          className="absolute bottom-40 left-[10%] w-24 h-24 bg-primary/10 backdrop-blur-2xl rounded-full border border-primary/20 shadow-xl" 
        />
      </div>

      {/* Subtle Grid Overlay */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full pt-40 pb-16">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-fit mx-auto mb-6 px-6 py-2 rounded-full bg-primary text-black text-[10px] md:text-xs font-black tracking-[0.3em] uppercase shadow-[0_10px_20px_-5px_rgba(212,175,55,0.4)]"
          >
            Digital Ecosystem
          </motion.div>

          <motion.h1
            variants={{
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              hovered: {}
            }}
            initial="initial"
            animate="animate"
            whileHover="hovered"
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.2] mb-12 tracking-tighter cursor-default"
          >
            <div className="relative inline-flex flex-col items-center">
              <span>Tối ưu hóa quản lý hội viên cùng</span>
              
              {/* Refined Gold-to-White Gradient Line with Static Glow */}
              <motion.div
                variants={{
                  initial: { width: 0, opacity: 0 },
                  animate: { 
                    width: 140, 
                    opacity: 0.9, 
                    boxShadow: "0 0 20px rgba(212, 175, 55, 0.6)" 
                  },
                  hovered: { 
                    width: "100%", 
                    opacity: 1,
                  }
                }}
                className="h-[3px] md:h-1 rounded-full my-6 relative overflow-visible"
                style={{
                  background: "linear-gradient(to right, #AA8C2C 0%, #D4AF37 20%, #FFF9C4 45%, #FFFFFF 50%, #FFF9C4 55%, #D4AF37 80%, #AA8C2C 100%)"
                }}
                transition={{ 
                  width: { type: "spring", stiffness: 200, damping: 25 },
                  opacity: { duration: 0.3 }
                }}
              >
                {/* Fixed Soft Ambient Glow Layer */}
                <div className="absolute inset-x-0 -inset-y-2 bg-primary/20 blur-xl rounded-full -z-10" />
              </motion.div>

              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#AA8C2C] via-primary via-[#FFF9C4] to-primary pr-2 filter drop-shadow-[0_0_20px_rgba(212,175,55,0.3)] brightness-115">
                MeU Solutions
              </span>
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
          >
            Giải pháp chuyên sâu cho VCCI và các hiệp hội. Hiện đại hóa quy trình, bảo mật tối đa, nâng cao trải nghiệm hội viên.
          </motion.p>

          {/* Premium Gold Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(212, 175, 55, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={() => window.open("https://vcci.erp.meu-solutions.com/dang-ky", "_blank")}
              className="group relative px-10 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary/80 text-black font-black text-lg shadow-[0_15px_30px_-10px_rgba(212,175,55,0.3)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
              <span className="relative z-10 flex items-center gap-2">
                Bắt đầu ngay <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.2)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white font-bold text-lg shadow-xl"
            >
              Tìm hiểu thêm
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {heroStats.map((item, i) => {
              const isMiddle = i === 1;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.8 }}
                  className={cn(
                    "group relative px-8 py-6 rounded-3xl border transition-all duration-500",
                    isMiddle
                      ? "bg-primary border-primary shadow-[0_20px_40px_-10px_rgba(212,175,55,0.4)] md:scale-105 z-20"
                      : "border-white/10 bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.05] hover:border-primary/30"
                  )}
                >
                  {/* Subtle Inner Glow for Middle Card */}
                  {isMiddle && (
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 to-transparent pointer-events-none opacity-50" />
                  )}
                  
                  <div className={cn(
                    "relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-inner ring-1 transition-all duration-500 group-hover:scale-110",
                    isMiddle
                      ? "bg-white ring-black/5 shadow-xl shadow-black/10"
                      : "bg-gradient-to-br from-primary/20 to-transparent ring-white/10"
                  )}>
                    <item.icon 
                      size={24} 
                      className={cn(
                        "transition-colors",
                        isMiddle ? "text-black" : "text-primary"
                      )} 
                    />
                  </div>
                  
                  <div className="relative z-10 text-left">
                    <div className={cn(
                      "text-[10px] font-black uppercase tracking-[0.2em] mb-2",
                      isMiddle ? "text-black/40" : "text-white/30"
                    )}>
                      {item.label}
                    </div>
                    <div className={cn(
                      "text-2xl font-black tracking-tight",
                      isMiddle ? "text-black" : "text-white"
                    )}>
                      {item.value}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
