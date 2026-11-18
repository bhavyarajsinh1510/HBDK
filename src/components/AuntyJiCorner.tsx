"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, Stamp, Check, Smile, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";
import { playFanfareSound } from "@/lib/soundEffects";

export default function AuntyJiCorner() {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    if (isAccepted) return;
    setIsAccepted(true);
    playFanfareSound();

    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    confetti({
      particleCount: isMobile ? 80 : 120,
      spread: 65,
      origin: { y: 0.65 },
      colors: ["#D4AF37", "#C56868", "#8B4513", "#E6E6FA"],
    });
  };

  return (
    <section className="py-14 sm:py-20 px-3 sm:px-4 relative max-w-4xl mx-auto overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE6F5] text-[#C56868] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
          <Smile className="w-3.5 h-3.5" />
          <span>Inside Joke Department</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2D2D2D]">
          The Aunty Ji Corner
        </h2>
        <p className="text-xs sm:text-base text-[#5A5450] mt-2 sm:mt-3 max-w-md sm:max-w-xl mx-auto px-2">
          Every great friendship has that one defining roast. For us, it&apos;s your undeniable seniority and the honorary title you can never outrun.
        </p>
      </div>

      {/* The Official Certificate Card */}
      <div className="relative mx-auto max-w-2xl bg-[#FFFDF9] rounded-2xl sm:rounded-3xl p-5 sm:p-10 shadow-xl border-3 sm:border-4 border-[#C5A059]/40 certificate-border paper-texture">
        {/* Corner Ornaments */}
        <div className="absolute top-2.5 left-2.5 text-[#C5A059] opacity-40 font-serif text-lg select-none">
          ✦
        </div>
        <div className="absolute top-2.5 right-2.5 text-[#C5A059] opacity-40 font-serif text-lg select-none">
          ✦
        </div>
        <div className="absolute bottom-2.5 left-2.5 text-[#C5A059] opacity-40 font-serif text-lg select-none">
          ✦
        </div>
        <div className="absolute bottom-2.5 right-2.5 text-[#C5A059] opacity-40 font-serif text-lg select-none">
          ✦
        </div>

        {/* Certificate Content */}
        <div className="text-center">
          {/* Header Seal */}
          <div className="inline-flex items-center justify-center w-10 sm:w-12 h-10 sm:h-12 rounded-full border-2 border-[#C5A059] text-[#C5A059] mb-2 sm:mb-3">
            <Award className="w-5 sm:w-6 h-5 sm:h-6" />
          </div>

          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#8B6508] px-2 leading-tight">
            The Supreme Ministry of Nicknames & AJ&apos;s Academy Alumni
          </p>

          <h3 className="text-lg sm:text-2xl font-serif font-bold text-[#2D2D2D] mt-2 tracking-wide uppercase">
            Official Certificate of Seniority
          </h3>

          <div className="w-20 sm:w-24 h-0.5 bg-[#C5A059]/60 mx-auto my-2.5 sm:my-3" />

          <p className="text-[11px] sm:text-sm text-[#5A5450] italic">
            This prestigious document certifies that
          </p>

          {/* Name in large calligraphic serif */}
          <div className="my-2 sm:my-3 py-1">
            <span className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8B4513] via-[#C56868] to-[#8B4513] tracking-wide">
              Khushi
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#5A5450] max-w-lg mx-auto leading-relaxed px-2">
            has fulfilled all requirements to be conferred the honorary lifetime designation of
          </p>

          <div className="inline-block my-2.5 sm:my-3 px-4 sm:px-5 py-1.5 sm:py-2 rounded-xl bg-[#F7E7EA] border border-[#F5C2C7] text-[#C56868] font-serif font-bold text-base sm:text-xl tracking-wide shadow-xs">
            &ldquo;Aunty Ji of the Year&rdquo;
          </div>

          {/* Official Citations */}
          <div className="my-4 sm:my-6 text-left max-w-md mx-auto space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-[#5A5450] bg-white/80 p-3.5 sm:p-4 rounded-xl border border-[#EAE6F5]">
            <p className="font-semibold text-[#2D2D2D] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
              <span>Official Grounds for Conferral:</span>
            </p>
            <ul className="list-disc pl-4.5 space-y-1">
              <li>Exhibiting unmatched patience while being relentlessly teased by Bhavya.</li>
              <li>Dispensing unsolicited elder wisdom with genuine concern.</li>
              <li>Consistently keeping early bedtime habits reminiscent of a pensioner.</li>
              <li>Being the undisputed, graceful senior anchor in our friendship.</li>
            </ul>
          </div>

          {/* Signatures & Seal Area */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 pt-3 sm:pt-4 border-t border-[#C5A059]/30 mt-5 sm:mt-6 text-xs text-[#5A5450]">
            <div className="text-center sm:text-left order-1">
              <p className="font-cursive text-2xl text-[#C56868] leading-none mb-1">
                Bhavyarajsinh
              </p>
              <div className="w-28 sm:w-32 h-[1px] bg-[#5A5450]/40 mx-auto sm:mx-0" />
              <p className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-[#8B6508] mt-1">
                Supreme Teaser & Chief Roaster
              </p>
            </div>

            {/* Official Stamp */}
            <div className="order-2 my-1 sm:my-0">
              {isAccepted ? (
                <motion.div
                  initial={{ scale: 1.8, rotate: -20, opacity: 0 }}
                  animate={{ scale: 1, rotate: -6, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 320, damping: 16 }}
                  className="px-3.5 py-1.5 border-2 border-red-600 rounded-lg text-red-600 font-bold text-[11px] sm:text-xs uppercase tracking-widest bg-red-50/90 shadow-md transform -rotate-6"
                >
                  ✓ VERIFIED AUNTY JI
                </motion.div>
              ) : (
                <div className="px-3 py-1 border border-dashed border-[#C5A059] rounded-lg text-[#8B6508] text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold">
                  Awaiting Acceptance
                </div>
              )}
            </div>

            <div className="text-center sm:text-right order-3">
              <p className="font-serif font-bold text-[#2D2D2D] text-xs sm:text-sm">
                Official Birthday Edition
              </p>
              <div className="w-28 sm:w-32 h-[1px] bg-[#5A5450]/40 mx-auto sm:ml-auto" />
              <p className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-[#8B6508] mt-1">
                AJ&apos;s Academy Chapter
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Acceptance Action */}
      <div className="mt-6 sm:mt-8 text-center px-4">
        {!isAccepted ? (
          <button
            onClick={handleAccept}
            className="w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#D4AF37] via-[#C5A059] to-[#D4AF37] text-white font-medium text-sm sm:text-base shadow-lg shadow-[#D4AF37]/30 hover:shadow-xl active:scale-[0.98] transition-all inline-flex items-center justify-center gap-2 cursor-pointer touch-manipulation min-h-[48px]"
          >
            <Stamp className="w-4 sm:w-5 h-4 sm:h-5 shrink-0" />
            <span>Accept Your Aunty Ji Status 🎖️</span>
          </button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3.5 sm:p-4 rounded-2xl bg-[#FFFDF9] border border-[#D4AF37]/40 max-w-sm sm:max-w-md mx-auto shadow-xs text-center"
          >
            <div className="flex items-center justify-center gap-1.5 text-[#C56868] font-bold text-xs sm:text-sm">
              <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
              <span>Status Officially Accepted & Sealed!</span>
            </div>
            <p className="text-[11px] sm:text-xs text-[#5A5450] mt-1 italic">
              Clause 4.2: You are now legally entitled to 1 complimentary elder sigh and unlimited herbal tea. No refunds!
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
