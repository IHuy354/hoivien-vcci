/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2, Plus, ArrowUpRight } from "lucide-react";
import { useGetApiV10PublicGallery } from "@/api/endpoints/public";
import baseConfig from "@/configs/base";
import { Gallery } from "@/api/models/gallery";
import { Category } from "@/api/models/category";

export const GallerySection = () => {
  const [activeTabId, setActiveTabId] = useState<string>("all");
  const [displayCount, setDisplayCount] = useState<number>(6);

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

  const filtered = activeTabId === "all" 
    ? rows 
    : rows.filter((item) => {
        return item.categories?.some((c) => c.id === activeTabId);
      });

  const displayedItems = filtered.slice(0, displayCount);

  return (
    <section id="gallery" className="py-16 sm:py-20 md:py-28 bg-[#1e293b] relative overflow-hidden">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#1e293b] to-[#0f172a]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <motion.div
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
             className="max-w-2xl"
          >
            <p className="text-sm font-semibold text-amber-500 uppercase tracking-[0.2em] mb-4">Dấu ấn CEO VCCI</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Thư Viện Hình Ảnh
            </h2>
          </motion.div>

          {/* Premium Filter Tabs */}
          {!isLoading && uniqueCategories.length > 1 && (
            <motion.div 
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
               className="flex flex-wrap gap-2 md:justify-end"
            >
              {uniqueCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveTabId(cat.id!);
                    setDisplayCount(6);
                  }}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTabId === cat.id
                      ? "bg-amber-400 text-neutral-900 shadow-md transform scale-105"
                      : "bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </motion.div>
          )}
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-32">
             <Loader2 className="w-8 h-8 animate-spin text-amber-500" />
          </div>
        ) : rows.length === 0 ? (
           <div className="text-center text-neutral-500 py-32 font-medium">
              Chưa có hình ảnh nào được cập nhật.
           </div>
        ) : (
          <>
            {/* Cinematic Grid */}
            <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
              <AnimatePresence>
                {displayedItems.map((item, index) => {
                  const imageUrl = item.image?.path ? `${baseConfig.imageDomain}/${item.image.path}` : '/placeholder-image.jpg';
                  const displayCategory = item.categories && item.categories.length > 0 
                                            ? item.categories[0].name 
                                            : "Khoảnh khắc";

                  // Use a uniform aspect ratio for perfect grid alignment
                  const aspectClass = "aspect-[4/5] sm:aspect-square lg:aspect-[4/5]";

                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, scale: 0.9, y: 20 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9, y: 20 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className={`group relative overflow-hidden rounded-3xl bg-slate-900 ${aspectClass}`}
                    >
                      <img
                        src={imageUrl}
                        alt={item.title || "Gallery photo"}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-[1.03] group-hover:rotate-1"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.src = '/placeholder-image.jpg';
                        }}
                      />
                      
                      {/* Premium Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Content Overlay */}
                      <div className="absolute inset-x-0 bottom-0 p-8 transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out flex flex-col items-start">
                        <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold tracking-widest text-[#0f172a] bg-amber-400 rounded-sm uppercase">
                          {displayCategory}
                        </span>
                        {item.title && (
                          <h3 className="text-xl font-semibold text-white leading-snug pe-10">{item.title}</h3>
                        )}
                        
                        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors">
                          <ArrowUpRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </motion.div>

            {filtered.length > displayCount && (
              <div className="flex justify-center mt-16 pb-8">
                <button
                  onClick={() => setDisplayCount((prev) => prev + 6)}
                  className="group flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-xl border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  <Plus className="w-5 h-5 text-amber-500 group-hover:rotate-90 transition-transform duration-500" />
                  Hiển Thị Thêm
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};
