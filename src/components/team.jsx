import React, { Suspense } from "react";
import { useLoaderData } from "react-router-dom";

// Real Team Data found from SIES GST Official Records (2024-25)
// Source: siesgst.edu.in
export function teamLoader() {
  return [
    {
      _id: '1',
      name: 'Dr. Smitha S Kumar',
      team: 'Branch Counselor',
      photo: { url: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop' }
    },
    {
      _id: '2',
      name: 'Aditi Kurhekar',
      team: 'Chairperson',
      photo: { url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&h=500&fit=crop' }
    },
    {
      _id: '3',
      name: 'Ved Chaudhari',
      team: 'Vice Chairperson',
      photo: { url: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop' }
    },
    {
      _id: '4',
      name: 'Ayush Dumbre',
      team: 'Secretary',
      photo: { url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=500&fit=crop' }
    },
    {
      _id: '5',
      name: 'Aditya Rangari',
      team: 'Treasurer',
      photo: { url: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=500&fit=crop' }
    },
    {
      _id: '6',
      name: 'Kailash Sharma',
      team: 'Technical Head',
      photo: { url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop' }
    }
  ];
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
    <div className="group card overflow-hidden p-3 transform transition-all duration-500 ease-out hover:scale-[1.02]">
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse"></div>
        )}
        <img
          className={`w-full h-full object-cover transition-all duration-700 ease-out 
            ${imageLoaded ? 'opacity-100 grayscale group-hover:grayscale-0' : 'opacity-0'}`}
          src={member.photo.url}
          alt={member.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
        />
      </div>

      <div className="pt-4 text-center">
        <h3 className="text-xl font-semibold text-white tracking-wide mb-1">
          {member.name}
        </h3>
        <span className="text-sm text-[var(--color-accent)] font-medium uppercase tracking-wider">
          {member.team}
        </span>
      </div>
    </div>
  );
});

const TeamGrid = React.memo(({ members }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {members.map((member) => (
      <TeamMemberCard key={member._id} member={member} />
    ))}
  </div>
));

function TeamSection() {
  const members = useLoaderData();

  return (
    <section className="py-8">
      <Suspense fallback={
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => <LoadingCard key={i} />)}
        </div>
      }>
        <TeamGrid members={members} />
      </Suspense>
    </section>
  );
}

export default TeamSection;
