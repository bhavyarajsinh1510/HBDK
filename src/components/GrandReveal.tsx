"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Sparkles, ChevronDown, Crown } from "lucide-react";
import confetti from "canvas-confetti";

export default function GrandReveal() {
  useEffect(() => {
    // Initial gentle celebratory confetti burst
    const end = Date.now() + 1000;
    const colors = ["#C56868", "#D4AF37", "#E6E6FA", "#F7E7EA", "#E5989B"];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 45,
        origin: { x: 0, y: 0.7 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 45,
        origin: { x: 1, y: 0.7 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  }, []);

  const titleWords = "Happy Birthday, Khushi!".split(" ");

  return (
    <section className="relative min-h-[85vh] sm:min-h-[90vh] flex flex-col justify-center items-center text-center px-4 pt-12 sm:pt-16 pb-10 overflow-hidden">
      {/* Decorative background aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-gradient-to-tr from-[#F7E7EA]/50 via-[#EAE6F5]/40 to-[#FFFDF9]/60 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/85 border border-[#EAE6F5] shadow-xs mb-5 sm:mb-6"
      >
        <Crown className="w-3.5 h-3.5 text-[#D4AF37]" />
        <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#C56868] font-bold">
          The Official Birthday Celebration
        </span>
        <Sparkles className="w-3 h-3 text-[#D4AF37]" />
      </motion.div>

      {/* Main Dynamic Greeting with Letter-by-Letter Stagger */}
      <div className="max-w-4xl mx-auto mb-5 sm:mb-6 px-1">
        <h1 className="text-3xl sm:text-6xl md:text-7xl font-serif font-bold text-[#2D2D2D] tracking-tight leading-[1.2] sm:leading-[1.1]">
          {titleWords.map((word, wordIndex) => (
            <span key={wordIndex} className="inline-block mr-2 sm:mr-4 last:mr-0">
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={letterIndex}
                  initial={{ opacity: 0, y: 30, rotate: -3 }}
                  animate={{ opacity: 1, y: 0, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + (wordIndex * 6 + letterIndex) * 0.035,
                    type: "spring",
                    stiffness: 130,
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
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7, ease: "easeOut" }}
        className="max-w-xl mx-auto text-sm sm:text-base md:text-lg text-[#5A5450] font-normal leading-relaxed mb-6 sm:mb-8 px-2"
      >
        <p>
          Welcome to a digital universe crafted exclusively for you. A place to look back on how we met at AJ&apos;s Academy, relive all the chaotic Bangalore days, celebrate our inside jokes, and remind you how deeply valued you are.
        </p>
      </motion.div>

      {/* Signature note from Bhavya */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.95 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl glass-card text-xs sm:text-sm text-[#2D2D2D] shadow-xs mb-10"
      >
        <span className="font-cursive text-lg sm:text-xl text-[#C56868]">Crafted with love & sarcasm,</span>
        <span className="font-semibold">— Bhavya</span>
      </motion.div>

      {/* Scroll Down Prompt */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="flex flex-col items-center gap-2 text-xs text-[#5A5450]/70 font-medium cursor-pointer touch-manipulation"
        onClick={() => {
          const cakeSection = document.getElementById("cake-section");
          cakeSection?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="tracking-widest uppercase text-[10px]">Blow Out Your Candles</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/85 border border-[#EAE6F5] flex items-center justify-center text-[#C56868] shadow-xs"
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}
