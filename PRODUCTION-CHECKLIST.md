# Production Checklist

Use this checklist to prepare the homepage for production deployment.

## 📸 Images to Add

Create these directories and add images:

### Directory Structure
```
public/
└── images/
    ├── gallery/
    │   ├── gallery-1.jpg
    │   ├── gallery-2.jpg
    │   ├── gallery-3.jpg
    │   ├── gallery-4.jpg
    │   ├── gallery-5.jpg
    │   ├── gallery-6.jpg
    │   ├── gallery-7.jpg
    │   ├── gallery-8.jpg
    │   └── gallery-9.jpg
    ├── speakers/
    │   ├── speaker-1.jpg
    │   ├── speaker-2.jpg
    │   ├── speaker-3.jpg
    │   ├── speaker-4.jpg
    │   ├── speaker-5.jpg
    │   ├── speaker-6.jpg
    │   ├── speaker-7.jpg
    │   └── speaker-8.jpg
    ├── advisors/
    │   ├── advisor-1.jpg
    │   ├── advisor-2.jpg
    │   ├── advisor-3.jpg
    │   ├── advisor-4.jpg
    │   ├── advisor-5.jpg
    │   ├── advisor-6.jpg
    │   ├── advisor-7.jpg
    │   └── advisor-8.jpg
    └── sponsors/
        ├── vcci-jp.png
        ├── seaplanes.png
        ├── self-jp.png
        ├── vcci.png
        ├── lhun.png
        └── bank.png
```

### Image Requirements

#### Gallery Images (9 images)
- **Size**: 1200x800px or similar 3:2 ratio
- **Format**: JPG (optimized for web)
- **File size**: < 500KB each
- **Content**: Event photos, workshops, ceremonies

#### Speaker Photos (8 images)
- **Size**: 400x400px (square)
- **Format**: JPG
- **File size**: < 200KB each
- **Content**: Professional headshots

#### Advisor Photos (8 images)
- **Size**: 400x400px (square)
- **Format**: JPG
- **File size**: < 200KB each
- **Content**: Professional headshots

#### Sponsor Logos (6+ images)
- **Size**: 400x200px or proportional
- **Format**: PNG with transparent background
- **File size**: < 100KB each
- **Content**: Company/organization logos

## 📝 Content to Update

Edit `src/configs/homepage-data.ts` with real information:

### ✅ Hero Section
- [ ] Update title
- [ ] Update subtitle
- [ ] Verify statistics (5 regions, 500+ members, etc.)

### ✅ Features Section
- [ ] Update feature titles
- [ ] Update feature descriptions
- [ ] Choose appropriate icons/emojis

### ✅ Value Proposition
- [ ] Update proposition titles
- [ ] Update descriptions
- [ ] Verify all 6 items are relevant

### ✅ Registration Benefits
- [ ] Update benefit text
- [ ] Update "Số lượng giới hạn" number
- [ ] Update "Lệ phí tham gia" info

### ✅ Journey Steps
- [ ] Update step titles
- [ ] Update step descriptions
- [ ] Verify 4 steps are accurate

### ✅ Gallery
- [ ] Add real image paths
- [ ] Update image titles
- [ ] Verify all 9 images exist

### ✅ Speakers
- [ ] Add real speaker names
- [ ] Add positions
- [ ] Add companies
- [ ] Add avatar paths
- [ ] Verify count matches design

### ✅ Advisory Board
- [ ] Add real advisor names
- [ ] Add expertise/positions
- [ ] Add companies/backgrounds
- [ ] Add avatar paths
- [ ] Verify count matches design

### ✅ Sponsors
- [ ] Add real sponsor names
- [ ] Add logo paths
- [ ] Set correct tier (platinum/gold/silver)
- [ ] Update year if needed

### ✅ Countdown
- [ ] Set correct event date and time
- [ ] Update title
- [ ] Update subtitle

## 🔗 API Integration

If connecting to backend:

### Registration Form
**File**: `src/app/(main)/page.tsx`

```typescript
const handleRegistration = async (formData: unknown) => {
  try {
    const response = await fetch('/api/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      // Show success message
      toast.success("Đăng ký thành công!");
    } else {
      // Handle error
      toast.error("Có lỗi xảy ra, vui lòng thử lại!");
    }
  } catch (error) {
    console.error("Registration error:", error);
    toast.error("Không thể kết nối đến server!");
  }
};
```

