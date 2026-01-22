import React from "react";
import { Mail, MapPin, Instagram, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <footer id="contact" className="section bg-[var(--color-bg-secondary)] relative overflow-hidden pt-16 sm:pt-24 md:pt-32 pb-6 sm:pb-8 md:pb-10">

      {/* Footer Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mb-12 sm:mb-16 md:mb-20">

          {/* Brand Column */}
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white mb-4 sm:mb-6 md:mb-8 tracking-tight">
              Let's <br />
              <span className="text-[var(--color-accent-light)]">Connect.</span>
            </h2>
            <p className="text-[var(--color-text-secondary)] text-base sm:text-lg max-w-md mb-6 sm:mb-8">
              Have a question or want to collaborate? <br className="hidden sm:block" />
              Reach out to the IEEE SIES GST team.
            </p>

            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Github, href: "#" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/5 hover:border-white/20 transition-all"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h4 className="font-tech text-[var(--color-accent-light)] uppercase tracking-widest text-xs sm:text-sm mb-4 sm:mb-6">Explore</h4>
              <ul className="space-y-3 sm:space-y-4">
                {['Home', 'About', 'Events', 'Gallery', 'Team'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-[var(--color-text-secondary)] hover:text-white transition-colors text-sm sm:text-base md:text-lg">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-tech text-[var(--color-accent-light)] uppercase tracking-widest text-xs sm:text-sm mb-4 sm:mb-6">Contact</h4>
              <ul className="space-y-4 sm:space-y-6">
                <li className="flex items-start gap-2 sm:gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-text-muted)] mt-1 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)] text-sm sm:text-base break-all">ieee@siesgst.ac.in</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[var(--color-text-muted)] mt-1 flex-shrink-0" />
                  <span className="text-[var(--color-text-secondary)] text-sm sm:text-base">
                    SIES Graduate School of Technology,<br />
                    Nerul, Navi Mumbai - 400706
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-4 sm:pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-[var(--color-text-muted)]">
          <p>© 2024 IEEE SIES GST. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Background Graphic */}
      <div className="absolute opacity-50 -bottom-20 -right-20 w-[600px] h-[600px] bg-[var(--color-accent-deep)] rounded-full blur-[150px] pointer-events-none" />
    </footer>
  );
}
