"use client";

import { MapPin, Phone, Mail, Facebook, Linkedin, Youtube, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const address1 = "Tầng 17 Vincom center, 72 đường Lê Thánh Tôn, phường Sài Gòn, TP. HCM";
  const address2 = "03 Sông Thao, Phường 2, Quận Tân Bình, TP. HCM";
  const phone = "(+84) 2841099879";
  const email = "contact@meu-solutions.com";
  const seoDescription = "MeU Solutions là đơn vị hàng đầu trong việc kiểm thử và phát triển phần mềm máy tính, mang đến giải pháp chuyển đổi số toàn diện cho doanh nghiệp.";

  return (
    <footer className={cn("relative bg-slate-950 text-slate-300 pt-20 pb-10 overflow-hidden", className)}>
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 blur-[120px] rounded-full opacity-50" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Brand Column */}
          <div className="md:col-span-12 lg:col-span-5">
            <div className="mb-8">
              <Link href="/">
                <Image 
                  src="https://meu.com.vn/wp-content/uploads/2025/07/logo-meu-solutions-new-no-background.png" 
                  alt="MeU Solutions" 
                  width={220}
                  height={70}
                  className="object-contain" 
                />
              </Link>
            </div>
            <p className="text-base text-slate-400 leading-relaxed mb-8 max-w-md">
              {seoDescription}
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, href: "#" },
                { icon: Youtube, href: "#" },
                { icon: Linkedin, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-6 lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-8 relative inline-block">
              Liên hệ
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full" />
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div className="flex flex-col gap-3">
                  <span className="text-sm leading-relaxed"><strong className="text-slate-100 block mb-1">VP Đại diện:</strong> {address1}</span>
                  <span className="text-sm leading-relaxed"><strong className="text-slate-100 block mb-1">VP Phát triển:</strong> {address2}</span>
                </div>
              </div>
              <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-4 group hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors text-primary">
                  <Phone size={18} />
                </div>
                <span className="text-sm font-medium">{phone}</span>
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-4 group hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors text-primary">
                  <Mail size={18} />
                </div>
                <span className="text-sm font-medium">{email}</span>
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-6 lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-widest text-white mb-8 relative inline-block">
              Liên kết
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary rounded-full" />
            </h4>
            <div className="flex flex-col gap-4">
              {[
                { label: "Giải pháp số", href: "/#giai-phap" },
                { label: "Về MeU Solutions", href: "/#ve-chung-toi" },
                { label: "Liên hệ tư vấn", href: "/#lien-he" },
                { label: "Đăng ký hội viên", href: "https://vcci.erp.meu-solutions.com/dang-ky" }
              ].map((item) => (
                <Link 
                  key={item.label} 
                  href={item.href} 
                  className="group flex items-center text-sm text-slate-400 hover:text-white transition-all"
                >
                  <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary mr-2" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-500 font-medium">
            © 2026 <span className="text-slate-300">MeU Solutions</span>. Tất cả quyền được bảo lưu.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Chính sách bảo mật</Link>
            <Link href="#" className="text-xs text-slate-500 hover:text-white transition-colors">Điều khoản dịch vụ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}