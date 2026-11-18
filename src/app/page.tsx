"use client";

import React, { useState } from "react";
import PasswordGate from "@/components/PasswordGate";
import GrandReveal from "@/components/GrandReveal";
import InteractiveCake from "@/components/InteractiveCake";
import AuntyJiCorner from "@/components/AuntyJiCorner";
import FriendshipTimeline from "@/components/FriendshipTimeline";
import AdmireSection from "@/components/AdmireSection";
import BirthdayLetter from "@/components/BirthdayLetter";
import ClosingSection from "@/components/ClosingSection";
import AudioPlayer from "@/components/AudioPlayer";
import FloatingParticles from "@/components/FloatingParticles";

export default function Home() {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [hasStartedAudio, setHasStartedAudio] = useState(false);

  const handleUnlock = () => {
    setIsUnlocked(true);
    setHasStartedAudio(true);
  };

  return (
    <main className="relative min-h-screen bg-[#FAF7F2] text-[#2D2D2D] selection:bg-[#F5E6E8] selection:text-[#C56868]">
      {/* Background Floating Particles */}
      <FloatingParticles />

      {!isUnlocked ? (
        <PasswordGate onUnlock={handleUnlock} />
      ) : (
        <div className="relative z-10 animate-fade-in">
          {/* Persistent Audio Player Widget */}
          <AudioPlayer autoPlayTriggered={hasStartedAudio} />

          {/* SECTION 2: THE GRAND BIRTHDAY REVEAL */}
          <GrandReveal />

          {/* SECTION 3: THE INTERACTIVE BIRTHDAY CAKE */}
          <InteractiveCake />

          {/* SECTION 4: THE AUNTY JI CORNER (PLAYFUL ROAST) */}
          <AuntyJiCorner />

          {/* SECTION 5: OUR FRIENDSHIP STORY (NARRATIVE JOURNEY) */}
          <FriendshipTimeline />

          {/* SECTION 6: "BEHIND ALL THE JOKES..." (WHAT I ADMIRE ABOUT YOU) */}
          <AdmireSection />

          {/* SECTION 7: THE BIRTHDAY LETTER */}
          <BirthdayLetter />

          {/* SECTION 8: ONE LAST THING & CONCLUSION */}
          <ClosingSection />
        </div>
      )}
    </main>
  );
}

