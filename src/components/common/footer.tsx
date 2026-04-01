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
    <footer className={cn("relative bg-background text-slate-300 pt-24 pb-12 overflow-hidden border-t border-white/5", className)}>
      {/* High-Fidelity Background Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2 lg:col-span-5 flex flex-col max-md:items-center max-md:text-center">
            <div className="mb-8 transform hover:scale-105 transition-all duration-500">
              <Link href="/">
                <Image 
                  src="https://meu.com.vn/wp-content/uploads/2025/07/logo-meu-solutions-new-no-background.png" 
                  alt="MeU Solutions" 
                  width={220}
                  height={70}
                  className="object-contain brightness-125 saturate-[0.8]" 
                />
              </Link>
            </div>
            <p className="text-sm md:text-base text-slate-400 leading-relaxed mb-10 max-w-md font-medium">
              {seoDescription}
            </p>
            <div className="flex gap-5">
              {[
                { icon: Facebook, href: "https://www.facebook.com/meusolutions" },
                { icon: Youtube, href: "https://www.youtube.com/@meusolutions" },
                { icon: Linkedin, href: "https://www.linkedin.com/company/meu-solutions" }
              ].map((social, i) => (
                <a 
                  key={i}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary hover:text-black hover:border-primary hover:-translate-y-2 shadow-lg transition-all duration-500"
                >
                  <social.icon size={22} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-1 lg:col-span-4">
            <h4 className="text-sm font-black uppercase tracking-[0.25em] text-white mb-10 relative inline-block group">
              Liên hệ
              <span className="absolute -bottom-3 left-0 w-10 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-500" />
            </h4>
            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 text-primary shadow-inner">
                  <MapPin size={22} />
                </div>
                <div className="flex flex-col gap-4">
                  <div className="text-sm leading-relaxed">
                    <strong className="text-primary text-[10px] font-black uppercase tracking-[0.2em] block mb-1">VP Đại diện</strong> 
                    <span className="text-slate-300 font-medium">{address1}</span>
                  </div>
                  <div className="text-sm leading-relaxed">
                    <strong className="text-primary text-[10px] font-black uppercase tracking-[0.2em] block mb-1">VP Phát triển</strong> 
                    <span className="text-slate-300 font-medium">{address2}</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-5">
                <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-sm">
                    <Phone size={20} className="text-primary group-hover:text-black transition-colors" />
                  </div>
                  <span className="text-sm font-black text-slate-300 group-hover:text-primary transition-colors tracking-tight">{phone}</span>
                </a>
                
                <a href={`mailto:${email}`} className="flex items-center gap-5 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-sm">
                    <Mail size={20} className="text-primary group-hover:text-black transition-colors" />
                  </div>
                  <span className="text-sm font-black text-slate-300 group-hover:text-primary transition-colors tracking-tight">{email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-1 lg:col-span-3">
            <h4 className="text-sm font-black uppercase tracking-[0.25em] text-white mb-10 relative inline-block group">
              Liên kết
              <span className="absolute -bottom-3 left-0 w-10 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-500" />
            </h4>
            <ul className="space-y-4">
              {[
                { label: "Giải pháp số", href: "/#giai-phap" },
                { label: "Về MeU Solutions", href: "/#ve-chung-toi" },
                { label: "Liên hệ tư vấn", href: "/#lien-he" },
                { label: "Đăng ký hội viên", href: "https://vcci.erp.meu-solutions.com/dang-ky" }
              ].map((item) => (
                <li key={item.label}>
                  <Link 
                    href={item.href} 
                    className="group flex items-center text-sm text-slate-400 hover:text-white transition-all duration-300"
                  >
                    <ChevronRight size={16} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-500 text-primary mr-2" />
                    <span className="font-black group-hover:translate-x-1 uppercase tracking-wider text-[11px] transition-transform duration-300">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <p className="text-[11px] text-slate-500 font-black uppercase tracking-[0.2em]">
            © 2026 <span className="text-primary italic">MeU Solutions</span>. All Rights Reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            <Link href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-primary transition-all duration-300">Privacy Policy</Link>
            <Link href="#" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-primary transition-all duration-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}