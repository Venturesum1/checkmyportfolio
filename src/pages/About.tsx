import React from "react";
import { FullScreenScrollFX, FullScreenFXAPI } from "@/components/ui/full-screen-scroll-fx";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const sections = [
  {
    leftLabel: "Vision",
    title: <>Creative Excellence</>,
    rightLabel: "2024",
    background: "https://images.pexels.com/photos/3289156/pexels-photo-3289156.jpeg?cs=srgb&dl=pexels-alexfu-3289156.jpg&fm=jpg",
  },
  {
    leftLabel: "Mission",
    title: <>Innovation First</>,
    rightLabel: "Design",
    background: "https://images.pexels.com/photos/163790/at-night-under-a-lantern-guy-night-city-163790.jpeg",
  },
  {
    leftLabel: "Values",
    title: <>Continuous Growth</>,
    rightLabel: "Code",
    background: "https://images.pexels.com/photos/9817/pexels-photo-9817.jpeg",
  },
  {
    leftLabel: "Goal",
    title: <>Digital Impact</>,
    rightLabel: "Future",
    background: "https://images.pexels.com/photos/939807/pexels-photo-939807.jpeg",
  },
];

export default function About() {
  const apiRef = React.useRef<FullScreenFXAPI>(null);

  return (
    <div className="relative">
      <Link 
        to="/" 
        className="fixed top-6 left-6 z-50 flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 backdrop-blur-sm px-4 py-2 rounded-lg"
      >
        <ArrowLeft className="w-4 h-4" />
        Back
      </Link>
      
      <FullScreenScrollFX
        sections={sections}
        header={<><div>About Me</div></>}
        footer={<div></div>}
        showProgress
        durations={{ change: 0.7, snap: 800 }}
        colors={{
          text: "rgba(245,245,245,0.92)",
          overlay: "rgba(0,0,0,0.45)",
          pageBg: "hsl(240 10% 3.9%)",
          stageBg: "hsl(240 10% 3.9%)",
        }}
      />
    </div>
  );
}