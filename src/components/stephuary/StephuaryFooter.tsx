import React from 'react';
import { ArrowUp, Play } from 'lucide-react';
import { playStephuaryChime } from '../../utils/audioChime';

interface Props {
  onScrollToTop: () => void;
  onLaunchPrototype: () => void;
}

export const StephuaryFooter: React.FC<Props> = ({ onScrollToTop, onLaunchPrototype }) => {
  return (
    <footer className="relative bg-black text-neutral-400 border-t border-neutral-900/80 pt-16 pb-12 px-6 sm:px-12 lg:px-16 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
        {/* Left Side: Editorial & Contact */}
        <div className="space-y-4 max-w-xl">
          <div className="flex items-center gap-3">
            <span className="font-sans font-black text-2xl text-[#E50914] tracking-tighter leading-none">
              S
            </span>
            <span className="text-white font-extrabold tracking-wider text-sm">
              STEPHUARY
            </span>
            <span className="text-neutral-600">|</span>
            <span className="text-xs uppercase font-mono tracking-widest text-neutral-400">
              EXPERIENCE ARCHITECT PORTFOLIO
            </span>
          </div>

          <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
            Interactive streaming portfolio prototype for resume presentation. Featuring concept architecture, spatial hospitality design, and the Celestial Hotel Engine.
          </p>

          <div className="flex items-center gap-4 text-xs font-semibold text-neutral-300 pt-1">
            <button
              onClick={() => {
                playStephuaryChime();
                onLaunchPrototype();
              }}
              className="flex items-center gap-1.5 text-white hover:text-[#E50914] transition-colors"
            >
              <Play className="w-3.5 h-3.5 fill-current text-[#E50914]" />
              <span>Launch Astrological Hotel Prototype</span>
            </button>
            <span className="text-neutral-700">·</span>
            <button
              onClick={onScrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right Side: Giant Red STEPHUARY Logo */}
        <div className="self-end md:self-auto flex flex-col items-end">
          <div className="font-sans font-black text-4xl sm:text-6xl lg:text-7xl text-[#E50914] tracking-tighter uppercase leading-none drop-shadow-[0_4px_20px_rgba(229,9,20,0.3)]">
            STEPHUARY
          </div>
          <span className="text-[10px] uppercase font-mono tracking-widest text-neutral-500 pt-1">
            © 2026 Stephuary Portfolio
          </span>
        </div>
      </div>
    </footer>
  );
};
