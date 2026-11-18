// Procedural Web Audio Ambient Music Engine
// Upbeat Birthday Celebration Soundtrack - Zero network dependency

class AmbientMusicEngine {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private timerId: number | null = null;
  private currentStep: number = 0;

  // Upbeat, bright C-Major / F-Major celebratory progression
  private chords = [
    [261.63, 329.63, 392.0, 523.25], // C Major
    [220.0, 261.63, 329.63, 440.0],  // A Minor
    [174.61, 220.0, 261.63, 349.23], // F Major
    [196.0, 246.94, 293.66, 392.0],  // G Major
  ];

  private initContext() {
    if (this.ctx) return;
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      this.ctx = new AudioContextClass();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.2, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
  }

  public play() {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    if (this.isPlaying) return;

    this.isPlaying = true;
    this.masterGain.gain.linearRampToValueAtTime(0.25, this.ctx.currentTime + 1);
    this.scheduleNextBar();
  }

  public pause() {
    if (!this.isPlaying) return;
    this.isPlaying = false;
    if (this.timerId !== null) {
      window.clearTimeout(this.timerId);
      this.timerId = null;
    }
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.6);
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  private scheduleNextBar() {
    if (!this.isPlaying || !this.ctx || !this.masterGain) return;

    const chord = this.chords[this.currentStep % this.chords.length];
    this.currentStep++;

    const now = this.ctx.currentTime;
    const barDuration = 2.4;

    // Play gentle warm pad
    chord.forEach((freq, i) => {
      if (!this.ctx || !this.masterGain) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);

      const attack = 0.3;
      const decay = barDuration - attack;
      const maxVol = 0.05;

      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(maxVol, now + attack);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + attack + decay);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + barDuration + 0.1);

      // Charming rhythmic celesta arpeggios
      const arpTime = now + (i * 0.4);
      const arpOsc = this.ctx.createOscillator();
      const arpGain = this.ctx.createGain();

      arpOsc.type = "sine";
      arpOsc.frequency.setValueAtTime(freq * 2, arpTime);

      arpGain.gain.setValueAtTime(0, arpTime);
      arpGain.gain.linearRampToValueAtTime(0.04, arpTime + 0.05);
      arpGain.gain.exponentialRampToValueAtTime(0.0001, arpTime + 0.5);

      arpOsc.connect(arpGain);
      arpGain.connect(this.masterGain);

      arpOsc.start(arpTime);
      arpOsc.stop(arpTime + 0.6);
    });

    this.timerId = window.setTimeout(() => {
      this.scheduleNextBar();
    }, barDuration * 950);
  }
}

export const ambientMusic = new AmbientMusicEngine();
