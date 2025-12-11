"use client"

import { useState, useRef, useEffect, useLayoutEffect, useCallback, forwardRef } from "react"
import { X, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface Project {
  id: string
  image: string
  title: string
  link?: string
}

interface AnimatedFolderProps {
  title: string
  projects: Project[]
  className?: string
}

export function AnimatedFolder({ title, projects, className }: AnimatedFolderProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [sourceRect, setSourceRect] = useState<DOMRect | null>(null)
  const [hiddenCardId, setHiddenCardId] = useState<string | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleProjectClick = (project: Project, index: number) => {
    const cardEl = cardRefs.current[index]
    if (cardEl) {
      setSourceRect(cardEl.getBoundingClientRect())
    }
    setSelectedIndex(index)
    setHiddenCardId(project.id)
  }

  const handleCloseLightbox = () => {
    setSelectedIndex(null)
    setSourceRect(null)
  }

  const handleCloseComplete = () => {
    setHiddenCardId(null)
  }

  const handleNavigate = (newIndex: number) => {
    setSelectedIndex(newIndex)
    setHiddenCardId(projects[newIndex]?.id || null)
  }

  return (
    <>
      <div
        className={cn(
          "relative flex flex-col items-center justify-center",
          "p-4 sm:p-6 md:p-8 rounded-2xl cursor-pointer",
          "bg-card border border-border",
          "transition-all duration-500 ease-out",
          "hover:shadow-2xl hover:shadow-accent/10",
          "hover:border-accent/30",
          "group",
          className,
        )}
        style={{
          minWidth: "200px",
          minHeight: "240px",
          perspective: "1000px",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Subtle background glow on hover */}
        <div
          className="absolute inset-0 rounded-2xl transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle at 50% 70%, hsl(var(--accent)) 0%, transparent 70%)",
            opacity: isHovered ? 0.08 : 0,
          }}
        />

        <div className="relative flex items-center justify-center mb-4" style={{ height: "120px", width: "150px" }}>
          {/* Folder back layer */}
          <div
            className="absolute w-24 h-18 sm:w-28 sm:h-20 md:w-32 md:h-24 bg-folder-back rounded-lg shadow-md"
            style={{
              transformOrigin: "bottom center",
              transform: isHovered ? "rotateX(-15deg)" : "rotateX(0deg)",
              transition: "transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              zIndex: 10,
            }}
          />

          {/* Folder tab */}
          <div
            className="absolute w-10 h-3 sm:w-11 sm:h-3.5 md:w-12 md:h-4 bg-folder-tab rounded-t-md"
            style={{
              top: "calc(50% - 36px - 10px)",
              left: "calc(50% - 48px + 12px)",
              transformOrigin: "bottom center",
              transform: isHovered ? "rotateX(-25deg) translateY(-2px)" : "rotateX(0deg)",
              transition: "transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              zIndex: 10,
            }}
          />

          {/* Project cards */}
          <div
            className="absolute"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 20,
            }}
          >
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard
                key={project.id}
                ref={(el) => {
                  cardRefs.current[index] = el
                }}
                image={project.image}
                title={project.title}
                delay={index * 80}
                isVisible={isHovered}
                index={index}
                onClick={() => handleProjectClick(project, index)}
                isSelected={hiddenCardId === project.id}
              />
            ))}
          </div>

          {/* Folder front layer */}
          <div
            className="absolute w-24 h-18 sm:w-28 sm:h-20 md:w-32 md:h-24 bg-folder-front rounded-lg shadow-lg"
            style={{
              top: "calc(50% - 36px + 3px)",
              transformOrigin: "bottom center",
              transform: isHovered ? "rotateX(25deg) translateY(8px)" : "rotateX(0deg)",
              transition: "transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              zIndex: 30,
            }}
          />

          {/* Folder shine effect */}
          <div
            className="absolute w-24 h-18 sm:w-28 sm:h-20 md:w-32 md:h-24 rounded-lg overflow-hidden pointer-events-none"
            style={{
              top: "calc(50% - 36px + 3px)",
              background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, transparent 50%)",
              transformOrigin: "bottom center",
              transform: isHovered ? "rotateX(25deg) translateY(8px)" : "rotateX(0deg)",
              transition: "transform 500ms cubic-bezier(0.34, 1.56, 0.64, 1)",
              zIndex: 31,
            }}
          />
        </div>

        {/* Folder title */}
        <h3
          className="text-sm sm:text-base md:text-lg font-semibold text-foreground mt-4 transition-all duration-300"
          style={{
            transform: isHovered ? "translateY(4px)" : "translateY(0)",
          }}
        >
          {title}
        </h3>

        {/* Project count */}
        <p
          className="text-xs sm:text-sm text-muted-foreground transition-all duration-300"
          style={{
            opacity: isHovered ? 0.7 : 1,
          }}
        >
          {projects.length} projects
        </p>

        {/* Hover hint */}
        <div
          className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-[10px] sm:text-xs text-muted-foreground transition-all duration-300"
          style={{
            opacity: isHovered ? 0 : 0.6,
            transform: isHovered ? "translateY(10px)" : "translateY(0)",
          }}
        >
          <span>Hover to explore</span>
        </div>
      </div>

      <ImageLightbox
        projects={projects.slice(0, 3)}
        currentIndex={selectedIndex ?? 0}
        isOpen={selectedIndex !== null}
        onClose={handleCloseLightbox}
        sourceRect={sourceRect}
        onCloseComplete={handleCloseComplete}
        onNavigate={handleNavigate}
      />
    </>
  )
}

