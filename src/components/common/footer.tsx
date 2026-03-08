import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-foreground/[0.03] border-t border-border", className)}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="relative h-12 w-auto mb-4 flex items-center">
              <Image 
                src="/imgs/logo.png" 
                alt="CEO VCCI" 
                width={160}
                height={48}
                className=" object-contain" 
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Cộng Đồng CEO VCCI — Chương trình đào tạo Giám đốc điều hành doanh nghiệp CEO 4.0 trong kỷ nguyên AI
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Liên hệ</h4>
            <div className="space-y-3">
              <a href="https://maps.app.goo.gl/XXm47Grhm7Pho8h7A" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                Tòa nhà VCCI-HCM, 171 Võ Thị Sáu, Q.3, Tp.HCM
              </a>
              <a href="https://zalo.me/0903857520" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone size={16} /> 0903.857.520 — Đoàn Thông
              </a>
              <a href="mailto:doanthong@vcci-hcm.org.vn" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail size={16} /> doanthong@vcci-hcm.org.vn
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Chương trình</h4>
            <div className="flex flex-col gap-2">
              {[
                { label: "Đăng ký tham gia", href: "/#registration" },
                { label: "Hình ảnh chương trình", href: "/#gallery" },
                { label: "Nội dung chương trình", href: "/#objectives" },
                { label: "Diễn giả & Giảng viên", href: "/#speakers" },
                { label: "Nhà tài trợ", href: "/#sponsors" }
              ].map((item) => (
                <Link key={item.label} href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer block">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            ©2025{" "}
            <a href="https://vcci-hcm.org.vn/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">VCCI-HCM</a>
            {" & "}
            <a href="https://meu-solutions.com/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">MeU Solutions</a>
            {" đồng hành và phát triển"}
          </p>
        </div>
      </div>
    </footer>
  );
}