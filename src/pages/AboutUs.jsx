import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Logo assets
import mtts from "../assets/mtts.png";
import cs from "../assets/cs.png";
import wie from "../assets/wie.png";

// ======================================================
// SOCIETY CONFIG
// accent -> tiny status dot only (kept deliberately restrained)
// pos    -> lg desktop placement (mobile stacks)
// ======================================================
const societies = [
  {
    key: "cs",
    name: "Computer Society",
    logo: cs,
    blurb: "Innovation in computing, AI, and software development.",
    accent: "#3b82f6",
    pos: "lg:absolute lg:top-0 lg:right-8 lg:w-64",
    delay: 0.15,
  },
  {
    key: "mtts",
    name: "MTT-S",
    logo: mtts,
    blurb: "The spectrum of RF and microwave engineering.",
    accent: "#8b5cf6",
    pos: "lg:absolute lg:top-[36%] lg:left-0 lg:w-72 lg:z-20",
    delay: 0.3,
  },
  {
    key: "wie",
    name: "Women in Engineering",
    logo: wie,
    blurb: "Empowering women in technology and research.",
    accent: "#ec4899",
    pos: "lg:absolute lg:bottom-6 lg:right-16 lg:w-60",
    delay: 0.45,
  },
];

// ======================================================
// CHAPTER CARD — subtle tilt, clean logo plate, no glow
// ======================================================
function ChapterCard({ society }) {
  const { name, logo, blurb, accent, pos, delay } = society;
  const cardRef = useRef(null);

  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [4, -4]), {
    stiffness: 120,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-4, 4]), {
    stiffness: 120,
    damping: 20,
  });

  const handleMove = (e) => {
    const r = cardRef.current?.getBoundingClientRect();
    if (!r) return;
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  return (
    <motion.div
      className={`w-full ${pos}`}
      style={{ perspective: 1200 }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY }}
        className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.05]"
      >
        {/* Clean logo plate for contrast */}
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl bg-white p-2.5 shadow-sm ring-1 ring-black/5">
          <img
            src={logo}
            alt={`IEEE ${name} logo`}
            className="h-full w-full object-contain"
            draggable={false}
            loading="lazy"
          />
        </div>

        <div className="mb-2.5 flex items-center gap-2">
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: accent }}
          />
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
            Active Chapter
          </span>
        </div>

        <h3 className="mb-1.5 text-lg font-semibold text-white">{name}</h3>
        <p className="text-sm leading-relaxed text-white/55">{blurb}</p>
      </motion.div>
    </motion.div>
  );
}

export default function AboutUs() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const watermarkY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
  const watermarkScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section
      ref={sectionRef}
      id="aboutus"
      className="section relative flex min-h-screen items-center overflow-hidden"
    >
      <motion.div
        className="font-display pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 select-none text-[20vw] font-bold text-white/[0.02]"
        style={{ y: watermarkY, scale: watermarkScale }}
      >
        IEEE
      </motion.div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* ==================== TEXT ==================== */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-px w-12 bg-[var(--color-accent-light)]" />
              <span className="font-tech text-sm uppercase tracking-widest text-[var(--color-accent-light)]">
                Who We Are
              </span>
            </div>

            <h2 className="font-display mb-4 text-2xl font-bold leading-tight text-white sm:mb-6 sm:text-3xl md:mb-8 md:text-4xl lg:text-6xl">
              Advancing Technology <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-white to-white/50 bg-clip-text text-transparent">
                for Humanity.
              </span>
            </h2>

            <p className="mb-8 max-w-lg text-lg leading-relaxed text-[var(--color-text-secondary)]">
              IEEE SIES GST is more than just a student chapter; we are a
              community of innovators, thinkers, and makers. Since 2015, we've
              been bridging the gap between academic learning and industry
              excellence.
            </p>

            <div className="mb-8 grid grid-cols-2 gap-4 sm:gap-5">
              {[
                { value: "150+", label: "Active Members" },
                { value: "20+", label: "Annual Events" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4"
                >
                  <div className="font-display mb-1 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                    {s.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] sm:text-sm">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn btn-secondary group rounded-full border-white/20 px-8 hover:bg-white/10"
            >
              Join Our Community
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          {/* ==================== CHAPTER CARDS ==================== */}
          <div className="relative mt-10 flex flex-col gap-6 lg:mt-0 lg:block lg:h-[600px]">
            {societies.map((society) => (
              <ChapterCard key={society.key} society={society} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
