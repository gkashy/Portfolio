'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

interface Award {
  title: string;
  organization: string;
  periods: string[];
  description: string;
}

interface AwardCategory {
  id: number;
  category: string;
  awards: Award[];
}

const awardCategories: AwardCategory[] = [
  {
    id: 1,
    category: "Academic Excellence",
    awards: [
      {
        title: "President's Honor Roll",
        organization: "Simon Fraser University",
        periods: ["Spring 2023", "Summer 2023"],
        description: "Awarded to students with a term GPA in the top percentile of their faculty, recognizing exceptional academic achievement across all university disciplines."
      },
      {
        title: "Dean's Honor Roll",
        organization: "Simon Fraser University",
        periods: ["Spring 2023", "Summer 2023", "Fall 2021", "Summer 2021", "Spring 2020"],
        description: "Recognition for outstanding academic achievement within the Faculty of Applied Science, consistently demonstrating excellence in engineering curriculum."
      }
    ]
  },
  {
    id: 2,
    category: "Research Recognition",
    awards: [
      {
        title: "VP Research - Undergraduate Student Research Award",
        organization: "Simon Fraser University",
        periods: ["Summer 2022"],
        description: "Competitive research funding awarded for exceptional research proposal and academic merit, supporting innovative undergraduate research initiatives."
      }
    ]
  }
];

const AwardCard = ({ award }: { award: Award }) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-accent-blue/30 transition-all duration-300">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex-1">
          <h4 className="text-lg font-medium">{award.title}</h4>
          <p className="text-secondary/80">{award.organization}</p>
          <p className="text-sm text-secondary/80 mt-2">{award.description}</p>
        </div>
        <div className="mt-4 md:mt-0 md:ml-4 md:min-w-28 flex items-start justify-end">
          <div className="flex flex-col items-end">
            {award.periods.map((period, index) => (
              <span 
                key={index} 
                className="text-sm font-medium bg-accent-blue/20 text-accent-blue px-3 py-1 rounded-full mb-2 last:mb-0"
              >
                {period}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CategorySection = ({ category }: { category: AwardCategory }) => {
  return (
    <div className="mb-12 last:mb-0">
      <h3 className="text-xl font-semibold mb-6 text-accent-blue/90">{category.category}</h3>
      <div className="space-y-6">
        {category.awards.map((award, index) => (
          <AwardCard key={index} award={award} />
        ))}
      </div>
    </div>
  );
};

const AwardsSection = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 })

  return (
    <section id="awards" className="py-20 bg-black relative overflow-hidden">
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
          <h2 className="section-heading text-center">Awards & Recognition</h2>
          <p className="text-center text-secondary/70 max-w-3xl mx-auto mb-12">
            Academic and professional achievements highlighting my commitment to excellence
          </p>

          <div>
            {awardCategories.map((category) => (
              <CategorySection key={category.id} category={category} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AwardsSection 