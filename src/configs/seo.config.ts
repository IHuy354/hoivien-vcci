export const seoConfig = {
  /**
   * Main site name to display
   */
  siteName: "VCCI-HCM | CEO 4.0",

  /**
   * Default title for pages without a specific title
   */
  defaultTitle: "VCCI-HCM – Vietnam Chamber of Commerce and Industry – Ho Chi Minh City Branch",

  /**
   * Default description for SEO
   */
  description:
    "Comprehensive enterprise management solution for VCCI and association organizations. Modernizing processes, enhancing member experiences, and ensuring absolute data security.",

  /**
   * Default keywords (should include 5-10 most important keywords)
   */
  keywords: [
    "MeU Solutions",
    "enterprise management",
    "member management",
    "VCCI",
    "CEO 4.0",
    "data digitization",
    "VCCI-HCM",
    "business association",
  ],

  /**
   * Official site URL (without trailing slash)
   */
  siteUrl: process.env.NEXT_PUBLIC_FRONTEND_URL || "https://vcci-yo8b.vercel.app",

  /**
   * Default image path for social sharing (Public folder)
   * Recommended size: 1200x630px
   */
  ogImage: "/og-image.png",

  /**
   * Twitter/X handle of the organization
   */
  twitterHandle: "@meusolutions",

  /**
   * Identification information for Zalo/Facebook verification
   */
  verification: {
    zalo: process.env.ZALO_VERIFICATION || "",
    facebook: process.env.FB_DOMAIN_VERIFICATION || "",
  },

  /**
   * Default contact information for Structured Data (Schema.org)
   */
  organization: {
    telephone: "+84-28-3823-6678",
    address: {
      streetAddress: "171 Vo Thi Sau, Vo Thi Sau Ward",
      addressLocality: "District 3",
      addressRegion: "Ho Chi Minh City",
      addressCountry: "VN",
    },
  },
};
