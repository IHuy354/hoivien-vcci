"use client";

import { ValueProposition } from "@/types/homepage";
import { Card, CardContent } from "@/components/ui/card";

interface ValuePropositionSectionProps {
  title?: string;
  subtitle?: string;
  items?: ValueProposition[];
}

const defaultItems: ValueProposition[] = [
  {
    id: 1,
    icon: "💡",
    title: "Nâng cao năng lực lãnh đạo",
    description: "Phát triển kỹ năng lãnh đạo chiến lược và quản trị doanh nghiệp hiệu quả",
  },
  {
    id: 2,
    icon: "🚀",
    title: "Đổi mới sáng tạo",
    description: "Học cách tư duy đổi mới và áp dụng công nghệ vào hoạt động kinh doanh",
  },
  {
    id: 3,
    icon: "📈",
    title: "Tăng trưởng bền vững",
    description: "Xây dựng chiến lược phát triển dài hạn và bền vững cho doanh nghiệp",
  },
  {
    id: 4,
    icon: "🤝",
    title: "Mở rộng mạng lưới",
    description: "Kết nối với cộng đồng doanh nghiệp và các đối tác tiềm năng",
  },
  {
    id: 5,
    icon: "💼",
    title: "Hiểu biết thị trường",
    description: "Cập nhật xu hướng mới nhất và nắm bắt cơ hội kinh doanh",
  },
  {
    id: 6,
    icon: "🎯",
    title: "Chiến lược kinh doanh",
    description: "Xây dựng và thực thi chiến lược kinh doanh hiệu quả",
  },
];

export function ValuePropositionSection({ 
  title = "Phát Triển Toàn Diện Năng Lực Lãnh Đạo",
  subtitle = "Chương trình được thiết kế để phát triển toàn diện năng lực của CEO",
  items = defaultItems 
}: ValuePropositionSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-[#1a2942]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Value Propositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {items.map((item) => (
            <Card 
              key={item.id} 
              className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
