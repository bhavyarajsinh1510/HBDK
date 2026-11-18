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

    // High celebration confetti shower
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
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
      startVelocity: 55,
    });
    fire(0.2, {
      spread: 60,
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
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
    <section id="cake-section" className="py-20 px-4 relative max-w-4xl mx-auto text-center">
      <div className="mb-10">
        <span className="text-xs uppercase font-bold tracking-widest text-[#C56868] bg-[#F7E7EA] px-3.5 py-1.5 rounded-full inline-block mb-3">
          Tradition Meets Micro-Tech
        </span>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#2D2D2D]">
          The Interactive Birthday Cake
        </h2>
        <p className="text-sm sm:text-base text-[#5A5450] mt-3 max-w-lg mx-auto">
          Close your eyes, think of the wildest, most ambitious wish for your upcoming year, and blow out the candles!
        </p>
      </div>

      {/* The Cake Stage Container */}
      <div className="relative py-8 flex flex-col items-center justify-center">
        {/* Ambient candle glow backdrop */}
        <div
          className={`absolute w-72 h-72 rounded-full transition-all duration-1000 pointer-events-none -top-4 ${
            candlesBlown
              ? "bg-transparent opacity-0"
              : "bg-amber-200/40 blur-3xl opacity-100"
          }`}
        />

        {/* Cake Structure */}
        <div className="relative flex flex-col items-center select-none z-10">
          {/* Row of 3 Candles on top */}
          <div className="flex justify-center items-end gap-6 sm:gap-8 mb-[-4px] z-20">
            {[0, 1, 2].map((idx) => (
              <div key={idx} className="relative flex flex-col items-center">
                {/* Flame / Smoke */}
                {!candlesBlown ? (
                  <div className="relative mb-1 flex items-center justify-center">
                    {/* Flame Core */}
                    <div className="w-3.5 h-6 rounded-full bg-gradient-to-t from-orange-500 via-amber-300 to-yellow-100 flame-flicker shadow-[0_0_15px_#f59e0b]" />
                    {/* Inner spark */}
                    <div className="absolute bottom-1 w-1.5 h-2 bg-blue-300 rounded-full opacity-80" />
                  </div>
                ) : (
                  /* Smoke puff when blown */
                  <div className="relative h-6 flex items-center justify-center">
                    <span className="smoke-puff text-xs text-gray-400 font-mono select-none">
                      ~ ~
                    </span>
                  </div>
                )}

                {/* Candle Wick */}
                <div className="w-0.5 h-2 bg-neutral-800" />

                {/* Candle Stick */}
                <div
                  className={`w-3.5 sm:w-4 h-12 rounded-t-sm shadow-xs ${
                    idx === 1
                      ? "bg-gradient-to-b from-[#E6E6FA] to-[#C56868] h-14"
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

          {/* Tier 1 (Top Tier - Ganache & Strawberries) */}
          <div className="relative w-44 sm:w-52 h-16 rounded-t-2xl bg-gradient-to-b from-[#FFFDF9] via-[#FAF7F2] to-[#F7E7EA] border border-[#EAE6F5] shadow-md flex items-center justify-center overflow-hidden">
            {/* Frosting Drips */}
            <div className="absolute top-0 inset-x-0 flex justify-between px-2">
              <span className="w-4 h-3 bg-white rounded-b-full shadow-xs" />
              <span className="w-5 h-4 bg-white rounded-b-full shadow-xs" />
              <span className="w-3.5 h-2.5 bg-white rounded-b-full shadow-xs" />
              <span className="w-4 h-4 bg-white rounded-b-full shadow-xs" />
              <span className="w-5 h-3 bg-white rounded-b-full shadow-xs" />
            </div>
            {/* Tier Accent Ribbon */}
            <div className="w-full h-2 bg-[#C56868]/20 absolute bottom-1" />
            <span className="text-xs font-serif italic text-[#C56868] font-semibold">
              Khushi&apos;s Edition
            </span>
          </div>

          {/* Tier 2 (Middle Tier - Lavender Cream) */}
          <div className="relative w-64 sm:w-72 h-20 rounded-t-2xl bg-gradient-to-b from-[#F4F1FA] via-[#EAE6F5] to-[#DFD9EE] border border-[#D5CDE6] shadow-md flex items-center justify-center -mt-1 overflow-hidden">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-[#D4AF37]/40" />
            <div className="flex gap-4 opacity-50">
              <Sparkles className="w-3.5 h-3.5 text-[#C56868]" />
              <Heart className="w-3.5 h-3.5 text-[#C56868]" />
              <Sparkles className="w-3.5 h-3.5 text-[#C56868]" />
              <Heart className="w-3.5 h-3.5 text-[#C56868]" />
            </div>
            <div className="w-full h-2.5 bg-white/40 absolute bottom-1" />
          </div>

          {/* Tier 3 (Base Tier - Rose Gold & Vanilla Velvet) */}
          <div className="relative w-80 sm:w-96 h-24 rounded-t-2xl bg-gradient-to-b from-[#FDE8EB] via-[#F7E7EA] to-[#E5989B]/40 border border-[#F5C2C7] shadow-lg flex items-center justify-center -mt-1">
            <div className="absolute top-0 inset-x-0 h-2 bg-[#C56868]/30" />
            {/* Gold Pearl Bead Trim */}
            <div className="flex justify-around w-full px-4">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] shadow-xs"
                />
              ))}
            </div>
            <div className="absolute bottom-2 text-[11px] uppercase tracking-widest text-[#5A5450] font-semibold">
              Sweet &bull; Sarcastic &bull; Irreplaceable
            </div>
          </div>

          {/* Cake Stand / Plate */}
          <div className="w-96 sm:w-[420px] h-4 bg-gradient-to-r from-[#D8CBC7] via-[#FFFDF9] to-[#D8CBC7] rounded-full shadow-xl border border-white -mt-1" />
          <div className="w-40 sm:w-48 h-5 bg-gradient-to-b from-[#C8BBB7] to-[#B8ABA7] rounded-b-xl shadow-md" />
        </div>

        {/* Action Controls */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 z-20">
          {!candlesBlown ? (
            <button
              onClick={handleBlowCandles}
              className="group px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#C56868] via-[#B95757] to-[#C56868] text-white font-medium text-sm sm:text-base shadow-lg shadow-[#C56868]/25 hover:shadow-xl hover:shadow-[#C56868]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2.5 cursor-pointer"
            >
              <Wind className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Make a Wish & Blow Out Candles</span>
            </button>
          ) : (
            <button
              onClick={handleRelight}
              className="px-6 py-3 rounded-2xl bg-white border border-[#EAE6F5] text-[#2D2D2D] font-medium text-sm shadow-xs hover:bg-[#FAF7F2] transition-colors flex items-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4 text-[#C56868]" />
              <span>Relight Candles (Make Another Wish!)</span>
            </button>
          )}
        </div>

        {/* Transition Wish Message */}
        <AnimatePresence>
          {showWishMessage && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15 }}
              className="mt-6 max-w-lg mx-auto p-5 rounded-2xl glass-card border border-[#C56868]/20 shadow-md text-center"
            >
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-[#F7E7EA] text-[#C56868] mb-2">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#2D2D2D]">
                Wish granted!
              </h3>
              <p className="text-sm text-[#5A5450] mt-1 font-medium">
                May this year bring you endless happiness, peace, success, and every good thing you dream of.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

