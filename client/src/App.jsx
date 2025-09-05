import React, { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import "./custom.css";
import axios from "axios";
import { teamLoader } from "./components/team";
import SplashCursor from "./components/Animations/SplashCursor/SplashCursor";

const Teams = lazy(() => import("./components/Teams"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Events = lazy(() => import("./pages/Events"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const Hero = lazy(() => import("./components/Hero"));
const FAQ = lazy(() => import("./pages/FAQ"));


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div className="text-center text-cyan-400 mt-20">Loading...</div>}>
        <>
          {/* <SplashCursor /> */}
          <Hero />
          <AboutUs />
          <Events />
          <Gallery />
          <FAQ />
          <Contact />
        </>
      </Suspense>
    ),
  },
  {
    path: "/team",
    element: (
      <Suspense fallback={<div className="text-center text-cyan-400 mt-20">Loading...</div>}>
        {/* <SplashCursor /> */}
        <Teams />
      </Suspense>
    ),
    loader: teamLoader,
  },
]);


export default function App() {
axios.get(`${import.meta.env.VITE_API_URL}/api/health`)
  .then(res => {
    console.log(res.data);
  })
  .catch(err => {
    console.error(err);
  });

  return <RouterProvider router={router} />;
}