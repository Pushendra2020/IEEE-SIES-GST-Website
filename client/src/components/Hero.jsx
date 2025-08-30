// import React, { useEffect } from 'react'
// import { NavLink } from 'react-router-dom'
// import { gsap } from 'gsap'
// import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
// import '../index.css'
// import '../custom.css'
//  import { useMainEffects } from "../mainScript";
// // Register the ScrollToPlugin
// gsap.registerPlugin(ScrollToPlugin)

// const Hero = () => {
//     useMainEffects()
//     useEffect(() => {
//         // Smooth scroll function
//         const smoothScroll = (target, duration = 1.5) => {
//             gsap.to(window, {
//                 duration: duration,
//                 scrollTo: {
//                     y: target,
//                     offsetY: 0
//                 },
//                 ease: "power2.inOut"
//             })
//         }

//         // Add click event listeners to navigation links
//         const navLinks = document.querySelectorAll('.nav-link, .down-arrow')

//         navLinks.forEach(link => {
//             link.addEventListener('click', (e) => {
//                 e.preventDefault()
//                 const href = link.getAttribute('href')

//                 if (href && href.startsWith('#')) {
//                     const targetId = href.substring(1)
//                     const targetElement = document.getElementById(targetId)

//                     if (targetElement) {
//                         smoothScroll(targetElement)
//                     }
//                 }
//             })
//         })

//         // Cleanup event listeners on component unmount
//         return () => {
//             navLinks.forEach(link => {
//                 link.removeEventListener('click', smoothScroll)
//             })
//         }
//     }, [])

//     return (
//         <>
//             <div className="bg-elements">
//                 <div className="grid"></div>
//                 <div className="stars"></div>
//                 <div className="shape shape1"></div>
//                 <div className="shape shape2"></div>
//                 <div className="shape shape3"></div>
//                 <div className="shape shape4"></div>
//                 <div id="starfield-container"></div>
//             </div>
//             <div className="hero-container" id="home">
//                 <div className="retro-text" data-text="IEEE-SIESGST">IEEE-SIESGST</div>
//                 <div className="hero-tagline">Excellence through innovation</div>
//                 <nav className="navbar">
//                     <ul className="nav-menu">
//                         <li className="nav-item"><a href="#home" className="nav-link text-white">Home</a></li>
//                         <li className="nav-item">
//                             <a href="#aboutus" className="nav-link text-white">About_Us</a>
//                         </li>
//                         <li className="nav-item">
//                             <a href="#events" className="nav-link text-white">Events</a>
//                         </li>
//                         <li className="nav-item">
//                             <a href="#gallery" className="nav-link text-white">Gallery</a>
//                         </li>
//                         <li className="nav-item">
//                             <a href="#contact" className="nav-link text-white">Contact</a>
//                         </li>
//                     </ul>
//                 </nav>
//                 <NavLink to="/team" className="enter-button">OUR TEAM</NavLink>
//                 <a href="#aboutus" className="down-arrow">
//                     <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
//                         <path
//                             d="M12 20L24 32L36 20"
//                             stroke="#00c3ff"
//                             strokeWidth="4"
//                             strokeLinecap="round"
//                             strokeLinejoin="round"
//                         />
//                     </svg>
//                 </a>
//             </div>
//         </>
//     )
// }

// export default Hero










import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import '../index.css'
import '../custom.css'
import logo from "../assets/siesLogo.png";
import { useMainEffects } from "../mainScript";
// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin)

