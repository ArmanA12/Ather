import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, Zap, Terminal, Globe, Database, Server,
  CheckCircle2, Radio, Fingerprint, Activity,
  LayoutDashboard, Users, Settings, Bell, Search,
  TrendingUp, ArrowUpRight, Cpu, Layers,
  History, Clock, MessageCircle, Scan
} from 'lucide-react';

const AdminDashboardMockup = () => {
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => (p + 1) % 100);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Shared texture components to match "Seamless Export" style
  const TextureLayer = () => (
    <>
      {/* Grainy Noise Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.2] mix-blend-soft-light pointer-events-none -z-10" 
        style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }}
      />
      {/* Deep Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/40 to-black/80 pointer-events-none -z-20" />
    </>
  );

  return (
    <motion.div 
      initial={{ opacity: 0, rotateX: 20, rotateY: -15, scale: 0.9 }}
      whileInView={{ opacity: 1, rotateX: 12, rotateY: -8, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="relative w-full aspect-[16/9] flex group"
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* OUTER GLOW/SHADOW LAYER (Behind the dashboard) */}
      <div className="absolute inset-0 bg-white/[0.02] blur-[120px] rounded-[3rem] -z-30 pointer-events-none" />
      
      {/* SIDEBAR */}
      <div className="w-20 md:w-64 border border-white/10 bg-black/60 backdrop-blur-3xl flex flex-col p-6 hidden md:flex relative z-10 rounded-[2.5rem_0_0_2.5rem] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.8),_inset_0_1px_1px_rgba(255,255,255,0.1)]">
        <TextureLayer />
        
        <div className="flex items-center gap-3 mb-10 px-2 relative z-10">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)]">
            <div className="w-4 h-4 bg-black rounded-sm" />
          </div>
          <span className="font-mono text-xs font-bold tracking-widest text-white uppercase">Aether_Admin</span>
        </div>
        
        <div className="space-y-2 relative z-10">
          {[
            { icon: <LayoutDashboard className="w-4 h-4" />, label: "Dashboard", active: true },
            { icon: <Layers className="w-4 h-4" />, label: "Node Clusters" },
            { icon: <Activity className="w-4 h-4" />, label: "Neural Traffic" },
            { icon: <Users className="w-4 h-4" />, label: "Agent Personnel" },
            { icon: <ShieldCheck className="w-4 h-4" />, label: "Security" },
          ].map((item, i) => (
            <div key={i} className={`flex items-center gap-4 px-3 py-3 rounded-xl transition-all cursor-pointer ${item.active ? 'bg-white/10 text-white border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.4)]' : 'text-white/30 hover:text-white/60'}`}>
              {item.icon}
              <span className="text-[10px] font-mono uppercase tracking-widest">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-auto space-y-4 relative z-10">
           <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-2xl relative overflow-hidden backdrop-blur-md shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                 <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                 <span className="text-[8px] font-mono text-emerald-500 uppercase">System Nominal</span>
              </div>
              <p className="text-[9px] text-white/40 font-mono leading-tight uppercase">99.98% Efficiency across all clusters</p>
           </div>
           <div className="flex items-center gap-4 px-3 text-white/30 hover:text-white transition-colors cursor-pointer">
              <Settings className="w-4 h-4" />
              <span className="text-[10px] font-mono uppercase tracking-widest">Settings</span>
           </div>
        </div>
      </div>

      {/* MAIN VIEW AREA */}
      <div className="flex-grow flex flex-col min-w-0 relative z-10 border border-white/10 bg-black/60 backdrop-blur-3xl rounded-[0_2.5rem_2.5rem_0] border-l-0 overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.9),_inset_0_1px_1px_rgba(255,255,255,0.05)]">
        <TextureLayer />
        
        {/* TOP NAV HUD */}
        <div className="h-20 border-b border-white/10 flex items-center justify-between px-8 bg-white/[0.02] relative z-10 shadow-sm">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.3em]">Network / Cluster-01 / Deployment</span>
            <div className="flex items-center bg-white/5 rounded-full px-4 py-1.5 border border-white/10 shadow-inner">
              <Search className="w-3 h-3 text-white/20 mr-2" />
              <span className="text-[9px] font-mono text-white/20">Search nodes...</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Bell className="w-4 h-4 text-white/40 hover:text-white transition-colors cursor-pointer" />
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-zinc-500 to-zinc-900 border border-white/20 shadow-[0_5px_15px_rgba(0,0,0,0.5)]" />
          </div>
        </div>

        {/* HUD CONTENT MODULES */}
        <div className="p-8 overflow-y-auto custom-scrollbar flex-grow space-y-8 relative z-10">
          {/* STAT CARDS */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Neural Load", val: "42.8%", delta: "+4.1%", color: "text-white" },
              { label: "Active Nodes", val: "8,204", delta: "+12", color: "text-emerald-400" },
              { label: "Response Time", val: "14ms", delta: "-2ms", color: "text-white" },
              { label: "Inference/sec", val: "1.2M", delta: "+80k", color: "text-indigo-400" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/10 p-6 rounded-2xl hover:border-white/30 transition-all group/card shadow-[0_15px_40px_rgba(0,0,0,0.4)] backdrop-blur-lg relative overflow-hidden hover:shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
                <TextureLayer />
                <span className="block text-[8px] font-mono text-white/40 uppercase tracking-[0.4em] mb-4 group-hover/card:text-white/60 transition-colors relative z-10">{stat.label}</span>
                <div className="flex items-end justify-between relative z-10">
                  <span className={`text-2xl font-black tracking-tighter tabular-nums ${stat.color}`}>{stat.val}</span>
                  <span className="text-[9px] font-mono text-emerald-500">{stat.delta}</span>
                </div>
              </div>
            ))}
          </div>

          {/* GRAPH MODULE */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white/[0.03] border border-white/10 rounded-3xl p-8 relative overflow-hidden group/graph backdrop-blur-lg shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
              <TextureLayer />
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Compute Throughput</h4>
                  <span className="text-[9px] font-mono text-white/40 uppercase">Last 24 hours activity log</span>
                </div>
              </div>
              
              <div className="h-48 w-full relative z-10">
                <svg className="w-full h-full drop-shadow-[0_10px_20px_rgba(255,255,255,0.1)]" viewBox="0 0 400 100" preserveAspectRatio="none">
                  <path d="M0 80 Q 50 20 100 70 T 200 40 T 300 80 T 400 30" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 4, repeat: Infinity }}
                    d="M0 80 Q 50 20 100 70 T 200 40 T 300 80 T 400 30" 
                    fill="none" 
                    stroke="white" 
                    strokeWidth="2"
                  />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* DISTRIBUTION MODULE */}
            <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden backdrop-blur-lg shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
              <TextureLayer />
              <div className="relative z-10">
                 <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">Cluster Distribution</h4>
                 <div className="mt-8 space-y-4">
                    {[
                      { l: "Cluster-01", v: 75, h: "h-1.5", c: "bg-white shadow-[0_0_10px_rgba(255,255,255,0.3)]" },
                      { l: "Cluster-02", v: 45, h: "h-1.5", c: "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.3)]" },
                      { l: "Cluster-03", v: 90, h: "h-1.5", c: "bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.3)]" },
                    ].map((row, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between text-[9px] font-mono text-white/60 uppercase tracking-widest">
                          <span>{row.l}</span>
                          <span>{row.v}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden shadow-inner">
                          <motion.div initial={{ width: 0 }} whileInView={{ width: `${row.v}%` }} className={`h-full ${row.c}`} />
                        </div>
                      </div>
                    ))}
                 </div>
              </div>
              <button className="w-full py-4 bg-white text-black font-mono text-[9px] tracking-[0.3em] uppercase font-black rounded-xl hover:scale-[1.05] transition-all relative z-10 shadow-[0_10px_30px_rgba(255,255,255,0.15)] active:scale-95 active:shadow-none">
                Optimize Mesh
              </button>
            </div>
          </div>

          {/* TABLE MODULE */}
          <div className="bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden relative backdrop-blur-lg shadow-[0_25px_80px_rgba(0,0,0,0.6)]">
             <TextureLayer />
             <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/[0.02] relative z-10">
                <span className="text-[10px] font-mono text-white/60 uppercase tracking-[0.4em]">Global Operations Log</span>
                <TrendingUp className="w-4 h-4 text-emerald-400" />
             </div>
             <div className="overflow-x-auto relative z-10">
                <table className="w-full text-left font-mono text-[10px]">
                   <thead>
                      <tr className="text-white/40 uppercase tracking-widest border-b border-white/10">
                         <th className="px-6 py-4 font-normal">Operation ID</th>
                         <th className="px-6 py-4 font-normal">Agent_Class</th>
                         <th className="px-6 py-4 font-normal">Status</th>
                         <th className="px-6 py-4 font-normal">Timestamp</th>
                      </tr>
                   </thead>
                   <tbody className="text-white/60">
                      {[
                        { id: "TX_0x1A22", cls: "Arbitrageur", st: "SUCCESS", time: "14:22:01" },
                        { id: "TX_0xB921", cls: "Sentinel", st: "ACTIVE", time: "14:21:44" },
                        { id: "TX_0xCC09", cls: "Architect", st: "STABLE", time: "14:20:12" },
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-white/5 hover:bg-white/[0.05] transition-colors group/row cursor-default">
                           <td className="px-6 py-4 text-white/80 group-hover/row:text-white transition-colors">{row.id}</td>
                           <td className="px-6 py-4 uppercase">{row.cls}</td>
                           <td className="px-6 py-4">
                              <span className={`px-2 py-0.5 rounded-full text-[8px] border shadow-sm ${row.st === 'ACTIVE' ? 'border-amber-500/40 text-amber-400 bg-amber-500/10' : 'border-emerald-500/40 text-emerald-400 bg-emerald-500/10'}`}>
                                {row.st}
                              </span>
                           </td>
                           <td className="px-6 py-4 text-white/20">{row.time}</td>
                        </tr>
                      ))}
                   </tbody>
                </table>
             </div>
          </div>
        </div>
      </div>

      {/* AMBIENT GLOWS (PERSPECTIVE) */}
      <div className="absolute -top-10 -right-10 w-64 h-64 bg-white/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-emerald-500/15 blur-[120px] pointer-events-none rounded-full" />
    </motion.div>
  );
};

