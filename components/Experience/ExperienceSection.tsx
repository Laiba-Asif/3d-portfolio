"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Briefcase, Building2 } from "lucide-react";
import GradientSphere from "../GradientSpheres";

const allExperiences = [
  {
    id: 3,
    title: "Junior Frontend Web Developer",
    company: "Elif Technologies",
    period: "Nov 2022 - Apr2024",
    description:
      "Collaborated on a multi-page doctor appointment system using HTML, Bootstrap, and jQuery to enhance user experience and functionality.",
    technologies: ["Umbraco CMS", "JQuery", "CSS", "C#", "Bootstrap"],
    logo: "/experience/elif.jpeg",
  },
  {
    id: 2,
    title: "Frontend Web Developer Internship",
    company: "2nd Place",
    period: "Nov 2024 - Feb 2025",
    description:
      "Developed a React-based frontend integrating Google Places API to fetch and display restaurants and hostels within a 19 km radius of the user’s location. Implemented location-based search optimization and CRUD operations for hostel data using MySQL with Sequelize ORM, enabling efficient data management",
    technologies: ["React", "Redux", "Context API", "State Management", "Google Places API"],
    logo: "/experience/2ndplace.jpeg",
  },
  {
    id: 4,
    title: "MERN Developer",
    company: "Virtual Taps",
    period: "June, 2025 - August, 2025",
    description:
      "Developed a digital loyalty card system for restaurants and salons, enabling repeat purchase, rewards through Apple Wallet Integration.",
    technologies: ["Next.js", "MongoDB", "PostgreSQL", "Node.js", "Apple Wallet", "Express.js"],
    logo: "/experience/virtualtaps.jpeg",
  },
  {
    id: 5,
    title: "Associate Software Engineer Intern",
    company: "Wamo Labs",
    period: "Oct, 2025 - Jan, 2026",
    description:
      "Implemented Redis-based caching and background job processing using BullMQ to improve application performance and reliability. Built modular, reusable UI components and integrated third-party APIs, enhancing the overall user experience and maintainability.Collaborated with cross-functional teams to deliver scalable and high-performance web applications.",
    technologies: ["JavaScript", "PostgreSQL", "Frontend", "Backend","performance optimization", "Redis", "BullMQ", "API Integration"],
    logo: "/experience/wamolabs.jpeg",
  },
  // {
  //   id: 6,
  //   title: "Associate Software Engineer ",
  //   company: "Devsinc",
  //   period: "January, 2026 - Present",
  //   description:
  //     "Contributing to scalable software engineering projects applying AI and core CS concepts. Hands-on experience with  LLMs, frontend, backend and AI/ML.",
  //   technologies: ["LLM", "Frontend", "Backend", "AI/ML"],
  //   logo: "/experience/devsinc.png",
  // },
];

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
  const reversedExperiences = [...allExperiences].reverse();

  const toggleExperience = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section
      ref={containerRef}
      id="experience"
      className="relative py-24 md:py-32 overflow-hidden bg-[hsl(var(--bg-color))]"
    >
      {/* Subtle background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-[hsl(var(--primary)/0.5)] rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[hsl(var(--primary)/0.1)] border border-[hsl(var(--primary)/0.2)] mb-6">
            <Briefcase className="w-4 h-4 text-[hsl(var(--primary))]" />
            <span className="text-sm font-medium text-[hsl(var(--primary))]">
              Career Journey
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[hsl(var(--card-foreground))] mb-4 tracking-tight">
            Experience
          </h2>
          <p className="text-[hsl(var(--muted-foreground))] text-lg max-w-2xl mx-auto">
            A curated timeline of professional milestones and the expertise cultivated along the way.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Animated Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[hsl(var(--border)/0.3)] md:-translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[hsl(var(--primary))] via-[hsl(var(--primary))] to-[hsl(var(--primary)/0.2)]"
              style={{ height: lineHeight }}
            />
          </div>

          {/* Experience Cards */}
          <div className="space-y-8 md:space-y-12">
            {reversedExperiences.map((exp, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`relative flex items-start gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-4 h-4 rounded-full border-4 transition-colors duration-300 ${
                        openIndex === index
                          ? "bg-[hsl(var(--primary))] border-[hsl(var(--primary))] shadow-lg shadow-[hsl(var(--primary)/0.3)]"
                          : "bg-[hsl(var(--bg-color))] border-[hsl(var(--muted-foreground)/0.3)]"
                      }`}
                    />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-1/2" />

                  {/* Card */}
                  <div className={`ml-8 md:ml-0 w-full md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"}`}>
                    <motion.div whileHover={{ y: -4 }} className="group relative">
                      {/* Card glow */}
                      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-[hsl(var(--primary)/0.2)] via-[hsl(var(--primary)/0.1)] to-transparent opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

                      <div className="relative rounded-2xl border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--card)/0.5)] backdrop-blur-sm overflow-hidden transition-all duration-300 group-hover:border-[hsl(var(--primary)/0.3)] group-hover:shadow-xl group-hover:shadow-[hsl(var(--primary)/0.05)]">
                        {/* Header */}
                        <button
                          onClick={() => toggleExperience(index)}
                          className="w-full p-6 flex items-start gap-4 text-left transition-colors hover:bg-[hsl(var(--muted)/0.3)]"
                        >
                          {/* Logo */}
                          <div className="relative flex-shrink-0">
                            {exp.logo ? (
                              <div className="w-14 h-14 rounded-xl overflow-hidden border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--bg-color))] shadow-sm group-hover:border-[hsl(var(--primary)/0.3)] transition-colors">
                                <img
                                  src={exp.logo}
                                  alt={exp.company}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ) : (
                              <div className="w-14 h-14 rounded-xl border border-[hsl(var(--border)/0.5)] bg-[hsl(var(--muted)/0.5)] flex items-center justify-center group-hover:border-[hsl(var(--primary)/0.3)] transition-colors">
                                <Building2 className="w-6 h-6 text-[hsl(var(--muted-foreground))]" />
                              </div>
                            )}
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <div>
                                <h3 className="text-lg font-semibold text-[hsl(var(--card-foreground))] group-hover:text-[hsl(var(--primary))] transition-colors">
                                  {exp.title}
                                </h3>
                                <p className="text-sm text-[hsl(var(--muted-foreground))] mt-0.5">{exp.company}</p>
                              </div>
                              <motion.div
                                animate={{ rotate: openIndex === index ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="flex-shrink-0 w-8 h-8 rounded-full border border-[hsl(var(--border)/0.5)] flex items-center justify-center bg-[hsl(var(--bg-color))] group-hover:border-[hsl(var(--primary)/0.3)] transition-colors"
                              >
                                <ChevronDown className="w-4 h-4 text-[hsl(var(--muted-foreground))] group-hover:text-[hsl(var(--primary))] transition-colors" />
                              </motion.div>
                            </div>
                            <div className="mt-2 inline-flex items-center px-2.5 py-1 rounded-full bg-[hsl(var(--muted)/0.5)] border border-[hsl(var(--border)/0.5)]">
                              <span className="text-xs font-medium text-[hsl(var(--muted-foreground))]">
                                {exp.period}
                              </span>
                            </div>
                          </div>
                        </button>

                        {/* Expandable Content */}
                        <motion.div
                          initial={false}
                          animate={{
                            height: openIndex === index ? "auto" : 0,
                            opacity: openIndex === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 border-t border-[hsl(var(--border)/0.3)]">
                            <p className="text-[hsl(var(--muted-foreground))] leading-relaxed mb-4">
                              {exp.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-[hsl(var(--primary)/0.1)] text-[hsl(var(--primary))] border border-[hsl(var(--primary)/0.2)] transition-colors hover:bg-[hsl(var(--primary)/0.2)]"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default ExperienceSection;
