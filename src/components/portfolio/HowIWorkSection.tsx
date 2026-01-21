import { Calendar, Code, FileText, CheckCircle, Rocket, MessageSquare } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";

const workflowData = [
  {
    id: 1,
    title: "Discovery",
    date: "Step 1",
    content: "Understanding your vision, goals, and requirements through detailed discussions and research.",
    category: "Planning",
    icon: MessageSquare,
    relatedIds: [2],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Planning",
    date: "Step 2",
    content: "Creating project roadmap, defining milestones, and establishing clear timelines.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 3,
    title: "Design",
    date: "Step 3",
    content: "Crafting intuitive UI/UX designs and system architecture that align with your brand.",
    category: "Design",
    icon: FileText,
    relatedIds: [2, 4],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 4,
    title: "Development",
    date: "Step 4",
    content: "Building robust, scalable solutions using modern technologies and best practices.",
    category: "Development",
    icon: Code,
    relatedIds: [3, 5],
    status: "in-progress" as const,
    energy: 70,
  },
  {
    id: 5,
    title: "Testing",
    date: "Step 5",
    content: "Rigorous quality assurance, user testing, and performance optimization.",
    category: "Testing",
    icon: CheckCircle,
    relatedIds: [4, 6],
    status: "pending" as const,
    energy: 40,
  },
  {
    id: 6,
    title: "Launch",
    date: "Step 6",
    content: "Deploying your project and providing ongoing support for success.",
    category: "Release",
    icon: Rocket,
    relatedIds: [5],
    status: "pending" as const,
    energy: 20,
  },
];

export const HowIWorkSection = () => {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden py-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            How I <span className="text-gradient">Work</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            My proven process to deliver exceptional results for clients and companies
          </p>
        </div>

        {/* Orbital Timeline */}
        <RadialOrbitalTimeline timelineData={workflowData} />

        {/* Mobile hint */}
        <p className="text-center text-muted-foreground text-sm mt-4 md:hidden">
          Tap on any node to explore details
        </p>
      </div>
    </section>
  );
};