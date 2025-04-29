'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'

interface Experience {
  id: number
  company: string
  position: string
  period: string
  description: string
  fullDescription?: string[]
  skills: string[]
  slug: string
  responsibilities?: string[]
  achievements?: string[]
}

const experiencesData: Experience[] = [
  {
    id: 1,
    company: 'Vivvion',
    position: 'Software Engineer',
    period: 'Dec 2023 - Sept 2024',
    description: 'Transitioned a hardware-first platform into a modern, software-driven ecosystem by integrating serverless cloud architecture (AWS Lambda, DynamoDB, S3) with embedded systems via BLE for real-time analytics and ad delivery.',
    fullDescription: [
      'At Vivvion, I transitioned a traditionally hardware-first embedded platform into a modern, software-driven ecosystem by integrating serverless cloud architecture, scalable backend workflows, and real-time data intelligence.',
      'I led the redesign of firmware and system communication layers to feed real-time usage metrics into cloud-based storage (S3) and DynamoDB, unlocking actionable insights for client-facing advertisement devices.',
      'I also implemented AWS Lambda-powered microservices for data processing, performance optimization, and secured logging — enabling reliable, low-latency ad delivery across all devices.'
    ],
    skills: ['Python', 'AWS Lambda', 'DynamoDB', 'S3', 'API Gateway', 'Serverless Architecture', 'C/C++', 'Bluetooth Low Energy', 'Security Protocols', 'Data Optimization'],
    slug: 'vivvion',
    responsibilities: [
      'Designed scalable software pipelines using AWS Lambda and API Gateway for managing advertisement lifecycle and user interaction analytics.',
      'Integrated AWS DynamoDB to store time-series engagement data and improve ad targeting accuracy.',
      'Connected BLE-based embedded systems to cloud workflows via secure MQTT/WebSocket bridges.',
      'Architected fault-tolerant Python-based cloud functions to optimize ad presentation schedules dynamically based on historical data.',
      'Configured AWS S3 buckets to host and version ad assets, ensuring zero-downtime deployment of display content.',
      'Implemented encryption and session-based access control to meet compliance and security standards.'
    ],
    achievements: [
      'Reduced real-time sync delays by 40% by replacing polling firmware logic with event-driven cloud functions.',
      'Achieved 99.9% uptime for device–cloud sync by refactoring legacy Bluetooth handlers into modular, retry-safe services.',
      'Designed a distributed content delivery approach using S3 and signed URLs, cutting average display load time by 60%.',
      'Enabled real-time performance dashboards by streaming interaction logs from devices into DynamoDB + CloudWatch.'
    ]
  },
  {
    id: 2,
    company: 'Illumina Technology',
    position: 'Embedded Engineer',
    period: 'May 2022 - October 2023',
    description: 'Programmed ARM® Cortex™-M4F Tiva™ Microcontroller using C++ for data transmission, ADC conversion, digital signal processing, and control of infrared LED units.',
    fullDescription: [
      'At Illumina Technology, I specialized in embedded systems development for sophisticated medical and scientific devices.',
      'My primary focus was programming the ARM® Cortex™-M4F Tiva™ Microcontroller using C++ to handle critical data processing and hardware control functions.',
      'The role involved developing solutions for real-time data transmission, analog-to-digital conversion, digital signal processing, and precise control of infrared LED arrays.'
    ],
    skills: ['ARM Cortex', 'C++', 'RTOS', 'Sensor Integration', 'Digital Signal Processing'],
    slug: 'illumina',
    responsibilities: [
      'Programmed ARM® Cortex™-M4F Tiva™ Microcontroller using C++ for complex embedded applications',
      'Developed and integrated firmware with RTOS to enhance real-time computing',
      'Integrated various sensors and actuators into embedded systems',
      'Developed algorithms using Python to enhance CCD sensor accuracy and control',
      'Handled communication protocols including UART, SPI, and I2C',
      'Applied DSP algorithms for data preprocessing and signal processing'
    ],
    achievements: [
      'Designed diagnostic probes integrating ML models that improved pattern recognition accuracy by 25%',
      'Reduced system failures by 30% through implementation of robust error detection protocols',
      'Improved real-time responsiveness by optimizing RTOS task scheduling and priorities',
      'Successfully integrated multiple sensor types with 99.8% reliability in production systems'
    ]
  },
  {
    id: 3,
    company: 'Algo',
    position: 'Electronics Engineer',
    period: 'January 2022 - April 2022',
    description: 'Developed embedded firmware for communication devices, using C++ and Python to ensure efficient system control and data validation.',
    fullDescription: [
      'During my time at Algo, I worked as an Electronics Engineer focused on developing sophisticated embedded firmware for communication devices.',
      'I utilized both C++ and Python programming languages to create reliable control systems with robust data validation capabilities.',
      'My work involved optimizing low-level firmware for performance while ensuring data integrity and system stability.'
    ],
    skills: ['C++', 'Python', 'Firmware Development', 'CPU Performance Tuning'],
    slug: 'algo',
    responsibilities: [
      'Developed embedded firmware for communication devices using C++ and Python',
      'Focused on low-level firmware development for real-time performance',
      'Applied CPU performance tuning and hardware timing techniques',
      'Collaborated with verification teams to automate unit testing',
      'Optimized data transfer across communication channels'
    ],
    achievements: [
      'Improved processing speed by 35% through advanced CPU performance tuning',
      'Achieved 20% better data throughput by optimizing communication protocols',
      'Automated 90% of unit testing processes, improving test coverage and reliability',
      'Reduced firmware size by 15% while maintaining all functionality'
    ]
  }
];

