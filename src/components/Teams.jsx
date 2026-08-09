import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useLoaderData } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "../assets/siesLogo.webp";
import TeamSection from "./team";

export default function Teams() {
  const members = useLoaderData();
  const [selectedCouncil, setSelectedCouncil] = useState("Senior Council");

  const filteredMembers = (members || []).filter(
    (member) => member.council === selectedCouncil
  );

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <div className="grid-bg" />

      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-primary)]/80 backdrop-blur-xl border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-3 group">
            <ArrowLeft className="w-5 h-5 text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-colors" />
            <img src={logo} alt="IEEE SIES GST" className="w-10 h-10" />
            <span className="text-white font-medium hidden sm:block">
              IEEE SIES GST
            </span>
          </NavLink>
        </div>
      </header>

      <main className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="section-title">Our Team</h1>
            <p className="section-subtitle">
              The people behind IEEE SIES GST.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center gap-4 mb-10"
          >
            {["Senior Council", "Junior Council"].map((council) => (
              <button
                key={council}
                onClick={() => setSelectedCouncil(council)}
                className={`relative px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  selectedCouncil === council
                    ? "bg-[var(--color-accent)] text-white shadow-lg shadow-[var(--color-accent)]/30"
                    : "bg-white/10 text-white/80 hover:bg-white/15"
                }`}
              >
                {council}
              </button>
            ))}
          </motion.div>

          {/* Animated Team Section */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCouncil}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <TeamSection members={filteredMembers} />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}