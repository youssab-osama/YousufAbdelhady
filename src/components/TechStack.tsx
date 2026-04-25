import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiCplusplus, SiPython, SiDart, SiReact, SiTailwindcss, SiJavascript, SiTypescript, SiHtml5, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiFirebase, SiGit, SiGithub, SiDocker, SiPostman } from 'react-icons/si';
import { FaJava, FaCss3Alt as SiCss3 } from 'react-icons/fa';
import { TbBrandCSharp as SiCsharp } from 'react-icons/tb';

const techTree = {
  name: "TECH STACK",
  branches: [
    {
      name: "Programming Languages",
      children: [
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "Java", icon: FaJava, color: "#007396" },
        { name: "C#", icon: SiCsharp, color: "#239120" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Dart", icon: SiDart, color: "#0175C2" },
      ]
    },
    {
      name: "Frontend Ecosystem",
      children: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      ]
    },
    {
      name: "Backend & Database",
      children: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express", icon: SiExpress, color: "#ffffff" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      ]
    },
    {
      name: "Tools & Infrastructure",
      children: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "GitHub", icon: SiGithub, color: "#ffffff" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37" }
      ]
    }
  ]
};

const TechLeaf = ({ tech }: { tech: any }) => {
  const [toggled, setToggled] = useState(false);
  const Icon = tech.icon;

  return (
    <div 
      className="relative flex flex-col items-center justify-center p-2 md:p-4"
      onMouseEnter={() => setToggled(true)}
      onMouseLeave={() => setToggled(false)}
      onClick={() => setToggled(!toggled)}
    >
      <motion.div 
        whileHover={{ scale: 1.15, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-surface-container border border-surface-bright flex items-center justify-center cursor-pointer shadow-lg z-10 transition-colors group hover:border-surface-highest"
        style={{ color: tech.color }}
      >
        <Icon size={28} className="drop-shadow-lg opacity-80 group-hover:opacity-100 transition-opacity" />
      </motion.div>
      <AnimatePresence>
        {toggled && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.8 }}
            animate={{ opacity: 1, y: 8, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.8 }}
            className="absolute top-full font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest text-on-surface bg-surface-highest px-3 py-1.5 rounded border border-surface-bright whitespace-nowrap z-20 shadow-[0_0_20px_rgba(0,0,0,0.8)]"
          >
            {tech.name}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TechStack = () => {
  return (
    <section id="stack" className="py-24 px-6 w-full relative overflow-hidden bg-surface-container-lowest">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Root Node */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16 relative flex justify-center"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[50px] rounded-full" />
          <div className="px-10 py-5 rounded-2xl border border-primary/40 bg-surface/80 backdrop-blur-md shadow-[0_0_30px_rgba(var(--primary-color-rgb),0.1)] relative z-10 text-center inline-block">
            <h2 className="font-display font-black text-4xl md:text-5xl text-on-surface tracking-tight text-shadow-sm hover:text-glow transition-all cursor-default">
              {techTree.name}
            </h2>
          </div>
          {/* Vertical line sprouting from root */}
          <div className="absolute left-1/2 bottom-0 translate-y-full w-px h-16 bg-gradient-to-b from-primary/50 to-surface-bright" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 w-full pt-8 relative">
          {techTree.branches.map((branch, i) => (
            <motion.div 
              key={branch.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring" }}
              className="flex flex-col items-center relative"
            >
              {/* Branch Node */}
              <div className="px-6 py-2.5 rounded-lg border border-surface-bright bg-surface-container-low mb-8 relative z-10 group cursor-default shadow-md hover:border-secondary/50 transition-colors">
                <span className="font-mono text-sm uppercase tracking-widest text-secondary group-hover:text-glow transition-all font-bold">{branch.name}</span>
                {/* Visual connection to root */}
                <div className="absolute -top-[52px] left-1/2 w-px h-[52px] bg-surface-bright -z-10" />
                <div className="absolute -bottom-8 left-1/2 w-px h-8 bg-surface-bright -z-10" />
              </div>

              {/* Leaves Level */}
              <div className="flex flex-wrap items-center justify-center gap-3 border-t border-surface-bright pt-8 relative w-full px-4 rounded-3xl bg-gradient-to-b from-surface-bright/5 to-transparent shadow-inner">
                {/* Bracket connections */}
                <div className="absolute top-0 left-10 right-10 h-px bg-surface-bright" />
                {branch.children.map(tech => (
                  <TechLeaf key={tech.name} tech={tech} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
