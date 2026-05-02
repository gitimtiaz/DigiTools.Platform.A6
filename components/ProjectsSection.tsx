"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProjectTag {
  label: string;
  colorClass: string;
}

interface ProjectChallengeFuture {
  challenge: string;
  future: string;
}

interface Project {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  tags: ProjectTag[];
  description: string;
  details: ProjectChallengeFuture;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "keenkeeper",
    title: "KeenKeeper",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCUfDPDzppab7p7uP6bIgHkE12fAQd9ScyrZzkEHNqYZCSiwALwVXgVV0l7AnrxX6spHHUKVWXxwf84xqWbFCYnOLbgM4WJs8_Jcaal22hceT_itEecQfWFSu4c1VEeQ9F_V2ANCUEmSdXTLBOGP1BXbHDY0aS4PpBhHbbXpcuHsfufUwPBu5pkjNr4obPxq7fxieE2yTLS1JSP-VjvnAWezWjRBFzu5Ckn14F7IJhPpLksPp3GwI9WzZYjyd4vzwU52g6GQoeoCZv1",
    imageAlt: "KeenKeeper Web Application Dashboard",
    tags: [
      { label: "Next.js", colorClass: "bg-primary/20 text-primary" },
      { label: "React", colorClass: "bg-secondary/20 text-secondary" },
    ],
    description:
      "A modern productivity/management web app focused on clean UI and efficient workflows. Features include BetterAuth integration and component-based architecture for high modularity.",
    details: {
      challenge:
        "Implementing seamless real-time state synchronization with Next.js Server Components and complex auth logic.",
      future:
        "Adding AI-powered task prioritization and collaborative workspace features for team environments.",
    },
    githubUrl: "https://github.com/gitimtiaz/keenkeeper-nextjs-a7",
    liveUrl: "#",
  },
  {
    id: "digitools",
    title: "DigiTools Platform",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD2bK8NjqZl9rWChGPv4lVzvs7keqmISoshYgTtXHFfg_VJ7BKJdnNTzjRNQv8A0AqDwRRI6Yibauw1I0lwfHmmZxpKtbrj0PqS8B82l-bJnOUsoa9H_ODWauNhWu5ShJusyvJjtR-uAZMkouaVl2vPDuB_OADUTRVnA0lJbKNf3o-d_NPM77fgegfa6kjnRqIhQHpacxEV_qxcwgbts8bhV6xfr8Crzf1Siab-ahOy4_6sFLIp5hbHPgsvrFWRQIAUYytFOUy5uy6D",
    imageAlt: "DigiTools Platform Interface",
    tags: [
      { label: "Utility-Based Arch", colorClass: "bg-tertiary/20 text-tertiary" },
    ],
    description:
      "A collection of useful digital tools built for practical everyday use, focusing on problem-solving through a utility-based software architecture.",
    details: {
      challenge:
        "Maintaining high performance while scaling the number of independent utility modules within a single codebase.",
      future:
        "Integrating browser extension support and offline capabilities using Progressive Web App (PWA) standards.",
    },
    githubUrl: "https://github.com/gitimtiaz/DigiTools.Platform.A6",
  },
  {
    id: "cg-simulation",
    title: "CG Mathematical Simulation",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAzMGA2KIJqqDPGMhqh8mioLg3TdrBxgKkDrDk81jlixp9tVzLzKJt4l4H6Li999PeFrT987W_zxyP3KGHaeinpZKYCbF-O1RV2ypYSEhGfiu8bsWQXVda2DCATP-KUN1-YHPzyp_vWUa-1HS8Y_f4Dg-lD0QWUdeYkAtAsZNw-5loCXeG9CMl6LvpIjZrdcIJXh8Fi9hPc1R9KgoXhJiARuU3nyX6i4JbEuZYnxIaeowsg7AOzBjoWBXOzo-U_dIQFwfHQBS_53y8u",
    imageAlt: "CG Simulation 3D Visualization",
    tags: [
      { label: "C++ / Graphics", colorClass: "bg-secondary/20 text-secondary" },
    ],
    description:
      "A high-fidelity computer graphics simulation project exploring procedural generation and mathematical visualization.",
    details: {
      challenge:
        "Optimizing vertex calculations for real-time rendering without GPU hardware acceleration.",
      future:
        "Porting the logic to WebGL for browser-based interactive visualizations.",
    },
    featured: true,
  },
];

function ProjectCard({ project, index }: { project: Project, index: number }) {
  const isFeatured = project.featured;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
      className={`glass-card rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(192,193,255,0.1)] hover:border-primary/30 ${isFeatured ? "lg:col-span-2" : ""}`}
    >
      <div className={`grid ${isFeatured ? "md:grid-cols-2" : ""}`}>
        <div className={`relative overflow-hidden ${isFeatured ? "aspect-video md:aspect-auto" : "aspect-video"}`}>
          <Image
            src={project.image}
            alt={project.imageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
            unoptimized
          />
          {!isFeatured && (
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent flex items-end p-8">
              <div>
                <h3 className="font-h3 text-h3 text-white">{project.title}</h3>
                <div className="flex gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.label}
                      className={`text-xs font-code px-2 py-1 rounded ${tag.colorClass}`}
                    >
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="p-8 space-y-4">
          {isFeatured && (
            <>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag.label}
                    className={`text-xs font-code px-2 py-1 rounded ${tag.colorClass}`}
                  >
                    {tag.label}
                  </span>
                ))}
              </div>
              <h3 className="font-h3 text-h3 text-white">{project.title}</h3>
            </>
          )}
          <p className="text-on-surface-variant leading-relaxed">
            {project.description}
          </p>
          <div className={`${isFeatured ? "space-y-4" : "grid grid-cols-2 gap-4"} text-sm`}>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 transition-colors group-hover:bg-white/10">
              <span className="font-bold text-primary block mb-1">Challenges:</span>
              <p className="text-slate-400">{project.details.challenge}</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/5 transition-colors group-hover:bg-white/10">
              <span className="font-bold text-secondary block mb-1">Future:</span>
              <p className="text-slate-400">{project.details.future}</p>
            </div>
          </div>
          <div className="pt-4 flex items-center justify-between">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-primary font-semibold hover:underline decoration-2 underline-offset-4"
              >
                <span className="material-symbols-outlined text-lg">code</span>
                GitHub Repo
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                className="px-4 py-2 rounded-lg bg-white/5 text-white hover:bg-white/10 transition-colors"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-[120px] px-[clamp(1.5rem,5vw,4rem)] max-w-[1280px] mx-auto overflow-hidden"
    >
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="font-h2 text-h2 mb-16 text-center"
      >
        Featured <span className="text-gradient">Work</span>
      </motion.h2>
      <div className="grid lg:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