const Hero = () => {
    const heroTextRef = useRef(null)
    const taglineRef = useRef(null)
    useMainEffects()
    useEffect(() => {
        // Smooth scroll function
        const smoothScroll = (target, duration = 1.5) => {
            gsap.to(window, {
                duration: duration,
                scrollTo: {
                    y: target,
                    offsetY: 0
                },
                ease: "power2.inOut"
            })
        }

        // Add click event listeners to navigation links
        const navLinks = document.querySelectorAll('.nav-link, .down-arrow')

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault()
                const href = link.getAttribute('href')

                if (href && href.startsWith('#')) {
                    const targetId = href.substring(1)
                    const targetElement = document.getElementById(targetId)

                    if (targetElement) {
                        smoothScroll(targetElement)
                    }
                }
            })
        })

        // Navbar shake effect on hover
        const navItems = document.querySelectorAll('.nav-link')

        navItems.forEach(item => {
            let shakeAnimation = null

            const startShake = () => {
                // Start continuous shake animation
                shakeAnimation = gsap.to(item, {
                    x: "+=3",
                    duration: 0.1,
                    repeat: -1,
                    yoyo: true,
                    ease: "power2.inOut"
                })
            }

            const stopShake = () => {
                // Stop shake and return to original position
                if (shakeAnimation) {
                    shakeAnimation.kill()
                }
                gsap.to(item, {
                    x: 0,
                    duration: 0.3,
                    ease: "power2.out"
                })
            }

            item.addEventListener('mouseenter', startShake)
            item.addEventListener('mouseleave', stopShake)
        })

        // Magnetic cursor effect for navbar items
        navItems.forEach(item => {
            const handleNavMouseMove = (e) => {
                const rect = item.getBoundingClientRect()
                const centerX = rect.left + rect.width / 2
                const centerY = rect.top + rect.height / 2

                const mouseX = e.clientX
                const mouseY = e.clientY

                const deltaX = mouseX - centerX
                const deltaY = mouseY - centerY
                const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

                const maxDistance = 100 // Smaller radius for navbar items
                const maxMove = 8 // Smaller movement for navbar

                if (distance < maxDistance && distance > 0) {
                    const strength = (maxDistance - distance) / maxDistance
                    const moveX = (deltaX / distance) * maxMove * strength
                    const moveY = (deltaY / distance) * maxMove * strength

                    gsap.to(item, {
                        x: moveX,
                        y: moveY,
                        duration: 0.3,
                        ease: "power2.out"
                    })
                }
            }

            const handleNavMouseLeave = () => {
                gsap.to(item, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out"
                })
            }

            item.addEventListener('mousemove', handleNavMouseMove)
            item.addEventListener('mouseleave', handleNavMouseLeave)
        })

        // Magnetic cursor effect for hero text
        const heroContainer = document.querySelector('.hero-container')

        const handleMouseMove = (e) => {
            const rect = heroContainer.getBoundingClientRect()
            const centerX = rect.left + rect.width / 2
            const centerY = rect.top + rect.height / 2

            const mouseX = e.clientX
            const mouseY = e.clientY

            // Calculate distance and direction from center to mouse
            const deltaX = mouseX - centerX
            const deltaY = mouseY - centerY
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY)

            // Magnetic effect strength (adjust these values to control the effect)
            const maxDistance = 300 // Maximum distance for effect
            const maxMove = 20 // Maximum pixels to move text

            if (distance < maxDistance) {
                const strength = (maxDistance - distance) / maxDistance
                const moveX = (deltaX / distance) * maxMove * strength
                const moveY = (deltaY / distance) * maxMove * strength

                // Apply magnetic effect to hero text
                if (heroTextRef.current) {
                    gsap.to(heroTextRef.current, {
                        x: moveX,
                        y: moveY,
                        duration: 0.3,
                        ease: "power2.out"
                    })
                }

                // Apply magnetic effect to tagline (with less intensity)
                if (taglineRef.current) {
                    gsap.to(taglineRef.current, {
                        x: moveX * 0.7,
                        y: moveY * 0.7,
                        duration: 0.3,
                        ease: "power2.out"
                    })
                }
            }
        }

        const handleMouseLeave = () => {
            // Return text to original position when mouse leaves
            if (heroTextRef.current) {
                gsap.to(heroTextRef.current, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out"
                })
            }

            if (taglineRef.current) {
                gsap.to(taglineRef.current, {
                    x: 0,
                    y: 0,
                    duration: 0.5,
                    ease: "power2.out"
                })
            }
        }

        // Add mouse event listeners
        heroContainer.addEventListener('mousemove', handleMouseMove)
        heroContainer.addEventListener('mouseleave', handleMouseLeave)

        // Cleanup event listeners on component unmount
        return () => {
            navLinks.forEach(link => {
                link.removeEventListener('click', smoothScroll)
            })

            navItems.forEach(item => {
                // Clean up shake event listeners
                item.removeEventListener('mouseenter', () => { })
                item.removeEventListener('mouseleave', () => { })
                // Clean up magnetic event listeners
                item.removeEventListener('mousemove', () => { })
                item.removeEventListener('mouseleave', () => { })
            })

            heroContainer.removeEventListener('mousemove', handleMouseMove)
            heroContainer.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return (
        <>
            <div className="bg-elements">
                <div className="grid"></div>
                <div className="stars"></div>
                <div className="shape shape1"></div>
                <div className="shape shape2"></div>
                <div className="shape shape3"></div>
                <div className="shape shape4"></div>
                <div id="starfield-container"></div>
            </div>
            <div>
                <NavLink to='/'>
                    <img src={logo} alt="Logo" className=" ml-7 mt-7 h-20 w-20" />
                </NavLink>
            </div>
            <div className="hero-container" id="home">
                <div className="retro-text" data-text="IEEE-SIESGST" ref={heroTextRef}>IEEE-SIESGST</div>
                <div className="hero-tagline" ref={taglineRef}>Excellence through innovation</div>
                <nav className="navbar">
                    <ul className="nav-menu">
                        <li className="nav-item"><a href="#home" className="nav-link text-white">Home</a></li>
                        <li className="nav-item">
                            <a href="#aboutus" className="nav-link text-white">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a href="#events" className="nav-link text-white">Events</a>
                        </li>
                        <li className="nav-item">
                            <a href="#gallery" className="nav-link text-white">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className="nav-link text-white">Contact</a>
                        </li>
                    </ul>
                </nav>
                <NavLink to="/team" className="enter-button">OUR TEAM</NavLink>
                <a href="#aboutus" className="down-arrow">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path
                            d="M12 20L24 32L36 20"
                            stroke="#00c3ff"
                            strokeWidth="4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </a>
            </div>
        </>
    )
}

export default Hero