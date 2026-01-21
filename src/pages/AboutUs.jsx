import React from "react";
import { motion } from "framer-motion";
import mtts from "../assets/mtts.webp";
import cs from "../assets/cs.webp";
import wie from "../assets/wie.webp";



export default function AboutUs() {
  return (
    <section id="aboutus" className="section relative overflow-hidden min-h-screen flex items-center">
      {/* Giant Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-white/[0.02] pointer-events-none font-display select-none">
        IEEE
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-[var(--color-accent-light)]"></span>
              <span className="text-[var(--color-accent-light)] uppercase tracking-widest text-sm font-tech">Who We Are</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
              Advancing Technology <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">for Humanity.</span>
            </h2>

            <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-8 max-w-lg">
              IEEE SIES GST is more than just a student chapter; we are a community of innovators, thinkers, and makers.
              Since 2015, we've been bridging the gap between academic learning and industry excellence.
            </p>

            {/* Stats Grid - Minimalist */}
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-4xl font-display font-bold text-white mb-1">150+</div>
                <div className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider">Active Members</div>
              </div>
              <div>
                <div className="text-4xl font-display font-bold text-white mb-1">20+</div>
                <div className="text-sm text-[var(--color-text-muted)] uppercase tracking-wider">Annual Events</div>
              </div>
            </div>

            <a href="#contact" className="btn btn-secondary border-white/20 hover:bg-white/10 rounded-full px-8">
              Join Our Community
            </a>
          </motion.div>

          {/* Asymmetric Floating Cards */}
          <div className="relative h-[600px] hidden lg:block">
            {/* Card 1: CS */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 right-10 w-64 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/10 transition-colors cursor-pointer card"
            >
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 text-blue-400">
                <img src={cs} alt="CS" className="w-8 h-8 opacity-80" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Computer Society</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">Driving innovation in computing and software development.</p>
            </motion.div>

            {/* Card 2: MTTS - Center Offset */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute top-1/3 left-0 w-72 p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl hover:-translate-y-2 transition-transform cursor-pointer z-10 card"
            >
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-4 text-purple-400">
                <img src={mtts} alt="MTTS" className="w-8 h-8 opacity-80" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">MTT-S</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">Exploring the spectrum of RF and Microwave engineering.</p>
            </motion.div>

            {/* Card 3: WIE - Bottom Right */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute bottom-10 right-20 w-60 p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl hover:bg-white/10 transition-colors cursor-pointer card"
            >
              <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center mb-4 text-pink-400">
                <img src={wie} alt="WIE" className="w-8 h-8 opacity-80" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">WIE</h3>
              <p className="text-sm text-[var(--color-text-secondary)]">Empowering women in technology and engineering.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
