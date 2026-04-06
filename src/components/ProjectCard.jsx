import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ number, title, stack, description, liveLink, codeLink }) => {
  return (
    <div className="group relative w-full py-[4rem] border-b border-[var(--border)] overflow-hidden transition-colors duration-[0.35s] hover:bg-[rgba(0,255,209,0.02)]">
      
      {/* Number */}
      <div className="absolute left-0 top-[3rem] text-bebas text-[7rem] text-[var(--border)] leading-none transition-all duration-[0.35s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:text-[var(--cyan)] group-hover:opacity-50">
        {number}
      </div>

      {/* Main Content */}
      <div className="pl-[2rem] md:pl-[10rem] pr-[4rem] relative z-10 w-full">
        
        {/* Tech Stack */}
        <div className="text-space text-[0.7rem] text-[var(--muted)] uppercase tracking-[0.15em] mb-2 flex flex-wrap gap-2">
          {stack.map((tech, i) => (
            <React.Fragment key={i}>
              <span>{tech}</span>
              {i < stack.length - 1 && <span className="text-[var(--border)]">·</span>}
            </React.Fragment>
          ))}
        </div>

        {/* Title */}
        <div className="relative inline-block mt-2 mb-4">
          <h3 className="text-bebas text-[3.2rem] text-[var(--white)] m-0 leading-none transition-colors duration-[0.35s] ease-out group-hover:text-[var(--cyan)]">
            {title}
          </h3>
          <div className="absolute left-0 -bottom-2 h-[2px] bg-[var(--cyan)] w-full scale-x-0 origin-left transition-transform duration-[0.35s] ease-out group-hover:scale-x-100"></div>
        </div>

        {/* Description */}
        <p className="text-space text-[0.82rem] text-[var(--muted)] max-w-[560px] leading-[1.9] mt-6 mb-8">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex gap-4">
          <a href={codeLink || "#"} className="text-space text-[0.75rem] text-[var(--cyan)] font-bold border border-[var(--cyan)] py-2 px-5 hover:bg-[var(--cyan)] hover:text-[var(--bg)] transition-colors rounded-none whitespace-nowrap">
            [ VIEW CODE ]
          </a>
          <a href={liveLink || "#"} className="text-space text-[0.75rem] text-[var(--muted)] border border-[var(--border)] py-2 px-5 hover:border-[var(--cyan)] hover:text-[var(--white)] transition-colors rounded-none whitespace-nowrap">
            [ LIVE DEMO ]
          </a>
        </div>
      </div>

      {/* Right Arrow */}
      <motion.div 
        className="absolute right-0 top-1/2 -translate-y-1/2 text-bebas text-[3rem] text-[var(--border)] opacity-0 transition-opacity duration-[0.35s] group-hover:text-[var(--cyan)] group-hover:opacity-100 hidden md:block"
        whileHover={{ x: 8 }} 
        transition={{ type: "spring", stiffness: 300 }}
      >
        →
      </motion.div>
    </div>
  );
};

export default ProjectCard;
