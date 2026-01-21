import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const EventCard = ({ event, index }) => {
  return (
    <motion.div
      className="card group cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      {/* Image */}
      <div className="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden">
        <img
          src={event.eventImage?.url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop'}
          alt={event.eventName}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <span className="absolute top-3 left-3 px-2 py-1 text-xs font-medium bg-black/50 rounded text-white">
          {event.eventType}
        </span>
      </div>

      {/* Content */}
      <h3 className="text-base font-semibold text-white mb-2 line-clamp-1">
        {event.eventName}
      </h3>

      <div className="flex items-center gap-1 text-xs text-[var(--color-text-muted)] mb-2">
        <MapPin className="w-3 h-3" />
        {event.eventState}
      </div>

      <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2 mb-3">
        {event.eventDescription}
      </p>

      <a
        href={event.eventLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)] hover:underline"
      >
        Details <ArrowRight className="w-3 h-3" />
      </a>
    </motion.div>
  );
};

const Events = () => {
  const events = [
    {
      _id: '1',
      eventName: 'TechoPedia',
      eventDescription: 'IEEE Flagship Event. Our annual technical festival featuring major competitions like Vendetta.',
      eventImage: { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop' },
      eventType: 'Flagship Event',
      eventState: 'Upcoming',
      eventLink: '#'
    },
    {
      _id: '2',
      eventName: 'Indian Sign Language Workshop',
      eventDescription: 'An incredible hands-on session on building a sign language recognizer using Machine Learning.',
      eventImage: { url: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=600&h=400&fit=crop' },
      eventType: 'Workshop',
      eventState: 'Completed',
      eventLink: '#'
    },
    {
      _id: '3',
      eventName: 'The Spectrum of Possibilities',
      eventDescription: 'Career in RF and Microwave session by Associate Professor from SSM Institute of Engineering.',
      eventImage: { url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop' },
      eventType: 'Seminar',
      eventState: 'Completed',
      eventLink: '#'
    },
    {
      _id: '4',
      eventName: 'Sustainable Engineering Design',
      eventDescription: 'Session by a Sustainability professional on corporate sustainability and design.',
      eventImage: { url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop' },
      eventType: 'Seminar',
      eventState: 'Completed',
      eventLink: '#'
    },
    {
      _id: '5',
      eventName: 'Vendetta Hackathon',
      eventDescription: '24-hour intense coding competition challenging developers to build innovative solutions.',
      eventImage: { url: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&h=400&fit=crop' },
      eventType: 'Hackathon',
      eventState: 'Completed',
      eventLink: '#'
    }
  ];

  return (
    <section id="events" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Events</h2>
          <p className="section-subtitle">
            Technical workshops, hackathons, and industry sessions organized by IEEE SIES GST.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {events.map((event, index) => (
            <EventCard key={event._id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;