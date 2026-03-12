import { Metadata } from 'next';
import baseConfig from '@/configs/base';
interface SeoProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  keywords?: string[];
  noIndex?: boolean;
  siteFavicon?: string;
  
}

/**
 * Construct SEO metadata for Next.js pages
 * Optimized for Vietnamese market and social sharing (Zalo, Facebook)
 */
export function constructMetadata({
  title,
  description = "High-performance Next.js web application focused on SEO rankings and social media virality",
  image = "/images/default-og-image.jpg",
  url = "",
  type = 'website',
  keywords = [],
  noIndex = false,
  siteFavicon,
}: SeoProps): Metadata {
  const baseUrl = baseConfig.imageDomain || 'https://your-domain.com';
  const fullImageUrl = `${baseUrl}/${image}`;
  const fullUrl = url.startsWith('http') ? url : `${baseConfig.frontendDomain}`;
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Your App Name';
  return {
    title: {
      default: title,
      template: `%s | ${siteName}`,
    },
    description,
    keywords: keywords.length > 0 ? keywords : ['next.js', 'react', 'typescript', 'tailwind'],
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
      icons: {
    icon: siteFavicon?`${baseConfig.imageDomain}/${siteFavicon}` : `${baseConfig.imageDomain}/favicon.ico`,
  },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    openGraph: {
      type: type === 'product' ? 'website' : type,
      title,
      description,
      url: fullUrl,
      siteName,
      images: [{
        url: fullImageUrl,
        width: 1200,
        height: 630,
        alt: title,
      }],
      locale: 'vi_VN',
      alternateLocale: 'en_US',
    },
    
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImageUrl],
      creator: '@yourhandle',
    },
    
    alternates: {
      canonical: fullUrl,
    },
    
    metadataBase: new URL(baseUrl),
    
    // Additional meta for Vietnamese market
    other: {
      'zalo-platform-site-verification': process.env.ZALO_VERIFICATION || '',
      'facebook-domain-verification': process.env.FB_DOMAIN_VERIFICATION || '',
    },
  };
}

/**
 * Generate structured data for SEO
 */
interface StructuredDataInput {
  name?: string;
  description?: string;
  image?: string;
  price?: number;
  inStock?: boolean;
  title?: string;
  author?: string;
  publishedAt?: string;
  updatedAt?: string;
  url?: string;
  [key: string]: unknown;
}

export function generateStructuredData(type: 'Product' | 'Article' | 'Organization', data: StructuredDataInput) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com';
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || 'Your App Name';
  
  const schemas = {
    Product: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: data.name,
      description: data.description,
      image: data.image?.startsWith('http') ? data.image : `${baseUrl}${data.image}`,
      brand: {
        '@type': 'Brand',
        name: siteName,
      },
      offers: {
        '@type': 'Offer',
        price: data.price,
        priceCurrency: 'VND',
        availability: data.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
        seller: {
          '@type': 'Organization',
          name: siteName,
        },
      },
    },
    
    Article: {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: data.title,
      description: data.description,
      image: data.image?.startsWith('http') ? data.image : `${baseUrl}${data.image}`,
      author: {
        '@type': 'Person',
        name: data.author || siteName,
      },
      publisher: {
        '@type': 'Organization',
        name: siteName,
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/images/logo.png`,
        },
      },
      datePublished: data.publishedAt,
      dateModified: data.updatedAt || data.publishedAt,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${baseUrl}${data.url}`,
      },
    },
    
    Organization: {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: siteName,
      url: baseUrl,
      logo: `${baseUrl}/images/logo.png`,
      sameAs: [
        // Add your social media URLs
        'https://facebook.com/yourpage',
        'https://instagram.com/yourpage',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+84-xxx-xxx-xxx',
        contactType: 'customer service',
        availableLanguage: ['Vietnamese', 'English'],
      },
    },
  };

  return schemas[type];
}

/**
 * Validate image for social sharing (Zalo/Facebook requirements)
 */
export function validateSocialImage(imageUrl: string): {
  isValid: boolean;
  warnings: string[];
} {
  const warnings: string[] = [];
  
  // Check if image is absolute URL
  if (!imageUrl.startsWith('http')) {
    warnings.push('Image should be an absolute URL for social sharing');
  }
  
  // Zalo/Facebook recommendations
  if (!imageUrl.includes('1200x630') && !imageUrl.includes('og-image')) {
    warnings.push('Image should be 1200x630px for optimal social sharing');
  }
  
  return {
    isValid: warnings.length === 0,
    warnings,
  };
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbStructuredData(breadcrumbs: Array<{ name: string; url: string }>) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://your-domain.com';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
    })),
  };
}