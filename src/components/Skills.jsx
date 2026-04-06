import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const row1 = ["Python", "Django", "REST APIs", "PostgreSQL", "Django REST Framework"];
  const row2 = ["Java", "DSA", "Git", "Linux", "Docker", "Redis", "Celery"];
  const row3 = ["React", "HTML", "CSS", "JavaScript", "SQL", "Bash", "VS Code"];

  const SkillTag = ({ text }) => (
    <div className="text-space text-[0.9rem] text-[var(--white)] border border-[var(--border)] px-5 py-2 mx-3 whitespace-nowrap bg-transparent hover:border-[var(--cyan)] hover:text-[var(--cyan)] transition-colors duration-300 rounded-none">
      [ {text} ]
    </div>
  );

  return (
    <motion.section 
      id="skills"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      className="w-full bg-[var(--surface)] py-[7rem]"
      style={{ clipPath: "polygon(0 6%, 100% 0, 100% 94%, 0 100%)" }}
    >
      <div className="text-center mb-16">
        <h2 className="text-bebas text-[6rem] leading-[1] m-0">
          <span className="text-[var(--white)]">TECH </span>
          <span className="text-[var(--cyan)]">STACK</span>
        </h2>
      </div>

      <div className="w-full flex flex-col gap-6 overflow-hidden">
        
        {/* Row 1 - Scroll Left */}
        <div className="relative w-full">
          <div className="marquee-content animate-scroll-left pause-on-hover" style={{ width: 'max-content', animationDuration: "25s" }}>
            <div className="flex">
              {[...row1, ...row1, ...row1, ...row1].map((skill, index) => (
                <SkillTag key={`r1-${index}`} text={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="relative w-full">
          <div className="marquee-content animate-scroll-right pause-on-hover" style={{ width: 'max-content', animationDuration: "35s" }}>
            <div className="flex">
              {[...row2, ...row2, ...row2, ...row2].map((skill, index) => (
                <SkillTag key={`r2-${index}`} text={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Row 3 - Scroll Left */}
        <div className="relative w-full">
          <div className="marquee-content animate-scroll-left pause-on-hover" style={{ width: 'max-content', animationDuration: "20s" }}>
            <div className="flex">
              {[...row3, ...row3, ...row3, ...row3].map((skill, index) => (
                <SkillTag key={`r3-${index}`} text={skill} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Skills;
