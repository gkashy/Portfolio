'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold group relative">
          <div className="absolute -inset-1 bg-white/5 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative flex items-center">
            <span className="text-white tracking-wider font-extralight">GAURAV</span>
            <span className="text-white font-bold ml-2 tracking-tight">KASHYAP</span>
            <span className="h-2 w-2 rounded-full bg-accent-blue ml-2 animate-pulse"></span>
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="#about"
            className="text-secondary/80 hover:text-secondary transition-colors"
          >
            About
          </Link>
          <Link
            href="#experience"
            className="text-secondary/80 hover:text-secondary transition-colors"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="text-secondary/80 hover:text-secondary transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            className="text-secondary/80 hover:text-secondary transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#awards"
            className="text-secondary/80 hover:text-secondary transition-colors"
          >
            Awards
          </Link>
          <Link
            href="#journey"
            className="text-secondary/80 hover:text-secondary transition-colors"
          >
            Journey
          </Link>
          <Link
            href="#contact"
            className="text-secondary/80 hover:text-secondary transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-black/95 backdrop-blur-md shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'max-h-[300px] py-4' : 'max-h-0 overflow-hidden'
        }`}
      >
        <nav className="flex flex-col space-y-4 px-4 pb-4">
          <Link
            href="#about"
            onClick={() => setIsMenuOpen(false)}
            className="text-secondary/80 hover:text-secondary transition-colors"
          >
            About
          </Link>
          <Link
            href="#experience"
            onClick={() => setIsMenuOpen(false)}
            className="text-secondary/80 hover:text-secondary transition-colors"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            onClick={() => setIsMenuOpen(false)}
            className="text-secondary/80 hover:text-secondary transition-colors"
          >
            Projects
          </Link>
          <Link
            href="#skills"
            onClick={() => setIsMenuOpen(false)}
            className="text-secondary/80 hover:text-secondary transition-colors"
          >
            Skills
          </Link>
          <Link
            href="#awards"
            onClick={() => setIsMenuOpen(false)}
            className="text-secondary/80 hover:text-secondary transition-colors"
          >
            Awards
          </Link>
          <Link
            href="#journey"
            onClick={() => setIsMenuOpen(false)}
            className="text-secondary/80 hover:text-secondary transition-colors"
          >
            Journey
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsMenuOpen(false)}
            className="text-secondary/80 hover:text-secondary transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header 