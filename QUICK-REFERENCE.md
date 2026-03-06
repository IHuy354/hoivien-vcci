# Homepage - Quick Reference Guide

## 🚀 Common Tasks

### Change Text Content
**File:** `src/configs/homepage-data.ts`

```typescript
// Example 1: Change hero title
export const heroData = {
  title: "New Title Here", // ← Edit this
  subtitle: "New subtitle",
  stats: [...],
};

// Example 2: Update a stat
stats: [
  { value: "10", label: "New Label" }, // ← Edit value/label
  ...
]

// Example 3: Add a new feature
features: [
  // existing features...
  {
    id: 7, // ← Next ID number
    icon: "🎨", // ← Emoji or image path
    title: "New Feature Title",
    description: "Feature description here",
  },
]
```

### Update Images

#### Gallery Images
```typescript
// File: src/configs/homepage-data.ts
images: [
  {
    id: 1,
    src: "/images/gallery/new-image.jpg", // ← Place image in public/images/gallery/
    alt: "Image description",
    title: "Image title",
  },
]
```

#### Speaker/Advisor Avatars
```typescript
speakers: [
  {
    id: 1,
    name: "Name",
    position: "Position",
    company: "Company",
    avatar: "/images/speakers/avatar.jpg", // ← Place in public/images/speakers/
  },
]
```

#### Sponsor Logos
```typescript
sponsors: [
  {
    id: 1,
    name: "Company Name",
    logo: "/images/sponsors/logo.png", // ← Place in public/images/sponsors/
    tier: "platinum", // ← "platinum" | "gold" | "silver"
  },
]
```

### Update Countdown Date
```typescript
// File: src/configs/homepage-data.ts
export const countdownData: CountdownConfig = {
  eventDate: new Date("2026-06-15T09:00:00"), // ← Change date/time
  title: "Event Name",
  subtitle: "Event description",
};
```

### Change Colors

#### Primary Colors (Blue scheme)
**Files:** Individual section components

```typescript
// Example: Change blue to green
// Find: bg-blue-500, text-blue-600
// Replace with: bg-green-500, text-green-600

// Common classes to update:
from-blue-50 to-white → from-green-50 to-white
bg-blue-600 → bg-green-600
text-blue-600 → text-green-600
border-blue-200 → border-green-200
```

#### Accent Color (Yellow)
```typescript
// Find: bg-yellow-400, bg-yellow-500
// Replace with your color: bg-orange-400, bg-orange-500
```

#### Dark Background
```typescript
// Find: bg-[#1a2942]
// Replace with: bg-[#YOUR_HEX_COLOR]
```

### Reorder Sections
**File:** `src/app/(main)/page.tsx`

Just drag and drop (or cut/paste) components:
```typescript
return (
  <div className="homepage">
    <HeroSection {...heroData} />
    <GallerySection {...galleryData} />      // ← Moved this up
    <FeaturesSection {...featuresData} />    // ← This moved down
    <ValuePropositionSection {...valuePropositionData} />
    {/* ... */}
  </div>
);
```

### Hide/Show Sections
**File:** `src/app/(main)/page.tsx`

Comment out sections you don't want:
```typescript
{/* <SpeakersSection {...speakersData} /> */}  // ← Hidden
```

### Update Form Fields
**File:** `src/components/features/homepage/RegistrationSection.tsx`

Add a new field:
```typescript
// 1. Update form state
const [formData, setFormData] = useState({
  fullName: "",
  email: "",
  phone: "",
  company: "",
  position: "", // ← New field
  agreeToTerms: false,
});

// 2. Add input field in JSX
<div className="space-y-2">
  <Label htmlFor="position">Chức vụ</Label>
  <Input
    id="position"
    value={formData.position}
    onChange={(e) => handleChange("position", e.target.value)}
    placeholder="Nhập chức vụ"
  />
</div>
```

## 🎨 Styling Quick Reference

### Spacing
```
py-16     → Top/bottom padding (64px)
py-24     → Top/bottom padding (96px)
px-4      → Left/right padding (16px)
gap-4     → Gap between items (16px)
mb-12     → Bottom margin (48px)
```

### Text Sizes
```
text-sm       → 14px
text-base     → 16px
text-lg       → 18px
text-xl       → 20px
text-2xl      → 24px
text-3xl      → 30px
text-4xl      → 36px
text-5xl      → 48px
text-6xl      → 60px
```

### Grid Layouts
```
grid-cols-1           → 1 column (mobile)
grid-cols-2           → 2 columns
md:grid-cols-3        → 3 columns on tablet+
lg:grid-cols-4        → 4 columns on desktop+
```

### Common Patterns
```typescript
// Centered section
<div className="container mx-auto px-4">
  <div className="max-w-6xl mx-auto">
    {/* content */}
  </div>
</div>

// Responsive text
<h2 className="text-3xl md:text-4xl lg:text-5xl">

// Hover effect
<div className="hover:shadow-lg transition-shadow duration-300">

// Gradient background
<div className="bg-gradient-to-r from-blue-500 to-purple-600">
```

## 📱 Responsive Design Breakpoints

```
Default    → Mobile (< 768px)
md:        → Tablet (≥ 768px)
lg:        → Desktop (≥ 1024px)
xl:        → Large desktop (≥ 1280px)
```

### Example
```typescript
// Mobile: 1 column, Desktop: 3 columns
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

## 🔧 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run production build
npm start

# Check for errors
npm run lint

# Fix linting errors
npm run lint -- --fix
```

## 📂 File Locations

```
Content data:          src/configs/homepage-data.ts
Section components:    src/components/features/homepage/
Main page:             src/app/(main)/page.tsx
Type definitions:      src/types/homepage.ts
Images:                public/images/
```

## ⚡ Pro Tips

1. **Use VS Code autocomplete** - Type definitions provide hints
2. **Check existing sections** - Copy patterns from similar sections
3. **Test mobile first** - Always check responsive design
4. **Use browser DevTools** - Inspect elements to debug styling
5. **Git commit often** - Save progress frequently
6. **Check console** - Look for errors in browser console

## 🐛 Troubleshooting

### Images not showing
- Check file exists in `public/images/...`
- Verify path starts with `/images/` not `images/`
- Check file extension matches (`.jpg` vs `.png`)

### Styling not working
- Check class name spelling
- Verify Tailwind class exists
- Try rebuilding: `npm run dev` (restart)

### TypeScript errors
- Check data matches type in `src/types/homepage.ts`
- Hover over error to see expected type
- Use IDE suggestions

### Section not displaying
- Check component is imported
- Verify component is in return statement
- Check for console errors

## 📞 Getting Help

1. Check [HOMEPAGE-README.md](./HOMEPAGE-README.md) for detailed documentation
2. Review existing components for examples
3. Use TypeScript errors for guidance
4. Check browser console for runtime errors
