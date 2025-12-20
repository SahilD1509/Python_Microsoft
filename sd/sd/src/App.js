import React from "react";
import "./App.css";

import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Code2,
  Database,
  Terminal,
  Cpu,
  Award,
  BookOpen,
} from "lucide-react";

const App = () => {
  const skills = {
    languages: ["Python", "JavaScript"],
    web: ["React", "Node.js", "Express.js", "HTML", "CSS"],
    databases: ["MySQL", "PostgreSQL", "MongoDB Atlas"],
    tools: ["Git", "VS Code"],
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950" />

        <div className="container mx-auto px-6 z-10 text-center">
          <div className="mb-8">
            <img
              src="/api/placeholder/150/150"
              alt="Sahil Dhiman"
              className="w-32 h-32 rounded-full border-2 border-cyan-500 p-1 mx-auto shadow-[0_0_20px_rgba(6,182,212,0.5)]"
            />
          </div>

          <h1 className="text-6xl font-bold tracking-tight text-white mb-4">
            Sahil <span className="text-cyan-500">Dhiman</span>
          </h1>

          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-8 italic">
            I'm a Computer Science graduate with a strong interest in technology,
            problem-solving, and building impactful digital products.
          </p>

          <div className="flex justify-center gap-6 flex-wrap">
            <a
              href="mailto:sdhiman1509@gmail.com"
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
            >
              <Mail size={20} /> sdhiman1509@gmail.com
            </a>
            <span className="flex items-center gap-2 text-slate-500">
              <MapPin size={20} /> Bangalore
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-20 space-y-32">
        {/* Experience */}
        <section>
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
            <Terminal className="text-cyan-500" /> Professional Experience
          </h2>

          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 transition-all">
            <h3 className="text-2xl font-semibold text-white">Tech Intern</h3>
            <p className="text-cyan-500 font-medium mb-4">
              REVEZA | Nov 2024 – Present
            </p>

            <ul className="space-y-3 text-slate-400 list-disc list-inside">
              <li>
                Contributing to technical and client-facing tasks with a focus on
                quality and efficiency.
              </li>
              <li>
                Conducted field visits to interact with clients and gather
                valuable feedback.
              </li>
              <li>
                Analyzed service performance metrics to identify improvement
                areas.
              </li>
              <li>
                Collaborated with cross-functional teams to solve client issues.
              </li>
              <li>
                Integrated client feedback to improve service satisfaction.
              </li>
            </ul>
          </div>
        </section>

        {/* Tech Stack */}
        <section>
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
            <Cpu className="text-cyan-500" /> Technical Arsenal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-slate-900 p-6 rounded-xl border border-slate-800"
              >
                <h3 className="capitalize text-cyan-500 font-bold mb-4 text-lg">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-slate-800 text-sm rounded-md border border-slate-700 text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
            <Code2 className="text-cyan-500" /> Academic Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all">
              <h3 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500 underline-offset-4">
                User Management System
              </h3>
              <p className="text-slate-400 mb-4">
                Server-side web application using Node.js and Express.js with full
                CRUD functionality.
              </p>
              <div className="flex gap-3 text-xs text-cyan-500 font-mono">
                <span>#Node.js</span>
                <span>#Express.js</span>
                <span>#MongoDB</span>
              </div>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)] transition-all">
              <h3 className="text-xl font-bold text-white mb-2 underline decoration-cyan-500 underline-offset-4">
                Online Hotel Reservation
              </h3>
              <p className="text-slate-400 mb-4">
                React-based reservation system with calendar view and booking
                confirmation.
              </p>
              <div className="flex gap-3 text-xs text-cyan-500 font-mono">
                <span>#React</span>
                <span>#JavaScript</span>
                <span>#HTML/CSS</span>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
            <Award className="text-cyan-500" /> Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Full Stack Python", org: "Prostack Academy", year: "2025" },
              { title: "Meta Frontend Developer", org: "Meta", year: "2024" },
              { title: "Generative AI", org: "Google Cloud", year: "2024" },
              { title: "CCNA Networking", org: "Cisco", year: "2024" },
              { title: "Python for Data Science", org: "IBM", year: "2024" },
              { title: "Elements of AI", org: "University of Helsinki", year: "2024" },
            ].map((cert, i) => (
              <div
                key={i}
                className="bg-slate-900/30 border border-slate-800 p-6 rounded-xl hover:bg-slate-800/50 transition-colors"
              >
                <h4 className="font-bold text-white mb-1">{cert.title}</h4>
                <p className="text-sm text-slate-500">
                  {cert.org} • {cert.year}
                </p>
                <button className="mt-4 flex items-center gap-2 text-xs font-bold text-cyan-500 hover:text-white transition-colors">
                  View Certificate <ExternalLink size={14} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
            <BookOpen className="text-cyan-500" /> Education
          </h2>

          <div className="space-y-8">
            <div className="p-8 bg-slate-900/20 border-l-4 border-cyan-500 rounded-r-xl">
              <h3 className="text-2xl font-bold text-white">
                Master of Computer Applications (MCA)
              </h3>
              <p className="text-slate-400">
                Amrita Vishwa Vidyapeetham • 2021 – 2023
              </p>
              <p className="text-cyan-500 font-mono text-xl mt-2">
                CGPA: 8.1
              </p>
            </div>

            <div className="p-8 bg-slate-900/20 border-l-4 border-slate-700 rounded-r-xl">
              <h3 className="text-2xl font-bold text-white">
                Bachelor of Science (B.Sc)
              </h3>
              <p className="text-slate-400">
                Lyallpur Khalsa College, Jalandhar • 2017 – 2020
              </p>
              <p className="text-slate-400 font-mono text-xl mt-2">
                60.6%
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-12 text-center text-slate-500">
        © 2025 Sahil Dhiman. Engineered for Excellence.
      </footer>
    </div>
  );
};

export default App;
