"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Feather, Sparkles, Compass } from "lucide-react";

export default function AdmireSection() {
  const virtues = [
    {
      title: "Genuine Kindness",
      subtitle: "Warmth without conditions",
      icon: Heart,
      accent: "#C56868",
      bgLight: "#F7E7EA",
      description:
        "Your kindness isn't an act or something you put on display for others. It is an instinct. In the way you listen attentively, care about how someone is truly doing, and go out of your way to check in on people, you bring a quiet, healing warmth to everyone around you.",
    },
    {
      title: "Grounded Humility",
      subtitle: "Grace in every step",
      icon: Feather,
      accent: "#B8860B",
      bgLight: "#FFF3D6",
      description:
        "No matter what you achieve or how wise you are, you stay deeply grounded. You never feel the need to boast or seek validation; you let your character speak for itself. That effortless humility is rare, refreshing, and deeply admirable.",
    },
    {
      title: "Maturity & Understanding",
      subtitle: "A steady, empathetic anchor",
      icon: Compass,
      accent: "#6A5ACD",
      bgLight: "#EAE6F5",
      description:
        "You possess an incredible capacity to understand people before passing judgment. When conversations get serious, your perspective is thoughtful, balanced, and calming. Having someone in my life who understands so much without me having to over-explain is a true blessing.",
    },
  ];

  return (
    <section className="py-24 px-4 relative max-w-5xl mx-auto">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-80 bg-gradient-to-r from-[#F7E7EA]/40 via-[#EAE6F5]/40 to-[#FFFDF9]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Header with emotional transition */}
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 border border-[#EAE6F5] text-xs font-semibold text-[#C56868] shadow-xs mb-3"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span>A Moment of Real Sincerity</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-serif font-bold text-[#2D2D2D]"
        >
          Behind All The Jokes...
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm sm:text-base text-[#5A5450] mt-3 max-w-xl mx-auto leading-relaxed"
        >
          It&apos;s easy to spend 99% of our time teasing and roasting each other. But strip away the sarcasm, and there are core qualities in you that I hold in the highest regard.
        </motion.p>
      </div>

      {/* 3 Core Virtue Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {virtues.map((v, i) => {
          const Icon = v.icon;
          return (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              className="glass-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between border border-white/90 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div
                className="absolute top-0 inset-x-0 h-1 transition-all group-hover:h-1.5"
                style={{ backgroundColor: v.accent }}
              />

              <div>
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-xs"
                  style={{ backgroundColor: v.bgLight, color: v.accent }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <span
                  className="text-xs uppercase tracking-widest font-bold block mb-1"
                  style={{ color: v.accent }}
                >
                  {v.subtitle}
                </span>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2D2D2D] mb-3">
                  {v.title}
                </h3>

                <p className="text-sm text-[#5A5450] leading-relaxed">
                  {v.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#EAE6F5]/70 flex items-center justify-between text-xs text-[#5A5450]/70">
                <span className="font-cursive text-sm">Admired always</span>
                <span className="text-base select-none">✦</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

