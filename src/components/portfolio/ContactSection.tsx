import MacOSDock from '@/components/ui/mac-os-dock';

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

export const ContactSection = () => {
  const handleAppClick = (appId: string) => {
    const app = contactApps.find(a => a.id === appId);
    if (app?.url) {
      window.open(app.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="min-h-[60vh] w-full bg-background flex flex-col items-center justify-center py-16 sm:py-20 md:py-24 px-4">
      <div className="text-center mb-8 sm:mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-3 sm:mb-4">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-md mx-auto">
          Let's connect! Click on any icon to reach out.
        </p>
      </div>
      
      <div className="flex items-center justify-center">
        <MacOSDock
          apps={contactApps}
          onAppClick={handleAppClick}
          openApps={[]}
        />
      </div>
    </section>
  );
};