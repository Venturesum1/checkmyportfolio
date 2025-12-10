import React, { useState, useEffect } from 'react';
import { FaGamepad, FaTrain, FaStickyNote, FaRocket } from 'react-icons/fa';

interface ProjectOption {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  tech: string;
  date: string;
  linkk: string;
}

interface InteractiveSelectorProps {
  projects?: ProjectOption[];
}

const defaultProjects: ProjectOption[] = [
  {
    title: "AnimeSphere UI",
    description: "Animated gaming-inspired UI with GSAP",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    icon: <FaGamepad size={24} className="text-white" />,
    tech: "React, Tailwind, GSAP",
    date: "Feb 2025 – Mar 2025",
    linkk: "https://animationwithgameaaaaas.vercel.app/"
  },
  {
    title: "Delhi Metro Navigation",
    description: "Route finder with Graph algorithms",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
    icon: <FaTrain size={24} className="text-white" />,
    tech: "Java, DSA",
    date: "Oct 2024",
    linkk: "https://animationwithgameszz.vercel.app/"
  },
  {
    title: "PixelJot",
    description: "Full-stack note management platform",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
    icon: <FaStickyNote size={24} className="text-white" />,
    tech: "React, TypeScript, FastAPI, SQLite",
    date: "Oct 2024 – Jan 2025",
    linkk: "https://animationwithgamesaa.vercel.app/"
  },
  {
    title: "BeYourLoop",
    description: "Scalable B2B solution platform",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    icon: <FaRocket size={24} className="text-white" />,
    tech: "React, Next.js, Node.js",
    date: "Jan 2025 – Present",
    linkk: "https://animationwithgameaaaas.vercel.app/"
  }
];

const InteractiveSelector: React.FC<InteractiveSelectorProps> = ({ projects = defaultProjects }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    projects.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [projects]);

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      {/* Options Container */}
      <div className="flex w-full max-w-[900px] h-[400px] mx-auto items-stretch overflow-hidden relative">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out cursor-pointer"
            style={{
              backgroundImage: `url('${project.image}')`,
              backgroundSize: activeIndex === index ? 'auto 100%' : 'auto 120%',
              backgroundPosition: 'center',
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
              minWidth: '60px',
              minHeight: '100px',
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: activeIndex === index ? 'hsl(var(--primary))' : 'hsl(var(--border))',
              boxShadow: activeIndex === index 
                ? '0 20px 60px rgba(0,0,0,0.50)' 
                : '0 10px 30px rgba(0,0,0,0.30)',
              flex: activeIndex === index ? '7 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
              willChange: 'flex-grow, box-shadow, background-size, background-position'
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Shadow effect */}
            <div 
              className="absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                bottom: activeIndex === index ? '0' : '-40px',
                height: '120px',
                boxShadow: activeIndex === index 
                  ? 'inset 0 -120px 120px -120px hsl(var(--background)), inset 0 -120px 120px -80px hsl(var(--background))' 
                  : 'inset 0 -120px 0px -120px hsl(var(--background)), inset 0 -120px 0px -80px hsl(var(--background))'
              }}
            />
            
            {/* Label with icon and info */}
            <div className="absolute left-0 right-0 bottom-5 flex items-center justify-start h-auto z-10 px-4 gap-3 w-full">
              <div className="min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-background/85 backdrop-blur-sm shadow-lg border-2 border-border flex-shrink-0 transition-all duration-200">
                {project.icon}
              </div>
              <div className="text-foreground whitespace-pre relative overflow-hidden">
                <a
                  href={project.linkk}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="font-bold text-lg transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                  }}
                >
                  {project.title}
                </a>
                <div 
                  className="text-sm text-muted-foreground transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)'
                  }}
                >
                  {project.description}
                </div>
                <div 
                  className="text-xs text-primary mt-1 transition-all duration-700 ease-in-out"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(25px)',
                    transitionDelay: '100ms'
                  }}
                >
                  {project.tech} • {project.date}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveSelector;
