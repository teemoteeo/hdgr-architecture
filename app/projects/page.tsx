"use client";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main id="main-content" className="pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-mono text-5xl tracking-tight mb-16"
        >
          Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </main>
  );
}
