import React, { useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, ChevronLeft, ChevronRight, Calendar, Sparkles } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import ragThumbnail from "../assets/rag_thumbnail.png";
import signLanguage from "../assets/sign_language.jpeg";
import epsilon from "../assets/epsilon.jpeg";

const EventCard = ({ event, index, isCarousel = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const characterLimit = 95;
  const isLong = event.eventDescription && event.eventDescription.length > characterLimit;

  return (
    <motion.div
      className={`card group overflow-hidden flex flex-col justify-between transition-all duration-300 ${
        isCarousel ? 'min-w-[280px] sm:min-w-[320px] flex-shrink-0' : 'h-full'
      }`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: isCarousel ? 0 : index * 0.08 }}
    >
      <div>
        {/* Image Banner */}
        <div className="relative h-44 -mx-6 -mt-6 mb-4 overflow-hidden">
          <img
            src={event.eventImage?.url || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop'}
            alt={event.eventName}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
          
          {/* Badges */}
          <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold bg-black/60 backdrop-blur-md rounded-md text-white border border-white/10">
            {event.eventType}
          </span>
          <span className={`absolute top-3 right-3 px-2.5 py-1 text-xs font-semibold rounded-md uppercase tracking-wider backdrop-blur-md border ${
            event.eventState.toLowerCase() === 'upcoming'
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
              : 'bg-white/10 text-gray-300 border-white/10'
          }`}>
            {event.eventState}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-bold text-white mb-2 leading-snug">
          {event.eventName}
        </h3>

        {/* Location / Note */}
        <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] mb-3">
          <MapPin className="w-3.5 h-3.5 text-[var(--color-accent-light)] flex-shrink-0" />
          <span>{event.eventState.toLowerCase() === 'upcoming' ? 'SIES GST • Upcoming Session' : 'SIES GST, Navi Mumbai'}</span>
        </div>

        {/* Description with See more / See less */}
        <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
          {isExpanded || !isLong
            ? event.eventDescription
            : `${event.eventDescription.slice(0, characterLimit)}... `}
          {isLong && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setIsExpanded(!isExpanded);
              }}
              className="text-[var(--color-accent-light)] hover:text-white font-medium text-xs ml-1 inline-block transition-colors underline cursor-pointer"
            >
              {isExpanded ? 'See less' : 'See more'}
            </button>
          )}
        </p>
      </div>

      {/* Footer */}
      <div className="pt-3 mt-auto border-t border-white/[0.08] flex items-center justify-between">
        <span className="text-xs text-[var(--color-text-muted)] capitalize">
          {event.eventState.toLowerCase()}
        </span>
        <a
          href={event.eventLink}
          target={event.eventLink !== '#' ? "_blank" : undefined}
          rel={event.eventLink !== '#' ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent-light)] hover:text-white transition-colors"
        >
          Details <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  );
};

const Events = () => {
  const [filter, setFilter] = useState('all');

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
      eventDescription: 'IEEE Flagship Event. Our annual national technical festival featuring major competitions like Vendetta, tech challenges, and developer hackathons.',
      eventImage: { url: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop' },
      eventType: 'Flagship Event',
      eventState: 'previous',
      eventLink: 'https://techopedia-14.netlify.app/'
    },
    {
      _id: '2',
      eventName: 'Indian Sign Language recognizer Workshop',
      eventDescription: 'What an incredible session! A huge thank you to all the enthusiastic students who joined our workshop on building an Indian Sign Language recognizer using Machine Learning and Computer Vision models.',
      eventImage: { url: signLanguage },
      eventType: 'Workshop',
      eventState: 'previous',
      eventLink: '#'
    },
    {
      _id: '3',
      eventName: 'Sustainable Engineering Design',
      eventDescription: 'Sustainability professional and Design graduate, Currently working in corporate sustainability with a focus on sustainable lifecycle assessment, eco-design frameworks, and green technological engineering.',
      eventImage: { url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop' },
      eventType: 'Seminar',
      eventState: 'previous',
      eventLink: '#'
    },
    {
      _id: '4',
      eventName: 'THE SPECTRUM OF POSSIBILITIES: CAREER IN RF AND MICROWAVE',
      eventDescription: 'Associate Professor in the Electronics and Communication Engineering department at SSM Institute of Engineering guiding students through emerging career avenues, antennas, radar systems, and microwave engineering.',
      eventImage: { url: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=600&h=400&fit=crop' },
      eventType: 'Seminar',
      eventState: 'previous',
      eventLink: '#'
    },
    {
      _id: '5',
      eventName: 'Epsilon 2026',
      eventDescription: 'Fostering technological innovation through expert talks, workshops, research symposiums, and academic discovery.',
      eventImage: { url: epsilon },
      eventType: 'Flagship Event',
      eventState: 'previous',
      eventLink: 'https://epsilon-2026.vercel.app/'
    },
    {
      _id: '6',
      eventName: 'Retrieval Augmented Generation',
      eventDescription: 'Building an AI Study Buddy with RAG. A practical hands-on session delving into LLMs, vector search, and intelligent question-answering systems.',
      eventImage: { url: ragThumbnail },
      eventType: 'Hands-on Workshop',
      eventState: 'Upcoming',
      eventLink: '#'
    }
  ];

  const filteredEvents = events.filter((event) => {
    if (filter === 'all') return true;
    return event.eventState.toLowerCase() === filter.toLowerCase();
  });

  return (
    <section id="events" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8"
        >
          <div>
            <h2 className="section-title">Events</h2>
            <p className="section-subtitle">
              Technical workshops, hackathons, and industry sessions organized by IEEE SIES GST.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 bg-white/5 border border-white/10 p-1.5 rounded-full self-start md:self-auto">
            {['all', 'upcoming', 'previous'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all capitalize ${
                  filter === tab
                    ? 'bg-[var(--color-accent)] text-white shadow-md'
                    : 'text-[var(--color-text-secondary)] hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Desktop Grid - Hidden on mobile */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredEvents.map((event, index) => (
            <EventCard key={event._id} event={event} index={index} />
          ))}
        </div>

        {/* Mobile Carousel - Visible on mobile only */}
        <div className="sm:hidden relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4 pb-4">
              {filteredEvents.map((event, index) => (
                <EventCard key={event._id} event={event} index={index} isCarousel={true} />
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={scrollPrev}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Previous event"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
              aria-label="Next event"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Swipe hint */}
          <p className="text-center text-xs text-[var(--color-text-muted)] mt-2">
            Swipe to explore more events
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;