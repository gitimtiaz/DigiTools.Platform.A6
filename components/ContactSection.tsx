"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Replace with your preferred form backend
    console.log("Form submitted:", form);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-[120px] px-[clamp(1.5rem,5vw,4rem)] overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-4xl mx-auto glass-card rounded-3xl p-12 relative overflow-hidden"
      >
        {/* Background glow */}
        <div className="hero-glow top-0 right-0 opacity-20" />

        <div className="text-center mb-12">
          <h2 className="font-h2 text-h2 mb-4">
            Let&apos;s <span className="text-gradient">Collaborate</span>
          </h2>
          <p className="text-on-surface-variant font-body-lg text-body-lg">
            Available for freelance projects and full-time technical roles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 transition-transform">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-label-caps uppercase tracking-widest">
                  Email
                </p>
                <a
                  href="mailto:imtiazahamed@dev.com"
                  className="font-semibold hover:text-primary transition-colors"
                >
                  imtiazp32@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 transition-transform">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-label-caps uppercase tracking-widest">
                  Location
                </p>
                <p className="font-semibold">Mirpur-12, Dhaka, Bangladesh</p>
              </div>
            </motion.div>

            <motion.div whileHover={{ x: 5 }} className="flex items-center gap-4 transition-transform">
              <div className="w-12 h-12 rounded-full bg-tertiary/10 flex items-center justify-center text-tertiary shrink-0">
                <span className="material-symbols-outlined">person</span>
              </div>
              <div>
                <p className="text-xs text-slate-400 font-label-caps uppercase tracking-widest">
                  Social
                </p>
                <div className="flex gap-4 mt-1">
                  <a
                    href="https://www.linkedin.com/in/imtiaz-cse-ahamed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors font-semibold"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/gitimtiaz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors font-semibold"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              id="contact-name"
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:bg-white/10 focus:shadow-[0_0_15px_rgba(192,193,255,0.2)] transition-all text-white placeholder:text-slate-500"
            />
            <input
              id="contact-email"
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:bg-white/10 focus:shadow-[0_0_15px_rgba(192,193,255,0.2)] transition-all text-white placeholder:text-slate-500"
            />
            <textarea
              id="contact-message"
              placeholder="Your Message"
              rows={4}
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:bg-white/10 focus:shadow-[0_0_15px_rgba(192,193,255,0.2)] transition-all text-white placeholder:text-slate-500 resize-none"
            />
            <button
              id="contact-submit"
              type="submit"
              className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-bold hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all active:scale-95 relative overflow-hidden"
            >
              {submitted ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-lg">check_circle</span>
                  Message Sent!
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}
