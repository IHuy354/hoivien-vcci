import { generateSEOMetadata } from '@/lib/metadata';
import { generateStructuredData } from '@/lib/seo';
import HomePageClient from './HomePageClient';

export async function generateMetadata() {
  return generateSEOMetadata({
    title: 'Quản lý hội viên VCCI',
    description:
      'Giải pháp quản trị doanh nghiệp toàn diện cho VCCI và các tổ chức hiệp hội. Hiện đại hóa quy trình, nâng cao trải nghiệm hội viên và bảo mật dữ liệu tuyệt đối.',
    keywords: [
      'MeU Solutions',
      'quản lý hội viên VCCI',
      'quản trị doanh nghiệp 4.0',
      'VCCI-HCM',
      'số hóa quy trình',
      'bảo mật dữ liệu',
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
