import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { projects } from "@/lib/projects";
import ImageViewer from "@/components/ImageViewer";
import fs from "fs";
import path from "path";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found — HDGR",
    };
  }

  return {
    title: `${project.title} — HDGR`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.subtitle,
      images: project.hero ? [{ url: project.hero }] : [],
    },
  };
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

  // For Nepal project, dynamically load all images from folder
  let projectImages = project.images;
  if (slug === "nepal-school") {
    try {
      const nepalDir = path.join(process.cwd(), "public", "images", "nepal");
      const files = fs.readdirSync(nepalDir);
      const imageFiles = files
        .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
        .sort((a, b) => {
          const numA = parseInt(a.match(/\d+/)?.[0] || "0");
          const numB = parseInt(b.match(/\d+/)?.[0] || "0");
          return numA - numB;
        });
      projectImages = imageFiles.map((file) => `/images/nepal/${file}`);
    } catch (error) {
      // Fallback to project.images if directory read fails
      console.error("Failed to read Nepal images directory:", error);
    }
  }

  return (
    <main id="main-content" className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 font-mono text-sm opacity-60 hover:opacity-80 transition-opacity mb-12"
        >
          ← Back to Projects
        </Link>

        {/* Image Viewer - replaces hero section */}
        <div className="mb-12">
          <ImageViewer images={projectImages} projectTitle={project.title} />
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

        {/* Navigation to other projects */}
        <div className="mt-24 pt-12 border-t border-anthracite/10">
          <Link
            href="/projects"
            className="font-mono text-sm opacity-60 hover:opacity-80 transition-opacity"
          >
            ← View All Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
