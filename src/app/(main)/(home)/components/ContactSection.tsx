"use client";

import { motion } from "framer-motion";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send
} from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="lien-he" className="py-20 bg-background relative overflow-hidden">
      {/* High-Fidelity Network Node Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-screen">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="contactNodePattern" width="30" height="30" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="0.6" fill="#D4AF37" />
            <path d="M2,2 L28,28 M28,2 L2,28" stroke="#D4AF37" strokeWidth="0.1" fill="none" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#contactNodePattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 mb-6 text-xs font-black tracking-[0.2em] text-primary uppercase bg-primary/10 rounded-xl">
              Get In Touch
            </div>
            <h2 className="text-2xl md:text-5xl font-black text-foreground mb-6 leading-[1.1] tracking-tighter">
              Sẵn sàng đồng hành cùng <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60 italic">
                sự phát triển
              </span> của bạn
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-medium">
              Vui lòng để lại thông tin hoặc liên hệ trực tiếp với chúng tôi qua các kênh dưới đây để được tư vấn giải pháp tốt nhất.
            </p>

            <div className="grid sm:grid-cols-1 gap-6 mb-10">
              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "VP Đại diện", info: "Tầng 17 Vincom center, 72 đường Lê Thánh Tôn, P. Bến Nghé, Q.1, TP. HCM" },
                  { icon: MapPin, title: "VP Phát triển", info: "03 Sông Thao, Phường 2, Quận Tân Bình, TP. HCM" },
                  { icon: Phone, title: "Điện thoại", info: "(+84) 2841099879" },
                  { icon: Mail, title: "Email", info: "contact@meu-solutions.com" },
                ].map((item, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 10 }}
                    className="flex gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 shadow-sm flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-black transition-all duration-300">
                      <item.icon size={20} className="text-primary group-hover:text-black" />
                    </div>
                    <div>
                      <h4 className="font-black text-foreground text-sm mb-0.5 tracking-tight">{item.title}</h4>
                      <p className="text-muted-foreground text-sm font-bold leading-relaxed">{item.info}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form with Dark Premium Feel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="bg-card/40 backdrop-blur-xl p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl shadow-black/50 relative overflow-hidden"
          >
            {/* Form Background Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full pointer-events-none" />
            
            <form className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-foreground/60 ml-1 uppercase tracking-widest">Họ và tên</label>
                  <input 
                    type="text" 
                    placeholder="Nguyễn Văn A" 
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 shadow-inner focus:border-primary/50 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold text-sm placeholder:text-white/20 text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-foreground/60 ml-1 uppercase tracking-widest">Số điện thoại</label>
                  <input 
                    type="tel" 
                    placeholder="0901 234 567" 
                    className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 shadow-inner focus:border-primary/50 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold text-sm placeholder:text-white/20 text-white"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-foreground/60 ml-1 uppercase tracking-widest">Email</label>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 shadow-inner focus:border-primary/50 focus:ring-4 focus:ring-primary/10 outline-none transition-all font-bold text-sm placeholder:text-white/20 text-white"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-foreground/60 ml-1 uppercase tracking-widest">Câu hỏi hoặc yêu cầu</label>
                <textarea 
                  rows={3} 
                  placeholder="Tôi muốn tìm hiểu thêm về giải pháp anaX ERP..." 
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 shadow-inner focus:border-primary/50 focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none font-bold text-sm placeholder:text-white/20 text-white"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ boxShadow: "0 25px 50px -12px rgba(212, 175, 55, 0.4)" }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-black font-black text-lg shadow-xl transition-all flex items-center justify-center gap-4"
              >
                Gửi yêu cầu <Send size={20} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
