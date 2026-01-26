import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ChevronDown, Menu, X } from 'lucide-react'
import logo from "../assets/siesLogo.webp"
import csLogo from "../assets/cs.webp"
import mttsLogo from "../assets/mtts.webp"
import wieLogo from "../assets/wie.webp"
import grssLogo from "../assets/grss.png"


gsap.registerPlugin(ScrollToPlugin)

const Hero = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [showLogos, setShowLogos] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)

        // Intersection Observer for active section detection
        const sections = document.querySelectorAll('section[id], footer[id]')
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -60% 0px',
            threshold: 0
        }

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)
        sections.forEach(section => observer.observe(section))

        // Smooth scroll for nav links
        const navLinks = document.querySelectorAll('.nav-link, .scroll-indicator')
        const handleNavClick = (e) => {
            const href = e.currentTarget.getAttribute('href')
            if (href && href.startsWith('#')) {
                e.preventDefault()
                const target = document.querySelector(href)
                if (target) {
                    gsap.to(window, {
                        duration: 1,
                        scrollTo: { y: target, offsetY: 80 },
                        ease: "power2.inOut"
                    })
                }
            }
        }
        navLinks.forEach(link => link.addEventListener('click', handleNavClick))

        // Simple reliable animation for hero content
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

        // Animate title container
        tl.fromTo('.hero-title',
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1 }
        )

        // Animate Student Branch
        tl.fromTo('.student-branch',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6 },
            "-=0.4"
        )

        // Animate tagline
        tl.fromTo('.hero-tagline',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6 },
            "-=0.3"
        )

        // Animate buttons
        tl.fromTo('.hero-buttons',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.6 },
            "-=0.3"
        )

        // Animate scroll indicator
        tl.fromTo('.scroll-indicator',
            { opacity: 0 },
            { opacity: 1, duration: 0.6 },
            "-=0.2"
        )

        return () => {
            window.removeEventListener('scroll', handleScroll)
            navLinks.forEach(link => link.removeEventListener('click', handleNavClick))
            observer.disconnect()
        }
    }, [])

    // Toggle between text and logos every 4 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setShowLogos(prev => !prev)
        }, 4000)

        return () => clearInterval(interval)
    }, [])

    // Helper to check if nav item is active
    const isActive = (sectionId) => activeSection === sectionId

    return (
        <>
            {/* Navbar */}
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="max-w-7xl mx-auto flex items-center justify-between relative px-4 sm:px-6">
                    <NavLink to="/" className="flex items-center gap-3 z-50">
                        <img src={logo} alt="IEEE SIES GST" className="w-10 h-10 sm:w-12 sm:h-12" />
                        <div className="hidden sm:flex items-center gap-2 min-w-[280px]">
                            {showLogos ? (
                                <div className="flex items-center gap-2 animate-fade-in">
                                    <img src={csLogo} alt="Computer Society" className="w-10 h-10 object-contain opacity-90 hover:opacity-100 transition-opacity" />
                                    <img src={mttsLogo} alt="MTT-S" className="w-10 h-10 object-contain opacity-90 hover:opacity-100 transition-opacity" />
                                    <img src={wieLogo} alt="WIE" className="w-10 h-10 object-contain opacity-90 hover:opacity-100 transition-opacity" />
                                    <img src={grssLogo} alt="GRSS" className="w-10 h-10 object-contain opacity-90 hover:opacity-100 transition-opacity" />
                                </div>
                            ) : (
                                <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-[linear-gradient(110deg,#ffffff,45%,#3b82f6,55%,#ffffff)] bg-[length:250%_100%] animate-shine">
                                    IEEE SIES GST
                                </span>
                            )}
                        </div>
                    </NavLink>

                    {/* Desktop Menu */}
                    <ul className="nav-menu hidden md:flex">
                        <li><a href="#home" className={`nav-link ${isActive('home') ? 'active' : ''}`}>Home</a></li>
                        <li><a href="#aboutus" className={`nav-link ${isActive('aboutus') ? 'active' : ''}`}>About</a></li>
                        <li><a href="#events" className={`nav-link ${isActive('events') ? 'active' : ''}`}>Events</a></li>
                        <li><a href="#gallery" className={`nav-link ${isActive('gallery') ? 'active' : ''}`}>Gallery</a></li>
                        <li><a href="#faqs" className={`nav-link ${isActive('faqs') ? 'active' : ''}`}>FAQs</a></li>
                        <li><a href="#contact" className={`nav-link ${isActive('contact') ? 'active' : ''}`}>Contact</a></li>
                    </ul>

                    <div className="flex items-center gap-4">
                        <NavLink to="/team" className="btn btn-primary hidden md:inline-flex">
                            Our Team
                        </NavLink>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden text-white p-2 z-50 relative"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu Overlay */}
                    <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-start pt-24 pb-8 overflow-y-auto transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                        <ul className="flex flex-col items-center gap-6 text-lg">
                            {['Home', 'About Us', 'Events', 'Gallery', 'FAQs', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase().replace(' ', '')}`}
                                        className="text-white/80 hover:text-[var(--color-accent-light)] transition-colors py-2 px-4"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                            <li className="mt-4">
                                <NavLink
                                    to="/team"
                                    className="btn btn-primary"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Our Team
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-container relative overflow-hidden" id="home">
                {/* Subtle background glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] max-w-[500px] max-h-[500px] bg-[var(--color-accent-deep)] opacity-[0.12] rounded-full blur-[100px] pointer-events-none" />

                {/* Secondary glow for depth - very subtle */}
                <div className="absolute top-1/3 right-1/4 w-[25vw] h-[25vw] max-w-[250px] max-h-[250px] bg-[#00b5e2] opacity-[0.06] rounded-full blur-[80px] pointer-events-none" />

                <div className="hero-content relative z-10 max-w-5xl mx-auto flex flex-col items-center px-4">

                    {/* Enhanced Typography */}
                    <h1 className="hero-title flex flex-col items-center leading-none">
                        {/* IEEE */}
                        <span className="font-display font-light text-[clamp(2.5rem,9vw,8rem)] tracking-tight text-transparent bg-clip-text bg-[linear-gradient(110deg,#ffffff,45%,#3b82f6,55%,#ffffff)] bg-[length:250%_100%] animate-shine">
                            IEEE
                        </span>

                        {/* SIES GST */}
                        <span className="font-display font-bold text-[clamp(2.2rem,10vw,9rem)] tracking-tighter text-transparent bg-clip-text bg-[linear-gradient(110deg,#ffffff,45%,#3b82f6,55%,#ffffff)] bg-[length:250%_100%] animate-shine -mt-1 sm:-mt-3">
                            SIES GST
                        </span>

                        {/* Student Branch */}
                        <span className="student-branch font-tech text-base sm:text-xl md:text-2xl lg:text-3xl text-[var(--color-accent-light)] tracking-[0.15em] sm:tracking-[0.2em] uppercase mt-3 sm:mt-4">
                            Student Branch
                        </span>
                    </h1>

                    <p className="hero-tagline font-light mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-center max-w-2xl mx-auto leading-relaxed text-blue-100/60 px-2">
                        Igniting innovation at SIES Graduate School of Technology. <br className="hidden md:block" />
                        Your gateway to technical excellence and professional growth.
                    </p>

                    <div className="hero-buttons flex flex-wrap gap-4 sm:gap-6 justify-center mt-8 sm:mt-10">
                        <a href="#events" className="btn btn-primary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium tracking-wide text-sm sm:text-base">
                            Explore Events
                        </a>
                        <NavLink to="/team" className="btn btn-secondary px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium tracking-wide border-white/20 hover:bg-white/5 text-sm sm:text-base">
                            Meet the Council
                        </NavLink>
                    </div>
                </div>

                {/* Rotating Scroll Badge */}
                <a href="#aboutus" className="scroll-indicator absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 group cursor-pointer">
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center">
                        <svg className="w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                            <defs>
                                <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                            </defs>
                            <text fontSize="11" fill="currentColor" letterSpacing="2">
                                <textPath href="#circle" className="text-[var(--color-text-muted)] font-tech uppercase">
                                    • Scroll to Explore • Scroll to Explore
                                </textPath>
                            </text>
                        </svg>
                        <ChevronDown className="absolute w-5 h-5 sm:w-6 sm:h-6 text-white/50 group-hover:text-white transition-colors" />
                    </div>
                </a>
            </section>
        </>
    )
}

export default Hero