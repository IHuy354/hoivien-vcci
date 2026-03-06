"use client";

import {
  HeroSection,
  FeaturesSection,
  ValuePropositionSection,
  RegistrationSection,
  JourneySection,
  GallerySection,
  SpeakersSection,
  AdvisoryBoardSection,
  SponsorsSection,
  CountdownSection,
} from "@/app/(main)/(home)/components";
import {
  heroData,
  featuresData,
  valuePropositionData,
  registrationData,
  journeyData,
  galleryData,
  speakersData,
  advisoryBoardData,
  sponsorsData,
  countdownData,
} from "@/configs/homepage-data";

export default function HomePage() {
  // Handler for registration form submission
  const handleRegistration = async (formData: unknown) => {
    try {
      console.log("Registration data:", formData);
      // TODO: Implement API call to submit registration
      // Example:
      // const response = await fetch('/api/registration', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // if (response.ok) {
      //   toast.success("Đăng ký thành công!");
      // }
    } catch (error) {
      console.error("Registration error:", error);
      // toast.error("Có lỗi xảy ra, vui lòng thử lại!");
    }
  };

  return (
    <div className="homepage">
      {/* Hero Section with Stats */}
      <HeroSection 
        title={heroData.title}
        subtitle={heroData.subtitle}
        stats={heroData.stats}
      />

      {/* Features/Benefits Section */}
      <FeaturesSection 
        title={featuresData.title}
        subtitle={featuresData.subtitle}
        features={featuresData.features}
      />

      {/* Value Proposition Section */}
      <ValuePropositionSection 
        title={valuePropositionData.title}
        subtitle={valuePropositionData.subtitle}
        items={valuePropositionData.items}
      />

      {/* Registration Form Section */}
      <RegistrationSection 
        title={registrationData.title}
        subtitle={registrationData.subtitle}
        benefits={registrationData.benefits}
        onSubmit={handleRegistration} 
      />

      {/* Journey/Process Timeline Section */}
      <JourneySection 
        title={journeyData.title}
        subtitle={journeyData.subtitle}
        steps={journeyData.steps}
      />

      {/* Gallery Section */}
      <GallerySection 
        title={galleryData.title}
        subtitle={galleryData.subtitle}
        images={galleryData.images}
      />

      {/* Speakers Section */}
      <SpeakersSection 
        title={speakersData.title}
        subtitle={speakersData.subtitle}
        speakers={speakersData.speakers}
      />

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
