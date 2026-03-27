import { Metadata } from 'next';
import { constructMetadata } from './seo';
import { getApiV10PublicSiteSettings } from '@/api/endpoints/public';
import { seoConfig } from '@/configs/seo.config';

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
 *     title: 'Home',
 *     description: 'Home page description'
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
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 3000); // 3-second timeout for build safety

  try {
    // Fetch site settings from API
    const response = await getApiV10PublicSiteSettings({}, controller.signal);
    clearTimeout(timeoutId);

    const settings = response?.responseData;

    return constructMetadata({
      title: options?.title || settings?.seo_title || seoConfig.siteName,
      description: options?.description || settings?.seo_description || undefined,
      image: options?.image || settings?.site_og_image || undefined,
      url: options?.url,
      type: options?.type,
      keywords: options?.keywords,
      noIndex: options?.noIndex,
      siteFavicon: options?.siteFavicon || settings?.site_favicon || undefined,
    });
  } catch (error) {
    clearTimeout(timeoutId);
    console.error('Metadata fetch skipped or failed:', error instanceof Error ? error.message : 'Timeout');
    
    // Fallback to default metadata defined in constructMetadata (src/lib/seo.ts)
    return constructMetadata({
      title: options?.title || seoConfig.siteName,
      description: options?.description,
      image: options?.image,
      url: options?.url,
      type: options?.type,
      keywords: options?.keywords,
      noIndex: options?.noIndex,
    });
  }
}

