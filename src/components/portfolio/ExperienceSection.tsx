import { Briefcase, FlaskConical, Code, Monitor, CheckCircle2 } from 'lucide-react';
import { Timeline } from '@/components/ui/timeline';

const experienceData = [
  {
    title: "Jul 2025",
    content: (
      <div>
        <div className="flex items-start sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <span className="inline-flex items-center justify-center rounded-full bg-cyan-500/20 p-1.5 sm:p-2 shrink-0">
            <FlaskConical className="size-4 sm:size-5 text-cyan-400" />
          </span>
          <div className="min-w-0">
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-cyan-400 leading-tight">Research & Development Engineer</h4>
            <p className="text-foreground font-medium text-sm sm:text-base">Chitkara University</p>
            <p className="text-muted-foreground text-xs sm:text-sm">Rajpura, Punjab</p>
          </div>
        </div>
        <p className="text-muted-foreground text-xs sm:text-sm font-normal mb-4 sm:mb-6">
          Pioneering machine learning research and development in collaboration with faculty and student researchers.
        </p>
        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          <div className="flex gap-2 items-start text-foreground text-xs sm:text-sm">
            <CheckCircle2 className="size-3.5 sm:size-4 text-cyan-400 mt-0.5 shrink-0" />
            <span>Pioneered data collection, training, evaluation, and deployment stages of ML pipelines, saving 20 hours per week</span>
          </div>
          <div className="flex gap-2 items-start text-foreground text-xs sm:text-sm">
            <CheckCircle2 className="size-3.5 sm:size-4 text-cyan-400 mt-0.5 shrink-0" />
            <span>Developed and fine-tuned real-time image classification and pattern recognition models using Python, TensorFlow and PyTorch</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {['Python', 'TensorFlow', 'PyTorch', 'ML', 'Deep Learning'].map((tech) => (
            <span key={tech} className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-[10px] sm:text-xs font-medium border border-cyan-500/20">
              {tech}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Oct 2024",
    content: (
      <div>
        <div className="flex items-start sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <span className="inline-flex items-center justify-center rounded-full bg-purple-500/20 p-1.5 sm:p-2 shrink-0">
            <Code className="size-4 sm:size-5 text-purple-400" />
          </span>
          <div className="min-w-0">
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-purple-400 leading-tight">Software Engineer</h4>
            <p className="text-foreground font-medium text-sm sm:text-base">EkAnek, Foxy</p>
            <p className="text-muted-foreground text-xs sm:text-sm">Vasant Vihar, New Delhi</p>
          </div>
        </div>
        <p className="text-muted-foreground text-xs sm:text-sm font-normal mb-4 sm:mb-6">
          Built modular UI components and feature blocks that enhanced user engagement across key product workflows.
        </p>
        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          <div className="flex gap-2 items-start text-foreground text-xs sm:text-sm">
            <CheckCircle2 className="size-3.5 sm:size-4 text-purple-400 mt-0.5 shrink-0" />
            <span>Pioneered modular UI enhancement components using React, boosting user engagement by 5%</span>
          </div>
          <div className="flex gap-2 items-start text-foreground text-xs sm:text-sm">
            <CheckCircle2 className="size-3.5 sm:size-4 text-purple-400 mt-0.5 shrink-0" />
            <span>Developed UI improvement modules enhancing UX across web and mobile</span>
          </div>
          <div className="flex gap-2 items-start text-foreground text-xs sm:text-sm">
            <CheckCircle2 className="size-3.5 sm:size-4 text-purple-400 mt-0.5 shrink-0" />
            <span>Improved app flows, UX structure and reusable components for smoother navigation</span>
          </div>
          <div className="flex gap-2 items-start text-foreground text-xs sm:text-sm">
            <CheckCircle2 className="size-3.5 sm:size-4 text-purple-400 mt-0.5 shrink-0" />
            <span>Enhanced app personalization for smoother onboarding and feature discovery</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {['React', 'TypeScript', 'React Native', 'UI/UX', 'Mobile'].map((tech) => (
            <span key={tech} className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-purple-500/10 text-purple-400 text-[10px] sm:text-xs font-medium border border-purple-500/20">
              {tech}
            </span>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Jun 2024",
    content: (
      <div>
        <div className="flex items-start sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
          <span className="inline-flex items-center justify-center rounded-full bg-green-500/20 p-1.5 sm:p-2 shrink-0">
            <Monitor className="size-4 sm:size-5 text-green-400" />
          </span>
          <div className="min-w-0">
            <h4 className="text-base sm:text-lg md:text-xl font-bold text-green-400 leading-tight">Software Engineer Intern</h4>
            <p className="text-foreground font-medium text-sm sm:text-base">InformDS, Uncover.co.in</p>
            <p className="text-muted-foreground text-xs sm:text-sm">Gurugram, Haryana</p>
          </div>
        </div>
        <p className="text-muted-foreground text-xs sm:text-sm font-normal mb-4 sm:mb-6">
          Built healthcare and consultation platforms improving patient experience and operational efficiency.
        </p>
        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
          <div className="flex gap-2 items-start text-foreground text-xs sm:text-sm">
            <CheckCircle2 className="size-3.5 sm:size-4 text-green-400 mt-0.5 shrink-0" />
            <span>Built a React-based Meddo POS Dashboard displaying patient records and consultation data</span>
          </div>
          <div className="flex gap-2 items-start text-foreground text-xs sm:text-sm">
            <CheckCircle2 className="size-3.5 sm:size-4 text-green-400 mt-0.5 shrink-0" />
            <span>Developed a Next.js self-login workflow reducing patient onboarding friction</span>
          </div>
          <div className="flex gap-2 items-start text-foreground text-xs sm:text-sm">
            <CheckCircle2 className="size-3.5 sm:size-4 text-green-400 mt-0.5 shrink-0" />
            <span>Created a scalable SEO page creation platform using Angular7</span>
          </div>
          <div className="flex gap-2 items-start text-foreground text-xs sm:text-sm">
            <CheckCircle2 className="size-3.5 sm:size-4 text-green-400 mt-0.5 shrink-0" />
            <span>Built React-based platform for online dermatology consultation bookings</span>
          </div>
        </div>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {['React', 'Next.js', 'Angular', 'TypeScript', 'Healthcare'].map((tech) => (
            <span key={tech} className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-green-500/10 text-green-400 text-[10px] sm:text-xs font-medium border border-green-500/20">
              {tech}
            </span>
          ))}
        </div>
      </div>
    ),
  },
];

export const ExperienceSection = () => {
  return (
    <section className="min-h-screen bg-background relative overflow-hidden">
      <Timeline data={experienceData} />
    </section>
  );
};