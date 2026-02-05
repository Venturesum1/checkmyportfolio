import * as React from "react";

interface WorkData {
  title: string;
  image: string;
  category: string;
  year: string;
  description: string;
}

const WORK_DATA: WorkData[] = [
  {
    title: "Full Stack Developer",
    image: "/images/beyour.png",
    category: "Web Development",
    year: "2025",
    description: "React, Node.js, TypeScript",
  },
  {
    title: "UI/UX Designer",
    image: "/images/anime.png",
    category: "Design",
    year: "Available",
    description: "Figma, Tailwind, Framer",
  },
  {
    title: "Backend Engineer",
    image: "/images/delhi.webp",
    category: "Backend",
    year: "Remote",
    description: "FastAPI, PostgreSQL, REST",
  },
  {
    title: "Algorithm Specialist",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    category: "Problem Solving",
    year: "Open",
    description: "DSA, System Design",
  },
  {
    title: "Open to Collaborate",
    image: "/images/open.jpg",
    category: "Let's Connect",
    year: "Now",
    description: "soumyasisdas8@gmail.com",
  },
];

const CONFIG = {
  SCROLL_SPEED: 0.75,
  LERP_FACTOR: 0.05,
  BUFFER_SIZE: 5,
  MAX_VELOCITY: 150,
  SNAP_DURATION: 500,
};

const lerp = (start: number, end: number, factor: number) =>
  start + (end - start) * factor;

const getWorkData = (index: number) => {
  // Clamp index to valid range (no wrapping)
  const clampedIndex = Math.max(0, Math.min(index, WORK_DATA.length - 1));
  return WORK_DATA[clampedIndex];
};

const getWorkNumber = (index: number) => {
  const clampedIndex = Math.max(0, Math.min(index, WORK_DATA.length - 1));
  return (clampedIndex + 1).toString().padStart(2, "0");
};

