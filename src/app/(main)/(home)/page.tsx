"use client";

import {
  HeroSection,
  StatsSection,
  WhyChooseSection,
  ObjectivesSection,
  RegistrationSection,
  GallerySection,
  SpeakersSection,
  AdvisoryBoardSection,
  SponsorsSection,
  CountdownSection,
} from "@/app/(main)/(home)/components";
import {
  heroData,
  advisoryBoardData,
  sponsorsData,
  countdownData,
} from "@/configs/homepage-data";

export default function HomePage() {
  return (
    <div className="homepage">
      {/* Hero Section with Stats */}
      <HeroSection 
        title={heroData.title}
        subtitle={heroData.subtitle}
        stats={heroData.stats}
      />

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

      {/* Advisory Board/Instructors Section */}
      <AdvisoryBoardSection 
        title={advisoryBoardData.title}
        subtitle={advisoryBoardData.subtitle}
        members={advisoryBoardData.members}
      />

      {/* Sponsors Section */}
      <SponsorsSection 
        title={sponsorsData.title}
        subtitle={sponsorsData.subtitle}
        year={sponsorsData.year}
        sponsors={sponsorsData.sponsors}
      />

      {/* Countdown Timer Section */}
      <CountdownSection config={countdownData} />
    </div>
  );
}
