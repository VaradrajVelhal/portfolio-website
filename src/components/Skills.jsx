import {
  FaPython,
  FaJava,
  FaReact,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";
import { SiDjango, SiPostgresql, SiPostman, SiSqlite } from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
        <h2 className="text-3xl font-bold text-center text-sky-400 mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <Skill icon={<FaPython />} name="Python" />
          <Skill icon={<FaJava />} name="Java" />
          <Skill icon={<FaJs />} name="JavaScript" />
          <Skill icon={<SiDjango />} name="Django" />
          <Skill icon={<FaReact />} name="React" />
          <Skill icon={<FaGitAlt />} name="Git" />
          <Skill icon={<SiPostgresql />} name="PostgreSQL" />
          <Skill icon={<SiSqlite />} name="SQLite" />
          <Skill icon={<SiPostman />} name="Postman" />
          <Skill icon={<FaHtml5 />} name="HTML" />
          <Skill icon={<FaCss3Alt />} name="CSS" />
        </div>
    </section>
  );
}

function Skill({ icon, name }) {
  return (
    <div className="flex flex-col items-center p-6 bg-slate-800 rounded-xl hover:bg-slate-700 transition">
      <div className="text-4xl text-sky-400 mb-3">{icon}</div>

      <p className="text-slate-200">{name}</p>
    </div>
  );
}

export default Skills;
