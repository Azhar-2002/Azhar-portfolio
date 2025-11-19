"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ThemeToggle from "../components/ThemeToggle";
import ProjectCard from "../components/ProjectCard";
import ContactForm from "../components/ContactForm";
import projects from "../data/projects";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

export default function Home() {
   const [open, setOpen] = useState(false);
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950">
    <header className="sticky top-0 z-20 backdrop-blur bg-slate-50/80 dark:bg-slate-950/80 border-b border-slate-200 dark:border-slate-800">
    <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">

    {/* Logo */}
    <span className="font-bold tracking-tight">
      Md Azhar <span className="text-blue-600">Ansari</span>
    </span>

    {/* Desktop Navigation */}
    <nav className="hidden sm:flex gap-4 text-sm items-center">
      <a href="#projects" className="hover:text-blue-600">Projects</a>
      <a href="#skills" className="hover:text-blue-600">Skills</a>
      <a href="#contact" className="hover:text-blue-600">Contact</a>

      {/* Social Icons */}
      <div className="flex gap-3 ml-4">
        <a href="https://github.com/Azhar-2002" className="text-xl hover:text-blue-600" target="_blank">
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/md-azharansari/" 
          className="text-xl hover:text-blue-600" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>

      </div>
    </nav>

    {/* Mobile Toggle Button */}
    <button 
      className="sm:hidden text-2xl"
      onClick={() => setOpen(!open)}
    >
      {open ? <HiX /> : <HiMenu />}
    </button>

    {/* Theme Toggle */}
    <ThemeToggle />
  </div>

  {/* Mobile Menu */}
  {open && (
    <div className="sm:hidden bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
      <nav className="flex flex-col gap-4 px-4 py-4 text-sm">

        <a href="#projects" className="hover:text-blue-600">Projects</a>
        <a href="#skills" className="hover:text-blue-600">Skills</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>

        <div className="flex gap-4 mt-2 text-xl">
          <a href="https://github.com/Azhar-2002" target="_blank" className="hover:text-blue-600">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/md-azhar-ansari" target="_blank" className="hover:text-blue-600">
            <FaLinkedin />
          </a>
        </div>

      </nav>
    </div>
  )}
</header>


      <section className="max-w-5xl mx-auto px-4 py-16 grid md:grid-cols-[2fr,1.3fr] gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.25em] text-slate-500 mb-3">
            Software Developer
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Turning ideas into{" "}
            <span className="text-blue-600">reliable software.</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 mb-6">
            I&apos;m Azhar, a Computer Science graduate passionate about software development. I work with Java, MERN, and Python to build real-world applications and I am currently seeking a Software Engineer role to kick-start my career.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
            >
              View Projects
            </a>
             <a
              href="https://drive.google.com/file/d/1fTPEKnYmwVH0w1C47cDADfeKHLxfvlq7/view?usp=sharing"
              className="px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 rounded-full border border-slate-300 dark:border-slate-700 text-sm hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center"
        >
          <div className="relative w-60 h-60 rounded-full overflow-hidden shadow-xl border border-slate-200 dark:border-slate-700 bg-slate-200 dark:bg-slate-800">
            <Image
              src="/profile.jpg"
              alt="Md Azhar Ansari"
              fill
              sizes="260px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </section>

      <section id="projects" className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <a
              key={i}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <ProjectCard project={p} />
            </a>
          ))}
        </div>
      </section>

      <section
        id="skills"
        className="max-w-5xl mx-auto px-4 py-12 bg-slate-100 dark:bg-slate-900 rounded-3xl my-8"
      >
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-3 text-sm">
          {[
            "Java",
            "Spring Boot",
            "JavaScript",
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "Python",
            "Computer Vision",
            "AI/ML",
          ].map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-5xl mx-auto px-4 py-12 mb-10">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">
          Want to discuss an opportunity, internship, or project? Drop a message using the form
          below or email me at{" "}
          <Link href="mailto:md.azhar98984@gmail.com" className="text-blue-600">
            md.azhar98984@gmail.com
          </Link>.
        </p>
        <ContactForm />
      </section>

      <footer className="border-t border-slate-200 dark:border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Md Azhar Ansari. All rights reserved.
      </footer>
    </main>
  );
}
