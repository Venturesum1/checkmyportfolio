import { HeroSection } from '@/components/portfolio/HeroSection'
import { AboutSection } from '@/components/portfolio/AboutSection'
import { ExperienceSection } from '@/components/portfolio/ExperienceSection'
import { SkillsSection } from '@/components/portfolio/SkillsSection'
import { ProjectsSection } from '@/components/portfolio/ProjectsSection'
import { ContactSection } from '@/components/portfolio/ContactSection'
import { RatingSection } from '@/components/portfolio/RatingSection'
import { WhatsAppButton } from '@/components/ui/whatsapp-button'
import { GlobeSection } from '@/components/portfolio/GlobeSection'


const Index = () => {
  return (
    <main className="relative">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <RatingSection />
      <GlobeSection />
      
      <WhatsAppButton phoneNumber="919800425510" message="Hi! I saw your portfolio and would like to connect." />
    </main>
  )
}

export default Index