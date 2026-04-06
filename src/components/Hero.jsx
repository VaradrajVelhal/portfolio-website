import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-[100vh] flex items-center px-6 md:px-12 max-w-[1400px] mx-auto overflow-hidden">

      {/* Background radial gradient glow */}
      <div className="absolute left-[10%] top-[30%] w-[600px] h-[600px] rounded-full bg-[rgba(0,255,209,0.06)] blur-[100px] pointer-events-none -z-10 animate-pulse-slow"></div>

      <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] w-full h-full pt-24">

        {/* Left Column - Text */}
        <div className="flex flex-col justify-center h-full z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            className="flex flex-col"
          >
            <motion.div
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              transition={{ delay: 0.2 }}
              className="text-space text-[0.75rem] text-[var(--cyan)] uppercase tracking-[0.3em] font-bold mb-6"
            >
              [ BACKEND DEVELOPER ]
            </motion.div>

            <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
              <h1 className="text-bebas text-[clamp(5.5rem,11vw,10rem)] leading-[0.9] text-[var(--white)] m-0 glitch" data-text="VARADRAJ">
                VARADRAJ
              </h1>
              <h1 className="text-bebas text-[clamp(5.5rem,11vw,10rem)] leading-[0.9] text-[var(--cyan)] m-0 -mt-[2px]">
                VELHAL
              </h1>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="w-[80px] h-[1px] bg-[var(--cyan)] my-8"
            />

            <motion.p
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="text-space text-[0.85rem] text-[var(--muted)] max-w-[420px] leading-[1.8] mb-10"
            >
              Building scalable backend systems with Python & Django.
              MCA student crafting APIs, databases, and rule engines
              that power real-world applications.
            </motion.p>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="flex flex-wrap items-center gap-4 mb-16"
            >
              <a href="#projects" className="bg-[var(--cyan)] text-[var(--bg)] text-bebas text-[1.1rem] tracking-[0.1em] px-[36px] py-[14px] hover:bg-[var(--amber)] hover:-translate-y-[2px] transition-all duration-[0.25s] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] inline-block rounded-none">
                VIEW PROJECTS
              </a>
              <a href="#contact" className="bg-transparent border border-[var(--cyan)] text-[var(--cyan)] text-bebas text-[1.1rem] px-[36px] py-[14px] hover:bg-[rgba(0,255,209,0.08)] transition-colors inline-block rounded-none">
                CONTACT ME
              </a>

              <div className="flex gap-3 ml-2">
                <a href="https://github.com/VaradrajVelhal" target="_blank" rel="noreferrer" className="w-[40px] h-[40px] rounded-full border border-[var(--border)] flex justify-center items-center text-[var(--muted)] hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:scale-[1.1] transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="https://linkedin.com/in/varadrajvelhal" target="_blank" rel="noreferrer" className="w-[40px] h-[40px] rounded-full border border-[var(--border)] flex justify-center items-center text-[var(--muted)] hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:scale-[1.1] transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="resume.pdf" download className="w-[40px] h-[40px] rounded-full border border-[var(--border)] flex justify-center items-center text-[var(--muted)] hover:border-[var(--cyan)] hover:text-[var(--cyan)] hover:scale-[1.1] transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </a>
              </div>
            </motion.div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              className="flex items-center gap-6"
            >
              <div className="flex flex-col items-center">
                <span className="text-bebas text-[2rem] text-[var(--cyan)] leading-none">03</span>
                <span className="text-space text-[0.65rem] text-[var(--muted)] uppercase mt-1">Projects</span>
              </div>
              <div className="w-[1px] h-8 bg-[var(--border)]"></div>
              <div className="flex flex-col items-center">
                <span className="text-bebas text-[2rem] text-[var(--cyan)] leading-none">02</span>
                <span className="text-space text-[0.65rem] text-[var(--muted)] uppercase mt-1">Education</span>
              </div>
              <div className="w-[1px] h-8 bg-[var(--border)]"></div>
              <div className="flex flex-col items-center">
                <span className="text-bebas text-[2rem] text-[var(--cyan)] leading-none">∞</span>
                <span className="text-space text-[0.65rem] text-[var(--muted)] uppercase mt-1">Commits</span>
              </div>
            </motion.div>

          </motion.div>
        </div>

        {/* Right Column - Abstract Animated Element */}
        <div className="hidden lg:flex justify-center items-center h-full relative">
          {/* Hexgrid background mask */}
          <div className="absolute inset-0 hex-grid mask-radial-gradient"></div>

          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_var(--bg)_70%)]"></div>

          {/* Floating code snippets */}
          <div className="absolute top-[20%] right-[30%] rotate-6 animate-float" style={{ animationDelay: '0s' }}>
            <pre className="text-space text-[0.6rem] text-[var(--muted)] opacity-60">
              <code>{`def get_queryset(self):
    return BloodRequest.objects.filter(
        status='URGENT',
        blood_group=self.request.user.group
    )`}</code>
            </pre>
          </div>

          <div className="absolute top-[50%] left-[10%] -rotate-3 animate-float" style={{ animationDelay: '2s' }}>
            <pre className="text-space text-[0.6rem] text-[var(--muted)] opacity-60">
              <code>{`class EligibilityEngine:
    def check_rules(self, data):
        return [r.evaluate(data) 
                for r in self.rules]`}</code>
            </pre>
          </div>

          <div className="absolute bottom-[25%] right-[15%] rotate-2 animate-float" style={{ animationDelay: '4s' }}>
            <pre className="text-space text-[0.6rem] text-[var(--muted)] opacity-60">
              <code>{`@api_view(['POST'])
def tokenize(request):
    token = jwt.encode(
        {'user': request.user.id}, 
        SECRET_KEY
    )`}</code>
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
