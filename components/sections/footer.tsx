import React from 'react';
import { 
  Twitter, 
  Github, 
  Linkedin, 
  MessageSquare, 
  Cpu, 
  Globe 
} from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-24 bg-black border-t border-white/5 relative z-10">
      <div className="w-full lg:w-[80%] mx-auto px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="flex items-center gap-4 group cursor-pointer">
              <div className="relative w-8 h-8 bg-white rounded-[4px] rotate-45 flex items-center justify-center overflow-hidden transition-all group-hover:rotate-[225deg] duration-700 shadow-xl shadow-white/20">
                <div className="w-full h-full bg-gradient-to-br from-zinc-100 via-zinc-400 to-zinc-800"></div>
              </div>
              <span className="text-white font-mono text-[12px] font-bold tracking-[0.4em] uppercase">Aether.Grid</span>
            </div>
            <p className="max-w-sm text-white/30 font-mono text-[10px] tracking-[0.2em] uppercase leading-loose">
              Defining the infrastructure layer for the next trillion dollar economy. Built on the principles of sovereignty, speed, and intelligence.
            </p>
          </div>

          <div className="space-y-6">
            <span className="text-white/60 font-mono text-[10px] tracking-[0.4em] uppercase">Protocol</span>
            <ul className="space-y-4">
              {['Marketplace', 'Whitepaper', 'Governance', 'Security'].map(item => (
                <li key={item}>
                  <a href="#" className="text-white/20 hover:text-white transition-colors font-mono text-[10px] tracking-widest uppercase">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8 text-right md:text-left">
            <div className="space-y-6">
              <span className="text-white/60 font-mono text-[10px] tracking-[0.4em] uppercase">Network Status</span>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-emerald-500 font-mono text-[9px] tracking-[0.3em] uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  Operational
                </div>
                <div className="text-white/20 font-mono text-[9px] tracking-widest uppercase">
                  Block Height: 18,421,902
                </div>
                <div className="text-white/20 font-mono text-[9px] tracking-widest uppercase">
                  TPS: 124,204
                </div>
              </div>
            </div>

            {/* Social Icons Section */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-end md:justify-start gap-5">
              {[
                { icon: <Twitter className="w-4 h-4" />, href: "#", label: "Twitter" },
                { icon: <Github className="w-4 h-4" />, href: "#", label: "Github" },
                { icon: <Linkedin className="w-4 h-4" />, href: "#", label: "LinkedIn" },
                { icon: <MessageSquare className="w-4 h-4" />, href: "#", label: "Discord" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white/40 hover:text-white hover:border-white/30 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300 shadow-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/10 font-mono text-[9px] tracking-[0.3em] uppercase">
            © 2025 Aether Foundation. All Rights Reserved.
          </div>
          <div className="flex gap-8 text-white/10 font-mono text-[9px] tracking-[0.3em] uppercase">
            <span className="hover:text-white/30 cursor-pointer">Privacy</span>
            <span className="hover:text-white/30 cursor-pointer">Terms</span>
            <span className="hover:text-white/30 cursor-pointer">Nodes</span>
          </div>
        </div>
      </div>
    </footer>
  );
};