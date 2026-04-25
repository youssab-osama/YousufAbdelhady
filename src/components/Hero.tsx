import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const LiveGraph: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: {x: number, y: number, vx: number, vy: number}[] = [];
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      const particleCount = window.innerWidth < 768 ? 40 : 80;
      for(let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    };
    resize();
    window.addEventListener('resize', resize);

    let animationFrameId: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#4ade80'; 
      ctx.strokeStyle = '#4ade80';
      
      for(let i=0; i<particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if(p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if(p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
        ctx.globalAlpha = 0.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();

        for(let j=i+1; j<particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.globalAlpha = (1 - dist / 150) * 0.3;
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40 pointer-events-none" />;
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <LiveGraph />
      <div className="z-10 max-w-7xl w-full px-6 flex flex-col-reverse lg:flex-row items-center gap-12 relative pt-12 md:pt-0">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring', bounce: 0.4 }}
          className="flex-1 text-center lg:text-left z-20"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-primary text-xs md:text-sm uppercase tracking-[0.1em] mb-6 inline-block border border-primary/30 bg-primary/10 px-4 py-2 rounded-sm"
          >
            <span className="w-2 h-2 inline-block rounded-full bg-primary mr-3 animate-ping" />
            System Online // Status: Expert
          </motion.div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-[100px] leading-[1.0] tracking-[-0.04em] text-on-surface mb-8 uppercase">
            <span className="text-surface-variant uppercase text-shadow-sm">SOFTWARE</span><br />
            ENGINEER<span className="text-primary animate-pulse">_</span>
          </h1>
          <p className="font-sans text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed">
            With a <span className="text-on-surface font-semibold glow-hover transition-colors text-glow text-primary/90">Sharp Problem-Solving Mindset</span>. 
            Merging rigorous algorithmic efficiency with system-level engineering.
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
            <a href="#contact" className="bg-primary text-on-primary px-8 py-4 font-mono text-sm tracking-widest uppercase font-bold hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[6px_6px_0_#4ade80] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-200">
              [ Init Contact ]
            </a>
            <a href="#projects" className="bg-transparent text-on-surface border border-surface-bright px-8 py-4 font-mono text-sm tracking-widest uppercase font-bold hover:bg-surface-container-highest hover:border-surface-variant hover:text-primary transition-all duration-200">
              View Work
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 flex justify-center lg:justify-end relative z-10 w-full"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: 'spring', bounce: 0.5 }}
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] flex items-center justify-center">
            {/* Pulsing glow background */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 bg-primary/20 rounded-full blur-[60px]"
            />
            {/* Inner Ring */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-primary/30"
            />
            {/* Outer Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-30px] rounded-full border border-surface-bright"
            />
            
            <div className="relative w-[90%] h-[90%] rounded-[2rem] md:rounded-[3rem] overflow-hidden border-2 border-primary border-glow rotate-3 bg-surface-container group">
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none mix-blend-overlay" />
              <img 
                src="/profile 2.jpg" 
                alt="Yousuf Abdelhady" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter hover:contrast-125"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" fill="none"><rect width="100%" height="100%" fill="%231a1a1a" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="%234ade80" font-family="monospace" font-size="10">USER_PROFILE_IMG</text></svg>';
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
