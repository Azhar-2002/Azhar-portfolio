import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ scale: 1.03, translateY: -4 }}
      className="bg-white dark:bg-slate-900 rounded-2xl shadow-md p-4 border border-slate-100 dark:border-slate-800 flex flex-col"
    >
      <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 flex-1">
        {project.description}
      </p>
    </motion.article>
  );
}
