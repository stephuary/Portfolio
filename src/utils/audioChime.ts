// Web Audio API synthesized Netflix-style deep cinematic chime
let audioCtx: AudioContext | null = null;

export function playStephuaryChime() {
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const now = audioCtx.currentTime;

    // Sub Bass Thud
    const osc1 = audioCtx.createOscillator();
    const gain1 = audioCtx.createGain();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(65, now);
    osc1.frequency.exponentialRampToValueAtTime(32, now + 0.9);

    gain1.gain.setValueAtTime(0.4, now);
    gain1.gain.exponentialRampToValueAtTime(0.001, now + 1.2);

    osc1.connect(gain1);
    gain1.connect(audioCtx.destination);
    osc1.start(now);
    osc1.stop(now + 1.3);

    // Warm Mid Resonance
    const osc2 = audioCtx.createOscillator();
    const gain2 = audioCtx.createGain();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(130, now + 0.05);
    osc2.frequency.exponentialRampToValueAtTime(65, now + 0.8);

    gain2.gain.setValueAtTime(0.25, now + 0.05);
    gain2.gain.exponentialRampToValueAtTime(0.001, now + 1.0);

    osc2.connect(gain2);
    gain2.connect(audioCtx.destination);
    osc2.start(now + 0.05);
    osc2.stop(now + 1.1);

    // Shimmering High Harmonic
    const osc3 = audioCtx.createOscillator();
    const gain3 = audioCtx.createGain();
    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(523.25, now + 0.1); // C5
    osc3.frequency.exponentialRampToValueAtTime(659.25, now + 0.4); // E5

    gain3.gain.setValueAtTime(0.08, now + 0.1);
    gain3.gain.exponentialRampToValueAtTime(0.001, now + 1.4);

    osc3.connect(gain3);
    gain3.connect(audioCtx.destination);
    osc3.start(now + 0.1);
    osc3.stop(now + 1.5);
  } catch (e) {
    // Gracefully handle browser autoplay or audio context restrictions
    console.debug('Audio chime skipped:', e);
  }
}
