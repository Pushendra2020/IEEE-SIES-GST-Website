import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./index.css";
import "./custom.css";
import Team from "./components/Teams";
import AboutUs from "./pages/AboutUs";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import SplashCursor from "./components/Animations/SplashCursor/SplashCursor.jsx";
import Hero from "./components/Hero";
import FAQ from "./pages/FAQ";


export default function App() {
  return (
    <BrowserRouter>
     {/* <Navbar/> */}
      {/* <SplashCursor/> */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero/>
              <AboutUs />
              <Events />
              <Gallery />
              <FAQ/>
              <Contact />
            </>
          }
        />
        <Route path="/team" element={<Team />} />
      </Routes>

    </BrowserRouter>
  );
}