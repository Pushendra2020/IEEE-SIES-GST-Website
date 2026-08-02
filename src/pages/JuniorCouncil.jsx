import React from "react";
import { NavLink } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "../assets/siesLogo.webp";
import TeamSection from "../components/team";

const juniorMembers = [
  {
    _id: "1",
    name: "Junior Member Name",
    team: "Junior Council",
    photo: {
      url: "https://ui-avatars.com/api/?name=Junior+Member",
    },
  },
  {
    _id: "2",
    name: "Junior Member Name 2",
    team: "Junior Council",
    photo: {
      url: "https://ui-avatars.com/api/?name=Junior+Member+2",
    },
  },
];

export default function JuniorCouncil() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <div className="grid-bg" />

      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-bg-primary)]/80 backdrop-blur-xl border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <NavLink to="/" className="flex items-center gap-3 group">
            <ArrowLeft className="w-5 h-5 text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent)] transition-colors" />

            <img 
              src={logo} 
              alt="IEEE SIES GST" 
              className="w-10 h-10" 
            />

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
              Junior Council
            </h1>

            <p className="section-subtitle">
              The Junior Council of IEEE SIES GST.
            </p>
          </div>


          <TeamSection members={juniorMembers} />


        </div>
      </main>
    </div>
  );
}