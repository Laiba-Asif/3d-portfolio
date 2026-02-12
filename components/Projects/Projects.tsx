"use client";

import { Code2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";
import { projects } from "@/data/project";
import Link from "next/link";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative overflow-x-hidden bg-background py-24"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 h-[600px] w-[600px] rounded-full bg-accent/5 blur-[150px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full  bg-[hsl(var(--primary)/0.1)] border border-[hsl(var(--primary)/0.2)] px-4 py-2 text-sm font-medium text-accent">
              <Code2 className="h-4 w-4 text-[hsl(var(--primary))]" />
              <span className="text-sm font-medium text-[hsl(var(--primary))]">
                Featured Work
              </span>
            </div>
          </motion.div>
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Projects & <span className="text-gradient">Creations</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A showcase of my best work, featuring AI-powered applications,
            full-stack platforms, and automation tools.
          </p>
        </div>

        {/* Projects Grid - Alternating Layout */}
        <div className="space-y-24">
          {projects.slice(0, 5).map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              isEven={index % 2 === 1}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-20 text-center w-full flex justify-center items-center">
          <Link href="/projects" className="w-full flex justify-center items-center">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative mt-1 w-44.5 px-6 py-3 text-lg font-semibold text-white bg-cyan-500 shadow-lg hover:bg-cyan-600"
              style={{
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0 100%)",
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                 All Projects
                <ArrowRight className="h-5 w-5" />
              </span>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
