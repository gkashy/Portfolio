'use client'

import Link from 'next/link'
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold group relative">
              <div className="relative flex items-center">
                <span className="text-white tracking-wider font-extralight">GAURAV</span>
                <span className="text-white font-bold ml-2 tracking-tight">KASHYAP</span>
                <span className="h-2 w-2 rounded-full bg-accent-blue ml-2 animate-pulse"></span>
              </div>
              <p className="text-secondary/60 mt-2 text-sm">
                Full Stack AI Engineer
              </p>
            </Link>
          </div>

          <div className="flex space-x-6 items-center">
            <a
              href="https://www.linkedin.com/in/gaurav-kashyap-909504172/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-secondary/80 hover:text-accent-blue transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-secondary/80 hover:text-accent-blue transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="mailto:gaurav404.gk@gmail.com"
              aria-label="Email"
              className="text-secondary/80 hover:text-accent-blue transition-colors"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center text-secondary/60 text-sm">
          <p>© {currentYear} Gaurav Kashyap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 