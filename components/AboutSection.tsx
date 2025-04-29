'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  const education = [
    {
      degree: "Masters of Engineering",
      field: "Electrical and Computer Engineering",
      institution: "University of Toronto (Toronto, Canada)",
      duration: "2024 - 2025",
      description: "Emphasis: Machine Learning, Data Analysis, Computer Engineering. GPA: 4.0/4.0",
    },
    {
      degree: "Bachelor of Applied Science",
      field: "Mechatronic Systems Engineering",
      institution: "Simon Fraser University (Burnaby, Canada)",
      duration: "Sept 2018 - Sept 2023",
      description: "With Distinction. Upper Division GPA: 3.76. CGPA: 3.53",
    },
    {
      degree: "Lean Six Sigma",
      field: "Black Belt",
      institution: "Certification",
      duration: "2022",
      description: "Process improvement methodology focused on eliminating defects and reducing variation.",
    },
    {
      degree: "High School",
      field: "IB Diploma",
      institution: "Dubai, U.A.E",
      duration: "2014 - 2018",
      description: "International Baccalaureate program with focus on mathematics and sciences.",
    }
  ];

  return (
    <section id="about" className="py-20 bg-black relative overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-primary/90 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-heading text-center">About Me</h2>
          
          {/* Profile Image with UI/UX Design */}
          <div className="flex justify-center mb-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-blue to-accent-green rounded-full blur-md opacity-75"></div>
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/10 shadow-lg">
                <Image 
                  src="/images/my_picture.jpg" 
                  alt="Gaurav Kashyap" 
                  width={240} 
                  height={240}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </motion.div>
          </div>
          
          <div className="mb-12 text-lg md:text-xl text-secondary/90 leading-relaxed">
            <p className="mb-6">
              I'm Gaurav Kashyap — a Full Stack AI Engineer with a strong foundation in Embedded Systems, 
              Machine Learning, and Scalable Full-Stack Web Development. With a Master's from the University 
              of Toronto (GPA 4.0/4.0) and hands-on industry experience, I create intelligent solutions that 
              bridge hardware, AI, and cloud technologies.
            </p>
            <p className="mb-6">
              My academic journey reflects my commitment to excellence, graduating with distinction from Simon Fraser University
              and consistently earning recognition on the President's and Dean's Honor Rolls. I combine my technical expertise
              with strong problem-solving skills to build innovative applications that deliver exceptional user experiences.
            </p>
          </div>

          <div className="space-y-10">
            <h3 className="text-2xl font-semibold mb-6">Education</h3>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-accent-blue/30 transition-all duration-300">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-medium">
                        {edu.degree}
                        {edu.field && <span className="text-accent-blue"> • {edu.field}</span>}
                      </h4>
                      <p className="text-secondary/80">{edu.institution}</p>
                      <p className="text-sm text-secondary/80 mt-2">{edu.description}</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-4 md:min-w-28 flex items-start justify-end">
                      <span className="text-sm font-medium bg-accent-blue/20 text-accent-blue px-3 py-1 rounded-full">
                        {edu.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection 