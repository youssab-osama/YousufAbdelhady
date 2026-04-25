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
      // Start lines heavily randomized (0s - 2s delay at 38ms tick rate = up to ~52 negative frames)
      drops[x] = -Math.floor(Math.random() * 55); 
    }

    const draw = () => {
      // translucent background to create trail effect matching theme
      ctx.fillStyle = 'rgba(6, 6, 6, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = 'rgba(6, 182, 212, 0.3)'; // Primary color with some opacity
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        // Since we are starting into negative numbers to simulate a delay, only draw when drop > 0
        if (drops[i] * fontSize >= 0) {
          const text = characters.charAt(Math.floor(Math.random() * characters.length));
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        }

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    // Was 50. Made it 25% faster -> roughly 38ms.
    const interval = setInterval(draw, 38);

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
