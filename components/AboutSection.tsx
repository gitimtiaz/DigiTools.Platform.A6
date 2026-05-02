const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "10+", label: "Projects Done" },
  { value: "100%", label: "Detail Oriented" },
  { value: "Fast", label: "Learner" },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-[120px] px-[clamp(1.5rem,5vw,4rem)] max-w-[1280px] mx-auto"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="space-y-6">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
            The Journey
          </span>
          <h2 className="font-h2 text-h2">
            Analytical Mind meets{" "}
            <span className="text-gradient">Creative Precision</span>
          </h2>
          <div className="space-y-4 text-on-surface-variant leading-relaxed font-body-lg text-body-lg">
            <p>
              My journey in technology began with the rigorous fundamentals of
              C/C++ and competitive programming, which instilled a deep-seated
              analytical approach to problem-solving. This technical foundation
              now powers my transition into modern web development.
            </p>
            <p>
              Currently, I am deeply focused on mastering the{" "}
              <strong className="text-primary">Next.js</strong> and{" "}
              <strong className="text-primary">React</strong> ecosystem, with a
              particular interest in robust authentication systems like{" "}
              <strong className="text-primary">BetterAuth</strong>. I don&apos;t
              just write code; I strive to build real-world applications that
              solve tangible problems.
            </p>
            <p>
              With a background in{" "}
              <strong className="text-primary">Photoshop</strong>, I bring a
              unique UI advantage to every project—ensuring that the underlying
              technical architecture is matched by a sophisticated,
              pixel-perfect visual experience.
            </p>
          </div>
          <div className="flex items-center gap-3 pt-4 text-primary">
            <span className="material-symbols-outlined">location_on</span>
            <span className="font-semibold">Mirpur-12, Dhaka, Bangladesh</span>
          </div>
        </div>

        {/* Stats Card */}
        <div className="glass-card rounded-3xl p-8 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="grid grid-cols-2 gap-6 relative">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/20 transition-colors"
              >
                <span className="block text-h3 font-h3 text-white">{value}</span>
                <span className="text-sm text-slate-400">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
