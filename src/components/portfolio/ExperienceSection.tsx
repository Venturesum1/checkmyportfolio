import { Briefcase, FlaskConical, Code, Monitor } from 'lucide-react';
import DisplayCards from '@/components/ui/display-cards';

const experienceData = [
  {
    icon: <FlaskConical className="size-4 text-cyan-300" />,
    title: "Research & Development Engineer",
    description: "Chitkara University",
    location: "Rajpura, Punjab",
    date: "Jul 2025 – Present",
    details: [
      "Pioneered data collection, training, evaluation, and deployment stages of ML pipelines with faculty and student researchers, saving 20 hours per week",
      "Developed and fine-tuned real-time image classification and pattern recognition models using Python, TensorFlow and PyTorch"
    ],
    iconClassName: "bg-cyan-500/20",
    titleClassName: "text-cyan-400",
    className: "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 z-10",
  },
  {
    icon: <Code className="size-4 text-purple-300" />,
    title: "Software Engineer",
    description: "EkAnek, Foxy",
    location: "Vasant Vihar, New Delhi",
    date: "Oct 2024 – Jul 2025",
    details: [
      "Pioneered modular UI enhancement components using React, boosting user engagement by 5%",
      "Developed UI improvement modules enhancing UX across web and mobile",
      "Improved app flows, UX structure and reusable components for smoother navigation",
      "Enhanced app personalization for smoother onboarding and feature discovery"
    ],
    iconClassName: "bg-purple-500/20",
    titleClassName: "text-purple-400",
    className: "[grid-area:stack] translate-x-12 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0 z-20",
  },
  {
    icon: <Monitor className="size-4 text-green-300" />,
    title: "Software Engineer Intern",
    description: "InformDS, Uncover.co.in",
    location: "Gurugram, Haryana",
    date: "Jun 2024 – Oct 2024",
    details: [
      "Built a React-based Meddo POS Dashboard displaying patient records and consultation data",
      "Developed a Next.js self-login workflow reducing patient onboarding friction",
      "Created a scalable SEO page creation platform using Angular7",
      "Built React-based platform for online dermatology consultation bookings"
    ],
    iconClassName: "bg-green-500/20",
    titleClassName: "text-green-400",
    className: "[grid-area:stack] translate-x-24 translate-y-20 hover:translate-y-10 z-30",
  },
];

export const ExperienceSection = () => {
  return (
    <section className="min-h-screen bg-background flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20 pointer-events-none" />
      
      <div className="text-center mb-16 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Briefcase className="size-6 text-accent" />
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Career</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold text-foreground uppercase tracking-tight font-display">
          My Experience
        </h2>
        <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
          From research labs to startups, building innovative solutions that drive real-world impact across ML, frontend, and full-stack development.
        </p>
        <p className="text-xs text-muted-foreground/60 mt-2 uppercase tracking-widest">
          Hover on cards to view details
        </p>
      </div>
      
      <div className="relative z-10">
        <DisplayCards cards={experienceData} />
      </div>
    </section>
  );
};