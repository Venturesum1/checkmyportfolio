import MacOSDock from '@/components/ui/mac-os-dock'
import { LocationMap } from "@/components/ui/expand-map"
import { RatingInteraction } from "@/components/ui/emoji-rating"

const contactApps = [
  { 
    id: 'github', 
    name: 'GitHub', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/github-desktop-2021-05-20.png?rf=1024',
    url: 'https://github.com/yourusername'
  },
  { 
    id: 'email', 
    name: 'Email', 
    icon: 'https://cdn.jim-nielsen.com/macos/1024/mail-2021-05-25.png?rf=1024',
    url: 'mailto:your.email@example.com'
  },
  { 
    id: 'linkedin', 
    name: 'LinkedIn', 
    icon: '/images/linkedin.png',
    url: 'https://linkedin.com/in/yourusername'
  },
  { 
    id: 'instagram', 
    name: 'Instagram', 
    icon: '/images/insta.png',
    url: 'https://instagram.com/yourusername'
  },
  { 
    id: 'whatsapp', 
    name: 'WhatsApp', 
    icon: '/images/whatsapp.png',
    url: 'https://wa.me/919876543210'
  },
];

export function CombinedSection() {
  const handleAppClick = (appId: string) => {
    const app = contactApps.find(a => a.id === appId)
    if (app?.url) {
      window.open(app.url, '_blank', 'noopener,noreferrer')
    }
  }

  const handleRatingChange = (rating: number) => {
    console.log("User rated:", rating)
  }

  return (
 <section id="combined-section" className="w-full bg-background py-16 px-4">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 sm:mb-4 tracking-tight text-center mb-12">
       Hey , are you enjoying my portfolio? Let's Connect!  
        </h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4">
          {/* Get In Touch */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-border bg-card/50">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground mb-2">
                Get In Touch
              </h2>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                Let's connect! Click on any icon to reach out.
              </p>
            </div>
            
            <div className="flex items-center justify-center scale-75 sm:scale-90">
              <MacOSDock
                apps={contactApps}
                onAppClick={handleAppClick}
                openApps={[]}
              />
            </div>

            {/* <p className="text-muted-foreground/60 text-xs mt-4">
              Hover over icons to see the magic ✨
            </p> */}
          </div>

          {/* Current Location */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-border bg-card/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(52,211,153,0.03)_0%,_transparent_70%)]" />
            
            <div className="relative z-10 flex flex-col items-center gap-6">
              <p className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase">
                Current Location
              </p>

              <LocationMap 
                location="Chandigarh, India" 
                coordinates="30.7333° N, 76.7794° E" 
              />
            </div>
          </div>

          {/* Rating */}
          <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-border bg-card/50">
            <div className="flex flex-col items-center gap-6">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/60">
                How was your experience?
              </p>

              <RatingInteraction onChange={handleRatingChange} />
              
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-border to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}