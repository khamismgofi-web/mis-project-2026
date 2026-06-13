import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import landingBg from '../assets/welcome-bg.jpg'; 

export default function Welcome() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // This state tracks which section information to display on screen
  const [activeSection, setActiveSection] = useState('home');

  // 1. BACKEND ROLE TRIGGER LOGIC
  // Checks if the incoming email qualifies for the Admin Dashboard layout
  const handleLoginRedirect = (email = "user@example.com") => {
    const ADMIN_EMAIL = "admin@misproject.com"; // The exact email that triggers Admin role
    
    if (email.toLowerCase() === ADMIN_EMAIL.toLowerCase()) {
      navigate('/dashboard'); // Sends to admin view
    } else {
      navigate('/login'); // Sends standard accounts to user login
    }
  };

  return (
    <div 
      className="min-h-screen flex flex-col font-sans relative"
      style={{
        backgroundImage: `url(${landingBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* GLOBAL DARK OVERLAY LAYER: Covers everything under the navbar perfectly */}
      <div className="absolute inset-0 bg-slate-950/50 pointer-events-none z-0" />

      {/* ==================== 2. INTEGRATED NAVBAR OVERLAY ==================== */}
      <nav className="relative z-50 bg-transparent border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            
            {/* Logo Text Click resets back to Main Home Text */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => setActiveSection('home')}>
              <span className="text-xl font-bold text-white tracking-tight">MIS Project</span>
            </div>

            {/* Desktop Navigation Link Buttons */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => setActiveSection('home')} className={`font-medium transition ${activeSection === 'home' ? 'text-blue-400' : 'text-white/80 hover:text-white'}`}>Home</button>
              <button onClick={() => setActiveSection('features')} className={`font-medium transition ${activeSection === 'features' ? 'text-blue-400' : 'text-white/80 hover:text-white'}`}>Features</button>
              <button onClick={() => setActiveSection('departments')} className={`font-medium transition ${activeSection === 'departments' ? 'text-blue-400' : 'text-white/80 hover:text-white'}`}>Departments</button>
              <button onClick={() => setActiveSection('contact')} className={`font-medium transition ${activeSection === 'contact' ? 'text-blue-400' : 'text-white/80 hover:text-white'}`}>Contact</button>
              <button 
                onClick={() => handleLoginRedirect("user@example.com")} 
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-medium transition shadow-md"
              >
                Sign In
              </button>
            </div>

            {/* Mobile Hamburger Menu Icon */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} type="button" className="text-white p-2">
                <svg className="h-6 width-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Panel Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md px-4 pt-2 pb-4 space-y-2 absolute w-full left-0 border-b border-white/10">
            <button onClick={() => { setActiveSection('home'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-white font-medium">Home</button>
            <button onClick={() => { setActiveSection('features'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-white font-medium">Features</button>
            <button onClick={() => { setActiveSection('departments'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-white font-medium">Departments</button>
            <button onClick={() => { setActiveSection('contact'); setIsMenuOpen(false); }} className="block w-full text-left px-3 py-2 rounded-md text-white font-medium">Contact</button>
            <button onClick={() => handleLoginRedirect("user@example.com")} className="block w-full text-center bg-blue-600 text-white py-2 rounded-lg font-medium">Sign In</button>
          </div>
        )}
      </nav>

      {/* ==================== 3. DYNAMIC CONTENT WORKSPACE ==================== */}
      <main className="relative z-10 flex-grow flex flex-col items-center justify-center px-6 text-center max-w-4xl mx-auto w-full">
        
        {/* VIEW A: MAIN DEFAULT HOME INFO */}
        {activeSection === 'home' && (
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4 drop-shadow-sm">
              Welcome to <span className="text-blue-400">MIS Project</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 mb-8 font-medium leading-relaxed drop-shadow-sm">
              Securely access your data dashboard, manage student attendance, view departments, and run system reports.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
              <button 
                onClick={() => handleLoginRedirect("user@example.com")} 
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg transition text-center hover:scale-[1.01]"
              >
                Log in
              </button>
              <button 
                onClick={() => handleLoginRedirect("admin@misproject.com")} 
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-3.5 rounded-xl border border-white/30 backdrop-blur-sm shadow-md transition text-center hover:scale-[1.01]"
              >
                Admin dashboard
              </button>
            </div>
          </div>
        )}

        {/* VIEW B: FEATURES DISPLAY VIEW (Placeholder - Edit Yourself) */}
        {activeSection === 'features' && (
          <div className="w-full bg-slate-900/60 border border-white/10 backdrop-blur-md p-8 sm:p-12 rounded-2xl text-left">
            <h2 className="text-3xl font-bold text-white mb-2">Core System Features</h2>
            <p className="text-slate-300 mb-6">Edit this area later with customer feedback metrics.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <span className="text-xl">📊</span> <span className="text-white font-semibold ml-2">Attendance Processing</span>
              </div>
              <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <span className="text-xl">🔒</span> <span className="text-white font-semibold ml-2">Role Management Gate</span>
              </div>
            </div>
          </div>
        )}

        {/* VIEW C: DEPARTMENTS DISPLAY VIEW (Placeholder - Edit Yourself) */}
        {activeSection === 'departments' && (
          <div className="w-full bg-slate-900/60 border border-white/10 backdrop-blur-md p-8 sm:p-12 rounded-2xl text-left">
            <h2 className="text-3xl font-bold text-white mb-2">Institutional Divisions</h2>
            <p className="text-slate-300 mb-6">Edit this directory list once database tables are populated.</p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-blue-600/20 border border-blue-500/30 rounded-xl text-blue-300 font-medium">Administration Node</div>
              <div className="p-4 bg-blue-600/20 border border-blue-500/30 rounded-xl text-blue-300 font-medium">Engineering Node</div>
            </div>
          </div>
        )}

        {/* VIEW D: CONTACT DISPLAY VIEW (Placeholder - Edit Yourself) */}
        {activeSection === 'contact' && (
          <div className="w-full bg-slate-900/60 border border-white/10 backdrop-blur-md p-8 sm:p-12 rounded-2xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Infrastructure Assistance Desk</h2>
            <p className="text-slate-200 text-lg mb-2">📧 network-admin@misproject.com</p>
            <p className="text-slate-400 text-sm">System response monitors operational status 24/7.</p>
          </div>
        )}

      </main>

      {/* ==================== 4. MINIMALIST FOOTER ==================== */}
      <footer className="relative z-10 bg-transparent py-4 text-center text-xs text-white/40 border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} MIS Project Management System. Enterprise Access Verified.</p>
      </footer>

    </div>
  );
}
