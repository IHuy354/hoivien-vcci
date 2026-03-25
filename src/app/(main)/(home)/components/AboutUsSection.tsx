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
    <section id="ve-chung-toi" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary uppercase bg-primary/5 rounded-full">
              Về MeU Solutions
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Đơn vị hàng đầu trong việc <span className="text-primary italic">kiểm thử và phát triển</span> phần mềm
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              MeU Solutions mang đến sự đổi mới để cung cấp các giải pháp phù hợp cho khách hàng với kết quả vượt trội. Chúng tôi tự hào là sự đảm bảo thành công cho dự án của bạn với chất lượng sản phẩm vượt trội và dịch vụ chuyên nghiệp.
            </p>
            
            <div className="space-y-4 mb-10">
              {[
                "Chất lượng sản phẩm vượt trội",
                "Áp dụng hệ thống quản lý dự án hiện đại",
                "Dịch vụ khách hàng chuyên nghiệp",
                "Đội ngũ chuyên gia giàu kinh nghiệm (AI, Cloud, Big Data)"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://drive.google.com/file/d/1xJKBScjJvcgw8bPGt-DYoFr1v8gDRkjt/view?usp=drivesdk"
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all"
            >
              Hồ sơ năng lực (PDF)
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-[40px] overflow-hidden shadow-2xl">
              <Image 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="MeU Solutions Team" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hidden md:block max-w-[280px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Handshake className="text-primary" size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">100+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Đối tác tin cậy</div>
                </div>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Được dẫn dắt bởi đội ngũ chuyên gia giàu kinh nghiệm trong lĩnh vực công nghệ.
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white rounded-3xl border border-gray-100 shadow-sm text-center group hover:border-primary/20 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 mx-auto bg-primary/5 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <stat.icon size={24} className="text-primary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
