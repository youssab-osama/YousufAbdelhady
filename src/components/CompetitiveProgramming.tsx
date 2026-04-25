import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Target, Award } from 'lucide-react';

const StatCard: React.FC<{ icon: any, title: string, value: string, subtitle: string, delay: number }> = ({ icon, title, value, subtitle, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="border border-surface-bright bg-surface p-6 hover:border-secondary transition-colors duration-300 relative group overflow-hidden"
  >
    <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
      {icon}
    </div>
    <div className="font-mono text-xs text-on-surface-variant uppercase tracking-widest mb-4">
      {title}
    </div>
    <div className="font-display font-bold text-4xl text-on-surface mb-2 tracking-tight group-hover:text-glow transition-all">
      {value}
    </div>
    <div className="font-sans text-sm text-on-surface-variant">
      {subtitle}
    </div>
  </motion.div>
);

const CompetitiveProgramming: React.FC = () => {
  return (
    <section id="cp" className="max-w-7xl mx-auto w-full px-6">
      <div className="grid grid-cols-12 gap-6 relative mb-16">
        <div className="col-span-12 md:col-span-6 lg:col-span-8 order-2 md:order-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <StatCard 
              icon={<Code size={64} className="text-secondary" />}
              title="Problems Solved"
              value="2,000+"
              subtitle="Codeforces, LeetCode"
              delay={0.1}
            />
            <StatCard 
              icon={<Target size={64} className="text-secondary" />}
              title="Global Rating"
              value="Expert"
              subtitle="Codeforces Profile"
              delay={0.2}
            />
            <StatCard 
              icon={<Trophy size={64} className="text-secondary" />}
              title="ECPC 2025"
              value="Silver Medalist"
              subtitle="Top 10 out of 250+ Teams"
              delay={0.3}
            />
            <StatCard 
              icon={<Award size={64} className="text-secondary" />}
              title="ACPC 2025"
              value="Finalist"
              subtitle="Africa & Arab Championship"
              delay={0.4}
            />
          </div>
        </div>
        
        <div className="col-span-12 md:col-span-6 lg:col-span-4 order-1 md:order-2 mb-8 md:mb-0 md:text-right flex flex-col items-start md:items-end justify-start">
          <h2 className="font-display font-semibold text-5xl tracking-[-0.02em] text-on-surface mb-4">
            THE<br /><span className="text-secondary">EDGE.</span>
          </h2>
          <p className="font-mono text-sm text-on-surface-variant uppercase tracking-widest border-l md:border-l-0 md:border-r border-surface-bright pl-4 md:pl-0 md:pr-4">
            Competitive Programming
          </p>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-full border border-surface-bgright bg-surface-container-lowest p-6 sm:p-10 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8"
      >
        <div>
          <h3 className="font-mono text-sm uppercase tracking-widest text-secondary mb-3">acmASCIS // Training Head & Instructor</h3>
          <p className="font-sans text-on-surface text-base max-w-3xl leading-relaxed">
            Leading the competitive programming training program for college students across multiple skill levels. Designing structured training plans covering Number Theory, Graphs, Dynamic Programming, and advanced Data Structures. Preparing the next generation of engineers for local and regional contests.
          </p>
        </div>
        <button className="whitespace-nowrap bg-transparent border border-secondary text-secondary px-8 py-4 font-mono text-sm uppercase tracking-widest font-bold hover:bg-secondary hover:text-on-secondary transition-colors duration-300">
          View CF Profile
        </button>
      </motion.div>
    </section>
  );
};

export default CompetitiveProgramming;
