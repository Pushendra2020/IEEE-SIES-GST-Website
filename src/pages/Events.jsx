import React, { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  ExternalLink,
  Maximize2,
  Calendar,
  Users,
  User,
  FileText,
  Sparkles,
  Search,
} from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';

// Scraped Official NBA Flyers & Existing Banners
import ragThumbnail from '../assets/rag_thumbnail.png';
import signLanguage from '../assets/sign_language.jpeg';
import epsilon from '../assets/epsilon.jpeg';
import techopedia15Banner from '../assets/events/techopedia15_banner.jpg';
import lte5gBanner from '../assets/events/lte_5g_banner.png';
import studyAbroadBanner from '../assets/events/study_abroad_banner.jpg';
import aiProductBanner from '../assets/events/ai_product_banner.jpg';
import industrialAuditBanner from '../assets/events/industrial_audit_banner.png';
import solarAiBanner from '../assets/events/solar_ai_banner.png';
import neuralNetworksBanner from '../assets/events/neural_networks_banner.png';
import iotBanner from '../assets/events/iot_banner.jpg';
import linuxBanner from '../assets/events/linux_banner.png';
import softSkillsBanner from '../assets/events/soft_skills_banner.png';
import git1Banner from '../assets/events/git1_banner.png';
import git2Banner from '../assets/events/git2_banner.png';
import uartBanner from '../assets/events/uart_banner.png';

const FALLBACK_IMG =
  'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&h=750&fit=crop';

