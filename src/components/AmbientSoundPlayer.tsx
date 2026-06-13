import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Play, Pause, Compass, Waves, Bell } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { AMBIENT_SOUNDS } from "../data";
import { Soundscape } from "../types";

export function AmbientSoundPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeSoundId, setActiveSoundId] = useState<string>("earth-hum");
  const [volume, setVolume] = useState(0.4); // 0.0 to 1.0
  const [showDrawer, setShowDrawer] = useState(false);

  // Web Audio Refs
  const audioCtxRef = useRef<AudioContext | null>(null);
  const masterGainRef = useRef<GainNode | null>(null);
  
  // Specific voice refs
  const droneOsc1 = useRef<OscillatorNode | null>(null);
  const droneOsc2 = useRef<OscillatorNode | null>(null);
  const droneGain = useRef<GainNode | null>(null);

  const waveGain = useRef<GainNode | null>(null);
  const waveFilter = useRef<BiquadFilterNode | null>(null);
  const waveInterval = useRef<number | null>(null);

  const chimesInterval = useRef<number | null>(null);

  // Initialize Audio Context on user click
  const initAudio = () => {
    if (audioCtxRef.current) return;

    try {
      // Handle safari
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioCtx();
      audioCtxRef.current = ctx;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(volume * 0.15, ctx.currentTime); // Low baseline volume for safety
      masterGain.connect(ctx.destination);
      masterGainRef.current = masterGain;

      // Create drone nodes
      const dGain = ctx.createGain();
      dGain.gain.setValueAtTime(0, ctx.currentTime);
      dGain.connect(masterGain);
      droneGain.current = dGain;

      // Build synthesized drone (108Hz + 216Hz for thick warm chord)
      const osc1 = ctx.createOscillator();
      osc1.type = "sine";
      osc1.frequency.setValueAtTime(108, ctx.currentTime);
      osc1.connect(dGain);
      osc1.start();
      droneOsc1.current = osc1;

      const osc2 = ctx.createOscillator();
      osc2.type = "sine";
      osc2.frequency.setValueAtTime(216, ctx.currentTime);
      osc2.connect(dGain);
      osc2.start();
      droneOsc2.current = osc2;

      // Build Synthesized White Noise Wave Buffer
      const bufferSize = ctx.sampleRate * 4; // 4 seconds buffer
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noiseSource = ctx.createBufferSource();
      noiseSource.buffer = buffer;
      noiseSource.loop = true;

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(320, ctx.currentTime);
      filter.Q.setValueAtTime(1.0, ctx.currentTime);
      waveFilter.current = filter;

      const wGain = ctx.createGain();
      wGain.gain.setValueAtTime(0, ctx.currentTime);
      
      noiseSource.connect(filter);
      filter.connect(wGain);
      wGain.connect(masterGain);
      noiseSource.start();
      waveGain.current = wGain;
    } catch (e) {
      console.warn("Failed to initialize Web Audio", e);
    }
  };

  // Sync Master Volume
  useEffect(() => {
    if (masterGainRef.current && audioCtxRef.current) {
      masterGainRef.current.gain.linearRampToValueAtTime(
        volume * 0.2, // scaled down so it's always beautifully ambient
        audioCtxRef.current.currentTime + 0.1
      );
    }
  }, [volume]);

  // Handle Play/Stop and sound changing
  useEffect(() => {
    if (!audioCtxRef.current) return;

    const ctx = audioCtxRef.current;
    const now = ctx.currentTime;

    // Clear active cycles
    if (waveInterval.current) {
      window.clearInterval(waveInterval.current);
      waveInterval.current = null;
    }
    if (chimesInterval.current) {
      window.clearInterval(chimesInterval.current);
      chimesInterval.current = null;
    }

    if (!isPlaying) {
      // Fade all out slowly
      droneGain.current?.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
      waveGain.current?.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);
      return;
    }

    // Ensure audio context is running (resume if suspended)
    if (ctx.state === "suspended") {
      ctx.resume();
    }

    // Activate specific sound synthesis
    if (activeSoundId === "earth-hum") {
      // Fade out others
      waveGain.current?.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
      
      // Fade in drone
      droneGain.current?.gain.linearRampToValueAtTime(0.5, now + 1.0);
    } else if (activeSoundId === "gentle-waves") {
      // Fade out others
      droneGain.current?.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);

      // Start Ocean breathing wave cycle (Gain LFO)
      waveGain.current?.gain.setValueAtTime(0.05, now);
      let cycle = 0;
      
      const modulateOcean = () => {
        if (!audioCtxRef.current || !waveGain.current || !waveFilter.current) return;
        const curTime = audioCtxRef.current.currentTime;
        // Breathe in / breathe out every 4 seconds
        const isBreatheIn = cycle % 2 === 0;
        const targetVolume = isBreatheIn ? 0.45 : 0.08;
        const targetCutoff = isBreatheIn ? 650 : 250;

        waveGain.current.gain.exponentialRampToValueAtTime(targetVolume, curTime + 3.8);
        waveFilter.current.frequency.exponentialRampToValueAtTime(targetCutoff, curTime + 3.8);
        cycle++;
      };

      // Execute initial
      modulateOcean();
      waveInterval.current = window.setInterval(modulateOcean, 4000);
    } else if (activeSoundId === "temple-chimes") {
      // Quiet background hum so there's always something
      droneGain.current?.gain.linearRampToValueAtTime(0.08, now + 1.0);
      waveGain.current?.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);

      // Trigger random high-pitched chimes (bell)
      const playChime = () => {
        if (!audioCtxRef.current || !masterGainRef.current) return;
        const curCtx = audioCtxRef.current;
        const t = curCtx.currentTime;

        // Select a pentatonic frequency for absolute harmony
        const freqs = [392, 440, 523, 587, 659, 784, 880, 1174];
        const randomFreq = freqs[Math.floor(Math.random() * freqs.length)];

        // Synthesize bell node
        const osc = curCtx.createOscillator();
        const gain = curCtx.createGain();

        // High metallic timbre
        osc.type = "triangle";
        osc.frequency.setValueAtTime(randomFreq, t);

        // Add a clean secondary frequency to create chime ring
        const subtleRing = curCtx.createOscillator();
        const subtleGain = curCtx.createGain();
        subtleRing.type = "sine";
        subtleRing.frequency.setValueAtTime(randomFreq * 1.5, t);
        subtleGain.gain.setValueAtTime(0.08, t);

        gain.gain.setValueAtTime(0, t);
        gain.gain.linearRampToValueAtTime(0.18, t + 0.02); // Sharp strike
        gain.gain.exponentialRampToValueAtTime(0.0001, t + 4.5); // Warm slow ring decay

        osc.connect(gain);
        subtleRing.connect(subtleGain);
        subtleGain.connect(gain);

        gain.connect(masterGainRef.current);

        osc.start(t);
        osc.stop(t + 5);
        subtleRing.start(t);
        subtleRing.stop(t + 5);
      };

      // Trigger chimes periodically
      playChime();
      chimesInterval.current = window.setInterval(() => {
        // Random drift
        if (Math.random() > 0.3) {
          playChime();
        }
      }, 5000);
    }

  }, [isPlaying, activeSoundId]);

  // Clean raw oscillators on unmount
  useEffect(() => {
    return () => {
      if (waveInterval.current) window.clearInterval(waveInterval.current);
      if (chimesInterval.current) window.clearInterval(chimesInterval.current);
      
      try {
        droneOsc1.current?.stop();
        droneOsc2.current?.stop();
        audioCtxRef.current?.close();
      } catch (e) {
        // safely discard
      }
    };
  }, []);

  const togglePlayback = () => {
    initAudio();
    setIsPlaying(!isPlaying);
  };

  const selectSound = (id: string) => {
    initAudio();
    setActiveSoundId(id);
    if (!isPlaying) {
      setIsPlaying(true);
    }
  };

  // Icon switcher helper
  const renderIcon = (iconName: string, selected: boolean) => {
    const cls = `w-5 h-5 transition-transform duration-500 ${selected ? "text-earth-dark scale-110" : "text-earth-muted group-hover:scale-105"}`;
    if (iconName === "Mountain") return <Compass className={cls} />;
    if (iconName === "Waves") return <Waves className={cls} />;
    return <Bell className={cls} />;
  };

  return (
    <>
      {/* Absolute Bottom-Right Ambient floating trigger to protect our visual flow */}
      <div id="ambient-sound-widget" className="fixed bottom-6 right-6 z-40">
        <div className="flex items-center gap-2">
          {/* Audio controls bar shown on expand */}
          <AnimatePresence>
            {showDrawer && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.95 }}
                className="bg-cream-light/95 border border-cream-dark/50 shadow-lg rounded-full px-5 py-3 flex items-center gap-4 backdrop-blur-md"
              >
                {/* Visual sound level or instructions */}
                <div className="flex flex-col select-none">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-earth-muted">
                    {isPlaying ? "Suara Latar Aktif" : "Suara Latar Mati"}
                  </span>
                  <span className="text-xs font-medium text-earth-dark min-w-[130px]">
                    {AMBIENT_SOUNDS.find((s) => s.id === activeSoundId)?.name}
                  </span>
                </div>

                {/* Vertical separator */}
                <div className="h-6 w-[1px] bg-cream-dark" />

                {/* Sound pickers */}
                <div className="flex items-center gap-1.5">
                  {AMBIENT_SOUNDS.map((sound) => {
                    const selected = sound.id === activeSoundId;
                    return (
                      <button
                        key={sound.id}
                        id={`sound-select-${sound.id}`}
                        onClick={() => selectSound(sound.id)}
                        className={`p-2 rounded-full transition-all group duration-300 ${
                          selected ? "bg-cream-dark/60 border border-slate-300/20" : "hover:bg-cream-warm"
                        }`}
                        title={sound.description}
                      >
                        {renderIcon(sound.iconName, selected)}
                      </button>
                    );
                  })}
                </div>

                <div className="h-6 w-[1px] bg-cream-dark" />

                {/* Volume slider */}
                <div className="flex items-center gap-2">
                  <button 
                    id="volume-toggle-btn"
                    onClick={() => setVolume(volume === 0 ? 0.4 : 0)}
                    className="text-earth-muted hover:text-earth-dark p-1 rounded-full hover:bg-cream-warm"
                  >
                    {volume === 0 ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                  <input
                    id="ambient-volume-slider"
                    type="range"
                    min="0"
                    max="1"
                    step="0.05"
                    className="w-16 accent-earth-dark h-1 cursor-pointer bg-cream-dark rounded-lg appearance-none"
                    value={volume}
                    onChange={(e) => setVolume(parseFloat(e.target.value))}
                    title="Volume"
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Core circular button trigger */}
          <button
            id="ambient-trigger-btn"
            onClick={togglePlayback}
            onMouseEnter={() => setShowDrawer(true)}
            className={`p-4 rounded-full shadow-lg border outline-none cursor-pointer transition-all duration-500 ${
              isPlaying
                ? "bg-earth-dark border-earth-dark text-cream-light hover:bg-earth-muted"
                : "bg-cream-light border-cream-dark/60 text-earth-dark hover:bg-cream-warm hover:border-earth-dark"
            }`}
            title="Mindful Audio Escapes"
          >
            {isPlaying ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
              >
                <Compass className="w-5 h-5" />
              </motion.div>
            ) : (
              <Play className="w-5 h-5 ml-0.5" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
