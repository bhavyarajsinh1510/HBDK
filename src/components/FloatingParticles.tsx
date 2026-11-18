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
    // Generate soft ambient particles
    const colors = [
      "rgba(197, 104, 104, 0.35)", // Rose-gold
      "rgba(212, 175, 55, 0.35)",  // Subtle Gold
      "rgba(230, 230, 250, 0.5)",  // Soft Lavender
      "rgba(247, 231, 234, 0.5)",  // Warm Blush
    ];

    const newParticles: Particle[] = Array.from({ length: 28 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 6 + 3,
      duration: Math.random() * 12 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.2,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full blur-[1px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
          }}
          animate={{
            y: ["0vh", "-30vh", "0vh"],
            x: ["0vw", "4vw", "-4vw", "0vw"],
            opacity: [p.opacity * 0.5, p.opacity, p.opacity * 0.4],
            scale: [1, 1.3, 0.9, 1],
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

