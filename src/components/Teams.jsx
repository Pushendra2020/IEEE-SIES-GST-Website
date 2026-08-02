import React, { useState } from "react";
import { NavLink, useLoaderData } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "../assets/siesLogo.webp";
import TeamSection from "./team";

export default function Teams() {
  const members = useLoaderData();

  const [selectedCouncil, setSelectedCouncil] = useState("Senior Council");

  const filteredMembers = members.filter(
    (member) => member.council === selectedCouncil
  );

  return (
    <div className="min-min-h-screen bg-[var(--color-bg-primary)]">
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

          <div className="text-center mb-8">
            <h1 className="section-title">
              Our Team
            </h1>

            <p className="section-subtitle">
              The people behind IEEE SIES GST.
            </p>
          </div>


          <div className="flex justify-center gap-4 mb-10">

            <button
              onClick={() => setSelectedCouncil("Senior Council")}
              className={`px-6 py-2 rounded-lg transition ${
                selectedCouncil === "Senior Council"
                  ? "bg-[var(--color-accent)] text-white"
                  : "bg-white/10 text-white"
              }`}
            >
              Senior Council
            </button>


            <button
              onClick={() => setSelectedCouncil("Junior Council")}
              className={`px-6 py-2 rounded-lg transition ${
                selectedCouncil === "Junior Council"
                  ? "bg-[var(--color-accent)] text-white"
                  : "bg-white/10 text-white"
              }`}
            >
              Junior Council
            </button>

          </div>


          <TeamSection members={filteredMembers} />


        </div>
      </main>
    </div>
  );
}