import React, { useState, useEffect } from 'react';
import { Search, Bell, ChevronDown, X, Play, Sparkles } from 'lucide-react';
import { playStephuaryChime } from '../../utils/audioChime';

interface Props {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onLaunchPrototype: () => void;
  onSelectCategory: (catId: string) => void;
  activeCategory: string;
  activeViewMode: 'catalog' | 'prototype';
  onToggleViewMode: (mode: 'catalog' | 'prototype') => void;
}

export const StephuaryNavbar: React.FC<Props> = ({
  searchQuery,
  onSearchChange,
  onLaunchPrototype,
  onSelectCategory,
  activeCategory,
  activeViewMode,
  onToggleViewMode
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-14 sm:left-16 right-0 z-40 transition-colors duration-300 px-6 sm:px-12 py-3 flex items-center justify-between ${
        isScrolled
          ? 'bg-[#141414]/95 backdrop-blur-sm shadow-xl'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent'
      }`}
    >
      {/* Left side: Authentic Red STEPHUARY Logo & Browse Dropdown */}
      <div className="flex items-center gap-8">
        <button
          onClick={() => {
            onToggleViewMode('catalog');
            onSelectCategory('all');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            playStephuaryChime();
          }}
          className="flex items-center gap-2 group focus:outline-none"
        >
          {/* Authentic Red STEPHUARY Wordmark */}
          <span className="font-sans font-black text-2xl sm:text-3xl tracking-tighter text-[#E50914] uppercase drop-shadow-[0_2px_4px_rgba(229,9,20,0.8)]">
            STEPHUARY
          </span>
        </button>

        {/* Desktop Navigation Links / Browse Dropdown (matching IMG_7448.jpeg) */}
        <div className="relative">
          <button
            onClick={() => setIsBrowseOpen(!isBrowseOpen)}
            className="flex items-center gap-1.5 text-xs font-semibold text-neutral-200 hover:text-white transition-colors"
          >
            <span>Browse</span>
            <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isBrowseOpen ? 'rotate-180' : ''}`} />
          </button>

          {isBrowseOpen && (
            <div className="absolute top-8 left-0 w-56 bg-[#141414] border border-neutral-800 rounded-sm shadow-2xl py-2 z-50 text-xs animate-in fade-in duration-150">
              <button
                onClick={() => {
                  setIsBrowseOpen(false);
                  onToggleViewMode('catalog');
                  onSelectCategory('all');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full text-left px-4 py-2 hover:bg-neutral-800 text-neutral-200 hover:text-white"
              >
                Home
              </button>
              <button
                onClick={() => {
                  setIsBrowseOpen(false);
                  onToggleViewMode('catalog');
                  onSelectCategory('places-redesign');
                }}
                className="w-full text-left px-4 py-2 hover:bg-neutral-800 text-neutral-200 hover:text-white"
              >
                Places I'd Love to Redesign
              </button>
              <div className="h-px bg-neutral-800 my-1" />
              <button
                onClick={() => {
                  setIsBrowseOpen(false);
                  onLaunchPrototype();
                }}
                className="w-full text-left px-4 py-2 hover:bg-[#E50914]/20 text-[#E50914] font-semibold flex items-center justify-between"
              >
                <span>Celestial Hotel Prototype</span>
                <span className="text-[10px] bg-[#E50914] text-white px-1.5 py-0.2 rounded-xs">LIVE</span>
              </button>
            </div>
          )}
        </div>

        <nav className="hidden md:flex items-center gap-6 text-xs text-neutral-300">
          <button
            onClick={() => {
              onToggleViewMode('catalog');
              onSelectCategory('places-redesign');
            }}
            className="hover:text-white transition-colors"
          >
            Places to Redesign
          </button>
          <button
            onClick={() => {
              onLaunchPrototype();
            }}
            className="hover:text-white text-neutral-400 flex items-center gap-1.5 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E50914]" />
            <span>Celestial Prototype</span>
          </button>
        </nav>
      </div>

      {/* Right side: Search, Launch Prototype CTA, Bell, Profile Avatar */}
      <div className="flex items-center gap-4">
        {/* Interactive Hotel Prototype Launch Button */}
        <button
          onClick={() => {
            playStephuaryChime();
            onLaunchPrototype();
          }}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs font-semibold transition-all shadow-md ${
            activeViewMode === 'prototype'
              ? 'bg-white text-black ring-1 ring-white'
              : 'bg-[#E50914] text-white hover:bg-[#b80710]'
          }`}
          title="Launch Celestial Hospitality Engine"
        >
          <Play className="w-3 h-3 fill-current" />
          <span className="hidden sm:inline">Launch Astrological Hotel Prototype</span>
          <span className="sm:hidden">Launch Prototype</span>
        </button>

        {/* Search Bar (Expandable, matching Netflix web) */}
        <div className="relative flex items-center">
          {isSearchOpen ? (
            <div className="flex items-center bg-black/90 border border-white/60 px-2 py-1 rounded-none text-xs transition-all">
              <Search className="w-4 h-4 text-white mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Titles, concepts..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                autoFocus
                className="bg-transparent text-white placeholder-neutral-400 focus:outline-none w-32 sm:w-48 text-xs font-sans"
              />
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  onSearchChange('');
                }}
                className="text-neutral-400 hover:text-white ml-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1 text-neutral-300 hover:text-white transition-colors flex items-center gap-1.5 text-xs"
              title="Search"
            >
              <Search className="w-4 h-4" />
              <span className="hidden lg:inline text-neutral-300">Search</span>
            </button>
          )}
        </div>

        {/* Notification Bell */}
        <button
          onClick={playStephuaryChime}
          className="text-neutral-300 hover:text-white transition-colors p-1"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
        </button>

        {/* Profile Avatar (Turquoise square matching 'Michelle' from IMG_7448.jpeg) */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="flex items-center gap-1.5 group focus:outline-none"
          >
            <div className="w-7 h-7 rounded-sm bg-[#00A8E1] flex items-center justify-center text-white text-xs font-bold shadow group-hover:ring-1 group-hover:ring-white transition-all">
              <span>☺</span>
            </div>
            <span className="hidden sm:inline text-xs text-neutral-300 font-medium group-hover:text-white">
              Michelle
            </span>
            <ChevronDown className="w-3 h-3 text-neutral-400 group-hover:text-white hidden sm:inline" />
          </button>

          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-[#141414] border border-neutral-800 rounded-sm p-3 shadow-2xl z-50 text-xs animate-in fade-in duration-150">
              <div className="pb-2 mb-2 border-b border-neutral-800 flex items-center gap-2">
                <div className="w-7 h-7 rounded-sm bg-[#00A8E1] flex items-center justify-center text-white text-xs font-bold">
                  ☺
                </div>
                <div>
                  <div className="text-white font-semibold">Michelle</div>
                  <div className="text-[10px] text-neutral-400">Recruiter / Guest</div>
                </div>
              </div>

              <div className="space-y-1.5">
                <button
                  onClick={() => {
                    setIsProfileOpen(false);
                    onLaunchPrototype();
                  }}
                  className="w-full text-left p-1.5 rounded text-neutral-200 hover:bg-neutral-800 hover:text-white flex items-center gap-2"
                >
                  <Play className="w-3 h-3 text-[#E50914] fill-current" />
                  <span>Hotel Working Prototype</span>
                </button>
                <button
                  onClick={() => {
                    setIsProfileOpen(false);
                    playStephuaryChime();
                  }}
                  className="w-full text-left p-1.5 rounded text-neutral-200 hover:bg-neutral-800 hover:text-white"
                >
                  Play Netflix Audio Chime
                </button>
              </div>

              <div className="pt-2 mt-2 border-t border-neutral-800 text-[10px] text-neutral-500">
                Stephuary Streaming UI v3.0
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
