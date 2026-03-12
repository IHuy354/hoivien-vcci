import { Metadata } from 'next';
import { constructMetadata } from './seo';
import { getApiV10PublicSiteSettings } from '@/api/endpoints/public';

/**
 * Generate metadata with site settings from API
 * Use this in Next.js generateMetadata() functions
 * 
 * Example usage:
 * ```tsx
 * // In app/(main)/page.tsx
 * import { generateSEOMetadata } from '@/lib/metadata';
 * 
 * export async function generateMetadata() {
 *   return generateSEOMetadata({
 *     title: 'Trang chủ',
 *     description: 'Mô tả trang chủ'
 *   });
 * }
 * 
 * // Or use directly:
 * export const metadata = await generateSEOMetadata();
 * ```
 */
export async function generateSEOMetadata(options?: {
  title?: string;
  description?: string;
  image?: string;
  siteFavicon?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  keywords?: string[];
  noIndex?: boolean;
}): Promise<Metadata> {
  try {
    // Fetch site settings from API
    const response = await getApiV10PublicSiteSettings();
    const settings = response.responseData;

    return constructMetadata({
      title: options?.title || settings?.seo_title || 'CEO VCCI',
      description: options?.description || settings?.seo_description || undefined,
      image: options?.image || settings?.site_og_image || undefined,
      url: options?.url,
      type: options?.type,
      keywords: options?.keywords,
      noIndex: options?.noIndex,
      siteFavicon: options?.siteFavicon || settings?.site_favicon || undefined,
    });
  } catch (error) {
    console.error('Failed to fetch site settings for metadata:', error);
    
    // Fallback to default metadata if API fails
    return constructMetadata({
      title: options?.title || 'CEO VCCI',
      description: options?.description,
      image: options?.image,
      url: options?.url,
      type: options?.type,
      keywords: options?.keywords,
      noIndex: options?.noIndex,
    });
  }
}
