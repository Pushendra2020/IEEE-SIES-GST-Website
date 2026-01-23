import React, { useState } from "react";
import { motion } from "framer-motion";
import highlight1 from "../assets/highlights/highlight1.jpg";
import highlight2 from "../assets/highlights/highlight2.jpg";
import highlight3 from "../assets/highlights/highlight3.jpg";
import highlight4 from "../assets/highlights/highlight4.jpg";
import highlight5 from "../assets/highlights/highlight5.jpg";
import highlight6 from "../assets/highlights/highlight6.jpg";
import highlight7 from "../assets/highlights/highlight7.jpg";
import highlight8 from "../assets/highlights/highlight8.jpg";
import highlight9 from "../assets/highlights/highlight9.jpg";
import IEEE1 from "../assets/IEEE1.webp";
import IEEE2 from "../assets/IEEE2.webp";
import IEEE3 from "../assets/IEEE3.webp";
import IEEE4 from "../assets/IEEE4.webp";
import IEEE5 from "../assets/IEEE5.webp";
import Lightbox from "../components/Lightbox";

// All unique images for the lightbox
const allImages = [
  highlight1, highlight2, highlight3, highlight4, highlight5,
  highlight6, highlight7, highlight8, highlight9,
  IEEE1, IEEE2, IEEE3, IEEE4, IEEE5
];

// Create pairs for the hexagons (Front -> Back on hover)
// We cycle through the 14 images to create interesting combinations for the 18 grid slots
const galleryItems = [
  { front: highlight1, back: IEEE1, index: 0 },
  { front: highlight3, back: IEEE2, index: 2 },
  { front: highlight5, back: IEEE3, index: 4 },
  { front: highlight7, back: IEEE4, index: 6 },
  { front: highlight9, back: IEEE5, index: 8 },

  { front: IEEE1, back: highlight2, index: 9 },
  { front: IEEE3, back: highlight4, index: 11 },
  { front: IEEE5, back: highlight6, index: 13 },
  { front: highlight2, back: highlight8, index: 1 },

  { front: highlight4, back: highlight9, index: 3 },
  { front: highlight6, back: IEEE1, index: 5 },
  { front: highlight8, back: IEEE2, index: 7 },
  { front: IEEE2, back: IEEE3, index: 10 },
  { front: IEEE4, back: IEEE5, index: 12 },

  { front: highlight1, back: highlight5, index: 0 },
  { front: IEEE1, back: highlight7, index: 9 },
  { front: IEEE3, back: highlight3, index: 11 },
  { front: IEEE5, back: highlight1, index: 13 }
];

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrev = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? allImages.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === allImages.length - 1 ? 0 : prev + 1));
  };

  // Create honeycomb rows
  const rows = [];
  let itemIndex = 0;
  const itemsPerRow = [5, 4, 5, 4]; // Alternating pattern for honeycomb

  for (let rowIndex = 0; rowIndex < itemsPerRow.length && itemIndex < galleryItems.length; rowIndex++) {
    const rowItems = [];
    const count = itemsPerRow[rowIndex];
    const isOffset = rowIndex % 2 === 1; // Offset every other row

    for (let i = 0; i < count && itemIndex < galleryItems.length; i++) {
      rowItems.push(galleryItems[itemIndex]);
      itemIndex++;
    }
    rows.push({ items: rowItems, isOffset });
  }

  return (
    <>
      <section id="gallery" className="section bg-transparent overflow-hidden py-12 sm:py-16 md:py-20">
        <div className="container relative z-10 text-center mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title">
              Event <span className="text-[var(--color-accent)]">Gallery</span>
            </h2>
            <p className="section-subtitle">
              A visual journey through our technical events and workshops.
            </p>
          </motion.div>
        </div>

        {/* Honeycomb Grid */}
        <div className="flex flex-col items-center gap-2 sm:gap-3 px-2 sm:px-4 max-w-7xl mx-auto">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`flex justify-center gap-2 sm:gap-3 ${row.isOffset ? 'ml-[calc(3rem+0.5rem)] sm:ml-[calc(4.5rem+0.75rem)] md:ml-[calc(6rem+1rem)]' : ''}`}
            >
              {row.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="relative group cursor-pointer"
                  onClick={() => openLightbox(item.index)}
                >
                  {/* Hexagon container */}
                  <div
                    className="w-24 h-28 sm:w-36 sm:h-40 md:w-48 md:h-52 relative overflow-hidden transition-transform duration-300 hover:scale-105 hover:z-10 bg-gray-900"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  >
                    {/* Front Image (Visible by default, hidden on hover) */}
                    <img
                      src={item.front}
                      alt="Event Front"
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out opacity-100 group-hover:opacity-0"
                    />

                    {/* Back Image (Hidden by default, visible on hover) */}
                    <img
                      src={item.back}
                      alt="Event Back"
                      className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out opacity-0 group-hover:opacity-100"
                    />

                    {/* Overlay for better text visibility (optional) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* View Text */}
                    <div className="absolute inset-x-0 bottom-4 text-center z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <span className="text-white font-bold text-xs sm:text-sm tracking-widest uppercase drop-shadow-md">View</span>
                    </div>

                    {/* Border glow on hover */}
                    <div className="absolute inset-0 border-4 border-transparent group-hover:border-[var(--color-accent)]/30 transition-colors duration-300 pointer-events-none"
                      style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={allImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrev={goToPrev}
        onNext={goToNext}
      />
    </>
  );
}

