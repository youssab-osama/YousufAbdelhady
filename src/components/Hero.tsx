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
      const particleCount = window.innerWidth < 768 ? 30 : 60;
      for(let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
        });
      }
    };
    resize();
    window.addEventListener('resize', resize);

    let animationFrameId: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#353535'; 
      ctx.strokeStyle = '#353535';
      
      for(let i=0; i<particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if(p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if(p.y < 0 || p.y > canvas.height) p.vy *= -1;
        
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
            ctx.globalAlpha = 1 - dist / 150;
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

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-50 pointer-events-none" />;
};

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      <LiveGraph />
      <div className="z-10 max-w-7xl w-full px-6 grid grid-cols-12 gap-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-12 md:col-span-10 xl:col-span-9"
        >
          <div className="font-mono text-primary text-sm uppercase tracking-[0.1em] mb-6 border-l-2 border-primary pl-4">
            System Online // Status: Expert
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-[100px] leading-[1.1] tracking-[-0.04em] text-on-surface mb-8 uppercase">
            <span className="text-surface-variant">SOFTWARE</span><br />
            ENGINEER<span className="text-primary">_</span>
          </h1>
          <p className="font-sans text-xl text-on-surface-variant max-w-2xl mb-12 leading-relaxed">
            With a <span className="text-on-surface font-semibold glow-hover transition-colors">Sharp Problem-Solving Mindset</span>. 
            Merging rigorous algorithmic efficiency with system-level engineering. 
            Based in Cairo, Egypt.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-on-primary px-8 py-4 font-mono text-sm tracking-widest uppercase font-bold border border-primary hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[4px_4px_0_#4ade80] active:translate-x-0 active:translate-y-0 active:shadow-none transition-all duration-200">
              [ Init Contact ]
            </button>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="bg-transparent text-on-surface border border-surface-bright px-8 py-4 font-mono text-sm tracking-widest uppercase font-bold hover:bg-surface-container hover:border-surface-variant transition-all duration-200">
              GITHUB.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
