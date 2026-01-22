import React, { useState } from "react";
import { motion } from "framer-motion";
import IEEE1 from "../assets/IEEE1.webp";
import IEEE2 from "../assets/IEEE2.webp";
import IEEE3 from "../assets/IEEE3.webp";
import IEEE4 from "../assets/IEEE4.webp";
import IEEE5 from "../assets/IEEE5.webp";
import Lightbox from "../components/Lightbox";

// Create more images for a fuller honeycomb grid
const images = [
  IEEE1, IEEE2, IEEE3, IEEE4, IEEE5,
  IEEE2, IEEE3, IEEE1, IEEE4, IEEE5,
  IEEE3, IEEE1, IEEE5, IEEE2, IEEE4,
  IEEE1, IEEE2, IEEE3, IEEE4, IEEE5
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
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Create honeycomb rows
  const rows = [];
  let imageIndex = 0;
  const imagesPerRow = [5, 4, 5, 4]; // Alternating pattern for honeycomb

  for (let rowIndex = 0; rowIndex < imagesPerRow.length && imageIndex < images.length; rowIndex++) {
    const rowImages = [];
    const count = imagesPerRow[rowIndex];
    const isOffset = rowIndex % 2 === 1; // Offset every other row

    for (let i = 0; i < count && imageIndex < images.length; i++) {
      rowImages.push({ img: images[imageIndex], index: imageIndex });
      imageIndex++;
    }
    rows.push({ images: rowImages, isOffset });
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
              {row.images.map(({ img, index }, i) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="relative group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  {/* Hexagon container */}
                  <div
                    className="w-24 h-28 sm:w-36 sm:h-40 md:w-48 md:h-52 relative overflow-hidden transition-transform duration-300 hover:scale-105 hover:z-10"
                    style={{
                      clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                    }}
                  >
                    {/* Image */}
                    <img
                      src={img}
                      alt={`Event ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-accent-deep)]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-semibold text-xs sm:text-sm tracking-wider uppercase">View</span>
                    </div>

                    {/* Border glow on hover */}
                    <div className="absolute inset-0 border-2 border-[var(--color-accent)]/0 group-hover:border-[var(--color-accent)]/50 transition-colors duration-300"
                      style={{
                        clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                      }}
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
        images={images}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrev={goToPrev}
        onNext={goToNext}
      />
    </>
  );
}

