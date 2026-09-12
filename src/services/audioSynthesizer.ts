/**
 * Web Audio Ambient Sound Synthesizer for Hotel Room Acoustic Tuning
 * Generates pure harmonic sine waves, soft resonant drones, and soothing binaural textures.
 */

class RoomAudioSynthesizer {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private masterGain: GainNode | null = null;
  private oscillators: OscillatorNode[] = [];
  private filter: BiquadFilterNode | null = null;
  private lfo: OscillatorNode | null = null;
  private currentFrequency = 432;

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  }

  public playTone(targetFreq: number, element: 'Fire' | 'Earth' | 'Air' | 'Water' = 'Earth') {
    this.init();
    if (!this.ctx) return;

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    if (this.isPlaying) {
      this.stop();
    }

    this.currentFrequency = targetFreq;
    const now = this.ctx.currentTime;

    // Master gain with smooth attack
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.0001, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.25, now + 1.2);

    // Warm Low-Pass Filter to eliminate harshness
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(element === 'Air' ? 1200 : element === 'Fire' ? 900 : 700, now);
    this.filter.Q.setValueAtTime(1.5, now);

    this.filter.connect(this.masterGain);
    this.masterGain.connect(this.ctx.destination);

    // 1. Fundamental Frequency
    const osc1 = this.ctx.createOscillator();
    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(targetFreq, now);

    // 2. Sub-octave or gentle fifth
    const osc2 = this.ctx.createOscillator();
    osc2.type = 'triangle';
    osc2.frequency.setValueAtTime(targetFreq / 2, now);

    // 3. Subtle binaural detune (+1.5Hz for calming theta beat)
    const osc3 = this.ctx.createOscillator();
    osc3.type = 'sine';
    osc3.frequency.setValueAtTime(targetFreq + 1.8, now);

    // Individual Gains
    const g1 = this.ctx.createGain();
    g1.gain.value = 0.5;
    const g2 = this.ctx.createGain();
    g2.gain.value = 0.25;
    const g3 = this.ctx.createGain();
    g3.gain.value = 0.25;

    osc1.connect(g1);
    osc2.connect(g2);
    osc3.connect(g3);

    g1.connect(this.filter);
    g2.connect(this.filter);
    g3.connect(this.filter);

    // Slow organic LFO breath effect
    this.lfo = this.ctx.createOscillator();
    this.lfo.frequency.value = 0.15; // 0.15 Hz = 6.6 second breathing loop
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.value = 80;
    this.lfo.connect(lfoGain);
    lfoGain.connect(this.filter.frequency);

    osc1.start(now);
    osc2.start(now);
    osc3.start(now);
    this.lfo.start(now);

    this.oscillators = [osc1, osc2, osc3];
    this.isPlaying = true;
  }

  public stop() {
    if (!this.ctx || !this.isPlaying || !this.masterGain) return;
    const now = this.ctx.currentTime;

    this.masterGain.gain.cancelScheduledValues(now);
    this.masterGain.gain.setValueAtTime(this.masterGain.gain.value, now);
    this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

    setTimeout(() => {
      this.oscillators.forEach(osc => {
        try {
          osc.stop();
          osc.disconnect();
        } catch {
          // ignore
        }
      });
      this.oscillators = [];
      if (this.lfo) {
        try {
          this.lfo.stop();
          this.lfo.disconnect();
        } catch {
          // ignore
        }
        this.lfo = null;
      }
      this.isPlaying = false;
    }, 850);
  }

  public getStatus() {
    return {
      isPlaying: this.isPlaying,
      frequency: this.currentFrequency
    };
  }
}

export const audioSynthesizer = new RoomAudioSynthesizer();
