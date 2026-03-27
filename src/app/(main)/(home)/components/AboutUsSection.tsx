"use client";

import { motion } from "framer-motion";
import { 
  History, 
  Users2, 
  Lightbulb, 
  Handshake,
  CheckCircle2
} from "lucide-react";
import Image from "next/image";

const stats = [
  { label: "Năm thành lập", value: "8+", icon: History },
  { label: "Nhân sự tài năng", value: "100+", icon: Users2 },
  { label: "Năm kinh nghiệm", value: "20+", icon: Lightbulb },
  { label: "Đối tác tiêu biểu", value: "100+", icon: Handshake },
];

export const AboutUsSection = () => {
  return (
    <section id="ve-chung-toi" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative organic shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-2 mb-6 text-xs font-black tracking-[0.2em] text-primary uppercase bg-primary/10 rounded-xl">
              About Our Vision
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-foreground mb-6 leading-[1.1] tracking-tighter">
              Đơn vị hàng đầu trong việc <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60 italic">
                kiểm thử & phát triển
              </span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-medium">
              MeU Solutions mang đến sự đổi mới để cung cấp các giải pháp phù hợp cho khách hàng với kết quả vượt trội. Chúng tôi tự hào là sự đảm bảo thành công cho dự án của bạn.
            </p>
            
            <div className="grid grid-cols-1 gap-4 mb-10">
              {[
                "Chất lượng sản phẩm vượt trội",
                "Áp dụng hệ thống quản lý dự án hiện đại",
                "Dịch vụ khách hàng chuyên nghiệp",
                "Đội ngũ chuyên gia giàu kinh nghiệm"
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 shadow-sm hover:border-primary/20 transition-all"
                >
                  <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center text-primary shadow-inner">
                    <CheckCircle2 size={16} />
                  </div>
                  <span className="text-foreground font-bold text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.a
              whileHover={{ opacity: 0.9, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1xJKBScjJvcgw8bPGt-DYoFr1v8gDRkjt/view?usp=drivesdk"
              target="_blank"
              className="inline-flex items-center justify-center px-10 py-4 rounded-xl bg-gradient-to-r from-primary to-primary/80 text-black font-black shadow-xl shadow-primary/20 transition-all"
            >
              Hồ sơ năng lực (PDF)
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* High-Contrast Bordered Image Frame */}
            <div className="p-3 bg-gradient-to-br from-primary via-primary/60 to-primary/40 rounded-[3rem] shadow-2xl">
              <div className="aspect-square relative rounded-[2.5rem] overflow-hidden bg-background">
                <Image 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                  alt="MeU Solutions Team" 
                  fill
                  className="object-cover brightness-75 hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </div>
            
            {/* High-Fidelity Floating Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 bg-card/80 p-8 rounded-[2rem] shadow-2xl border border-white/10 hidden md:block max-w-[280px] backdrop-blur-xl"
            >
              <div className="flex items-center gap-5 mb-3">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary shadow-inner">
                  <Handshake size={24} />
                </div>
                <div>
                  <div className="text-3xl font-black text-foreground leading-tight">100+</div>
                  <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-black">Đối tác tin cậy</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed font-bold italic">
                &quot;Kiến tạo giá trị bền vững qua từng dòng code và giải pháp công nghệ.&quot;
              </p>
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * i * 0.05 }}
              className="group p-8 bg-card/40 backdrop-blur-lg rounded-[2rem] border border-white/10 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.5)] text-center hover:border-primary/20 transition-all duration-500"
            >
              <div className="w-12 h-12 mx-auto bg-white/5 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-500">
                <stat.icon size={22} className="text-primary group-hover:text-black transition-colors" />
              </div>
              <div className="text-3xl font-black text-foreground mb-1 tracking-tighter">{stat.value}</div>
              <div className="text-muted-foreground text-[10px] font-black uppercase tracking-widest leading-none">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
