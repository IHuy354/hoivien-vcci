"use client";

import {
  HeroSection,
  StatsSection,
  WhyChooseSection,
  ObjectivesSection,
  RegistrationSection,
  GallerySection,
  SpeakersSection,
  InstructorsSection,
  AdvisorsSection,
  SponsorsSection,
  CountdownSection,
} from "@/app/(main)/(home)/components";

export default function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section with Stats */}
      <HeroSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Why Choose Us Section */}
      <WhyChooseSection />

      {/* Objectives Section */}
      <ObjectivesSection />

      {/* Registration Section */}
      <RegistrationSection />

      {/* Gallery Section */}
      <GallerySection />

      {/* Speakers Section */}
      <SpeakersSection />

      {/* Instructors Section */}
      <InstructorsSection />

      {/* Advisors Section */}
      <AdvisorsSection />

      {/* Sponsors Section */}
      <SponsorsSection />

      {/* Countdown Timer Section */}
      <CountdownSection />
    </div>
  );
}
