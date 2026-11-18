"use client";

import React from "react";
import { Sparkles, RotateCcw } from "lucide-react";

export default function ClosingSection() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-16 sm:py-24 px-3 sm:px-4 relative max-w-4xl mx-auto text-center overflow-hidden">
      {/* Serene Glowing Core */}
      <div className="relative glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-14 border border-white/90 shadow-xl overflow-hidden">
        {/* Ambient radial lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 sm:w-80 h-64 sm:h-80 bg-gradient-to-b from-[#F7E7EA]/60 via-[#EAE6F5]/40 to-transparent rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EAE6F5] text-[#C56868] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Final Chapter</span>
        </div>

        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2D2D2D] mb-3 sm:mb-4">
          Before you leave, there&apos;s just one more thing...
        </h2>

        <div className="max-w-xl mx-auto text-xs sm:text-base text-[#5A5450] leading-relaxed space-y-3 sm:space-y-4 mb-6 sm:mb-8 px-2">
          <p>
            Friendships like this don&apos;t come around often. Through the laughter, the endless teasing, the long distances, and the quiet moments when I needed a friend most—you have always been there.
          </p>
          <p className="font-serif italic text-[#2D2D2D] text-sm sm:text-lg">
            Never change who you are. The world needs your kindness, your humility, and even your undisputed seniority.
          </p>
        </div>

        {/* Scroll back to top button */}
        <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-[#EAE6F5]">
          <button
            onClick={handleScrollToTop}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white border border-[#EAE6F5] text-xs sm:text-sm font-medium text-[#5A5450] hover:text-[#C56868] hover:bg-[#FAF7F2] active:scale-[0.98] transition-all shadow-xs cursor-pointer touch-manipulation min-h-[44px]"
          >
            <RotateCcw className="w-4 h-4 text-[#C56868]" />
            <span>Replay the Birthday Experience From Top</span>
          </button>
        </div>

        {/* Footer info */}
        <div className="mt-6 sm:mt-8 text-[10px] sm:text-[11px] text-[#5A5450]/60">
          Happy Birthday Khushi &bull; Dedicated with deepest appreciation &bull; November 2026
        </div>
      </div>
    </section>
  );
}
