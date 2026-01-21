import ScrollManager from "./components/ScrollManager";
import LoadingScreen from "./components/LoadingScreen";
import React, { lazy, Suspense, useState, useEffect } from "react"; // Added useState, useEffect
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import "./custom.css";

import { teamLoader } from "./components/team";
import SplashCursor from "./components/Animations/SplashCursor/SplashCursor";

const Teams = lazy(() => import("./components/Teams"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Events = lazy(() => import("./pages/Events"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Contact = lazy(() => import("./pages/Contact"));
const Hero = lazy(() => import("./components/Hero"));
const FAQ = lazy(() => import("./pages/FAQ"));
// Add background component
const EnhancedBackground = lazy(() => import("./components/BackgroundEffects"));

// Layout Component to wrap pages
const Layout = ({ children }) => {
  return (
    <>
      <ScrollManager />
      <EnhancedBackground />
      {children}
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        {/* <SplashCursor /> */}
        <Hero />
        <AboutUs />
        <Events />
        <Gallery />
        <FAQ />
        <Contact />
      </Layout>
    ),
  },
  {
    path: "/team",
    element: (
      <Layout>
        {/* <SplashCursor /> */}
        <Teams />
      </Layout>
    ),
    loader: teamLoader,
  },
]);


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for the animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800); // 2.8s total loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <LoadingScreen />}
      <Suspense fallback={null}>
        {!loading && <RouterProvider router={router} />}
      </Suspense>
    </>
  );
}