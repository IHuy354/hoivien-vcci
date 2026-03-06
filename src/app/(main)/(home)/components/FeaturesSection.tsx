"use client";

import { FeatureCard } from "@/types/homepage";
import { Card, CardContent } from "@/components/ui/card";

interface FeaturesSectionProps {
  title?: string;
  subtitle?: string;
  features?: FeatureCard[];
}

const defaultFeatures: FeatureCard[] = [
  {
    id: 1,
    icon: "🎯",
    title: "Phương Pháp Học Tập Tiên Tiến",
    description: "Áp dụng phương pháp học tập hiện đại, kết hợp lý thuyết và thực hành",
  },
  {
    id: 2,
    icon: "📚",
    title: "Hơn 50ng Khóa Học 100% Miễn Phí",
    description: "Truy cập không giới hạn các khóa học chất lượng cao hoàn toàn miễn phí",
  },
  {
    id: 3,
    icon: "🎓",
    title: "Nội Dung Và Đăng Ký Khóa Lương",
    description: "Chương trình được thiết kế bài bản, nội dung chất lượng cao",
  },
  {
    id: 4,
    icon: "👥",
    title: "Kết Nối Với Dân Chuyên",
    description: "Giao lưu, kết nối với các chuyên gia hàng đầu trong ngành",
  },
  {
    id: 5,
    icon: "🏆",
    title: "Hơn 100 Giải Viên",
    description: "Đội ngũ giảng viên giàu kinh nghiệm, tận tâm hướng dẫn",
  },
  {
    id: 6,
    icon: "📊",
    title: "Gia Tăng Học Viên Nhanh Chóng",
    description: "Cộng đồng học viên đông đảo, năng động và hỗ trợ lẫn nhau",
  },
];

export function FeaturesSection({ 
  title = "Lợi Ích Khi Tham Gia",
  subtitle = "Những giá trị bạn nhận được khi tham gia chương trình",
  features = defaultFeatures 
}: FeaturesSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <Card 
              key={feature.id} 
              className="border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center text-3xl">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
