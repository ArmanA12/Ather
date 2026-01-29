
import React from 'react';
import { ChromeGrid } from "./ui/chrome-grid";

const DemoOne = () => {
  return (
    <div className="h-svh w-screen relative bg-black overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <ChromeGrid/>
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {/* Central Glow / Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]"></div>
        
        {/* Subtle Horizontal Scanline Effect */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[2] pointer-events-none bg-[length:100%_2px,3px_100%]"></div>
        
        {/* Grain / Noise Texture */}
        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none z-[3]" 
             style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}></div>
      </div>
      
      {/* Hero Content Area */}
      <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center items-center px-6">
        <div className="max-w-6xl text-center flex flex-col items-center">
          
          {/* Top Badge */}
          <div className="mb-8 animate-fade-in translate-y-4 opacity-0 [animation:fade-up_1s_ease-out_forwards]">
            <div className="relative group pointer-events-auto cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-zinc-800 via-white/20 to-zinc-800 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative px-6 py-2 bg-black border border-white/10 rounded-full flex items-center gap-3">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <span className="text-[9px] md:text-[10px] font-mono tracking-[0.4em] uppercase text-white/70">
                  Mainnet 1.0 <span className="text-white/20 mx-2">|</span> New Agents Deploying
                </span>
              </div>
            </div>
          </div>

          {/* Main Typography */}
          <div className="space-y-6 flex flex-col items-center">
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight text-white leading-[1.05] max-w-4xl drop-shadow-[0_0_50px_rgba(255,255,255,0.15)]">
              Decentralized <span className="opacity-40 italic font-serif">Marketplace</span> 
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-500 font-medium tracking-[-0.02em]">
                AI Powered Agents
              </span>
            </h1>

            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent my-4"></div>

            <p className="max-w-2xl text-[11px] md:text-[13px] text-white/40 font-mono tracking-[0.2em] leading-relaxed uppercase px-4">
              The premium protocol for autonomous intelligence. Seamlessly deploy, trade, and scale neural infrastructure on a reactive high-performance compute surface.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mt-12 pointer-events-auto">
            {/* Secondary Button */}
            <button className="group relative px-12 py-5 overflow-hidden rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-2xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08] hover:scale-105 active:scale-95 shadow-2xl">
              <span className="relative z-10 text-white/60 group-hover:text-white text-[11px] font-mono tracking-[0.3em] uppercase transition-colors">
                Marketplace
              </span>
              <div className="absolute inset-0 translate-y-full bg-gradient-to-t from-white/5 to-transparent transition-transform duration-500 group-hover:translate-y-0"></div>
            </button>

            {/* Primary Button */}
            <button className="group relative px-12 py-5 overflow-hidden rounded-full bg-gradient-to-br from-zinc-100 via-zinc-300 to-zinc-600 border border-white/20 transition-all duration-500 hover:scale-110 hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] active:scale-95 shadow-2xl">
              <span className="relative z-10 text-black text-[11px] font-mono tracking-[0.4em] uppercase font-bold">
                Deploy Agent
              </span>
              <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]"></div>
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 opacity-30">
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent animate-pulse"></div>
      </div>

      {/* Footer Branding */}
      <div className="absolute bottom-8 left-12 z-10 hidden lg:flex items-center gap-8">
        <div className="text-white/20 font-mono text-[9px] tracking-[0.3em] uppercase">
          Protocol: <span className="text-white/40 italic">Aether-v4.2</span>
        </div>
        <div className="h-px w-8 bg-white/10"></div>
        <div className="text-white/20 font-mono text-[9px] tracking-[0.3em] uppercase">
          Status: <span className="text-emerald-500/60 animate-pulse">Operational</span>
        </div>
      </div>
      
      <div className="absolute bottom-8 right-12 z-10 hidden lg:flex items-center gap-6 text-white/20 font-mono text-[9px] tracking-[0.3em] uppercase">
        <span className="hover:text-white/50 cursor-pointer transition-colors">Twitter</span>
        <span className="text-white/5">/</span>
        <span className="hover:text-white/50 cursor-pointer transition-colors">GitHub</span>
        <span className="text-white/5">/</span>
        <span className="hover:text-white/50 cursor-pointer transition-colors">Discord</span>
      </div>

      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export { DemoOne };
