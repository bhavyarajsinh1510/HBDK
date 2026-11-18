// Browser Web Audio API Sound Effects Synthesizer

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === "undefined") return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

export function playUnlockChime() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.12);

    gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.12);
    gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + idx * 0.12 + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.12 + 0.8);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime + idx * 0.12);
    osc.stop(ctx.currentTime + idx * 0.12 + 0.9);
  });
}

export function playErrorBuzz() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "triangle";
  osc.frequency.setValueAtTime(220, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(140, ctx.currentTime + 0.25);

  gain.gain.setValueAtTime(0.18, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.28);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(ctx.currentTime);
  osc.stop(ctx.currentTime + 0.3);
}

export function playBlowCandlesSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  // 1. Air whoosh (puff of breath) using filtered white noise
  const bufferSize = ctx.sampleRate * 0.4;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = Math.random() * 2 - 1;
  }

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.setValueAtTime(800, ctx.currentTime);
  filter.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.35);
  filter.Q.value = 1.5;

  const noiseGain = ctx.createGain();
  noiseGain.gain.setValueAtTime(0.01, ctx.currentTime);
  noiseGain.gain.linearRampToValueAtTime(0.25, ctx.currentTime + 0.08);
  noiseGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);

  noise.connect(filter);
  filter.connect(noiseGain);
  noiseGain.connect(ctx.destination);

  noise.start(ctx.currentTime);

  // 2. Sparkle bell chime following breath
  const sparkles = [880, 1174.66, 1318.51, 1760]; // A5, D6, E6, A6
  sparkles.forEach((freq, idx) => {
    const sOsc = ctx.createOscillator();
    const sGain = ctx.createGain();

    sOsc.type = "sine";
    sOsc.frequency.setValueAtTime(freq, ctx.currentTime + 0.3 + idx * 0.08);

    sGain.gain.setValueAtTime(0, ctx.currentTime + 0.3 + idx * 0.08);
    sGain.gain.linearRampToValueAtTime(0.12, ctx.currentTime + 0.3 + idx * 0.08 + 0.03);
    sGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3 + idx * 0.08 + 0.6);

    sOsc.connect(sGain);
    sGain.connect(ctx.destination);

    sOsc.start(ctx.currentTime + 0.3 + idx * 0.08);
    sOsc.stop(ctx.currentTime + 0.3 + idx * 0.08 + 0.7);
  });
}

export function playFanfareSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  // Playful royal fanfare: G4 -> C5 -> E5 -> G5
  const notes = [
    { freq: 392.0, time: 0.0, dur: 0.15 },
    { freq: 523.25, time: 0.16, dur: 0.15 },
    { freq: 659.25, time: 0.32, dur: 0.15 },
    { freq: 783.99, time: 0.48, dur: 0.45 },
    { freq: 659.25, time: 0.95, dur: 0.15 },
    { freq: 783.99, time: 1.12, dur: 0.6 },
  ];

  notes.forEach(({ freq, time, dur }) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "triangle";
    osc.frequency.setValueAtTime(freq, ctx.currentTime + time);

    gain.gain.setValueAtTime(0, ctx.currentTime + time);
    gain.gain.linearRampToValueAtTime(0.2, ctx.currentTime + time + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + time + dur);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime + time);
    osc.stop(ctx.currentTime + time + dur + 0.1);
  });
}

export function playHeartReactionSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [587.33, 739.99, 880]; // D5, F#5, A5
  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, ctx.currentTime + idx * 0.09);

    gain.gain.setValueAtTime(0, ctx.currentTime + idx * 0.09);
    gain.gain.linearRampToValueAtTime(0.15, ctx.currentTime + idx * 0.09 + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + idx * 0.09 + 0.5);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime + idx * 0.09);
    osc.stop(ctx.currentTime + idx * 0.09 + 0.6);
  });
}

