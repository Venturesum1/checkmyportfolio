import OrbitingSkills from '@/components/ui/orbiting-skills'

export const SkillsSection = () => {
  return (
    <section className="min-h-screen bg-background flex flex-col items-center justify-center py-20 relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground uppercase tracking-tight">
          Skills
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Technologies I work with
        </p>
      </div>
      <OrbitingSkills />
    </section>
  )
}