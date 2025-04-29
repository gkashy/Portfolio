'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

type JourneyPoint = {
  id: number
  year: string
  title: string
  description: string
  challenge?: string
  triumph?: string
  quote?: string
  isHighlight?: boolean
}

const journeyPoints: JourneyPoint[] = [
  {
    id: 1,
    year: '2018',
    title: 'High School Graduation & First Setback',
    description: 'Graduated from high school in Dubai with an IB Diploma. My dream of attending UBC was shattered when my admission was revoked due to math scores not matching predicted grades.',
    challenge: 'All universities had closed admissions by then. Faced the tough choice: wait a year or attend community college.',
    quote: 'It was my first real taste of failure, and it hit hard.'
  },
  {
    id: 2,
    year: '2018-2019',
    title: 'The Pivot: Community College',
    description: 'Joined a community college despite feeling it wasn\'t where I belonged. Refused to let math be my weakness.',
    triumph: 'Dedicated myself to mastering mathematics, eventually becoming proficient enough to tutor others.',
    quote: 'I transformed my greatest weakness into a source of strength.'
  },
  {
    id: 3,
    year: '2019',
    title: 'The Comeback: Transfer to SFU',
    description: 'Successfully transferred to Simon Fraser University\'s Mechatronic Systems Engineering program.',
    triumph: 'Proved to myself that setbacks are temporary with the right mindset.',
    isHighlight: true
  },
  {
    id: 4,
    year: '2021',
    title: 'Health Crisis & Life Reflection',
    description: 'Faced serious health issues in my third year that forced me to take a year off. Had a profound confrontation with mortality.',
    challenge: 'Everything I had worked for seemed to be slipping away. Full existential crisis.',
    quote: 'When you stare death in the face, you gain perspective on what truly matters.'
  },
  {
    id: 5,
    year: '2022',
    title: 'The Fearless Return',
    description: 'Returned to university with a completely transformed mindset. Nothing could intimidate me anymore after what I\'d faced.',
    triumph: 'Achieved perfect grades while developing new skills in sales and personal development.',
    quote: 'Once you face your mortality, everyday challenges lose their power over you.',
    isHighlight: true
  },
  {
    id: 6,
    year: '2023-2024',
    title: 'Masters at University of Toronto',
    description: 'Admitted to University of Toronto\'s Master\'s program in Electrical and Computer Engineering.',
    triumph: 'Maintaining perfect 4.0 GPA while balancing multiple ambitious side projects.',
    quote: 'I don\'t build brands. I am the brand.',
    isHighlight: true
  },
  {
    id: 7,
    year: 'Present & Beyond',
    title: 'Unstoppable Momentum',
    description: 'Continuing to excel in every challenge I face, developing revolutionary products, and embracing my fearless approach to life.',
    quote: 'I\'m here to win. Nothing stops me. Nothing scares me. I can do anything I set my mind to—that is my superpower.',
    isHighlight: true
  }
]

const JourneySection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })
  const [expandedPoint, setExpandedPoint] = useState<number | null>(null)

  const toggleExpand = (id: number) => {
    setExpandedPoint(expandedPoint === id ? null : id)
  }

  return (
    <section id="journey" className="py-20 bg-black relative overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-primary/90 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={sectionRef}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-heading text-center">My Journey</h2>
          <p className="text-center text-secondary/70 max-w-3xl mx-auto mb-12">
            The path that forged my resilience and shaped my unstoppable mindset
          </p>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 h-[calc(100%-10rem)] w-1 bg-gradient-to-b from-accent-blue via-accent-green to-accent-blue"></div>
          
            {/* Journey Points */}
            <div className="space-y-12">
              {journeyPoints.map((point, index) => (
                <motion.div 
                  key={point.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 + 0.3 } 
                  } : {}}
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 mt-6 flex items-center justify-center">
                    <div className={`w-4 h-4 rounded-full ${point.isHighlight ? 'bg-accent-green' : 'bg-accent-blue'} z-10`}></div>
                  </div>
                  
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                    <div className="mb-2 flex items-center">
                      <span className={`text-sm font-medium ${point.isHighlight ? 'bg-accent-green/20 text-accent-green' : 'bg-accent-blue/20 text-accent-blue'} px-3 py-1 rounded-full`}>
                        {point.year}
                      </span>
                    </div>
                    <div 
                      className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border ${point.isHighlight ? 'border-accent-green/30' : 'border-white/10'} hover:border-accent-blue/30 transition-all duration-300 cursor-pointer`}
                      onClick={() => toggleExpand(point.id)}
                    >
                      <h4 className="text-xl font-semibold mb-2">{point.title}</h4>
                      <p className="text-secondary/80 mb-3">{point.description}</p>
                      
                      {expandedPoint === point.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          className="space-y-3"
                        >
                          {point.challenge && (
                            <div className="bg-red-900/20 border border-red-900/30 rounded-lg p-3">
                              <p className="text-sm text-secondary/90"><span className="font-medium text-red-400">Challenge:</span> {point.challenge}</p>
                            </div>
                          )}
                          
                          {point.triumph && (
                            <div className="bg-green-900/20 border border-green-900/30 rounded-lg p-3">
                              <p className="text-sm text-secondary/90"><span className="font-medium text-green-400">Triumph:</span> {point.triumph}</p>
                            </div>
                          )}
                          
                          {point.quote && (
                            <div className="mt-4 border-l-4 border-accent-blue pl-4 italic">
                              "{point.quote}"
                            </div>
                          )}
                        </motion.div>
                      )}
                      
                      <div className="mt-3 text-xs text-accent-blue">
                        {expandedPoint === point.id ? 'Click to collapse' : 'Click to expand'}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Final Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0, transition: { delay: 0.8 } } : {}}
              className="text-center mt-24 pt-8 max-w-2xl mx-auto relative z-10"
            >
              <div className="text-xl md:text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-green">
                The trajectory continues upward...
              </div>
              <p className="text-secondary/80">
                Every obstacle I've faced has only made me stronger. I take on challenges not just to overcome them, but to transform them into stepping stones for even greater achievements.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default JourneySection 