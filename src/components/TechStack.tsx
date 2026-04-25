import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Database, Code2, Globe } from 'lucide-react';

const TechStack: React.FC = () => {
  const categories = [
    {
      title: "Algorithmic / Core",
      icon: <Terminal size={20} className="text-secondary" />,
      colorClass: "text-secondary border-secondary/30 bg-secondary/10",
      skills: ["C++", "Python", "Java", "Data Structures", "Dynamic Programming", "Graph Theory"]
    },
    {
      title: "Frontend Engineering",
      icon: <Globe size={20} className="text-primary" />,
      colorClass: "text-primary border-primary/30 bg-primary/10",
      skills: ["React", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Backend / Infra",
      icon: <Database size={20} className="text-tertiary" />,
      colorClass: "text-tertiary border-tertiary/30 bg-tertiary/10",
      skills: ["Node.js", "C#", "Dart", "Object-Oriented Design", "Databases"]
    }
  ];

  return (
    <section id="skills" className="max-w-7xl mx-auto w-full px-6">
      <div className="grid grid-cols-12 gap-6 relative">
        <div className="col-span-12 md:col-span-4 mb-8 md:mb-0">
          <h2 className="font-display font-semibold text-5xl tracking-[-0.02em] text-on-surface mb-4">
            TECH<br /><span className="text-surface-bright">STACK.</span>
          </h2>
          <p className="font-mono text-sm text-on-surface-variant uppercase tracking-widest border-l border-surface-bright pl-4">
            Tools & Languages
          </p>
        </div>
        
        <div className="col-span-12 md:col-span-8 flex flex-col gap-12">
          {categories.map((cat, idx) => (
            <motion.div 
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-3 font-mono text-sm uppercase tracking-widest text-on-surface">
                {cat.icon}
                {cat.title}
              </div>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map(skill => (
                  <span 
                    key={skill} 
                    className={`font-mono text-xs uppercase tracking-widest px-3 py-2 border rounded-sm transition-all hover:scale-[1.02] cursor-default ${cat.colorClass}`}
                  >
                    {skill}
                  </span>
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
