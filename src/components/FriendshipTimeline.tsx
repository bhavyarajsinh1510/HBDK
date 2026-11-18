"use client";

import React from "react";
import { motion } from "framer-motion";
import { BookOpen, MapPin, MessageSquare, Compass, Shield, Flame } from "lucide-react";

export default function FriendshipTimeline() {
  return (
    <section className="py-14 sm:py-20 px-3.5 sm:px-4 relative max-w-5xl mx-auto overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-10 sm:mb-16">
        <span className="text-[10px] sm:text-xs uppercase font-bold tracking-widest text-[#C56868] bg-[#F7E7EA] px-3.5 py-1.5 rounded-full inline-block mb-2.5">
          Our Narrative Journey
        </span>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2D2D2D]">
          Our Friendship Story
        </h2>
        <p className="text-xs sm:text-base text-[#5A5450] mt-2 sm:mt-3 max-w-md sm:max-w-xl mx-auto px-2">
          From meeting as strangers in AJ&apos;s Academy to navigating new cities, here is how a random classroom connection grew into a lifelong bond.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Central connecting spine on md+ screens */}
        <div className="hidden md:block absolute left-1/2 top-4 bottom-12 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[#C56868]/40 via-[#D4AF37]/40 to-[#EAE6F5]" />

        {/* CHAPTER 1 */}
        <div className="relative mb-10 sm:mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left Column / Card on Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 md:pr-10 md:text-right"
            >
              <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm hover:shadow-md transition-shadow border border-white/85">
                <div className="flex items-center gap-2 mb-2.5 md:justify-end">
                  <span className="px-2.5 py-1 rounded-full bg-[#EAE6F5] text-[#C56868] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                    Chapter 01
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#5A5450] font-medium flex items-center gap-1">
                    <BookOpen className="w-3.5 h-3.5 text-[#C56868]" />
                    AJ&apos;s Academy Days
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2D2D2D] mb-2 sm:mb-3">
                  AJ&apos;s Academy
                </h3>

                <p className="text-xs sm:text-sm text-[#5A5450] leading-relaxed">
                  We met in the most everyday setting imaginable: AJ&apos;s Academy. What could have simply been another routine class turned into the birthplace of an irreplaceable bond. Between class exercises and quiet lectures, our conversations took over. Endless laughter, mutual teasing, and an instant comfort made it feel like we had known each other forever.
                </p>

                <div className="mt-3.5 pt-3.5 border-t border-[#EAE6F5] flex items-center gap-2 md:justify-end text-xs text-[#C56868] font-cursive text-sm sm:text-base">
                  &ldquo;That was where the first inside jokes and roasts began.&rdquo;
                </div>
              </div>
            </motion.div>

            {/* Central Pin Node */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-[#C56868] items-center justify-center text-[#C56868] shadow-md z-10">
              <BookOpen className="w-4 h-4" />
            </div>

            {/* Right spacer */}
            <div className="hidden md:block w-1/2 md:pl-10" />
          </div>
        </div>

        {/* CHAPTER 2 */}
        <div className="relative mb-12 sm:mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left spacer on desktop */}
            <div className="hidden md:block w-1/2 md:pr-10" />

            {/* Central Pin Node */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-white border-2 border-[#D4AF37] items-center justify-center text-[#D4AF37] shadow-md z-10">
              <MapPin className="w-4 h-4" />
            </div>

            {/* Right Column / Card on Desktop */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 md:pl-10 md:text-left"
            >
              <div className="glass-card rounded-2xl sm:rounded-3xl p-5 sm:p-8 shadow-sm hover:shadow-md transition-shadow border border-[#D4AF37]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 sm:w-28 h-24 sm:h-28 bg-[#D4AF37]/10 rounded-bl-full pointer-events-none" />

                <div className="flex items-center gap-2 mb-2.5">
                  <span className="px-2.5 py-1 rounded-full bg-[#FFF3D6] text-[#B8860B] text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                    Chapter 02 &bull; The Anchor
                  </span>
                  <span className="text-[11px] sm:text-xs text-[#5A5450] font-medium flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#B8860B]" />
                    Bangalore
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#2D2D2D] mb-2 sm:mb-3">
                  The Bangalore Transition
                </h3>

                <p className="text-xs sm:text-sm text-[#5A5450] leading-relaxed">
                  Moving to Bangalore for college was a whirlwind. Stepping into a completely unfamiliar city, navigating hostel rooms, and finding my rhythm was daunting. The initial days came with that inevitable wave of loneliness and homesickness.
                </p>

                <p className="text-xs sm:text-sm text-[#5A5450] leading-relaxed mt-2">
                  And that is where your friendship shone brightest. You made sure to regularly chat with me, check in on how my days were going, and keep me grounded with laughter. You didn&apos;t let me feel isolated. That proactive care—making sure I was okay in an alien city—meant the world to me.
                </p>

                <div className="mt-3.5 pt-3.5 border-t border-[#EAE6F5] flex items-center gap-2 text-xs text-[#B8860B] font-cursive text-sm sm:text-base">
                  &ldquo;A lifeline when everything felt new and quiet.&rdquo;
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CHAPTER 3: THE CORE PILLARS */}
        <div className="relative">
          <div className="text-center mb-6 sm:mb-8">
            <span className="px-3 py-1 rounded-full bg-[#EAE6F5] text-[#C56868] text-[10px] sm:text-xs font-bold uppercase tracking-wider inline-block">
              Chapter 03 &bull; Daily Dynamics
            </span>
            <h3 className="text-xl sm:text-3xl font-serif font-bold text-[#2D2D2D] mt-2">
              The Four Pillars of Us
            </h3>
            <p className="text-[11px] sm:text-sm text-[#5A5450] mt-1">
              What keeps our friendship running smoothly day after day:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {/* Pillar 1 */}
            <motion.div
              whileHover={{ y: -3 }}
              className="glass-card rounded-2xl p-4.5 sm:p-5 border border-white/90 shadow-xs text-left"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#F7E7EA] text-[#C56868] flex items-center justify-center mb-2.5">
                <Flame className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <h4 className="font-serif font-bold text-base sm:text-lg text-[#2D2D2D] mb-1">
                Constant Teasing
              </h4>
              <p className="text-xs text-[#5A5450] leading-relaxed">
                Relentlessly calling you Aunty Ji, testing your patience, and keeping a 0% seriousness filter whenever we banter.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div
              whileHover={{ y: -3 }}
              className="glass-card rounded-2xl p-4.5 sm:p-5 border border-white/90 shadow-xs text-left"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#EAE6F5] text-[#6A5ACD] flex items-center justify-center mb-2.5">
                <MessageSquare className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <h4 className="font-serif font-bold text-base sm:text-lg text-[#2D2D2D] mb-1">
                Late-Night Rants
              </h4>
              <p className="text-xs text-[#5A5450] leading-relaxed">
                Spilling unfiltered life thoughts, everyday drama, random existential curiosities, and everything in between.
              </p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div
              whileHover={{ y: -3 }}
              className="glass-card rounded-2xl p-4.5 sm:p-5 border border-white/90 shadow-xs text-left"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#FFF3D6] text-[#B8860B] flex items-center justify-center mb-2.5">
                <Compass className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <h4 className="font-serif font-bold text-base sm:text-lg text-[#2D2D2D] mb-1">
                Sage Advice
              </h4>
              <p className="text-xs text-[#5A5450] leading-relaxed">
                When the jokes pause, you offer grounded, level-headed advice that always helps put things back into perspective.
              </p>
            </motion.div>

            {/* Pillar 4 */}
            <motion.div
              whileHover={{ y: -3 }}
              className="glass-card rounded-2xl p-4.5 sm:p-5 border border-white/90 shadow-xs text-left"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E8F5E9] text-[#2E7D32] flex items-center justify-center mb-2.5">
                <Shield className="w-4 sm:w-5 h-4 sm:h-5" />
              </div>
              <h4 className="font-serif font-bold text-base sm:text-lg text-[#2D2D2D] mb-1">
                Mutual Support
              </h4>
              <p className="text-xs text-[#5A5450] leading-relaxed">
                Knowing without a doubt that whenever life throws a curveball, we have each other&apos;s back with zero hesitation.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
