import React from 'react';
import { Search, Home, Calendar, Tv, Film, Plus } from 'lucide-react';
import { playStephuaryChime } from '../../utils/audioChime';

interface Props {
  activeSection: string;
  onSelectNav: (nav: string) => void;
  onLaunchPrototype: () => void;
}

export const StephuaryLeftRail: React.FC<Props> = ({
  activeSection,
  onSelectNav,
  onLaunchPrototype
}) => {
  return (
    <aside
      className="fixed left-0 top-0 bottom-0 w-14 sm:w-16 bg-black border-r border-neutral-900 z-50 flex flex-col items-center justify-between py-5 select-none"
      aria-label="Netflix TV Navigation"
    >
      {/* Top: Netflix Iconic Red "N" Ribbon Logo */}
      <div className="flex flex-col items-center gap-8">
        <button
          onClick={() => {
            playStephuaryChime();
            onSelectNav('home');
          }}
          className="group focus:outline-none"
          title="Stephuary Streaming Home"
        >
          {/* Stephuary Red Ribbon Monogram */}
          <div className="relative flex items-center justify-center">
            <span className="font-sans font-black text-3xl sm:text-4xl text-[#E50914] tracking-tighter leading-none select-none drop-shadow-[0_2px_8px_rgba(229,9,20,0.4)] group-hover:scale-105 transition-transform">
              S
            </span>
          </div>
        </button>

        {/* Primary Vertical Navigation Icons (Exact replica of IMG_7449.png) */}
        <nav className="flex flex-col items-center gap-6 text-neutral-400">
          {/* 1. Search */}
          <button
            onClick={() => {
              playStephuaryChime();
              onSelectNav('search');
            }}
            className={`p-2 transition-colors hover:text-white relative group ${
              activeSection === 'search' ? 'text-white' : 'text-neutral-400'
            }`}
            title="Search"
          >
            <Search className="w-5 h-5 stroke-[2.2]" />
            <span className="sr-only">Search</span>
          </button>

          {/* 2. Home */}
          <button
            onClick={() => {
              playStephuaryChime();
              onSelectNav('home');
            }}
            className={`p-2 transition-colors hover:text-white relative group ${
              activeSection === 'home' ? 'text-white' : 'text-neutral-400'
            }`}
            title="Home"
          >
            <Home className="w-5 h-5 stroke-[2.2]" />
            <span className="sr-only">Home</span>
          </button>

          {/* 3. Coming Soon / Calendar (With red indicator line/dot as in IMG_7449) */}
          <button
            onClick={() => {
              playStephuaryChime();
              onSelectNav('coming-soon');
            }}
            className={`p-2 transition-colors hover:text-white relative group ${
              activeSection === 'coming-soon' ? 'text-white' : 'text-neutral-400'
            }`}
            title="Coming Soon & Redesigns"
          >
            <Calendar className="w-5 h-5 stroke-[2.2]" />
            {/* Active red indicator dot */}
            <span className="absolute -left-3.5 top-1/2 -translate-y-1/2 w-1 h-5 bg-[#E50914] rounded-r-sm" />
            <span className="sr-only">Coming Soon</span>
          </button>

          {/* 4. TV Series / Hospitality */}
          <button
            onClick={() => {
              playStephuaryChime();
              onSelectNav('places-redesign');
            }}
            className={`p-2 transition-colors hover:text-white relative group ${
              activeSection === 'places-redesign' ? 'text-white' : 'text-neutral-400'
            }`}
            title="Places to Redesign"
          >
            <Tv className="w-5 h-5 stroke-[2.2]" />
            <span className="sr-only">Series & Places</span>
          </button>

          {/* 5. Celestial Prototype / Interactive Experience */}
          <button
            onClick={() => {
              playStephuaryChime();
              onLaunchPrototype();
            }}
            className="p-2 transition-colors hover:text-white relative group text-neutral-400"
            title="Celestial Hotel Prototype"
          >
            <Film className="w-5 h-5 stroke-[2.2]" />
            <span className="sr-only">Celestial Hotel Prototype</span>
          </button>

          {/* 6. Plus / My List */}
          <button
            onClick={() => {
              playStephuaryChime();
              onLaunchPrototype();
            }}
            className="p-2 transition-colors hover:text-white relative group text-neutral-400"
            title="Launch Celestial Hotel Prototype"
          >
            <Plus className="w-5 h-5 stroke-[2.5]" />
            <span className="sr-only">Launch Prototype</span>
          </button>
        </nav>
      </div>

      {/* Bottom Profile Dot / Sound */}
      <div className="flex flex-col items-center gap-3">
        <button
          onClick={onLaunchPrototype}
          className="w-7 h-7 rounded-sm bg-[#00A8E1] flex items-center justify-center text-white text-[11px] font-bold shadow hover:ring-2 hover:ring-white transition-all"
          title="Michelle (Guest Profile)"
        >
          <span className="leading-none">☺</span>
        </button>
      </div>
    </aside>
  );
};