export default function ExperienceDetails() {
  const params = useParams();
  const [experience, setExperience] = useState<Experience | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the experience based on the slug
    const slug = params.slug as string;
    const foundExperience = experiencesData.find(e => e.slug === slug);
    
    if (foundExperience) {
      setExperience(foundExperience);
    }
    
    setLoading(false);
  }, [params.slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-accent-blue"></div>
      </div>
    );
  }

  if (!experience) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Experience Not Found</h1>
        <p className="mb-6">Sorry, the work experience you're looking for doesn't exist.</p>
        <Link 
          href="/#experience" 
          className="btn btn-primary"
        >
          Back to Experience
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16 min-h-screen bg-black">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/#experience" 
            className="inline-flex items-center text-secondary/80 hover:text-accent-blue transition-colors"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 mr-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Experience
          </Link>
        </div>

        {/* Experience Header */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 mb-8">
          <div className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h1 className="text-3xl md:text-4xl font-bold">{experience.position}</h1>
                  <h2 className="text-xl md:text-2xl text-secondary/90 mt-2">{experience.company}</h2>
                </div>
                <span className="mt-4 md:mt-0 text-sm font-medium bg-accent-blue/20 text-accent-blue px-3 py-1 rounded-full">
                  {experience.period}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {experience.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-sm font-medium bg-white/10 text-secondary/80 px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="space-y-4 text-lg text-secondary/90 leading-relaxed mb-8">
                {experience.fullDescription?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Display diagnostic probe images for Illumina experience */}
              {experience.slug === 'illumina' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-semibold mb-4 text-accent-blue">Diagnostic Probes Developed</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                      <div className="p-4">
                        <img 
                          src="/images/BC.png" 
                          alt="Breast Cancer Diagnostic Probe" 
                          className="w-full h-auto rounded-lg"
                        />
                        <p className="mt-3 text-center text-secondary/80 text-sm">
                          Breast Cancer Diagnostic Probe - Specialized sensor design
                        </p>
                      </div>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                      <div className="p-4">
                        <img 
                          src="/images/RA.png" 
                          alt="Multi-condition Diagnostic Probe" 
                          className="w-full h-auto rounded-lg"
                        />
                        <p className="mt-3 text-center text-secondary/80 text-sm">
                          All-in-One Probe for Temporal Arteritis, Breast Cancer, and Rheumatoid Arthritis
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Experience Details Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Responsibilities */}
          {experience.responsibilities && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6"
            >
              <h2 className="text-2xl font-semibold mb-4 text-accent-blue">Responsibilities</h2>
              <ul className="space-y-3">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-accent-blue mr-2 mt-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Achievements */}
          {experience.achievements && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6"
            >
              <h2 className="text-2xl font-semibold mb-4 text-accent-blue">Key Achievements</h2>
              <ul className="space-y-3">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-accent-green mr-2 mt-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {/* Navigation to other experiences */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6">Other Experience</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experiencesData
              .filter(e => e.id !== experience.id)
              .map(e => (
                <Link 
                  key={e.id} 
                  href={`/experience/${e.slug}`}
                  className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4 hover:border-accent-blue/30 transition-all duration-300"
                >
                  <div className="flex flex-col">
                    <span className="font-semibold">{e.position}</span>
                    <span className="text-secondary/80">{e.company}</span>
                    <span className="text-xs text-secondary/60 mt-1">{e.period}</span>
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
} 