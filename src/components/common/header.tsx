"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const navItems = [
  { label: "Đăng ký", href: "#registration" },
  { label: "Hình ảnh", href: "#gallery" },
  { label: "Nội dung", href: "#objectives" },
  { label: "Diễn giả", href: "#speakers" },
  { label: "Nhà tài trợ", href: "#sponsors" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (pathname !== "/") {
      router.push("/" + href);
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/60 backdrop-blur-sm shadow-sm  py-1" : "py-4 bg-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link 
          href="/" 
          onClick={handleLogoClick} 
          className="flex items-center gap-3 relative"
        >
          <Image 
            src="/imgs/logo.png" 
            alt="CEO VCCI" 
            width={110}
            height={70}
            priority
            className=" object-contain" 
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const targetHref = pathname === "/" ? item.href : `/${item.href}`;
            return (
              <Link
                key={item.href}
                href={targetHref}
                onClick={() => handleNavClick(item.href)}
                className={`px-4 py-2 rounded-full text-base font-semibold transition-all duration-300 ${
                  scrolled
                    ? "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    : "text-white hover:text-white hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <button
            onClick={() => router.push("/registration")}
            className="ml-3 px-6 py-2.5 rounded-full bg-yellow-500 text-gray-900 text-sm font-semibold hover:bg-yellow-400 transition-colors shadow-sm"
          >
            Đăng Ký Ngay
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-xl hover:bg-secondary/60 transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 backdrop-blur-md mt-2 mx-4 rounded-2xl overflow-hidden shadow-lg border border-gray-100"
          >
            <div className="p-4 flex flex-col gap-1">
              {navItems.map((item) => {
                const targetHref = pathname === "/" ? item.href : `/${item.href}`;
                return (
                  <Link
                    key={item.href}
                    href={targetHref}
                    onClick={() => handleNavClick(item.href)}
                    className="px-4 py-3 rounded-xl text-sm font-medium text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              })}
              <button
                onClick={() => {
                  setMenuOpen(false);
                  router.push("/registration");
                }}
                className="mt-2 px-6 py-3 rounded-xl bg-yellow-500 text-gray-900 text-sm font-semibold text-center hover:bg-yellow-400 transition-colors"
              >
                Đăng Ký Ngay
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
