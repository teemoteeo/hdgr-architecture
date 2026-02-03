import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
  return (
    <>
      <Navigation />
      
      <main className="pt-32 pb-24 px-6 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-mono text-5xl tracking-tight mb-16">
            Projects
          </h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
