import React from 'react';
import { motion } from 'framer-motion';
import { BugOff, Zap, GraduationCap, Braces } from 'lucide-react';
import CodeRain from './CodeRain';

const services = [
  {
    icon: <BugOff size={40} className="text-error" />,
    title: "Code Review & Logic Debug",
    desc: "In-depth review of complex algorithmic implementations. Identifying deep logic bugs, architectural flaws, and eliminating code debt.",
    color: "from-error/20 to-transparent",
    border: "group-hover:border-error"
  },
  {
    icon: <Zap size={40} className="text-tertiary" />,
    title: "Performance Enhancement",
    desc: "Optimizing execution time and memory overhead. Transforming O(N^2) bottlenecks into hyper-efficient O(N log N) or O(N) solutions.",
    color: "from-tertiary/20 to-transparent",
    border: "group-hover:border-tertiary"
  },
  {
    icon: <GraduationCap size={40} className="text-primary" />,
    title: "CP Instructor & Mentorship",
    desc: "Mentoring individuals and teams for regional programming contests (ACPC/ECPC). Specialized training in Graph Theory, DP, and Data Structures.",
    color: "from-primary/20 to-transparent",
    border: "group-hover:border-primary"
  },
  {
    icon: <Braces size={40} className="text-secondary" />,
    title: "Custom System Architecture",
    desc: "Designing and building resilient, high-performance software systems. From system modeling to API design and modular components.",
    color: "from-secondary/20 to-transparent",
    border: "group-hover:border-secondary"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto w-full relative overflow-hidden">
      <CodeRain />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none z-0" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-20 text-center relative z-10"
      >
        <h2 className="font-display font-black text-6xl md:text-7xl text-on-surface mb-6 tracking-tight drop-shadow-lg">
          SERVICES<span className="text-primary glow-hover animate-pulse">.</span>
        </h2>
        <p className="font-mono text-sm text-on-surface-variant uppercase tracking-widest max-w-xl mx-auto border-b border-surface-bright pb-4 inline-block">
          Elevating Code Quality & Execution Strategy
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        {services.map((srv, idx) => (
          <motion.div
            key={srv.title}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.6, type: 'spring' }}
            whileHover={{ y: -8, scale: 1.02 }}
            className={`group bg-surface/30 backdrop-blur-xl border border-surface-bright rounded-3xl p-10 relative overflow-hidden transition-all duration-500 shadow-xl ${srv.border}`}
          >
            {/* Animated Glow overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${srv.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
            
            <div className="absolute -right-8 -top-8 opacity-[0.02] group-hover:opacity-10 group-hover:rotate-12 group-hover:scale-150 transition-all duration-700 pointer-events-none">
              {React.cloneElement(srv.icon, { size: 240 })}
            </div>
            
            <div className="relative z-10">
              <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-surface/80 backdrop-blur-md border border-surface-bright group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-[0_0_20px_rgba(0,0,0,0.3)]">
                {srv.icon}
              </div>
              <h3 className="font-display font-bold text-3xl text-on-surface mb-4 tracking-tight drop-shadow-md">
                {srv.title}
              </h3>
              <p className="font-sans text-on-surface-variant leading-relaxed text-base md:text-lg">
                {srv.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
