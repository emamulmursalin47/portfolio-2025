/* eslint-disable @typescript-eslint/ban-ts-comment */
import  { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const FloatingBalls = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const numBalls = 5;
  const balls = Array.from({ length: numBalls });
  //@ts-ignore
  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX,
      y: event.clientY
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {balls.map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-r from-purple-500/20 to-violet-500/20 backdrop-blur-sm"
          style={{
            width: `${80 + index * 20}px`,
            height: `${80 + index * 20}px`,
          }}
          animate={{
            x: mousePosition.x - (40 + index * 10),
            y: mousePosition.y - (40 + index * 10),
          }}
          transition={{
            type: "spring",
            stiffness: 100 - index * 10,
            damping: 20 + index * 2,
            mass: 0.5 + index * 0.3,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBalls;