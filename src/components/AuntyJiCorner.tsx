"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Stamp, Check, Sparkles, Smile, ShieldCheck, HeartHandshake } from "lucide-react";
import confetti from "canvas-confetti";
import { playFanfareSound } from "@/lib/soundEffects";

export default function AuntyJiCorner() {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    if (isAccepted) return;
    setIsAccepted(true);
    playFanfareSound();

    // Fanfare confetti burst
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#D4AF37", "#C56868", "#8B4513", "#E6E6FA"],
    });
  };

  return (
    <section className="py-20 px-4 relative max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE6F5] text-[#C56868] text-xs font-bold uppercase tracking-wider mb-3">
          <Smile className="w-4 h-4" />
          <span>Inside Joke Department</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#2D2D2D]">
          The Aunty Ji Corner
        </h2>
        <p className="text-sm sm:text-base text-[#5A5450] mt-3 max-w-xl mx-auto">
          Every great friendship has that one defining roast. For us, it&apos;s your undeniable seniority and the honorary title you can never outrun.
        </p>
      </div>

      {/* The Official Certificate Card */}
      <div className="relative mx-auto max-w-2xl bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 shadow-2xl border-4 border-[#C5A059]/40 certificate-border paper-texture">
        {/* Corner Ornaments */}
        <div className="absolute top-3 left-3 text-[#C5A059] opacity-40 font-serif text-xl select-none">
          ✦
        </div>
        <div className="absolute top-3 right-3 text-[#C5A059] opacity-40 font-serif text-xl select-none">
          ✦
        </div>
        <div className="absolute bottom-3 left-3 text-[#C5A059] opacity-40 font-serif text-xl select-none">
          ✦
        </div>
        <div className="absolute bottom-3 right-3 text-[#C5A059] opacity-40 font-serif text-xl select-none">
          ✦
        </div>

        {/* Certificate Content */}
        <div className="text-center">
          {/* Header Seal */}
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#C5A059] text-[#C5A059] mb-3">
            <Award className="w-6 h-6" />
          </div>

          <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#8B6508]">
            The Supreme Ministry of Nicknames & AJ&apos;s Academy Alumni
          </p>

          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2D2D2D] mt-2 tracking-wide uppercase">
            Official Certificate of Seniority
          </h3>

          <div className="w-24 h-0.5 bg-[#C5A059]/60 mx-auto my-3" />

          <p className="text-xs sm:text-sm text-[#5A5450] italic">
            This prestigious document certifies that
          </p>

          {/* Name in large calligraphic serif */}
          <div className="my-3 py-1">
            <span className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B4513] via-[#C56868] to-[#8B4513] tracking-wide">
              Khushi
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#5A5450] max-w-lg mx-auto leading-relaxed">
            has fulfilled all requirements to be conferred the honorary lifetime designation of
          </p>

          <div className="inline-block my-3 px-5 py-2 rounded-xl bg-[#F7E7EA] border border-[#F5C2C7] text-[#C56868] font-serif font-bold text-lg sm:text-xl tracking-wide shadow-xs">
            &ldquo;Aunty Ji of the Year&rdquo;
          </div>

          {/* Official Citations */}
          <div className="my-6 text-left max-w-md mx-auto space-y-2 text-xs sm:text-sm text-[#5A5450] bg-white/70 p-4 rounded-xl border border-[#EAE6F5]">
            <p className="font-semibold text-[#2D2D2D] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              Official Grounds for Conferral:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Exhibiting unmatched patience while being relentlessly teased by Bhavya.</li>
              <li>Dispensing unsolicited elder wisdom with genuine maternal concern.</li>
              <li>Consistently keeping early bedtime habits reminiscent of a pensioner.</li>
              <li>Being the undisputed, graceful senior anchor in our friendship.</li>
            </ul>
          </div>

          {/* Signatures & Seal Area */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 border-t border-[#C5A059]/30 mt-6 text-xs text-[#5A5450]">
            <div className="text-center sm:text-left">
              <p className="font-cursive text-2xl text-[#C56868] leading-none mb-1">
                Bhavyarajsinh
              </p>
              <div className="w-32 h-[1px] bg-[#5A5450]/40 mx-auto sm:mx-0" />
              <p className="text-[10px] uppercase font-bold tracking-wider text-[#8B6508] mt-1">
                Supreme Teaser & Chief Roaster
              </p>
            </div>

            {/* Official Stamp */}
            <div className="relative">
              {isAccepted ? (
                <motion.div
                  initial={{ scale: 2, rotate: -25, opacity: 0 }}
                  animate={{ scale: 1, rotate: -8, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="px-4 py-2 border-2 border-red-600 rounded-lg text-red-600 font-bold text-xs uppercase tracking-widest bg-red-50/80 shadow-md transform -rotate-6"
                >
                  ✓ VERIFIED AUNTY JI
                </motion.div>
              ) : (
                <div className="px-3 py-1.5 border border-dashed border-[#C5A059] rounded-lg text-[#8B6508] text-[10px] uppercase tracking-wider font-semibold">
                  Awaiting Acceptance
                </div>
              )}
            </div>

            <div className="text-center sm:text-right">
              <p className="font-serif font-bold text-[#2D2D2D] text-sm">
                Official Birthday Edition
              </p>
              <div className="w-32 h-[1px] bg-[#5A5450]/40 mx-auto sm:ml-auto" />
              <p className="text-[10px] uppercase font-bold tracking-wider text-[#8B6508] mt-1">
                AJ&apos;s Academy Chapter
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Acceptance Action */}
      <div className="mt-8 text-center">
        {!isAccepted ? (
          <button
            onClick={handleAccept}
            className="group px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#D4AF37] text-white font-medium text-sm sm:text-base shadow-lg shadow-[#D4AF37]/30 hover:shadow-xl hover:shadow-[#D4AF37]/45 hover:-translate-y-0.5 active:translate-y-0 transition-all inline-flex items-center gap-2.5 cursor-pointer"
          >
            <Stamp className="w-5 h-5 transition-transform group-hover:rotate-12" />
            <span>Accept Your Aunty Ji Status 🎖️</span>
          </button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-2xl bg-[#FFFDF9] border border-[#D4AF37]/40 max-w-md mx-auto shadow-sm"
          >
            <div className="flex items-center justify-center gap-2 text-[#C56868] font-bold text-sm">
              <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
              <span>Status Officially Accepted & Sealed!</span>
            </div>
            <p className="text-xs text-[#5A5450] mt-1 italic">
              Clause 4.2: You are now legally entitled to 1 complimentary elder sigh and 3 cups of herbal tea per day. No refunds!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

