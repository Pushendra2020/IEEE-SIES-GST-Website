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
import IEEE6 from "../assets/IEEE6.jpeg";

import Lightbox from "../components/Lightbox";

// ======================================================
// ALL IMAGES
// ======================================================

const allImages = [
  highlight1, // 0
  highlight2, // 1
  highlight3, // 2
  highlight4, // 3
  highlight5, // 4
  highlight6, // 5
  highlight7, // 6
  highlight8, // 7
  highlight9, // 8
  IEEE1,      // 9
  IEEE2,      // 10
  IEEE3,      // 11
  IEEE4,      // 12
  IEEE5,      // 13
  IEEE6,      // 14 - NEW IMAGE
];

// ======================================================
// GALLERY ITEMS
// ======================================================

const galleryItems = [
  // Row 1
  {
    front: highlight1,
    frontIndex: 0,
    back: IEEE1,
    backIndex: 9,
  },
  {
    front: highlight3,
    frontIndex: 2,
    back: IEEE2,
    backIndex: 10,
  },
  {
    front: highlight5,
    frontIndex: 4,
    back: IEEE3,
    backIndex: 11,
  },
  {
    front: highlight7,
    frontIndex: 6,
    back: IEEE4,
    backIndex: 12,
  },
  {
    front: highlight9,
    frontIndex: 8,
    back: IEEE5,
    backIndex: 13,
  },

  // Row 2
  {
    front: IEEE1,
    frontIndex: 9,
    back: highlight2,
    backIndex: 1,
  },
  {
    front: IEEE3,
    frontIndex: 11,
    back: highlight4,
    backIndex: 3,
  },
  {
    front: IEEE5,
    frontIndex: 13,
    back: highlight6,
    backIndex: 5,
  },
  {
    front: highlight2,
    frontIndex: 1,
    back: highlight8,
    backIndex: 7,
  },

  // Row 3
  {
    front: highlight4,
    frontIndex: 3,
    back: highlight9,
    backIndex: 8,
  },
  {
    front: highlight6,
    frontIndex: 5,
    back: IEEE1,
    backIndex: 9,
  },
  {
    front: highlight8,
    frontIndex: 7,
    back: IEEE2,
    backIndex: 10,
  },
  {
    front: IEEE2,
    frontIndex: 10,
    back: IEEE3,
    backIndex: 11,
  },
  {
    front: IEEE4,
    frontIndex: 12,
    back: IEEE5,
    backIndex: 13,
  },

  // Row 4
  {
    front: highlight1,
    frontIndex: 0,
    back: highlight5,
    backIndex: 4,
  },
  {
    front: IEEE1,
    frontIndex: 9,
    back: highlight7,
    backIndex: 6,
  },
  {
    front: IEEE3,
    frontIndex: 11,
    back: highlight3,
    backIndex: 2,
  },
  {
    front: IEEE5,
    frontIndex: 13,
    back: highlight1,
    backIndex: 0,
  },

  // NEW IMAGE - IEEE6
  {
    front: IEEE6,
    frontIndex: 14,
    back: highlight6,
    backIndex: 5,
  },
];

// ======================================================
// GALLERY COMPONENT
// ======================================================

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Open lightbox
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  // Close lightbox
  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  // Previous image
  const goToPrev = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? allImages.length - 1 : prev - 1
    );
  };

  // Next image
  const goToNext = () => {
    setCurrentImageIndex((prev) =>
      prev === allImages.length - 1 ? 0 : prev + 1
    );
  };

  // ======================================================
  // CREATE HONEYCOMB ROWS
  // ======================================================

  const rows = [];
  let itemIndex = 0;

  /*
    19 cards total:

    Row 1 → 5
    Row 2 → 4
    Row 3 → 5
    Row 4 → 5

    Total = 19
  */
  const itemsPerRow = [5, 4, 5, 5];

  for (
    let rowIndex = 0;
    rowIndex < itemsPerRow.length && itemIndex < galleryItems.length;
    rowIndex++
  ) {
    const rowItems = [];
    const count = itemsPerRow[rowIndex];

    // Offset every second row
    const isOffset = rowIndex % 2 === 1;

    for (
      let i = 0;
      i < count && itemIndex < galleryItems.length;
      i++
    ) {
      rowItems.push(galleryItems[itemIndex]);
      itemIndex++;
    }

    rows.push({
      items: rowItems,
      isOffset,
    });
  }

  return (
    <>
      {/* ==================================================
          GALLERY HEADER
      ================================================== */}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Event Gallery</h2>

        <p>
          A visual journey through our technical events and workshops.
        </p>
      </motion.div>

      {/* ==================================================
          HONEYCOMB GRID
      ================================================== */}

      <div className="flex flex-col items-center gap-2 sm:gap-3 px-2 sm:px-4 max-w-7xl mx-auto">
        {rows.map((row, rowIndex) => (
          <div
            key={`row-${rowIndex}`}
            className={`flex justify-center gap-2 sm:gap-3 ${
              row.isOffset
                ? "ml-[calc(3rem+0.5rem)] sm:ml-[calc(4.5rem+0.75rem)] md:ml-[calc(6rem+1rem)]"
                : ""
            }`}
          >
            {row.items.map((item, itemIndexInRow) => (
              <motion.div
                key={`gallery-${rowIndex}-${itemIndexInRow}-${item.frontIndex}-${item.backIndex}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: itemIndexInRow * 0.05,
                }}
                className="relative group cursor-pointer"
              >
                {/* ==================================================
                    HEXAGON
                ================================================== */}

                <div
                  className="w-24 h-28 sm:w-36 sm:h-40 md:w-48 md:h-52 relative overflow-hidden transition-transform duration-300 hover:scale-105 hover:z-10 bg-gray-900"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  {/* ==================================================
                      FRONT IMAGE
                  ================================================== */}

                  <img
                    src={item.front}
                    alt="IEEE Event Gallery"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out opacity-100 group-hover:opacity-0"
                    onClick={() => openLightbox(item.frontIndex)}
                  />

                  {/* ==================================================
                      BACK IMAGE
                  ================================================== */}

                  <img
                    src={item.back}
                    alt="IEEE Event Gallery"
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-out opacity-0 group-hover:opacity-100"
                    onClick={() => openLightbox(item.backIndex)}
                  />

                  {/* ==================================================
                      HOVER OVERLAY
                  ================================================== */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* ==================================================
                      VIEW TEXT
                  ================================================== */}

                  <div className="absolute inset-x-0 bottom-4 text-center z-10 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 pointer-events-none">
                    <span className="text-white font-bold text-xs sm:text-sm tracking-widest uppercase drop-shadow-md">
                      View
                    </span>
                  </div>

                  {/* ==================================================
                      BORDER GLOW
                  ================================================== */}

                  <div
                    className="absolute inset-0 border-4 border-transparent group-hover:border-[var(--color-accent)]/30 transition-colors duration-300 pointer-events-none"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        ))}
      </div>

      {/* ==================================================
          LIGHTBOX
      ================================================== */}

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