"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-40 pb-[120px] px-[clamp(1.5rem,5vw,4rem)] min-h-screen flex flex-col items-center text-center overflow-hidden"
    >
      {/* Background glows */}
      <div className="hero-glow -top-20 -left-20" />
      <div className="hero-glow top-1/2 right-0" />

      {/* Profile image with glow ring */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mb-6 group"
      >
        <motion.div 
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary to-secondary blur opacity-30 group-hover:opacity-50 transition duration-1000" 
        />
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image
            src="https://lh3.googleusercontent.com/aida/ADBb0uhEx3KVj79Js0GAzrursnTE4---FLm3lXPvRe0DZO4iwYoQIApZN_OhyzvsPjcCGSCZJxd6d0AJHq5cRPDjMdPjZ1Pbo-mq1OtjhkDXv87sdZyzRp1qOBSK9qdDjh6AL2Xlwskf3oL7iwYAboJkr3fgXN5JrH93cgLRV8avV5UQ6c6Ugy-62wgjmvGYym-PeD9kaumXUB28llc1YnvGO1qqVwRK0d25G9m7TgXycr831Dv0Ic5vbHUDTE2G8O0Xg1dn_TMDhG3h1Mo"
            alt="Imtiaz Ahamed Profile Photo"
            width={160}
            height={160}
            className="relative w-40 h-40 rounded-full object-cover object-[center_top] scale-105 border-2 border-white/10"
          />
        </motion.div>
      </motion.div>

      {/* Name */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="font-h1 text-h1 text-on-background mb-4 max-w-4xl"
      >
        Imtiaz Ahamed
      </motion.h1>

      {/* Tagline */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="text-gradient font-h3 text-h3 mb-6 max-w-2xl"
      >
        👉 Frontend-Focused Web Developer | Next.js &amp; React Enthusiast
      </motion.p>

      {/* Description */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto mb-12 leading-relaxed"
      >
        I build modern, scalable web applications using Next.js and React,
        combining problem-solving skills with clean UI design.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="flex flex-wrap justify-center gap-6"
      >
        <Link
          href="#projects"
          className="px-8 py-4 rounded-xl bg-primary text-on-primary font-semibold hover:shadow-[0_0_25px_rgba(192,193,255,0.3)] hover:-translate-y-1 transition-all active:scale-95"
        >
          View Projects
        </Link>
        <Link
          href="#contact"
          className="px-8 py-4 rounded-xl border border-outline-variant hover:border-primary/50 hover:bg-white/5 hover:-translate-y-1 transition-all active:scale-95"
        >
          Let&apos;s Talk
        </Link>
      </motion.div>
    </section>
  );
}
