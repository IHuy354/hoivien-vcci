/**
 * Homepage Data Configuration
 * 
 * This file contains all the content data for the homepage sections.
 * Update this file to change homepage content without modifying components.
 * 
 * Benefits of this approach:
 * - Centralized content management
 * - Easy to update by non-developers
 * - Can be replaced with CMS or API data in the future
 * - Separates content from presentation logic
 */

import {
  StatItem,
  FeatureCard,
  ValueProposition,
  RegistrationBenefit,
  JourneyStep,
  GalleryImage,
  Speaker,
  Sponsor,
  CountdownConfig,
} from "@/types/homepage";

// ============================================================================
// HERO SECTION DATA
// ============================================================================

export const heroData = {
  title: "Phát triển doanh nghiệp toàn diện",
  subtitle: "Nền tảng phát triển năng lực lãnh đạo cho CEO",
  stats: [
    { value: "5", label: "Vùng Miền" },
    { value: "500+", label: "Thành viên" },
    { value: "4", label: "Chương trình" },
    { value: "3,000+", label: "Doanh nghiệp" },
  ] as StatItem[],
};

// ============================================================================
// FEATURES SECTION DATA
// ============================================================================

export const featuresData = {
  title: "Lợi Ích Khi Tham Gia",
  subtitle: "Những giá trị bạn nhận được khi tham gia chương trình",
  features: [
    {
      id: 1,
      icon: "🎯",
      title: "Phương Pháp Học Tập Tiên Tiến",
      description: "Áp dụng phương pháp học tập hiện đại, kết hợp lý thuyết và thực hành",
    },
    {
      id: 2,
      icon: "📚",
      title: "Hơn 50+ Khóa Học 100% Miễn Phí",
      description: "Truy cập không giới hạn các khóa học chất lượng cao hoàn toàn miễn phí",
    },
    {
      id: 3,
      icon: "🎓",
      title: "Nội Dung Và Đăng Ký Chất Lượng",
      description: "Chương trình được thiết kế bài bản, nội dung chất lượng cao",
    },
    {
      id: 4,
      icon: "👥",
      title: "Kết Nối Với Chuyên Gia",
      description: "Giao lưu, kết nối với các chuyên gia hàng đầu trong ngành",
    },
    {
      id: 5,
      icon: "🏆",
      title: "Hơn 100 Giảng Viên",
      description: "Đội ngũ giảng viên giàu kinh nghiệm, tận tâm hướng dẫn",
    },
    {
      id: 6,
      icon: "📊",
      title: "Cộng Đồng Học Viên Năng Động",
      description: "Cộng đồng học viên đông đảo, năng động và hỗ trợ lẫn nhau",
    },
  ] as FeatureCard[],
};

// ============================================================================
// VALUE PROPOSITION SECTION DATA
// ============================================================================

export const valuePropositionData = {
  title: "Phát Triển Toàn Diện Năng Lực Lãnh Đạo",
  subtitle: "Chương trình được thiết kế để phát triển toàn diện năng lực của CEO",
  items: [
    {
      id: 1,
      icon: "💡",
      title: "Nâng cao năng lực lãnh đạo",
      description: "Phát triển kỹ năng lãnh đạo chiến lược và quản trị doanh nghiệp hiệu quả",
    },
    {
      id: 2,
      icon: "🚀",
      title: "Đổi mới sáng tạo",
      description: "Học cách tư duy đổi mới và áp dụng công nghệ vào hoạt động kinh doanh",
    },
    {
      id: 3,
      icon: "📈",
      title: "Tăng trưởng bền vững",
      description: "Xây dựng chiến lược phát triển dài hạn và bền vững cho doanh nghiệp",
    },
    {
      id: 4,
      icon: "🤝",
      title: "Mở rộng mạng lưới",
      description: "Kết nối với cộng đồng doanh nghiệp và các đối tác tiềm năng",
    },
    {
      id: 5,
      icon: "💼",
      title: "Hiểu biết thị trường",
      description: "Cập nhật xu hướng mới nhất và nắm bắt cơ hội kinh doanh",
    },
    {
      id: 6,
      icon: "🎯",
      title: "Chiến lược kinh doanh",
      description: "Xây dựng và thực thi chiến lược kinh doanh hiệu quả",
    },
  ] as ValueProposition[],
};

// ============================================================================
// REGISTRATION SECTION DATA
// ============================================================================

export const registrationData = {
  title: "Đăng Ký Tham Gia Ngay",
  subtitle: "Đăng ký ngay để nhận được những ưu đãi đặc biệt",
  benefits: [
    { id: 1, text: "Làm Kinh Doanh Đúng Pháp Luật", icon: "⭐" },
    { id: 2, text: "Thành phần tham gia đa dạng", icon: "⭐" },
    { id: 3, text: "Tiếp cận nguồn lực phong phú", icon: "⭐" },
  ] as RegistrationBenefit[],
};

// ============================================================================
// JOURNEY SECTION DATA
// ============================================================================

