"use client";

import Link from "next/link";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <div className="relative aspect-[4/3] bg-anthracite/5 overflow-hidden mb-4">
        <div className="absolute inset-0 bg-anthracite/0 group-hover:bg-anthracite/10 transition-colors duration-300" />
        {/* Placeholder per immagine */}
        <div className="w-full h-full flex items-center justify-center text-anthracite/20 font-mono text-sm">
          IMAGE
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="font-mono text-lg tracking-tight group-hover:opacity-70 transition-opacity">
          {project.title}
        </h3>
        <p className="text-sm text-anthracite/60">
          {project.location} · {project.year}
        </p>
        {project.status && (
          <p className="text-xs font-mono text-anthracite/80">
            {project.status}
          </p>
        )}
      </div>
    </Link>
  );
}
