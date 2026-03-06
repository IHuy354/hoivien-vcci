"use client";

import Image from "next/image";
import { Speaker } from "@/types/homepage";
import { Card, CardContent } from "@/components/ui/card";

interface SpeakersSectionProps {
  title?: string;
  subtitle?: string;
  speakers?: Speaker[];
}

const defaultSpeakers: Speaker[] = [
  {
    id: 1,
    name: "Ông Nguyễn Văn A",
    position: "CEO",
    company: "Công ty ABC",
    avatar: "/images/speaker-1.jpg",
  },
  {
    id: 2,
    name: "Bà Trần Thị B",
    position: "Chủ tịch HĐQT",
    company: "Tập đoàn XYZ",
    avatar: "/images/speaker-2.jpg",
  },
  {
    id: 3,
    name: "Ông Lê Văn C",
    position: "Giám đốc điều hành",
    company: "Công ty DEF",
    avatar: "/images/speaker-3.jpg",
  },
  {
    id: 4,
    name: "Bà Phạm Thị D",
    position: "CEO",
    company: "MNO Group",
    avatar: "/images/speaker-4.jpg",
  },
  {
    id: 5,
    name: "Ông Hoàng Văn E",
    position: "Founder",
    company: "PQR Tech",
    avatar: "/images/speaker-5.jpg",
  },
  {
    id: 6,
    name: "Bà Vũ Thị F",
    position: "Managing Director",
    company: "STU Corporation",
    avatar: "/images/speaker-6.jpg",
  },
  {
    id: 7,
    name: "Ông Đặng Văn G",
    position: "CEO",
    company: "VWX Ventures",
    avatar: "/images/speaker-7.jpg",
  },
  {
    id: 8,
    name: "Bà Bùi Thị H",
    position: "President",
    company: "YZ Holdings",
    avatar: "/images/speaker-8.jpg",
  },
];

export function SpeakersSection({
  title = "Diễn Giả Của Các Năm",
  subtitle = "Đội ngũ diễn giả giàu kinh nghiệm và uy tín",
  speakers = defaultSpeakers,
}: SpeakersSectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
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

        {/* Speakers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {speakers.map((speaker) => (
            <Card
              key={speaker.id}
              className="border border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <CardContent className="p-0">
                <div className="flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="relative w-full aspect-square overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200">
                    <Image
                      src={speaker.avatar}
                      alt={speaker.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                    />
                  </div>

                  {/* Info */}
                  <div className="p-4 w-full">
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {speaker.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-1">
                      {speaker.position}
                    </p>
                    {speaker.company && (
                      <p className="text-xs text-gray-500">
                        {speaker.company}
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
