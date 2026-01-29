
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { Navbar } from './components/ui/navbar';
import { Hero } from './components/sections/hero';
import { Stats } from './components/sections/stats';
import { Features } from './components/sections/features';
import { Core } from './components/sections/core';
import { Agents } from './components/sections/agents';
import { Pricing } from './components/sections/pricing';
import { FAQ } from './components/sections/faq';
import { MarqueeSandwich } from './components/sections/marquee-sandwich';
import { CTA } from './components/sections/cta';
import { Footer } from './components/sections/footer';

// Auth Pages
import { Login } from './components/auth/login';
import { Signup } from './components/auth/signup';
import { ForgotPassword } from './components/auth/forgot-password';
import { ResetPassword } from './components/auth/reset-password';

const LandingPage = () => (
  <>
    <Hero />
    <Stats />
    <Features />
    <Core />
    <Agents />
    <Pricing />
    <FAQ />
    <MarqueeSandwich />
    <CTA />
  </>
);

const ProtectedRoute = ({ children, isAuthenticated }: { children: React.ReactNode, isAuthenticated: boolean }) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

const AppContent = () => {
  localStorage.setItem('aether_auth', 'true');
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return localStorage.getItem('aether_auth') === 'true';
  });
  const location = useLocation();

  const login = () => {
    setIsAuthenticated(true);
    localStorage.setItem('aether_auth', 'true');
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('aether_auth');
  };

  // Hide footer on auth pages for a cleaner look
  const isAuthPage = ['/login', '/signup', '/forgot-password', '/reset-password'].includes(location.pathname);

  return (
    <div className="bg-black text-white relative">
      <Navbar isAuthenticated={isAuthenticated} onLogout={logout} />
      <Routes>
        <Route 
          path="/" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <LandingPage />
            </ProtectedRoute>
          } 
        />
        <Route path="/login" element={<Login onLogin={login} isAuthenticated={isAuthenticated} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        {/* Redirect unknown routes to home (which will redirect to login if needed) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;
