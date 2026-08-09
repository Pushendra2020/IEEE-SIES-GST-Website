import ScrollManager from "./components/ScrollManager";
import LoadingScreen from "./components/LoadingScreen";
import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import "./custom.css";

import { teamLoader } from "./loaders/teamLoader";
import { teamLoader as juniorCouncilLoader } from "./loaders/juniorCouncilLoader";
import SplashCursor from "./components/Animations/SplashCursor/SplashCursor";

const Teams = lazy(() => import("./components/Teams"));
const JuniorCouncil = lazy(() => import("./pages/JuniorCouncil"));

const AboutUs = lazy(() => import("./pages/AboutUs"));
const Events = lazy(() => import("./pages/Events"));
const Gallery = lazy(() => import("./pages/Gallery"));
const YouTubeShowcase = lazy(() => import("./components/YouTubeShowcase"));
const Contact = lazy(() => import("./pages/Contact"));
const Hero = lazy(() => import("./components/Hero"));
const FAQ = lazy(() => import("./pages/FAQ"));
const EnhancedBackground = lazy(() => import("./components/BackgroundEffects"));

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
        <YouTubeShowcase />
        <FAQ />
        <Contact />
      </Layout>
    ),
  },
  {
    path: "/team",
    element: (
      <Layout>
        <Teams />
      </Layout>
    ),
    loader: teamLoader,
  },
  {
    path: "/junior-council",
    element: (
      <Layout>
        <JuniorCouncil />
      </Layout>
    ),
    loader: juniorCouncilLoader,
  },
]);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

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