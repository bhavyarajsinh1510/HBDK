"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, Heart, ChevronDown, Cake, Crown } from "lucide-react";
import confetti from "canvas-confetti";

export default function GrandReveal() {
  useEffect(() => {
    // Initial gentle celebratory confetti burst
    const end = Date.now() + 1200;
    const colors = ["#C56868", "#D4AF37", "#E6E6FA", "#F7E7EA", "#E5989B"];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  const titleWords = "Happy Birthday, Khushi!".split(" ");

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-4 pt-16 pb-12 overflow-hidden">
      {/* Decorative background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#F7E7EA]/50 via-[#EAE6F5]/40 to-[#FFFDF9]/60 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#EAE6F5] shadow-xs mb-6"
      >
        <Crown className="w-4 h-4 text-[#D4AF37]" />
        <span className="text-xs uppercase tracking-widest text-[#C56868] font-bold">
          The Official Birthday Celebration
        </span>
        <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
      </motion.div>

      {/* Main Dynamic Greeting with Letter-by-Letter Stagger */}
      <div className="max-w-4xl mx-auto mb-6">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-[#2D2D2D] tracking-tight leading-[1.1]">
          {titleWords.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-3 sm:mr-4 last:mr-0">
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  initial={{ opacity: 0, y: 40, rotate: -4 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + (wordIndex * 6 + letterIndex) * 0.04,
                    type: "spring",
                    stiffness: 120,
                  }}
                  className={`inline-block ${
                    word === "Khushi!"
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-[#C56868] via-[#D43745] to-[#B95757] drop-shadow-xs"
                      : ""
                  }`}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>
      </div>

      {/* Subtitle framing the digital gift */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#5A5450] font-normal leading-relaxed mb-8 px-2"
      >
        <p>
          Welcome to a digital universe crafted exclusively for you. A place to look back on how we met at AJ&apos;s Academy, relive all the chaotic Bangalore days, celebrate our inside jokes, and remind you how deeply valued you are.
        </p>
      </motion.div>

      {/* Signature note from Bhavya */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.1 }}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl glass-card text-sm text-[#2D2D2D] shadow-sm mb-12"
      >
        <span className="font-cursive text-xl text-[#C56868]">Crafted with love & sarcasm,</span>
        <span className="font-semibold">— Bhavya</span>
      </motion.div>

      {/* Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
        className="flex flex-col items-center gap-2 text-xs text-[#5A5450]/70 font-medium cursor-pointer"
        onClick={() => {
          const cakeSection = document.getElementById("cake-section");
          cakeSection?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="tracking-widest uppercase text-[10px]">Blow Out Your Candles</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-8 h-8 rounded-full bg-white/80 border border-[#EAE6F5] flex items-center justify-center text-[#C56868] shadow-xs"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

