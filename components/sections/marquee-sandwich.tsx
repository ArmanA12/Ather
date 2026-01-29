
import React from 'react';
import { motion } from 'framer-motion';

const agentImages = [
  "https://plus.unsplash.com/premium_photo-1769374455375-23cda1b8f406?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1769407642563-8773cc64995e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1769109001984-f1483505d625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1768845532725-d617e417fc5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzM3x8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1769109004977-607431134e25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1769021488255-c58d0b4748f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1769096913783-641f762d4a7e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3OXx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1762532986026-92782fe01fbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5MHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1768769763693-09b75c75e7f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNDZ8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1768463852001-811ead5844fb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzZ8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1768590149180-fb8b111db951?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxODN8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1768740066743-ab8b786568ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOTd8fHxlbnwwfHx8fHw%3D",
  "https://images.unsplash.com/photo-1768797767719-dad3da9a6e09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMDZ8fHxlbnwwfHx8fHw%3D"
];

export const MarqueeSandwich = () => {
  return (
    <section className="h-[50vh] md:h-[70vh] bg-black relative flex items-center justify-center overflow-hidden border-t border-white/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[30vh] bg-zinc-800/20 blur-[100px] rounded-full"></div>
      </div>

      <div className="relative w-full h-full flex items-center justify-center">
        
        {/* LAYER 1: "AET" (BEHIND THE IMAGES) */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none overflow-hidden">
          <div className="flex w-full px-[5vw]">
            <span className="text-[28vw] font-black tracking-tighter text-white opacity-[0.1] leading-none">
              AT
            </span>
          </div>
        </div>

        {/* LAYER 2: SCROLLING IMAGES SLIDER - Reduced size for better 'sandwich' framing */}
        <div className="relative z-10 w-full overflow-hidden flex items-center h-full">
          <motion.div 
            className="flex gap-6 md:gap-12 px-12"
            animate={{ x: [0, -1200] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {[...agentImages, ...agentImages, ...agentImages].map((img, i) => (
              <div 
                key={i} 
                className="relative shrink-0 w-[18vw] md:w-[11vw] aspect-[4/5] rounded-xl overflow-hidden border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] group"
              >
                <img 
                  src={img} 
                  alt="Agent Concept" 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700 scale-105 saturate-[1.1] group-hover:saturate-[1.4]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Image Masking Effect Layer */}
                <div 
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{ 
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 10 L20 10 M10 0 L10 20' stroke='white' stroke-width='0.1'/%3E%3C/svg%3E")`,
                    backgroundSize: '30px 30px'
                  }}
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* LAYER 3: "HER" (ABOVE THE IMAGES) */}
        <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none select-none overflow-hidden">
          <div className="flex w-full px-[5vw] justify-end">
            <span className="text-[28vw] font-black tracking-tighter text-white opacity-100 leading-none drop-shadow-[0_10px_60px_rgba(0,0,0,0.8)]">
              HER
            </span>
          </div>
        </div>

        {/* Cinematic Scanlines on top */}
        <div className="absolute inset-0 z-30 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[length:100%_3px] bg-[linear-gradient(to_bottom,transparent_50%,black_50%)]"></div>
      </div>

      {/* Subtle bottom identifier */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40 opacity-10 flex items-center gap-4">
        <div className="h-[1px] w-8 bg-white"></div>
        <span className="text-[8px] font-mono tracking-[0.6em] uppercase text-white">Neural Mesh Transit</span>
        <div className="h-[1px] w-8 bg-white"></div>
      </div>
    </section>
  );
};
