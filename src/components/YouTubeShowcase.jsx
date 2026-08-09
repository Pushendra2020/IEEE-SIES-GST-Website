import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Youtube, Play, ExternalLink, X, CheckCircle2 } from 'lucide-react';

const videos = [
  {
    id: 'kYc5_G4pU-U',
    title: 'Introduction to Git & GitHub | Technical Series Ep. 4',
    category: 'Technical Series',
    description: 'Learn foundational version control concepts, repository creation, and essential git terminal commands.',
    watchUrl: 'https://www.youtube.com/watch?v=kYc5_G4pU-U',
    thumbnail: 'https://img.youtube.com/vi/kYc5_G4pU-U/hqdefault.jpg',
    duration: '24:15',
    badgeColor: 'bg-blue-500/20 text-blue-400 border-blue-500/40'
  },
  {
    id: 'kgC_R6Ds9jw',
    title: 'Git & GitHub: Branches, PRs & Merge Conflicts | Ep. 5',
    category: 'Technical Masterclass',
    description: 'Deep dive into collaborative development, branch management, pull requests, and resolving git conflicts.',
    watchUrl: 'https://www.youtube.com/watch?v=kgC_R6Ds9jw',
    thumbnail: 'https://img.youtube.com/vi/kgC_R6Ds9jw/hqdefault.jpg',
    duration: '28:40',
    badgeColor: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40'
  },
  {
    id: 'kYJ7xJkM-wE',
    title: 'TECHOPEDIA 13: Step Into The Multiverse | Official Teaser',
    category: 'Flagship Event',
    description: 'Official trailer for IEEE SIES GST annual flagship technical festival featuring major competitions and hackathons.',
    watchUrl: 'https://www.youtube.com/watch?v=kYJ7xJkM-wE',
    thumbnail: 'https://img.youtube.com/vi/kYJ7xJkM-wE/hqdefault.jpg',
    duration: '02:18',
    badgeColor: 'bg-purple-500/20 text-purple-400 border-purple-500/40'
  }
];

export default function YouTubeShowcase() {
  const [activeVideo, setActiveVideo] = useState(null);
  const channelUrl = 'https://www.youtube.com/@IEEESIESGST';

  return (
    <section id="youtube" className="section bg-black/40 relative overflow-hidden py-16 sm:py-24">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-[0_0_15px_rgba(59,130,246,0.2)]">
            <Youtube className="w-4 h-4 fill-current text-blue-400" />
            <span>Official YouTube Channel</span>
          </div>

          <h2 className="section-title">
            Watch Us On <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]">YouTube</span>
          </h2>
          <p className="section-subtitle">
            Explore technical series, hands-on workshops, student podcasts, and aftermovies from IEEE SIES GST.
          </p>
        </motion.div>

        {/* Channel Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-neutral-900/90 via-neutral-900/80 to-blue-950/30 backdrop-blur-xl p-6 sm:p-8 mb-12 shadow-2xl group hover:border-blue-500/30 transition-all duration-500"
        >
          {/* Subtle card lighting effect */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
              {/* Channel Logo */}
              <div className="relative">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-[0_0_30px_rgba(59,130,246,0.4)] flex-shrink-0 border border-white/20">
                  <Youtube className="w-10 h-10 fill-current" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-neutral-900 rounded-full p-0.5 border border-white/20 text-cyan-400">
                  <CheckCircle2 className="w-4 h-4 fill-cyan-400 text-neutral-900" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">IEEE SIESGST</h3>
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-white/80 font-mono border border-white/10">@IEEESIESGST</span>
                </div>
                <p className="text-sm text-[var(--color-text-secondary)] max-w-xl leading-relaxed">
                  Join our learning community for technical masterclasses, project showcases, podcast episodes, and event highlights.
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
              <a
                href={channelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-semibold text-sm transition-all duration-300 shadow-[0_0_25px_rgba(59,130,246,0.35)] hover:shadow-[0_0_35px_rgba(59,130,246,0.5)] hover:-translate-y-0.5 active:translate-y-0"
              >
                <Youtube className="w-4 h-4 fill-current" />
                <span>Subscribe Channel</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* 3 Featured Video Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/40 bg-neutral-900/60 backdrop-blur-xl transition-all duration-300 flex flex-col h-full hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] hover:-translate-y-1"
            >
              {/* Thumbnail Container */}
              <div
                className="relative aspect-video w-full overflow-hidden bg-neutral-950"
                onClick={() => setActiveVideo(video)}
              >
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Category Badge */}
                <span className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-md border backdrop-blur-md ${video.badgeColor}`}>
                  {video.category}
                </span>

                {/* Duration Badge */}
                <span className="absolute bottom-3 right-3 px-2 py-0.5 text-xs font-mono bg-black/80 text-white/90 rounded border border-white/10">
                  {video.duration}
                </span>

                {/* Pulsing Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.7)] group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Content Box */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3
                    className="text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors cursor-pointer"
                    onClick={() => setActiveVideo(video)}
                  >
                    {video.title}
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] line-clamp-3 mb-4 leading-relaxed">
                    {video.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <button
                    onClick={() => setActiveVideo(video)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-current text-blue-400" />
                    <span>Watch Now</span>
                  </button>

                  <a
                    href={video.watchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>YouTube</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal Lightbox */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-4xl bg-neutral-900 rounded-2xl border border-white/10 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-neutral-950">
                <div className="flex items-center gap-2">
                  <Youtube className="w-5 h-5 text-blue-400 fill-current" />
                  <h4 className="text-sm font-semibold text-white truncate max-w-md sm:max-w-xl">
                    {activeVideo.title}
                  </h4>
                </div>
                <button
                  onClick={() => setActiveVideo(null)}
                  className="p-1.5 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Embedded YouTube Iframe */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1`}
                  title={activeVideo.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-neutral-950 border-t border-white/10">
                <p className="text-xs text-[var(--color-text-secondary)]">
                  {activeVideo.description}
                </p>
                <a
                  href={activeVideo.watchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white transition-colors flex-shrink-0"
                >
                  <span>Open on YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
