/**
 * SEO Metadata Usage Examples
 * 
 * This file demonstrates how to use the generateSEOMetadata utility
 * in different Next.js scenarios with site settings from API
 */

import { generateSEOMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';

// ============================================
// Example 1: Root Layout (Default Site Settings)
// ============================================
// File: app/layout.tsx
export async function generateMetadata1(): Promise<Metadata> {
  return generateSEOMetadata();
  // Uses: site_name, seo_description, site_favicon, site_og_image from API
}

// ============================================
// Example 2: Custom Page Title
// ============================================
// File: app/(main)/about/page.tsx
export async function generateMetadata2(): Promise<Metadata> {
  return generateSEOMetadata({
    title: 'Về chúng tôi',
    description: 'Tìm hiểu về chương trình đào tạo CEO VCCI'
  });
  // Site settings (favicon, og_image) auto-loaded from API
}

// ============================================
// Example 3: Blog Post / Article
// ============================================
// File: app/(main)/blog/[slug]/page.tsx
// interface BlogPageProps {
//   params: { slug: string };
// }

export async function generateMetadata3(): Promise<Metadata> {
  // Fetch post data (in real implementation, use params.slug)
  const post = { 
    title: 'Bài viết mới nhất',
    description: 'Nội dung bài viết...',
    image: '/uploads/post-image.jpg'
  };
  
  return generateSEOMetadata({
    title: post.title,
    description: post.description,
    image: post.image,
    type: 'article',
    keywords: ['CEO', 'đào tạo', 'doanh nghiệp']
  });
}

// ============================================
// Example 4: Registration Page with Custom Meta
// ============================================
// File: app/(main)/registration/page.tsx
export async function generateMetadata4(): Promise<Metadata> {
  return generateSEOMetadata({
    title: 'Đăng ký tham gia',
    description: 'Đăng ký ngay để trở thành thành viên chương trình CEO VCCI',
    keywords: ['đăng ký', 'ceo', 'đào tạo', 'vcci'],
    noIndex: false  // Allow indexing for this page
  });
}

// ============================================
// Example 5: Admin Pages (No Index)
// ============================================
// File: app/(admin)/admin/layout.tsx
export async function generateMetadata5(): Promise<Metadata> {
  return generateSEOMetadata({
    title: 'Admin Dashboard',
    description: 'Trang quản trị hệ thống',
    noIndex: true  // Prevent search engines from indexing admin pages
  });
}

// ============================================
// Example 6: Dynamic Product/Service Page
// ============================================
// File: app/(main)/programs/[id]/page.tsx
// interface ProgramPageProps {
//   params: { id: string };
// }

export async function generateMetadata6(): Promise<Metadata> {
  // Fetch program data (in real implementation, use params.id)
  const program = {
    name: 'Chương trình CEO Xuất sắc 2026',
    description: 'Khóa đào tạo CEO chuyên nghiệp',
    image: '/uploads/program-banner.jpg'
  };
  
  return generateSEOMetadata({
    title: program.name,
    description: program.description,
    image: program.image,
    type: 'product',
    keywords: ['chương trình ceo', 'đào tạo lãnh đạo', 'vcci']
  });
}

// ============================================
// Key Benefits:
// ============================================
// ✅ Auto-fetches site_name, seo_description, site_favicon, site_og_image from API
// ✅ Consistent SEO across all pages with site settings
// ✅ Fallback to default values if API fails
// ✅ Override any field as needed per page
// ✅ Full TypeScript support
// ✅ Optimized for Vietnamese market (Zalo, Facebook sharing)

// ============================================
// Site Settings Used:
// ============================================
// - site_name: Default page title
// - seo_description: Default meta description
// - seo_title: SEO title override
// - site_favicon: Favicon URL
// - site_og_image: Open Graph image for social sharing
