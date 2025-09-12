// import React from "react";

// export default function Events() {
//   return (
//     <section id="events" className="parallax-section">
//       <h2 className="section-title" style={{ color: "#00c3ff" }}>Events</h2>
//       <p className="section-text">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget urna a arcu lacinia sagittis. Curabitur a erat euismod, dictum quam nec, cursus velit.
//       </p>
//     </section>
//   );
// }



// import React, { useState, useEffect, useRef } from 'react';
// import { motion, useAnimation } from 'framer-motion';
// import { ExternalLink, Calendar, MapPin } from 'lucide-react';
// import axios from 'axios';

// const EventsCarousel = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [hoveredIndex, setHoveredIndex] = useState(null);
//   const controls = useAnimation();
//   const carouselRef = useRef(null);

//   // Fetch events from your API
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         // Replace with your actual API endpoint
//         const response = await axios.get('http://localhost:5000/api/v1/event/getEvent');
//         setEvents(response.data.data || []);
//       } catch (err) {
//         // Fallback demo data for development
//         setEvents([
//           {
//             _id: '1',
//             eventName: 'Tech Conference 2024',
//             eventDescription: 'Join us for the most innovative tech conference of the year featuring cutting-edge technologies and industry leaders.',
//             eventImage: { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop' },
//             eventType: 'Conference',
//             eventState: 'Mumbai',
//             eventLink: 'https://example.com'
//           },
//           {
//             _id: '2',
//             eventName: 'Digital Marketing Summit',
//             eventDescription: 'Discover the latest trends in digital marketing and network with industry professionals.',
//             eventImage: { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop' },
//             eventType: 'Summit',
//             eventState: 'Delhi',
//             eventLink: 'https://example.com'
//           },
//           {
//             _id: '3',
//             eventName: 'Startup Pitch Night',
//             eventDescription: 'Watch promising startups pitch their innovative ideas to investors and industry experts.',
//             eventImage: { url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop' },
//             eventType: 'Pitch',
//             eventState: 'Bangalore',
//             eventLink: 'https://example.com'
//           },
//           {
//             _id: '4',
//             eventName: 'AI & Machine Learning Workshop',
//             eventDescription: 'Hands-on workshop covering the fundamentals of AI and machine learning for beginners.',
//             eventImage: { url: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500&h=300&fit=crop' },
//             eventType: 'Workshop',
//             eventState: 'Hyderabad',
//             eventLink: 'https://example.com'
//           },
//           {
//             _id: '5',
//             eventName: 'Web Development Bootcamp',
//             eventDescription: 'Intensive bootcamp covering modern web development technologies and best practices.',
//             eventImage: { url: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&h=300&fit=crop' },
//             eventType: 'Bootcamp',
//             eventState: 'Pune',
//             eventLink: 'https://example.com'
//           },
//           {
//             _id: '6',
//             eventName: 'Design Thinking Workshop',
//             eventDescription: 'Learn the principles of design thinking and apply them to real-world problem solving.',
//             eventImage: { url: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=500&h=300&fit=crop' },
//             eventType: 'Workshop',
//             eventState: 'Chennai',
//             eventLink: 'https://example.com'
//           }
//         ]);
//         console.log("The Error is : ",err)
//         setError(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   // Duplicate events for seamless loop
//   const duplicatedEvents = [...events, ...events];

//   // Animation controls
//   useEffect(() => {
//     if (events.length > 0 && hoveredIndex === null) {
//       controls.start({
//         x: `-${events.length * 320}px`,
//         transition: {
//           duration: events.length * 8,
//           ease: "linear",
//           repeat: Infinity,
//         }
//       });
//     } else if (hoveredIndex !== null) {
//       controls.stop();
//     }
//   }, [events.length, hoveredIndex, controls]);

//   const handleMouseEnter = (index) => {
//     setHoveredIndex(index);
//     controls.stop();
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900">
//         <div className="text-white text-xl">Error loading events: {error}</div>
//       </div>
//     );
//   }

//   return (
//     <div id="events"  className="parallax-section min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
//       <div className="py-16">
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
//             Upcoming Events
//           </h1>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             Discover amazing events happening around you
//           </p>
//         </div>

//         <div className="relative h-96 overflow-hidden">
//           <motion.div
//             ref={carouselRef}
//             className="flex gap-6"
//             animate={controls}
//             style={{ width: `${duplicatedEvents.length * 320}px` }}
//           >
//             {duplicatedEvents.map((event, index) => (
//               <motion.div
//                 key={`${event._id}-${Math.floor(index / events.length)}`}
//                 className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
//                 onMouseEnter={() => handleMouseEnter(index)}
//                 onMouseLeave={handleMouseLeave}
//                 whileHover={{ scale: 1.05, zIndex: 10 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {/* Event Image */}
//                 <div className="absolute inset-0">
//                   <img
//                     src={event.eventImage?.url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop'}
//                     alt={event.eventName}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     onError={(e) => {
//                       e.target.src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop';
//                     }}
//                   />
//                 </div>

