import { IconCloud } from '@/components/ui/interactive-icon-cloud'

const slugs = [
  "typescript",
  "javascript",
  "python",
  "java",
  "react",
  "nextdotjs",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "tailwindcss",
  "tensorflow",
  "pytorch",
  "postgresql",
  "firebase",
  "git",
  "github",
  "visualstudiocode",
  "figma",
  "angular",
  "fastapi",
  "sqlite",
  "docker",
  "vercel",
]

export const SkillsSection = () => {
  return (
    <section className="min-h-screen bg-background flex flex-col items-center justify-center py-20 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--accent)) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, hsl(var(--muted)) 0%, transparent 50%)`,
          }}
        />
      </div>
      
      <div className="text-center mb-8 relative z-10">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground uppercase tracking-tight font-display">
          Skills
        </h2>
        <p className="text-muted-foreground mt-4 text-lg">
          Technologies I work with
        </p>
      </div>
      
      <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border border-border/50 bg-card/30 backdrop-blur-sm px-10 pb-10 pt-4">
        <IconCloud iconSlugs={slugs} />
      </div>
    </section>
  )
}