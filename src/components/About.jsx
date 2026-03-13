
function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-4xl mx-auto text-center">
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-sky-500 rounded-full blur-[150px] opacity-20"></div>

      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-blue-500 rounded-full blur-[150px] opacity-20"></div>
      <h2
        className="text-4xl font-bold text-center mb-12
bg-gradient-to-r from-sky-400 to-blue-500
text-transparent bg-clip-text"
      >
        About Me
      </h2>

      <p className="text-slate-300 leading-relaxed">
        I'm Varadraj Velhal, currently pursuing a Master of Computer
        Applications (MCA). I previously completed a B.Com in Information
        Technology.
      </p>

      <p className="mt-4 text-slate-400">
        I specialize in backend development using Python and Django, building
        scalable web applications and REST APIs. I enjoy solving complex
        problems and improving my programming skills through Data Structures and
        Algorithms using Java.
      </p>
    </section>
  );
}

export default About;
