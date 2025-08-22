import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50 backdrop-blur-md bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <NavLink to='' className="flex-shrink-0 group cursor-pointer">
            <div className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-all duration-300 transform group-hover:scale-105">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Logo
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <NavLink 
                  to="" 
                  className="relative text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 group"
                >
                  <span className="relative z-10">Person</span>
                  <span className="absolute inset-0 bg-blue-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="event" 
                  className="relative text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-all duration-300 group"
                >
                  <span className="relative z-10">Event</span>
                  <span className="absolute inset-0 bg-blue-50 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 ease-out"></span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="relative inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-50 rounded-lg mt-2 mb-4">
            <a
              href="#person"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-white rounded-md transition-all duration-200 transform hover:translate-x-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                Person
              </span>
            </a>
            <a
              href="#event"
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-white rounded-md transition-all duration-200 transform hover:translate-x-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                Event
              </span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Subtle bottom border animation */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-20"></div>
    </nav>
  )
}

export default Navbar