export const OpenToWorkSection = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [visibleRange, setVisibleRange] = React.useState({
    min: -CONFIG.BUFFER_SIZE,
    max: CONFIG.BUFFER_SIZE,
  });

  const state = React.useRef({
    currentY: 0,
    targetY: 0,
    isDragging: false,
    isSnapping: false,
    snapStart: { time: 0, y: 0, target: 0 },
    lastScrollTime: Date.now(),
    dragStart: { y: 0, scrollY: 0 },
    projectHeight: 0,
    minimapHeight: 250,
    isInView: false,
    hasReachedEnd: false,
    hasReachedStart: true,
  });

  const projectsRef = React.useRef<Map<number, HTMLDivElement>>(new Map());
  const minimapRef = React.useRef<Map<number, HTMLDivElement>>(new Map());
  const infoRef = React.useRef<Map<number, HTMLDivElement>>(new Map());
  const requestRef = React.useRef<number>();
  const renderedRange = React.useRef({ min: -CONFIG.BUFFER_SIZE, max: CONFIG.BUFFER_SIZE });

  const updateParallax = (
    img: HTMLImageElement | null,
    scroll: number,
    index: number,
    height: number
  ) => {
    if (!img) return;
    if (!img.dataset.parallaxCurrent) {
      img.dataset.parallaxCurrent = "0";
    }
    let current = parseFloat(img.dataset.parallaxCurrent);
    const target = (-scroll - index * height) * 0.2;
    current = lerp(current, target, 0.1);
    if (Math.abs(current - target) > 0.01) {
      img.style.transform = `translateY(${current}px) scale(1.2)`;
      img.dataset.parallaxCurrent = current.toString();
    }
  };

  const updateSnap = () => {
    const s = state.current;
    const progress = Math.min(
      (Date.now() - s.snapStart.time) / CONFIG.SNAP_DURATION,
      1
    );
    const eased = 1 - Math.pow(1 - progress, 3);
    s.targetY = s.snapStart.y + (s.snapStart.target - s.snapStart.y) * eased;
    if (progress >= 1) s.isSnapping = false;
  };

  const snapToProject = () => {
    const s = state.current;
    const current = Math.round(-s.targetY / s.projectHeight);
    // Clamp to valid range
    const clampedCurrent = Math.max(0, Math.min(current, WORK_DATA.length - 1));
    const target = -clampedCurrent * s.projectHeight;
    s.isSnapping = true;
    s.snapStart = {
      time: Date.now(),
      y: s.targetY,
      target: target,
    };
  };

  const updatePositions = () => {
    const s = state.current;
    const minimapY = (s.currentY * s.minimapHeight) / s.projectHeight;

    projectsRef.current.forEach((el, index) => {
      const y = index * s.projectHeight + s.currentY;
      el.style.transform = `translateY(${y}px)`;
      const img = el.querySelector("img");
      updateParallax(img as HTMLImageElement, s.currentY, index, s.projectHeight);
    });

    minimapRef.current.forEach((el, index) => {
      const y = index * s.minimapHeight + minimapY;
      el.style.transform = `translateY(${y}px)`;
      const img = el.querySelector("img");
      if (img) {
        updateParallax(img as HTMLImageElement, minimapY, index, s.minimapHeight);
      }
    });

    infoRef.current.forEach((el, index) => {
      const y = index * s.minimapHeight + minimapY;
      el.style.transform = `translateY(${y}px)`;
    });
  };

  const animate = () => {
    const s = state.current;
    if (!s.isInView) {
      requestRef.current = requestAnimationFrame(animate);
      return;
    }

    const now = Date.now();
    if (!s.isSnapping && !s.isDragging && now - s.lastScrollTime > 100) {
      const snapPoint = -Math.round(-s.targetY / s.projectHeight) * s.projectHeight;
      if (Math.abs(s.targetY - snapPoint) > 1) snapToProject();
    }

    if (s.isSnapping) updateSnap();
    if (!s.isDragging) {
      s.currentY += (s.targetY - s.currentY) * CONFIG.LERP_FACTOR;
    }

    updatePositions();

    const currentIndex = Math.round(-s.targetY / s.projectHeight);
    const min = currentIndex - CONFIG.BUFFER_SIZE;
    const max = currentIndex + CONFIG.BUFFER_SIZE;

    if (min !== renderedRange.current.min || max !== renderedRange.current.max) {
      renderedRange.current = { min, max };
      setVisibleRange({ min, max });
    }

    // Update boundary states
    s.hasReachedStart = currentIndex <= 0;
    s.hasReachedEnd = currentIndex >= WORK_DATA.length - 1;

    requestRef.current = requestAnimationFrame(animate);
  };

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    state.current.projectHeight = container.offsetHeight;

    const onWheel = (e: WheelEvent) => {
      const s = state.current;
      
      if (!s.isInView) return;

      const currentIndex = Math.round(-s.targetY / s.projectHeight);
      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      // Allow normal page scroll at boundaries
      if (scrollingUp && currentIndex <= 0 && s.targetY >= 0) {
        return; // Let page scroll up
      }
      if (scrollingDown && currentIndex >= WORK_DATA.length - 1) {
        const maxScroll = -(WORK_DATA.length - 1) * s.projectHeight;
        if (s.targetY <= maxScroll) {
          return; // Let page scroll down
        }
      }

      e.preventDefault();
      e.stopPropagation();
      
      s.isSnapping = false;
      s.lastScrollTime = Date.now();
      
      const delta = Math.max(
        Math.min(e.deltaY * CONFIG.SCROLL_SPEED, CONFIG.MAX_VELOCITY),
        -CONFIG.MAX_VELOCITY
      );
      
      // Apply scroll with clamping
      const newTargetY = s.targetY - delta;
      const minY = -(WORK_DATA.length - 1) * s.projectHeight;
      s.targetY = Math.max(minY, Math.min(0, newTargetY));
    };

    const onTouchStart = (e: TouchEvent) => {
      if (!state.current.isInView) return;
      const s = state.current;
      s.isDragging = true;
      s.isSnapping = false;
      s.dragStart = { y: e.touches[0].clientY, scrollY: s.targetY };
      s.lastScrollTime = Date.now();
    };

    const onTouchMove = (e: TouchEvent) => {
      const s = state.current;
      if (!s.isDragging || !s.isInView) return;
      
      const newTargetY = s.dragStart.scrollY + (e.touches[0].clientY - s.dragStart.y) * 1.5;
      const minY = -(WORK_DATA.length - 1) * s.projectHeight;
      s.targetY = Math.max(minY, Math.min(0, newTargetY));
      s.lastScrollTime = Date.now();
    };

    const onTouchEnd = () => {
      state.current.isDragging = false;
    };

    const onResize = () => {
      if (container) {
        state.current.projectHeight = container.offsetHeight;
      }
    };

    // Intersection Observer to track if section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          state.current.isInView = entry.isIntersecting && entry.intersectionRatio > 0.5;
        });
      },
      { threshold: [0.5] }
    );

    observer.observe(container);

    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("touchstart", onTouchStart);
    container.addEventListener("touchmove", onTouchMove);
    container.addEventListener("touchend", onTouchEnd);
    window.addEventListener("resize", onResize);

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      observer.disconnect();
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("resize", onResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const indices = [];
  for (let i = visibleRange.min; i <= visibleRange.max; i++) {
    indices.push(i);
  }

  return (
    <div ref={containerRef} className="otw-parallax-container">
      {/* Header Badge */}
      <div className="otw-header">
        {/* <div className="otw-badge">
          <span className="otw-badge-dot" />
          <span>Open to Work</span>
        </div> */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 sm:mb-4 tracking-tight text-center mb-12">
Open To Work        
</h2>
      </div>


      <ul className="otw-project-list">
        {indices.map((i) => {
          const data = getWorkData(i);
          return (
            <div
              key={i}
              className="otw-project"
              ref={(el) => {
                if (el) projectsRef.current.set(i, el);
                else projectsRef.current.delete(i);
              }}
            >
              <img src={data.image} alt={data.title} />
            </div>
          );
        })}
      </ul>

      <div className="otw-minimap">
        <div className="otw-minimap-wrapper">
          <div className="otw-minimap-img-preview">
            {indices.map((i) => {
              const data = getWorkData(i);
              return (
                <div
                  key={i}
                  className="otw-minimap-img-item"
                  ref={(el) => {
                    if (el) minimapRef.current.set(i, el);
                    else minimapRef.current.delete(i);
                  }}
                >
                  <img src={data.image} alt={data.title} />
                </div>
              );
            })}
          </div>
          <div className="otw-minimap-info-list">
            {indices.map((i) => {
              const data = getWorkData(i);
              const num = getWorkNumber(i);
              return (
                // <div
                //   key={i}
                //   className="otw-minimap-item-info"
                //   ref={(el) => {
                //     if (el) infoRef.current.set(i, el);
                //     else infoRef.current.delete(i);
                //   }}
                // >
                //   <div className="otw-minimap-item-info-row">
                //     <p>{num}</p>
                //     <p>{data.title}</p>
                //   </div>
                //   <div className="otw-minimap-item-info-row">
                //     <p>{data.category}</p>
                //     <p>{data.year}</p>
                //   </div>
                //   <div className="otw-minimap-item-info-row">
                //     <p>{data.description}</p>
                //   </div>
                // </div>
                  <div className="otw-minimap-item-info"
                      ref={(el) => {
                          if (el) infoRef.current.set(i, el);
                          else infoRef.current.delete(i);
                      }}
                  >
                      <div className="otw-minimap-item-info-left">
                          <p className="num">{num}</p>
                          <p>{data.category}</p>
                          <p>{data.description}</p>
                      </div>
                      <div className="otw-minimap-item-info-right">
                          <p className="title">{data.title}</p>
                          <p>{data.year}</p>
                      </div>
                  </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
