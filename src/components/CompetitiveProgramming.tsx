import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Trophy, Code, Target, Award, ExternalLink } from 'lucide-react';
import backgImg from '../assets/images/backg.jpg';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.9, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)', transition: { duration: 0.6, type: 'spring' } }
};

const StatCard: React.FC<{ icon: any, title: string, value: string, subtitle: string }> = ({ icon, title, value, subtitle }) => (
  <motion.div 
    variants={itemVariants}
    whileHover={{ y: -5, scale: 1.02 }}
    className="border border-surface-bright bg-background/80 backdrop-blur-md p-6 hover:border-secondary transition-all duration-300 relative group overflow-hidden rounded-xl shadow-xl hover:shadow-secondary/20"
  >
    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500">
      {icon}
    </div>
    <div className="font-mono text-[10px] sm:text-xs text-on-surface-variant uppercase tracking-widest mb-4 flex items-center gap-2">
      <span className="w-2 h-2 rounded-full bg-secondary inline-block animate-pulse" />
      {title}
    </div>
    <div className="font-display font-bold text-3xl sm:text-4xl text-on-surface mb-2 tracking-tight group-hover:text-glow transition-all">
      {value}
    </div>
    <div className="font-sans text-xs sm:text-sm text-on-surface-variant font-medium">
      {subtitle}
    </div>
  </motion.div>
);

const CompetitiveProgramming: React.FC = () => {
  return (
    <section id="cp" className="w-full relative py-24 overflow-hidden">
      {/* Background Image with Theme Filters */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(${backgImg})`, filter: 'grayscale(70%) contrast(120%) brightness(30%)' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/50 to-background" />

      <div className="max-w-7xl mx-auto w-full px-6 relative z-10">
        <div className="grid grid-cols-12 gap-8 mb-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="col-span-12 md:col-span-6 lg:col-span-4 md:order-2 md:text-right flex flex-col items-start md:items-end justify-center"
          >
            <h2 className="font-display font-bold text-5xl md:text-6xl tracking-tight text-on-surface mb-4">
              THE<br /><span className="text-secondary glow-hover text-shadow-sm">EDGE.</span>
            </h2>
            <p className="font-mono text-sm text-on-surface-variant uppercase tracking-widest border-l-2 md:border-l-0 md:border-r-2 border-secondary pl-4 md:pl-0 md:pr-4 bg-background/50 backdrop-blur py-2 inline-block">
              Competitive Programming
            </p>
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="col-span-12 md:col-span-6 lg:col-span-8 md:order-1"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              <StatCard 
                icon={<Code size={56} className="text-secondary" />}
                title="Problems Solved"
                value="2,000+"
                subtitle="Codeforces & LeetCode"
              />
              <StatCard 
                icon={<Target size={56} className="text-secondary" />}
                title="Global Rating"
                value="Expert"
                subtitle="Codeforces Peak"
              />
              <StatCard 
                icon={<Trophy size={56} className="text-secondary" />}
                title="ECPC 2025"
                value="Silver Medal"
                subtitle="Top 10 out of 250+ Teams"
              />
              <StatCard 
                icon={<Award size={56} className="text-secondary" />}
                title="ACPC 2025"
                value="Finalist"
                subtitle="Africa & Arab Championship"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full relative rounded-2xl overflow-hidden group shadow-2xl"
        >
          {/* Animated gradient border wrapper */}
          <div className="absolute inset-0 bg-gradient-to-r from-surface-bright via-secondary to-primary opacity-50 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          <div className="absolute inset-[2px] bg-[#0c0c0c]/95 backdrop-blur-xl rounded-[14px] z-0" />
          
          <div className="relative z-10 p-8 md:p-12 flex flex-col xl:flex-row items-start xl:items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="font-mono text-sm uppercase tracking-widest text-secondary mb-4 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-secondary hidden sm:inline-block" />
                acmASCIS // Training Head & Instructor
              </h3>
              <p className="font-sans text-on-surface-variant text-base md:text-lg max-w-4xl leading-relaxed">
                Leading the competitive programming training program for college students across multiple skill levels. Designing structured training plans covering <strong className="text-on-surface text-secondary/90">Number Theory, Graphs, Dynamic Programming, and advanced Data Structures</strong>. Preparing the next generation of engineers for local relative contests.
              </p>
            </div>
            <a 
              href="https://codeforces.com/profile/YousufAbdelhady" 
              target="_blank" 
              rel="noreferrer"
              className="group/btn relative shrink-0 overflow-hidden rounded font-mono text-sm uppercase tracking-widest font-bold border-2 border-secondary text-secondary hover:text-on-secondary px-8 py-4 transition-colors duration-300 flex items-center justify-center gap-3 w-full xl:w-auto bg-background/50 backdrop-blur"
            >
              <span className="absolute inset-0 bg-secondary w-0 group-hover/btn:w-full transition-all duration-300 ease-out z-0" />
              <span className="relative z-10 flex items-center gap-3">
                View CF Profile <ExternalLink size={18} />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;
