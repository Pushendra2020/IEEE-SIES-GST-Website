import React from "react";
import { motion } from "framer-motion";
import IEEE1 from "../assets/IEEE1.webp";
import IEEE2 from "../assets/IEEE2.webp";
import IEEE3 from "../assets/IEEE3.webp";
import IEEE4 from "../assets/IEEE4.webp";
import IEEE5 from "../assets/IEEE5.webp";

// Duplicate images to create a fuller grid for demonstration
const images = [IEEE1, IEEE2, IEEE3, IEEE4, IEEE5, IEEE2, IEEE1];

export default function Gallery() {
  return (
    <section id="gallery" className="section bg-transparent overflow-hidden">
      <div className="container relative z-10 text-center mb-12">
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

      {/* Hexagonal Grid Container */}
      <div className="flex justify-center items-center pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mx-auto max-w-6xl px-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative w-40 h-40 md:w-56 md:h-56 group ${index % 2 === 1 ? 'md:mt-12' : ''}`} // Stagger effect
            >
              <div className="w-full h-full relative cursor-pointer transition-transform duration-300 hover:scale-110 drop-shadow-2xl filter hover:brightness-110">
                {/* Hexagon Shape Clipping */}
                <div
                  className="w-full h-full bg-gray-800 overflow-hidden"
                  style={{
                    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                >
                  <img
                    src={img}
                    alt={`Event ${index}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-accent-deep)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white font-bold tracking-widest text-sm uppercase">View</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
