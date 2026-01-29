import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, Users, Download, CreditCard, MessageSquare, 
  FileText, FileCode, FileType, 
  ArrowUpRight, Share2, DollarSign, Wallet,
  Activity, ShieldCheck, Terminal as TerminalIcon, Cpu, HeartPulse,
  Scan, Radio, Zap, Lock, MessageCircle, Clock, CheckCircle2, History
} from 'lucide-react';
import { ChromeGrid } from '../ui/chrome-grid';

const FlagGrid = () => {
  const countryCodes = [
    "us", "gb", "jp", "de", "fr", "in", "cn", "es", "kr", "br",
    "ca", "au", "ru", "it", "nl", "ch", "se", "no", "dk", "fi"
  ];

  const gridItems = useMemo(() => {
    const items = [...countryCodes, ...Array(20).fill(null)];
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [items[i], items[j]] = [items[j], items[i]];
    }
    return items;
  }, []);
  
  return (
    <div 
      className="grid gap-1 mt-6"
      style={{ 
        gridTemplateColumns: 'repeat(10, minmax(0, 1fr))',
      }}
    >
      {gridItems.map((code, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ 
            opacity: 1, 
            scale: 1,
            transition: { 
              delay: i * 0.01,
              duration: 0.5
            } 
          }}
          viewport={{ once: true }}
          className={`aspect-square border rounded-md flex items-center justify-center overflow-hidden p-0.5 transition-all duration-500 group/flag
            ${code 
              ? 'bg-white/[0.06] border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:border-white/50 z-10' 
              : 'bg-white/[0.01] border-white/5 opacity-20'
            }`}
        >
          {code ? (
            <img 
              src={`https://flagcdn.com/w80/${code}.png`} 
              alt="Country Flag"
              className="w-full h-full object-cover rounded-sm opacity-60 group-hover/flag:opacity-100 transition-opacity grayscale group-hover/flag:grayscale-0 duration-500"
            />
          ) : (
            <div className="w-0.5 h-0.5 rounded-full bg-white/10" />
          )}
        </motion.div>
      ))}
    </div>
  );
};

const OrbitingAffiliates = () => {
  const avatars = [
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
  ];

  return (
    <div className="relative w-full aspect-square max-w-[200px] mx-auto flex items-center justify-center">
      {/* Central Core */}
      <div className="z-20 w-12 h-12 bg-white rounded-xl rotate-45 flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.3)]">
        <div className="w-full h-full bg-gradient-to-br from-white via-zinc-400 to-zinc-900 rounded-sm"></div>
      </div>

      {/* Orbiting Ring - Resized to fit within container safety bounds */}
      <div className="absolute inset-6 border border-white/10 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.02)]"></div>

      {/* Rotating Avatars */}
      {avatars.map((src, i) => (
        <motion.div
          key={i}
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: i * -6.25 }}
          className="absolute inset-6 pointer-events-none z-10"
        >
          {/* Avatar positioning on the circle edge */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: i * -6.25 }}
              className="w-10 h-10 rounded-full border-2 border-zinc-800 overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
            >
              <img src={src} className="w-full h-full object-cover saturate-0 hover:saturate-100 transition-all duration-500" alt="Affiliate User" />
            </motion.div>
          </div>
        </motion.div>
      ))}
      
      {/* Outer Pulse */}
      <div className="absolute inset-0 border border-white/[0.02] rounded-full animate-pulse"></div>
    </div>
  );
};

const ExportCloud = () => {
  const icons = [
    { icon: <FileText className="w-4 h-4" />, label: "PDF", pos: "top-0 left-4" },
    { icon: <FileType className="w-4 h-4" />, label: "WORD", pos: "bottom-4 right-2" },
    { icon: <FileCode className="w-4 h-4" />, label: "HTML", pos: "top-8 right-0" },
  ];
  return (
    <div className="relative w-full h-32 flex items-center justify-center">
      <motion.div 
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20"
      >
        <Download className="w-6 h-6 text-white" />
      </motion.div>
      {icons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1,
            x: [0, Math.random() * 10 - 5, 0],
            y: [0, Math.random() * 10 - 5, 0]
          }}
          transition={{ duration: 3 + i, repeat: Infinity }}
          className={`absolute ${item.pos} p-2 bg-black border border-white/10 rounded-lg flex items-center gap-2 text-[8px] font-mono text-white/40 uppercase tracking-widest shadow-2xl`}
        >
          {item.icon} {item.label}
        </motion.div>
      ))}
    </div>
  );
};

