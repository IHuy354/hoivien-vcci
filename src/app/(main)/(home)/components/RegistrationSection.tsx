"use client";

import { useState } from "react";
import { RegistrationBenefit } from "@/types/homepage";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

interface RegistrationSectionProps {
  title?: string;
  subtitle?: string;
  benefits?: RegistrationBenefit[];
  onSubmit?: (data: RegistrationFormData) => void;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  agreeToTerms: boolean;
}

const defaultBenefits: RegistrationBenefit[] = [
  { id: 1, text: "Làm Kinh Doanh Đúng Pháp Luật", icon: "⭐" },
  { id: 2, text: "Thành phần biểu quyết", icon: "⭐" },
  { id: 3, text: "Tiếp cận nguồn lực", icon: "⭐" },
];

export function RegistrationSection({
  title = "Đăng Ký Tham Gia Ngay",
  subtitle = "Đăng ký ngay để nhận được những ưu đãi đặc biệt",
  benefits = defaultBenefits,
  onSubmit,
}: RegistrationSectionProps) {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    agreeToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    } else {
      console.log("Form submitted:", formData);
    }
  };

  const handleChange = (field: keyof RegistrationFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

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

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Benefits Card */}
          <Card className="h-fit">
            <CardHeader>
              <CardTitle className="text-xl">Lợi Ích Khi Đăng Ký</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit.id} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    {benefit.icon || "✓"}
                  </div>
                  <p className="text-gray-700">{benefit.text}</p>
                </div>
              ))}
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-600">
                  <strong>Số lượng giới hạn:</strong> 30 - 50n Đại Diện
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  <strong>Lệ phí tham gia:</strong> Miễn Phí
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Registration Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Thông Tin Đăng Ký</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Họ và tên *</Label>
                  <Input
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    placeholder="Nhập họ và tên"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="Nhập địa chỉ email"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Số điện thoại *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="Nhập số điện thoại"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Doanh nghiệp</Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleChange("company", e.target.value)}
                    placeholder="Nhập tên doanh nghiệp"
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => handleChange("agreeToTerms", checked as boolean)}
                    required
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Tôi đồng ý với điều khoản và chính sách bảo mật
                  </label>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold"
                >
                  Đăng Ký Ngay
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
