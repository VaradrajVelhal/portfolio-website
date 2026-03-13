import { Link } from "react-scroll";
import { FaGithub, FaEnvelope } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE - TEXT */}
        <div>
          <h1 className="text-5xl md:text-6xl font-bold">
            Hi, I'm <span className="text-sky-400">Varadraj Velhal</span>
          </h1>

          <h2 className="mt-4 text-xl text-slate-300">
            Backend Developer | Django Developer
          </h2>

          <p className="mt-6 text-slate-400 max-w-lg">
            I build backend systems, APIs, and web applications using Python,
            Django, and modern web technologies.
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="projects"
              smooth={true}
              duration={300}
              offset={-80}
              className="bg-sky-500 px-6 py-3 rounded-lg hover:bg-sky-600 cursor-pointer shadow-lg"
            >
              View Projects
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={300}
              offset={-80}
              className="border border-sky-400 px-6 py-3 rounded-lg hover:bg-sky-500 cursor-pointer"
            >
              Contact Me
            </Link>

            <a
              href="/resume.pdf"
              download
              className="border border-slate-600 px-6 py-3 rounded-lg hover:border-sky-400"
            >
              Resume
            </a>

            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="border border-slate-600 px-6 py-3 rounded-lg hover:border-sky-400"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex justify-center">
          <img
            src="/profile.jpg"
            alt="Varadraj"
            className="w-72 h-72 object-cover rounded-full border-4 border-sky-500 shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
