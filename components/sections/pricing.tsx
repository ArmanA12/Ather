import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Check, Shield, Cpu, Zap } from 'lucide-react';

const plans = [
  {
    name: "Substrate",
    id: "LAYER_01",
    price: "0",
    description: "Standard infrastructure for initial agent exploration and neural testing environments.",
    features: ["100 API Request Units", "Standard Latency", "Single Agent Sync", "Public Mesh Access"],
    cta: "Initialize",
    icon: <Shield className="w-5 h-5" />,
    gradient: "from-zinc-900/40 via-zinc-950 to-black"
  },
  {
    name: "Kinetic",
    id: "LAYER_02",
    price: "99",
    description: "Production-grade compute optimized for active agent clusters and real-time inference.",
    features: ["5,000 API Request Units", "Ultra-low Latency (12ms)", "Up to 10 Agents Sync", "Priority Mesh Routing", "Dedicated Buffer"],
    cta: "Accelerate",
    popular: true,
    icon: <Zap className="w-5 h-5" />,
    gradient: "from-zinc-800/20 via-zinc-950 to-black"
  },
  {
    name: "Omni",
    id: "LAYER_03",
    price: "499",
    description: "Unrestricted sovereign compute for autonomous synthetic economies and global swarms.",
    features: ["Unlimited Request Units", "Zero-latency Pipeline", "Unlimited Agent Swarms", "Custom Neural Sovereignty", "White-glove Support"],
    cta: "Ascend",
    icon: <Cpu className="w-5 h-5" />,
    gradient: "from-zinc-900/40 via-zinc-950 to-black"
  }
];

const NeuralFiberEffect = () => {
  const fibers = useMemo(() => {
    return Array.from({ length: 120 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      height: Math.floor(Math.random() * 400) + 50, // Random height between 50px and 450px
      opacity: Math.random() * 0.5 + 0.05, // Varied highlights
      delay: Math.random() * 2,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-[500px] pointer-events-none overflow-hidden z-0">
      {fibers.map((f) => (
        <motion.div
          key={f.id}
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: f.opacity, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ 
            duration: f.duration, 
            delay: f.delay, 
            ease: "easeOut" 
          }}
          className="absolute top-0 origin-top"
          style={{
            left: f.left,
            width: '1px',
            height: `${f.height}px`,
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,0.1) 40%, transparent)',
            boxShadow: Math.random() > 0.8 ? '0 0 10px rgba(255,255,255,0.3)' : 'none',
          }}
        />
      ))}
    </div>
  );
};

export const Pricing = () => {
  return (
    <section id="pricing" className="py-32 bg-black relative overflow-hidden">
      {/* Premium Neural Fiber Effect */}
      <NeuralFiberEffect />

      {/* Background Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`, backgroundSize: '40px 40px' }}></div>

      <div className="w-full lg:w-[80%] mx-auto px-6 relative z-10">
        <div className="mb-24 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-white/40 font-mono text-[10px] tracking-[0.5em] uppercase block mb-4"
          >
            Resource Allocation
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-7xl font-light tracking-tight leading-tight text-white"
          >
            Choose your <span className="opacity-40 italic font-serif">infrastructure</span> layer.
          </motion.h2>
        </div>

        {/* 3-Column Seamless Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-y border-white/10 bg-black overflow-hidden">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className={`relative p-10 md:p-16 flex flex-col justify-between transition-all duration-700 group
                ${i !== 2 ? 'lg:border-r border-white/10' : ''}
                ${i < 2 ? 'border-b lg:border-b-0 border-white/10' : ''}
              `}
            >
              {/* Box Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} -z-10`} />

              {/* IMAGE MASKING: Subtle Technical Pattern */}
              <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10"
                style={{ 
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30 L60 30 M30 0 L30 60' stroke='white' stroke-width='0.2'/%3E%3C/svg%3E")`,
                  backgroundSize: '120px 120px',
                  maskImage: 'linear-gradient(to bottom, black, transparent)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)'
                }}
              />

              <div className="space-y-12">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white transition-all">
                      {plan.icon}
                    </div>
                    <div>
                      <span className="block text-white/20 font-mono text-[9px] tracking-widest uppercase mb-1">{plan.id}</span>
                      <h3 className="text-2xl font-bold tracking-tight text-white">{plan.name}</h3>
                    </div>
                  </div>
                  {plan.popular && (
                    <span className="px-3 py-1 bg-white text-black text-[8px] font-mono font-black tracking-widest uppercase rounded-full">
                      Optimized
                    </span>
                  )}
                </div>

                <div className="space-y-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-6xl font-black tracking-tighter text-white tabular-nums">${plan.price}</span>
                    <span className="text-white/20 font-mono text-[10px] uppercase tracking-widest">/mo</span>
                  </div>
                  <p className="text-sm text-white/40 font-light leading-relaxed min-h-[4rem]">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/5">
                  <span className="block text-[9px] font-mono tracking-[0.3em] uppercase text-white/20 mb-6">Allocation Details</span>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-4 group/feat">
                      <Check className="w-3 h-3 text-white/10 group-hover/feat:text-white transition-colors" strokeWidth={4} />
                      <span className="text-[10px] font-mono tracking-widest text-white/40 group-hover/feat:text-white/70 transition-colors uppercase">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-16">
                <button className={`w-full py-5 rounded-xl font-mono text-[10px] tracking-[0.4em] uppercase font-black transition-all duration-500 border relative overflow-hidden group/btn ${
                  plan.popular ? 'bg-white text-black border-white' : 'bg-transparent text-white border-white/10 hover:border-white/40'
                }`}>
                  <span className="relative z-10">{plan.cta} Protocol</span>
                  <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover/btn:translate-x-[100%]"></div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};