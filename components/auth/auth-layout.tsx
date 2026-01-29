import React from 'react';
import { motion } from 'framer-motion';
import { ChromeGrid } from '../ui/chrome-grid';

export const AuthLayout = ({ children, title, subtitle }: { children: React.ReactNode, title: string, subtitle: string }) => {
  return (
    <div className="min-h-screen w-full relative bg-black overflow-hidden flex items-center justify-center py-20 px-6">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <ChromeGrid />
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.9)_100%)]"></div>
        <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay" 
             style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-zinc-900/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative overflow-hidden group">
          {/* Top Metallic Bevel */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="mb-10 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl rotate-45 mb-8 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <div className="w-full h-full bg-gradient-to-br from-white via-zinc-400 to-zinc-900 rounded-sm"></div>
            </div>
            <h1 className="text-3xl font-light tracking-tight text-white mb-2">{title}</h1>
            <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">{subtitle}</p>
          </div>

          {children}

          {/* Bottom identifier */}
          <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-center gap-4 opacity-20">
            <div className="h-[1px] w-8 bg-white" />
            <span className="text-[8px] font-mono tracking-[0.4em] uppercase text-white">Neural Security Tier 1</span>
            <div className="h-[1px] w-8 bg-white" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};