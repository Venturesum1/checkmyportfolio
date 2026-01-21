"use client";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);

        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => {
          newPulseEffect[relId] = true;
        });
        setPulseEffect(newPulseEffect);

        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: NodeJS.Timeout;

    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => {
          const newAngle = (prev + 0.3) % 360;
          return Number(newAngle.toFixed(3));
        });
      }, 50);
    }

    return () => {
      if (rotationTimer) {
        clearInterval(rotationTimer);
      }
    };
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    if (!nodeRefs.current[nodeId]) return;

    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;

    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200;
    const radian = (angle * Math.PI) / 180;

    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;

    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(
      0.4,
      Math.min(1, 0.4 + 0.6 * ((1 + Math.sin(radian)) / 2))
    );

    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    const relatedItems = getRelatedItems(activeNodeId);
    return relatedItems.includes(itemId);
  };

  const getStatusStyles = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed":
        return "text-foreground bg-background border-foreground";
      case "in-progress":
        return "text-background bg-foreground border-background";
      case "pending":
        return "text-foreground bg-background/40 border-foreground/50";
      default:
        return "text-foreground bg-background/40 border-foreground/50";
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden"
      onClick={handleContainerClick}
    >
      <div
        ref={orbitRef}
        className="relative w-[500px] h-[500px] flex items-center justify-center"
      >
        {/* Orbital rings */}
        <div className="absolute w-[400px] h-[400px] rounded-full border border-border/30" />
        <div className="absolute w-[300px] h-[300px] rounded-full border border-border/20" />
        <div className="absolute w-[200px] h-[200px] rounded-full border border-border/10" />

        {/* Center core */}
        <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent/50 flex items-center justify-center z-10 shadow-lg shadow-accent/20">
          <Zap className="w-8 h-8 text-accent-foreground" />
        </div>

        {/* Timeline nodes */}
        {timelineData.map((item, index) => {
          const position = calculateNodePosition(index, timelineData.length);
          const isExpanded = expandedItems[item.id];
          const isRelated = isRelatedToActive(item.id);
          const isPulsing = pulseEffect[item.id];
          const Icon = item.icon;

          const nodeStyle = {
            transform: `translate(${position.x}px, ${position.y}px)`,
            zIndex: isExpanded ? 200 : position.zIndex,
            opacity: isExpanded ? 1 : position.opacity,
          };

          return (
            <div
              key={item.id}
              ref={(el) => (nodeRefs.current[item.id] = el)}
              className="absolute transition-all duration-700 cursor-pointer"
              style={nodeStyle}
              onClick={(e) => {
                e.stopPropagation();
                toggleItem(item.id);
              }}
            >
              {/* Pulse effect for related nodes */}
              {(isPulsing || isRelated) && (
                <div className="absolute inset-0 -m-2 rounded-full bg-accent/30 animate-ping" />
              )}

              {/* Node circle */}
              <div
                className={`
                  relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center
                  transition-all duration-300 border-2
                  ${isExpanded ? "scale-125 bg-accent border-accent" : "bg-card border-border hover:border-accent/50"}
                  ${isRelated ? "ring-2 ring-accent ring-offset-2 ring-offset-background" : ""}
                `}
              >
                <Icon className={`w-5 h-5 md:w-6 md:h-6 ${isExpanded ? "text-accent-foreground" : "text-foreground"}`} />
              </div>

              {/* Node title */}
              <div
                className={`
                  absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-xs md:text-sm font-medium transition-all duration-300
                  ${isExpanded ? "text-accent" : "text-muted-foreground"}
                `}
              >
                {item.title}
              </div>

              {/* Expanded content card */}
              {isExpanded && (
                <Card className="absolute top-full mt-10 left-1/2 -translate-x-1/2 w-72 md:w-80 bg-card/95 backdrop-blur-lg border-border shadow-2xl">
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        variant="outline"
                        className={getStatusStyles(item.status)}
                      >
                        {item.status === "completed"
                          ? "COMPLETE"
                          : item.status === "in-progress"
                          ? "IN PROGRESS"
                          : "PENDING"}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {item.date}
                      </span>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">{item.content}</p>

                    {/* Energy bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-xs">
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Zap className="w-3 h-3" />
                          Progress
                        </span>
                        <span className="text-foreground">{item.energy}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent to-accent/70 transition-all duration-1000"
                          style={{ width: `${item.energy}%` }}
                        />
                      </div>
                    </div>

                    {/* Related nodes */}
                    {item.relatedIds.length > 0 && (
                      <div className="pt-2 border-t border-border">
                        <div className="flex items-center gap-2 mb-2">
                          <Link className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            Connected Steps
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.relatedIds.map((relatedId) => {
                            const relatedItem = timelineData.find(
                              (i) => i.id === relatedId
                            );
                            return (
                              <Button
                                key={relatedId}
                                variant="ghost"
                                size="sm"
                                className="h-7 text-xs bg-secondary/50 hover:bg-accent hover:text-accent-foreground"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  toggleItem(relatedId);
                                }}
                              >
                                {relatedItem?.title}
                                <ArrowRight className="w-3 h-3 ml-1" />
                              </Button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
