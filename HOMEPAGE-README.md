# Homepage - Maintainable Architecture

## 📁 Project Structure

```
src/
├── app/
│   └── (main)/
│       ├── layout.tsx          # Layout wrapper with Header/Footer
│       └── page.tsx             # Main homepage composition
├── components/
│   └── features/
│       └── homepage/            # Modular homepage sections
│           ├── index.ts         # Export barrel file
│           ├── HeroSection.tsx
│           ├── FeaturesSection.tsx
│           ├── ValuePropositionSection.tsx
│           ├── RegistrationSection.tsx
│           ├── JourneySection.tsx
│           ├── GallerySection.tsx
│           ├── SpeakersSection.tsx
│           ├── AdvisoryBoardSection.tsx
│           ├── SponsorsSection.tsx
│           └── CountdownSection.tsx
├── configs/
│   └── homepage-data.ts         # Centralized content data
└── types/
    └── homepage.ts              # TypeScript type definitions
```

## 🎯 Architecture Principles

### 1. **Separation of Concerns**
- **Components** (`src/components/features/homepage/`): Handle UI and presentation logic
- **Data** (`src/configs/homepage-data.ts`): Centralized content configuration
- **Types** (`src/types/homepage.ts`): Type safety and documentation
- **Page** (`src/app/(main)/page.tsx`): Composition and orchestration

### 2. **Modular Sections**
Each section is an independent, self-contained component that can be:
- Reordered easily in the main page
- Updated without affecting other sections
- Tested independently
- Reused in other pages if needed

### 3. **Type Safety**
All data structures are strongly typed, preventing errors and providing IDE autocomplete.

## 🔧 How to Maintain

### Update Content (Non-Developer Friendly)

**File to edit:** `src/configs/homepage-data.ts`

```typescript
// Example: Change hero title
export const heroData = {
  title: "Your New Title Here",  // ← Change this
  subtitle: "Your new subtitle",
  stats: [...],
};

// Example: Add a new feature
export const featuresData = {
  features: [
    // ... existing features
    {
      id: 7,  // ← New ID
      icon: "🎨",
      title: "New Feature",
      description: "Description here",
    },
  ],
};
```

### Update UI/Styling

**Files to edit:** Individual section components in `src/components/features/homepage/`

```typescript
// Example: Change HeroSection styling
// File: src/components/features/homepage/HeroSection.tsx

<h1 className="text-4xl font-bold">  // ← Modify Tailwind classes
  {title}
</h1>
```

### Add a New Section

1. **Create type** in `src/types/homepage.ts`:
```typescript
export interface NewSectionData {
  title: string;
  items: Array<{ id: number; name: string }>;
}
```

2. **Create component** in `src/components/features/homepage/NewSection.tsx`:
```typescript
export function NewSection({ title, items }: NewSectionProps) {
  return <section>...</section>;
}
```

3. **Add data** in `src/configs/homepage-data.ts`:
```typescript
export const newSectionData = {
  title: "Title",
  items: [...],
};
```

4. **Export component** in `src/components/features/homepage/index.ts`:
```typescript
export { NewSection } from "./NewSection";
```

5. **Add to page** in `src/app/(main)/page.tsx`:
```typescript
import { NewSection } from "@/components/features/homepage";
import { newSectionData } from "@/configs/homepage-data";

// In the return statement:
<NewSection {...newSectionData} />
```

### Reorder Sections

Simply rearrange components in `src/app/(main)/page.tsx`:

```typescript
return (
  <div className="homepage">
    <HeroSection {...heroData} />
    <GallerySection {...galleryData} />  // ← Moved up
    <FeaturesSection {...featuresData} />
    {/* ... */}
  </div>
);
```

### Remove a Section

Comment out or delete the component in `src/app/(main)/page.tsx`:

```typescript
{/* <SomeSection {...someData} /> */}
```

## 📊 Section Details

### 1. HeroSection
**Purpose:** Landing banner with key statistics  
**Features:** Responsive grid, stat cards, gradient background  
**Props:** title, subtitle, stats

### 2. FeaturesSection
**Purpose:** Showcase key benefits/features  
**Features:** 6-column grid, icon cards, hover effects  
**Props:** title, subtitle, features