export const journeyData = {
  title: "Quy Trình Tham Gia",
  subtitle: "4 bước đơn giản để bắt đầu hành trình phát triển của bạn",
  steps: [
    {
      id: 1,
      title: "Đăng ký tham gia",
      description: "Điền form đăng ký và xác nhận thông tin",
    },
    {
      id: 2,
      title: "Xác nhận thông tin",
      description: "Chúng tôi sẽ liên hệ và xác nhận thông tin của bạn",
    },
    {
      id: 3,
      title: "Tham gia khóa học",
      description: "Bắt đầu hành trình học tập và phát triển",
    },
    {
      id: 4,
      title: "Nhận chứng chỉ",
      description: "Hoàn thành khóa học và nhận chứng chỉ",
    },
  ] as JourneyStep[],
};

// ============================================================================
// GALLERY SECTION DATA
// ============================================================================

export const galleryData = {
  title: "Hành Ảnh Chương Trình",
  subtitle: "Những khoảnh khắc đáng nhớ từ các chương trình trước",
  images: [
    { id: 1, src: "/images/gallery/gallery-1.jpg", alt: "Hình ảnh sự kiện 1", title: "Lễ khai mạc" },
    { id: 2, src: "/images/gallery/gallery-2.jpg", alt: "Hình ảnh sự kiện 2", title: "Buổi hội thảo" },
    { id: 3, src: "/images/gallery/gallery-3.jpg", alt: "Hình ảnh sự kiện 3", title: "Trao giải thưởng" },
    { id: 4, src: "/images/gallery/gallery-4.jpg", alt: "Hình ảnh sự kiện 4", title: "Networking" },
    { id: 5, src: "/images/gallery/gallery-5.jpg", alt: "Hình ảnh sự kiện 5", title: "Workshop" },
    { id: 6, src: "/images/gallery/gallery-6.jpg", alt: "Hình ảnh sự kiện 6", title: "Gala Dinner" },
    { id: 7, src: "/images/gallery/gallery-7.jpg", alt: "Hình ảnh sự kiện 7", title: "Hội thảo chuyên đề" },
    { id: 8, src: "/images/gallery/gallery-8.jpg", alt: "Hình ảnh sự kiện 8", title: "Giao lưu" },
    { id: 9, src: "/images/gallery/gallery-9.jpg", alt: "Hình ảnh sự kiện 9", title: "Lễ bế mạc" },
  ] as GalleryImage[],
};

// ============================================================================
// SPEAKERS SECTION DATA
// ============================================================================

export const speakersData = {
  title: "Diễn Giả Của Các Năm",
  subtitle: "Đội ngũ diễn giả giàu kinh nghiệm và uy tín",
  speakers: [
    {
      id: 1,
      name: "Ông Nguyễn Văn A",
      position: "CEO",
      company: "Công ty ABC",
      avatar: "/images/speakers/speaker-1.jpg",
    },
    {
      id: 2,
      name: "Bà Trần Thị B",
      position: "Chủ tịch HĐQT",
      company: "Tập đoàn XYZ",
      avatar: "/images/speakers/speaker-2.jpg",
    },
    // Add more speakers as needed
  ] as Speaker[],
};

// ============================================================================
// ADVISORY BOARD SECTION DATA
// ============================================================================

export const advisoryBoardData = {
  title: "Đội Ngũ Giảng Viên",
  subtitle: "Các chuyên gia hàng đầu trong lĩnh vực quản trị doanh nghiệp",
  members: [
    {
      id: 1,
      name: "Ông Nguyễn Minh A",
      position: "Cố vấn cao cấp",
      company: "Ex-CEO ABC Corp",
      avatar: "/images/advisors/advisor-1.jpg",
    },
    {
      id: 2,
      name: "Bà Trần Thu B",
      position: "Chuyên gia tài chính",
      company: "CFO XYZ Group",
      avatar: "/images/advisors/advisor-2.jpg",
    },
    // Add more advisors as needed
  ] as Speaker[],
};

// ============================================================================
// SPONSORS SECTION DATA
// ============================================================================

export const sponsorsData = {
  title: "Nhà Tài Trợ Đồng Hành",
  subtitle: "Những đối tác tin cậy đồng hành cùng chương trình",
  year: "2026",
  sponsors: [
    { id: 1, name: "VCCI-JP", logo: "/images/sponsors/vcci-jp.png", tier: "platinum" as const },
    { id: 2, name: "Seaplanes", logo: "/images/sponsors/seaplanes.png", tier: "platinum" as const },
    { id: 3, name: "SELF-JP", logo: "/images/sponsors/self-jp.png", tier: "platinum" as const },
    { id: 4, name: "VCCI", logo: "/images/sponsors/vcci.png", tier: "platinum" as const },
    { id: 5, name: "Lạc Hồng University", logo: "/images/sponsors/lhun.png", tier: "gold" as const },
    { id: 6, name: "Ngân hàng", logo: "/images/sponsors/bank.png", tier: "gold" as const },
    // Add more sponsors as needed
  ] as Sponsor[],
};

// ============================================================================
// COUNTDOWN SECTION DATA
// ============================================================================

export const countdownData: CountdownConfig = {
  eventDate: new Date("2026-12-31T00:00:00"),
  title: "Ngày Khai Giảng Khóa Học CEO",
  subtitle: "Đừng bỏ lỡ cơ hội tham gia chương trình đặc biệt này",
};
