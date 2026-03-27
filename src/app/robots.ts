import { MetadataRoute } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_FRONTEND_URL || 'https://ceovcci.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/403',
        ],
      },
      {
        // Block AI training crawlers
        userAgent: 'GPTBot',
        disallow: '/',
      },
      {
        userAgent: 'Google-Extended',
        disallow: '/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
