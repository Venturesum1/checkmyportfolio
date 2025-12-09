import InteractiveSelector from '@/components/ui/interactive-selector';

export const ProjectsSection = () => {
  return (
    <section className="min-h-screen w-full bg-background flex flex-col items-center justify-center py-20 px-4">
      <div className="w-full max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
          My Projects
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-xl mx-auto">
          Explore my recent work spanning web development, algorithms, and full-stack applications.
        </p>
      </div>
      
      <InteractiveSelector />
    </section>
  );
};