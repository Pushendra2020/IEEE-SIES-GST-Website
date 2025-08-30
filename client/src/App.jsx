import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./index.css";
import "./custom.css";



const Team = React.lazy(() => import("./components/Teams"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const Events = React.lazy(() => import("./pages/Events"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Hero = React.lazy(() => import("./components/Hero"));
const FAQ = React.lazy(() => import("./pages/FAQ"));


export default function App() {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div className="text-center text-cyan-400 mt-20">Loading...</div>}>
   
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
      </React.Suspense>
    </BrowserRouter>
  );
}