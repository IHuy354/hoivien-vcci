"use client";

import { useGetApiV10PublicSiteSettings } from "@/api/endpoints/public";
import { MapPin, Phone, Mail, Facebook, Linkedin, Youtube, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  const { data } = useGetApiV10PublicSiteSettings();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const settings = (data as any)?.responseData;

  const address = settings?.contact_address || "Tòa nhà VCCI-HCM, 171 Võ Thị Sáu, Q.3, Tp.HCM";
  const phone = settings?.contact_phone || "0903.857.520 — Đoàn Thông";
  const email = settings?.contact_email || "doanthong@vcci-hcm.org.vn";
  const facebookUrl = settings?.facebook_url || "#";
  const youtubeUrl = settings?.youtube_url || "#";
  const seoDescription = settings?.seo_description || "Cộng Đồng CEO VCCI — Chương trình đào tạo Giám đốc điều hành doanh nghiệp CEO 4.0 trong kỷ nguyên AI. Nơi kết nối và phát triển năng lực lãnh đạo toàn diện.";

  return (
    <footer className={cn("relative bg-foreground/[0.02] border-t border-border overflow-hidden", className)}>
      {/* Decorative top gradient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 md:w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      {/* Subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand Column */}
          <div className="md:col-span-12 lg:col-span-5 pr-0 lg:pr-8">
            <div className="mb-6 flex items-center">
              <Image 
                src="/imgs/logo.png" 
                alt="CEO VCCI" 
                width={180}
                height={54}
                className="object-contain" 
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-8">
              {seoDescription}
            </p>
            <div className="flex gap-3">
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Facebook size={16} />
              </a>
              <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Youtube size={16} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-foreground/5 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-6 lg:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-6">Liên hệ</h4>
            <div className="space-y-4">
              <a href={`https://maps.google.com/?q=${encodeURIComponent(address)}`} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-8 h-8 rounded-md bg-foreground/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <MapPin size={16} className="text-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm leading-relaxed mt-1">{address}</span>
              </a>
              <a href={`tel:${phone.replace(/[^0-9+]/g, '')}`} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-8 h-8 rounded-md bg-foreground/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <Phone size={16} className="text-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm">{phone}</span>
              </a>
              <a href={`mailto:${email}`} className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                <div className="w-8 h-8 rounded-md bg-foreground/5 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors">
                  <Mail size={16} className="text-foreground group-hover:text-primary transition-colors" />
                </div>
                <span className="text-sm">{email}</span>
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="md:col-span-6 lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-6">Chương trình</h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Đăng ký tham gia", href: "/#registration" },
                { label: "Hình ảnh chương trình", href: "/#gallery" },
                { label: "Nội dung chương trình", href: "/#objectives" },
                { label: "Diễn giả & Giảng viên", href: "/#speakers" },
                { label: "Nhà tài trợ", href: "/#sponsors" }
              ].map((item) => (
                <Link key={item.label} href={item.href} className="group flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
                  <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-primary mr-2" />
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 CEO VCCI. All rights reserved.
          </p>
          <div className="text-sm text-muted-foreground flex flex-wrap justify-center items-center gap-1">
            Được đồng hành cùng{" "}
            <a href="https://vcci-hcm.org.vn/" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-primary transition-colors">VCCI-HCM</a>
            {" & "}
            <a href="https://meu-solutions.com/" target="_blank" rel="noopener noreferrer" className="font-semibold text-foreground hover:text-primary transition-colors">MeU Solutions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}