interface ImageLightboxProps {
  projects: Project[]
  currentIndex: number
  isOpen: boolean
  onClose: () => void
  sourceRect: DOMRect | null
  onCloseComplete?: () => void
  onNavigate: (index: number) => void
}

function ImageLightbox({
  projects,
  currentIndex,
  isOpen,
  onClose,
  sourceRect,
  onCloseComplete,
  onNavigate,
}: ImageLightboxProps) {
  const [animationPhase, setAnimationPhase] = useState<"initial" | "animating" | "complete">("initial")
  const [isClosing, setIsClosing] = useState(false)
  const [shouldRender, setShouldRender] = useState(false)
  const [internalIndex, setInternalIndex] = useState(currentIndex)
  const [prevIndex, setPrevIndex] = useState(currentIndex)
  const [isSliding, setIsSliding] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const totalProjects = projects.length
  const hasNext = internalIndex < totalProjects - 1
  const hasPrev = internalIndex > 0

  const currentProject = projects[internalIndex]

  useEffect(() => {
    if (isOpen && currentIndex !== internalIndex && !isSliding) {
      setPrevIndex(internalIndex)
      setIsSliding(true)

      const timer = setTimeout(() => {
        setInternalIndex(currentIndex)
        setIsSliding(false)
      }, 400)

      return () => clearTimeout(timer)
    }
  }, [currentIndex, isOpen, internalIndex, isSliding])

  useEffect(() => {
    if (isOpen) {
      setInternalIndex(currentIndex)
      setPrevIndex(currentIndex)
      setIsSliding(false)
    }
  }, [isOpen, currentIndex])

  const navigateNext = useCallback(() => {
    if (internalIndex >= totalProjects - 1 || isSliding) return
    onNavigate(internalIndex + 1)
  }, [internalIndex, totalProjects, isSliding, onNavigate])

  const navigatePrev = useCallback(() => {
    if (internalIndex <= 0 || isSliding) return
    onNavigate(internalIndex - 1)
  }, [internalIndex, isSliding, onNavigate])

  const handleClose = useCallback(() => {
    setIsClosing(true)
    onClose()
    setTimeout(() => {
      setIsClosing(false)
      setShouldRender(false)
      setAnimationPhase("initial")
      onCloseComplete?.()
    }, 400)
  }, [onClose, onCloseComplete])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return
      if (e.key === "Escape") handleClose()
      if (e.key === "ArrowRight") navigateNext()
      if (e.key === "ArrowLeft") navigatePrev()
    }

    window.addEventListener("keydown", handleKeyDown)
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      document.body.style.overflow = ""
    }
  }, [isOpen, handleClose, navigateNext, navigatePrev])

  useLayoutEffect(() => {
    if (isOpen && sourceRect) {
      setShouldRender(true)
      setAnimationPhase("initial")
      setIsClosing(false)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimationPhase("animating")
        })
      })
      const timer = setTimeout(() => {
        setAnimationPhase("complete")
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isOpen, sourceRect])

  const handleDotClick = (idx: number) => {
    if (isSliding || idx === internalIndex) return
    onNavigate(idx)
  }

  if (!shouldRender || !currentProject) return null

  const getInitialStyles = (): React.CSSProperties => {
    if (!sourceRect) return {}

    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const targetWidth = Math.min(768, viewportWidth - 32)
    const targetHeight = Math.min(viewportHeight * 0.85, 600)

    const targetX = (viewportWidth - targetWidth) / 2
    const targetY = (viewportHeight - targetHeight) / 2

    const scaleX = sourceRect.width / targetWidth
    const scaleY = sourceRect.height / targetHeight
    const scale = Math.max(scaleX, scaleY)

    const translateX = sourceRect.left + sourceRect.width / 2 - (targetX + targetWidth / 2)
    const translateY = sourceRect.top + sourceRect.height / 2 - (targetY + targetHeight / 2)

    return {
      transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
      opacity: 1,
    }
  }

  const getFinalStyles = (): React.CSSProperties => {
    return {
      transform: "translate(0, 0) scale(1)",
      opacity: 1,
    }
  }

  const currentStyles = animationPhase === "initial" && !isClosing ? getInitialStyles() : getFinalStyles()

  return (
    <div
      className={cn("fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-8")}
      onClick={handleClose}
      style={{
        opacity: isClosing ? 0 : 1,
        transition: "opacity 400ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-xl"
        style={{
          opacity: animationPhase === "initial" && !isClosing ? 0 : 1,
          transition: "opacity 400ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      />

      {/* Close button */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          handleClose()
        }}
        className={cn(
          "absolute top-3 right-3 sm:top-5 sm:right-5 z-50",
          "w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center",
          "rounded-full bg-muted/50 backdrop-blur-md",
          "border border-border",
          "text-muted-foreground hover:text-foreground hover:bg-muted",
          "transition-all duration-300 ease-out hover:scale-105 active:scale-95",
        )}
        style={{
          opacity: animationPhase === "complete" && !isClosing ? 1 : 0,
          transform: animationPhase === "complete" && !isClosing ? "translateY(0)" : "translateY(-10px)",
          transition: "opacity 300ms ease-out, transform 300ms ease-out",
        }}
      >
        <X className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={2.5} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          navigatePrev()
        }}
        disabled={!hasPrev || isSliding}
        className={cn(
          "absolute left-2 sm:left-4 md:left-8 z-50",
          "w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center",
          "rounded-full bg-muted/50 backdrop-blur-md",
          "border border-border",
          "text-muted-foreground hover:text-foreground hover:bg-muted",
          "transition-all duration-300 ease-out hover:scale-110 active:scale-95",
          "disabled:opacity-0 disabled:pointer-events-none",
        )}
        style={{
          opacity: animationPhase === "complete" && !isClosing && hasPrev ? 1 : 0,
          transform: animationPhase === "complete" && !isClosing ? "translateX(0)" : "translateX(-20px)",
          transition: "opacity 300ms ease-out 150ms, transform 300ms ease-out 150ms",
        }}
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation()
          navigateNext()
        }}
        disabled={!hasNext || isSliding}
        className={cn(
          "absolute right-2 sm:right-4 md:right-8 z-50",
          "w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center",
          "rounded-full bg-muted/50 backdrop-blur-md",
          "border border-border",
          "text-muted-foreground hover:text-foreground hover:bg-muted",
          "transition-all duration-300 ease-out hover:scale-110 active:scale-95",
          "disabled:opacity-0 disabled:pointer-events-none",
        )}
        style={{
          opacity: animationPhase === "complete" && !isClosing && hasNext ? 1 : 0,
          transform: animationPhase === "complete" && !isClosing ? "translateX(0)" : "translateX(20px)",
          transition: "opacity 300ms ease-out 150ms, transform 300ms ease-out 150ms",
        }}
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
      </button>

      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-3xl mx-2 sm:mx-4"
        onClick={(e) => e.stopPropagation()}
        style={{
          ...currentStyles,
          transform: isClosing ? "translate(0, 0) scale(0.95)" : currentStyles.transform,
          transition:
            animationPhase === "initial" && !isClosing
              ? "none"
              : "transform 400ms cubic-bezier(0.16, 1, 0.3, 1), opacity 400ms ease-out",
          transformOrigin: "center center",
        }}
      >
        <div
          className={cn("relative overflow-hidden", "rounded-xl sm:rounded-2xl", "bg-card", "ring-1 ring-border", "shadow-2xl")}
          style={{
            borderRadius: animationPhase === "initial" && !isClosing ? "8px" : "16px",
            transition: "border-radius 500ms cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-400 ease-out"
              style={{
                transform: `translateX(-${internalIndex * 100}%)`,
                transition: isSliding ? "transform 400ms cubic-bezier(0.32, 0.72, 0, 1)" : "none",
              }}
            >
              {projects.map((project) => (
                <img
                  key={project.id}
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-auto max-h-[50vh] sm:max-h-[60vh] md:max-h-[70vh] object-contain bg-background flex-shrink-0"
                  style={{ minWidth: "100%" }}
                />
              ))}
            </div>

            {/* Subtle vignette effect */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-card/20 via-transparent to-card/10" />
          </div>

          <div
            className={cn("px-4 py-4 sm:px-6 sm:py-5", "bg-card", "border-t border-border")}
            style={{
              opacity: animationPhase === "complete" && !isClosing ? 1 : 0,
              transform: animationPhase === "complete" && !isClosing ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 300ms ease-out 100ms, transform 300ms ease-out 100ms",
            }}
          >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4">
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-medium text-foreground tracking-tight truncate">
                  {currentProject?.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1">
                  <p className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                    <kbd className="px-1 py-0.5 mx-0.5 text-[10px] sm:text-xs font-medium bg-muted text-muted-foreground rounded border border-border">
                      ←
                    </kbd>
                    <kbd className="px-1 py-0.5 mx-0.5 text-[10px] sm:text-xs font-medium bg-muted text-muted-foreground rounded border border-border">
                      →
                    </kbd>{" "}
                    to navigate
                  </p>
                  <div className="flex items-center gap-1.5">
                    {projects.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDotClick(idx)}
                        className={cn(
                          "w-2 h-2 rounded-full transition-all duration-300",
                          idx === internalIndex
                            ? "bg-foreground scale-110"
                            : "bg-muted-foreground/40 hover:bg-muted-foreground/60",
                        )}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <button
                className={cn(
                  "flex items-center justify-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2",
                  "text-xs sm:text-sm font-medium text-muted-foreground",
                  "bg-muted/50 hover:bg-muted",
                  "rounded-lg border border-border",
                  "transition-all duration-200 ease-out",
                  "hover:text-foreground",
                )}
              >
                <span>View</span>
                <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface ProjectCardProps {
  image: string
  title: string
  delay: number
  isVisible: boolean
  index: number
  onClick: () => void
  isSelected: boolean
}

const ProjectCard = forwardRef<HTMLDivElement, ProjectCardProps>(
  ({ image, title, delay, isVisible, index, onClick, isSelected }, ref) => {
    const rotations = [-12, 0, 12]
    const translations = [-40, 0, 40]

    return (
      <div
        ref={ref}
        className={cn(
          "absolute w-14 h-20 sm:w-16 sm:h-24 md:w-20 md:h-28 rounded-lg overflow-hidden shadow-xl",
          "bg-card border border-border",
          "cursor-pointer hover:ring-2 hover:ring-accent/50",
          isSelected && "opacity-0",
        )}
        style={{
          transform: isVisible
            ? `translateY(-70px) translateX(${translations[index]}px) rotate(${rotations[index]}deg) scale(1)`
            : "translateY(0px) translateX(0px) rotate(0deg) scale(0.5)",
          opacity: isSelected ? 0 : isVisible ? 1 : 0,
          transition: `all 600ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
          zIndex: 10 - index,
          left: "-28px",
          top: "-40px",
        }}
        onClick={(e) => {
          e.stopPropagation()
          onClick()
        }}
      >
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        <p className="absolute bottom-1 left-1 right-1 text-[8px] sm:text-[10px] font-medium text-primary-foreground truncate">
          {title}
        </p>
      </div>
    )
  },
)

ProjectCard.displayName = "ProjectCard"