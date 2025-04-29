'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useParams } from 'next/navigation'

interface Project {
  id: number
  title: string
  description: string
  fullDescription?: string[]
  tech: string[]
  image: string
  website: string
  period: string
  slug: string
  features?: string[]
  challenges?: string[]
  solutions?: string[]
  gallery?: string[]
}

// This would ideally come from an API or CMS
const projectsData: Project[] = [
  {
    id: 1,
    title: 'HelloGenie AI',
    description: 'Voice-powered AI platform for business automation (calls, tasks, operations).',
    fullDescription: [
      'HelloGenie AI is a cutting-edge voice-powered AI platform designed specifically for business automation.',
      'The platform handles everything from automated calls and task management to operational processes, streamlining business workflows.',
      'Using advanced natural language processing and voice recognition, HelloGenie enables businesses to automate routine tasks and communications with remarkable accuracy.'
    ],
    tech: ['Node.js', 'React', 'Supabase', 'OpenAI', 'Voximplant'],
    image: '/images/Hello_genie.png',
    website: 'https://hellogenieai.com',
    period: 'Jan 2023 - Present',
    slug: 'hellogenie-ai',
    features: [
      'Voice-powered AI assistant for business operations',
      'Automated call handling and routing',
      'Task management and scheduling',
      'Integration with business tools and platforms',
      'Advanced analytics and reporting'
    ],
    challenges: [
      'Developing accurate voice recognition for diverse accents and business terminology',
      'Ensuring seamless integration with existing business tools',
      'Building a scalable architecture to handle growing user demands',
      'Maintaining data privacy and security for sensitive business communications'
    ],
    solutions: [
      'Implemented fine-tuned language models for business domain accuracy',
      'Created flexible API architecture for third-party integrations',
      'Utilized Supabase for scalable and secure data management',
      'Deployed end-to-end encryption and robust authentication protocols'
    ]
  },
  {
    id: 2,
    title: 'The Delivery Company',
    description: 'AI-driven delivery platform optimizing routes, real-time tracking, customer management.',
    fullDescription: [
      'The Delivery Company revolutionizes logistics with an AI-driven platform that optimizes delivery routes in real-time.',
      'This comprehensive solution integrates route optimization, real-time tracking, and customer management into one seamless platform.',
      'Using advanced algorithms and machine learning, the system continuously improves delivery efficiency while enhancing the customer experience.'
    ],
    tech: ['Supabase', 'Mapbox', 'OR-Tools', 'AWS Lambda'],
    image: '/images/TheDeliveryCompany.png',
    website: 'https://thedeliverycompany.net',
    period: 'Mar 2023 - Dec 2023',
    slug: 'delivery-company',
    features: [
      'AI-optimized delivery routing system',
      'Real-time tracking for customers and dispatchers',
      'Automated customer management and notifications',
      'Analytics dashboard for performance monitoring',
      'Integration with major e-commerce platforms'
    ],
    challenges: [
      'Creating efficient algorithms for complex multi-stop routing',
      'Building a reliable real-time tracking system',
      'Handling high volume of concurrent users and requests',
      'Developing an intuitive interface for both drivers and customers'
    ],
    solutions: [
      'Implemented Google OR-Tools for advanced routing optimization',
      'Used WebSockets for efficient real-time communication',
      'Deployed serverless architecture with AWS Lambda for scalability',
      'Designed responsive UI/UX with React and Mapbox integration'
    ]
  },
  {
    id: 3,
    title: 'ToolBox',
    description: 'AI tool generator: Analyzes Supabase schemas and dynamically builds backend tools.',
    fullDescription: [
      'ToolBox is an innovative AI-powered tool generator that revolutionizes backend development workflows.',
      'The system analyzes Supabase database schemas and automatically generates customized backend tools tailored to specific project needs.',
      'This powerful solution drastically reduces development time while ensuring consistent and high-quality code generation.'
    ],
    tech: ['React', 'FastAPI', 'Supabase Management API', 'OpenAI API'],
    image: '/images/toolbox_logo.png',
    website: 'https://toolboxmcp.com',
    period: 'Sep 2022 - Feb 2023',
    slug: 'toolbox',
    features: [
      'AI-powered schema analysis and tool generation',
      'Automatic CRUD operations creation',
      'Custom API endpoint generation',
      'Database migration management',
      'Integration with existing development workflows'
    ],
    challenges: [
      'Accurately interpreting diverse database schemas',
      'Generating high-quality, maintainable code',
      'Supporting various Supabase configurations',
      'Creating flexible templates adaptable to different project requirements'
    ],
    solutions: [
      'Developed sophisticated schema parsing algorithms',
      'Utilized OpenAI GPT models for intelligent code generation',
      'Implemented comprehensive test suites for generated code',
      'Created modular template system for maximum flexibility'
    ]
  },
  {
    id: 4,
    title: 'Smart Hospital Bed ML',
    description: 'Voice-controlled hospital bed system with ML-powered patient monitoring.',
    fullDescription: [
      'The Smart Hospital Bed project leverages machine learning for enhanced patient care in medical settings.',
      'This system enables patients to control bed positioning using voice commands while simultaneously monitoring vital health parameters.',
      'By combining voice recognition technology with real-time monitoring, the solution improves patient autonomy and safety.'
    ],
    tech: ['Python', 'TensorFlow', 'Arduino', 'C++'],
    image: '/images/Hospital.png',
    website: '',
    period: 'Feb 2023 - July 2023',
    slug: 'smart-hospital-bed',
    features: [
      'Voice command recognition for bed positioning',
      'Real-time patient monitoring system',
      'Automated alert system for medical staff',
      'Position scheduling and memory functions',
      'Integration with hospital information systems'
    ],
    challenges: [
      'Developing reliable voice recognition in noisy hospital environments',
      'Ensuring system safety for medical use',
      'Creating an accessible interface for patients with limited mobility',
      'Building robust ML models for patient monitoring'
    ],
    solutions: [
      'Implemented noise-cancellation algorithms for voice processing',
      'Utilized TensorFlow for ML monitoring models',
      'Created simple, intuitive voice command patterns',
      'Conducted extensive testing in simulated hospital environments'
    ]
  },
  {
    id: 5,
    title: 'Home Automation System',
    description: 'Raspberry Pi-based home automation with ML-powered voice commands and scheduling.',
    fullDescription: [
      'This comprehensive home automation system uses Raspberry Pi hardware to transform ordinary homes into smart living spaces.',
      'The solution incorporates machine learning for voice command recognition and intelligent scheduling of home device operations.',
      'By analyzing usage patterns, the system can predict and adapt to homeowner preferences for optimal comfort and energy efficiency.'
    ],
    tech: ['Raspberry Pi', 'Python', 'TensorFlow Lite', 'MQTT'],
    image: '/images/home automation.png',
    website: '',
    period: 'Aug 2022 - Jan 2023',
    slug: 'home-automation',
    features: [
      'ML-powered voice command recognition',
      'Adaptive scheduling based on usage patterns',
      'Energy usage optimization',
      'Remote control via mobile application',
      'Integration with popular smart home devices'
    ],
    challenges: [
      'Ensuring compatibility with diverse smart home devices',
      'Developing efficient ML models for resource-constrained Raspberry Pi',
      'Creating reliable wireless communication protocols',
      'Building an intuitive user interface for non-technical users'
    ],
    solutions: [
      'Implemented TensorFlow Lite for optimized ML performance',
      'Used MQTT for lightweight and reliable device communication',
      'Created unified device API abstraction layer',
      'Designed simple, accessible mobile and voice interfaces'
    ]
  },
  {
    id: 6,
    title: 'Arcade Game',
    description: 'Embedded arcade game implemented in C on ARM Cortex microcontroller.',
    fullDescription: [
      'This project involves developing a fully functional arcade game on an ARM Cortex microcontroller using embedded C programming.',
      'The game features multiple levels, interactive gameplay elements, and a custom controller interface for an authentic arcade experience.',
      'Despite the hardware limitations, the implementation includes sophisticated game mechanics, sprite animations, and sound effects.'
    ],
    tech: ['C', 'ARM Cortex', 'STM32', 'RTOS'],
    image: '/images/Arcade2.png',
    website: '',
    period: 'July 2022 - Nov 2022',
    slug: 'arcade-game',
    features: [
      'Multiple game levels and difficulty settings',
      'Custom controller interface',
      'Sprite-based animation system',
      'Sound effects and background music',
      'High score tracking and persistence'
    ],
    challenges: [
      'Optimizing performance on limited hardware resources',
      'Implementing smooth animations and collision detection',
      'Developing reliable input handling',
      'Creating an engaging gaming experience with minimal hardware'
    ],
    solutions: [
      'Implemented efficient memory management techniques',
      'Used hardware acceleration for graphics rendering',
      'Optimized code for performance-critical sections',
      'Created modular architecture for game components'
    ]
  }
];