//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

//                 {/* Event Type Badge */}
//                 <div className="absolute top-4 left-4 z-10">
//                   <span className="px-3 py-1 bg-purple-600/80 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-purple-400/30">
//                     {event.eventType}
//                   </span>
//                 </div>

//                 {/* Event Content */}
//                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
//                   <h3 className="text-xl font-bold mb-2 line-clamp-2">
//                     {event.eventName}
//                   </h3>

//                   {/* Location */}
//                   <div className="flex items-center gap-2 mb-2 opacity-80">
//                     <MapPin size={16} />
//                     <span className="text-sm">{event.eventState}</span>
//                   </div>

//                   {/* Description - appears on hover */}
//                   <motion.div
//                     initial={{ opacity: 0, height: 0 }}
//                     animate={{ 
//                       opacity: hoveredIndex === index ? 1 : 0,
//                       height: hoveredIndex === index ? 'auto' : 0
//                     }}
//                     transition={{ duration: 0.3 }}
//                     className="overflow-hidden"
//                   >
//                     <p className="text-sm text-gray-200 mb-4 line-clamp-3">
//                       {event.eventDescription}
//                     </p>

//                     {/* Action Button */}
//                     <motion.a
//                       href={event.eventLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
//                       whileHover={{ scale: 1.05 }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <span>Learn More</span>
//                       <ExternalLink size={16} />
//                     </motion.a>
//                   </motion.div>
//                 </div>

//                 {/* Hover Border Effect */}
//                 <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400/50 rounded-2xl transition-colors duration-300"></div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         {/* Instructions */}
//         <div className="text-center mt-12">
//           <p className="text-gray-400 text-lg">
//             Hover over any event to pause and see details
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventsCarousel;



// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { ExternalLink, MapPin } from 'lucide-react';

// const EventsCarousel = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   // Fetch events from your API
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         // Replace with your actual API endpoint
//         const response = await fetch('http://localhost:5000/api/v1/event/getEvent');
//         const data = await response.json();
//         setEvents(data.data || []);
//       } catch (err) {
//         // Fallback demo data for development
//         setEvents([
//           {
//             _id: '1',
//             eventName: 'Tech Conference 2024',
//             eventDescription: 'Join us for the most innovative tech conference of the year featuring cutting-edge technologies and industry leaders.',
//             eventImage: { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop' },
//             eventType: 'Conference',
//             eventState: 'Mumbai',
//             eventLink: 'https://example.com'
//           },
//           {
//             _id: '2',
//             eventName: 'Digital Marketing Summit',
//             eventDescription: 'Discover the latest trends in digital marketing and network with industry professionals.',
//             eventImage: { url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop' },
//             eventType: 'Summit',
//             eventState: 'Delhi',
//             eventLink: 'https://example.com'
//           },
//           {
//             _id: '3',
//             eventName: 'Startup Pitch Night',
//             eventDescription: 'Watch promising startups pitch their innovative ideas to investors and industry experts.',
//             eventImage: { url: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=500&h=300&fit=crop' },
//             eventType: 'Pitch',
//             eventState: 'Bangalore',
//             eventLink: 'https://example.com'
//           },
//           {
//             _id: '4',
//             eventName: 'AI & Machine Learning Workshop',
//             eventDescription: 'Hands-on workshop covering the fundamentals of AI and machine learning for beginners.',
//             eventImage: { url: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500&h=300&fit=crop' },
//             eventType: 'Workshop',
//             eventState: 'Hyderabad',
//             eventLink: 'https://example.com'
//           },
//           {
//             _id: '5',
//             eventName: 'Web Development Bootcamp',
//             eventDescription: 'Intensive bootcamp covering modern web development technologies and best practices.',
//             eventImage: { url: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=500&h=300&fit=crop' },
//             eventType: 'Bootcamp',
//             eventState: 'Pune',
//             eventLink: 'https://example.com'
//           },
//           {
//             _id: '6',
//             eventName: 'Design Thinking Workshop',
//             eventDescription: 'Learn the principles of design thinking and apply them to real-world problem solving.',
//             eventImage: { url: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=500&h=300&fit=crop' },
//             eventType: 'Workshop',
//             eventState: 'Chennai',
//             eventLink: 'https://example.com'
//           }
//         ]);
//         setError(null);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   const handleMouseEnter = (index) => {
//     setHoveredIndex(index);
//   };

//   const handleMouseLeave = () => {
//     setHoveredIndex(null);
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
//         <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900">
//         <div className="text-white text-xl">Error loading events: {error}</div>
//       </div>
//     );
//   }

//   // Create enough duplicates for seamless infinite scroll
//   const duplicatedEvents = [...events, ...events];

