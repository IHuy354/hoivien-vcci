"use client";

import Image from "next/image";
import { Speaker } from "@/types/homepage";
import { Card, CardContent } from "@/components/ui/card";

interface AdvisoryBoardSectionProps {
  title?: string;
  subtitle?: string;
  members?: Speaker[];
}

const defaultMembers: Speaker[] = [
  {
    id: 1,
    name: "Ông Nguyễn Minh A",
    position: "Cố vấn cao cấp",
    company: "Ex-CEO ABC Corp",
    avatar: "/images/advisor-1.jpg",
  },
  {
    id: 2,
    name: "Bà Trần Thu B",
    position: "Chuyên gia tài chính",
    company: "CFO XYZ Group",
    avatar: "/images/advisor-2.jpg",
  },
  {
    id: 3,
    name: "Ông Lê Quang C",
    position: "Chuyên gia chiến lược",
    company: "McKinsey & Company",
    avatar: "/images/advisor-3.jpg",
  },
  {
    id: 4,
    name: "Bà Phạm Hà D",
    position: "Chuyên gia Marketing",
    company: "CMO DEF Inc",
    avatar: "/images/advisor-4.jpg",
  },
  {
    id: 5,
    name: "Ông Hoàng Tuấn E",
    position: "Chuyên gia công nghệ",
    company: "CTO GHI Tech",
    avatar: "/images/advisor-5.jpg",
  },
  {
    id: 6,
    name: "Bà Vũ Lan F",
    position: "Chuyên gia nhân sự",
    company: "CHRO JKL Ltd",
    avatar: "/images/advisor-6.jpg",
  },
  {
    id: 7,
    name: "Ông Đặng Hùng G",
    position: "Chuyên gia pháp lý",
    company: "Legal Director MNO",
    avatar: "/images/advisor-7.jpg",
  },
  {
    id: 8,
    name: "Bà Bùi Linh H",
    position: "Chuyên gia quản trị",
    company: "Former CEO PQR",
    avatar: "/images/advisor-8.jpg",
  },
];

export function AdvisoryBoardSection({
  title = "Đội Ngũ Giảng Viên",
  subtitle = "Các chuyên gia hàng đầu trong lĩnh vực quản trị doanh nghiệp",
  members = defaultMembers,
}: AdvisoryBoardSectionProps) {
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

        {/* Advisory Board Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {members.map((member) => (
            <Card
              key={member.id}
              className="bg-white/10 border-white/20 hover:bg-white/20 transition-all duration-300 overflow-hidden group"
            >
              <CardContent className="p-0">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-4 w-full">
                    <h3 className="font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-300 mb-1">
                      {member.position}
                    </p>
                    {member.company && (
                      <p className="text-xs text-gray-400">
                        {member.company}
                      </p>
                    )}
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
