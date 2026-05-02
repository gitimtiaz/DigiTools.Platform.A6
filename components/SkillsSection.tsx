interface SkillCardProps {
  icon: string;
  title: string;
  colorClass: string;
  skills: string[];
}

const skillCategories: SkillCardProps[] = [
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

function SkillCard({ icon, title, colorClass, skills }: SkillCardProps) {
  return (
    <div className="glass-card p-8 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
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
            className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-code hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-[120px] px-[clamp(1.5rem,5vw,4rem)] bg-surface-container-low/30"
    >
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-h2 text-h2 mb-4">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-on-surface-variant font-body-lg text-body-lg">
            Bridging the gap between logic and aesthetics.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <SkillCard key={cat.title} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
