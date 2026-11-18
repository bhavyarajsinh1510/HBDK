"use client";

import React from "react";
import { motion } from "framer-motion";
import { MailOpen, Sparkles } from "lucide-react";

export default function BirthdayLetter() {
  return (
    <section className="py-16 sm:py-24 px-3 sm:px-4 relative max-w-4xl mx-auto overflow-hidden">
      {/* Header Badge */}
      <div className="text-center mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F7E7EA] text-[#C56868] text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-2.5">
          <MailOpen className="w-3.5 h-3.5" />
          <span>From Your Best Friend</span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2D2D2D]">
          The Birthday Letter
        </h2>
        <p className="text-xs sm:text-sm text-[#5A5450] mt-1.5 font-serif italic">
          A physical note, rendered in code, carrying memories from day one.
        </p>
      </div>

      {/* The Stationery Paper Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto bg-[#FFFDF9] rounded-2xl sm:rounded-3xl p-5 sm:p-14 shadow-xl border border-[#EAE6F5] paper-texture overflow-hidden"
      >
        {/* Decorative Top Stamp / Wax Seal Accent */}
        <div className="flex items-center justify-between border-b border-[#EAE6F5] pb-4 sm:pb-6 mb-5 sm:mb-8">
          <div>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-widest text-[#C56868] font-bold">
              Private Correspondence
            </p>
            <p className="text-[11px] sm:text-xs text-[#5A5450]">
              To: Khushi &bull; From: Bhavya
            </p>
          </div>

          {/* Classic Wax Seal Accent */}
          <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-tr from-[#C56868] via-[#D43745] to-[#B95757] flex items-center justify-center text-white shadow-md shadow-[#C56868]/30 border-2 border-white/60 shrink-0">
            <Sparkles className="w-4 sm:w-5 h-4 sm:h-5 text-amber-200" />
          </div>
        </div>

        {/* Salutation */}
        <h3 className="font-serif text-xl sm:text-3xl font-bold text-[#2D2D2D] mb-4 sm:mb-6">
          Dear Khushi,
        </h3>

        {/* Body Paragraphs */}
        <div className="space-y-4 sm:space-y-6 text-xs sm:text-base md:text-lg text-[#3D3A37] leading-relaxed font-serif">
          <p className="first-letter:float-left first-letter:text-3xl sm:first-letter:text-5xl first-letter:font-bold first-letter:mr-2.5 sm:first-letter:mr-3 first-letter:text-[#C56868] first-letter:font-serif">
            Looking back at how we met at AJ&apos;s Academy, I never fully anticipated how meaningful our friendship would become. From endless laughter and inside jokes to sharing life&apos;s moments, having you as my best friend has been truly special.
          </p>

          <p>
            I want to thank you—especially for those initial days when I moved to Bangalore for college. Adjusting to a new city was not easy, but your regular check-ins and conversations made the loneliness disappear. That effort on your own meant more to me than words can easily express.
          </p>

          <p>
            Behind all the teasing and the &ldquo;Aunty Ji&rdquo; jokes, I want you to know how deeply I admire your kindness, your humility, your maturity, and your incredible understanding nature. You are someone who genuinely cares about people, and the world is a better place with you in it.
          </p>

          <p className="font-medium text-[#2D2D2D]">
            Wishing you a year ahead filled with boundless happiness, success, peace, and all the wonderful experiences you deserve. Thank you for simply being you, and for being such an extraordinary best friend.
          </p>
        </div>

        {/* Valediction */}
        <div className="mt-7 sm:mt-10 pt-4 sm:pt-6 border-t border-[#EAE6F5] flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
          <div>
            <p className="text-lg sm:text-2xl font-serif font-bold text-[#C56868]">
              Happy Birthday!
            </p>
            <p className="text-xs sm:text-sm text-[#5A5450] mt-0.5 sm:mt-1">
              May this new chapter be your brightest yet.
            </p>
          </div>

          <div className="sm:text-right">
            <p className="text-xs sm:text-sm text-[#5A5450] italic">Warmly,</p>
            <p className="font-cursive text-2xl sm:text-4xl text-[#2D2D2D] mt-0.5 sm:mt-1">
              Bhavya
            </p>
          </div>
        </div>

        {/* Decorative corner blossom watermark */}
        <div className="absolute -bottom-8 -right-8 w-32 sm:w-40 h-32 sm:h-40 bg-[#F7E7EA]/40 rounded-full blur-2xl pointer-events-none" />
      </motion.div>
    </section>
  );
}
