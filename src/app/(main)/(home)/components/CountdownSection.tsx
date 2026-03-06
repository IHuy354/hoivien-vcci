"use client";

import { useState, useEffect } from "react";
import { CountdownConfig } from "@/types/homepage";
import { Card } from "@/components/ui/card";

interface CountdownSectionProps {
  config?: CountdownConfig;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const defaultConfig: CountdownConfig = {
  eventDate: new Date("2025-12-31T00:00:00"),
  title: "Ngày Khai Giảng Khóa Học CEO",
  subtitle: "Đừng bỏ lỡ cơ hội tham gia chương trình đặc biệt này",
};

export function CountdownSection({ config = defaultConfig }: CountdownSectionProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +config.eventDate - +new Date();

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }

      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [config.eventDate]);

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, "0");
  };

  return (
    <section className="py-16 md:py-24 bg-[#1a2942]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {config.title}
          </h2>
          {config.subtitle && (
            <p className="text-gray-300 max-w-2xl mx-auto">
              {config.subtitle}
            </p>
          )}
        </div>

        {/* Countdown Timer */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-4 gap-4 md:gap-8">
            {/* Days */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <div className="p-6 md:p-8 text-center">
                <div className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">
                  {formatNumber(timeLeft.days)}
                </div>
                <div className="text-sm md:text-base text-gray-300 font-medium">
                  Ngày
                </div>
              </div>
            </Card>

            {/* Hours */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <div className="p-6 md:p-8 text-center">
                <div className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">
                  {formatNumber(timeLeft.hours)}
                </div>
                <div className="text-sm md:text-base text-gray-300 font-medium">
                  Giờ
                </div>
              </div>
            </Card>

            {/* Minutes */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <div className="p-6 md:p-8 text-center">
                <div className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">
                  {formatNumber(timeLeft.minutes)}
                </div>
                <div className="text-sm md:text-base text-gray-300 font-medium">
                  Phút
                </div>
              </div>
            </Card>

            {/* Seconds */}
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <div className="p-6 md:p-8 text-center">
                <div className="text-4xl md:text-6xl font-bold text-yellow-400 mb-2">
                  {formatNumber(timeLeft.seconds)}
                </div>
                <div className="text-sm md:text-base text-gray-300 font-medium">
                  Giây
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
