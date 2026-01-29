
import React, { useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { ChromeGrid } from '../ui/chrome-grid';

export const Login = ({ onLogin, isAuthenticated }: { onLogin: () => void, isAuthenticated: boolean }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      onLogin();
      setLoading(false);
      navigate('/');
    }, 1200);
  };

  return (
    <div className="min-h-screen w-full relative bg-black overflow-hidden flex items-center justify-center py-20 px-6">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <ChromeGrid />
      </div>

      {/* Cinematic Overlays */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.95)_100%)]"></div>
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
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="mb-10 text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl rotate-45 mb-8 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              <div className="w-full h-full bg-gradient-to-br from-white via-zinc-400 to-zinc-900 rounded-sm"></div>
            </div>
            <h1 className="text-3xl font-light tracking-tight text-white mb-2">Welcome back.</h1>
            <p className="text-[10px] font-mono text-white/30 uppercase tracking-[0.2em]">Authenticate to your local node</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[9px] font-mono text-white/40 uppercase tracking-[0.3em] ml-2">Email Address</label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-white/60 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <input 
                  type="email" 
                  placeholder="operator@aether.mesh" 
                  className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-white/20 focus:bg-black/60 transition-all placeholder:text-white/10"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between px-2">
                <label className="text-[9px] font-mono text-white/40 uppercase tracking-[0.3em]">Passphrase</label>
                {/* Fixed: removed invalid 'placeholder' attribute from Link component */}
                <Link to="/forgot-password" className="text-[9px] font-mono text-white/20 hover:text-white transition-colors uppercase tracking-[0.2em]">Forgot?</Link>
              </div>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-white/60 transition-colors">
                  <Lock className="w-4 h-4" />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full bg-black/40 border border-white/5 rounded-2xl py-4 pl-12 pr-4 text-sm text-white focus:outline-none focus:border-white/20 focus:bg-black/60 transition-all placeholder:text-white/10"
                  required
                />
              </div>
            </div>

            <button 
              disabled={loading}
              className="w-full group relative py-5 bg-white text-black font-mono text-[11px] font-bold tracking-[0.3em] uppercase rounded-2xl transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-2xl hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {loading ? "Establishing Handshake..." : "Sign In"} 
                {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform" />
            </button>

            <p className="text-center text-[10px] text-white/20 font-mono tracking-widest uppercase mt-8">
              No access yet? <Link to="/signup" className="text-white hover:underline transition-all">Request Deployment</Link>
            </p>
          </form>

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
