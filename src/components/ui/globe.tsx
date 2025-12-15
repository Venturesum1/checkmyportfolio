"use client"

import createGlobe, { COBEOptions } from "cobe"
import { useCallback, useEffect, useRef, useState } from "react"

import { cn } from "@/lib/utils"

export interface MarkerWithName {
  location: [number, number]
  size: number
  name: string
}

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [22.5726, 88.3639], size: 0.06 },
    { location: [28.6139, 77.2090], size: 0.07 },
    { location: [30.7333, 76.7794], size: 0.06 },
    { location: [31.1048, 77.1734], size: 0.05 },
    { location: [31.6340, 74.8723], size: 0.06 }
  ],
}

const DEFAULT_MARKERS: MarkerWithName[] = [
  { location: [22.5726, 88.3639], size: 0.06, name: "Kolkata" },
  { location: [28.6139, 77.2090], size: 0.07, name: "Delhi" },
  { location: [30.7333, 76.7794], size: 0.06, name: "Chandigarh" },
  { location: [31.1048, 77.1734], size: 0.05, name: "Shimla" },
  { location: [31.6340, 74.8723], size: 0.06, name: "Amritsar" }
]

export function Globe({
  className,
  config = GLOBE_CONFIG,
  markers = DEFAULT_MARKERS,
}: {
  className?: string
  config?: COBEOptions
  markers?: MarkerWithName[]
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const pointerInteracting = useRef(null)
  const pointerInteractionMovement = useRef(0)
  const [r, setR] = useState(0)
  const phiRef = useRef(0)
  const widthRef = useRef(0)
  const globeRef = useRef<ReturnType<typeof createGlobe> | null>(null)
  const [activeLocation, setActiveLocation] = useState<string | null>(null)

  // Auto-cycle locations continuously
  useEffect(() => {
    let index = 0
    setActiveLocation(markers[0].name)
    
    const interval = setInterval(() => {
      index = (index + 1) % markers.length
      setActiveLocation(markers[index].name)
    }, 2500)

    return () => clearInterval(interval)
  }, [markers])

  const updatePointerInteraction = (value: any) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab"
    }
  }

  const updateMovement = (clientX: any) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      setR(delta / 200)
    }
  }

  const onRender = useCallback(
    (state: Record<string, any>) => {
      if (!pointerInteracting.current) phiRef.current += 0.005
      state.phi = phiRef.current + r
      state.width = widthRef.current * 2
      state.height = widthRef.current * 2
    },
    [r],
  )

  const initGlobe = useCallback(() => {
    if (!canvasRef.current || !containerRef.current) return
    
    if (globeRef.current) {
      globeRef.current.destroy()
    }

    widthRef.current = containerRef.current.offsetWidth

    globeRef.current = createGlobe(canvasRef.current, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender,
    })

    canvasRef.current.style.opacity = "1"
  }, [config, onRender])

  useEffect(() => {
    initGlobe()

    const handleResize = () => {
      initGlobe()
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
      if (globeRef.current) {
        globeRef.current.destroy()
      }
    }
  }, [initGlobe])

  return (
    <div
      ref={containerRef}
      className={cn(
        "absolute inset-0 mx-auto aspect-square w-full",
        className,
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
        )}
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
      
      {/* Location badge */}
      {activeLocation && (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-lg animate-fade-in">
          📍 {activeLocation}
        </div>
      )}
    </div>
  )
}