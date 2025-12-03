import { HeroSection } from '@/components/portfolio/HeroSection'
import { FullScreenScrollFX } from '@/components/ui/full-screen-scroll-fx'
import { SkillsSection } from '@/components/portfolio/SkillsSection'

const aboutSections = [
  {
    leftLabel: "Vision",
    title: <>Creative Excellence</>,
    rightLabel: "2024",
    background: "https://images.pexels.com/photos/3289156/pexels-photo-3289156.jpeg?cs=srgb&dl=pexels-alexfu-3289156.jpg&fm=jpg",
  },
  {
    leftLabel: "Mission",
    title: <>Innovation First</>,
    rightLabel: "Design",
    background: "https://images.pexels.com/photos/163790/at-night-under-a-lantern-guy-night-city-163790.jpeg",
  },
  {
    leftLabel: "Values",
    title: <>Continuous Growth</>,
    rightLabel: "Code",
    background: "https://images.pexels.com/photos/9817/pexels-photo-9817.jpeg",
  },
  {
    leftLabel: "Goal",
    title: <>Digital Impact</>,
    rightLabel: "Future",
    background: "https://images.pexels.com/photos/939807/pexels-photo-939807.jpeg",
  },
]

const Index = () => {
  return (
    <main className="relative">
      <HeroSection />
      
      <FullScreenScrollFX
        sections={aboutSections}
        header={<><div>About</div><div>Me</div></>}
        footer={<div></div>}
        showProgress
        durations={{ change: 0.7, snap: 800 }}
        colors={{
          text: "rgba(245,245,245,0.92)",
          overlay: "rgba(0,0,0,0.45)",
          pageBg: "hsl(240 10% 3.9%)",
          stageBg: "hsl(240 10% 3.9%)",
        }}
      />
        <SkillsSection />
    </main>
  )
}

export default Index