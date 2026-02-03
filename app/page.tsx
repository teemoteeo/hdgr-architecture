import Link from "next/link";
import Navigation from "@/components/Navigation";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-7xl w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-mono text-6xl md:text-7xl tracking-tight mb-6">
                  HDGR
                </h1>
                <p className="font-mono text-xl mb-4 opacity-80">
                  DESIGN & DEVELOPMENT
                </p>
                <div className="space-y-2 text-anthracite/60 mb-8">
                  <p>· Architectural projects</p>
                  <p>· Visualizations</p>
                  <p>· Interior design</p>
                  <p>· Landscape</p>
                  <p>· Urbanistic</p>
                </div>
                <Link
                  href="/projects"
                  className="inline-block font-mono text-sm tracking-wide border border-anthracite px-6 py-3 hover:bg-anthracite hover:text-warmWhite transition-colors"
                >
                  VIEW PROJECTS
                </Link>
              </div>
              
              <div className="relative aspect-square bg-anthracite/5">
                <div className="w-full h-full flex items-center justify-center text-anthracite/20 font-mono text-sm">
                  HERO IMAGE
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-baseline justify-between mb-12">
              <h2 className="font-mono text-3xl tracking-tight">
                Selected Projects
              </h2>
              <Link
                href="/projects"
                className="font-mono text-sm opacity-60 hover:opacity-100 transition-opacity"
              >
                View All →
              </Link>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-anthracite/10 py-8 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-anthracite/60">
            <p className="font-mono">© 2025 HDGR</p>
            <p>hendigeryj@gmail.com</p>
          </div>
        </footer>
      </main>
    </>
  );
}
