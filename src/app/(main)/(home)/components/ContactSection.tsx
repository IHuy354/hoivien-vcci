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
    <section id="lien-he" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-primary uppercase bg-primary/5 rounded-full">
              Liên hệ với chúng tôi
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Sẵn sàng đồng hành cùng <span className="text-primary italic">sự phát triển</span> của bạn
            </h2>
            <p className="text-lg text-gray-600 mb-12 leading-relaxed">
              Vui lòng để lại thông tin hoặc liên hệ trực tiếp với chúng tôi qua các kênh dưới đây để được tư vấn giải pháp tốt nhất.
            </p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">VP Đại diện</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Tầng 17 Vincom center, 72 đường Lê Thánh Tôn, P. Bến Nghé, Q.1, TP. HCM</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">VP Phát triển</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">03 Sông Thao, Phường 2, Quận Tân Bình, TP. HCM</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Điện thoại</h4>
                    <p className="text-sm text-gray-600">(+84) 2841099879</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Email</h4>
                    <p className="text-sm text-gray-600">contact@meu-solutions.com</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm"
          >
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900 ml-1">Họ và tên</label>
                  <input 
                    type="text" 
                    placeholder="Nguyễn Văn A" 
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-900 ml-1">Số điện thoại</label>
                  <input 
                    type="tel" 
                    placeholder="0901 234 567" 
                    className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 ml-1">Email</label>
                <input 
                  type="email" 
                  placeholder="name@company.com" 
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-900 ml-1">Câu hỏi hoặc yêu cầu</label>
                <textarea 
                  rows={4} 
                  placeholder="Tôi muốn tìm hiểu thêm về giải pháp anaX ERP..." 
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 rounded-2xl bg-primary text-white font-bold text-lg shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-3"
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
