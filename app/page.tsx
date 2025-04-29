import React from 'react'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import JourneySection from '@/components/JourneySection'
import AwardsSection from '@/components/AwardsSection'
import ProjectsSection from '@/components/ProjectsSection'
import WorkExperienceSection from '@/components/WorkExperienceSection'
import SkillsSection from '@/components/SkillsSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <AboutSection />
      <WorkExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <AwardsSection />
      <JourneySection />
      <ContactSection />
    </React.Fragment>
  )
} 