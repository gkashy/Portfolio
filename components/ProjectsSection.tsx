'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  image: string
  website: string
  period: string
  slug: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'HelloGenie AI',
    description: 'Voice-powered AI platform for business automation (calls, tasks, operations).',
    tech: ['Node.js', 'React', 'Supabase', 'OpenAI', 'Voximplant'],
    image: '/images/Hello_genie.png',
    website: 'https://hellogenieai.com',
    period: 'Jan 2023 - Present',
    slug: 'hellogenie-ai'
  },
  {
    id: 2,
    title: 'The Delivery Company',
    description: 'AI-driven delivery platform optimizing routes, real-time tracking, customer management.',
    tech: ['Supabase', 'Mapbox', 'OR-Tools', 'AWS Lambda'],
    image: '/images/Thedeliverycompany.png',
    website: 'https://thedeliverycompany.net',
    period: 'Mar 2023 - Dec 2023',
    slug: 'delivery-company'
  },
  {
    id: 3,
    title: 'ToolBox',
    description: 'AI tool generator: Analyzes Supabase schemas and dynamically builds backend tools.',
    tech: ['React', 'FastAPI', 'Supabase Management API', 'OpenAI API'],
    image: '/images/toolbox_logo.png',
    website: 'https://toolboxmcp.com',
    period: 'Sep 2022 - Feb 2023',
    slug: 'toolbox'
  },
  {
    id: 4,
    title: 'Smart Hospital Bed ML',
    description: 'Voice-controlled hospital bed system with ML-powered patient monitoring.',
    tech: ['Python', 'TensorFlow', 'Arduino', 'C++'],
    image: '/images/Hospital.png',
    website: '',
    period: 'Feb 2023 - July 2023',
    slug: 'smart-hospital-bed'
  },
  {
    id: 5,
    title: 'Home Automation System',
    description: 'Raspberry Pi-based home automation with ML-powered voice commands and scheduling.',
    tech: ['Raspberry Pi', 'Python', 'TensorFlow Lite', 'MQTT'],
    image: '/images/home automation.png',
    website: '',
    period: 'Aug 2022 - Jan 2023',
    slug: 'home-automation'
  },
  {
    id: 6,
    title: 'Arcade Game',
    description: 'Embedded arcade game implemented in C on ARM Cortex microcontroller.',
    tech: ['C', 'ARM Cortex', 'STM32', 'RTOS'],
    image: '/images/Arcade2.png',
    website: '',
    period: 'July 2022 - Nov 2022',
    slug: 'arcade-game'
  }
]

const ProjectCard = ({ project }: { project: Project }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, threshold: 0.1 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-accent-blue/30 transition-all duration-300 group"
    >
      <div className="h-48 bg-gradient-to-br from-accent-blue/20 to-accent-green/10 relative">
        {project.image && (
          <div className="absolute inset-0 flex items-center justify-center">
            <Image 
              src={project.image} 
              alt={project.title}
              width={200}
              height={150}
              className="object-contain w-full h-full p-4"
            />
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className="text-xs font-medium bg-black/60 text-secondary/90 px-2 py-1 rounded-full">
            {project.period}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-accent-blue transition-colors">{project.title}</h3>
        <p className="text-secondary/70 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="text-xs font-medium bg-white/10 text-secondary/80 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          {project.website ? (
            <a 
              href={project.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-blue hover:text-accent-green text-sm font-medium transition-colors flex items-center"
            >
              Visit Website
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
          ) : (
            <div></div>
          )}
          <Link 
            href={`/projects/${project.slug}`}
            className="text-accent-blue hover:text-accent-green text-sm font-medium transition-colors flex items-center"
          >
            View Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

const ProjectsSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-primary/90 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-heading text-center">Featured Projects</h2>
          <p className="text-center text-secondary/70 max-w-3xl mx-auto mb-12">
            A selection of my recent work in AI, machine learning, and full-stack development.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection 