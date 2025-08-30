import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import "./custom.css";
import { teamLoader } from "./components/team";


const Teams = React.lazy(() => import("./components/Teams"));
const AboutUs = React.lazy(() => import("./pages/AboutUs"));
const Events = React.lazy(() => import("./pages/Events"));
const Gallery = React.lazy(() => import("./pages/Gallery"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Hero = React.lazy(() => import("./components/Hero"));
const FAQ = React.lazy(() => import("./pages/FAQ"));


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Suspense fallback={<div className="text-center text-cyan-400 mt-20">Loading...</div>}>
        <>
          <Hero/>
          <AboutUs />
          <Events />
          <Gallery />
          <FAQ/>
          <Contact />
        </>
      </React.Suspense>
    ),
  },
  {
    path: "/team",
    element: (
      <React.Suspense fallback={<div className="text-center text-cyan-400 mt-20">Loading...</div>}>
        <Teams />
      </React.Suspense>
    ),
    loader: teamLoader,
  },
]);


export default function App() {
  return <RouterProvider router={router} />;
}