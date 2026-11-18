"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Wind, RotateCcw, Heart, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";
import { playBlowCandlesSound } from "@/lib/soundEffects";

export default function InteractiveCake() {
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [showWishMessage, setShowWishMessage] = useState(false);

  const handleBlowCandles = () => {
    if (candlesBlown) return;

    playBlowCandlesSound();
    setCandlesBlown(true);

    // Responsive celebration confetti shower
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    const count = isMobile ? 120 : 180;
    const defaults = {
      origin: { y: 0.65 },
      colors: ["#C56868", "#D4AF37", "#E6E6FA", "#F7E7EA", "#E5989B", "#FFD700"],
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: isMobile ? 40 : 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 90,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 100,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.1,
    });

    setTimeout(() => {
      setShowWishMessage(true);
    }, 400);
  };

  const handleRelight = () => {
    setCandlesBlown(false);
    setShowWishMessage(false);
  };

  return (
    <section id="cake-section" className="py-14 sm:py-20 px-3 sm:px-4 relative max-w-4xl mx-auto text-center overflow-hidden">
      <div className="mb-8 sm:mb-10">
        <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-[#C56868] bg-[#F7E7EA] px-3.5 py-1.5 rounded-full inline-block mb-2.5">
          Tradition Meets Micro-Tech
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2D2D2D]">
          The Interactive Birthday Cake
        </h2>
        <p className="text-xs sm:text-base text-[#5A5450] mt-2 sm:mt-3 max-w-md sm:max-w-lg mx-auto px-2">
          Close your eyes, think of the wildest, most ambitious wish for your upcoming year, and tap to blow out the candles!
        </p>
      </div>

      {/* The Cake Stage Container */}
      <div className="relative py-4 sm:py-8 flex flex-col items-center justify-center">
        {/* Ambient candle glow backdrop */}
        <div
          className={`absolute w-60 sm:w-72 h-60 sm:h-72 rounded-full transition-all duration-1000 pointer-events-none -top-4 ${
            candlesBlown
              ? "bg-transparent opacity-0"
              : "bg-amber-200/40 blur-3xl opacity-100"
          }`}
        />

        {/* Cake Structure - Scaled responsively for phones */}
        <div className="relative flex flex-col items-center select-none z-10 w-full max-w-xs sm:max-w-md">
          {/* Row of 3 Candles on top */}
          <div className="flex justify-center items-end gap-5 sm:gap-8 mb-[-3px] z-20">
            {[0, 1, 2].map((idx) => (
              <div key={idx} className="relative flex flex-col items-center">
                {/* Flame / Smoke */}
                {!candlesBlown ? (
                  <div className="relative mb-1 flex items-center justify-center">
                    {/* Flame Core */}
                    <div className="w-3 sm:w-3.5 h-5 sm:h-6 rounded-full bg-gradient-to-t from-orange-500 via-amber-300 to-yellow-100 flame-flicker shadow-[0_0_12px_#f59e0b]" />
                    {/* Inner spark */}
                    <div className="absolute bottom-1 w-1 sm:w-1.5 h-1.5 sm:h-2 bg-blue-300 rounded-full opacity-80" />
                  </div>
                ) : (
                  /* Smoke puff when blown */
                  <div className="relative h-5 sm:h-6 flex items-center justify-center">
                    <span className="smoke-puff text-[11px] sm:text-xs text-gray-400 font-mono select-none">
                      ~ ~
                    </span>
                  </div>
                )}

                {/* Candle Wick */}
                <div className="w-0.5 h-2 bg-neutral-800" />

                {/* Candle Stick */}
                <div
                  className={`w-3 sm:w-4 h-10 sm:h-12 rounded-t-sm shadow-xs ${
                    idx === 1
                      ? "bg-gradient-to-b from-[#E6E6FA] to-[#C56868] h-12 sm:h-14"
                      : "bg-gradient-to-b from-[#F5E6E8] to-[#D4AF37]"
                  }`}
                  style={{
                    backgroundImage:
                      idx % 2 === 0
                        ? "repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(255,255,255,0.7) 3px, rgba(255,255,255,0.7) 6px)"
                        : "none",
                  }}
                />
              </div>
            ))}
          </div>

          {/* Tier 1 (Top Tier - Ganache) */}
          <div className="relative w-36 sm:w-48 h-13 sm:h-16 rounded-t-xl sm:rounded-t-2xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F7E7EA] border border-[#EAE6F5] shadow-md flex items-center justify-center overflow-hidden">
            {/* Frosting Drips */}
            <div className="absolute top-0 inset-x-0 flex justify-between px-2">
              <span className="w-3 sm:w-4 h-2.5 sm:h-3 bg-white rounded-b-full shadow-xs" />
              <span className="w-4 sm:w-5 h-3 sm:h-4 bg-white rounded-b-full shadow-xs" />
              <span className="w-3 sm:w-3.5 h-2 sm:h-2.5 bg-white rounded-b-full shadow-xs" />
              <span className="w-3.5 sm:w-4 h-3 sm:h-4 bg-white rounded-b-full shadow-xs" />
              <span className="w-4 sm:w-5 h-2.5 sm:h-3 bg-white rounded-b-full shadow-xs" />
            </div>
            <div className="w-full h-1.5 sm:h-2 bg-[#C56868]/20 absolute bottom-1" />
            <span className="text-[11px] sm:text-xs font-serif italic text-[#C56868] font-semibold">
              Khushi&apos;s Edition
            </span>
          </div>

          {/* Tier 2 (Middle Tier - Lavender Cream) */}
          <div className="relative w-52 sm:w-68 h-16 sm:h-20 rounded-t-xl sm:rounded-t-2xl bg-gradient-to-b from-[#F4F1FA] via-[#EAE6F5] to-[#DFD9EE] border border-[#D5CDE6] shadow-md flex items-center justify-center -mt-1 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-[#D4AF37]/40" />
            <div className="flex gap-3 sm:gap-4 opacity-50">
              <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#C56868]" />
              <Heart className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#C56868]" />
              <Sparkles className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#C56868]" />
              <Heart className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-[#C56868]" />
            </div>
            <div className="w-full h-2 bg-white/40 absolute bottom-1" />
          </div>

          {/* Tier 3 (Base Tier - Rose Gold & Vanilla Velvet) */}
          <div className="relative w-68 sm:w-88 h-20 sm:h-24 rounded-t-xl sm:rounded-t-2xl bg-gradient-to-b from-[#FDE8EB] via-[#F7E7EA] to-[#E5989B]/40 border border-[#F5C2C7] shadow-lg flex items-center justify-center -mt-1 px-2">
            <div className="absolute top-0 inset-x-0 h-1.5 sm:h-2 bg-[#C56868]/30" />
            {/* Gold Pearl Bead Trim */}
            <div className="flex justify-around w-full px-2 sm:px-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] shadow-xs"
                />
              ))}
            </div>
            <div className="absolute bottom-1.5 sm:bottom-2 text-[10px] sm:text-[11px] uppercase tracking-widest text-[#5A5450] font-semibold truncate max-w-[90%]">
              Sweet &bull; Sarcastic &bull; Irreplaceable
            </div>
          </div>

          {/* Cake Stand / Plate */}
          <div className="w-76 sm:w-96 max-w-[94vw] h-3.5 sm:h-4 bg-gradient-to-r from-[#D8CBC7] via-[#FFFDF9] to-[#D8CBC7] rounded-full shadow-lg border border-white -mt-1" />
          <div className="w-32 sm:w-44 h-4 sm:h-5 bg-gradient-to-b from-[#C8BBB7] to-[#B8ABA7] rounded-b-lg sm:rounded-b-xl shadow-md" />
        </div>

        {/* Action Controls */}
        <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 z-20 w-full px-4">
          {!candlesBlown ? (
            <button
              onClick={handleBlowCandles}
              className="w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#C56868] via-[#B95757] to-[#C56868] text-white font-medium text-sm sm:text-base shadow-lg shadow-[#C56868]/25 hover:shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer touch-manipulation min-h-[48px]"
            >
              <Wind className="w-4 sm:w-5 h-4 sm:h-5 shrink-0" />
              <span>Make a Wish & Blow Out Candles</span>
            </button>
          ) : (
            <button
              onClick={handleRelight}
              className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-2xl bg-white border border-[#EAE6F5] text-[#2D2D2D] font-medium text-xs sm:text-sm shadow-xs hover:bg-[#FAF7F2] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer touch-manipulation min-h-[44px]"
            >
              <RotateCcw className="w-4 h-4 text-[#C56868] shrink-0" />
              <span>Relight Candles (Make Another Wish!)</span>
            </button>
          )}
        </div>

        {/* Transition Wish Message */}
        <AnimatePresence>
          {showWishMessage && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12 }}
              className="mt-5 max-w-sm sm:max-w-lg mx-auto p-4 sm:p-5 rounded-2xl glass-card border border-[#C56868]/20 shadow-md text-center mx-4"
            >
              <div className="inline-flex items-center justify-center w-8 sm:w-9 h-8 sm:h-9 rounded-full bg-[#F7E7EA] text-[#C56868] mb-1.5">
                <CheckCircle2 className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <h3 className="text-base sm:text-lg font-serif font-bold text-[#2D2D2D]">
                Wish granted!
              </h3>
              <p className="text-xs sm:text-sm text-[#5A5450] mt-1 font-medium leading-relaxed">
                May this year bring you endless happiness, peace, success, and every good thing you dream of.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