export const Agents = () => {
  return (
    <section id="agents" className="py-32 md:py-48 bg-black relative overflow-hidden min-h-screen rounded-t-[60px] md:rounded-t-[140px] border-t-2 border-white/[0.15] shadow-[0_-40px_100px_rgba(0,0,0,0.95)] mt-[-60px] md:mt-[-120px]">
      
      {/* HIGH-INTENSITY BORDER HIGHLIGHT */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none z-30" />
      
      {/* SECONDARY GLOW FOR CURVE DEPTH */}
      <div className="absolute top-[-2px] left-0 right-0 h-1 bg-white/10 blur-[4px] pointer-events-none z-20" />
      
      {/* ATMOSPHERIC TOP GLOW - PULSING */}
      <motion.div 
        animate={{ opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[85%] h-48 bg-white/20 blur-[100px] rounded-[100%] pointer-events-none -translate-y-1/2 z-10" 
      />

      {/* Refined Background ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
      </div>

      <div className="w-full lg:w-[80%] mx-auto px-6 relative z-10 pt-16 md:pt-24">
        {/* Header Section */}
        <div className="mb-24 text-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-6 mb-8"
          >
            <div className="h-[1px] w-12 bg-white/20"></div>
            <span className="text-white/40 font-mono text-[10px] tracking-[0.6em] uppercase">Autonomous Personnel</span>
            <div className="h-[1px] w-12 bg-white/20"></div>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-light tracking-tight text-white leading-none mb-12"
          >
            The <span className="text-gradient-metallic italic font-serif">Sovereign</span> Command Center.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="max-w-2xl mx-auto text-white/30 font-mono text-[10px] uppercase tracking-[0.2em] leading-relaxed"
          >
            Monitor real-time compute allocation, agent performance, and network stability across the decentralized mesh from a unified administrative surface enhanced by premium neural masking.
          </motion.p>
        </div>

        {/* Dashboard Mockup in 3D Perspective */}
        <div className="relative py-20 px-4 md:px-0 perspective-2000">
          <AdminDashboardMockup />
          
          <div className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 hidden xl:block pointer-events-none">
            <div className="flex flex-col gap-20">
               <div className="rotate-90 origin-left">
                  <span className="text-[10px] font-mono text-white/5 uppercase tracking-[1em] whitespace-nowrap">AETHER_ADMIN_v4.2.1 // CLUSTER_OMNI_SYNC</span>
               </div>
               <div className="rotate-90 origin-left mt-32">
                  <span className="text-[10px] font-mono text-white/5 uppercase tracking-[1em] whitespace-nowrap">NEURAL_INFRASTRUCTURE_SOVEREIGNTY</span>
               </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-20 flex flex-col items-center gap-8">
           <div className="flex items-center gap-4">
             <div className="w-12 h-[1px] bg-white/10" />
             <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest">Enterprise grade control</span>
             <div className="w-12 h-[1px] bg-white/10" />
           </div>
           <button className="group relative px-12 py-5 overflow-hidden rounded-full bg-gradient-to-br from-zinc-100 via-zinc-300 to-zinc-600 border border-white/20 transition-all duration-500 hover:scale-110 hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] active:scale-95 shadow-2xl">
              <span className="relative z-10 text-black text-[11px] font-mono tracking-[0.4em] uppercase font-bold">
                Deploy Control Node
              </span>
              <div className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]"></div>
           </button>
        </div>
      </div>
      <style>{`
        .perspective-2000 {
          perspective: 2000px;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
};