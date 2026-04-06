import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      className="w-full bg-[var(--surface)] pt-[10rem] pb-[6rem] px-6 lg:px-[6rem]"
      style={{ clipPath: "polygon(0 8%, 100% 0, 100% 100%, 0 100%)" }}
    >
      <div className="max-w-[1200px] mx-auto flex flex-col items-center">

        {/* Giant Heading */}
        <div className="text-center mb-8">
          <h2 className="text-bebas text-[8vw] leading-[0.9] m-0 text-[var(--white)]">LET'S BUILD</h2>
          <h2 className="text-bebas text-[8vw] leading-[0.9] m-0 text-[var(--white)]">SOMETHING</h2>
          <h2 className="text-bebas text-[8vw] leading-[0.9] m-0 shimmer-text inline-block">GREAT.</h2>
        </div>

        <p className="text-space text-[0.8rem] text-[var(--muted)] mb-16 text-center">
          Available for freelance & full-time opportunities
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full pb-10">

          {/* Social Links */}
          <div className="flex flex-col gap-6 justify-center">
            <a href="mailto:varadrajvelhal1@gmail.com" className="text-space text-[1rem] text-[var(--white)] hover:text-[var(--cyan)] transition-all duration-300 hover:translate-x-3 w-fit">
              → varadrajvelhal1@gmail.com
            </a>
            <a href="https://github.com/VaradrajVelhal" target="_blank" rel="noreferrer" className="text-space text-[1rem] text-[var(--white)] hover:text-[var(--cyan)] transition-all duration-300 hover:translate-x-3 w-fit">
              → github.com/VaradrajVelhal
            </a>
            <a href="https://linkedin.com/in/varadrajvelhal" target="_blank" rel="noreferrer" className="text-space text-[1rem] text-[var(--white)] hover:text-[var(--cyan)] transition-all duration-300 hover:translate-x-3 w-fit">
              → linkedin.com/in/varadrajvelhal
            </a>
          </div>

          {/* Form */}
          <form
            action="https://formspree.io/f/mgonydqa"
            method="POST"
            className="w-full max-w-[600px] flex flex-col gap-8"
          >
            <div className="flex flex-col">
              <label className="text-space text-[0.7rem] uppercase text-[var(--cyan)] tracking-[0.2em] mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"              // ✅ IMPORTANT
                required                 // ✅ optional but recommended
                className="w-full bg-transparent border-0 border-b border-[var(--border)] text-[var(--white)] text-space text-[0.9rem] py-3 focus:outline-none focus:border-[var(--cyan)] focus:shadow-[0_4px_0_-3px_var(--cyan)] transition-shadow rounded-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-space text-[0.7rem] uppercase text-[var(--cyan)] tracking-[0.2em] mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"            // ✅ IMPORTANT
                required
                className="w-full bg-transparent border-0 border-b border-[var(--border)] text-[var(--white)] text-space text-[0.9rem] py-3 focus:outline-none focus:border-[var(--cyan)] focus:shadow-[0_4px_0_-3px_var(--cyan)] transition-shadow rounded-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-space text-[0.7rem] uppercase text-[var(--cyan)] tracking-[0.2em] mb-2">
                Message
              </label>
              <textarea
                name="message"          // ✅ IMPORTANT
                rows="4"
                required
                className="w-full bg-transparent border-0 border-b border-[var(--border)] text-[var(--white)] text-space text-[0.9rem] py-3 focus:outline-none focus:border-[var(--cyan)] focus:shadow-[0_4px_0_-3px_var(--cyan)] transition-shadow rounded-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[var(--cyan)] text-[var(--bg)] border-none text-bebas text-[1.3rem] tracking-[0.15em] py-[18px] rounded-none hover:bg-[var(--pink)] hover:-translate-y-[3px] transition-all duration-300 mt-4 cursor-none"
            >
              SEND MESSAGE
            </button>
          </form>

        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
