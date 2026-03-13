import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
function Contact() {
  return (
    <section id="contact" className="py-24 px-6 text-center">
      <h2 className="text-3xl font-bold text-sky-400 mb-10">Contact Me</h2>

      <p className="text-slate-400 mb-10">
        If you'd like to collaborate or have any questions, feel free to reach
        out.
      </p>

      {/* Contact Form */}
      <form
        action="https://formspree.io/f/mgonydqa"
        method="POST"
        className="max-w-xl mx-auto flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="p-3 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:border-sky-400"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="p-3 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:border-sky-400"
        />

        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          required
          className="p-3 rounded bg-slate-800 border border-slate-700 focus:outline-none focus:border-sky-400"
        />

        <button
          type="submit"
          className="bg-sky-500 py-3 rounded hover:bg-sky-600 transition"
        >
          Send Message
        </button>
      </form>

      {/* Social Links */}
      <div className="flex justify-center gap-6 text-2xl mt-10">
        <a
          href="https://github.com/VaradrajVelhal"
          className="hover:text-sky-400"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/varadrajvelhal"
          className="hover:text-sky-400"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:varadrajvelhal@gmail.com"
          className="hover:text-sky-400"
        >
          <FaEnvelope />
        </a>
      </div>
    </section>
  );
}

export default Contact;
