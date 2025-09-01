
// import React from "react";
// import { useLoaderData } from "react-router-dom";
// import axios from "axios";

// const TEAM_ORDER = [
//   "Branch Counsellor",
//   "Wie Incharge",
//   "Chairperson",
//   "Vice Chairperson",
//   "CS Head",
//   "MTT-S",
// ];


// export async function teamLoader() {
//   const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/person/getPerson`);
//   let data = res.data?.data || [];
//   // Sort by team order
//   data.sort((a, b) => {
//     const aIdx = TEAM_ORDER.indexOf(a.team);
//     const bIdx = TEAM_ORDER.indexOf(b.team);
//     return (
//       (aIdx === -1 ? TEAM_ORDER.length : aIdx) -
//       (bIdx === -1 ? TEAM_ORDER.length : bIdx)
//     );
//   });
//   return data;
// }

// export default function TeamSection() {
//   const members = useLoaderData();
//   if (!members || !members.length)
//     return (
//       <p className="text-gray-500 text-center mt-10">No team data found.</p>
//     );

//   return (
//     <section className="bg-gray-500 py-16 md:py-32 bg-transparent">
//       <div className="mx-auto max-w-5xl  px-6">
//         <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
//           {members.map((member, index) => (
//             <div key={index} className="group overflow-hidden">
//               <img
//                 className="h-[90vw] md:h-96 lg:h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 md:group-hover:h-[19.5rem] group-hover:rounded-xl"
//                 src={member.photo.url}
//                 alt="team member"
//                 width="826"
//                 height="1239"
//               />
//               <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
//                 <div className="flex justify-between">
//                   <h3 className="text-base font-medium transition-all duration-500 group-hover:tracking-wider">
//                     {member.name}
//                   </h3>
//                   {/* <span className="text-xs">_0{index + 1}</span> */}
//                 </div>
//                 <div className="mt-1 flex items-center justify-between">
//                   <span className=" inline-block translate-y-6 text-sm opacity-0 transition duration-300 font-bold text-white group-hover:translate-y-0 group-hover:opacity-100">
//                     {member.team}
//                   </span>
//                   {/* <Link
//                       href={member.link}
//                       className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100">
//                       {' '}
//                       Linktree
//                   </Link> */}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }














import React, { Suspense } from "react";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

const TEAM_ORDER = [
  "Branch Counsellor",
  "Wie Incharge",
  "Chairperson",
  "Vice Chairperson",
  "CS Head",
  "MTT-S",
];

export async function teamLoader() {
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/person/getPerson`);
  let data = res.data?.data || [];
  data.sort((a, b) => {
    const aIdx = TEAM_ORDER.indexOf(a.team);
    const bIdx = TEAM_ORDER.indexOf(b.team);
    return (
      (aIdx === -1 ? TEAM_ORDER.length : aIdx) -
      (bIdx === -1 ? TEAM_ORDER.length : bIdx)
    );
  });
  return data;
}

const LoadingCard = () => (
  <div className="animate-pulse bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-2 sm:p-4">
    <div className="w-full h-40 sm:h-60 md:h-80 lg:h-96 bg-gray-300/20 rounded-md"></div>
    <div className="w-full px-2 pt-4">
      <div className="h-4 bg-gray-300/20 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-300/20 rounded w-1/2"></div>
    </div>
  </div>
);

const TeamMemberCard = React.memo(({ member }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  return (
    <div className="group overflow-hidden bg-white/10 backdrop-blur-lg rounded-xl shadow-lg p-2 sm:p-4 transform transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
      <div className="relative w-full h-72 sm:h-80 md:h-96 lg:h-[28rem] overflow-hidden rounded-md">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-300/20 rounded-md animate-pulse"></div>
        )}
        <img
          className={`w-full h-full rounded-md object-cover object-center transition-all duration-700 ease-out transform group-hover:scale-110 ${
            imageLoaded ? 'opacity-100 grayscale hover:grayscale-0' : 'opacity-0'
          }`}
          src={`${member.photo.url.replace('/upload/', '/upload/f_auto,q_auto/')}`}
          alt={member.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-300/20 rounded-md">
            <span className="text-white/60">Failed to load image</span>
          </div>
        )}
      </div>
      
      <div className="w-full px-2 pt-4 space-y-2">
        <h3 className="text-base sm:text-lg md:text-xl font-medium text-white tracking-wide group-hover:tracking-wider transition-all duration-300">
          {member.name}
        </h3>
        <div className="overflow-hidden h-6">
          <span className="inline-block text-sm sm:text-base text-cyan-400 font-bold transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
            {member.team}
          </span>
        </div>
      </div>
    </div>
  );
});

const TeamGrid = React.memo(({ members }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
    {members.map((member) => (
      <TeamMemberCard key={member._id} member={member} />
    ))}
  </div>
));

function TeamSection() {
  const members = useLoaderData();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    if (members) {
      setIsLoading(false);
    }
  }, [members]);

  if (!members || !members.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">No team data found.</p>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-transparent py-8 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
       
        
        <Suspense fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
            {[...Array(6)].map((_, i) => <LoadingCard key={i} />)}
          </div>
        }>
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
              {[...Array(6)].map((_, i) => <LoadingCard key={i} />)}
            </div>
          ) : (
            <TeamGrid members={members} />
          )}
        </Suspense>
      </div>
    </section>
  );
}

export default TeamSection;
