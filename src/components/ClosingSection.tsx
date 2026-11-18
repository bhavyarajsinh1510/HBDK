"use client";

import React from "react";
import { Sparkles, RotateCcw } from "lucide-react";

export default function ClosingSection() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-24 px-4 relative max-w-4xl mx-auto text-center">
      {/* Serene Glowing Core */}
      <div className="relative glass-card rounded-3xl p-8 sm:p-14 border border-white/90 shadow-xl overflow-hidden">
        {/* Ambient radial lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-gradient-to-b from-[#F7E7EA]/60 via-[#EAE6F5]/40 to-transparent rounded-full blur-2xl pointer-events-none -z-10" />

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE6F5] text-[#C56868] text-xs font-bold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>Final Chapter</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2D2D2D] mb-4">
          Before you leave, there&apos;s just one more thing...
        </h2>

        <div className="max-w-xl mx-auto text-sm sm:text-base text-[#5A5450] leading-relaxed space-y-4 mb-8">
          <p>
            Friendships like this don&apos;t come around often. Through the laughter, the endless teasing, the long distances, and the quiet moments when I needed a friend most—you have always been there.
          </p>
          <p className="font-serif italic text-[#2D2D2D] text-base sm:text-lg">
            Never change who you are. The world needs your kindness, your humility, and even your undisputed seniority.
          </p>
        </div>

        {/* Scroll back to top button */}
        <div className="mt-8 pt-6 border-t border-[#EAE6F5]">
          <button
            onClick={handleScrollToTop}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-white border border-[#EAE6F5] text-xs sm:text-sm font-medium text-[#5A5450] hover:text-[#C56868] hover:bg-[#FAF7F2] transition-all shadow-xs cursor-pointer hover:scale-105 active:scale-95"
          >
            <RotateCcw className="w-4 h-4 text-[#C56868]" />
            <span>Replay the Birthday Experience From Top</span>
          </button>
        </div>

        {/* Footer info */}
        <div className="mt-8 text-[11px] text-[#5A5450]/60">
          Happy Birthday Khushi &bull; Dedicated with deepest appreciation &bull; November 2026
        </div>
      </div>
    </section>
  );
}
