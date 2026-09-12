import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Sparkles,
  Flame,
  Mountain,
  Wind,
  Droplets,
  Sun,
  Moon,
  Compass,
  Thermometer,
  Coffee,
  HeartHandshake,
  CheckCircle2,
  ChevronRight,
  Info
} from 'lucide-react';
import { NatalChartData, ElementType, GuestStayPreferences } from '../types';
import { ZODIAC_SIGNS, ARCHETYPE_CATALOG } from '../services/astrology';

interface ArchetypeVisualizerProps {
  chart: NatalChartData;
  preferences?: GuestStayPreferences;
  guestName?: string;
  roomNumber?: string;
  onSelectSign?: (signName: string) => void;
}

export const ArchetypeVisualizer: React.FC<ArchetypeVisualizerProps> = ({
  chart,
  preferences,
  guestName = 'Julian Sterling',
  roomNumber = 'Suite 404',
  onSelectSign,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'breakdown' | 'explore'>('overview');
  const [hoveredElement, setHoveredElement] = useState<ElementType | null>(null);

  const { sunSign, moonSign, risingSign, dominantElement, elementalBalance, stayRhythm, archetype } = chart;

  // Element theme styling
  const elementStyles: Record<ElementType, {
    bgGradient: string;
    badgeBg: string;
    badgeText: string;
    borderAccent: string;
    icon: React.ReactNode;
    ringStroke: string;
    glowHex: string;
  }> = {
    Fire: {
      bgGradient: 'from-amber-900/10 via-orange-950/5 to-stone-900',
      badgeBg: 'bg-amber-500/15 text-amber-300 border-amber-500/30',
      badgeText: 'text-amber-400',
      borderAccent: 'border-amber-500/30',
      icon: <Flame className="w-4 h-4 text-amber-400" />,
      ringStroke: '#E06D53',
      glowHex: '#F98E73'
    },
    Earth: {
      bgGradient: 'from-emerald-950/15 via-stone-900 to-stone-950',
      badgeBg: 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30',
      badgeText: 'text-emerald-400',
      borderAccent: 'border-emerald-500/30',
      icon: <Mountain className="w-4 h-4 text-emerald-400" />,
      ringStroke: '#9C8855',
      glowHex: '#BFA873'
    },
    Air: {
      bgGradient: 'from-sky-950/15 via-stone-900 to-stone-950',
      badgeBg: 'bg-sky-500/15 text-sky-300 border-sky-500/30',
      badgeText: 'text-sky-400',
      borderAccent: 'border-sky-500/30',
      icon: <Wind className="w-4 h-4 text-sky-400" />,
      ringStroke: '#8BA4B5',
      glowHex: '#A8C4D6'
    },
    Water: {
      bgGradient: 'from-teal-950/20 via-stone-900 to-stone-950',
      badgeBg: 'bg-teal-500/15 text-teal-300 border-teal-500/30',
      badgeText: 'text-teal-400',
      borderAccent: 'border-teal-500/30',
      icon: <Droplets className="w-4 h-4 text-teal-400" />,
      ringStroke: '#5B7C99',
      glowHex: '#789BB9'
    }
  };

  const style = elementStyles[dominantElement] || elementStyles.Earth;

  return (
    <div id="birth-chart-archetype-container" className="bg-stone-900 border border-stone-800 rounded-2xl overflow-hidden shadow-2xl">
      {/* Header Banner */}
      <div className={`px-6 py-5 border-b border-stone-800/80 bg-gradient-to-r ${style.bgGradient} flex flex-wrap items-center justify-between gap-4`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-stone-950/80 border border-stone-700/60 flex items-center justify-center text-xl shadow-inner">
            {sunSign.symbol}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-400">Guest Archetype Profile</span>
              <span className={`inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full border ${style.badgeBg}`}>
                {style.icon}
                {dominantElement} Element
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-serif text-stone-100 font-medium">
              {archetype.archetypeTitle}
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-right hidden sm:block">
            <div className="text-xs text-stone-400">Prepared For</div>
            <div className="text-sm font-medium text-stone-200">{guestName} · {roomNumber}</div>
          </div>
          <div className="flex bg-stone-950/70 p-1 rounded-xl border border-stone-800 text-xs">
            <button
              id="tab-btn-overview"
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'overview'
                  ? 'bg-amber-600/30 text-amber-200 font-medium shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Archetype Overview
            </button>
            <button
              id="tab-btn-breakdown"
              onClick={() => setActiveTab('breakdown')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'breakdown'
                  ? 'bg-amber-600/30 text-amber-200 font-medium shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              The Big 3 Core
            </button>
            <button
              id="tab-btn-explore"
              onClick={() => setActiveTab('explore')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'explore'
                  ? 'bg-amber-600/30 text-amber-200 font-medium shadow-sm'
                  : 'text-stone-400 hover:text-stone-200'
              }`}
            >
              Explore 12 Archetypes
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-6"
            >
              {/* Archetype Visual Hero Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Visual Mandala & Celestial Compass (5 cols) */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-stone-950/60 rounded-2xl border border-stone-800/80 relative overflow-hidden">
                  <div className="absolute inset-0 bg-radial from-amber-500/5 via-transparent to-transparent pointer-events-none" />

                  {/* SVG Celestial Diagram */}
                  <div className="relative w-56 h-56 flex items-center justify-center">
                    <svg className="w-full h-full animate-spin-slow" viewBox="0 0 200 200">
                      {/* Outer Orbit */}
                      <circle
                        cx="100"
                        cy="100"
                        r="90"
                        fill="none"
                        stroke="#44403c"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                      {/* Middle Celestial Ring */}
                      <circle
                        cx="100"
                        cy="100"
                        r="72"
                        fill="none"
                        stroke={style.ringStroke}
                        strokeWidth="2.5"
                        strokeDasharray="16 6"
                        opacity="0.8"
                      />
                      {/* Inner Orbit */}
                      <circle
                        cx="100"
                        cy="100"
                        r="52"
                        fill="none"
                        stroke="#78716c"
                        strokeWidth="1"
                      />
                      {/* Cardinal Cross markers */}
                      <line x1="100" y1="5" x2="100" y2="25" stroke="#78716c" strokeWidth="1.5" />
                      <line x1="100" y1="175" x2="100" y2="195" stroke="#78716c" strokeWidth="1.5" />
                      <line x1="5" y1="100" x2="25" y2="100" stroke="#78716c" strokeWidth="1.5" />
                      <line x1="175" y1="100" x2="195" y2="100" stroke="#78716c" strokeWidth="1.5" />
                    </svg>

                    {/* Central Medallion */}
                    <div className="absolute flex flex-col items-center justify-center text-center p-3 rounded-full w-28 h-28 bg-stone-900 border-2 border-amber-500/40 shadow-xl z-10">
                      <span className="text-3xl filter drop-shadow">{sunSign.symbol}</span>
                      <span className="text-xs font-serif font-medium text-stone-200 mt-1">{sunSign.name}</span>
                      <span className="text-[10px] text-stone-400 uppercase tracking-widest">{dominantElement}</span>
                    </div>

                    {/* Orbiting Satellite Badges */}
                    <div
                      className="absolute -top-1 left-1/2 -translate-x-1/2 bg-stone-900 border border-stone-700 rounded-full px-2.5 py-0.5 text-[10px] text-stone-300 flex items-center gap-1 shadow"
                      title="Sun Sign: Core Spirit"
                    >
                      <Sun className="w-3 h-3 text-amber-400" />
                      <span>{sunSign.name}</span>
                    </div>
                    <div
                      className="absolute bottom-1 right-4 bg-stone-900 border border-stone-700 rounded-full px-2.5 py-0.5 text-[10px] text-stone-300 flex items-center gap-1 shadow"
                      title="Moon Sign: Emotional & Sleep Comfort"
                    >
                      <Moon className="w-3 h-3 text-sky-400" />
                      <span>{moonSign.name}</span>
                    </div>
                    <div
                      className="absolute bottom-1 left-4 bg-stone-900 border border-stone-700 rounded-full px-2.5 py-0.5 text-[10px] text-stone-300 flex items-center gap-1 shadow"
                      title="Rising Sign: Sensory Impression"
                    >
                      <Compass className="w-3 h-3 text-emerald-400" />
                      <span>{risingSign.name}</span>
                    </div>
                  </div>

                  {/* Tagline below diagram */}
                  <p className="text-xs text-center text-stone-300 mt-4 max-w-xs font-light italic leading-relaxed">
                    "{archetype.tagline}"
                  </p>

                  {/* Elemental Balance Mini-Bar */}
                  <div className="w-full mt-5 pt-4 border-t border-stone-800/80">
                    <div className="flex justify-between text-[11px] text-stone-400 mb-2 font-medium">
                      <span>Elemental Composition</span>
                      <span className="text-stone-300">Dominant: {dominantElement}</span>
                    </div>
                    <div className="grid grid-cols-4 gap-2 text-center text-[10px]">
                      <div
                        onMouseEnter={() => setHoveredElement('Fire')}
                        onMouseLeave={() => setHoveredElement(null)}
                        className={`p-1.5 rounded-lg border transition-all cursor-default ${
                          dominantElement === 'Fire' ? 'bg-amber-950/40 border-amber-500/40 text-amber-200' : 'bg-stone-900/60 border-stone-800 text-stone-400'
                        }`}
                      >
                        <div className="font-semibold">{elementalBalance.fire}%</div>
                        <div className="text-[9px] opacity-75">Fire</div>
                      </div>
                      <div
                        onMouseEnter={() => setHoveredElement('Earth')}
                        onMouseLeave={() => setHoveredElement(null)}
                        className={`p-1.5 rounded-lg border transition-all cursor-default ${
                          dominantElement === 'Earth' ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200' : 'bg-stone-900/60 border-stone-800 text-stone-400'
                        }`}
                      >
                        <div className="font-semibold">{elementalBalance.earth}%</div>
                        <div className="text-[9px] opacity-75">Earth</div>
                      </div>
                      <div
                        onMouseEnter={() => setHoveredElement('Air')}
                        onMouseLeave={() => setHoveredElement(null)}
                        className={`p-1.5 rounded-lg border transition-all cursor-default ${
                          dominantElement === 'Air' ? 'bg-sky-950/40 border-sky-500/40 text-sky-200' : 'bg-stone-900/60 border-stone-800 text-stone-400'
                        }`}
                      >
                        <div className="font-semibold">{elementalBalance.air}%</div>
                        <div className="text-[9px] opacity-75">Air</div>
                      </div>
                      <div
                        onMouseEnter={() => setHoveredElement('Water')}
                        onMouseLeave={() => setHoveredElement(null)}
                        className={`p-1.5 rounded-lg border transition-all cursor-default ${
                          dominantElement === 'Water' ? 'bg-teal-950/40 border-teal-500/40 text-teal-200' : 'bg-stone-900/60 border-stone-800 text-stone-400'
                        }`}
                      >
                        <div className="font-semibold">{elementalBalance.water}%</div>
                        <div className="text-[9px] opacity-75">Water</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Clear Hospitality Translation (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Core Traits Chips */}
                  <div>
                    <div className="text-xs uppercase tracking-wider text-stone-400 mb-2 font-medium">Guest Temperament & Signatures</div>
                    <div className="flex flex-wrap gap-2">
                      {archetype.coreTraits.map((trait, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-800/80 border border-stone-700/60 text-xs text-stone-200 font-medium"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                          {trait}
                        </span>
                      ))}
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-stone-800/80 border border-stone-700/60 text-xs text-stone-300">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        Pacing: {stayRhythm.name.split(' ')[0]}
                      </span>
                    </div>
                  </div>

                  {/* 3 Practical Hospitality Cards */}
                  <div className="grid grid-cols-1 gap-3">
                    {/* Card 1: How They Recharge */}
                    <div className="p-3.5 rounded-xl bg-stone-950/50 border border-stone-800 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0 text-amber-400 mt-0.5">
                        <Sun className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-stone-200">How They Rest & Recharge</div>
                        <p className="text-xs text-stone-400 mt-0.5 leading-relaxed">
                          {archetype.howTheyRecharge}
                        </p>
                      </div>
                    </div>

                    {/* Card 2: Suite Calibration */}
                    <div className="p-3.5 rounded-xl bg-stone-950/50 border border-stone-800 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400 mt-0.5">
                        <Thermometer className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-stone-200">Suite Physical Environment</div>
                        <p className="text-xs text-stone-400 mt-0.5 leading-relaxed">
                          {archetype.suiteCalibration}
                        </p>
                      </div>
                    </div>

                    {/* Card 3: Front-Line Staff Service Guidance */}
                    <div className="p-3.5 rounded-xl bg-stone-950/50 border border-stone-800 flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 text-sky-400 mt-0.5">
                        <HeartHandshake className="w-4 h-4" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-stone-200">Front-Line Team Service Guidance</div>
                        <p className="text-xs text-stone-400 mt-0.5 leading-relaxed">
                          {archetype.staffServiceTip}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Operational Settings Bar (Preferences Integration) */}
                  {preferences && (
                    <div className="p-3 rounded-xl bg-stone-800/40 border border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div className="flex items-center gap-2 text-stone-300">
                        <Coffee className="w-4 h-4 text-amber-400" />
                        <span>Morning Coffee: <strong className="text-stone-100">{preferences.morningBeverage}</strong></span>
                      </div>
                      <div className="flex items-center gap-2 text-stone-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <span>Room Temp: <strong className="text-stone-100">{preferences.roomTemperature}</strong></span>
                      </div>
                      <div className="flex items-center gap-2 text-stone-300">
                        <span className="w-2 h-2 rounded-full bg-sky-400" />
                        <span>Pillows: <strong className="text-stone-100">{preferences.pillowType}</strong></span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'breakdown' && (
            <motion.div
              key="breakdown"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div className="text-xs text-stone-300 leading-relaxed">
                  <strong className="text-stone-100">Boutique Operational Blueprint:</strong> Rather than relying on complicated charts, our model extracts three practical levers from the guest’s natal coordinates: their <strong>Core Personality (Sun)</strong>, their <strong>Sleep & Comfort Needs (Moon)</strong>, and their <strong>First-Contact Impression (Rising)</strong>.
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Sun Sign Card */}
                <div className="p-5 rounded-xl bg-stone-950/60 border border-amber-500/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
                      <Sun className="w-3.5 h-3.5" /> Sun Sign
                    </span>
                    <span className="text-2xl">{sunSign.symbol}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-stone-100 font-medium">{sunSign.name}</h3>
                    <p className="text-xs text-stone-400 mt-1">{sunSign.dateRange}</p>
                  </div>
                  <div className="pt-2 border-t border-stone-800 text-xs space-y-1.5 text-stone-300">
                    <div><strong className="text-stone-200">What It Informs:</strong> Daytime energy, travel intention, and dining style.</div>
                    <div><strong className="text-stone-200">Primary Essence:</strong> {sunSign.essence}</div>
                  </div>
                </div>

                {/* Moon Sign Card */}
                <div className="p-5 rounded-xl bg-stone-950/60 border border-sky-500/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 flex items-center gap-1.5">
                      <Moon className="w-3.5 h-3.5" /> Moon Sign
                    </span>
                    <span className="text-2xl">{moonSign.symbol}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-stone-100 font-medium">{moonSign.name}</h3>
                    <p className="text-xs text-stone-400 mt-1">Emotional & Sleep Core</p>
                  </div>
                  <div className="pt-2 border-t border-stone-800 text-xs space-y-1.5 text-stone-300">
                    <div><strong className="text-stone-200">What It Informs:</strong> Evening turn-down ritual, bed linens, soothing teas, and soundscapes.</div>
                    <div><strong className="text-stone-200">Element:</strong> {moonSign.element} ({moonSign.modality})</div>
                  </div>
                </div>

                {/* Rising Sign Card */}
                <div className="p-5 rounded-xl bg-stone-950/60 border border-emerald-500/20 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                      <Compass className="w-3.5 h-3.5" /> Rising Sign
                    </span>
                    <span className="text-2xl">{risingSign.symbol}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-stone-100 font-medium">{risingSign.name}</h3>
                    <p className="text-xs text-stone-400 mt-1">First Sensory Impression</p>
                  </div>
                  <div className="pt-2 border-t border-stone-800 text-xs space-y-1.5 text-stone-300">
                    <div><strong className="text-stone-200">What It Informs:</strong> Arrival greeting style, room aroma mist, and lighting kelvin temperature.</div>
                    <div><strong className="text-stone-200">Element:</strong> {risingSign.element} ({risingSign.modality})</div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'explore' && (
            <motion.div
              key="explore"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="text-xs text-stone-400">
                  Select any archetype below to preview its custom hospitality calibration:
                </div>
                <div className="text-xs text-amber-400 font-medium">12 Archetypes Available</div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
                {Object.values(ZODIAC_SIGNS).map((sign) => {
                  const isCurrent = sign.name === sunSign.name;
                  const itemArchetype = ARCHETYPE_CATALOG[sign.name];
                  return (
                    <button
                      key={sign.name}
                      onClick={() => onSelectSign?.(sign.name)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        isCurrent
                          ? 'bg-amber-600/20 border-amber-500/50 ring-1 ring-amber-500/30 shadow-md'
                          : 'bg-stone-950/50 border-stone-800 hover:border-stone-700 hover:bg-stone-900/60'
                      }`}
                    >
                      <div className="flex items-center justify-between text-base">
                        <span>{sign.symbol}</span>
                        <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                          sign.element === 'Fire' ? 'text-amber-400' :
                          sign.element === 'Earth' ? 'text-emerald-400' :
                          sign.element === 'Air' ? 'text-sky-400' : 'text-teal-400'
                        }`}>
                          {sign.element}
                        </span>
                      </div>
                      <div className="font-serif text-xs font-medium text-stone-200 mt-1">{sign.name}</div>
                      <div className="text-[10px] text-stone-400 line-clamp-1 mt-0.5">{itemArchetype?.archetypeTitle}</div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
