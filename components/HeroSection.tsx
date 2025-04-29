'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [messages, setMessages] = useState<{role: string, content: string}[]>([
    { role: 'system', content: 'Welcome to Gaurav Kashyap\'s interactive portfolio terminal. Ask me anything about Gaurav, his skills, or his work experience!' }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const terminalEndRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const terminalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
    
    // Force scroll to top on initial page load, with a slight delay to ensure it works
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'auto'
      })
      
      // Clear any hash from URL without triggering navigation
      if (window.location.hash) {
        history.replaceState(null, document.title, window.location.pathname + window.location.search)
      }
    }, 0)
  }, [])

  useEffect(() => {
    // Scroll to bottom of terminal when new messages are added
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Store the current scroll position
    const scrollPosition = window.scrollY
    
    if (!input.trim()) return

    // Add user message to the chat
    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      // In a real implementation, you would send this to your backend API
      // which securely handles the OpenAI API key
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage]
        }),
      })

      if (!response.ok) {
        throw new Error('Network response was not ok')
      }

      const data = await response.json()
      setMessages(prev => [...prev, { role: 'assistant', content: data.message }])
    } catch (error) {
      // For now, simulate a response since we don't have the backend set up
      setTimeout(() => {
        setMessages(prev => [...prev, { 
          role: 'assistant', 
          content: "I'd be happy to tell you about Gaurav! He's a Full Stack AI Engineer with expertise in machine learning, embedded systems, and web development. His background includes education at University of Toronto and Simon Fraser University. What specific aspects of his work or background would you like to know more about?" 
        }])
      }, 1000)
      
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
      
      // Restore scroll position
      setTimeout(() => {
        window.scrollTo(0, scrollPosition)
      }, 50)
    }
  }

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-16 relative overflow-hidden bg-black">
      {/* Background subtle animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-primary/80 animate-pulse-slow z-0"></div>

      {/* Background soft grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-50 z-0"></div>

      <div className="container mx-auto px-6 md:px-12 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Side Text */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8"
            >
              I build
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-accent-green">
                {" full-stack AI systems "}
              </span>
              that redefine industries.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-secondary/80 mb-10"
            >
              Bridging the gap between hardware, AI, and the cloud — one intelligent platform at a time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <a
                href="#projects"
                className="btn btn-primary"
              >
                Explore Projects
              </a>
              <a
                href="#contact"
                className="btn border border-secondary/20 text-secondary hover:bg-white/10"
              >
                Connect with Me
              </a>
            </motion.div>
          </div>

          {/* Right Side Terminal Chat */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:w-1/2 flex justify-center items-center mt-10 lg:mt-0"
          >
            <div className="w-full max-w-xl rounded-xl overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="bg-gray-800 px-4 py-2 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="mx-auto text-xs text-gray-400">gaurav-chat-terminal</div>
              </div>
              
              {/* Terminal Body */}
              <div 
                ref={terminalRef}
                className="bg-gray-900 p-4 font-mono text-sm md:text-base h-[400px] overflow-y-auto"
                onScroll={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col space-y-4">
                  {messages.map((msg, idx) => (
                    <div key={idx} className={`${msg.role === 'user' ? 'ml-auto bg-accent-blue/20 border-accent-blue/30' : 'mr-auto bg-gray-800/50 border-gray-700'} max-w-[80%] p-3 rounded-lg border`}>
                      <div className="flex items-center mb-1">
                        <span className={`text-xs font-bold ${msg.role === 'user' ? 'text-accent-blue' : 'text-green-400'}`}>
                          {msg.role === 'user' ? 'You' : msg.role === 'system' ? 'System' : 'Gaurav AI'}
                        </span>
                      </div>
                      <p className="text-gray-300 whitespace-pre-wrap break-words text-sm">
                        {msg.content}
                      </p>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="mr-auto bg-gray-800/50 border-gray-700 max-w-[80%] p-3 rounded-lg border">
                      <div className="flex items-center mb-1">
                        <span className="text-xs font-bold text-green-400">Gaurav AI</span>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse delay-300"></div>
                      </div>
                    </div>
                  )}
                  <div ref={terminalEndRef}></div>
                </div>
              </div>
              
              {/* Input Form */}
              <form 
                ref={formRef}
                onSubmit={handleSubmit} 
                className="bg-gray-800 px-4 py-2 flex items-center"
                style={{ position: 'relative' }}
                onClick={(e) => e.stopPropagation()}
              >
                <span className="text-green-400 mr-2">{'>'}</span>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about Gaurav..."
                  className="flex-1 bg-transparent text-gray-300 focus:outline-none"
                  disabled={isLoading}
                  onFocus={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                  }}
                  onClick={(e) => e.stopPropagation()}
                />
                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="text-xs bg-accent-blue/20 text-accent-blue px-2 py-1 rounded ml-2 hover:bg-accent-blue/30 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs text-secondary/60 mb-1">Scroll</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-secondary/60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
