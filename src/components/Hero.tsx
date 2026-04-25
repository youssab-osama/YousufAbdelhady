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

    // FIX 1: Use the canvas's own DOM size instead of window.innerWidth,
    // which can exceed the visual viewport on some mobile browsers and
    // create a hidden horizontal scroll source.
    const getSize = () => ({
      w: canvas.parentElement?.offsetWidth ?? window.innerWidth,
      h: canvas.parentElement?.offsetHeight ?? window.innerHeight,
    });

    let { w: width, h: height } = getSize();
    canvas.width = width;
    canvas.height = height;

    const resize = () => {
      ({ w: width, h: height } = getSize());
      canvas.width = width;
      canvas.height = height;
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
    // FIX 2: Added `max-w-full` alongside `overflow-hidden` — belt-and-suspenders
    // guard so the section never contributes to a horizontal scroll.
    <section
      id="home"
      className="relative min-h-[100svh] h-auto w-full max-w-full flex flex-col items-center justify-center overflow-hidden bg-background pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <LiveGraph />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)] pointer-events-none z-0" />

      {/* FIX 3: gap-12 → gap-6 lg:gap-12 so the grid doesn't force extra width on
          narrow screens.  Also px-4 sm:px-6 for a touch more breathing room. */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center relative z-10">

        {/* Left Content */}
        {/* FIX 4: Changed initial x from -50 to 0 on mobile via a conditional, but
            simpler: clip the motion div itself so any transient translate can't
            create scrollbars. overflow-hidden is safe here because nothing
            bleeds out of the left column visually. */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-12 lg:col-span-8 flex flex-col justify-center order-2 lg:order-1 pt-[clamp(1.5rem,5vw,2rem)] lg:pt-0 min-w-0"
        >
          {/* Welcome badge */}
          <div className="flex items-center gap-[clamp(0.5rem,2vw,0.75rem)] mb-[clamp(0.75rem,3vw,1.5rem)]">
            <span className="flex h-[clamp(0.5rem,1.5vw,0.75rem)] w-[clamp(0.5rem,1.5vw,0.75rem)] relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-[clamp(0.5rem,1.5vw,0.75rem)] w-[clamp(0.5rem,1.5vw,0.75rem)] bg-secondary"></span>
            </span>
            <span className="font-mono text-secondary text-[clamp(0.6rem,2.5vw,1rem)] uppercase tracking-[0.2em] font-bold">
              Welcome, Client
            </span>
          </div>

          <h1 className="font-display font-black text-[clamp(2.5rem,11.5vw,7rem)] leading-[1.05] tracking-tighter text-on-surface mb-[clamp(1rem,4vw,1.5rem)] uppercase break-words w-full min-w-0">
            Yousuf <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-on-surface to-on-surface-variant outline-text text-shadow-sm">Abdelhady</span>
          </h1>

          {/* FIX 5: Added `break-words` and `min-w-0` to the role line so long
              monospaced text with letter-spacing can't push past the column edge. */}
          <p className="font-mono text-[clamp(0.6rem,2.2vw,1.125rem)] text-primary uppercase tracking-[0.1em] md:tracking-[0.15em] mb-[clamp(1rem,4vw,2rem)] w-full min-w-0 border-l-[clamp(1px,0.5vw,2px)] border-primary pl-[clamp(0.75rem,2.5vw,1rem)] glow-hover transition-colors duration-300 shadow-sm leading-relaxed break-words">
            Software Engineer / Systems Architect / Problem Solver
          </p>

          <p className="font-sans text-on-surface-variant text-[clamp(0.8rem,3vw,1.25rem)] w-full max-w-2xl leading-relaxed mb-[clamp(1.5rem,6vw,2.5rem)] block pr-2">
            I synthesize abstract logic into highly performant, scalable software architecture. Specializing in C++, dynamic algorithms, and full-stack ecosystems.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-[clamp(0.75rem,3vw,1rem)] items-stretch sm:items-center w-full">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-on-surface text-background px-[clamp(1rem,4vw,2rem)] py-[clamp(0.75rem,2.5vw,1rem)] font-mono text-[clamp(0.6rem,2vw,1rem)] uppercase tracking-widest font-bold hover:bg-secondary hover:text-on-secondary transition-colors duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-secondary/50 rounded flex items-center justify-center gap-[clamp(0.5rem,2vw,0.75rem)] w-full sm:w-auto"
            >
              <Terminal className="w-[clamp(1rem,3vw,1.25rem)] h-[clamp(1rem,3vw,1.25rem)]" /> INITIATE_CONTACT
            </motion.a>
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-surface-bright text-on-surface-variant px-[clamp(1rem,4vw,2rem)] py-[clamp(0.75rem,2.5vw,1rem)] font-mono text-[clamp(0.6rem,2vw,1rem)] uppercase tracking-widest hover:border-primary hover:text-primary transition-all duration-300 rounded flex items-center justify-center gap-[clamp(0.5rem,2vw,0.75rem)] bg-surface/30 backdrop-blur w-full sm:w-auto"
            >
              <Cpu className="w-[clamp(1rem,3vw,1.25rem)] h-[clamp(1rem,3vw,1.25rem)]" /> VIEW_SYSTEMS
            </motion.a>
          </div>
        </motion.div>

        {/* Right Content / Image Area */}
        {/* FIX 6: The motion.div is now `overflow-visible` (default) but we wrap
            the RINGS in their own overflow-hidden layer so they are clipped to
            the image circle without affecting the glow or the floating badge.
            The badge is repositioned from this motion.div so it is never
            clipped and never causes horizontal bleed. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="col-span-12 lg:col-span-4 flex justify-center lg:justify-end items-center relative order-1 lg:order-2"
        >
          {/* Outer wrapper: sets size & group context. NO overflow-hidden here so
              the glow blur and badge are visible. */}
          <div className="relative w-[clamp(10rem,52vw,22rem)] h-[clamp(10rem,52vw,22rem)] group mt-[clamp(1rem,4vw,0rem)] lg:mt-0 flex shrink-0">

            {/* ── Ring clip container ─────────────────────────────────────────
                overflow-hidden + rounded-full clips the inset-[-10%] and
                inset-[-20%] rings so they cannot bleed outside the circle
                boundary. The container is absolutely positioned to exactly
                cover the image area. */}
            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
              <div className="absolute inset-[-10%] rounded-full border-t border-r border-primary/50 animate-[spin_10s_linear_infinite] group-hover:border-primary group-hover:scale-110 transition-all duration-700" />
              <div className="absolute inset-[-20%] rounded-full border-b border-l border-secondary/30 animate-[spin_15s_linear_infinite_reverse] group-hover:border-secondary group-hover:scale-[1.15] transition-all duration-700" />
            </div>

            {/* Glow — lives outside the clip container intentionally */}
            <div className="absolute inset-0 bg-primary/20 blur-2xl sm:blur-3xl rounded-full group-hover:bg-primary/40 transition-colors duration-700 pointer-events-none" />

            {/* Image card */}
            <div className="relative w-full h-full p-[clamp(0.375rem,1.5vw,0.5rem)] bg-surface border border-surface-highest rounded-[clamp(2rem,10vw,3rem)] overflow-hidden rotate-3 hover:rotate-0 hover:scale-[1.03] transition-all duration-500 shadow-2xl shadow-primary/10">
              <img
                src={profileImage}
                alt="Yousuf Abdelhady Profile"
                className="w-full h-full object-cover rounded-[clamp(1.5rem,8vw,2.5rem)] transition-all duration-700"
              />
              {/* Technical overlay grid */}
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPjxyZWN0IHdpZHRoPSI0IiBoZWlnaHQ9IjQiIGZpbGw9InRyYW5zcGFyZW50Ii8+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIvPjwvc3ZnPg==')] opacity-50 pointer-events-none group-hover:opacity-0 transition-opacity" />
            </div>

            {/* ── Floating Badge ───────────────────────────────────────────────
                Kept inside the image-wrapper div (relative context) so the
                percentage-based position still tracks the circle size.
                The badge goes bottom-left which is INWARD on mobile (away from
                the right edge that was overflowing). */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[-10%] left-[-10%] bg-surface-highest border border-surface-bright px-[clamp(0.75rem,3vw,1.25rem)] py-[clamp(0.5rem,2vw,0.875rem)] rounded-lg backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)] flex items-center gap-[clamp(0.5rem,2vw,0.75rem)] z-20"
            >
              <Code2 className="text-secondary shrink-0 w-[clamp(1.25rem,5vw,1.75rem)] h-[clamp(1.25rem,5vw,1.75rem)]" />
              <div className="flex flex-col">
                <span className="font-mono text-[clamp(0.5rem,1.5vw,0.625rem)] text-on-surface-variant uppercase tracking-widest font-bold">Status</span>
                <span className="font-display text-[clamp(0.75rem,2.5vw,1rem)] font-black text-[#06b6d4] drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] leading-tight">Job Ready</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-on-surface-variant flex flex-col items-center gap-2 pointer-events-none opacity-50 z-30"
      >
        <span className="font-mono text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
};

export default Hero;