### 3. ValuePropositionSection
**Purpose:** Highlight value propositions  
**Features:** Dark theme, icon cards, professional layout  
**Props:** title, subtitle, items

### 4. RegistrationSection
**Purpose:** User registration with form  
**Features:** Form validation, benefit list, responsive layout  
**Props:** title, subtitle, benefits, onSubmit callback

### 5. JourneySection
**Purpose:** Show process/timeline  
**Features:** Horizontal timeline (desktop), vertical (mobile), numbered steps  
**Props:** title, subtitle, steps

### 6. GallerySection
**Purpose:** Photo gallery with lightbox  
**Features:** Grid layout, image lightbox, navigation, counter  
**Props:** title, subtitle, images

### 7. SpeakersSection
**Purpose:** Display speaker profiles  
**Features:** Avatar cards, hover effects, company info  
**Props:** title, subtitle, speakers

### 8. AdvisoryBoardSection
**Purpose:** Show advisory board members  
**Features:** Dark theme, avatar cards, professional profiles  
**Props:** title, subtitle, members

### 9. SponsorsSection
**Purpose:** Display sponsor logos by tier  
**Features:** Tiered layout (platinum/gold/silver), logo cards  
**Props:** title, subtitle, year, sponsors

### 10. CountdownSection
**Purpose:** Event countdown timer  
**Features:** Real-time countdown, 4-segment display (days/hours/minutes/seconds)  
**Props:** config (eventDate, title, subtitle)

## 🎨 Styling Guide

### Color Scheme
- Primary: Blue (`bg-blue-500`, `text-blue-600`)
- Accent: Yellow (`bg-yellow-400`)
- Dark sections: `bg-[#1a2942]`
- Light sections: `bg-white`, `bg-gray-50`

### Responsive Breakpoints
- Mobile: Default
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)

### Common Patterns
```typescript
// Section wrapper
<section className="py-16 md:py-24 bg-white">
  <div className="container mx-auto px-4">
    {/* Section header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        {title}
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
    </div>
    
    {/* Section content */}
    <div className="max-w-6xl mx-auto">
      {/* ... */}
    </div>
  </div>
</section>
```

## 🔄 Future Enhancements

### Easy Additions:
1. **CMS Integration**: Replace `homepage-data.ts` with API calls
2. **A/B Testing**: Create variant sections for testing
3. **Animations**: Add Framer Motion for scroll animations
4. **Analytics**: Track section views and interactions
5. **Internationalization**: Add i18n support for multi-language

### Example: CMS Integration
```typescript
// Instead of importing static data:
import { heroData } from "@/configs/homepage-data";

// Fetch from CMS:
const { data: heroData } = await fetch('/api/content/hero');
```

## 🐛 Common Issues & Solutions

### Issue: Images not loading
**Solution:** Ensure images exist in `public/images/` directory

### Issue: TypeScript errors
**Solution:** Check that data matches type definitions in `src/types/homepage.ts`

### Issue: Styling not applying
**Solution:** Verify Tailwind CSS classes are valid and rebuild if needed

### Issue: Section not appearing
**Solution:** Check that component is imported and rendered in `page.tsx`

## 📝 Best Practices

1. **Always use TypeScript types** - Prevents runtime errors
2. **Keep components pure** - No side effects, predictable output
3. **Centralize data** - All content in `homepage-data.ts`
4. **Use semantic HTML** - Better accessibility and SEO
5. **Mobile-first design** - Start with mobile, enhance for desktop
6. **Test responsiveness** - Check all breakpoints
7. **Optimize images** - Use Next.js Image component, proper sizes
8. **Document changes** - Update comments when modifying

## 🚀 Quick Start

1. **Update content**: Edit `src/configs/homepage-data.ts`
2. **See changes**: Run `npm run dev` and visit `http://localhost:3000`
3. **Deploy**: Changes are ready for production

## 📞 Need Help?

- Check type definitions in `src/types/homepage.ts` for data structure
- Review existing sections for examples
- Use IDE autocomplete for prop hints
- Refer to component JSDoc comments
