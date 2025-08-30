import React from "react";
import LogoCloud from "../components/logo-cloud.jsx";

export default function Gallery() {
  return (
    <section id="gallery" className="parallax-section px-2 py-8 sm:px-8 sm:py-12 flex flex-col items-center">
      <h2 className="section-title text-center text-2xl sm:text-4xl font-bold mb-6" style={{ color: "#ff00a6" }}>Gallery</h2>
      <LogoCloud/>
    </section>
  );
}
