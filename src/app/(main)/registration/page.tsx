import { Metadata } from "next";
import { RegistrationForm } from "@/app/(main)/registration/components/RegistrationForm";
import { generateSEOMetadata } from "@/lib/metadata";
import { generateBreadcrumbStructuredData } from "@/lib/seo";

const breadcrumbSchema = generateBreadcrumbStructuredData([
  { name: "Trang chủ", url: "/" },
  { name: "Đăng ký khóa học CEO 4.0", url: "/registration" },
]);

export async function generateMetadata(): Promise<Metadata> {
  return generateSEOMetadata({
    title: "Đăng Ký Khóa Học CEO 4.0",
    description:
      "Đăng ký tham gia chương trình đào tạo CEO 4.0 do VCCI-HCM tổ chức. Khóa học dành cho lãnh đạo, giám đốc và chủ doanh nghiệp muốn nâng cao năng lực quản trị.",
    keywords: [
      "đăng ký CEO 4.0",
      "form đăng ký VCCI",
      "khóa học lãnh đạo VCCI-HCM",
      "đào tạo giám đốc điều hành",
      "niên khóa 2026",
    ],
    url: "/registration",
    type: "website",
  });
}

export default function RegistrationPage() {
  return (
    <main className="min-h-screen bg-gray-50/50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="relative pt-36 pb-40 bg-[#0A192F] overflow-hidden">
        {/* Background glow and subtle decor */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 to-[#0A192F]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-yellow-500/5 blur-3xl pointer-events-none" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
             <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
             <span className="text-sm font-medium text-gray-300">VCCI-HCM • Niên khóa 2026</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Đăng Ký <span className="text-yellow-500">CEO 4.0</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg/relaxed font-medium">
            Hoàn thành form bên dưới để đăng ký tham gia chương trình đào tạo Giám Đốc Điều Hành Doanh Nghiệp
          </p>
        </div>
      </section>

      {/* Form Container overlapping the dark section */}
      <section className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 pb-24">
        <RegistrationForm />
      </section>
    </main>
  );
}
