import React from 'react';
import { ChromeGrid } from "../ui/chrome-grid";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="home" className="h-screen w-full relative bg-black overflow-hidden flex items-center justify-center">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <ChromeGrid/>
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.8)_100%)]"></div>
        <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" 
             style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}></div>
      </div>
      
      {/* Hero Content Area */}
      <div className="relative z-10 pointer-events-none flex flex-col justify-center items-center px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-6xl text-center flex flex-col items-center"
        >
          {/* Top Badge */}
          <div className="mb-10">
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
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-extralight tracking-tight text-white leading-[0.95] max-w-5xl drop-shadow-[0_0_50px_rgba(255,255,255,0.15)]">
              The <span className="opacity-40 italic font-serif">Autonomous</span> 
              <br />
              <span className="text-gradient-metallic font-medium tracking-[-0.03em]">
                Compute Layer
              </span>
            </h1>

            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>

            <p className="max-w-xl text-[11px] md:text-[13px] text-white/40 font-mono tracking-[0.2em] leading-relaxed uppercase px-4">
              Premium decentralized infrastructure for next-gen agents. Scalable neural surfaces for the synthetic economy.
            </p>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 mt-16 pointer-events-auto">
            <button className="group relative px-12 py-5 overflow-hidden rounded-full border border-white/5 bg-white/[0.03] backdrop-blur-2xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08] hover:scale-105 active:scale-95 shadow-2xl">
              <span className="relative z-10 text-white/60 group-hover:text-white text-[11px] font-mono tracking-[0.3em] uppercase transition-colors">
                View Protocol
              </span>
              <div className="absolute inset-0 translate-y-full bg-gradient-to-t from-white/5 to-transparent transition-transform duration-500 group-hover:translate-y-0"></div>
            </button>

            <button className="group relative px-12 py-5 overflow-hidden rounded-full bg-gradient-to-br from-zinc-100 via-zinc-300 to-zinc-600 border border-white/20 transition-all duration-500 hover:scale-110 hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] active:scale-95 shadow-2xl">
              <span className="relative z-10 text-black text-[11px] font-mono tracking-[0.4em] uppercase font-bold">
                Enter Grid
              </span>
              <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]"></div>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4 opacity-30">
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent animate-pulse"></div>
      </div>
    </section>
  );
};