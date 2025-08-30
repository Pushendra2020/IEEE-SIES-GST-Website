import React from "react";
import mtts from "../assets/mtts.png";
import cs from "../assets/cs.png";
import wie from "../assets/wie.png";
import { NavLink } from "react-router-dom";
export default function AboutUs() {
  return (
    <>
    <section id="aboutus" className="parallax-section">
      <h2 className="section-title" style={{ color: "#ff00a6" }}>About Us</h2>
      <p className="section-text">
        We are the IEEE SIES GST Student Body for the academic year 2024, dedicated to fostering a collaborative environment for students interested in engineering, technology, and innovation.
      </p>

      <div className="flex gap-8 justify-center items-center mt-6 flex-wrap">
         <div className="flex flex-col items-center p-4 shadow-lg group">
          <img src={cs} alt="cs" className="h-32 w-auto mb-2" />
          <button
            className="border rounded-lg bg-pink-500 text-white mt-2 px-4 py-1 font-semibold transform lg:scale-0 lg:opacity-0 transition-all duration-300 lg:group-hover:scale-100 group-hover:opacity-100"
          >
            Know More
          </button>
        </div>
        <div className="flex flex-col items-center p-4 shadow-lg group">
          <img src={mtts} alt="mtts" className="h-32 w-auto mb-2" />
          <button
            className="border rounded-lg bg-pink-500 text-white mt-2 px-4 py-1 font-semibold transform lg:scale-0 lg:opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
          >
            Know More
          </button>
        </div>
        <div className="flex flex-col items-center p-4 shadow-lg group">
          <img src={wie} alt="wie" className="h-32 w-auto mb-2" />
          <button
            className="border rounded-lg bg-pink-500 text-white mt-2 px-4 py-1 font-semibold transform lg:scale-0 lg:opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100"
          >
            Know More
          </button>
        </div>
      </div>
    </section>
    </>
  );
}
