"use client";

import {
  HeroSection,
  SolutionsSection,
  FeaturesSection,
  AboutUsSection,
  PartnersSection,
  ContactSection,
} from "@/app/(main)/(home)/components";

export default function HomePageClient() {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section id="hero">
        <HeroSection />
      </section>

      {/* Giai phap (Solutions) */}
      <SolutionsSection />

      {/* Tinh nang (Features) */}
      <FeaturesSection />

      {/* Ve chung toi (About Us) */}
      <AboutUsSection />

      {/* Doi tac (Partners) */}
      <PartnersSection />

      {/* Lien he (Contact) */}
      <ContactSection />
    </div>
  );
}
