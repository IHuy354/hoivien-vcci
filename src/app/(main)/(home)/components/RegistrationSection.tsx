"use client";

import { motion } from "framer-motion";
import { FileText, Zap, Phone, Mail } from "lucide-react";
import { useRouter } from "next/navigation";

export const RegistrationSection = () => {
  const router = useRouter();

  return (
    <section id="registration" className="py-20 md:py-28 bg-white">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-yellow-600 uppercase tracking-widest mb-3">Đăng ký</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Đăng Ký Tham Gia Ngay
          </h2>
          <p className="text-gray-600 mt-5 text-lg">Cơ hội kết nối và phát triển doanh nghiệp của bạn</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50/80 rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-3">
             Lịch Trình & Quy Trình
            </h3>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-yellow-500 flex items-center justify-center flex-shrink-0 shadow-md">
                  <FileText size={20} className="text-gray-900" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base mb-1">Thời gian đăng ký</p>
                  <p className="text-yellow-600 font-bold text-lg">01/05/2025 → 30/06/2025</p>
                  <p className="text-sm text-gray-500 mt-1">Nộp hồ sơ đăng ký trực tuyến</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-yellow-500 flex items-center justify-center flex-shrink-0 shadow-md">
                  <Zap size={20} className="text-gray-900" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-base mb-1">Xét chọn & thông báo</p>
                  <p className="text-yellow-600 font-bold text-lg">5 ngày kể từ ngày đăng ký</p>
                  <p className="text-sm text-gray-500 mt-1">Thông báo kết quả qua email</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA + Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 rounded-full blur-2xl -mr-10 -mt-10" />
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                Đăng Ký Nhanh
              </h3>
              <p className="text-base text-gray-600 mb-8">Chỉ mất vài phút để hoàn thành. Số lượng học bổng có hạn!</p>
              <button
                onClick={() => router.push("/registration")}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-yellow-500 text-gray-900 font-bold text-base hover:bg-yellow-400 hover:shadow-lg transition-all w-full justify-center transform hover:-translate-y-0.5"
              >
                 Đăng Ký Ngay
              </button>
            </div>

            <div className="mt-10 pt-8 border-t border-gray-100 relative z-10">
              <p className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide"> Hỗ trợ 24/7 — Ms. Trâm</p>
              <div className="flex flex-col gap-3">
                <a href="tel:0983967567" className="inline-flex items-center gap-3 text-base font-medium text-gray-600 hover:text-yellow-600 transition-colors">
                  <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center">
                    <Phone size={16} className="text-gray-900" />
                  </div>
                  0983 967 567
                </a>
                <a href="mailto:tramnguyenvcci@gmail.com" className="inline-flex items-center gap-3 text-base font-medium text-gray-600 hover:text-yellow-600 transition-colors">
                  <div className="w-9 h-9 rounded-full bg-gray-50 flex items-center justify-center">
                    <Mail size={16} className="text-gray-900" />
                  </div>
                  tramnguyenvcci@gmail.com
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
