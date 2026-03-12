

"use client";

// Import required UI components
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// Add other UI components as needed

// Import your data type
// import { YourDataType } from "@/types/homepage";

// Example item type - replace with your actual type
interface ExampleItem {
  id: number;
  // Add your properties here
}

interface NewSectionProps {
  title?: string;
  subtitle?: string;
  items?: ExampleItem[];
}

// Default data (fallback if no props provided)
const defaultItems: ExampleItem[] = [
  {
    id: 1,
    // Add your data structure here
  },
];

export function NewSection({
  title = "Your Section Title",
  subtitle = "Your section subtitle or description",
  items = defaultItems,
}: NewSectionProps) {
  return (
    <section className="py-16 md:py-16 md:py-24 bg-white">
      {/* Use bg-gray-50 or bg-[#1a2942] for alternating sections */}
      
      <div className="container mx-auto px-4">
        {/* Section Header - Standard pattern */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Section Content */}
        <div className="max-w-6xl mx-auto">
          
          {/* Example: Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <Card 
                key={item.id}
                className="border border-gray-200 hover:shadow-lg transition-shadow duration-300"
              >
                <CardContent className="p-6">
                  {/* Your card content here */}
                  <div className="flex flex-col gap-4">
                    {/* Add your content structure */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Example: Call to Action Button */}
          <div className="text-center mt-12">
            <Button 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Common Patterns & Tips:
 * 
 * 1. SECTION BACKGROUNDS:
 *    - White: bg-white
 *    - Light gray: bg-gray-50
 *    - Dark: bg-[#1a2942]
 *    - Gradient: bg-gradient-to-b from-blue-50 to-white
 * 
 * 2. GRID LAYOUTS:
 *    - 2 columns: grid-cols-1 md:grid-cols-2
 *    - 3 columns: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
 *    - 4 columns: grid-cols-2 md:grid-cols-3 lg:grid-cols-4
 * 
 * 3. CARD STYLES:
 *    - Light: border border-gray-200
 *    - Dark: bg-white/10 border-white/20
 *    - Hover: hover:shadow-lg transition-shadow duration-300
 * 
 * 4. TEXT COLORS:
 *    - Light background: text-gray-900 / text-gray-600
 *    - Dark background: text-white / text-gray-300
 * 
 * 5. SPACING:
 *    - Section padding: py-16 md:py-16 md:py-24
 *    - Content gap: gap-4 to gap-8
 *    - Bottom margin: mb-4 to mb-12
 * 
 * 6. RESPONSIVE:
 *    - Always use mobile-first
 *    - Add md: for tablet
 *    - Add lg: for desktop
 * 
 * 7. ACCESSIBILITY:
 *    - Use semantic HTML
 *    - Add proper alt text for images
 *    - Ensure sufficient color contrast
 *    - Add ARIA labels where needed
 */

// EXAMPLE VARIATIONS:

/**
 * VARIATION 1: Two-Column Layout
 */
/*
<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
  <div>Left content</div>
  <div>Right content</div>
</div>
*/

/**
 * VARIATION 2: Centered Content with Max Width
 */
/*
<div className="max-w-3xl mx-auto text-center">
  <p>Centered content</p>
</div>
*/

/**
 * VARIATION 3: Horizontal Scrolling on Mobile
 */
/*
<div className="flex overflow-x-auto gap-4 pb-4 md:grid md:grid-cols-3">
  {items.map(item => <Card key={item.id}>...</Card>)}
</div>
*/

/**
 * VARIATION 4: Dark Theme Section
 */
/*
<section className="py-16 md:py-16 md:py-24 bg-[#1a2942]">
  <h2 className="text-white">Title</h2>
  <p className="text-gray-300">Description</p>
</section>
*/

/**
 * VARIATION 5: With Background Image
 */
/*
<section 
  className="py-16 md:py-16 md:py-24 bg-cover bg-center relative"
  style={{ backgroundImage: 'url(/images/bg.jpg)' }}
>
  <div className="absolute inset-0 bg-black/50" />
  <div className="relative z-10">
    Content over image
  </div>
</section>
*/
