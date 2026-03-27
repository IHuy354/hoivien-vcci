"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  CreditCard, 
  ClipboardCheck, 
  BarChart3, 
  Layers, 
  Cpu 
} from "lucide-react";

const solutions = [
  {
    title: "Quản lý Nhân sự",
    desc: "Tối ưu hóa quy trình tuyển dụng, quản lý hồ sơ nhân viên và phát triển nguồn nhân lực toàn diện.",
    icon: Users,
    color: "bg-primary/10 text-primary shadow-primary/10",
  },
  {
    title: "Tính lương & Chấm công",
    desc: "Tự động hóa hoàn toàn bảng lương, chấm công thời gian thực và quản lý phúc lợi chính xác.",
    icon: CreditCard,
    color: "bg-primary/10 text-primary shadow-primary/10",
  },
  {
    title: "Quản lý KPI",
    desc: "Hệ thống thiết lập và theo dõi chỉ số hiệu suất minh bạch, thúc đẩy động lực làm việc.",
    icon: ClipboardCheck,
    color: "bg-primary/10 text-primary shadow-primary/10",
  },
  {
    title: "Quy trình nghiệp vụ",
    desc: "Số hóa và quản lý các quy trình phê duyệt, luân chuyển công việc một cách linh hoạt (BPM).",
    icon: Layers,
    color: "bg-primary/10 text-primary shadow-primary/10",
  },
  {
    title: "Báo cáo thông minh",
    desc: "Hệ thống Dashboard phân tích dữ liệu trực quan, giúp lãnh đạo đưa ra quyết định chính xác.",
    icon: BarChart3,
    color: "bg-primary/10 text-primary shadow-primary/10",
  },
  {
    title: "Chuyển đối số 4.0",
    desc: "Ứng dụng AI và Cloud Computing để dẫn đầu xu hướng công nghệ trong quản trị doanh nghiệp.",
    icon: Cpu,
    color: "bg-primary/10 text-primary shadow-primary/10",
  },
];

export const SolutionsSection = () => {
  return (
    <section id="giai-phap" className="py-20 bg-background relative overflow-hidden">
      {/* Subtle organic background shapes */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -ml-64 -mb-64" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 mb-6 text-xs font-black tracking-[0.2em] text-primary uppercase bg-primary/10 rounded-xl"
          >
            Digital Core
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-foreground mb-6 leading-[1.1] tracking-tighter"
          >
            Nền tảng hợp nhất dẫn đầu xu hướng <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-primary/60 italic">
              chuyển đổi số 4.0
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground font-medium leading-relaxed"
          >
            anaX cung cấp hệ sinh thái công năng linh hoạt, giúp doanh nghiệp tối ưu hiệu suất và đạt được mục tiêu tăng trưởng đột phá.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-10 bg-card/40 backdrop-blur-xl rounded-[2.5rem] border border-white/5 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.5)] hover:border-primary/20 transition-all duration-500 overflow-hidden"
            >
              {/* Geometric pattern on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none" 
                   style={{ background: "radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)", backgroundSize: "24px 24px" }} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 ${item.color.split(" ")[0]} rounded-[2rem] flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <item.icon size={32} className={`${item.color.split(" ")[1]}`} />
                </div>
                <h3 className="text-xl font-black text-foreground mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-bold">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
