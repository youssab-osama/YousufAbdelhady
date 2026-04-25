import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Trophy, Medal } from 'lucide-react';
import CodeRain from './CodeRain';

const experiences = [
  {
    role: "Training Head & CP Instructor",
    org: "acmASCIS",
    date: "Sep 2025 – Present",
    desc: "Led the competitive programming training program across multiple skill levels. Designed and organized structured training plans covering Number Theory, Graphs, Dynamic Programming, and Data Structures. Supervised instructors and prepared college students for local & regional contests.",
    icon: <Code2 size={24} />,
    color: "text-primary border-primary",
    bg: "bg-primary/10"
  }
  // ,
  // {
  //   role: "Silver Medalist",
  //   org: "ECPC (Egypt Collegiate Programming Contest)",
  //   date: "Aug 2025",
  //   desc: "Ranked as one of the top 10 teams in Egypt out of 250+ participating teams, successfully qualifying to represent Egypt in the national problem-solving championships.",
  //   icon: <Medal size={24} />,
  //   color: "text-[#C0C0C0] border-[#C0C0C0]",
  //   bg: "bg-[#C0C0C0]/10"
  // },
  // {
  //   role: "Finalist",
  //   org: "ACPC (Africa & Arab Collegiate Programming Championship)",
  //   date: "Aug 2025",
  //   desc: "Competed at the regional level among 150 top-tier teams across Africa and the Arab region, demonstrating elite algorithmic execution under extreme pressure.",
  //   icon: <Trophy size={24} />,
  //   color: "text-[#FFD700] border-[#FFD700]",
  //   bg: "bg-[#FFD700]/10"
  // }
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 w-full max-w-5xl mx-auto relative cursor-default overflow-hidden">
      <CodeRain />
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20 relative z-10">
        <h2 className="font-display font-bold text-5xl md:text-6xl text-on-surface mb-4 glow-hover transition-all">EXPERIENCE<span className="text-primary">.</span></h2>
        <p className="font-mono text-sm text-primary uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded w-fit mx-auto border border-primary/20">The Crucible of Competitive Programming</p>
      </motion.div>

      <div className="relative border-l-2 border-surface-bright ml-6 md:ml-12 pl-8 md:pl-16 space-y-16 py-4">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, type: "spring" }}
            className="relative group"
          >
            {/* Timeline Node */}
            <div className={`absolute -left-[57px] md:-left-[88px] top-4 w-12 h-12 rounded-xl bg-surface-container border-2 ${exp.color} flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-300`}>
              <div className={`${exp.color.split(' ')[0]}`}>{exp.icon}</div>
            </div>

            <div className={`relative p-8 md:p-10 rounded-2xl border border-surface-bright bg-surface/40 backdrop-blur-xl overflow-hidden hover:border-[rgba(255,255,255,0.3)] transition-colors duration-500 shadow-xl`}>
              <div className={`absolute -top-16 -right-16 w-48 h-48 blur-[80px] -z-10 ${exp.bg} group-hover:opacity-100 transition-opacity duration-700 opacity-60`} />
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-4">
                <div>
                  <h3 className="font-display font-bold text-3xl text-on-surface group-hover:text-glow transition-all tracking-tight mb-2">{exp.role}</h3>
                  <h4 className={`font-mono text-xs md:text-sm uppercase tracking-widest font-bold ${exp.color.split(' ')[0]}`}>
                    {exp.org}
                  </h4>
                </div>
                <span className="font-mono text-xs uppercase tracking-widest text-on-surface-variant bg-surface-container-high px-4 py-2 rounded-full border border-surface-bright whitespace-nowrap shadow-inner flex items-center">
                  {exp.date}
                </span>
              </div>
              <p className="font-sans text-on-surface-variant text-base md:text-lg leading-relaxed max-w-3xl">
                {exp.desc}
              </p>
            </div>
          </motion.div>
        ))}
        {/* Fading line at bottom */}
        <div className="absolute bottom-0 left-[-2px] w-[2px] h-32 bg-gradient-to-t from-background to-surface-bright" />
      </div>
    </section>
  );
};

export default Experience;
