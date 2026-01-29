import React, { useEffect, useRef } from 'react';
import { motion, useSpring, useTransform, useInView } from 'framer-motion';

const Counter = ({ value, duration = 2, delay = 0 }: { value: string, duration?: number, delay?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  // Parse the number and the surrounding strings (prefix/suffix)
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const prefix = value.match(/^\D+/)?.[0] || '';
  const suffix = value.match(/[a-zA-Z+%]+$/)?.[0] || '';
  const isFloat = value.includes('.');

  const spring = useSpring(0, {
    stiffness: 45,
    damping: 15,
    restDelta: 0.001
  });

  const display = useTransform(spring, (current) => {
    const formatted = isFloat ? current.toFixed(1) : Math.floor(current).toLocaleString();
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        spring.set(numericValue);
      }, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, numericValue, spring, delay]);

  return <motion.span ref={ref}>{display}</motion.span>;
};

const stats = [
  { label: 'Network Latency', value: '12ms', sub: 'Nodes globally synced' },
  { label: 'Active Agents', value: '4.2k+', sub: 'Running in the grid' },
  { label: 'Market Volume', value: '$840M', sub: 'Total value exchanged' },
  { label: 'Compute Power', value: '92.4 PH', sub: 'Available infrastructure' },
];

export const Stats = () => {
  return (
    <section className="py-24 bg-black border-y border-white/5 overflow-hidden">
      <div className="w-full lg:w-[80%] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col gap-2"
            >
              <div className="h-px w-8 bg-zinc-800 mb-4"></div>
              <span className="text-white font-mono text-3xl md:text-5xl font-bold tracking-tighter tabular-nums">
                <Counter value={stat.value} delay={i * 0.1} />
              </span>
              <div className="flex flex-col">
                <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-white/60">
                  {stat.label}
                </span>
                <span className="text-[9px] font-mono tracking-widest uppercase text-white/20 mt-1">
                  {stat.sub}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Decorative Ticker */}
      <div className="mt-20 flex gap-20 overflow-hidden opacity-10 whitespace-nowrap">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-20 animate-marquee">
             <span className="text-4xl font-mono tracking-[0.8em] uppercase">Processing Blocks 0x82f...a1</span>
             <span className="text-4xl font-mono tracking-[0.8em] uppercase">Syncing Neural Weights</span>
             <span className="text-4xl font-mono tracking-[0.8em] uppercase">Validating Agent Consensus</span>
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};