// ======================================================
// 2026-27 MAJOR NBA EVENTS DATA
// ======================================================
const events = [
  {
    _id: 'techopedia15',
    eventName: 'TechoPedia 15: Flagship Tech Fest',
    eventDescription:
      'IEEE SIES GST’s annual flagship national technical festival featuring flagship hackathons, Vendetta coding showdown, project exhibitions, robotics arenas, and technical symposiums.',
    eventImage: { url: techopedia15Banner },
    eventType: 'Flagship Event',
    category: 'flagship',
    eventState: 'upcoming',
    date: 'October 2026',
    speaker: 'IEEE SIES GST Student Council',
    organization: 'SIES Graduate School of Technology',
    attendance: null,
    eventLink: 'https://techopedia-14.netlify.app/',
    reportLink: null,
  },
  {
    _id: 'lte5g',
    eventName: 'Comparative Difference: LTE, 5G & 6G Architecture',
    eventDescription:
      'An industry-grade technical seminar diving into telecom generational evolution, spectrum bands (sub-6GHz & mmWave), beamforming, network slicing, MIMO antenna systems, and latency innovations in next-generation 6G mobile standards.',
    eventImage: { url: lte5gBanner },
    eventType: 'Industry Seminar',
    category: 'seminars',
    eventState: 'previous',
    date: '17 Aug 2026',
    speaker: 'Dr. Gitimayee Sahu',
    organization: 'Manager, Reliance Jio',
    attendance: 48,
    eventLink: 'https://docs.google.com/document/d/18VSoa1PFtPoi9qrn2WIV_eqDdgXQ7LY8/edit?usp=sharing',
    reportLink: 'https://docs.google.com/document/d/18VSoa1PFtPoi9qrn2WIV_eqDdgXQ7LY8/edit?usp=sharing',
  },
  {
    _id: 'studyabroad',
    eventName: 'Your Global Future: Study Abroad & Profile Building',
    eventDescription:
      'A comprehensive 2-day guidance roadmap covering international university shortlisting, GRE/IELTS strategies, statement of purpose curation, research resume building, and scholarships for higher education abroad.',
    eventImage: { url: studyAbroadBanner },
    eventType: 'Career Seminar',
    category: 'seminars',
    eventState: 'previous',
    date: '18–19 Aug 2026',
    speaker: 'Ms. Tanvi Sharma',
    organization: 'Senior Counsellor, Collegepond Mumbai',
    attendance: 142,
    eventLink: 'https://docs.google.com/document/d/1mvZKXfEzLEvsqr3sCauHyeB6mz89VtNk/edit?usp=sharing',
    reportLink: 'https://docs.google.com/document/d/1mvZKXfEzLEvsqr3sCauHyeB6mz89VtNk/edit?usp=sharing',
  },
  {
    _id: 'rag',
    eventName: 'Hack Your Homework: Building an AI Study Buddy with RAG',
    eventDescription:
      'A hands-on practical 2-day workshop building custom intelligent AI study assistants using Retrieval-Augmented Generation (RAG), vector embeddings, LangChain, and local LLMs to query study materials directly.',
    eventImage: { url: ragThumbnail },
    eventType: 'Hands-on Workshop',
    category: 'workshops',
    eventState: 'previous',
    date: '03–04 Aug 2026',
    speaker: 'Atharva Matale & Dakshata Dalvi',
    organization: 'Head, IEEE CS Chapter & Technical Head',
    attendance: 65,
    eventLink: 'https://docs.google.com/document/d/1NYMxlEHPyPg7TdNKriuaY1HqzfdsI1pO/edit?usp=sharing',
    reportLink: 'https://docs.google.com/document/d/1NYMxlEHPyPg7TdNKriuaY1HqzfdsI1pO/edit?usp=sharing',
  },
  {
    _id: 'aiproduct',
    eventName: "Impact of AI on Modern Product Management",
    eventDescription:
      'An insightful industry seminar addressing how GenAI and LLM tooling are fundamentally reshaping product discovery, automated user persona generation, telemetry metrics, and agile prioritization in high-growth startups.',
    eventImage: { url: aiProductBanner },
    eventType: 'Industry Seminar',
    category: 'seminars',
    eventState: 'previous',
    date: '12 Aug 2026',
    speaker: 'Ms. Kritika Pandey',
    organization: 'Product Manager, India Crypto Research',
    attendance: 53,
    eventLink: 'https://docs.google.com/document/d/1caholesKh5n_Pf5zcJAu1pYuJTq-9x2S/edit?usp=sharing',
    reportLink: 'https://docs.google.com/document/d/1caholesKh5n_Pf5zcJAu1pYuJTq-9x2S/edit?usp=sharing',
  },
  {
    _id: 'industrial',
    eventName: 'Industrial Audit & Compliance: Startup Opportunities',
    eventDescription:
      'A masterclass delving into software regulatory standards, SOC 2 / ISO compliance frameworks, security pipeline audits, and commercial career avenues in cybersecurity consulting and regulatory tech.',
    eventImage: { url: industrialAuditBanner },
    eventType: 'Industry Seminar',
    category: 'seminars',
    eventState: 'previous',
    date: '14 Aug 2026',
    speaker: 'Mr. Sahaj Shukla',
    organization: 'Software Engineer II, BDIPlus New York',
    attendance: 50,
    eventLink: 'https://docs.google.com/document/d/1EdLArN2c4TjP6qIVoO78AClXAXIHUENU/edit?usp=sharing',
    reportLink: 'https://docs.google.com/document/d/1EdLArN2c4TjP6qIVoO78AClXAXIHUENU/edit?usp=sharing',
  },
  {
    _id: 'neuralnet',
    eventName: 'Neural Networks: How Machines Learn to Think',
    eventDescription:
      'Technical Series episode breaking down artificial neural network foundations: perceptrons, activation functions, backpropagation calculus, gradient descent optimization, and intuitive Python implementations.',
    eventImage: { url: neuralNetworksBanner },
    eventType: 'Technical Series',
    category: 'technical series',
    eventState: 'previous',
    date: '16 Aug 2026',
    speaker: 'Atharva Matale',
    organization: 'Head, IEEE CS Chapter',
    attendance: 45,
    eventLink: 'https://docs.google.com/document/d/1hn4Smkktj2lrE7aL4GMYDmc3opBY5k4R/edit?usp=sharing',
    reportLink: 'https://docs.google.com/document/d/1hn4Smkktj2lrE7aL4GMYDmc3opBY5k4R/edit?usp=sharing',
  },
  {
    _id: 'solarai',
    eventName: 'AI for Smarter Solar Energy & Grid Optimization',
    eventDescription:
      'An advanced engineering webinar examining predictive machine learning models for solar irradiance forecasting, maximum power point tracking (MPPT), and smart grid load balancing for renewable power systems.',
    eventImage: { url: solarAiBanner },
    eventType: 'Webinar',
    category: 'webinars',
    eventState: 'previous',
    date: '30 Aug 2026',
    speaker: 'Prof. Manoj Suresh Gofane',
    organization: 'Faculty, RAIT Navi Mumbai',
    attendance: 40,
    eventLink: 'https://docs.google.com/document/d/1lVqVXImcqIS0Ds0DwcTihzyw-nnZ38lb/edit?usp=sharing',
    reportLink: 'https://docs.google.com/document/d/1lVqVXImcqIS0Ds0DwcTihzyw-nnZ38lb/edit?usp=sharing',
  },
  {
    _id: 'iot',
    eventName: 'Bridging the Gap: Electronics to Internet of Things',
    eventDescription:
      'Connecting embedded hardware to the cloud: microcontroller interfacing, sensor data acquisition, MQTT broker architecture, and real-time remote telemetry dashboards.',
    eventImage: { url: iotBanner },
    eventType: 'Technical Series',
    category: 'technical series',
    eventState: 'previous',
    date: '01 Aug 2026',
    speaker: 'Mr. Sumit Singh',
    organization: 'Assistant Professor, KES Shroff College',
    attendance: 55,
    eventLink: 'https://docs.google.com/document/d/1DCl6zCnYvImJvTyNuKO5b-cEM7PL3Xk9/edit?usp=sharing',
    reportLink: 'https://docs.google.com/document/d/1DCl6zCnYvImJvTyNuKO5b-cEM7PL3Xk9/edit?usp=sharing',
  },
  {
    _id: 'linux',
    eventName: 'Linux Essentials & Command Line Mastery',
    eventDescription:
      'Essential terminal command-line proficiencies for developers: Bash automation scripting, permission management, process management, cron scheduling, and SSH server operations.',
    eventImage: { url: linuxBanner },
    eventType: 'Technical Series',
    category: 'technical series',
    eventState: 'previous',
    date: '23 Aug 2026',
    speaker: 'Siddhesh Murkute',
    organization: 'Head, IEEE MTTS Chapter',
    attendance: 42,
    eventLink: 'https://docs.google.com/document/d/15gPegWKicQ_RYotdlANrPyqV_paeGwka/edit?usp=sharing',
    reportLink: 'https://docs.google.com/document/d/15gPegWKicQ_RYotdlANrPyqV_paeGwka/edit?usp=sharing',
  },
  {
    _id: 'softskills',
    eventName: 'Soft Skills for Engineering Success & Leadership',
    eventDescription:
      'Corporate readiness masterclass covering impactful professional communications, technical presentation storytelling, team consensus building, and interview etiquette for engineering students.',
    eventImage: { url: softSkillsBanner },
    eventType: 'Webinar',
    category: 'webinars',
    eventState: 'previous',
    date: '22 Aug 2026',
    speaker: 'Ms. Tanvi Gadoya',
    organization: 'Founder, Future Vision Training, Rajkot',
    attendance: 58,
    eventLink: 'https://docs.google.com/document/d/17j-u1TMuD-58HJe8hHEKjTU-ZLwNaA7e/edit?usp=sharing',
    reportLink: 'https://docs.google.com/document/d/17j-u1TMuD-58HJe8hHEKjTU-ZLwNaA7e/edit?usp=sharing',
  },
  {
    _id: 'git',
    eventName: 'Git & GitHub: From Fundamentals to Merge Conflicts',
    eventDescription:
      'Two-part technical workshop series walking through modern version control workflows: staging, commits, remote origins, feature branch management, pull requests, and resolving complex merge conflicts in teams.',
    eventImage: { url: git1Banner },
    eventType: 'Technical Series',
    category: 'technical series',
    eventState: 'previous',
    date: '26 Jul & 02 Aug 2026',
    speaker: 'Arya Muthukrishnan & Nanmathi Balachandran',
    organization: 'IEEE SIES GST Technical Team',
    attendance: 60,
    eventLink: 'https://docs.google.com/document/d/1VaN3fxHPZ_PRLclAfr9oSBJNISs_IIsR/edit?usp=sharing',
    reportLink: 'https://docs.google.com/document/d/1VaN3fxHPZ_PRLclAfr9oSBJNISs_IIsR/edit?usp=sharing',
  },
  {
    _id: 'uart',
    eventName: 'Hardware Protocols: Introduction to UART',
    eventDescription:
      'Hands-on technical dive into the Universal Asynchronous Receiver-Transmitter serial communication protocol: baud rate clocking, start/stop parity framing, packet transfers, and hardware logic analyzer debugging.',
    eventImage: { url: uartBanner },
    eventType: 'Technical Series',
    category: 'technical series',
    eventState: 'previous',
    date: '19 Jul 2026',
    speaker: 'Akhilesh Kumar',
    organization: 'IEEE SIES GST Technical Team',
    attendance: 40,
    eventLink: 'https://docs.google.com/document/d/1rteZ0ZoZyL8KFoaTncw4d_VQqzHeEwuV/edit?usp=sharing',
    reportLink: 'https://docs.google.com/document/d/1rteZ0ZoZyL8KFoaTncw4d_VQqzHeEwuV/edit?usp=sharing',
  },
  {
    _id: 'isl',
    eventName: 'Indian Sign Language Recognizer Workshop',
    eventDescription:
      'What an incredible session! A huge thank you to all enthusiastic students who joined our workshop on building real-time Indian Sign Language recognition with OpenCV, MediaPipe hand landmark meshes, and ML classifiers.',
    eventImage: { url: signLanguage },
    eventType: 'Hands-on Workshop',
    category: 'workshops',
    eventState: 'previous',
    date: 'Hands-on Lab',
    speaker: 'IEEE SIES GST Technical Team',
    organization: 'SIES Graduate School of Technology',
    attendance: 50,
    eventLink: '#',
    reportLink: null,
  },
  {
    _id: 'epsilon',
    eventName: 'Epsilon 2026: National Tech Symposium',
    eventDescription:
      'Fostering technological innovation through project exhibits, national research symposiums, expert industry discourses, and developer hackathons across emerging engineering branches.',
    eventImage: { url: epsilon },
    eventType: 'Flagship Event',
    category: 'flagship',
    eventState: 'previous',
    date: 'National Level',
    speaker: 'IEEE SIES GST Student Branch',
    organization: 'SIES Graduate School of Technology',
    attendance: null,
    eventLink: 'https://epsilon-2026.vercel.app/',
    reportLink: null,
  },
];