//   return (
//     <div className="min-h-screen bg-gradient-to-br overflow-hidden">
//       <style>{`
//         @keyframes scroll-rtl {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-${events.length * 32}rem);
//           }
//         }

//         .carousel-track {
//           animation: scroll-rtl ${events.length * 10}s linear infinite;
//           animation-play-state: ${hoveredIndex !== null ? 'paused' : 'running'};
//         }
//       `}</style>

//       <div className="py-16">
//         <div className="text-center mb-12">
//           <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
//             Events
//           </h1>
//         </div>

//         <div className="relative h-96 overflow-hidden">
//           <div 
//             className="flex gap-6 carousel-track"
//             style={{ width: `${duplicatedEvents.length * 320}px` }}
//           >
//             {duplicatedEvents.map((event, index) => (
//               <motion.div
//                 key={`${event._id}-${Math.floor(index / events.length)}`}
//                 className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl cursor-pointer group flex-shrink-0"
//                 onMouseEnter={() => handleMouseEnter(index)}
//                 onMouseLeave={handleMouseLeave}
//                 whileHover={{ scale: 1.05, zIndex: 10 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 {/* Event Image */}
//                 <div className="absolute inset-0">
//                   <img
//                     src={event.eventImage?.url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop'}
//                     alt={event.eventName}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     onError={(e) => {
//                       e.target.src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop';
//                     }}
//                   />
//                 </div>

//                 {/* Gradient Overlay */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-95 transition-opacity duration-300"></div>

//                 {/* Event Type Badge */}
//                 <motion.div 
//                   className="absolute top-4 left-4 z-10"
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: index * 0.1 }}
//                 >
//                   <span className="px-3 py-1 bg-purple-600/90 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-purple-400/50 shadow-lg">
//                     {event.eventType}
//                   </span>
//                 </motion.div>

//                 {/* Always visible content */}
//                 <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
//                   <h3 className="text-xl font-bold mb-2 line-clamp-2 group-hover:mb-3 transition-all duration-300">
//                     {event.eventName}
//                   </h3>

//                   {/* Location */}
//                   <div className="flex items-center gap-2 mb-3 opacity-90">
//                     <MapPin size={16} className="text-purple-300" />
//                     <span className="text-sm">{event.eventState}</span>
//                   </div>

//                   {/* Description - slides up on hover */}
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ 
//                       opacity: hoveredIndex === index ? 1 : 0,
//                       y: hoveredIndex === index ? 0 : 20,
//                     }}
//                     transition={{ duration: 0.4, ease: "easeOut" }}
//                     className="overflow-hidden"
//                   >
//                     <p className="text-sm text-gray-200 mb-4 leading-relaxed">
//                       {event.eventDescription}
//                     </p>

//                     {/* Action Button */}
//                     <motion.a
//                       href={event.eventLink}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg border border-purple-400/30"
//                       whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(147, 51, 234, 0.3)" }}
//                       whileTap={{ scale: 0.95 }}
//                     >
//                       <span>Learn More</span>
//                       <ExternalLink size={16} />
//                     </motion.a>
//                   </motion.div>
//                 </div>

//                 {/* Hover Border Effect */}
//                 <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-400/60 rounded-2xl transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-purple-500/20"></div>

//                 {/* Subtle glow effect on hover */}
//                 <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[0_0_30px_rgba(147,51,234,0.4)]"></div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Instructions */}
//         <div className="text-center mt-12">
//           <motion.p 
//             className="text-gray-400 text-lg"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.5 }}
//           >
//             Hover over any event to pause and see details
//           </motion.p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EventsCarousel;













import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, MapPin } from 'lucide-react';
import EventCard from '../components/EventCard.jsx';
import axios from 'axios';
const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/event/getEvent`);
        setEvents(response.data.data || []);
      } catch (err) {
        setError('Failed to fetch events.');
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="relative">
          <div className="animate-spin rounded-full h-24 w-24 border-t-4 border-b-4 border-pink-400"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-lg font-semibold animate-pulse">Loading Events...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-900 via-purple-900 to-indigo-900">
        <div className="text-white text-xl">Error loading events: {error}</div>
      </div>
    );
  }

  if (!events.length) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="text-white text-xl">No events found.</div>
      </div>
    );
  }

  return (
    <div id="events" className="min-h-screen parallax-section py-16">
      <div className="text-center mb-12">
        <h1 className="section-title" style={{ color: "#ff00a6" }}>
          Events
        </h1>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 px-2 sm:px-4 lg:px-8 justify-items-center">
        {events.map((event) => (
          <div key={event._id} className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl flex justify-center">
            <EventCard
              key={event._id}
              image={`${event.eventImage.url.replace('/upload/', '/upload/f_auto,q_auto/')}`}
              title={event.eventName}
              description={event.eventDescription}
              state={event.eventState}
              link={event.eventLink}
              eventType={event.eventType}
            />
          </div>
        ))}
      </div>
    </div>
  );
}


export default Events;