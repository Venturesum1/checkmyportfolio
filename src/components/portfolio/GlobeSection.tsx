import { Globe } from "@/components/ui/globe"

export function GlobeSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-background overflow-hidden">
        <h2 className="z-20 mb-8 text-3xl sm:text-4xl md:text-5xl font-semibold text-black tracking-tight">
        Where I Visit
      </h2>
      <div className="absolute inset-0 w-full h-full flex items-center justify-center">
        <div className="relative w-[90vmin] h-[90vmin] sm:w-[85vmin] sm:h-[85vmin] md:w-[80vmin] md:h-[80vmin] lg:w-[75vmin] lg:h-[75vmin]">
          <Globe className="relative w-full h-full" />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,hsl(var(--primary)/0.1),transparent)]" />
    </section>
  )
}
