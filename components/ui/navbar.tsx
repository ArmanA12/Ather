
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface NavbarProps {
  isAuthenticated?: boolean;
  onLogout?: () => void;
}

const Navbar = ({ isAuthenticated, onLogout }: NavbarProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (onLogout) onLogout();
    navigate('/login');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] flex justify-between items-center px-6 md:px-12 py-8 pointer-events-none">
      <style>{`
        :root {
          --nav-premium-shadow: inset 0 1px 4px rgba(255, 255, 255, 0.1), 0 10px 0 #000, 0 25px 50px rgba(0, 0, 0, 0.9);
        }
      `}</style>

      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-1 group cursor-pointer pointer-events-auto">
        <div className="relative w-10 h-10 flex items-center justify-center">
          <div className="absolute inset-0 bg-white/10 rounded-xl blur-md group-hover:bg-white/20 transition-all duration-500"></div>
          <div className="relative w-6 h-6 bg-white rounded-[4px] rotate-45 flex items-center justify-center overflow-hidden transition-all group-hover:rotate-[225deg] duration-700 shadow-xl shadow-white/20">
             <div className="w-full h-full bg-gradient-to-br from-zinc-100 via-zinc-400 to-zinc-800"></div>
          </div>
        </div>
        <div className="flex flex-col hidden sm:flex">
          <span className="text-white font-mono text-[18px] font-bold tracking-[0.1em] uppercase leading-none">Ather</span>
        
        </div>
      </Link>
      
      {/* Premium Middle Navbar Container */}
      <div 
        className="hidden lg:flex relative items-center gap-10 bg-zinc-900/50 backdrop-blur-2xl px-12 py-3.5 rounded-full border border-white/5 p-[2px] pointer-events-auto"
        style={{ boxShadow: 'var(--nav-premium-shadow)' }}
      >
        <div className="absolute inset-[3px] pointer-events-none z-20 border-t border-white/[0.08] bg-gradient-to-b from-white/[0.03] to-transparent rounded-full" />
        
        {['Infrastructure', 'Agents', 'Pricing', 'Docs'].map((item) => (
          <a 
            key={item} 
            href={isAuthenticated ? `/#${item.toLowerCase()}` : "/login"}
            className="group relative z-30 text-white/40 hover:text-white transition-all text-[10px] font-mono tracking-[0.2em] uppercase overflow-hidden py-1"
          >
            <span className="relative z-10">{item}</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white translate-x-[-105%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </a>
        ))}
      </div>

      {/* Action Button */}
      <div className="flex items-center gap-6 pointer-events-auto">
        {isAuthenticated ? (
          <button 
            onClick={handleLogout}
            className="hidden sm:block text-white/40 hover:text-white transition-colors text-[10px] font-mono tracking-[0.2em] uppercase"
          >
            Logout
          </button>
        ) : (
          <Link to="/login" className="hidden sm:block text-white/40 hover:text-white transition-colors text-[10px] font-mono tracking-[0.2em] uppercase">
            Sign In
          </Link>
        )}
        
        {!isAuthenticated ? (
          <Link to="/signup" className="relative px-8 py-3 bg-gradient-to-br from-zinc-100 via-zinc-300 to-zinc-600 text-black text-[10px] font-mono tracking-[0.2em] uppercase transition-all rounded-full group overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] hover:scale-[1.05] active:scale-[0.95] border border-white/20">
            <span className="relative z-10 font-black">Request Entry</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform"></div>
          </Link>
        ) : (
          <div className="relative px-8 py-3 bg-white/5 backdrop-blur-md text-white text-[10px] font-mono tracking-[0.2em] uppercase rounded-full border border-white/10">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Active Node
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};

export { Navbar };
