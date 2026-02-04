"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const CardContent = () => (
    <>
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden mb-5 bg-neutral-100">
        <motion.div
          className="w-full h-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        >
          {project.hero ? (
            <Image
              src={project.hero}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-tertiary text-sm">
              No image
            </div>
          )}
        </motion.div>
        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-600 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="text-lg font-medium tracking-tight group-hover:opacity-85 transition-opacity duration-150">
          {project.title}
        </h3>
        <p className="text-[13px] text-secondary font-normal">
          {project.location} · {project.year}
        </p>

        {/* Accent underline */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 0 }}
          className="h-[2px] bg-primary origin-left"
          transition={{ duration: 0 }}
          style={{
            width: "0px",
          }}
        >
          <motion.div
            className="h-full bg-primary"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
            style={{ transformOrigin: "left", width: "40px" }}
          />
        </motion.div>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20%" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.4, 0, 0.2, 1] }}
    >
      <Link href={`/projects/${project.slug}`} className="group block">
        <CardContent />
      </Link>
    </motion.div>
  );
}
