"use client";

import { motion } from "framer-motion";

interface SkillCardProps {
  icon: string;
  title: string;
  colorClass: string;
  skills: string[];
  index: number;
}

const skillCategories = [
  {
    icon: "code",
    title: "Web Development",
    colorClass: "bg-primary/10 text-primary",
    skills: ["Next.js", "React", "REST APIs", "BetterAuth"],
  },
  {
    icon: "terminal",
    title: "Core & DSA",
    colorClass: "bg-secondary/10 text-secondary",
    skills: ["C", "C++", "Java", "Algorithms"],
  },
  {
    icon: "palette",
    title: "Design & Tools",
    colorClass: "bg-tertiary/10 text-tertiary",
    skills: ["Photoshop", "GitHub", "Figma", "Tailwind CSS"],
  },
];

function SkillCard({ icon, title, colorClass, skills, index }: SkillCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="glass-card p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClass}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <h3 className="font-h3 text-h3">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-code hover:border-primary/40 hover:bg-primary/5 hover:shadow-[0_0_15px_rgba(192,193,255,0.2)] transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-[120px] px-[clamp(1.5rem,5vw,4rem)] bg-surface-container-low/30 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-h2 text-h2 mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-on-surface-variant font-body-lg text-body-lg">
            Bridging the gap between logic and aesthetics.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <SkillCard key={cat.title} {...cat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
