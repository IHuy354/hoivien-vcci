import { generateSEOMetadata } from '@/lib/metadata';
import { generateStructuredData } from '@/lib/seo';
import HomePageClient from './HomePageClient';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Chương Trình Đào Tạo CEO 4.0',
    description:
      'Chương trình đào tạo Giám Đốc Điều Hành CEO 4.0 do VCCI-HCM tổ chức — nâng tầm lãnh đạo, phát triển doanh nghiệp bền vững trong kỷ nguyên số.',
    keywords: [
      'CEO 4.0',
      'đào tạo CEO VCCI',
      'khóa học giám đốc điều hành',
      'VCCI-HCM',
      'lãnh đạo doanh nghiệp',
      'quản trị 4.0',
      'chuyển đổi số',
    ],
    url: '/',
    type: 'website',
  });
}

const orgSchema = generateStructuredData('Organization', {});

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <HomePageClient />
    </>
  );
}
