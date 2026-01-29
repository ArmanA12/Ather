import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronRight, Terminal, ShieldCheck, Cpu, Globe } from 'lucide-react';

const faqData = [
  {
    question: "How does Aether ensure neural integrity across decentralized nodes?",
    answer: "Our proprietary Handshake Protocol v4.2 utilizes multi-party computation and zero-knowledge proofs to verify agent state transitions without exposing underlying weights or sensitive training data.",
    icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />
  },
  {
    question: "What are the minimum compute requirements for an Omni-class agent?",
    answer: "Omni-class agents require a minimum of 64GB VRAM and dedicated L2 interconnects. For optimal performance, we recommend anchoring nodes in Tier-1 clusters with sub-10ms latency thresholds.",
    icon: <Cpu className="w-5 h-5 text-indigo-400" />
  },
  {
    question: "How are settlement credits distributed in the synthetic economy?",
    answer: "Credits are settled in real-time via the Aether Ledger. Throughput is verified by neighboring nodes, and rewards are distributed using a weighted reputation-score algorithm based on compute uptime.",
    icon: <Globe className="w-5 h-5 text-white" />
  },
  {
    question: "Can existing legacy weights be migrated to the Aether Mesh?",
    answer: "Yes. Our Aether Bridge tool supports weights from most standard transformer architectures. Migration involves a distillation phase to ensure compatibility with our sovereign neural masking layers.",
    icon: <Terminal className="w-5 h-5 text-white/40" />
  }
];

export const FAQ = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % faqData.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="faq" className="py-48 bg-black relative overflow-hidden">
      {/* Technical Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="w-full lg:w-[80%] mx-auto px-6 relative z-10">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-8 bg-white/20"></div>
            <span className="text-white/40 font-mono text-[10px] tracking-[0.5em] uppercase">Knowledge Base</span>
            <div className="h-px w-8 bg-white/20"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-light tracking-tight text-white"
          >
            System <span className="opacity-40 italic font-serif">Inquiries.</span>
          </motion.h2>
        </div>

        {/* Stacked Card Container - Adjusted width and reduced height */}
        <div className="relative h-[320px] md:h-[280px] w-full max-w-5xl mx-auto perspective-1000">
          <AnimatePresence mode="popLayout">
            {[2, 1, 0].map((offset) => {
              const itemIndex = (index + offset) % faqData.length;
              const isFront = offset === 0;
              
              return (
                <motion.div
                  key={`${itemIndex}-${offset}`}
                  initial={isFront ? { opacity: 0, y: 50, scale: 0.9, rotateX: -10 } : false}
                  animate={{
                    opacity: 1,
                    y: offset * 35, // Adjusted stacking offset for reduced height
                    scale: 1 - offset * 0.04,
                    zIndex: 50 - offset,
                    rotateX: offset * -2,
                    filter: `blur(${offset * 1}px)`,
                  }}
                  exit={isFront ? { opacity: 0, x: -100, rotate: -5, scale: 0.9, transition: { duration: 0.5 } } : { opacity: 0 }}
                  transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                  className={`absolute inset-0 bg-black/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 flex flex-col justify-between overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] ${!isFront ? 'pointer-events-none' : ''}`}
                  style={{ transformOrigin: 'bottom center' }}
                >
                  {/* Subtle Texture Layer */}
                  <div 
                    className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" 
                    style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
                  />
                  <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white/[0.05] to-transparent pointer-events-none" />

                  <div className="relative z-10 flex flex-col gap-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                          {faqData[itemIndex].icon}
                        </div>
                        <span className="text-[9px] font-mono tracking-[0.4em] text-white/20 uppercase">FAQ_ENTRY_0{itemIndex + 1}</span>
                      </div>
                      <HelpCircle className="w-5 h-5 text-white/10" />
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl md:text-2xl font-medium tracking-tight text-white leading-tight">
                        {faqData[itemIndex].question}
                      </h3>
                      {isFront && (
                        <motion.p 
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-xs md:text-sm text-white/40 font-light leading-relaxed max-w-3xl"
                        >
                          {faqData[itemIndex].answer}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Peek indication / Footer */}
                  <div className="relative z-10 flex items-center justify-between border-t border-white/5 pt-4">
                    <div className="flex items-center gap-4">
                      <div className="flex -space-x-2">
                        {[0, 1, 2, 3].map((dot) => (
                          <div 
                            key={dot} 
                            className={`w-2 h-2 rounded-full border border-black transition-colors ${dot === itemIndex ? 'bg-white' : 'bg-white/10'}`} 
                          />
                        ))}
                      </div>
                      <span className="text-[9px] font-mono text-white/20 uppercase tracking-widest">Aether_Knowledge_Mesh</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-white/20" />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Ambient Bottom UI */}
        <div className="mt-32 flex flex-col items-center gap-6 opacity-30">
          <div className="h-12 w-[1px] bg-gradient-to-b from-white to-transparent" />
          <span className="text-[8px] font-mono tracking-[0.8em] uppercase">Manual Handshake Available 24/7</span>
        </div>
      </div>
      
      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};