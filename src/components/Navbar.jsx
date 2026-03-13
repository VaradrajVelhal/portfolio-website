import { useState } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-900/80 backdrop-blur border-b border-slate-700">
      <div className="flex justify-between items-center px-6 py-3">
        <h1 className="text-xl font-bold text-sky-400">Varadraj.dev</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-sm">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                smooth
                duration={500}
                spy
                activeClass="text-sky-400"
                className="cursor-pointer hover:text-sky-400"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons */}
        <div className="hidden md:flex gap-4 text-lg">
          <a
            href="https://github.com/VaradrajVelhal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/varadrajvelhal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 pb-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth={true}
              duration={300}
              spy={true}
              offset={-80}
              activeClass="text-sky-400"
              className="cursor-pointer hover:text-sky-400"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
