import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Zap, Shield, Globe, Box, Workflow } from 'lucide-react';

const featureList = [
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Neural Infrastructure",
    description: "Scale your models on high-performance compute surfaces optimized for inference."
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Liquid Markets",
    description: "Instantly trade agent capabilities and compute credits on a decentralized order book."
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Sovereign Security",
    description: "Multi-party computation ensuring agent integrity and data privacy at the edge."
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Cross-Grid Mesh",
    description: "Unified protocol bridging disparate AI clusters into a single global intelligence pool."
  },
  {
    icon: <Workflow className="w-5 h-5" />,
    title: "Autonomous Workflows",
    description: "Complex task orchestration handled entirely by autonomous neural agents."
  },
  {
    icon: <Box className="w-5 h-5" />,
    title: "Immutable History",
    description: "Every decision, transaction, and state change recorded on the Aether ledger."
  }
];

export const Features = () => {
  return (
    <section id="infrastructure" className="py-32 bg-black relative overflow-hidden">
      {/* Decorative background light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.02]">
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-500 via-transparent to-zinc-500 blur-[150px]"></div>
      </div>

      <div className="w-full lg:w-[80%] mx-auto px-6 relative z-10">
        <div className="mb-24 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/40 font-mono text-[10px] tracking-[0.5em] uppercase block"
          >
            System capabilities
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-light tracking-tight leading-tight text-white max-w-4xl"
          >
            Designed for the <br />
            <span className="text-gradient-metallic font-medium">next-gen autonomous economy.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
          {featureList.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative group perspective-1000"
            >
              {/* BACK PANEL (Static) */}
              <div className="absolute inset-0 bg-zinc-900 rounded-2xl rounded-tl-none -z-10">
                {/* Sloped Tab */}
                <div 
                  className="absolute -top-4 left-0 h-4 w-32 bg-zinc-900 transition-colors duration-500 group-hover:bg-zinc-800"
                  style={{ clipPath: 'polygon(0 0, 80% 0, 100% 100%, 0% 100%)', borderRadius: '8px 8px 0 0' }}
                />
              </div>

              {/* INNER CONTENT (Optional hint of paper) */}
              <div className="absolute inset-2 bg-white/5 rounded-xl -z-5 group-hover:-translate-y-2 transition-transform duration-500"></div>

              {/* FRONT PANEL (Tilts on Hover) */}
              <div className="relative p-8 min-h-[320px] bg-[#111] rounded-2xl flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:[transform:rotateX(-15deg)_translateY(-8px)] group-hover:bg-[#181818] origin-bottom shadow-none border-none">
                
                <div className="space-y-8">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/40 group-hover:text-white group-hover:bg-white/10 transition-all duration-500">
                    {f.icon}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-medium tracking-tight text-white">
                      {f.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed font-light">
                      {f.description}
                    </p>
                  </div>
                </div>

                {/* Footer UI */}
                <div className="pt-6 flex items-center justify-between border-t border-white/5">
                   <div className="flex gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                     <div className="w-1.5 h-1.5 rounded-full bg-white/5"></div>
                   </div>
                   <span className="text-[8px] font-mono uppercase tracking-[0.4em] text-white/20 group-hover:text-white/50 transition-colors">
                     Open Profile
                   </span>
                </div>
              </div>

              {/* Subtle accent line on the "inside" edge */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
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