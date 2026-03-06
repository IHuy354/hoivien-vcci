"use client";

import { JourneyStep } from "@/types/homepage";
import { Card, CardContent } from "@/components/ui/card";

interface JourneySectionProps {
  title?: string;
  subtitle?: string;
  steps?: JourneyStep[];
}

const defaultSteps: JourneyStep[] = [
  {
    id: 1,
    title: "Đăng ký tham gia",
    description: "Điền form đăng ký và xác nhận thông tin",
  },
  {
    id: 2,
    title: "Xác nhận thông tin",
    description: "Chúng tôi sẽ liên hệ và xác nhận thông tin của bạn",
  },
  {
    id: 3,
    title: "Tham gia khóa học",
    description: "Bắt đầu hành trình học tập và phát triển",
  },
  {
    id: 4,
    title: "Nhận chứng chỉ",
    description: "Hoàn thành khóa học và nhận chứng chỉ",
  },
];

export function JourneySection({
  title = "Quy Trình Tham Gia",
  subtitle = "4 bước đơn giản để bắt đầu hành trình phát triển của bạn",
  steps = defaultSteps,
}: JourneySectionProps) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
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

        {/* Journey Steps */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop View - Horizontal Timeline */}
          <div className="hidden md:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600" />

              <div className="grid grid-cols-4 gap-4">
                {steps.map((step, index) => (
                  <div key={step.id} className="relative">
                    {/* Step Number Circle */}
                    <div className="relative z-10 mx-auto w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg mb-6">
                      <span className="text-3xl font-bold text-white">
                        {index + 1}
                      </span>
                    </div>

                    {/* Step Content */}
                    <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors">
                      <CardContent className="p-6 text-center">
                        <h3 className="font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile View - Vertical Timeline */}
          <div className="md:hidden space-y-6">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex gap-4">
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">
                      {index + 1}
                    </span>
                  </div>
                  {/* Vertical Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-blue-300 -mb-6" />
                  )}
                </div>

                {/* Step Content */}
                <Card className="flex-1 border-2 border-blue-200">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
