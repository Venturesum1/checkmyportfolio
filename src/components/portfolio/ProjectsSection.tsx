import { AnimatedFolder } from '@/components/ui/3d-folder';
import InteractiveSelector from '@/components/ui/interactive-selector';
import { FaCode, FaProjectDiagram, FaLayerGroup } from 'react-icons/fa';
import { FaGamepad, FaTrain, FaStickyNote, FaRocket } from 'react-icons/fa';


const portfolioData = [
  {
    title: "Web Apps",
    projects: [
      { 
        id: "1", 
        image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&auto=format&fit=crop",
        title: "AnimeSphere UI" 
      },
      { 
        id: "2", 
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
        title: "PixelJot Notes" 
      },
      { 
        id: "3", 
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
        title: "BeYourLoop B2B" 
      },
    ]
  },
  {
    title: "Algorithms",
    projects: [
      { 
        id: "4", 
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop",
        title: "Delhi Metro Nav" 
      },
      { 
        id: "5", 
        image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop",
        title: "Path Finder" 
      },
      { 
        id: "6", 
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop",
        title: "Graph Visualizer" 
      },
    ]
  },
  {
    title: "Full Stack",
    projects: [
      { 
        id: "7", 
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",
        title: "E-Commerce Platform" 
      },
      { 
        id: "8", 
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop",
        title: "Dashboard App" 
      },
      { 
        id: "9", 
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
        title: "Team Collab Tool" 
      },
    ]
  }
];

// Mobile projects data for InteractiveSelector
const mobileProjects = [
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

export const ProjectsSection = () => {
  return (
    <section className=" w-full bg-background flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4">
      <div className="w-full max-w-4xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 sm:mb-4 tracking-tight">
          My Projects
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground font-medium max-w-xl mx-auto px-4">
          Explore my recent work spanning web development, algorithms, and full-stack applications.
        </p>
      </div>
      
      {/* Desktop: 3D Folders */}
      <div className="hidden md:block w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center">
          {portfolioData.map((folder) => (
            <AnimatedFolder 
              key={folder.title} 
              title={folder.title} 
              projects={folder.projects}
              className="w-full max-w-[280px]"
            />
          ))}
        </div>
      </div>

      {/* Mobile: Interactive Selector */}
      <div className="block md:hidden w-full">
        <InteractiveSelector projects={mobileProjects} />
      </div>
    </section>
  );
};