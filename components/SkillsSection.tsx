'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface SkillCategory {
  title: string
  icon: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Development",
    icon: "⚙️",
    skills: [
      "Full-Stack Development (ReactJS, Node.js, Next.js)",
      "API Development & Integration (REST, GraphQL)",
      "Supabase, PostgreSQL, Firebase",
      "FastAPI, Express",
      "HTML5, CSS3, TailwindCSS",
      "JavaScript (ES6+), TypeScript",
      "C/C++",
      "Python",
      "SQL",
      "MATLAB",
      "Assembly (low-level firmware)"
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      "AWS Lambda (Serverless Computing)",
      "AWS S3, API Gateway",
      "CI/CD Pipelines (GitHub Actions)",
      "Docker, Containerization",
      "Deployment Automation"
    ]
  },
  {
    title: "AI & Parallel Computing",
    icon: "🧠",
    skills: [
      "OpenAI API / LLM Integration",
      "Deepgram (STT), TTS APIs",
      "Multithreading & Parallel Programming (C++, Python)",
      "Distributed Systems (MPI, CUDA concepts)",
      "Optimization Algorithms (OR-Tools, Kalman Filters)"
    ]
  },
  {
    title: "Tooling & Infrastructure",
    icon: "🧰",
    skills: [
      "Supabase Management API",
      "OAuth 2.0 PKCE Flow",
      "WebSockets & Real-Time Systems",
      "Google Cloud (Function-based architecture)",
      "Mapbox / Location APIs"
    ]
  },
  {
    title: "Soft Skills & Methodologies",
    icon: "👥",
    skills: [
      "Strong Problem-Solving Abilities",
      "Creativity: Out-of-the-box thinker",
      "Team Collaboration (cross-functional teams)",
      "Agile & Scrum Workflow",
      "Verbal & Written Communication (technical clarity)",
      "Organizational & Project Leadership"
    ]
  }
];

const SkillCategory = ({ category, index }: { category: SkillCategory; index: number }) => {
  const categoryRef = useRef(null)
  const isInView = useInView(categoryRef, { once: true, threshold: 0.1 })

  return (
    <motion.div
      ref={categoryRef}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 hover:border-accent-blue/30 transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-3">{category.icon}</span>
        <h3 className="text-xl font-semibold">{category.title}</h3>
      </div>
      <div className="space-y-2">
        {category.skills.map((skill, skillIndex) => (
          <div 
            key={skillIndex}
            className="flex items-center"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent-blue mr-2"></div>
            <span className="text-secondary/90">{skill}</span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

const SkillsSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.2 })

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-primary/90 z-0"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-heading text-center">Technical Skills</h2>
          <p className="text-center text-secondary/70 max-w-3xl mx-auto mb-12">
            Technologies and methodologies I've mastered across my professional journey
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {skillCategories.map((category, index) => (
              <SkillCategory key={category.title} category={category} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default SkillsSection 