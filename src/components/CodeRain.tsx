import React, { useEffect, useRef } from 'react';

const CodeRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const characters = '_->;;!""\'?~<ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789>@#$%^&*/>{}[]';
    const fontSize = 14;
    let columns = Math.ceil(width / fontSize);
    let drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * height; // Start at random height to randomize spawn
    }

    const draw = () => {
      // translucent background to create trail effect matching theme
      ctx.fillStyle = 'rgba(6, 6, 6, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = 'rgba(6, 182, 212, 0.3)'; // Primary color with some opacity
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      columns = Math.ceil(width / fontSize);
      drops = [];
      for (let x = 0; x < columns; x++) {
        drops[x] = 1;
      }
    };

    window.addEventListener('resize', resize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none mix-blend-screen opacity-50 z-0" />;
};

export default CodeRain;
