import React, { useState, useEffect } from "react";
import axios from "axios";
import ProfileCard from "./Components/ProfileCard/ProfileCard";
import TeamSection from "./team";
import { NavLink } from "react-router-dom";
import logo from "../assets/siesLogo.png"
export default function Teams() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/v1/person/getPerson`)
      .then((res) => {
        setMembers(res.data?.data || []);
        setError(null);
      })
      .catch(() => setError("Failed to fetch team members."))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <p className="text-green-500 text-center mt-10">Loading team data...</p>
    );
  if (error)
    return <p className="text-red-500 text-center mt-10">{error}</p>;
  if (!members.length)
    return (
      <p className="text-gray-500 text-center mt-10">No team data found.</p>
    );

  return (
    <section className="min-h-screen flex flex-col  bg-black/80 text-white py-10">
       <NavLink to='/' >
          <img src={logo} alt="Logo" className=" ml-7 mt-7 h-20 w-20" />
        </NavLink>
      <h1 className="text-4xl font-bold  text-center font-['Press_Start_2P'] text-pink-500">
        Our Team
      </h1>
      {/* <div className="grid gap-24 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 w-full max-w-6xl px-4">
        {members.map((member, idx) => (
          <ProfileCard
            key={member._id || idx}
            name={member.name}
            title={member.team}
            handle={member.handle || member.name}
            status={member.status || "Online"}
            contactText={member.contactText || "Contact Me"}
            avatarUrl={member.photo?.url || "/assets/download1.png"}
            showUserInfo={false}
            enableTilt={true}
            enableMobileTilt={false}
            className={member.role === 'teacher' ? "text-[2rem] text-start" : ""}
          />
        ))}
      </div> */}
      <TeamSection/>
    </section>
  );
}

