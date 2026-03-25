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
  },
  {
    title: "Tính lương & Chấm công",
    desc: "Tự động hóa hoàn toàn bảng lương, chấm công thời gian thực và quản lý phúc lợi chính xác.",
    icon: CreditCard,
  },
  {
    title: "Quản lý KPI",
    desc: "Hệ thống thiết lập và theo dõi chỉ số hiệu suất minh bạch, thúc đẩy động lực làm việc.",
    icon: ClipboardCheck,
  },
  {
    title: "Quy trình nghiệp vụ",
    desc: "Số hóa và quản lý các quy trình phê duyệt, luân chuyển công việc một cách linh hoạt (BPM).",
    icon: Layers,
  },
  {
    title: "Báo cáo thông minh",
    desc: "Hệ thống Dashboard phân tích dữ liệu trực quan, giúp lãnh đạo đưa ra quyết định chính xác.",
    icon: BarChart3,
  },
  {
    title: "Chuyển đổi số 4.0",
    desc: "Ứng dụng AI và Cloud Computing để dẫn đầu xu hướng công nghệ trong quản trị doanh nghiệp.",
    icon: Cpu,
  },
];

export const SolutionsSection = () => {
  return (
    <section id="giai-phap" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary uppercase bg-primary/5 rounded-full"
          >
            Giải pháp anaX ERP
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Nền tảng hợp nhất dẫn đầu xu hướng <span className="text-primary italic">chuyển đổi số 4.0</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            anaX cung cấp hệ sinh thái công nghệ linh hoạt, giúp doanh nghiệp tối ưu hiệu suất, tiết kiệm chi phí và đạt được các mục tiêu tăng trưởng nhanh chóng.
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
              className="group p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <item.icon size={28} className="text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
