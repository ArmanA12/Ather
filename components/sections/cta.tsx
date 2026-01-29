import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const BackgroundElements = () => {
  const particles = useMemo(() => {
    // Increased particle count by 30% (from 25 to 33)
    return Array.from({ length: 33 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * -20,
    }));
  }, []);

  const lines = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * -10,
      duration: Math.random() * 10 + 10,
    }));
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Deep Central Spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
      
      {/* Animated Gradient Orbs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
          x: ['-10%', '10%', '-10%'],
          y: ['-10%', '10%', '-10%']
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/10 blur-[120px] rounded-full mix-blend-screen"
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.05, 0.15, 0.05],
          x: ['10%', '-10%', '10%'],
          y: ['10%', '-10%', '10%']
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-zinc-500/10 blur-[150px] rounded-full mix-blend-screen"
      />

      {/* Floating Neural Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            y: ['0vh', '-100vh'],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          className="absolute w-[1px] h-[1px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          style={{ left: `${p.x}%`, top: '100%' }}
        />
      ))}

      {/* Vertical Data Streams */}
      {lines.map((l) => (
        <motion.div
          key={l.id}
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: [0, 1, 0], opacity: [0, 0.2, 0] }}
          transition={{
            duration: l.duration,
            repeat: Infinity,
            delay: l.delay,
            ease: "easeInOut",
          }}
          className="absolute top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white to-transparent origin-top"
          style={{ left: l.left }}
        />
      ))}

      {/* Technical Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '48px 48px' }}
      />
      
      {/* Noise Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
      />
    </div>
  );
};

export const CTA = () => {
  return (
    <section className="py-64 md:py-80 bg-black relative overflow-hidden flex flex-col items-center justify-center border-t border-white/5">
      <BackgroundElements />

      <div className="relative z-10 text-center space-y-12 w-full lg:w-[80%] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-9xl font-extralight tracking-tighter text-white leading-tight">
            Ready to <span className="text-gradient-metallic font-medium italic font-serif">scale?</span>
          </h2>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-white/40 font-mono text-sm tracking-[0.3em] uppercase max-w-2xl mx-auto leading-relaxed"
        >
          Join the elite builders defining the synthetic economy. Deployment is open for early network participants.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
          className="pt-12"
        >
          <button className="group relative px-20 py-8 overflow-hidden rounded-full bg-gradient-to-br from-zinc-100 via-zinc-300 to-zinc-600 border border-white/20 transition-all duration-700 hover:scale-110 hover:shadow-[0_0_100px_rgba(255,255,255,0.5)] active:scale-95 shadow-2xl">
            <span className="relative z-10 text-black text-[14px] font-mono tracking-[0.6em] uppercase font-black">
              Initialize Protocol
            </span>
            <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]"></div>
          </button>
        </motion.div>

        {/* Technical Label */}
        <div className="pt-24 opacity-20 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-white" />
          <span className="text-[9px] font-mono tracking-[1em] uppercase">Deployment Node 0x7E1A</span>
          <div className="h-px w-12 bg-white" />
        </div>
      </div>
    </section>
  );
};