import { Metadata } from "next";
import baseConfig from "@/configs/base";
import { seoConfig } from "@/configs/seo.config";

// ─── Site-wide constants ────────────────────────────────────────────────────
export const SITE_NAME = seoConfig.siteName;
export const SITE_URL = seoConfig.siteUrl;
export const TWITTER_HANDLE = seoConfig.twitterHandle;

const DEFAULT_DESCRIPTION = seoConfig.description;
const DEFAULT_KEYWORDS = seoConfig.keywords;

// ─── Types ──────────────────────────────────────────────────────────────────
interface SeoProps {
  title: string;
  description?: string;
  image?: string;
  url?: string;
  type?: "website" | "article" | "product";
  keywords?: string[];
  noIndex?: boolean;
  siteFavicon?: string;
}

/**
 * Construct SEO metadata for Next.js pages
 * Optimized for international and local social sharing (Zalo, Facebook)
 */
export function constructMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  image = seoConfig.ogImage,
  url = "",
  type = "website",
  keywords = [],
  noIndex = false,
  siteFavicon,
}: SeoProps): Metadata {
  const baseUrl = SITE_URL;
  const imageUrl = image.startsWith("http")
    ? image
    : image.startsWith("/")
      ? `${baseUrl}${image}`
      : `${baseConfig.imageDomain}/${image}`;

  const fullUrl = url.startsWith("http") ? url : `${baseUrl}${url}`;

  return {
    metadataBase: new URL(baseUrl),

    title: {
      default: title || seoConfig.defaultTitle,
      template: `%s | ${SITE_NAME}`,
    },
    description,
    keywords: keywords.length > 0 ? keywords : DEFAULT_KEYWORDS,
    authors: [{ name: SITE_NAME, url: baseUrl }],
    creator: SITE_NAME,
    publisher: SITE_NAME,

    icons: {
      icon: siteFavicon
        ? `${baseConfig.imageDomain}/${siteFavicon}`
        : "/favicon.ico",
      apple: "/imgs/meu-logo.png",
    },

    manifest: "/manifest.json",

    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },

    openGraph: {
      type: type === "product" ? "website" : type,
      title: title || seoConfig.defaultTitle,
      description,
      url: fullUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${title || seoConfig.defaultTitle} | ${SITE_NAME}`,
        },
      ],
      locale: "vi_VN",
    },

    twitter: {
      card: "summary_large_image",
      title: title || seoConfig.defaultTitle,
      description,
      images: [imageUrl],
      creator: TWITTER_HANDLE,
      site: TWITTER_HANDLE,
    },

    alternates: {
      canonical: fullUrl,
    },

    viewport: {
      width: "device-width",
      initialScale: 1,
      maximumScale: 1,
    },

    // Additional meta for specific platforms (Zalo, FB)
    other: {
      "zalo-platform-site-verification": seoConfig.verification.zalo,
      "facebook-domain-verification": seoConfig.verification.facebook,
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

export function generateStructuredData(
  type: "Product" | "Article" | "Organization",
  data: StructuredDataInput,
) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://your-domain.com";
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Your App Name";

  const schemas = {
    Product: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: data.name,
      description: data.description,
      image: data.image?.startsWith("http")
        ? data.image
        : `${baseUrl}${data.image}`,
      brand: {
        "@type": "Brand",
        name: siteName,
      },
      offers: {
        "@type": "Offer",
        price: data.price,
        priceCurrency: "VND",
        availability: data.inStock
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
        seller: {
          "@type": "Organization",
          name: siteName,
        },
      },
    },

    Article: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: data.title,
      description: data.description,
      image: data.image?.startsWith("http")
        ? data.image
        : `${baseUrl}${data.image}`,
      author: {
        "@type": "Person",
        name: data.author || siteName,
      },
      publisher: {
        "@type": "Organization",
        name: siteName,
        logo: {
          "@type": "ImageObject",
          url: `${baseUrl}/images/logo.png`,
        },
      },
      datePublished: data.publishedAt,
      dateModified: data.updatedAt || data.publishedAt,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${baseUrl}${data.url}`,
      },
    },

    Organization: {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      name: seoConfig.defaultTitle,
      alternateName: "CEO VCCI",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.png`,
        width: 300,
        height: 120,
      },
      sameAs: [
        "https://www.facebook.com/vccihochiminh",
        "https://vcci-hcm.org.vn",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: seoConfig.organization.telephone,
        contactType: "customer service",
        areaServed: "VN",
        availableLanguage: ["Vietnamese"],
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: seoConfig.organization.address.streetAddress,
        addressLocality: seoConfig.organization.address.addressLocality,
        addressRegion: seoConfig.organization.address.addressRegion,
        addressCountry: seoConfig.organization.address.addressCountry,
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
  if (!imageUrl.startsWith("http")) {
    warnings.push("Image should be an absolute URL for social sharing");
  }

  // Zalo/Facebook recommendations
  if (!imageUrl.includes("1200x630") && !imageUrl.includes("og-image")) {
    warnings.push("Image should be 1200x630px for optimal social sharing");
  }

  return {
    isValid: warnings.length === 0,
    warnings,
  };
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbStructuredData(
  breadcrumbs: Array<{ name: string; url: string }>,
) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://your-domain.com";

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${baseUrl}${item.url}`,
    })),
  };
}
