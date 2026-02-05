// import { AnimatedFolder } from '@/components/ui/3d-folder';
// import InteractiveSelector from '@/components/ui/interactive-selector';
// import { FaCode, FaProjectDiagram, FaLayerGroup } from 'react-icons/fa';
// import { FaGamepad, FaTrain, FaStickyNote, FaRocket } from 'react-icons/fa';


// const portfolioData = [
//   {
//     title: "Web Apps",
//     projects: [
//       { 
//         id: "1", 
//         image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&auto=format&fit=crop",
//         title: "AnimeSphere UI" 
//       },
//       { 
//         id: "2", 
//         image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
//         title: "PixelJot Notes" 
//       },
//       { 
//         id: "3", 
//         image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
//         title: "BeYourLoop B2B" 
//       },
//     ]
//   },
//   {
//     title: "Algorithms",
//     projects: [
//       { 
//         id: "4", 
//         image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop",
//         title: "Delhi Metro Nav" 
//       },
//       { 
//         id: "5", 
//         image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&auto=format&fit=crop",
//         title: "Path Finder" 
//       },
//       { 
//         id: "6", 
//         image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop",
//         title: "Graph Visualizer" 
//       },
//     ]
//   },
//   {
//     title: "Full Stack",
//     projects: [
//       { 
//         id: "7", 
//         image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",
//         title: "E-Commerce Platform" 
//       },
//       { 
//         id: "8", 
//         image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop",
//         title: "Dashboard App" 
//       },
//       { 
//         id: "9", 
//         image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop",
//         title: "Team Collab Tool" 
//       },
//     ]
//   }
// ];

// // Mobile projects data for InteractiveSelector
// const mobileProjects = [
//  {
//      title: "AnimeSphere UI",
//      description: "Animated gaming-inspired UI with GSAP",
//      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
//      icon: <FaGamepad size={24} className="text-white" />,
//      tech: "React, Tailwind, GSAP",
//      date: "Feb 2025 – Mar 2025",
//      linkk: "https://animationwithgameaaaaas.vercel.app/"
//    },
//    {
//      title: "Delhi Metro Navigation",
//      description: "Route finder with Graph algorithms",
//      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
//      icon: <FaTrain size={24} className="text-white" />,
//      tech: "Java, DSA",
//      date: "Oct 2024",
//      linkk: "https://animationwithgameszz.vercel.app/"
//    },
//    {
//      title: "PixelJot",
//      description: "Full-stack note management platform",
//      image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
//      icon: <FaStickyNote size={24} className="text-white" />,
//      tech: "React, TypeScript, FastAPI, SQLite",
//      date: "Oct 2024 – Jan 2025",
//      linkk: "https://animationwithgamesaa.vercel.app/"
//    },
//    {
//      title: "BeYourLoop",
//      description: "Scalable B2B solution platform",
//      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
//      icon: <FaRocket size={24} className="text-white" />,
//      tech: "React, Next.js, Node.js",
//      date: "Jan 2025 – Present",
//      linkk: "https://animationwithgameaaaas.vercel.app/"
//    }
// ];

// export const ProjectsSection = () => {
//   return (
//     <section className=" w-full bg-background flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4">
//       <div className="w-full max-w-4xl mx-auto text-center mb-8 sm:mb-10 md:mb-12">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 sm:mb-4 tracking-tight">
//           My Projects
//         </h2>
//         <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground font-medium max-w-xl mx-auto px-4">
//           Explore my recent work spanning web development, algorithms, and full-stack applications.
//         </p>
//       </div>
      
//       {/* Desktop: 3D Folders */}
//       <div className="hidden md:block w-full max-w-5xl mx-auto">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center">
//           {portfolioData.map((folder) => (
//             <AnimatedFolder 
//               key={folder.title} 
//               title={folder.title} 
//               projects={folder.projects}
//               className="w-full max-w-[280px]"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Mobile: Interactive Selector */}
//       <div className="block md:hidden w-full">
//         <InteractiveSelector projects={mobileProjects} />
//       </div>
//     </section>
//   );
// };

import { cn } from "@/lib/utils";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import gsap from "gsap";

interface ProjectItem {
  num: string;
  name: string;
  clipId: string;
  image: string;
  tech?: string;
  description?: string;
}

const projectItems: ProjectItem[] = [
  {
    num: "01",
    name: "AnimeSphere UI",
    clipId: "clip-original",
    image: "/images/anime.png",
    tech: "React, Tailwind, GSAP",
    description: "Animated gaming-inspired UI"
  },
  {
    num: "02",
    name: "Delhi Metro",
    clipId: "clip-hexagons",
    image: "/images/delhi.webp",
    tech: "Java, DSA",
    description: "Route finder with Graph algorithms"
  },
  {
    num: "03",
    name: "PixelJot Notes",
    clipId: "clip-pixels",
    image: "/images/pixel.png",
    tech: "React, TypeScript, FastAPI",
    description: "Full-stack note management"
  },
  {
    num: "04",
    name: "BeYourLoop B2B",
    clipId: "clip-diamonds",
    image: "/images/beyour.png",
    tech: "React, Next.js, Node.js",
    description: "Scalable B2B solution platform"
  }
];

