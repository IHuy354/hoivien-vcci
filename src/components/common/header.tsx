"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Giải pháp", href: "#giai-phap" },
  { label: "Tính năng", href: "#tinh-nang" },
  { label: "Về chúng tôi", href: "#ve-chung-toi" },
  { label: "Liên hệ", href: "#lien-he" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsOpen(false);
    if (pathname === "/") {
      if (href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      if (href.startsWith("#")) {
        e.preventDefault();
        router.push("/" + href);
      }
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        !scrolled && "bg-gradient-to-b from-black/20 via-black/5 to-transparent"
      )}
    >

      {/* Main Bar - Adaptive */}
      <div
        className={cn(
          "transition-all duration-300 ease-in-out border-b will-change-transform",
          scrolled
            ? "bg-white/60 backdrop-blur-lg shadow-md py-3 border-gray-100"
            : "bg-transparent py-5 border-transparent"
        )}
      >
        <div className="container mx-auto px-4 md:px-10 lg:px-20">
          <div className="flex items-center">
            {/* Logo Section - Flex 1 to push nav to center */}
            <div className="flex-1 flex justify-start">
              <Link 
                href="/" 
                className="group flex items-center gap-2"
                onClick={(e) => {
                  if (pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                <div className="relative transform-gpu">
                  <div className="absolute -inset-2 bg-blue-500/10 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className={cn(
                    "relative z-10 transition-transform duration-300 ease-in-out",
                    scrolled ? "scale-90" : "scale-100"
                  )}>
                    <Image 
                      src="https://meu.com.vn/wp-content/uploads/2025/07/logo-meu-solutions-new-no-background.png" 
                      alt="MeU Solutions Logo" 
                      width={160} 
                      height={65} 
                      className="w-auto h-12 md:h-14 lg:h-16 object-contain group-hover:scale-105 transition-transform"
                      priority
                    />
                  </div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation - Perfect Center */}
            <nav className={cn(
              "hidden lg:flex items-center gap-1 p-1 rounded-full transition-all duration-300",
              scrolled
                ? "bg-transparent border-transparent"
                : "bg-white/10 border border-white/20 backdrop-blur-sm"
            )}>
              {navItems.map((link) => {
                const isActive = pathname === "/" && typeof window !== "undefined" && window.location.hash === link.href;
                return (
                  <Link
                    key={link.href}
                    href={pathname === "/" ? link.href : `/${link.href}`}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={cn(
                      "relative group px-5 py-2 rounded-full transition-all duration-300",
                      isActive
                        ? (scrolled
                          ? "bg-primary text-white shadow-md shadow-primary/20"
                          : "bg-white text-primary shadow-md")
                        : (scrolled
                          ? "hover:bg-gray-100/50 text-gray-600 hover:text-primary"
                          : "hover:bg-white/20 text-white/90 hover:text-white")
                    )}
                  >
                    <span className="text-sm font-bold tracking-tight">
                      {link.label}
                    </span>
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons - Flex 1 to push nav to center */}
            <div className="flex-1 hidden lg:flex items-center justify-end gap-3">
              <Button 
                onClick={() => {}} 
                className={cn(
                  "rounded-full font-bold px-7 py-2 h-10 transition-all shadow-lg duration-300 overflow-hidden",
                  scrolled
                    ? "bg-primary text-white shadow-primary/10"
                    : "bg-white text-primary hover:bg-white/90 shadow-white/5"
                )}
              >
                XEM DEMO
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "lg:hidden rounded-2xl transition-all duration-300 w-11 h-11",
                scrolled ? "bg-gray-50 text-slate-900 border border-gray-100" : "bg-white/10 text-white border border-white/20"
              )}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500 ease-in-out border-t",
            scrolled
              ? "bg-white/95 border-gray-100"
              : "bg-black/60 border-white/10 backdrop-blur-2xl",
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <nav className="flex flex-col p-6 space-y-3">
            {navItems.map((link) => {
              const isActive = pathname === "/" && typeof window !== "undefined" && window.location.hash === link.href;
              return (
                <Link
                  key={link.href}
                  href={pathname === "/" ? link.href : `/${link.href}`}
                  className={cn(
                    "flex items-center justify-between p-4 rounded-2xl transition-all",
                    isActive
                      ? (scrolled
                        ? "bg-primary/10 text-primary font-bold shadow-sm"
                        : "bg-white/20 text-white font-bold border border-white/20")
                      : (scrolled
                        ? "bg-gray-50 text-gray-700 font-bold"
                        : "bg-white/5 text-gray-200 font-medium border border-white/5")
                  )}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  <span>{link.label}</span>
                </Link>
              );
            })}
            <Button className="w-full mt-4 rounded-2xl py-7 text-lg bg-primary text-white font-bold shadow-xl shadow-primary/20" onClick={() => setIsOpen(false)}>
              XEM DEMO NGAY
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
