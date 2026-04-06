import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    number: "01",
    title: "LifeLink – Real-Time Blood Request System",
    stack: ["React", "Django REST Framework", "PostgreSQL"],
    description: "A full-stack platform that connects hospitals and donors for real-time blood requests, featuring role-based access, secure authentication, and request lifecycle tracking with location-based filtering.",
    // liveLink: "",
    codeLink: "https://github.com/VaradrajVelhal/lifelink"
  },
  {
    number: "02",
    title: "HireFlow – Job Aggregation & ATS",
    stack: ["React", "Django REST Framework", "PostgreSQL"],
    description: "A job platform that aggregates listings from multiple sources and enables users to track applications with automated follow-ups, JWT authentication, and background job fetching using cron processes.",
    // liveLink: "",
    codeLink: "https://github.com/VaradrajVelhal/hireflow"
  },
  {
    number: "03",
    title: "Rural Government Scheme Eligibility Engine",
    stack: ["Django", "PostgreSQL", "Rule Engine", "PDF Generation", "Analytics"],
    description: "A rule-based system that evaluates eligibility for government schemes using dynamic database-driven logic, with PDF report generation and analytics dashboard for better insights.",
    liveLink: "https://rural-scheme-eligibility-check.onrender.com",
    codeLink: "https://github.com/VaradrajVelhal/rural-scheme-eligibility-check"
  }
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      className="w-full py-[8rem] px-6 lg:px-[6rem] max-w-[1400px] mx-auto"
    >
      <div className="mb-0">
        <h2 className="text-bebas text-[6rem] leading-none mb-4 m-0">
          <span className="text-[var(--white)]">SELECTED </span>
          <span className="text-[var(--cyan)]">WORK</span>
        </h2>
        <div className="w-full h-[1px] bg-[var(--border)] mb-0"></div>
      </div>

      <div className="w-full flex flex-col">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            number={project.number}
            title={project.title}
            stack={project.stack}
            description={project.description}
            liveLink={project.liveLink}
            codeLink={project.codeLink}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
