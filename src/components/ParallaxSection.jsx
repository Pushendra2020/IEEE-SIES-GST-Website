import React from "react";

export default function ParallaxSection() {
  return (
    <section className="parallax-section flex flex-col items-center justify-center min-h-screen pt-32 pb-20 relative z-10">
      <h2 className="section-title text-4xl font-bold mb-8 text-center font-['Press_Start_2P']">About IEEE</h2>
      <p className="section-text text-base max-w-xl text-center">
        IEEE is the world’s largest technical professional organization dedicated to advancing technology for the benefit of humanity. Join us for events, workshops, and networking opportunities!
      </p>
    </section>
  );
}
