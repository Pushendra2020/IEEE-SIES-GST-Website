import React, { useState, useEffect } from "react";
import axios from "axios";

const TEAM_ORDER = [
  "Branch Counsellor",
  "Wie Incharge",
  "Chairperson",
  "Vice Chairperson",
  "CS Head",
  "MTT-S",
];

export default function TeamSection() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/v1/person/getPerson`)
      .then((res) => {
        let data = res.data?.data || [];
        // Sort by team order
        data.sort((a, b) => {
          const aIdx = TEAM_ORDER.indexOf(a.team);
          const bIdx = TEAM_ORDER.indexOf(b.team);
          return (
            (aIdx === -1 ? TEAM_ORDER.length : aIdx) -
            (bIdx === -1 ? TEAM_ORDER.length : bIdx)
          );
        });
        setMembers(data);
        setError(null);
      })
      .catch(() => setError("Failed to fetch team members."))
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return (
      <p className="text-gray-500 text-center mt-10">Loading team data...</p>
    );
  if (error)
    return <p className="text-red-500 text-center mt-10">{error}</p>;
  if (!members.length)
    return (
      <p className="text-gray-500 text-center mt-10">No team data found.</p>
    );

  return (
    <section className="bg-gray-500 py-16 md:py-32 bg-transparent">
      <div className="mx-auto max-w-5xl  px-6">
        <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, index) => (
            <div key={index} className="group overflow-hidden">
              <img
                className="h-[90vw] md:h-96 lg:h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 md:group-hover:h-[19.5rem] group-hover:rounded-xl"
                src={member.photo.url}
                alt="team member"
                width="826"
                height="1239"
              />
              <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                <div className="flex justify-between">
                  <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                    {member.name}
                  </h3>
                  {/* <span className="text-xs">_0{index + 1}</span> */}
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <span className=" inline-block translate-y-6 text-sm opacity-0 transition duration-300 font-bold text-white group-hover:translate-y-0 group-hover:opacity-100">
                    {member.team}
                  </span>
                  {/* <Link
                      href={member.link}
                      className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
                      {' '}
                      Linktree
                  </Link> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}