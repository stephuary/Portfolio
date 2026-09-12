import React, { useState } from 'react';
import { SensorySignature, NatalChartData, GuestProfile } from '../types';
import { audioSynthesizer } from '../services/audioSynthesizer';
import { Moon, Sun, Wind, Bell, Sparkles, Coffee, Heart, Check, Compass, Volume2 } from 'lucide-react';

interface Props {
  profile: GuestProfile;
  chart: NatalChartData;
  sensory: SensorySignature;
}

export const InRoomTabletView: React.FC<Props> = ({ profile, chart, sensory }) => {
  const [activePreset, setActivePreset] = useState<'wake' | 'focus' | 'rest'>('rest');
  const [requestedServices, setRequestedServices] = useState<string[]>([]);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const handleRequestService = (serviceId: string) => {
    if (requestedServices.includes(serviceId)) {
      setRequestedServices(requestedServices.filter(id => id !== serviceId));
    } else {
      setRequestedServices([...requestedServices, serviceId]);
    }
  };

  const toggleSound = () => {
    if (isPlayingAudio) {
      audioSynthesizer.stop();
      setIsPlayingAudio(false);
    } else {
      audioSynthesizer.playTone(sensory.acoustic.frequencyHz, chart.dominantElement);
      setIsPlayingAudio(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Tablet Device Frame */}
      <div className="bg-[#0e0f14] border-4 border-[#2c2f40] rounded-3xl p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
        {/* Tablet Top Status Bar */}
        <div className="flex items-center justify-between border-b border-[#222533] pb-4 mb-6 text-xs text-[#7f8396]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3cd070] animate-pulse"></span>
            <span className="font-mono text-[11px] text-[#e0ded8]">SUITE CONCIERGE OS · V4.2</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#c4a35a] font-serif">{profile.roomNumber}</span>
            <span>·</span>
            <span>{profile.arrivalTime}</span>
          </div>
        </div>

        {/* Personalized Welcome Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-gradient-to-r from-[#171924] to-[#12141c] p-6 rounded-2xl border border-[#272a3b] mb-6">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c4a35a] font-semibold mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Welcome to Your Personal Sanctuary</span>
            </div>
            <h2 className="font-serif text-3xl text-[#f7f3ec] font-normal">
              Good Evening, <span className="text-[#c4a35a] font-medium">{profile.name}</span>
            </h2>
            <p className="text-xs text-[#9d998e] mt-1">
              Your room environment is actively calibrated to your <strong>{chart.sunSign.name} Sun · {chart.dominantElement} Element</strong> coordinates.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              id="tablet-sound-toggle"
              onClick={toggleSound}
              className={`p-3 rounded-xl border flex items-center gap-2 text-xs transition-all ${
                isPlayingAudio
                  ? 'bg-[#c4a35a] text-[#0b0c10] border-[#c4a35a] font-semibold'
                  : 'bg-[#181a26] text-[#c4a35a] border-[#2e3245] hover:border-[#c4a35a]'
              }`}
            >
              <Volume2 className="w-4 h-4" />
              <span>{isPlayingAudio ? 'Sound Playing' : 'Room Harmony'}</span>
            </button>
          </div>
        </div>

        {/* Room Environmental Control Presets */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs uppercase tracking-wider text-[#9d998e] font-semibold">
              Instant Ambient Atmosphere Presets
            </span>
            <span className="text-[11px] text-[#c4a35a]">Active Scene: {activePreset.toUpperCase()}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <button
              id="preset-wake"
              onClick={() => setActivePreset('wake')}
              className={`p-4 rounded-xl border text-left transition-all ${
                activePreset === 'wake'
                  ? 'bg-[#c4a35a]/15 border-[#c4a35a] shadow-[0_0_15px_rgba(196,163,90,0.15)]'
                  : 'bg-[#141620] border-[#252838] hover:bg-[#1a1c29]'
              }`}
            >
              <Sun className="w-5 h-5 text-[#e6a147] mb-2" />
              <div className="font-serif text-base text-[#f7f3ec] font-medium">Solar Awakening</div>
              <div className="text-[11px] text-[#8e8a7f] mt-1">3400K daylight, uplifting citrus mist, gentle strings.</div>
            </button>

            <button
              id="preset-focus"
              onClick={() => setActivePreset('focus')}
              className={`p-4 rounded-xl border text-left transition-all ${
                activePreset === 'focus'
                  ? 'bg-[#c4a35a]/15 border-[#c4a35a] shadow-[0_0_15px_rgba(196,163,90,0.15)]'
                  : 'bg-[#141620] border-[#252838] hover:bg-[#1a1c29]'
              }`}
            >
              <Wind className="w-5 h-5 text-[#8ba4b5] mb-2" />
              <div className="font-serif text-base text-[#f7f3ec] font-medium">Creative Flow</div>
              <div className="text-[11px] text-[#8e8a7f] mt-1">Filtered amber light, {sensory.olfactory.signatureName.split('&')[0]}, steady acoustic resonance.</div>
            </button>

            <button
              id="preset-rest"
              onClick={() => setActivePreset('rest')}
              className={`p-4 rounded-xl border text-left transition-all ${
                activePreset === 'rest'
                  ? 'bg-[#c4a35a]/15 border-[#c4a35a] shadow-[0_0_15px_rgba(196,163,90,0.15)]'
                  : 'bg-[#141620] border-[#252838] hover:bg-[#1a1c29]'
              }`}
            >
              <Moon className="w-5 h-5 text-[#5b7c99] mb-2" />
              <div className="font-serif text-base text-[#f7f3ec] font-medium">Nocturnal Sanctuary</div>
              <div className="text-[11px] text-[#8e8a7f] mt-1">1800K candle glow, sleep mist, 528Hz Delta frequency.</div>
            </button>
          </div>
        </div>

        {/* Two Columns: Daily Astral Timeline & One-Touch Concierge Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column 1: Today's Bespoke Itinerary */}
          <div className="bg-[#13151f] border border-[#262839] rounded-xl p-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c4a35a] font-semibold mb-4">
              <Compass className="w-4 h-4" />
              <span>Today's Astrological Itinerary</span>
            </div>

            <div className="space-y-4 text-xs">
              <div className="flex items-start gap-3 border-l-2 border-[#c4a35a] pl-3 py-1">
                <span className="text-[10px] font-mono text-[#8e8a7f] mt-0.5">17:00</span>
                <div>
                  <div className="text-[#f5f1e8] font-medium">Arrival Elixir & Sacred Key Handover</div>
                  <div className="text-[#8e8a7f] mt-0.5">{sensory.gustatory.arrivalElixir} served in-suite.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 border-l-2 border-[#5b7c99] pl-3 py-1">
                <span className="text-[10px] font-mono text-[#8e8a7f] mt-0.5">19:30</span>
                <div>
                  <div className="text-[#f5f1e8] font-medium">Astrological Chef Dinner Tasting</div>
                  <div className="text-[#8e8a7f] mt-0.5">Unlisted amuse-bouche pairing formulated for {chart.dominantElement} palates.</div>
                </div>
              </div>

              <div className="flex items-start gap-3 border-l-2 border-[#e06d53] pl-3 py-1">
                <span className="text-[10px] font-mono text-[#8e8a7f] mt-0.5">21:45</span>
                <div>
                  <div className="text-[#f5f1e8] font-medium">Elemental Turn-Down Ritual</div>
                  <div className="text-[#8e8a7f] mt-0.5">{sensory.gustatory.eveningSleepTonic} delivered to bedside console.</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: In-Room Butler & Sensory Rituals Request */}
          <div className="bg-[#13151f] border border-[#262839] rounded-xl p-5">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c4a35a] font-semibold mb-4">
              <Bell className="w-4 h-4" />
              <span>One-Touch Bespoke Service Calls</span>
            </div>

            <div className="space-y-2.5">
              {[
                {
                  id: 'service-tonic',
                  label: 'Deliver Bedside Sleep Tonic',
                  sub: sensory.gustatory.eveningSleepTonic
                },
                {
                  id: 'service-pillow',
                  label: 'Adjust Pillow Architecture',
                  sub: `Request alternate: ${sensory.tactile.pillowCuration[1] || 'Latex Core'}`
                },
                {
                  id: 'service-bath',
                  label: 'Draw Elemental Herbal Bath',
                  sub: sensory.tactile.bathAmenity
                },
                {
                  id: 'service-concierge',
                  label: 'Consult Resident Astrologer',
                  sub: '15-min in-person transit reading with tea'
                }
              ].map((service) => {
                const isRequested = requestedServices.includes(service.id);
                return (
                  <button
                    key={service.id}
                    onClick={() => handleRequestService(service.id)}
                    className={`w-full p-3 rounded-lg border text-left flex items-center justify-between transition-all ${
                      isRequested
                        ? 'bg-[#3cd070]/10 border-[#3cd070] text-[#f5f1e8]'
                        : 'bg-[#181a26] border-[#282b3d] hover:border-[#c4a35a]/50 text-[#c8c5bc]'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-medium">{service.label}</div>
                      <div className="text-[10px] text-[#84889c] mt-0.5">{service.sub}</div>
                    </div>
                    <div className="w-5 h-5 rounded-full border border-current flex items-center justify-center shrink-0">
                      {isRequested ? <Check className="w-3 h-3 text-[#3cd070]" /> : <span className="text-[10px]">+</span>}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
