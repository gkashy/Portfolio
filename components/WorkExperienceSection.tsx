'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

interface Experience {
  id: number
  company: string
  position: string
  period: string
  description: string
  skills: string[]
  slug: string
}

const experiences: Experience[] = [
  {
    id: 1,
    company: 'Vivvion',
    position: 'Software Engineer',
    period: 'Dec 2023 - Sept 2024',
    description: 'Transitioned a hardware-first platform into a modern, software-driven ecosystem by integrating serverless cloud architecture (AWS Lambda, DynamoDB, S3) with embedded systems via BLE for real-time analytics and ad delivery.',
    skills: ['Python', 'AWS Lambda', 'DynamoDB', 'S3', 'Serverless', 'C/C++', 'Bluetooth Low Energy'],
    slug: 'vivvion'
  },
  {
    id: 2,
    company: 'Illumina Technology',
    position: 'Embedded Engineer',
    period: 'May 2022 - October 2023',
    description: 'Programmed ARM® Cortex™-M4F Tiva™ Microcontroller using C++ for data transmission, ADC conversion, digital signal processing, and control of infrared LED units.',
    skills: ['ARM Cortex', 'C++', 'RTOS', 'Sensor Integration', 'Digital Signal Processing'],
    slug: 'illumina'
  },
  {
    id: 3,
    company: 'Algo',
    position: 'Electronics Engineer',
    period: 'January 2022 - April 2022',
    description: 'Developed embedded firmware for communication devices, using C++ and Python to ensure efficient system control and data validation.',
    skills: ['C++', 'Python', 'Firmware Development', 'CPU Performance Tuning'],
    slug: 'algo'
  }
];

const ExperienceCard = ({ experience, index }: { experience: Experience, index: number }) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true, threshold: 0.1 })

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline line */}
      {index < experiences.length - 1 && (
        <div className="absolute left-[19px] top-8 w-0.5 h-full bg-white/20 z-0"></div>
      )}
      
      <div className="flex gap-6 mb-12">
        {/* Date pill */}
        <div className="relative z-10">
          <div className="w-10 h-10 rounded-full bg-accent-blue flex items-center justify-center shadow-lg">
            <span className="text-white font-bold">{index + 1}</span>
          </div>
        </div>
        
        {/* Content card */}
        <Link 
          href={`/experience/${experience.slug}`}
          className="flex-1 bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-accent-blue/30 transition-all duration-300 group"
        >
          <div className="flex flex-col md:flex-row justify-between mb-3">
            <div>
              <h3 className="text-xl font-semibold group-hover:text-accent-blue transition-colors">{experience.position}</h3>
              <p className="text-lg text-secondary/90">{experience.company}</p>
            </div>
            <div className="mt-2 md:mt-0">
              <span className="inline-block text-sm font-medium bg-accent-blue/20 text-accent-blue px-3 py-1 rounded-full">
                {experience.period}
              </span>
            </div>
          </div>
          
          <p className="text-secondary/70 mb-4">{experience.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, skillIndex) => (
              <span
                key={skillIndex}
                className="text-xs font-medium bg-white/10 text-secondary/80 px-2 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="mt-4 text-accent-blue group-hover:text-accent-green text-sm font-medium transition-colors flex items-center">
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
          </div>
        </Link>
      </div>
    </motion.div>
  )
}

const WorkExperienceSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-primary/90 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-heading text-center">Work Experience</h2>
          <p className="text-center text-secondary/70 max-w-3xl mx-auto mb-12">
            My professional journey in embedded systems, software engineering, and AI development
          </p>

          <div className="mt-12">
            {experiences.map((experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WorkExperienceSection 