const ScatteredPayments = () => {
  const logos = [
    { label: "VISA", icon: <CreditCard className="w-4 h-4" />, pos: "top-[10%] left-[5%]" },
    { label: "Stripe", className: "font-black italic tracking-tighter", pos: "bottom-[20%] left-[15%]" },
    { label: "BITCOIN", icon: <DollarSign className="w-4 h-4" />, pos: "top-[40%] right-[10%]" },
    { label: "PayPal", className: "font-bold italic", pos: "bottom-[5%] right-[20%]" },
    { label: "Apple Pay", className: "font-semibold tracking-tight", pos: "top-[15%] left-[55%]" },
    { label: "ETH", icon: <Wallet className="w-4 h-4" />, pos: "top-[60%] left-[40%]" },
  ];

  return (
    <div className="relative h-48 mt-6 w-full opacity-30 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000">
      {logos.map((logo, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -2, borderColor: "rgba(255,255,255,0.4)", backgroundColor: "rgba(255,255,255,0.08)" }}
          className={`absolute ${logo.pos} flex items-center gap-3 px-4 py-2.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md shadow-2xl transition-all duration-300`}
        >
          {logo.icon && <span className="text-white/60">{logo.icon}</span>}
          <span className={`text-[10px] font-mono tracking-widest text-white/80 uppercase ${logo.className || ''}`}>
            {logo.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

const NeuralTerminal = () => {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const eventDatabase = [
      { desc: "Request to scale cluster 0x921 solved", status: "SOLVED", tag: "SUCCESS" },
      { desc: "Analyzing abnormal latency in EU-Central node", status: "PENDING", tag: "WAITING" },
      { desc: "Neural weights successfully synced for Agent-11", status: "SOLVED", tag: "STABLE" },
      { desc: "Private vault encryption layer updated", status: "SOLVED", tag: "SUCCESS" },
      { desc: "Client API access granted to alpha tester", status: "SOLVED", tag: "SUCCESS" },
      { desc: "Node AF-2 abnormal throughput detected", status: "PENDING", tag: "ACTIVE" },
      { desc: "Enterprise mesh bridge initialized", status: "SOLVED", tag: "NOMINAL" },
      { desc: "Deployment of L2 sovereign ledger finalized", status: "SOLVED", tag: "SUCCESS" },
      { desc: "Concierge handshake with User_Mesh completed", status: "SOLVED", tag: "BONDED" },
      { desc: "Emergency reroute for node 721 sync", status: "PENDING", tag: "WAITING" }
    ];

    // Initial seeds
    setLogs(eventDatabase.slice(0, 4).map(e => `${e.desc} | ${e.status} | [${e.tag}]`));

    const interval = setInterval(() => {
      setLogs(prev => {
        const event = eventDatabase[Math.floor(Math.random() * eventDatabase.length)];
        const newLog = `${event.desc} | ${event.status} | [${event.tag}]`;
        return [...prev.slice(-3), newLog];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const [chatStep, setChatStep] = useState(0);
  const chatSequence = [
    { role: "BOT", msg: "Scanning node health..." },
    { role: "USER", msg: "Latency spike on 0xAF2" },
    { role: "BOT", msg: "Rerouting mesh traffic..." },
    { role: "BOT", msg: "Stability restored. 14ms." },
    { role: "USER", msg: "Confirmed. Thanks." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setChatStep(prev => (prev + 1) % chatSequence.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-12 flex flex-col md:flex-row items-center gap-12 w-full relative">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-32 h-32 bg-emerald-500/10 blur-[60px] rounded-full pointer-events-none" />

      {/* AI AVATAR / CORE ORB */}
      <div className="relative shrink-0 flex flex-col items-center">
        <div className="relative w-44 h-44 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-dashed border-white/10 rounded-full"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.05, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-32 h-32 rounded-full bg-gradient-to-br from-white/20 via-zinc-900 to-black border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.05)] overflow-hidden"
          >
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.1)_0%,transparent_60%)]" />
             <div className="relative flex items-center justify-center">
                <Scan className="w-10 h-10 text-white opacity-40 animate-pulse" />
                <motion.div 
                   animate={{ rotate: -360 }}
                   transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                   className="absolute inset-[-20px] border-t-2 border-emerald-500/40 rounded-full"
                />
             </div>
          </motion.div>
          <div className="absolute top-0 right-0 p-1.5 bg-black border border-white/10 rounded-lg shadow-2xl">
            <Radio className="w-3 h-3 text-emerald-400 animate-pulse" />
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center">
           <span className="text-[10px] font-mono text-white/60 tracking-[0.4em] uppercase">Concierge 1.0</span>
           <div className="flex items-center gap-2 mt-1.5">
              <span className="w-1 h-1 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-[8px] font-mono text-emerald-500/60 uppercase tracking-widest">AETHER_LINKED</span>
           </div>
        </div>
      </div>

      {/* DATA DASHBOARD */}
      <div className="flex-grow w-full space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 relative overflow-hidden group/module hover:border-white/20 transition-all">
             <div className="flex justify-between items-start mb-4">
                <CheckCircle2 className="w-4 h-4 text-emerald-400/50" />
                <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">Resolution Stats</span>
             </div>
             <div className="space-y-4">
                <div className="flex justify-between items-end">
                   <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-white/20 uppercase">Solved</span>
                      <span className="text-xl font-bold text-white tabular-nums tracking-tighter">1,284</span>
                   </div>
                   <div className="flex flex-col items-end">
                      <span className="text-[9px] font-mono text-white/20 uppercase">Pending</span>
                      <span className="text-xl font-bold text-amber-500 tabular-nums tracking-tighter">12</span>
                   </div>
                </div>
                <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                   <Clock className="w-3 h-3 text-white/30" />
                   <span className="text-[10px] font-mono text-white/60 tracking-tighter">AVG RESOLUTION: <span className="text-white">4.2m</span></span>
                </div>
             </div>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 relative overflow-hidden group/module hover:border-white/20 transition-all">
             <div className="flex justify-between items-start mb-4">
                <MessageCircle className="w-4 h-4 text-white/30" />
                <span className="text-[8px] font-mono text-white/20 uppercase tracking-[0.3em]">Live Mesh Session</span>
             </div>
             <div className="relative h-20 flex flex-col justify-center gap-3">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={chatStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col gap-1"
                  >
                    <span className={`text-[8px] font-mono tracking-widest uppercase ${chatSequence[chatStep].role === 'BOT' ? 'text-emerald-500/60' : 'text-white/40'}`}>
                      {chatSequence[chatStep].role === 'BOT' ? '● Concierge' : '○ User_Mesh'}
                    </span>
                    <p className="text-[11px] font-light text-white leading-tight italic overflow-hidden text-ellipsis whitespace-nowrap">
                      "{chatSequence[chatStep].msg}"
                    </p>
                  </motion.div>
                </AnimatePresence>
                <div className="flex gap-1">
                   <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1 h-1 bg-white/40 rounded-full" />
                   <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1 h-1 bg-white/40 rounded-full" />
                   <motion.div animate={{ opacity: [0.2, 1, 0.2] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1 h-1 bg-white/40 rounded-full" />
                </div>
             </div>
          </div>
        </div>

        {/* BOTTOM MODULE: LIVE CONSOLE TICKER - UPDATED FOR FULL WIDTH & REAL MESSAGES */}
        <div className="bg-black/60 border border-white/5 rounded-2xl p-6 font-mono relative overflow-hidden min-h-[160px]">
           <div className="absolute inset-0 pointer-events-none z-10 opacity-[0.05] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
           
           <div className="flex items-center gap-3 mb-4 opacity-40">
              <History className="w-3 h-3" />
              <span className="text-[10px] uppercase tracking-[0.4em]">Aether Status Ticker</span>
           </div>

           <div className="space-y-2 h-full overflow-hidden w-full">
             {logs.map((log, i) => {
               const parts = log.split('|');
               const description = parts[0]?.trim();
               const statusText = parts[1]?.trim();
               const tag = parts[2]?.trim().replace(/[\[\]]/g, '');

               return (
                 <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex w-full text-[10px] items-center border-b border-white/[0.03] pb-1.5 last:border-0"
                 >
                   <span className="text-white/10 shrink-0 font-bold tracking-tighter mr-4">
                     [{new Date().toLocaleTimeString([], { hour12: false })}]
                   </span>
                   <div className="flex justify-between w-full items-center">
                      <span className={`tracking-wide truncate pr-4 ${i === logs.length - 1 ? "text-white" : "text-white/40"}`}>
                        {description} | {statusText}
                      </span>
                      <span className={`px-2 py-0.5 rounded-sm text-[8px] font-bold shrink-0 ${
                        log.includes('SUCCESS') || log.includes('STABLE') || log.includes('NOMINAL') || log.includes('SOLVED') || log.includes('BONDED')
                          ? 'bg-emerald-500/10 text-emerald-500/80 border border-emerald-500/20' 
                          : 'bg-amber-500/10 text-amber-500/80 border border-amber-500/20'
                      }`}>
                        {tag}
                      </span>
                   </div>
                 </motion.div>
               );
             })}
             <div className="flex gap-2 items-center mt-2">
                <span className="w-1.5 h-3.5 bg-emerald-500/40 animate-pulse" />
                <span className="text-[9px] text-white/10 italic">listening for mesh updates...</span>
             </div>
           </div>
           
           <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-black to-transparent pointer-events-none" />
        </div>
      </div>
    </div>
  );
};

const BentoCard = ({ children, title, subtitle, className = "" }: { children?: React.ReactNode, title: string, subtitle: string, className?: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className={`relative p-8 bg-black/60 backdrop-blur-3xl border border-white/10 rounded-[2rem] flex flex-col justify-between overflow-hidden group shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${className}`}
  >
    <div className="absolute inset-0 opacity-[0.2] mix-blend-soft-light pointer-events-none -z-10" 
         style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}></div>
    <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/40 to-black/80 pointer-events-none -z-20"></div>

    <div className="relative z-10 w-full">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-medium text-white tracking-tight">{title}</h3>
        <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
      </div>
      <p className="text-xs text-white/40 leading-relaxed font-light mb-6">{subtitle}</p>
      {children}
    </div>
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
  </motion.div>
);

export const Core = () => {
  return (
    <section id="why" className="py-64 bg-black relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 z-0 opacity-40">
        <React.Suspense fallback={<div className="w-full h-full bg-black" />}>
          <ChromeGrid />
        </React.Suspense>
      </div>

      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.95)_100%)]"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] pointer-events-none bg-[length:100%_2px,3px_100%]"></div>
        <div className="absolute inset-0 opacity-[0.1] mix-blend-overlay pointer-events-none" 
             style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}></div>
      </div>

      <div className="w-full lg:w-[80%] mx-auto px-6 relative z-10">
        <div className="mb-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-6 justify-center"
          >
            <div className="h-px w-8 bg-white/20"></div>
            <span className="text-white/40 font-mono text-[10px] tracking-[0.5em] uppercase">Core Pillars</span>
            <div className="h-px w-8 bg-white/20"></div>
          </motion.div>
          <h2 className="text-5xl md:text-8xl font-light text-white tracking-tight leading-none">
            Why <span className="text-gradient-metallic italic font-serif">Aether?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BentoCard 
            className="md:col-span-2 row-span-1"
            title="Multiple Language Support" 
            subtitle="Native multi-lingual neural layers covering 40+ strategic node locations. Optimized for high-fidelity cross-border intelligence."
          >
            <FlagGrid />
          </BentoCard>

          <BentoCard 
            title="Affiliate System" 
            subtitle="Refer nodes and earn passive compute credits. Growth-fueled by a decentralized mesh network."
          >
            <OrbitingAffiliates />
            <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-mono text-white/20 uppercase tracking-widest text-center">
              <Share2 className="w-3 h-3" />
              Social Consensus
            </div>
          </BentoCard>

          <BentoCard 
            title="Seamless Export" 
            subtitle="Take your intelligence anywhere. Export generated content into professional formats instantly."
          >
            <ExportCloud />
          </BentoCard>

          <BentoCard 
            className="md:col-span-2"
            title="Payment Gateway" 
            subtitle="Integrated global settlement layer supporting Credit Cards, Stripe, and Direct Crypto Wallets with scattered node settlements."
          >
            <ScatteredPayments />
          </BentoCard>

          <BentoCard 
            className="md:col-span-3"
            title="Support Personal" 
            subtitle="A 24/7 dedicated AI concierge monitoring your node health and assisting with neural deployments via live terminal handshake."
          >
            <NeuralTerminal />
          </BentoCard>
        </div>
      </div>
    </section>
  );
};