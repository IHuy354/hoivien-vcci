"use client";

import Image from "next/image";
import { Sponsor } from "@/types/homepage";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SponsorsSectionProps {
  title?: string;
  subtitle?: string;
  year?: string;
  sponsors?: Sponsor[];
}

const defaultSponsors: Sponsor[] = [
  { id: 1, name: "VCCI-JP", logo: "/images/sponsors/vcci-jp.png", tier: "platinum" },
  { id: 2, name: "Seaplanes", logo: "/images/sponsors/seaplanes.png", tier: "platinum" },
  { id: 3, name: "SELF-JP", logo: "/images/sponsors/self-jp.png", tier: "platinum" },
  { id: 4, name: "VCCI", logo: "/images/sponsors/vcci.png", tier: "platinum" },
  { id: 5, name: "Lạc Hồng University", logo: "/images/sponsors/lhun.png", tier: "gold" },
  { id: 6, name: "Ngân hàng", logo: "/images/sponsors/bank.png", tier: "gold" },
  { id: 7, name: "Uni Value", logo: "/images/sponsors/uni-value.png", tier: "gold" },
  { id: 8, name: "Retail", logo: "/images/sponsors/retail.png", tier: "gold" },
];

export function SponsorsSection({
  title = "Nhà Tài Trợ Đồng Hành",
  subtitle = "Những đối tác tin cậy đồng hành cùng chương trình",
  year = "2025",
  sponsors = defaultSponsors,
}: SponsorsSectionProps) {
  const platinumSponsors = sponsors.filter(s => s.tier === 'platinum');
  const goldSponsors = sponsors.filter(s => s.tier === 'gold');
  const silverSponsors = sponsors.filter(s => s.tier === 'silver');

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title} {year}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Platinum Sponsors */}
          {platinumSponsors.length > 0 && (
            <div>
              <div className="text-center mb-6">
                <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 text-sm">
                  Nhà Tài Trợ Chính
                </Badge>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {platinumSponsors.map((sponsor) => (
                  <Card
                    key={sponsor.id}
                    className="p-6 flex items-center justify-center hover:shadow-lg transition-shadow duration-300 bg-white border-2 border-blue-100"
                  >
                    <div className="relative w-full h-20">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Gold Sponsors */}
          {goldSponsors.length > 0 && (
            <div>
              <div className="text-center mb-6">
                <Badge className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-1 text-sm">
                  Nhà Tài Trợ Vàng
                </Badge>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {goldSponsors.map((sponsor) => (
                  <Card
                    key={sponsor.id}
                    className="p-6 flex items-center justify-center hover:shadow-lg transition-shadow duration-300 bg-white"
                  >
                    <div className="relative w-full h-16">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Silver Sponsors */}
          {silverSponsors.length > 0 && (
            <div>
              <div className="text-center mb-6">
                <Badge className="bg-gradient-to-r from-gray-400 to-gray-500 text-white px-4 py-1 text-sm">
                  Nhà Tài Trợ Bạc
                </Badge>
              </div>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {silverSponsors.map((sponsor) => (
                  <Card
                    key={sponsor.id}
                    className="p-4 flex items-center justify-center hover:shadow-lg transition-shadow duration-300 bg-white"
                  >
                    <div className="relative w-full h-12">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 33vw, 16vw"
                      />
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