// ======================================================
// STATUS PILL
// ======================================================
const StatusPill = ({ state }) => {
  const isUpcoming = state?.toLowerCase() === 'upcoming';
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider backdrop-blur-md ${
        isUpcoming
          ? 'border-emerald-400/40 bg-emerald-500/20 text-emerald-300 shadow-[0_0_16px_rgba(16,185,129,0.35)]'
          : 'border-white/15 bg-slate-900/70 text-slate-300'
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${isUpcoming ? 'bg-emerald-400 animate-pulse' : 'bg-slate-400'}`} />
      {isUpcoming ? 'Upcoming' : 'Completed'}
    </span>
  );
};

// ======================================================
// EVENT CARD (ENHANCED WITH LARGER POSTER CONTAINER & AMBIENT BACKDROP)
// ======================================================
const EventCard = ({ event, index, isCarousel = false, onQuickView }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const cardRef = useRef(null);
  const characterLimit = 115;
  const isLong = event.eventDescription && event.eventDescription.length > characterLimit;
  const isUpcoming = event.eventState?.toLowerCase() === 'upcoming';
  const hasReport = !!event.reportLink;

  // Cursor-tracked glass border highlight
  const handleMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - r.left}px`);
    el.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070d18]/70 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_12px_40px_rgba(6,182,212,0.15)] ${
        isCarousel ? 'w-[85vw] max-w-[360px] flex-shrink-0' : 'h-full'
      }`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: isCarousel ? 0 : index * 0.05 }}
    >
      {/* Dynamic cursor glow */}
      <div
        className="pointer-events-none absolute inset-0 z-20 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(320px circle at var(--mx,50%) var(--my,50%), rgba(56,189,248,0.12), transparent 70%)',
        }}
        aria-hidden
      />

      <div>
        {/* ENLARGED POSTER CONTAINER (h-60 sm:h-64) with ambient blur backdrop */}
        <button
          type="button"
          onClick={() => onQuickView(event)}
          className="relative block w-full h-60 sm:h-64 overflow-hidden bg-gradient-to-b from-[#0a1120] to-[#040813] border-b border-white/[0.08] text-left cursor-pointer"
          aria-label={`View full poster for ${event.eventName}`}
        >
          {/* Ambient blurred backdrop — ensures zero blank space regardless of image aspect ratio */}
          <img
            src={event.eventImage?.url || FALLBACK_IMG}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover blur-2xl opacity-35 scale-125 transition-transform duration-700 group-hover:scale-150"
          />

          {/* Crisp foreground poster image — fully visible without cropping */}
          <img
            src={event.eventImage?.url || FALLBACK_IMG}
            alt={event.eventName}
            className="relative z-10 h-full w-full object-contain p-2 transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = FALLBACK_IMG;
            }}
          />

          {/* Vignette gradients */}
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/85 via-black/10 to-black/60 pointer-events-none" />

          {/* Header badges */}
          <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
            <span className="rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-semibold text-cyan-200 backdrop-blur-md shadow-md">
              {event.eventType}
            </span>
            <StatusPill state={event.eventState} />
          </div>

          {/* Footer badges over image */}
          <div className="absolute bottom-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
            {event.attendance ? (
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-black/65 px-2.5 py-0.5 text-[11px] font-medium text-emerald-300 backdrop-blur-md">
                <Users className="h-3 w-3" />
                {event.attendance} Attendees
              </span>
            ) : (
              <span />
            )}

            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-2.5 py-1 text-[11px] font-medium text-white/90 backdrop-blur-md transition-all group-hover:bg-cyan-500/80 group-hover:text-black">
              <Maximize2 className="h-3 w-3" />
              View Flyer
            </span>
          </div>
        </button>

        {/* Card Body */}
        <div className="p-5">
          {/* Speaker / Organization Banner */}
          {event.speaker && (
            <div className="mb-2.5 flex items-center gap-1.5 text-xs font-medium text-cyan-300/90">
              <User className="h-3.5 w-3.5 flex-shrink-0 text-cyan-400" />
              <span className="truncate">
                {event.speaker}
                {event.organization ? ` • ${event.organization}` : ''}
              </span>
            </div>
          )}

          {/* Event Title */}
          <h3 className="mb-2 text-base font-bold leading-snug text-white group-hover:text-cyan-200 transition-colors sm:text-lg line-clamp-2">
            {event.eventName}
          </h3>

          {/* Date & Location metadata */}
          <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[var(--color-text-muted)]">
            {event.date && (
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                {event.date}
              </span>
            )}
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-cyan-400" />
              SIES GST
            </span>
          </div>

          {/* Description with expandable text */}
          <p className="mb-1 text-sm leading-relaxed text-[var(--color-text-secondary)]">
            <AnimatePresence initial={false} mode="wait">
              <motion.span
                key={isExpanded ? 'full' : 'short'}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="inline"
              >
                {isExpanded || !isLong
                  ? event.eventDescription
                  : `${event.eventDescription.slice(0, characterLimit)}… `}
              </motion.span>
            </AnimatePresence>
            {isLong && (
              <button
                type="button"
                onClick={() => setIsExpanded((v) => !v)}
                className="ml-1 inline-block text-xs font-semibold text-cyan-400 underline transition-colors hover:text-white"
              >
                {isExpanded ? 'See less' : 'See more'}
              </button>
            )}
          </p>
        </div>
      </div>

      {/* Card Footer with Quick View & Report Links */}
      <div className="mt-auto flex items-center justify-between border-t border-white/[0.08] px-5 py-3.5 bg-black/20">
        <button
          type="button"
          onClick={() => onQuickView(event)}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-white/70 transition-colors hover:text-cyan-300"
        >
          <Maximize2 className="h-3.5 w-3.5" />
          Flyer Preview
        </button>

        <div className="flex items-center gap-3">
          {hasReport && (
            <a
              href={event.reportLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
              title="Read official Google Doc report"
            >
              <FileText className="h-3.5 w-3.5" />
              NBA Report
            </a>
          )}

          <a
            href={event.eventLink}
            target={event.eventLink !== '#' ? '_blank' : undefined}
            rel={event.eventLink !== '#' ? 'noopener noreferrer' : undefined}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-400 transition-colors hover:text-white"
          >
            {isUpcoming ? 'Register' : 'Details'}
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// ======================================================
// ENHANCED POSTER QUICK-VIEW LIGHTBOX MODAL
// ======================================================
const QuickViewModal = ({ event, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!event) return null;
  const hasLink = event.eventLink && event.eventLink !== '#';
  const hasReport = !!event.reportLink;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-3 sm:p-6 backdrop-blur-xl"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        transition={{ type: 'spring', damping: 26, stiffness: 320 }}
        onClick={(e) => e.stopPropagation()}
        className="relative grid w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-2xl border border-white/15 bg-neutral-950 shadow-2xl md:grid-cols-[1.1fr_1fr]"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-3.5 top-3.5 z-20 rounded-full bg-black/70 p-2 text-white/80 backdrop-blur-md transition-colors hover:bg-white hover:text-black"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Full Uncropped Poster Section with black ambient frame */}
        <div className="relative flex items-center justify-center bg-black/95 p-3 md:p-6 max-h-[45vh] md:max-h-[90vh] overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
          <img
            src={event.eventImage?.url || FALLBACK_IMG}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover blur-3xl opacity-30 scale-125"
          />
          <img
            src={event.eventImage?.url || FALLBACK_IMG}
            alt={event.eventName}
            className="relative z-10 max-h-full max-w-full rounded-lg object-contain shadow-2xl"
            onError={(e) => {
              e.currentTarget.src = FALLBACK_IMG;
            }}
          />
        </div>

        {/* Details & Report Links */}
        <div className="flex flex-col gap-4 p-6 sm:p-8 overflow-y-auto max-h-[50vh] md:max-h-[90vh]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300">
              {event.eventType}
            </span>
            <StatusPill state={event.eventState} />
            {event.attendance && (
              <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300 inline-flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5" />
                {event.attendance} Attendees
              </span>
            )}
          </div>

          <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl">
            {event.eventName}
          </h3>

          {/* Speaker Card */}
          {event.speaker && (
            <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3.5 flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300">
                <User className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                  Resource Person
                </div>
                <div className="text-sm font-bold text-white">{event.speaker}</div>
                {event.organization && (
                  <div className="text-xs text-white/70">{event.organization}</div>
                )}
              </div>
            </div>
          )}

          {/* Date & Location */}
          <div className="grid grid-cols-2 gap-3 text-xs text-[var(--color-text-muted)]">
            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2.5 flex items-center gap-2">
              <Calendar className="h-4 w-4 text-cyan-400 flex-shrink-0" />
              <div>
                <span className="block text-[10px] uppercase text-white/50">Date</span>
                <span className="font-medium text-white">{event.date || 'TBA'}</span>
              </div>
            </div>
            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2.5 flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-400 flex-shrink-0" />
              <div>
                <span className="block text-[10px] uppercase text-white/50">Venue</span>
                <span className="font-medium text-white">SIES GST, Navi Mumbai</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <div>
            <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-white/60">
              Overview & Topics Covered
            </div>
            <p className="text-sm leading-relaxed text-[var(--color-text-secondary)]">
              {event.eventDescription}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="mt-auto pt-4 flex flex-wrap items-center gap-3 border-t border-white/10">
            {hasReport && (
              <a
                href={event.reportLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/15 px-4 py-2.5 text-sm font-semibold text-emerald-300 transition-all hover:bg-emerald-500 hover:text-black shadow-lg"
              >
                <FileText className="h-4 w-4" />
                View NBA Event Report
              </a>
            )}

            {hasLink && (
              <a
                href={event.eventLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 shadow-lg shadow-cyan-500/20"
              >
                Visit Event Portal <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

// ======================================================
// EVENTS SECTION COMPONENT
// ======================================================
const Events = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [quickView, setQuickView] = useState(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    dragFree: true,
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const filteredEvents = events.filter((event) => {
    // Filter pill matching
    let matchesTab = true;
    if (filter === 'upcoming') {
      matchesTab = event.eventState.toLowerCase() === 'upcoming';
    } else if (filter === 'previous') {
      matchesTab = event.eventState.toLowerCase() === 'previous';
    } else if (filter !== 'all') {
      matchesTab = event.category.toLowerCase() === filter.toLowerCase();
    }

    // Search query matching
    const q = searchQuery.toLowerCase().trim();
    let matchesSearch = true;
    if (q) {
      matchesSearch =
        event.eventName.toLowerCase().includes(q) ||
        (event.eventDescription && event.eventDescription.toLowerCase().includes(q)) ||
        (event.speaker && event.speaker.toLowerCase().includes(q)) ||
        (event.organization && event.organization.toLowerCase().includes(q));
    }

    return matchesTab && matchesSearch;
  });

  return (
    <section id="events" className="section relative">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-300 mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              Academic Year 2026–27 & NBA Archives
            </div>
            <h2 className="section-title !text-left">Major Events & Workshops</h2>
            <p className="section-subtitle !mx-0 !text-left max-w-2xl">
              Industry seminars, hands-on technical bootcamps, and national competitions arranged by IEEE SIES GST with verified attendance and event reports.
            </p>
          </div>

          {/* Search bar & Filter Pills */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search event, topic, speaker..."
                className="w-full sm:w-64 rounded-full border border-white/10 bg-white/5 pl-9 pr-4 py-1.5 text-xs text-white placeholder-white/40 focus:border-cyan-400 focus:bg-black/60 focus:outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 rounded-full border border-white/10 bg-white/5 p-1.5">
              {[
                { id: 'all', label: 'All' },
                { id: 'upcoming', label: 'Upcoming' },
                { id: 'workshops', label: 'Workshops' },
                { id: 'seminars', label: 'Seminars' },
                { id: 'technical series', label: 'Tech Series' },
                { id: 'flagship', label: 'Flagship' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-semibold capitalize transition-all ${
                    filter === tab.id
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                      : 'text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Results Counter */}
        <div className="mb-6 flex items-center justify-between text-xs text-[var(--color-text-muted)]">
          <span>
            Showing <strong className="text-white">{filteredEvents.length}</strong> of {events.length} events
          </span>
          <span className="hidden sm:inline text-white/50">
            Click any poster to view full uncropped flyer & details
          </span>
        </div>

        {/* Desktop / Tablet Grid */}
        {filteredEvents.length > 0 ? (
          <div className="hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event, index) => (
              <EventCard
                key={event._id}
                event={event}
                index={index}
                onQuickView={setQuickView}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-12 text-center text-white/60">
            No events found matching "{searchQuery}". Try searching for another topic or reset the filter.
          </div>
        )}

        {/* Mobile Embla Carousel */}
        {filteredEvents.length > 0 && (
          <div className="relative sm:hidden">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4 pb-4">
                {filteredEvents.map((event, index) => (
                  <EventCard
                    key={event._id}
                    event={event}
                    index={index}
                    isCarousel
                    onQuickView={setQuickView}
                  />
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center gap-4">
              <button
                onClick={scrollPrev}
                aria-label="Previous event"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:bg-white/15 hover:text-white"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={scrollNext}
                aria-label="Next event"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all hover:bg-white/15 hover:text-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <p className="mt-2 text-center text-xs text-[var(--color-text-muted)]">
              Swipe horizontally to browse through events
            </p>
          </div>
        )}
      </div>

      {/* Lightbox / Quick View Modal */}
      <AnimatePresence>
        {quickView && (
          <QuickViewModal event={quickView} onClose={() => setQuickView(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default Events;
