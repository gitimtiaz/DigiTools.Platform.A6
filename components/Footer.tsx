import Link from "next/link";

const footerLinks = ["Home", "About", "Projects", "Contact"];

const socialLinks = [
  { icon: "code", href: "https://github.com/gitimtiaz", label: "GitHub" },
  { icon: "person", href: "https://linkedin.com", label: "LinkedIn" },
  { icon: "public", href: "#", label: "Website" },
];

export default function Footer() {
  return (
    <footer className="w-full py-12 glass-nav relative z-10 border-t border-white/5 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 max-w-7xl mx-auto text-sm font-inter text-slate-500 gap-6">
        <div>
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Imtiaz Ahamed.{" "}
            <span className="text-gradient font-semibold">
              Visionary, Precise, and Sophisticated.
            </span>
          </p>
        </div>

        <div className="flex items-center flex-wrap justify-center gap-6">
          {footerLinks.map((label) => (
            <Link
              key={label}
              href={`#${label.toLowerCase()}`}
              className="text-slate-500 hover:text-primary transition-colors hover:-translate-y-1 transform duration-200"
            >
              {label}
            </Link>
          ))}

          <div className="flex space-x-3 ml-4">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="material-symbols-outlined text-slate-500 hover:text-primary hover:shadow-[0_0_15px_rgba(192,193,255,0.2)] transition-all hover:-translate-y-1 transform duration-200 rounded-full p-1"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
