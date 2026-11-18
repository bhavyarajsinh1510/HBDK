"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  color: string;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Check if on mobile screen to optimize particle count for high frame rate
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const count = isMobile ? 14 : 26;

    const colors = [
      "rgba(197, 104, 104, 0.35)", // Rose-gold
      "rgba(212, 175, 55, 0.35)",  // Subtle Gold
      "rgba(230, 230, 250, 0.45)", // Soft Lavender
      "rgba(247, 231, 234, 0.45)", // Warm Blush
    ];

    const newParticles: Particle[] = Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 96 + 2,
      y: Math.random() * 96 + 2,
      size: Math.random() * 5 + 3,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.35 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full blur-[0.5px] will-change-transform"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
          }}
          animate={{
            y: ["0vh", "-22vh", "0vh"],
            x: ["0vw", "3vw", "-3vw", "0vw"],
            opacity: [p.opacity * 0.6, p.opacity, p.opacity * 0.5],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
