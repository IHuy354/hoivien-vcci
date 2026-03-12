"use client";

import { motion } from "framer-motion";
import { FileText, Zap, Phone, Mail, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useSiteSetting } from "@/hooks/use-site-settings";

export const RegistrationSection = () => {
  const router = useRouter();
  
  const registration_start = useSiteSetting('registration_start');
  const registration_end = useSiteSetting('registration_end');
  const contact_email = useSiteSetting('contact_email');
  const contact_phone = useSiteSetting('contact_phone');
  
  const formatDate = (date: string | null) => {
    return date?.split(" ")[0] || "";
  };  

  return (
    <section id="registration" className="py-16 sm:py-20 md:py-28 bg-[#0f172a] relative overflow-hidden">
      {/* Dynamic Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b] via-[#0f172a] to-[#1e293b]" />
      
      {/* Decorative Orbs */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
           className="text-center mb-16 md:mb-24"
        >
          <p className="text-sm font-semibold text-amber-500 uppercase tracking-[0.2em] mb-4">Gia nhập cộng đồng</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold tracking-tight text-white max-w-2xl mx-auto leading-tight">
            Khẳng Định Tầm Nhìn.<br />
            Nâng Tầm Lãnh Đạo.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Timeline / Journey Plan */}
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
             className="relative p-10 md:p-12 rounded-[2rem] bg-white/[0.02] border border-white/5 backdrop-blur-xl shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-white mb-10 flex items-center gap-4">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-blue-500/5 border border-indigo-500/20 flex items-center justify-center">
                <FileText className="w-5 h-5 text-indigo-400" />
              </span>
              Lộ Trình Tuyển Sinh
            </h3>
            
            <div className="relative border-l border-white/10 ml-5 space-y-12 pb-4">
              <div className="relative pl-8">
                <span className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)] ring-4 ring-[#0f172a]" />
                <p className="text-sm text-amber-400/80 font-bold mb-2 tracking-wider uppercase">Giai đoạn 1</p>
                <p className="font-semibold text-white text-lg mb-1">Đăng ký trực tuyến</p>
                <p className="text-neutral-400 text-sm">{formatDate(registration_start)} → {formatDate(registration_end)}</p>
              </div>

              <div className="relative pl-8">
                <span className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)] ring-4 ring-[#0f172a]" />
                <p className="text-sm text-blue-400/80 font-bold mb-2 tracking-wider uppercase">Giai đoạn 2</p>
                <p className="font-semibold text-white text-lg mb-1">Xét tuyển & Phỏng vấn</p>
                <p className="text-neutral-400 text-sm">Hội đồng chuyên môn đánh giá hồ sơ</p>
              </div>

              <div className="relative pl-8">
                <span className="absolute -left-[5px] top-1.5 w-[9px] h-[9px] rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)] ring-4 ring-[#0f172a]" />
                <p className="text-sm text-emerald-400/80 font-bold mb-2 tracking-wider uppercase">Giai đoạn 3</p>
                <p className="font-semibold text-white text-lg mb-1">Thông báo trúng tuyển</p>
                <p className="text-neutral-400 text-sm">Trong vòng 5 ngày làm việc</p>
              </div>
            </div>
          </motion.div>

          {/* Premium CTA Panel */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
             className="relative flex flex-col justify-between p-10 md:p-12 rounded-[2rem] bg-gradient-to-b from-[#1e293b] to-[#0f172a] border border-white/10 shadow-2xl overflow-hidden group"
          >
            {/* Subtle glow effect behind the CTA */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] group-hover:bg-amber-500/20 transition-colors duration-700 pointer-events-none" />

            <div className="relative z-10 mb-12">
              <h3 className="text-2xl font-bold text-white mb-4">
                Sẵn Sàng Chuyển Đổi?
              </h3>
              <p className="text-neutral-400 leading-relaxed mb-8">
                Số lượng giới hạn 50 học viên mỗi khóa để đảm bảo chất lượng đào tạo và tương tác tốt nhất. 
                Đừng bỏ lỡ chương trình CEO VCCI dành riêng cho bạn.
              </p>
              
              <button
                onClick={() => router.push("/registration")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-amber-400 text-neutral-900 font-bold text-base hover:bg-amber-300 transition-all group/btn shadow-[0_0_20px_rgba(251,191,36,0.15)] hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]"
              >
                 Bắt Đầu Đăng Ký
                 <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative z-10 pt-8 border-t border-white/10">
              <p className="text-xs font-bold text-neutral-500 mb-5 uppercase tracking-widest">Hỗ trợ 24/7 — Ms. Trâm</p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href={`tel:${contact_phone || '0983967567'}`} className="flex items-center gap-3 group/link">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/link:bg-white/10 transition-colors">
                    <Phone className="w-4 h-4 text-emerald-400" />
                  </div>
                  <span className="text-neutral-300 font-medium group-hover/link:text-white transition-colors">{contact_phone || '0983 967 567'}</span>
                </a>
                
                <a href={`mailto:${contact_email || 'tramnguyenvcci@gmail.com'}`} className="flex items-center gap-3 group/link">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/link:bg-white/10 transition-colors">
                    <Mail className="w-4 h-4 text-blue-400" />
                  </div>
                  <span className="text-neutral-300 font-medium group-hover/link:text-white transition-colors">{contact_email || 'tramnguyenvcci@gmail.com'}</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