export default function ProjectDetails() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the project based on the slug
    const slug = params.slug as string;
    const foundProject = projectsData.find(p => p.slug === slug);
    
    if (foundProject) {
      setProject(foundProject);
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

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-6">Sorry, the project you're looking for doesn't exist.</p>
        <Link 
          href="/#projects" 
          className="btn btn-primary"
        >
          Back to Projects
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
            href="/#projects" 
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
            Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 mb-8">
          <div className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <h1 className="text-3xl md:text-4xl font-bold">{project.title}</h1>
                <span className="mt-2 md:mt-0 text-sm font-medium bg-accent-blue/20 text-accent-blue px-3 py-1 rounded-full">
                  {project.period}
                </span>
              </div>

              {project.website && (
                <a 
                  href={project.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-accent-blue hover:text-accent-green transition-colors mb-4"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 mr-2" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Visit Website
                </a>
              )}

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm font-medium bg-white/10 text-secondary/80 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="max-w-screen-lg mx-auto mb-8">
                <div className="bg-black/40 rounded-xl overflow-hidden border border-white/10 p-6 flex items-center justify-center">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    width={400}
                    height={300}
                    className="object-contain max-h-[300px]"
                  />
                </div>
              </div>

              <div className="space-y-4 text-lg text-secondary/90 leading-relaxed mb-8">
                {project.fullDescription?.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Project Details Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Features */}
          {project.features && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6"
            >
              <h2 className="text-2xl font-semibold mb-4 text-accent-blue">Features</h2>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-accent-blue mr-2 mt-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Challenges */}
          {project.challenges && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6"
            >
              <h2 className="text-2xl font-semibold mb-4 text-accent-blue">Challenges</h2>
              <ul className="space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 text-accent-blue mr-2 mt-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Solutions */}
          {project.solutions && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 md:col-span-2"
            >
              <h2 className="text-2xl font-semibold mb-4 text-accent-blue">Solutions</h2>
              <ul className="space-y-3">
                {project.solutions.map((solution, index) => (
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
                    <span>{solution}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>

        {/* Demo Section - Show video for Arcade Game, placeholder for others */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-8 mb-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Project Demo</h2>
          
          {project.slug === 'arcade-game' ? (
            <div className="max-w-4xl mx-auto">
              <video 
                className="w-full rounded-xl border border-white/10"
                controls
                autoPlay={false}
                loop
                muted
              >
                <source src="/images/MSE450DemoGroup4.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p className="text-secondary/70 mt-4">Demo of the arcade game running on the microcontroller</p>
            </div>
          ) : (
            <>
              <p className="text-secondary/70 mb-6">A demo for this project will be available soon.</p>
              <div className="bg-black/40 rounded-xl p-12 flex items-center justify-center">
                <span className="text-secondary/40">Demo Content Placeholder</span>
              </div>
            </>
          )}
        </div>

        {/* Navigation to other projects */}
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-6">Other Projects</h3>
          <div className="flex flex-wrap gap-4">
            {projectsData
              .filter(p => p.id !== project.id)
              .slice(0, 3)
              .map(p => (
                <Link 
                  key={p.id} 
                  href={`/projects/${p.slug}`}
                  className="bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 p-4 hover:border-accent-blue/30 transition-all duration-300 flex items-center space-x-3"
                >
                  <div className="w-10 h-10 rounded bg-black/40 flex items-center justify-center overflow-hidden">
                    <Image 
                      src={p.image} 
                      alt={p.title}
                      width={40}
                      height={40}
                      className="object-contain w-8 h-8"
                    />
                  </div>
                  <span>{p.title}</span>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
} 