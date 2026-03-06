"use client";

import { useState } from "react";
import Image from "next/image";
import { GalleryImage } from "@/types/homepage";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GallerySectionProps {
  title?: string;
  subtitle?: string;
  images?: GalleryImage[];
}

const defaultImages: GalleryImage[] = [
  { id: 1, src: "/images/gallery-1.jpg", alt: "Hình ảnh sự kiện 1", title: "Lễ khai mạc" },
  { id: 2, src: "/images/gallery-2.jpg", alt: "Hình ảnh sự kiện 2", title: "Buổi hội thảo" },
  { id: 3, src: "/images/gallery-3.jpg", alt: "Hình ảnh sự kiện 3", title: "Trao giải thưởng" },
  { id: 4, src: "/images/gallery-4.jpg", alt: "Hình ảnh sự kiện 4", title: "Networking" },
  { id: 5, src: "/images/gallery-5.jpg", alt: "Hình ảnh sự kiện 5", title: "Workshop" },
  { id: 6, src: "/images/gallery-6.jpg", alt: "Hình ảnh sự kiện 6", title: "Gala Dinner" },
  { id: 7, src: "/images/gallery-7.jpg", alt: "Hình ảnh sự kiện 7", title: "Hội thảo chuyên đề" },
  { id: 8, src: "/images/gallery-8.jpg", alt: "Hình ảnh sự kiện 8", title: "Giao lưu" },
  { id: 9, src: "/images/gallery-9.jpg", alt: "Hình ảnh sự kiện 9", title: "Lễ bế mạc" },
];

export function GallerySection({
  title = "Hành Ảnh Chương Trình",
  subtitle = "Những khoảnh khắc đáng nhớ từ các chương trình trước",
  images = defaultImages,
}: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (image: GalleryImage, index: number) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative aspect-video overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => openImage(image, index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <p className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={closeImage}>
          <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
                onClick={closeImage}
              >
                <X className="h-6 w-6" />
              </Button>

              {selectedImage && (
                <div className="relative aspect-video">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1200px) 100vw, 1200px"
                  />
                </div>
              )}

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                onClick={goToPrevious}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                onClick={goToNext}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
