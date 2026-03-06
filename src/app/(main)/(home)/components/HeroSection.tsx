"use client";

import Image from "next/image";
import { StatItem } from "@/types/homepage";
import { Card } from "@/components/ui/card";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  stats?: StatItem[];
}

const defaultStats: StatItem[] = [
  { value: "5", label: "Vùng Miền" },
  { value: "500+", label: "Thành viên" },
  { value: "4", label: "Chương trình" },
  { value: "3,000+", label: "Doanh nghiệp" },
];

export function HeroSection({ 
  title = "Phát triển doanh nghiệp toàn diện",
  subtitle = "Nền tảng phát triển năng lực lãnh đạo cho CEO",
  stats = defaultStats 
}: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Stats Cards */}
        <Card className="max-w-5xl mx-auto bg-white shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 text-center hover:bg-gray-50 transition-colors"
              >
                <div className="flex flex-col items-center justify-center gap-2">
                  {stat.icon && (
                    <div className="relative w-12 h-12 mb-2">
                      <Image src={stat.icon} alt={stat.label} fill className="object-contain" sizes="48px" />
                    </div>
                  )}
                  <div className="text-3xl md:text-4xl font-bold text-blue-600">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
