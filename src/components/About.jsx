import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      className="relative w-full min-h-[90vh] py-[8rem] px-6 lg:px-[6rem] flex items-center overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[55%_45%] gap-20 items-center">

        {/* Decorative Background Text */}
        <div className="absolute left-[-2rem] top-1/2 -translate-y-1/2 text-bebas text-[12rem] text-white opacity-[0.03] pointer-events-none z-0">
          ABOUT
        </div>

        {/* Left Column */}
        <div className="flex flex-col relative z-10 w-full">
          <div className="text-space text-[var(--cyan)] uppercase text-[0.75rem] tracking-widest mb-8">
            // 01 — ABOUT
          </div>

          <h2 className="text-bebas text-[5rem] leading-[0.9] text-[var(--white)] mb-8">
            THE PERSON <br />
            BEHIND THE <br />
            CODE<span className="text-[var(--cyan)]">.</span>
          </h2>

          <p className="text-space text-[0.85rem] text-[var(--muted)] leading-[2] max-w-[480px] mb-12">
            I'm Varadraj Velhal, a Backend Developer specializing in Python and Django.
            Currently pursuing my MCA after completing a B.Com in Information Technology.
            I build rule engines, REST APIs, and full-stack systems that solve real problems.
          </p>

          <div className="border-l border-[var(--border)] pl-6 py-2 flex flex-col gap-6">
            <div>
              <div className="text-space flex items-center justify-between text-[0.85rem] max-w-[400px]">
                <span className="text-[var(--white)]"><span className="text-[var(--cyan)] mr-2">→</span>MCA (Master of Computer Applications)</span>
              </div>
              <div className="text-space text-[var(--muted)] text-[0.85rem] flex justify-between max-w-[400px] pl-[26px] mt-1">
                <span>Pursuing</span>
                <span>2025 - 2027</span>
              </div>
            </div>

            <div>
              <div className="text-space flex items-center justify-between text-[0.85rem] max-w-[400px]">
                <span className="text-[var(--white)]"><span className="text-[var(--cyan)] mr-2">→</span>B.Com in Information Technology</span>
              </div>
              <div className="text-space text-[var(--muted)] text-[0.85rem] flex justify-between max-w-[400px] pl-[26px] mt-1">
                <span>Completed</span>
                <span>2022 - 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Terminal Visualizer */}
        <div className="relative z-10 w-full animate-float">
          <div className="bg-[#0D0D1A] border border-[var(--border)] rounded-lg overflow-hidden w-full max-w-[500px] mx-auto shadow-2xl">
            {/* Terminal Header */}
            <div className="flex items-center px-4 py-3 border-b border-[var(--border)] bg-[#0A0A14]">
              <div className="flex gap-2 mr-4">
                <div className="w-[10px] h-[10px] rounded-full bg-red-500"></div>
                <div className="w-[10px] h-[10px] rounded-full bg-amber-500"></div>
                <div className="w-[10px] h-[10px] rounded-full bg-green-500"></div>
              </div>
              <div className="text-space text-[0.7rem] text-[var(--muted)]">varadraj@dev: ~</div>
            </div>

            {/* Terminal Body */}
            <div className="p-6 overflow-x-auto">
              <pre className="text-space text-[0.80rem] leading-relaxed m-0 text-[var(--white)]">
                <code>
                  <span className="text-[var(--pink)]">from</span> rest_framework <span className="text-[var(--pink)]">import</span> viewsets<br />
                  <span className="text-[var(--pink)]">from</span> .models <span className="text-[var(--pink)]">import</span> Project<br />
                  <span className="text-[var(--pink)]">from</span> .serializers <span className="text-[var(--pink)]">import</span> ProjectSerializer<br />
                  <br />
                  <span className="text-[var(--muted)]"># Core portfolio API endpoint</span><br />
                  <span className="text-[var(--cyan)]">class</span> ProjectViewSet(viewsets.ModelViewSet):<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;queryset = Project.objects.<span className="text-[var(--amber)]">all</span>()<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;serializer_class = ProjectSerializer<br />
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[var(--cyan)]">def</span> <span className="text-[var(--white)]">get_developer</span>(self):<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[var(--pink)]">return</span> &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[var(--amber)]">'status'</span>: <span className="text-[var(--amber)]">'always building'</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[var(--amber)]">'passion'</span>: <span className="text-[var(--amber)]">'backend logic'</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&#125;<span className="inline-block w-2 h-4 bg-[var(--cyan)] ml-1 align-middle animate-blink"></span>
                </code>
              </pre>
            </div>
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default About;
