import { useState } from "react";
import projectsData from "../data/projects";
import ProjectCard from "./ProjectCard";
function Projects() {
  const [filter, setFilter] = useState("All");

  const filters = ["All","Django","React"];

  const filteredProjects =
    filter === "All"
      ? projectsData
      : projectsData.filter((project) => project.tech.includes(filter));

  return (
    <section id="projects" className="py-24 px-6">
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-sky-500 rounded-full blur-[150px] opacity-20"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-500 rounded-full blur-[150px] opacity-20"></div>
      <h2
        className="text-4xl font-bold text-center mb-12
bg-gradient-to-r from-sky-400 to-blue-500
text-transparent bg-clip-text"
      >
        Projects
      </h2>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-4 py-2 rounded ${
              filter === item ? "bg-sky-500" : "bg-slate-700 hover:bg-slate-600"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
