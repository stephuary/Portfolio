import React from 'react';
import { Play, Info } from 'lucide-react';
import { playStephuaryChime } from '../../utils/audioChime';

interface Props {
  onLaunchHotelPrototype: () => void;
  onOpenInfo: () => void;
}

export const StephuaryBillboard: React.FC<Props> = ({
  onLaunchHotelPrototype,
  onOpenInfo
}) => {
  return (
    <section className="relative w-full min-h-[75vh] sm:min-h-[85vh] flex items-center justify-start overflow-hidden bg-black text-white select-none">
      {/* Background Photographic Key Art (Cinematic Luxury Suite) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2000&auto=format&fit=crop"
          alt="Celestial Hospitality Cinematic Background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
        />

        {/* Netflix-Exact Dual Gradients: Heavy dark vignette on left & bottom fade */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 sm:via-black/70 to-transparent z-10 w-full sm:w-[65%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/30 to-transparent z-10" />
      </div>

      {/* Hero Content Layer (Exact replica of IMG_7449.png) */}
      <div className="relative z-20 max-w-2xl px-6 sm:px-12 lg:px-16 pt-24 pb-12 space-y-4">
        {/* Top: Red "S" Ribbon + "SERIES" */}
        <div className="flex items-center gap-2">
          <span className="font-sans font-black text-xl sm:text-2xl text-[#E50914] tracking-tighter leading-none">
            S
          </span>
          <span className="text-xs uppercase tracking-[0.35em] text-neutral-200 font-bold">
            ORIGINAL SERIES
          </span>
        </div>

        {/* Title with Red Play Triangle: "CELESTIAL HOSPITALITY ▶" */}
        <h1 className="font-sans font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-tight flex items-baseline gap-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
          <span>CELESTIAL HOSPITALITY</span>
          <span className="text-[#E50914] text-2xl sm:text-4xl inline-block -translate-y-1">
            ▶
          </span>
        </h1>

        {/* Rating & Metadata Row (Exact replica of IMG_7449.png) */}
        <div className="flex items-center gap-3 text-xs sm:text-sm text-neutral-300 font-medium flex-wrap pt-0.5">
          <span className="text-[#46d369] font-bold text-sm sm:text-base">99% Match</span>
          <span>2026</span>
          <span className="border border-neutral-500/80 px-1 py-0.5 rounded text-[10px] text-neutral-300 uppercase leading-none">
            TV-MA
          </span>
          <span>Interactive Working Prototype</span>
          <span className="border border-neutral-500/80 px-1 py-0.5 rounded text-[10px] text-neutral-300 uppercase leading-none">
            HD
          </span>
          <span className="border border-neutral-500/80 px-1 py-0.5 rounded text-[10px] text-neutral-300 uppercase leading-none">
            5.1
          </span>
        </div>

        {/* Subtitle / Season Status */}
        <div className="text-sm sm:text-base text-neutral-200 font-semibold tracking-wide pt-1">
          Full Interactive Engine Live Now
        </div>

        {/* Concise 2-Line Synopsis (Less text, more imagery!) */}
        <p className="text-xs sm:text-sm text-neutral-300 font-normal leading-relaxed line-clamp-3 max-w-xl drop-shadow-md">
          What if a guest's birth chart turned their stay into a one-of-a-kind sensory experience? A boutique hospitality system decoding Sun, Moon, and Rising signs into custom 5-sense room environments, circadian Kelvin lighting, bespoke essential oil mists, and real-time staff dispatch.
        </p>

        {/* Netflix-Style CTA Buttons */}
        <div className="flex items-center gap-3 pt-3">
          {/* 1. Play / Launch Prototype (White button with black text) */}
          <button
            id="hero-btn-launch-prototype"
            onClick={() => {
              playStephuaryChime();
              onLaunchHotelPrototype();
            }}
            className="flex items-center gap-2 px-6 py-2.5 rounded bg-white hover:bg-neutral-200 text-black font-bold text-sm transition-transform active:scale-95 shadow-lg"
          >
            <Play className="w-4 h-4 fill-black text-black" />
            <span>Play / Launch Prototype</span>
          </button>

          {/* 2. More Info (Translucent grey button) */}
          <button
            id="hero-btn-more-info"
            onClick={() => {
              playStephuaryChime();
              onOpenInfo();
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded bg-neutral-600/70 hover:bg-neutral-600/90 text-white font-semibold text-sm transition-colors shadow-md backdrop-blur-xs"
          >
            <Info className="w-4 h-4" />
            <span>More Info</span>
          </button>
        </div>
      </div>
    </section>
  );
};
