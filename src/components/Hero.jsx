import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import { ChevronDown, Menu, X } from 'lucide-react'
import logo from "../assets/siesLogo.webp"

gsap.registerPlugin(ScrollToPlugin)

const Hero = () => {
    const [scrolled, setScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)

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

        // Simple fade-in animation
        gsap.from('.hero-content > *', {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out"
        })

        return () => {
            window.removeEventListener('scroll', handleScroll)
            navLinks.forEach(link => link.removeEventListener('click', handleNavClick))
        }
    }, [])

    return (
        <>
            {/* Navbar */}
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="max-w-7xl mx-auto flex items-center justify-between relative px-4 sm:px-6">
                    <NavLink to="/" className="flex items-center gap-3 z-50">
                        <img src={logo} alt="IEEE SIES GST" className="w-10 h-10 sm:w-12 sm:h-12" />
                        <span className="text-white font-semibold text-sm sm:text-base hidden sm:block">IEEE SIES GST</span>
                    </NavLink>

                    {/* Desktop Menu */}
                    <ul className="nav-menu hidden md:flex">
                        <li><a href="#home" className="nav-link">Home</a></li>
                        <li><a href="#aboutus" className="nav-link">About</a></li>
                        <li><a href="#events" className="nav-link">Events</a></li>
                        <li><a href="#gallery" className="nav-link">Gallery</a></li>
                        <li><a href="#faqs" className="nav-link">FAQs</a></li>
                        <li><a href="#contact" className="nav-link">Contact</a></li>
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
                    <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                        <ul className="flex flex-col items-center gap-8 text-xl">
                            {['Home', 'About Us', 'Events', 'Gallery', 'FAQs', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={`#${item.toLowerCase().replace(' ', '')}`}
                                        className="text-white/80 hover:text-[var(--color-accent-light)] transition-colors"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <NavLink
                                    to="/team"
                                    className="btn btn-primary mt-4"
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
                {/* Decorative background glow for hero specifically */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-[var(--color-accent-deep)] opacity-20 rounded-full blur-[100px] pointer-events-none" />

                <div className="hero-content relative z-10 max-w-5xl mx-auto flex flex-col items-center">

                    {/* Floating pill badge */}
                    <div className="hero-badge backdrop-blur-md bg-white/5 border-white/10 px-6 py-2 rounded-full mb-8">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="font-tech text-sm tracking-widest uppercase text-[var(--color-text-secondary)]">IEEE SIES GST Student Branch</span>
                    </div>

                    {/* Massive Typography */}
                    <h1 className="hero-title flex flex-col items-center leading-none">
                        <span className="font-display font-light text-[clamp(3.5rem,10vw,8rem)] tracking-tight text-white/90">
                            IEEE
                        </span>
                        <span className="font-display font-bold text-[clamp(4rem,11vw,9rem)] tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 -mt-2 sm:-mt-4">
                            SIES GST
                        </span>
                        <span className="font-tech text-xl sm:text-2xl md:text-3xl text-[var(--color-accent-light)] tracking-[0.2em] uppercase mt-4">
                            Student Branch
                        </span>
                    </h1>

                    <p className="hero-tagline font-light mt-8 text-lg sm:text-xl text-center max-w-2xl mx-auto leading-relaxed text-blue-100/60">
                        Igniting innovation at SIES Graduate School of Technology. <br className="hidden md:block" />
                        Your gateway to technical excellence and professional growth.
                    </p>

                    <div className="flex flex-wrap gap-6 justify-center mt-10">
                        <a href="#events" className="btn btn-primary px-8 py-4 rounded-full font-medium tracking-wide">
                            Explore Events
                        </a>
                        <NavLink to="/team" className="btn btn-secondary px-8 py-4 rounded-full font-medium tracking-wide border-white/20 hover:bg-white/5">
                            Meet the Council
                        </NavLink>
                    </div>
                </div>

                {/* Rotating Scroll Badge */}
                <a href="#aboutus" className="absolute bottom-10 left-1/2 -translate-x-1/2 group cursor-pointer scroll-indicator">
                    <div className="relative w-24 h-24 flex items-center justify-center">
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
                        <ChevronDown className="absolute w-6 h-6 text-white/50 group-hover:text-white transition-colors" />
                    </div>
                </a>
            </section>
        </>
    )
}

export default Hero