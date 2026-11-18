"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Music, Sparkles } from "lucide-react";
import { ambientMusic } from "@/lib/ambientMusic";

interface AudioPlayerProps {
  autoPlayTriggered?: boolean;
}

export default function AudioPlayer({ autoPlayTriggered = false }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (autoPlayTriggered && !isPlaying) {
      ambientMusic.play();
      setIsPlaying(true);
    }
  }, [autoPlayTriggered]);

  const togglePlay = () => {
    if (isPlaying) {
      ambientMusic.pause();
      setIsPlaying(false);
    } else {
      ambientMusic.play();
      setIsPlaying(true);
    }
  };

  return (
    <aside aria-label="Audio player controls" className="fixed bottom-5 right-5 z-40 select-none">
      <div className="relative">
        {/* Floating Controller Pill */}
        <div className="flex items-center gap-2.5 p-1.5 pl-3 pr-2.5 rounded-full glass-card border border-white/80 shadow-lg shadow-[#C56868]/10 transition-all duration-300">
          {/* Animated Equalizer or Music Note */}
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause background music" : "Play background music"}
            className="flex items-center gap-2.5 focus:outline-none group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#C56868] to-[#E5989B] flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105 active:scale-95">
              {isPlaying ? (
                <div className="flex items-center gap-0.5 h-3.5">
                  <span className="w-1 bg-white rounded-full h-full animate-[pulse_0.6s_ease-in-out_infinite]" />
                  <span className="w-1 bg-white rounded-full h-2/3 animate-[pulse_0.8s_ease-in-out_infinite_0.2s]" />
                  <span className="w-1 bg-white rounded-full h-full animate-[pulse_0.5s_ease-in-out_infinite_0.4s]" />
                </div>
              ) : (
                <Music className="w-4 h-4 text-white/90" />
              )}
            </div>

            <div className="text-left hidden sm:block">
              <p className="text-[10px] uppercase font-bold tracking-wider text-[#C56868] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#D4AF37]" />
                <span>{isPlaying ? "Music Playing" : "Music Paused"}</span>
              </p>
              <p className="text-xs font-semibold text-[#2D2D2D]">
                Upbeat Celebration 🎈
              </p>
            </div>
          </button>

          {/* Quick Mute/Play toggle icon */}
          <div className="flex items-center border-l border-[#EAE6F5] pl-1.5 ml-1">
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? "Mute audio" : "Play audio"}
              className="p-1.5 rounded-full text-[#5A5450] hover:text-[#C56868] hover:bg-[#F4F1FA] transition-colors cursor-pointer"
            >
              {isPlaying ? <Volume2 className="w-4 h-4 text-[#C56868]" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
