
import React from "react";
import siesLogo from "../assets/siesLogo.png";

const socialLinks = [
  { href: "https://www.linkedin.com/company/ieee-sies-gst/", label: "LinkedIn", svg: <svg width="36" height="36" fill="currentColor" className="text-white hover:text-cyan-400" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.604v5.592z"/></svg> },
  { href: "https://twitter.com/ieeesiesgst", label: "Twitter", svg: <svg width="36" height="36" fill="currentColor" className="text-white hover:text-cyan-400" viewBox="0 0 24 24"><path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195a4.916 4.916 0 0 0-8.38 4.482c-4.083-.205-7.697-2.162-10.125-5.144a4.822 4.822 0 0 0-.666 2.475c0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.228-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417a9.867 9.867 0 0 1-6.102 2.104c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 0 0 7.548 2.212c9.058 0 14.009-7.513 14.009-14.009 0-.213-.005-.425-.014-.636a10.025 10.025 0 0 0 2.457-2.548z"/></svg> },
  { href: "https://www.youtube.com/@ieeesiesgst", label: "YouTube", svg: <svg width="36" height="36" fill="currentColor" className="text-white hover:text-cyan-400" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.163 3.5 12 3.5 12 3.5s-7.163 0-9.386.574a2.994 2.994 0 0 0-2.112 2.112C0 8.409 0 12 0 12s0 3.591.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.837 20.5 12 20.5 12 20.5s7.163 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.591 24 12 24 12s0-3.591-.502-5.814zM9.545 15.568V8.432l6.545 3.568-6.545 3.568z"/></svg> },
  { href: "https://www.facebook.com/ieeesiesgst/", label: "Facebook", svg: <svg width="36" height="36" fill="currentColor" className="text-white hover:text-cyan-400" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.104c.73 0 1.325-.592 1.325-1.326V1.326C24 .592 23.408 0 22.675 0"/></svg> },
  { href: "https://www.instagram.com/ieeesiesgst/", label: "Instagram", svg: <svg width="36" height="36" fill="currentColor" className="text-white hover:text-cyan-400" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.975.974 1.246 2.242 1.308 3.608.058 1.266.069 1.646.069 4.85s-.011 3.584-.069 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.975-2.242 1.246-3.608 1.308-1.266.058-1.646.069-4.85.069s-3.584-.011-4.85-.069c-1.366-.062-2.633-.334-3.608-1.308-.975-.974-1.246-2.242-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.414 3.678 1.395c-.981.981-1.264 2.093-1.323 3.374C2.013 5.668 2 6.077 2 12c0 5.923.013 6.332.072 7.613.059 1.281.342 2.393 1.323 3.374.981.981 2.093 1.264 3.374 1.323C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.342 3.374-1.323.981-.981 1.264-2.093 1.323-3.374.059-1.281.072-1.69.072-7.613 0-5.923-.013-6.332-.072-7.613-.059-1.281-.342-2.393-1.323-3.374-.981-.981-2.093-1.264-3.374-1.323C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg> },
];

export default function Contact() {
  return (
    <section id="contact" className="parallax-section min-h-screen flex flex-col items-center justify-center">
      <h1 className="retro-text" data-text="Contact Us">Contact Us</h1>
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-10 justify-center items-start mt-10 px-4">
        {/* Left: Logo & Info */}
        <div className="flex-1 flex flex-col items-start gap-6 min-w-[260px]">
          <img src={siesLogo} alt="SIES GST IEEE Logo" className="h-24 w-auto mb-2 drop-shadow-lg" />
          <h2 className="text-2xl font-extrabold text-white mb-2 tracking-wide drop-shadow-lg">IEEE Student Chapter of SIES GST</h2>
          <p className="text-lg text-white/80 mb-2">IEEE is the oldest student body of SIES GST.</p>
          <nav className="flex flex-wrap gap-4 text-cyan-400 text-base font-semibold mb-2">
            <a href="#home" className="hover:text-pink-400">Home</a>
            <span>|</span> 
            <a  href="#events" className="hover:text-pink-400">Events</a>
            <span>|</span>
            <a href="#gallery" className="hover:text-pink-400">Gallery</a>
            <span>|</span>
            <a href="#aboutus" className="hover:text-pink-400">About Us</a>
            <span>|</span>
            <a href="#faqs" className="hover:text-pink-400">FAQs</a>
          </nav>
          <span className="text-cyan-400 text-sm mt-4">© SIES GST, NERUL</span>
        </div>

        {/* Middle: Contact Details */}
        <div className="flex-1 min-w-[260px] rounded-3xl bg-white/10 backdrop-blur-lg border border-cyan-400 shadow-lg p-8 flex flex-col gap-6">
          <div className="flex items-center gap-4">
            <span className="inline-block text-cyan-400">
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </span>
            <span className="text-white text-base">SIES Graduate School of Technology<br/>Sri Chandrasekarendra Saraswati Vidyapuram Sector-V, Nerul<br/>Navi Mumbai, Maharashtra - 400706</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-block text-cyan-400">
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8.99l8 7 8-7V18H4z"/></svg>
            </span>
            <a href="mailto:ieee@siesgst.ac.in" className="text-cyan-400 text-base hover:text-pink-400">ieee@siesgst.ac.in</a>
          </div>
          <div className="flex items-center gap-4">
            <span className="inline-block text-cyan-400">
              <svg width="32" height="32" fill="currentColor" viewBox="0 0 24 24"><path d="M17.707 10.293l-5-5a1 1 0 0 0-1.414 0l-5 5A1 1 0 0 0 7.707 11.707L12 7.414l4.293 4.293a1 1 0 0 0 1.414-1.414z"/><path d="M12 12a1 1 0 0 0-.707.293l-5 5A1 1 0 0 0 7.707 18.707L12 14.414l4.293 4.293a1 1 0 0 0 1.414-1.414l-5-5A1 1 0 0 0 12 12z"/></svg>
            </span>
            <a href="https://linktr.ee/ieeesiesgst" target="_blank" rel="noopener noreferrer" className="text-cyan-400 text-base hover:text-pink-400">https://linktr.ee/ieeesiesgst</a>
          </div>
        </div>

        {/* Right: About Us & Socials */}
        <div className="flex-1 min-w-[260px] rounded-3xl bg-white/10 backdrop-blur-lg border border-cyan-400 shadow-lg p-8 flex flex-col gap-6">
          <h2 className="text-2xl font-extrabold text-white mb-2 tracking-wide drop-shadow-lg">About Us</h2>
          <p className="text-white/80 text-base mb-4">
            It is an active body in organising all extra-curricular activities in the college. IEEE SIESGST, a dynamic and innovative student branch of the IEEE. With subchapters dedicated to MTTS, CS and WiE we offer a diverse platform for learning, collaboration, and personal growth.
          </p>
          <div className="flex gap-4 mt-2">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="hover:scale-110 transition-transform">
                {link.svg}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
