import { LocationMap } from "@/components/ui/expand-map"

export function CurrentLocationSection() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center w-full py-20 bg-background relative">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(52,211,153,0.03)_0%,_transparent_70%)]" />

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Label */}
        <p className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase">
          Current Location
        </p>

        <LocationMap 
          location="Chandigarh, India" 
          coordinates="30.7333° N, 76.7794° E" 
        />
      </div>
    </section>
  )
}