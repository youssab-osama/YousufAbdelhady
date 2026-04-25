import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Check if device supports hover (ignores true mobile touch devices)
    if (window.matchMedia("(any-hover: none)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'a' || target.tagName.toLowerCase() === 'button' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[250px] h-[250px] rounded-full pointer-events-none z-50 mix-blend-screen bg-primary/10 blur-[70px]"
      animate={{
        x: mousePosition.x - 125,
        y: mousePosition.y - 125,
        scale: isHovering ? 1.5 : 1,
        opacity: mousePosition.x === -1000 ? 0 : 0.8
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
    />
  );
};

export default CursorGlow;
