"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, KeyRound, Sparkles, ArrowRight, AlertCircle } from "lucide-react";
import { playUnlockChime, playErrorBuzz } from "@/lib/soundEffects";

interface PasswordGateProps {
  onUnlock: () => void;
}

const PLAYFUL_ERROR_MESSAGES = [
  "Nice try, but that's not the secret nickname!",
  "Are you trying to dodge your seniority?",
  "Hmm... think about what Bhavya calls you to tease you!",
  "Nope! You know you can't escape your official title 😉",
  "Almost, but not quite! Hint: It's respectful yet insulting 👵",
  "Did you forget your certified elder status already?",
];

export default function PasswordGate({ onUnlock }: PasswordGateProps) {
  const [inputVal, setInputVal] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [shakeCount, setShakeCount] = useState(0);
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = inputVal.trim().toLowerCase();

    // Valid answers: "aunty ji", "auntyji", "anty ji", "antyji"
    if (cleaned === "aunty ji" || cleaned === "auntyji" || cleaned === "anty ji" || cleaned === "antyji") {
      setErrorMessage("");
      setIsUnlocked(true);
      playUnlockChime();
      setTimeout(() => {
        onUnlock();
      }, 900);
    } else {
      playErrorBuzz();
      setShakeCount((prev) => prev + 1);
      const randomMsg = PLAYFUL_ERROR_MESSAGES[Math.floor(Math.random() * PLAYFUL_ERROR_MESSAGES.length)];
      setErrorMessage(randomMsg);
    }
  };

  return (
    <AnimatePresence>
      {!isUnlocked ? (
        <motion.div
          key="password-gate"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05, filter: "blur(8px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#FAF7F2] text-[#2D2D2D] overflow-hidden"
        >
          {/* Subtle ambient background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#EAE6F5]/60 blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#F7E7EA]/60 blur-3xl" />
          </div>

          {/* Main Card with Shake Animation */}
          <motion.div
            key={shakeCount}
            animate={
              shakeCount > 0
                ? {
                    x: [0, -12, 12, -8, 8, -4, 4, 0],
                    transition: { duration: 0.5 },
                  }
                : {}
            }
            className="relative w-full max-w-md mx-auto z-10"
          >
            <div className="glass-card rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/90">
              {/* Top Editorial Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#C56868] to-[#E5989B] text-white shadow-md shadow-[#C56868]/20 mb-4">
                  <Lock className="w-6 h-6" />
                </div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#EAE6F5]/70 text-[#C56868] text-xs font-semibold uppercase tracking-wider mb-2">
                  Top Secret Access Only
                </div>
                <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#2D2D2D] tracking-tight">
                  A Birthday Mystery
                </h1>
                <p className="text-sm text-[#5A5450] mt-2 font-medium">
                  To enter your personalized birthday experience, please verify your identity:
                </p>
              </div>

              {/* The Exact Question */}
              <div className="bg-[#FFFDF9] border border-[#EAE6F5] rounded-2xl p-4.5 mb-6 shadow-xs text-center">
                <span className="text-xs uppercase tracking-widest text-[#C56868] font-bold block mb-1">
                  Security Question
                </span>
                <p className="text-base sm:text-lg font-serif italic text-[#2D2D2D] font-semibold">
                  &ldquo;What name do I use to tease you?&rdquo;
                </p>
              </div>

              {/* Form Input */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#5A5450]/60">
                    <KeyRound className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    value={inputVal}
                    onChange={(e) => {
                      setInputVal(e.target.value);
                      if (errorMessage) setErrorMessage("");
                    }}
                    placeholder="Enter the secret..."
                    autoFocus
                    className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/90 border border-[#D8CBC7] text-[#2D2D2D] placeholder-[#5A5450]/50 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#C56868] focus:border-transparent transition-all shadow-xs"
                  />
                </div>

                {/* Error toast message */}
                <AnimatePresence>
                  {errorMessage && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      className="flex items-center gap-2 p-3 rounded-xl bg-[#FDE8EB] text-[#C56868] text-xs font-medium border border-[#F5C2C7]"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full group py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#C56868] via-[#B95757] to-[#C56868] text-white font-medium text-sm sm:text-base shadow-lg shadow-[#C56868]/25 hover:shadow-xl hover:shadow-[#C56868]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Unlock My Birthday Experience</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>

              {/* Footer hint */}
              <div className="mt-6 text-center">
                <p className="text-xs text-[#5A5450]/70 flex items-center justify-center gap-1.5 font-cursive text-sm">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>A personal digital portal created by Bhavya</span>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        /* Transition Curtain Lift */
        <motion.div
          key="curtain-reveal"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="fixed inset-0 z-50 pointer-events-none bg-gradient-to-b from-[#FAF7F2] to-[#FFFDF9] flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            exit={{ scale: 1.3, opacity: 0 }}
            className="text-center"
          >
            <Sparkles className="w-12 h-12 text-[#C56868] mx-auto animate-spin" />
            <p className="text-2xl font-serif font-bold text-[#2D2D2D] mt-4">
              Welcome, Aunty Ji! ✨
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

