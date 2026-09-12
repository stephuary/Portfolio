import React, { useState } from 'react';
import { SensorySignature, NatalChartData, GuestProfile } from '../types';
import { RoomAmbianceSimulator } from './RoomAmbianceSimulator';
import { Wind, Music, Sun, Flame, Sparkles, Sliders, Droplets, BedDouble, Coffee, Moon, Thermometer } from 'lucide-react';

interface Props {
  sensory: SensorySignature;
  chart: NatalChartData;
  profile: GuestProfile;
}

type SensoryTab = 'all' | 'olfactory' | 'acoustic' | 'visual' | 'gustatory' | 'tactile';

export const SensoryOrchestratorView: React.FC<Props> = ({ sensory, chart, profile }) => {
  const [activeTab, setActiveTab] = useState<SensoryTab>('all');

  return (
    <div className="space-y-8">
      {/* Live Room Simulator Stage */}
      <RoomAmbianceSimulator sensory={sensory} chart={chart} />

      {/* Guest Selected Stay Preferences Snapshot */}
      <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5">
        <div className="flex items-center justify-between mb-3 border-b border-stone-800 pb-2.5">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-amber-400 font-semibold">
            <Sliders className="w-4 h-4" />
            <span>Active Room Setup for {profile.name} ({profile.roomNumber})</span>
          </div>
          <span className="text-[11px] text-stone-400">Derived from Booking Intake</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-xs">
          <div className="bg-stone-950 p-2.5 rounded-xl border border-stone-800">
            <span className="text-[10px] uppercase text-stone-500 block mb-0.5">Morning Drink</span>
            <span className="text-stone-200 font-medium truncate block">{profile.preferences.morningBeverage}</span>
          </div>
          <div className="bg-stone-950 p-2.5 rounded-xl border border-stone-800">
            <span className="text-[10px] uppercase text-stone-500 block mb-0.5">Turn-Down Drink</span>
            <span className="text-stone-200 font-medium truncate block">{profile.preferences.eveningWindDown}</span>
          </div>
          <div className="bg-stone-950 p-2.5 rounded-xl border border-stone-800">
            <span className="text-[10px] uppercase text-stone-500 block mb-0.5">Room Temp</span>
            <span className="text-stone-200 font-medium truncate block">{profile.preferences.roomTemperature}</span>
          </div>
          <div className="bg-stone-950 p-2.5 rounded-xl border border-stone-800">
            <span className="text-[10px] uppercase text-stone-500 block mb-0.5">Pillow Choice</span>
            <span className="text-stone-200 font-medium truncate block">{profile.preferences.pillowType}</span>
          </div>
          <div className="bg-stone-950 p-2.5 rounded-xl border border-stone-800">
            <span className="text-[10px] uppercase text-stone-500 block mb-0.5">Scent Choice</span>
            <span className="text-stone-200 font-medium truncate block">{profile.preferences.scentTolerance}</span>
          </div>
          <div className="bg-stone-950 p-2.5 rounded-xl border border-stone-800">
            <span className="text-[10px] uppercase text-stone-500 block mb-0.5">Staff Style</span>
            <span className="text-stone-200 font-medium truncate block">{profile.preferences.interactionStyle.split('(')[0]}</span>
          </div>
        </div>
      </div>

      {/* Sensory Filter Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-3 border-b border-stone-800 pb-4">
        <div>
          <h3 className="font-serif text-2xl text-stone-100 font-normal">
            5-Sense In-Room Personalization
          </h3>
          <p className="text-xs text-stone-400 mt-1">
            How the hotel translates {profile.name}’s <strong>{chart.dominantElement} Element ({chart.sunSign.name})</strong> into practical, realistic boutique amenities.
          </p>
        </div>

        <div className="flex flex-wrap gap-1 bg-stone-900 p-1 rounded-xl border border-stone-800">
          <button
            id="tab-sensory-all"
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'all' ? 'bg-amber-500 text-stone-950 font-semibold' : 'text-stone-400 hover:text-stone-100'
            }`}
          >
            All 5 Senses
          </button>
          <button
            id="tab-sensory-olfactory"
            onClick={() => setActiveTab('olfactory')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1 ${
              activeTab === 'olfactory' ? 'bg-amber-500 text-stone-950 font-semibold' : 'text-stone-400 hover:text-stone-100'
            }`}
          >
            <Wind className="w-3 h-3" /> Scent
          </button>
          <button
            id="tab-sensory-acoustic"
            onClick={() => setActiveTab('acoustic')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1 ${
              activeTab === 'acoustic' ? 'bg-amber-500 text-stone-950 font-semibold' : 'text-stone-400 hover:text-stone-100'
            }`}
          >
            <Music className="w-3 h-3" /> Sound
          </button>
          <button
            id="tab-sensory-visual"
            onClick={() => setActiveTab('visual')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1 ${
              activeTab === 'visual' ? 'bg-amber-500 text-stone-950 font-semibold' : 'text-stone-400 hover:text-stone-100'
            }`}
          >
            <Sun className="w-3 h-3" /> Light
          </button>
          <button
            id="tab-sensory-gustatory"
            onClick={() => setActiveTab('gustatory')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1 ${
              activeTab === 'gustatory' ? 'bg-amber-500 text-stone-950 font-semibold' : 'text-stone-400 hover:text-stone-100'
            }`}
          >
            <Flame className="w-3 h-3" /> Taste
          </button>
          <button
            id="tab-sensory-tactile"
            onClick={() => setActiveTab('tactile')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1 ${
              activeTab === 'tactile' ? 'bg-amber-500 text-stone-950 font-semibold' : 'text-stone-400 hover:text-stone-100'
            }`}
          >
            <BedDouble className="w-3 h-3" /> Touch
          </button>
        </div>
      </div>

      {/* Grid of Sensory Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 1. OLFACTORY (SCENT) */}
        {(activeTab === 'all' || activeTab === 'olfactory') && (
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center">
                    <Wind className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold block">Sense 1 · Scent (Olfactory)</span>
                    <h4 className="font-serif text-lg text-stone-100 font-medium">{sensory.olfactory.signatureName}</h4>
                  </div>
                </div>
              </div>

              {/* Fragrance Notes */}
              <div className="space-y-2.5 mb-5">
                <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 text-xs">
                  <span className="text-[10px] text-amber-400 uppercase tracking-wider block font-semibold mb-0.5">First Impression (Top Notes)</span>
                  <p className="text-stone-300">{sensory.olfactory.topNotes.join(' · ')}</p>
                </div>
                <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 text-xs">
                  <span className="text-[10px] text-amber-400 uppercase tracking-wider block font-semibold mb-0.5">Room Heart Notes</span>
                  <p className="text-stone-300">{sensory.olfactory.heartNotes.join(' · ')}</p>
                </div>
                <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 text-xs">
                  <span className="text-[10px] text-amber-400 uppercase tracking-wider block font-semibold mb-0.5">Evening Base Notes</span>
                  <p className="text-stone-300">{sensory.olfactory.baseNotes.join(' · ')}</p>
                </div>
              </div>

              <div className="text-xs text-stone-400 space-y-2 border-t border-stone-800 pt-3">
                <div>
                  <strong className="text-stone-200 block text-[11px]">Arrival Micro-Diffusion:</strong>
                  <span>{sensory.olfactory.arrivalMist}</span>
                </div>
                <div>
                  <strong className="text-stone-200 block text-[11px]">Turn-Down Linen Pillow Spray:</strong>
                  <span>{sensory.olfactory.eveningTurnDownSpray}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-stone-400 italic">
              ✦ {sensory.olfactory.botanicalPairing}
            </div>
          </div>
        )}

        {/* 2. ACOUSTIC (SOUND) */}
        {(activeTab === 'all' || activeTab === 'acoustic') && (
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-sky-500/15 text-sky-400 flex items-center justify-center">
                    <Music className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-sky-400 font-semibold block">Sense 2 · Sound (Acoustics)</span>
                    <h4 className="font-serif text-lg text-stone-100 font-medium">{sensory.acoustic.frequencyHz} Hz Tuning</h4>
                  </div>
                </div>
              </div>

              <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800 mb-4">
                <span className="text-[10px] uppercase tracking-wider text-sky-400 font-semibold block mb-0.5">Resonance Alignment</span>
                <p className="text-xs text-stone-200 font-medium">{sensory.acoustic.frequencyLabel}</p>
                <div className="text-[11px] text-stone-400 mt-1">{sensory.acoustic.musicalArchetype}</div>
              </div>

              <div className="space-y-2.5 text-xs text-stone-400">
                <div className="bg-stone-950 p-2.5 rounded-lg border border-stone-800">
                  <strong className="text-stone-200 block text-[10px] uppercase tracking-wider">Arrival Atmosphere:</strong>
                  <span className="text-[11px]">{sensory.acoustic.arrivalSoundscape}</span>
                </div>
                <div className="bg-stone-950 p-2.5 rounded-lg border border-stone-800">
                  <strong className="text-stone-200 block text-[10px] uppercase tracking-wider">Daytime Music Selection:</strong>
                  <span className="text-[11px]">{sensory.acoustic.daytimeLandscape}</span>
                </div>
                <div className="bg-stone-950 p-2.5 rounded-lg border border-stone-800">
                  <strong className="text-stone-200 block text-[10px] uppercase tracking-wider">Night Sleep Soundscape:</strong>
                  <span className="text-[11px]">{sensory.acoustic.nightWindDown}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-stone-400">
              <strong className="text-stone-300 block text-[10px] uppercase">Instruments Used:</strong>
              {sensory.acoustic.instrumentation.join(', ')}
            </div>
          </div>
        )}

        {/* 3. VISUAL & LIGHTING */}
        {(activeTab === 'all' || activeTab === 'visual') && (
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center">
                    <Sun className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold block">Sense 3 · Light & Sight</span>
                    <h4 className="font-serif text-lg text-stone-100 font-medium">{sensory.visual.ambianceName}</h4>
                  </div>
                </div>
              </div>

              <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800 mb-4 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold block">Color Temperature (Kelvin)</span>
                  <span className="text-xs text-stone-200 font-medium">{sensory.visual.kelvinName}</span>
                </div>
                <div
                  className="w-7 h-7 rounded-full border border-white/20 shadow-md"
                  style={{ backgroundColor: sensory.visual.colorHex }}
                />
              </div>

              <div className="space-y-3 text-xs text-stone-400">
                <div>
                  <strong className="text-stone-200 block text-[11px]">Arrival Lighting Preset:</strong>
                  <p className="mt-0.5 leading-relaxed">{sensory.visual.arrivalScene}</p>
                </div>
                <div>
                  <strong className="text-stone-200 block text-[11px]">Turn-Down Bedside Glow:</strong>
                  <p className="mt-0.5 leading-relaxed">{sensory.visual.turnDownScene}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-stone-400">
              <strong className="text-stone-300 block text-[10px] uppercase">Room Textures & Sightlines:</strong>
              {sensory.visual.materialSightlines.join(' · ')}
            </div>
          </div>
        )}

        {/* 4. GUSTATORY (TASTE) */}
        {(activeTab === 'all' || activeTab === 'gustatory') && (
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-orange-500/15 text-orange-400 flex items-center justify-center">
                    <Flame className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-orange-400 font-semibold block">Sense 4 · Taste & Refreshment</span>
                    <h4 className="font-serif text-lg text-stone-100 font-medium">Welcome Pour & Bedtime Tonic</h4>
                  </div>
                </div>
              </div>

              <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800 mb-4">
                <span className="text-[10px] uppercase tracking-wider text-orange-400 font-semibold block mb-0.5">Signature Arrival Pour</span>
                <p className="text-xs text-stone-100 font-medium">{sensory.gustatory.arrivalElixir}</p>
                <p className="text-[11px] text-stone-400 mt-1">{sensory.gustatory.elixirDescription}</p>
              </div>

              <div className="space-y-3 text-xs text-stone-400">
                <div>
                  <strong className="text-stone-200 block text-[11px]">Nightly Bedside Tonic:</strong>
                  <p className="mt-0.5 leading-relaxed">{sensory.gustatory.eveningSleepTonic}</p>
                </div>
                <div>
                  <strong className="text-stone-200 block text-[11px]">Curated Mini-Bar Snacks & Drinks:</strong>
                  <p className="mt-0.5 leading-relaxed">{sensory.gustatory.bespokeMiniBar.join(' · ')}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-stone-400">
              <strong className="text-stone-300 block text-[10px] uppercase">Kitchen Pairing Idea:</strong>
              {sensory.gustatory.culinaryPairingPhilosophy}
            </div>
          </div>
        )}

        {/* 5. TACTILE (TOUCH) */}
        {(activeTab === 'all' || activeTab === 'tactile') && (
          <div className="bg-stone-900 border border-stone-800 rounded-2xl p-6 flex flex-col justify-between hover:border-amber-500/50 transition-all">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                    <BedDouble className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold block">Sense 5 · Bed Linens & Bath Touch</span>
                    <h4 className="font-serif text-lg text-stone-100 font-medium">Linen Weight & Soaking Amenities</h4>
                  </div>
                </div>
              </div>

              <div className="bg-stone-950 p-3.5 rounded-xl border border-stone-800 mb-4">
                <span className="text-[10px] uppercase tracking-wider text-emerald-400 font-semibold block mb-0.5">Linen Specification</span>
                <p className="text-xs text-stone-100 font-medium">{sensory.tactile.linenMaterial}</p>
                <p className="text-[11px] text-stone-400 mt-1">{sensory.tactile.threadCountOrWeight}</p>
              </div>

              <div className="space-y-3 text-xs text-stone-400">
                <div>
                  <strong className="text-stone-200 block text-[11px]">Robes & Loungewear:</strong>
                  <p className="mt-0.5 leading-relaxed">{sensory.tactile.robeTexture}</p>
                </div>
                <div>
                  <strong className="text-stone-200 block text-[11px]">Bath Salts & Soaking Amenity:</strong>
                  <p className="mt-0.5 leading-relaxed">{sensory.tactile.bathAmenity}</p>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-800 text-[11px] text-stone-400">
              <strong className="text-stone-300 block text-[10px] uppercase">Bedside Tactile Accent:</strong>
              {sensory.tactile.groundingObject}
            </div>
          </div>
        )}

        {/* 6. MODALITY PACING SUMMARY CARD */}
        {(activeTab === 'all') && (
          <div className="bg-stone-900 border border-amber-500/30 rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                Stay Rhythm & Surprise Timing
              </span>
              <h4 className="font-serif text-xl text-stone-100 font-medium mb-2">
                {chart.pacingPhilosophy.label}
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed mb-4">
                {chart.pacingPhilosophy.summary}
              </p>

              <div className="bg-stone-950 p-3 rounded-xl border border-stone-800 text-xs space-y-2">
                <div>
                  <span className="text-amber-400 font-semibold text-[10px] uppercase block">Service Cadence</span>
                  <span className="text-stone-200">{chart.pacingPhilosophy.cadence}</span>
                </div>
                <div>
                  <span className="text-amber-400 font-semibold text-[10px] uppercase block">Surprise Moments Delivery</span>
                  <span className="text-stone-200">{chart.pacingPhilosophy.surpriseDistribution}</span>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-stone-800 flex items-center justify-between text-xs text-amber-400">
              <span>Archetype: {chart.sunSign.hospitalityArchetype}</span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
