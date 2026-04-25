import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Code2, Terminal, Cpu } from 'lucide-react';
import profileImage from '../assets/images/profile 2.jpg';

const LiveGraph = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    const particles: { x: number; y: number; vx: number; vy: number }[] = [];
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = 'rgba(6, 182, 212, 0.4)';
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.15)';
      ctx.lineWidth = 1;

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });
      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-30" />;
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-background pt-20">
      <LiveGraph />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-12 lg:col-span-8 flex flex-col justify-center order-2 lg:order-1"
        >
          {/* Welcome the client */}
          <div className="flex items-center gap-3 mb-6">
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
            </span>
            <span className="font-mono text-secondary text-sm md:text-base uppercase tracking-[0.2em] font-bold">
              Welcome, Client
            </span>
          </div>
          
          <h1 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-[7rem] leading-[1.1] tracking-tighter text-on-surface mb-6 uppercase break-words hyphens-auto w-full">
            Yousuf <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-surface to-on-surface-variant outline-text text-shadow-sm">Abdelhady</span>
          </h1>

          <p className="font-mono text-base md:text-lg text-primary uppercase tracking-[0.15em] mb-8 max-w-2xl border-l-2 border-primary pl-4 glow-hover transition-colors duration-300 shadow-sm">
            Software Engineer / Systems Architect / Problem Solver
          </p>

          <p className="font-sans text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
            I synthesize abstract logic into highly performant, scalable software architecture. Specializing in C++, dynamic algorithms, and full-stack ecosystems.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-on-surface text-background px-8 py-4 font-mono uppercase tracking-widest font-bold hover:bg-secondary hover:text-on-secondary transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-secondary/50 rounded flex items-center gap-3"
            >
              <Terminal size={18} /> INITIATE_CONTACT
            </motion.a>
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-surface-bright text-on-surface-variant px-8 py-4 font-mono uppercase tracking-widest hover:border-primary hover:text-primary transition-all duration-300 rounded flex items-center gap-3 bg-surface/30 backdrop-blur"
            >
              <Cpu size={18} /> VIEW_SYSTEMS
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content / Image Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="col-span-12 lg:col-span-4 flex justify-center lg:justify-end items-center relative order-1 lg:order-2"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 group mt-8 lg:mt-0">
             {/* Spinning and scaling glow borders */}
             <div className="absolute inset-[-10%] rounded-full border-t border-r border-primary/50 animate-[spin_10s_linear_infinite] group-hover:border-primary group-hover:scale-110 transition-all duration-700" />
             <div className="absolute inset-[-20%] rounded-full border-b border-l border-secondary/30 animate-[spin_15s_linear_infinite_reverse] group-hover:border-secondary group-hover:scale-[1.15] transition-all duration-700" />
             
             {/* Heavy Blur backdrop */}
             <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/40 transition-colors duration-700" />
             
             <div className="relative w-full h-full p-2 bg-surface border border-surface-highest rounded-[48px] overflow-hidden rotate-3 hover:rotate-0 hover:scale-[1.03] transition-all duration-500 shadow-2xl shadow-primary/10">
               <img 
                  src={profileImage} 
                  alt="Yousuf Abdelhady Profile" 
                  className="w-full h-full object-cover rounded-[40px] transition-all duration-700"
               />
               {/* Technical overlay grid */}
               <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9InRyYW5zcGFyZW50Ii8+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50 pointer-events-none group-hover:opacity-0 transition-opacity" />
             </div>
             
             {/* Floating Badge */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-6 -left-6 bg-surface-highest border border-surface-bright px-5 py-3.5 rounded-lg backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)] flex items-center gap-3 z-20"
             >
               <Code2 className="text-secondary" size={28} />
               <div className="flex flex-col">
                 <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest font-bold">Status</span>
                 <span className="font-display text-sm md:text-base font-black text-[#06b6d4] drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]">Job Ready</span>
               </div>
             </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-on-surface-variant flex flex-col items-center gap-2 pointer-events-none opacity-50"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
};

export default Hero;
