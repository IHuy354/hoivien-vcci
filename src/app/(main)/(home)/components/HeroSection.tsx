"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSiteSetting } from "@/hooks/use-site-settings";
import { Calendar, GraduationCap, Users } from "lucide-react";

export function HeroSection() {
  const router = useRouter();
  const opening_date = useSiteSetting("opening_date");
  const formatDate = (date: string | null) => {
    return date?.split(" ")[0] || "";
  };

  const heroStats = [
    { icon: Calendar, label: "Khai giảng", value: formatDate(opening_date) },
    { icon: GraduationCap, label: "Học bổng", value: "50 Triệu VNĐ" },
    { icon: Users, label: "Chi phí", value: "Chỉ 3 Triệu" },
  ];
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#040B16]">
      {/* Background image overlay with enhanced premium blending */}
      <div className="absolute inset-0">
        <Image
          src="/imgs/hero-banner.png"
          alt="CEO VCCI 2025"
          fill
          priority
          className="object-cover opacity-20 mix-blend-luminosity grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#040B16] via-[#040B16]/80 to-[#040B16]" />
        
        {/* Dynamic mesh gradient backdrops */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-[120px] mix-blend-screen" />
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-16 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-12 text-center flex flex-col items-center"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-8 group cursor-pointer hover:bg-white/10 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wider text-white/90 uppercase">VCCI-HCM • Niên khóa 2025</span>
              <ChevronRight size={14} className="text-white/50 group-hover:text-white group-hover:translate-x-1 transition-all" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-white leading-[1.1] mb-6 tracking-tight">
              Kỷ Nguyên Mới Cho
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-yellow-400 to-amber-500 pb-2 inline-block">
                Nhà Lãnh Đạo Tương Lai
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-white/70 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
              Nâng tầm năng lực quản trị doanh nghiệp toàn diện. Chương trình đào tạo <strong className="text-white font-semibold">CEO 4.0</strong> thiết kế riêng cho các giám đốc điều hành xuất chúng.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-20 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push("/registration")}
                className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-600 text-neutral-950 font-bold text-lg overflow-hidden transition-all shadow-[0_0_40px_rgba(251,191,36,0.2)] hover:shadow-[0_0_60px_rgba(251,191,36,0.4)]"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10">Đăng Ký Khóa Học</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#objectives"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 text-white font-semibold text-lg hover:bg-white/10 hover:border-white/20 transition-all shadow-xl"
              >
                Khám Phá Chương Trình
              </motion.a>
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
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400/20 to-amber-600/5 border border-amber-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                      <item.icon size={26} className="text-amber-400" />
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
      
      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f172a] to-transparent pointer-events-none" />
    </section>
  );
}
