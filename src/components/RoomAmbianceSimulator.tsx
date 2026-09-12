import React, { useState, useEffect } from 'react';
import { SensorySignature, NatalChartData } from '../types';
import { audioSynthesizer } from '../services/audioSynthesizer';
import { Volume2, VolumeX, Sparkles, Wind, Sun, Moon, Flame, Shield, Eye } from 'lucide-react';

interface Props {
  sensory: SensorySignature;
  chart: NatalChartData;
}

type SceneMode = 'arrival' | 'daylight' | 'turnDown';

export const RoomAmbianceSimulator: React.FC<Props> = ({ sensory, chart }) => {
  const [sceneMode, setSceneMode] = useState<SceneMode>('arrival');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<string | null>('diffuser');

  useEffect(() => {
    return () => {
      audioSynthesizer.stop();
    };
  }, []);

  const toggleSound = () => {
    if (isPlayingAudio) {
      audioSynthesizer.stop();
      setIsPlayingAudio(false);
    } else {
      audioSynthesizer.playTone(sensory.acoustic.frequencyHz, chart.dominantElement);
      setIsPlayingAudio(true);
    }
  };

  // Adjust lighting values based on sceneMode
  const getAmbianceStyle = () => {
    if (sceneMode === 'turnDown') {
      return {
        background: 'linear-gradient(145deg, #090a0f 0%, #12131b 60%, #1c1512 100%)',
        glowColor: 'rgba(224, 109, 83, 0.15)',
        kelvinLabel: '1800K — Turn-Down Flame & Starlight',
      };
    }
    if (sceneMode === 'daylight') {
      return {
        background: 'linear-gradient(145deg, #121520 0%, #1e2433 60%, #202738 100%)',
        glowColor: 'rgba(139, 164, 181, 0.18)',
        kelvinLabel: '3800K — Morning Horizon Daylight',
      };
    }
    // Arrival mode
    return {
      background: 'linear-gradient(145deg, #0e1017 0%, #181922 60%, #241e16 100%)',
      glowColor: `${sensory.visual.colorHex}26`, // 15% opacity hex
      kelvinLabel: sensory.visual.kelvinName,
    };
  };

  const ambiance = getAmbianceStyle();

  return (
    <div className="bg-[#111219] border border-[#272938] rounded-xl overflow-hidden shadow-2xl">
      {/* Header controls */}
      <div className="flex flex-wrap items-center justify-between px-5 py-4 border-b border-[#252838] bg-[#0c0d12]/80 gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: sensory.visual.colorHex }}></span>
            <span className="text-[11px] uppercase tracking-widest text-[#c4a35a] font-semibold">Live Room Atmosphere Simulator</span>
          </div>
          <h3 className="font-serif text-lg text-[#f7f3ec] font-medium mt-0.5">
            Suite Sensory Environment · <span className="italic font-normal">{sensory.visual.ambianceName}</span>
          </h3>
        </div>

        {/* Scene preset toggles */}
        <div className="flex items-center gap-2">
          <div className="bg-[#181a24] p-1 rounded-lg border border-[#2b2e40] flex items-center gap-1">
            <button
              id="sim-mode-arrival"
              onClick={() => setSceneMode('arrival')}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-all ${
                sceneMode === 'arrival'
                  ? 'bg-[#c4a35a] text-[#0b0c10] shadow'
                  : 'text-[#9b978e] hover:text-[#f7f3ec]'
              }`}
            >
              Arrival Protocol
            </button>
            <button
              id="sim-mode-daylight"
              onClick={() => setSceneMode('daylight')}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-all flex items-center gap-1 ${
                sceneMode === 'daylight'
                  ? 'bg-[#c4a35a] text-[#0b0c10] shadow'
                  : 'text-[#9b978e] hover:text-[#f7f3ec]'
              }`}
            >
              <Sun className="w-3 h-3" /> Awakening
            </button>
            <button
              id="sim-mode-turndown"
              onClick={() => setSceneMode('turnDown')}
              className={`px-3 py-1.5 rounded text-xs font-medium transition-all flex items-center gap-1 ${
                sceneMode === 'turnDown'
                  ? 'bg-[#c4a35a] text-[#0b0c10] shadow'
                  : 'text-[#9b978e] hover:text-[#f7f3ec]'
              }`}
            >
              <Moon className="w-3 h-3" /> Turn-Down
            </button>
          </div>

          {/* Web Audio Tone Button */}
          <button
            id="sim-audio-toggle"
            onClick={toggleSound}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg border text-xs font-medium transition-all ${
              isPlayingAudio
                ? 'bg-[#c4a35a]/20 border-[#c4a35a] text-[#c4a35a] shadow-[0_0_15px_rgba(196,163,90,0.3)]'
                : 'bg-[#181a24] border-[#2b2e40] text-[#aba79c] hover:border-[#c4a35a]/50 hover:text-[#f7f3ec]'
            }`}
          >
            {isPlayingAudio ? (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-bounce text-[#c4a35a]" />
                <span>Playing {sensory.acoustic.frequencyHz}Hz</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span>Audition Acoustic Resonance</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Interactive Suite Stage Canvas */}
      <div
        className="relative w-full h-[340px] transition-all duration-1000 overflow-hidden flex items-center justify-center select-none"
        style={{ background: ambiance.background }}
      >
        {/* Soft Ambient Radiance Blob */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at 60% 40%, ${ambiance.glowColor} 0%, transparent 70%)`
          }}
        />

        {/* Minimal Architectural Backdrop Grid Lines */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Suite Architectural Silhouettes */}
        <div className="relative w-full max-w-2xl h-full flex flex-col justify-end px-8 pb-8">
          {/* Ceiling Arch Light Fixture */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 w-64 h-1 rounded-full bg-[#c4a35a]/30 shadow-[0_0_30px_#c4a35a]" />

          {/* Large Window Horizon Frame */}
          <div className="absolute top-10 right-12 w-48 h-56 rounded-t-full border border-[#2b2f42]/60 bg-gradient-to-b from-[#141824]/40 to-transparent p-3 flex flex-col justify-between overflow-hidden">
            <div className="text-[9px] uppercase tracking-widest text-[#797e93] text-center">Horizon Vista</div>
            <div className="w-full h-12 flex items-end justify-center gap-1 opacity-25">
              <span className="w-1.5 h-4 bg-[#c4a35a] rounded-t-sm"></span>
              <span className="w-1.5 h-7 bg-[#c4a35a] rounded-t-sm"></span>
              <span className="w-1.5 h-5 bg-[#c4a35a] rounded-t-sm"></span>
              <span className="w-1.5 h-9 bg-[#c4a35a] rounded-t-sm"></span>
              <span className="w-1.5 h-6 bg-[#c4a35a] rounded-t-sm"></span>
            </div>
          </div>

          {/* Centerpiece King Bed / Daybed */}
          <div className="relative z-10 w-3/4 max-w-md mx-auto bg-gradient-to-t from-[#0e0f14] to-[#1a1c26] border-t border-x border-[#2c3042] rounded-t-2xl p-6 shadow-2xl">
            {/* Pillows */}
            <div className="flex justify-center gap-3 mb-4">
              <div className="w-20 h-9 rounded-lg bg-[#252838] border border-[#373b50] shadow-inner flex items-center justify-center">
                <span className="text-[9px] text-[#8e92a8]">Pillow 1</span>
              </div>
              <div className="w-20 h-9 rounded-lg bg-[#252838] border border-[#373b50] shadow-inner flex items-center justify-center">
                <span className="text-[9px] text-[#8e92a8]">Pillow 2</span>
              </div>
            </div>

            {/* Duvet & Folded Linen Cover */}
            <div className="w-full h-24 rounded-lg bg-gradient-to-b from-[#212433] to-[#151722] border-t border-[#3b4059] p-3 flex flex-col justify-between">
              <div className="flex justify-between items-center text-[10px] text-[#a9adc4]">
                <span>{sensory.tactile.linenMaterial}</span>
                <span className="text-[#c4a35a]">{sensory.tactile.threadCountOrWeight.split(' ')[0]}</span>
              </div>
              {/* Grounding Object on Foot of Bed */}
              <div className="flex items-center gap-1.5 text-[10px] text-[#d6cdb8] bg-[#0d0e13]/60 px-2 py-1 rounded w-fit">
                <Shield className="w-3 h-3 text-[#c4a35a]" />
                <span className="truncate max-w-[200px]">{sensory.tactile.groundingObject}</span>
              </div>
            </div>
          </div>

          {/* Nightstand Table / Console */}
          <div className="absolute bottom-6 left-10 w-28 h-28 bg-[#161823] border border-[#2b2e40] rounded-xl p-2.5 flex flex-col justify-between shadow-lg z-10">
            <div className="text-[9px] uppercase tracking-wider text-[#8b8f9e]">Bedside Console</div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#c4a35a]/20 flex items-center justify-center">
                <Wind className="w-2.5 h-2.5 text-[#c4a35a]" />
              </div>
              <span className="text-[10px] text-[#f7f3ec] truncate">Diffuser</span>
            </div>
            <div className="text-[8px] text-[#787c8d] truncate">{sensory.olfactory.signatureName}</div>
          </div>

          {/* Welcome Bar / Elixir Tray */}
          <div className="absolute bottom-6 right-10 w-32 h-24 bg-[#161823] border border-[#2b2e40] rounded-xl p-2.5 flex flex-col justify-between shadow-lg z-10">
            <div className="text-[9px] uppercase tracking-wider text-[#8b8f9e]">Welcome Bar</div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-[#e06d53]/20 flex items-center justify-center">
                <Flame className="w-2.5 h-2.5 text-[#e06d53]" />
              </div>
              <span className="text-[10px] text-[#f7f3ec] truncate">Tonic Service</span>
            </div>
            <div className="text-[8px] text-[#787c8d] truncate">{sensory.gustatory.arrivalElixir}</div>
          </div>

          {/* Interactive Hotspot Trigger 1: Diffuser */}
          <button
            id="hotspot-diffuser"
            onClick={() => setActiveHotspot('diffuser')}
            className={`absolute bottom-28 left-20 w-8 h-8 rounded-full border flex items-center justify-center transition-all z-20 cursor-pointer ${
              activeHotspot === 'diffuser'
                ? 'bg-[#c4a35a] border-white text-black scale-110 shadow-[0_0_15px_#c4a35a]'
                : 'bg-[#181a24]/90 border-[#c4a35a] text-[#c4a35a] hover:scale-105'
            }`}
            title="Inspect Olfactory Diffuser"
          >
            <Wind className="w-4 h-4" />
          </button>

          {/* Interactive Hotspot Trigger 2: Linens & Sleep */}
          <button
            id="hotspot-linen"
            onClick={() => setActiveHotspot('linen')}
            className={`absolute bottom-28 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full border flex items-center justify-center transition-all z-20 cursor-pointer ${
              activeHotspot === 'linen'
                ? 'bg-[#c4a35a] border-white text-black scale-110 shadow-[0_0_15px_#c4a35a]'
                : 'bg-[#181a24]/90 border-[#c4a35a] text-[#c4a35a] hover:scale-105'
            }`}
            title="Inspect Bedding & Tactile Curation"
          >
            <Sparkles className="w-4 h-4" />
          </button>

          {/* Interactive Hotspot Trigger 3: Taste Elixir */}
          <button
            id="hotspot-elixir"
            onClick={() => setActiveHotspot('elixir')}
            className={`absolute bottom-28 right-20 w-8 h-8 rounded-full border flex items-center justify-center transition-all z-20 cursor-pointer ${
              activeHotspot === 'elixir'
                ? 'bg-[#c4a35a] border-white text-black scale-110 shadow-[0_0_15px_#c4a35a]'
                : 'bg-[#181a24]/90 border-[#c4a35a] text-[#c4a35a] hover:scale-105'
            }`}
            title="Inspect Gustatory Arrival Pour"
          >
            <Flame className="w-4 h-4" />
          </button>
        </div>

        {/* Ambient Soundwave Indicator when playing */}
        {isPlayingAudio && (
          <div className="absolute top-4 left-6 flex items-center gap-1.5 bg-[#0b0c10]/80 border border-[#c4a35a]/40 px-3 py-1.5 rounded-full backdrop-blur-md">
            <span className="w-1 h-3 bg-[#c4a35a] rounded-full animate-pulse"></span>
            <span className="w-1 h-5 bg-[#c4a35a] rounded-full animate-pulse delay-75"></span>
            <span className="w-1 h-2 bg-[#c4a35a] rounded-full animate-pulse delay-150"></span>
            <span className="w-1 h-4 bg-[#c4a35a] rounded-full animate-pulse delay-100"></span>
            <span className="text-[10px] text-[#c4a35a] ml-1 font-mono tracking-wider">{sensory.acoustic.frequencyHz}Hz</span>
          </div>
        )}
      </div>

      {/* Hotspot Detailed Drawer / Inspector Banner */}
      <div className="p-5 bg-[#141620] border-t border-[#252838]">
        {activeHotspot === 'diffuser' && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c4a35a] font-semibold">
                <Wind className="w-3.5 h-3.5" /> Olfactory Touchpoint · Suite Botanical Diffusion
              </div>
              <h4 className="font-serif text-lg text-[#f7f3ec] font-medium mt-1">
                {sensory.olfactory.signatureName}
              </h4>
              <p className="text-xs text-[#9d998e] mt-1 max-w-xl">
                Top Notes: {sensory.olfactory.topNotes.join(', ')} · Base Notes: {sensory.olfactory.baseNotes.join(', ')}
              </p>
            </div>
            <div className="bg-[#0e0f15] border border-[#2b2e40] rounded-lg p-2.5 text-xs text-right min-w-[200px]">
              <span className="text-[#84889c] block text-[10px] uppercase">Arrival Mist Protocol</span>
              <span className="text-[#e2ded4] font-medium">{sensory.olfactory.arrivalMist}</span>
            </div>
          </div>
        )}

        {activeHotspot === 'linen' && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c4a35a] font-semibold">
                <Sparkles className="w-3.5 h-3.5" /> Tactile Touchpoint · Sleep Architecture & Linens
              </div>
              <h4 className="font-serif text-lg text-[#f7f3ec] font-medium mt-1">
                {sensory.tactile.linenMaterial}
              </h4>
              <p className="text-xs text-[#9d998e] mt-1 max-w-xl">
                {sensory.tactile.threadCountOrWeight} · Robe: {sensory.tactile.robeTexture}
              </p>
            </div>
            <div className="bg-[#0e0f15] border border-[#2b2e40] rounded-lg p-2.5 text-xs text-right min-w-[200px]">
              <span className="text-[#84889c] block text-[10px] uppercase">Pillow Architecture</span>
              <span className="text-[#e2ded4] font-medium">{sensory.tactile.pillowCuration.join(' & ')}</span>
            </div>
          </div>
        )}

        {activeHotspot === 'elixir' && (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#c4a35a] font-semibold">
                <Flame className="w-3.5 h-3.5" /> Gustatory Touchpoint · Welcome Pour & Sleep Tonic
              </div>
              <h4 className="font-serif text-lg text-[#f7f3ec] font-medium mt-1">
                {sensory.gustatory.arrivalElixir}
              </h4>
              <p className="text-xs text-[#9d998e] mt-1 max-w-xl">
                {sensory.gustatory.elixirDescription}
              </p>
            </div>
            <div className="bg-[#0e0f15] border border-[#2b2e40] rounded-lg p-2.5 text-xs text-right min-w-[200px]">
              <span className="text-[#84889c] block text-[10px] uppercase">Nightly Slumber Broth</span>
              <span className="text-[#e2ded4] font-medium">{sensory.gustatory.eveningSleepTonic}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