export const ProjectsSection = ({
  items = projectItems,
  className
}: { items?: ProjectItem[]; className?: string }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<SVGImageElement>(null);
  const mainGroupRef = useRef<SVGGElement>(null);
  const masterTl = useRef<gsap.core.Timeline | null>(null);

  const createLoop = (index: number) => {
    const item = items[index];
    const selector = `#${item.clipId} .path`;

    if (masterTl.current) masterTl.current.kill();

    if (imageRef.current) imageRef.current.setAttribute("href", item.image);
    if (mainGroupRef.current) mainGroupRef.current.setAttribute("clip-path", `url(#${item.clipId})`);
    
    gsap.set(selector, { scale: 0, transformOrigin: "50% 50%" });

    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    // 1. IN (Expo Out)
    tl.to(selector, {
      scale: 1,
      duration: 0.8,
      stagger: { amount: 0.4, from: "random" },
      ease: "expo.out",
    })
    // 2. IDLE (Sine Breath)
    .to(selector, {
      scale: 1.05,
      duration: 1.5,
      yoyo: true,
      repeat: 1,
      ease: "sine.inOut",
      stagger: { amount: 0.2, from: "center" }
    })
    // 3. OUT (Expo In)
    .to(selector, {
      scale: 0,
      duration: 0.6,
      stagger: { amount: 0.3, from: "edges" },
      ease: "expo.in",
    });

    masterTl.current = tl;
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      createLoop(0);
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const handleItemHover = (index: number) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    createLoop(index);
  };

  return (
    <section 
      ref={containerRef}
      className={cn(
        "min-h-screen w-full bg-background flex flex-col lg:flex-row items-center justify-center py-12 px-4 gap-8 lg:gap-0",
        className
      )}
    >
      {/* Section Header - Mobile */}
      <div className="w-full text-center lg:hidden mb-4">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-2 tracking-tight">
          My Projects
        </h2>
        <p className="text-sm text-muted-foreground">
          Hover to explore my work
        </p>
      </div>

      {/* LEFT SIDE: MENU */}
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end lg:pr-8">
        <div className="w-full max-w-md">
          {/* Desktop Header */}
          <div className="hidden lg:block mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 tracking-tight">
              My Projects
            </h2>
            <p className="text-base text-muted-foreground">
              Hover to explore my recent work
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:gap-6">
            {items.map((item, index) => (
              <div
                key={item.num}
                onMouseEnter={() => handleItemHover(index)}
                onClick={() => handleItemHover(index)}
                className="group cursor-pointer"
              >
                <div className="flex items-baseline gap-3 sm:gap-4">
                  {/* Numbers */}
                  <span
                    className={cn(
                      "text-sm sm:text-base font-mono transition-all duration-300",
                      activeIndex === index
                        ? "text-primary"
                        : "text-muted-foreground/50 group-hover:text-muted-foreground"
                    )}
                  >
                    {item.num}
                  </span>
                  
                  {/* Main Text */}
                  <div className="flex flex-col">
                    <span
                      className={cn(
                        "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight transition-all duration-300",
                        activeIndex === index
                          ? "text-foreground translate-x-2"
                          : "text-muted-foreground/60 group-hover:text-foreground group-hover:translate-x-1"
                      )}
                    >
                      {item.name}
                    </span>
                    {/* Tech & Description - shown on active */}
                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-500",
                        activeIndex === index ? "max-h-20 opacity-100 mt-1" : "max-h-0 opacity-0"
                      )}
                    >
                      <p className="text-xs sm:text-sm text-primary font-medium">{item.tech}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: SVG GRID */}
      <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start lg:pl-8">
        <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px]">
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* Clip Path 1: Original Grid */}
              <clipPath id="clip-original">
                {Array.from({ length: 16 }).map((_, i) => (
                  <rect
                    key={`orig-${i}`}
                    className="path"
                    x={(i % 4) * 100 + 5}
                    y={Math.floor(i / 4) * 100 + 5}
                    width="90"
                    height="90"
                    rx="8"
                  />
                ))}
              </clipPath>

              {/* Clip Path 2: Hexagon-like pattern */}
              <clipPath id="clip-hexagons">
                {Array.from({ length: 9 }).map((_, i) => (
                  <circle
                    key={`hex-${i}`}
                    className="path"
                    cx={(i % 3) * 133 + 66}
                    cy={Math.floor(i / 3) * 133 + 66}
                    r="60"
                  />
                ))}
              </clipPath>

              {/* Clip Path 3: Pixel pattern */}
              <clipPath id="clip-pixels">
                {Array.from({ length: 25 }).map((_, i) => (
                  <rect
                    key={`pix-${i}`}
                    className="path"
                    x={(i % 5) * 80 + 4}
                    y={Math.floor(i / 5) * 80 + 4}
                    width="72"
                    height="72"
                    rx="4"
                  />
                ))}
              </clipPath>

              {/* Clip Path 4: Diamond pattern */}
              <clipPath id="clip-diamonds">
                {Array.from({ length: 9 }).map((_, i) => (
                  <rect
                    key={`dia-${i}`}
                    className="path"
                    x={(i % 3) * 133 + 26}
                    y={Math.floor(i / 3) * 133 + 26}
                    width="80"
                    height="80"
                    rx="8"
                    transform={`rotate(45 ${(i % 3) * 133 + 66} ${Math.floor(i / 3) * 133 + 66})`}
                  />
                ))}
              </clipPath>
            </defs>

            {/* Main Group with clip path */}
            <g ref={mainGroupRef} clipPath="url(#clip-original)">
              <image
                ref={imageRef}
                href={items[0].image}
                x="0"
                y="0"
                width="400"
                height="400"
                preserveAspectRatio="xMidYMid slice"
              />
            </g>

            {/* Border overlay */}
            <rect
              x="2"
              y="2"
              width="396"
              height="396"
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              rx="12"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};
