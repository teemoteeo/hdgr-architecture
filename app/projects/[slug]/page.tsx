import { notFound } from "next/navigation";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import { projects } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
   const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Navigation />
      
      <main className="pt-32 pb-24 px-6 min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Back link */}
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-mono text-sm opacity-60 hover:opacity-100 transition-opacity mb-12"
          >
            ← Back to Projects
          </Link>

          {/* Hero Image */}
          <div className="relative aspect-[16/9] bg-anthracite/5 mb-12">
            <div className="w-full h-full flex items-center justify-center text-anthracite/20 font-mono text-sm">
              HERO IMAGE
            </div>
          </div>

          {/* Project Info */}
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="md:col-span-2">
              <h1 className="font-mono text-4xl md:text-5xl tracking-tight mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-anthracite/80 mb-8">
                {project.subtitle}
              </p>
              <div className="prose prose-lg max-w-none">
                <p className="leading-relaxed">{project.description}</p>
              </div>
            </div>

            <div className="space-y-6 text-sm">
              <div>
                <p className="font-mono opacity-60 mb-1">Location</p>
                <p>{project.location}</p>
              </div>
              
              <div>
                <p className="font-mono opacity-60 mb-1">Year</p>
                <p>{project.year}</p>
              </div>
              
              <div>
                <p className="font-mono opacity-60 mb-1">Type</p>
                <p>{project.type}</p>
              </div>

              {project.status && (
                <div>
                  <p className="font-mono opacity-60 mb-1">Status</p>
                  <p>{project.status}</p>
                </div>
              )}

              {project.area && (
                <div>
                  <p className="font-mono opacity-60 mb-1">Area</p>
                  <p>{project.area}</p>
                </div>
              )}

              {project.collaboration && project.collaboration.length > 0 && (
                <div>
                  <p className="font-mono opacity-60 mb-1">Collaboration</p>
                  <div className="space-y-1">
                    {project.collaboration.map((collab, i) => (
                      <p key={i}>{collab}</p>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <p className="font-mono opacity-60 mb-2">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-2 py-1 border border-anthracite/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery Placeholder */}
          <div className="space-y-8">
            {project.images.map((img, i) => (
              <div key={i} className="relative aspect-[16/9] bg-anthracite/5">
                <div className="w-full h-full flex items-center justify-center text-anthracite/20 font-mono text-sm">
                  IMAGE {i + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Navigation to other projects */}
          <div className="mt-24 pt-12 border-t border-anthracite/10">
            <Link
              href="/projects"
              className="font-mono text-sm opacity-60 hover:opacity-100 transition-opacity"
            >
              ← View All Projects
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
