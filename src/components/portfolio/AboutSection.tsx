import { FileTree } from "@/components/ui/file-tree"

const aboutFileStructure = [
  {
    name: "about-me",
    type: "folder" as const,
    children: [
      {
        name: "experience",
        type: "folder" as const,
        children: [
          { name: "frontend-dev.tsx", type: "file" as const, extension: "tsx" },
          { name: "backend-dev.ts", type: "file" as const, extension: "ts" },
          { name: "ui-design.css", type: "file" as const, extension: "css" },
        ],
      },
      {
        name: "skills",
        type: "folder" as const,
        children: [
          { name: "react.tsx", type: "file" as const, extension: "tsx" },
          { name: "typescript.ts", type: "file" as const, extension: "ts" },
          { name: "node.js", type: "file" as const, extension: "js" },
        ],
      },
      {
        name: "education",
        type: "folder" as const,
        children: [
          { name: "degree.md", type: "file" as const, extension: "md" },
          { name: "certifications.json", type: "file" as const, extension: "json" },
        ],
      },
      { name: "bio.md", type: "file" as const, extension: "md" },
      { name: "goals.tsx", type: "file" as const, extension: "tsx" },
    ],
  },
  {
    name: "interests",
    type: "folder" as const,
    children: [
      { name: "coding.ts", type: "file" as const, extension: "ts" },
      { name: "music.svg", type: "file" as const, extension: "svg" },
      { name: "travel.png", type: "file" as const, extension: "png" },
    ],
  },
  { name: "contact.json", type: "file" as const, extension: "json" },
  { name: "resume.md", type: "file" as const, extension: "md" },
]

export function AboutSection() {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-background">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore my profile like navigating through a codebase
          </p>
        </div>
        
        <div className="flex justify-center">
          <FileTree data={aboutFileStructure} className="w-full max-w-md" />
        </div>
      </div>
    </section>
  )
}