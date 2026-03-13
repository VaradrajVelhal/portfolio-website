import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-slate-800 rounded-xl p-6 shadow-lg"
    >
      <h3 className="text-xl font-bold text-sky-400">{project.title}</h3>

      <p className="mt-3 text-slate-400">{project.description}</p>

      <div className="p-6 rounded-xl border border-slate-700 bg-slate-900/60 backdrop-blur hover:border-sky-400 transition duration-300 hover:-translate-y-1">
        {project.tech.map((tech, index) => (
          <span key={index} className="bg-slate-700 px-3 py-1 text-sm rounded">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-4 mt-6">
        <a
          href={project.github}
          className="flex items-center gap-2 border border-slate-600 px-4 py-2 rounded hover:border-sky-400"
        >
          <FaGithub />
          Code
        </a>

        <a
          href={project.demo}
          className="flex items-center gap-2 bg-sky-500 px-4 py-2 rounded hover:bg-sky-600"
        >
          <FaExternalLinkAlt />
          Demo
        </a>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
