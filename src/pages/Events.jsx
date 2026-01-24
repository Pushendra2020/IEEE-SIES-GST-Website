import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

const EventCard = ({ event, index, isCarousel = false }) => {
  return (
    <motion.div
      className={`card group cursor-pointer overflow-hidden ${isCarousel ? 'min-w-[280px] sm:min-w-[320px] flex-shrink-0' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: isCarousel ? 0 : index * 0.1 }}
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
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    dragFree: true
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

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
    <section id="events" className="section relative">
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="section-title">Events</h2>
          <p className="section-subtitle">
            Technical workshops, hackathons, and industry sessions organized by IEEE SIES GST.
          </p>
        </motion.div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {events.map((event, index) => (
            <EventCard key={event._id} event={event} index={index} />
          ))}
        </div>

        {/* Mobile Carousel - Visible on mobile only */}
        <div className="sm:hidden relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 pb-4">
              {events.map((event) => (
                <EventCard key={event._id} event={event} index={0} isCarousel={true} />
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <p className="text-center text-xs text-[var(--color-text-muted)] mt-2">
            Swipe to explore more events
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;