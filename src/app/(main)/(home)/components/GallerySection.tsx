/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import { useGetApiV10PublicGallery } from "@/api/endpoints/public";
import baseConfig from "@/configs/base";
import { Gallery } from "@/api/models/gallery";
import { Category } from "@/api/models/category";

export const GallerySection = () => {
  const [activeTabId, setActiveTabId] = useState<string>("all");

  const { data: galleryData, isLoading } = useGetApiV10PublicGallery({
    page: 1,
    pageSize: 100, 
  });

  const rows: Gallery[] = useMemo(() => {
    return (galleryData as unknown as { responseData?: { rows?: Gallery[] } })?.responseData?.rows || [];
  }, [galleryData]);

  const uniqueCategories = useMemo(() => {
    const map = new Map<string, Category | { id: string; name: string }>();
    rows.forEach((item) => {
      if (item.categories && Array.isArray(item.categories)) {
        item.categories.forEach((cat) => {
          if (cat && cat.id) {
            map.set(cat.id, cat as Category);
          }
        });
      }
    });
    return [{ id: "all", name: "Tất cả" }, ...Array.from(map.values())];
  }, [rows]);

  // Lọc gallery theo category ID
  const filtered = activeTabId === "all" 
    ? rows 
    : rows.filter((item) => {
        return item.categories?.some((c) => c.id === activeTabId);
      });

  return (
    <section id="gallery" className="py-20 md:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm font-semibold text-yellow-600 uppercase tracking-widest mb-3"> Hoạt động</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mt-5 mb-8">Hình Ảnh Chương Trình</h2>
        </motion.div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
             <Loader2 className="w-8 h-8 animate-spin text-yellow-600" />
          </div>
        ) : rows.length === 0 ? (
           <div className="text-center text-gray-500 py-10">
              Chưa có hình ảnh nào.
           </div>
        ) : (
          <>
            {/* Filter tabs */}
            {uniqueCategories.length > 1 && (
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {uniqueCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveTabId(cat.id!)}
                    className={`px-5 py-2.5 rounded-full text-sm transition-all duration-300 ${
                      activeTabId === cat.id
                        ? "bg-yellow-500 text-gray-900 font-bold shadow-md transform scale-105"
                        : "bg-white/80 backdrop-blur-md border border-gray-100 text-gray-500 hover:text-gray-900 font-medium shadow-sm hover:shadow"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            )}

            {/* Grid */}
            <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <AnimatePresence>
                {filtered.map((item) => {
                  const imageUrl = item.image?.path ? `${baseConfig.imageDomain}/${item.image.path}` : '/placeholder-image.jpg';
                  const displayCategory = item.categories && item.categories.length > 0 
                                            ? item.categories[0].name 
                                            : "Chưa phân loại";

                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-md border border-gray-100 bg-gray-200"
                    >
                      <img
                        src={imageUrl}
                        alt={item.title || "Gallery image"}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder-image.jpg'; // Fallback
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#020C1B]/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          <span className="inline-block px-3 py-1 mb-3 text-xs font-bold text-gray-900 bg-yellow-500 rounded-full shadow-sm">
                            {displayCategory}
                          </span>
                          {item.title && (
                            <p className="text-lg font-bold text-white shadow-sm">{item.title}</p>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </div>
    </section>
  );
};
