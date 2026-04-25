import React from 'react';
import { motion } from 'framer-motion';
import { BugOff, Zap, GraduationCap, Braces } from 'lucide-react';

const services = [
  {
    icon: <BugOff size={40} className="text-error" />,
    title: "Code Review & Logic Debug",
    desc: "In-depth review of complex algorithmic implementations. Identifying deep logic bugs, architectural flaws, and eliminating code debt.",
    color: "group-hover:border-error"
  },
  {
    icon: <Zap size={40} className="text-tertiary" />,
    title: "Performance Enhancement",
    desc: "Optimizing execution time and memory overhead. Transforming O(N^2) bottlenecks into hyper-efficient O(N log N) or O(N) solutions.",
    color: "group-hover:border-tertiary"
  },
  {
    icon: <GraduationCap size={40} className="text-primary" />,
    title: "CP Instructor & Mentorship",
    desc: "Mentoring individuals and teams for regional programming contests (ACPC/ECPC). Specialized training in Graph Theory, DP, and Data Structures.",
    color: "group-hover:border-primary"
  },
  {
    icon: <Braces size={40} className="text-secondary" />,
    title: "Custom System Architecture",
    desc: "Designing and building resilient, high-performance software systems. From system modeling to API design and modular components.",
    color: "group-hover:border-secondary"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <h2 className="font-display font-bold text-5xl md:text-6xl text-on-surface mb-4">
          SERVICES<span className="text-primary glow-hover">.</span>
        </h2>
        <p className="font-mono text-sm text-on-surface-variant uppercase tracking-widest max-w-xl mx-auto border-b border-surface-bright pb-4 inline-block">
          Elevating Code Quality & Execution Strategy
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((srv, idx) => (
          <motion.div
            key={srv.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5, type: 'spring' }}
            whileHover={{ y: -8 }}
            className={`group bg-surface-container-low border border-surface-bright rounded-2xl p-8 relative overflow-hidden transition-all duration-300 ${srv.color} hover:shadow-lg hover:shadow-surface-bright/20`}
          >
            <div className="absolute -right-8 -top-8 opacity-[0.03] group-hover:opacity-10 group-hover:scale-150 transition-all duration-700 pointer-events-none">
              {React.cloneElement(srv.icon, { size: 180 })}
            </div>
            <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-surface border border-surface-bright group-hover:scale-110 transition-transform duration-300 shadow-md">
              {srv.icon}
            </div>
            <h3 className="font-display font-semibold text-2xl text-on-surface mb-3 group-hover:text-on-surface transition-colors">
              {srv.title}
            </h3>
            <p className="font-sans text-on-surface-variant leading-relaxed text-sm md:text-base">
              {srv.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