### Dynamic Content (Optional)
Replace static data with API calls:

```typescript
// Example: Fetch speakers from API
const { data: speakersData } = await fetch('/api/speakers').then(r => r.json());

// Or use React Query
import { useQuery } from '@tanstack/react-query';

const { data: speakersData } = useQuery({
  queryKey: ['speakers'],
  queryFn: () => fetch('/api/speakers').then(r => r.json()),
});
```

## 🎨 Brand Customization

### Colors
If brand colors are different:

1. **Find and replace** in component files:
   - `bg-blue-500` → `bg-[YOUR_COLOR]`
   - `bg-yellow-400` → `bg-[YOUR_ACCENT]`
   - `bg-[#1a2942]` → `bg-[YOUR_DARK]`

2. **Or create Tailwind theme** in `tailwind.config.ts`:
```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#YOUR_PRIMARY_COLOR',
        accent: '#YOUR_ACCENT_COLOR',
        dark: '#YOUR_DARK_COLOR',
      },
    },
  },
};
```

Then use: `bg-primary`, `bg-accent`, `bg-dark`

### Fonts
Update in `src/app/layout.tsx` if different fonts needed.

## 🔍 SEO Optimization

### Update Metadata
**File**: `src/app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: "CEO Program - VCCI | Phát triển năng lực lãnh đạo",
  description: "Chương trình đào tạo CEO chuyên nghiệp...",
  keywords: ["CEO", "leadership", "training", "VCCI"],
  openGraph: {
    title: "CEO Program - VCCI",
    description: "...",
    images: ['/images/og-image.jpg'],
  },
};
```

### Add Structured Data
Consider adding JSON-LD for events, organizations, etc.

## ⚡ Performance

### Image Optimization
- [ ] Compress all images (use TinyPNG, ImageOptim, etc.)
- [ ] Ensure images are no larger than necessary
- [ ] Use WebP format if possible
- [ ] Check Next.js Image optimization is working

### Code Optimization
- [ ] Remove console.logs
- [ ] Remove unused imports
- [ ] Run `npm run build` and check bundle size
- [ ] Test loading speed

## 🧪 Testing

### Manual Testing
- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on mobile Chrome
- [ ] Test on mobile Safari
- [ ] Test form submission
- [ ] Test all links
- [ ] Test image lightbox
- [ ] Test countdown timer
- [ ] Test responsive design at all breakpoints

### Functionality Checks
- [ ] All images load correctly
- [ ] Form validation works
- [ ] Countdown timer updates
- [ ] Gallery lightbox navigation works
- [ ] Hover effects work
- [ ] All sections visible
- [ ] No console errors
- [ ] No TypeScript errors

## 🚀 Deployment

### Pre-deployment
- [ ] Run `npm run lint` - no errors
- [ ] Run `npm run build` - successful
- [ ] Test production build locally: `npm start`
- [ ] Verify all environment variables set
- [ ] Check .env.production file

### Post-deployment
- [ ] Verify site loads
- [ ] Test form submission (if connected)
- [ ] Check Google Analytics (if added)
- [ ] Test on actual mobile devices
- [ ] Submit sitemap to Google
- [ ] Check performance with Lighthouse

## 📊 Analytics (Optional)

### Google Analytics
Add to `src/app/layout.tsx`:

```typescript
<Script
  src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_ID}');
  `}
</Script>
```

## 🔒 Security

- [ ] Validate form inputs on backend
- [ ] Add CAPTCHA if needed (reCAPTCHA)
- [ ] Sanitize user inputs
- [ ] Enable HTTPS
- [ ] Set proper CORS headers
- [ ] Add rate limiting on API endpoints

## ✅ Final Checks

Before going live:
- [ ] All placeholder text replaced
- [ ] All placeholder images replaced
- [ ] Real data in all sections
- [ ] Contact information correct
- [ ] Social media links correct (if added)
- [ ] Legal pages linked (privacy, terms)
- [ ] Copyright year correct
- [ ] No "lorem ipsum" or test data
- [ ] All links work
- [ ] 404 page works
- [ ] Favicon added

---

**Use this checklist to ensure nothing is missed before production deployment!**
