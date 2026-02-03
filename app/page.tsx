"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { ParallaxImage } from "@/components/ParallaxImage";

const titleVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.05,
    },
  },
};

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <main id="main-content">
      {/* Hero Section - Natural Image Sizing */}
      <section className="flex flex-col lg:flex-row relative">
        {/* Text Column - golden ratio proportions */}
        <motion.div
          className="w-full lg:w-[38%] flex items-center justify-center lg:justify-end px-6 md:px-12 lg:pl-12 lg:pr-[80px] py-16 md:py-24 order-2 lg:order-1"
          initial="initial"
          animate="animate"
          variants={staggerContainer}
        >
          <div className="w-full lg:max-w-md">
            {/* Main Title */}
            <motion.h1
              variants={titleVariants}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="text-hero-mobile md:text-hero font-light tracking-tight mb-4 text-balance"
            >
              HDGR
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={titleVariants}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="text-lg md:text-xl font-light text-secondary mb-8 text-balance"
            >
              Design & Development
            </motion.p>

            {/* Design Services Submenu */}
            <motion.div
              variants={titleVariants}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="mb-6"
            >
              <h3 className="text-xs font-medium tracking-wider uppercase mb-2 underline underline-offset-4">
                Design Services:
              </h3>
              <ul className="text-sm text-secondary space-y-1">
                <li>• Architectural projects</li>
                <li>• Visualizations</li>
                <li>• Interior design</li>
                <li>• Landscape</li>
                <li>• Urbanistic</li>
              </ul>
            </motion.div>

            {/* Real Estate Development Submenu */}
            <motion.div
              variants={titleVariants}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <h3 className="text-xs font-medium tracking-wider uppercase mb-2 underline underline-offset-4">
                Real Estate Development:
              </h3>
              <ul className="text-sm text-secondary space-y-1">
                <li>• For Sell (for investors)</li>
                <li>• For Rent (for people)</li>
                <li>• Financial & Law Advisory</li>
                <li>• Archive / Sold</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Image Column - golden ratio proportions */}
        <div
          className="w-full lg:w-[62%] order-1 lg:order-2 pt-[30px] pr-[15px] pb-[30px] pl-0"
        >
          <div className="relative w-[85%] ml-auto">
            <div className="aspect-[1920/1265]">
              <ParallaxImage
                src="/images/header.jpg"
                alt="HDGR Architecture"
                speed={0.3}
                priority
                className="h-full"
              />
            </div>
            {/* Image Caption Row - fixed to image width */}
            <div className="flex justify-between items-center mt-4">
              <span className="text-xs font-medium tracking-wider uppercase">
                BEZA Pavilion
              </span>
              <span className="text-xs font-medium tracking-wider uppercase underline underline-offset-4">
                Inhouse Design + Development
              </span>
              <span className="text-xs font-medium tracking-wider uppercase">
                On Sale
              </span>
            </div>
          </div>
        </div>

      </section>

      {/* Selected Projects Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-background">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15%" }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
            className="mb-16 md:mb-20"
          >
            <div className="flex items-end justify-between mb-4">
              <h2 className="text-2xl md:text-3xl font-normal tracking-tight">
                Selected Work
              </h2>
              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="hidden md:flex flex-col items-center gap-2 text-tertiary"
              >
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="w-[1px] h-12 bg-tertiary"
                />
              </motion.div>
              <Link
                href="/projects"
                className="text-[13px] text-secondary hover:text-primary transition-colors duration-150 group relative hidden md:block"
              >
                View All
                <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-150 origin-left" />
              </Link>
            </div>
            <div className="w-12 h-[2px] bg-primary" />
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={index}
              />
            ))}
          </div>

          {/* Mobile View All Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center md:hidden"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium group"
            >
              <span className="relative">
                View All Projects
                <span className="absolute left-0 right-0 bottom-0 h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </span>
              <span className="transform group-hover:translate-x-1 transition-transform duration-300">
                →
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-30%" }}
        transition={{ duration: 0.6 }}
        className="border-t border-border py-12 px-6 md:px-12"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-tertiary">© {new Date().getFullYear()} HDGR. All rights reserved.</p>
          <a
            href="mailto:hendigeryj@gmail.com"
            className="text-[13px] text-secondary hover:text-primary transition-colors duration-150 group relative"
          >
            hendigeryj@gmail.com
            <span className="absolute left-0 right-0 bottom-0 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-150 origin-left" />
          </a>
        </div>
      </motion.footer>
    </main>
  );
}
