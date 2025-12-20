import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hireMeMailto = "mailto:dhuneshwaran4@gmail.com?subject=Interested%20in%20Hiring%20You&body=Hello%20Dhuneshwaran%2C%0A%0AI'm%20interested%20to%20Hire%20you.%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.%20Please%20let%20me%20know%20a%20convenient%20time%20for%20a%20meeting.%0A%0AThank%20you%2C%0A%5BYour%20Name%5D";

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Profile', href: '#profile' },
    { name: 'Project', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Hire Me', href: hireMeMailto, external: true },
  ];

  const handleLogoClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? `py-4 glass border-b ${isDark ? 'bg-slate-950/80' : 'bg-white/80'}` : 'py-6 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 flex justify-between items-center">
        <a 
          href="#hero" 
          onClick={handleLogoClick}
          className="flex items-center space-x-2 group"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center text-slate-900 group-hover:rotate-12 transition-transform">
            <Terminal size={24} strokeWidth={3} />
          </div>
          <span className={`text-xl font-bold tracking-tight transition-theme ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Dhuneshwaran<span className="text-cyan-500">.</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`mono text-sm transition-colors uppercase tracking-widest ${isDark ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-600 hover:text-blue-600'} ${link.name === 'Hire Me' ? 'font-bold underline decoration-cyan-500/30 underline-offset-4' : ''}`}
            >
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-lg glass transition-all hover:scale-110 active:scale-95 ${isDark ? 'text-yellow-400' : 'text-indigo-600'}`}
            aria-label="Toggle Theme"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a href="img/Dhuneshwaran V resume.pdf" className={`px-5 py-2 glass rounded-lg text-sm mono transition-colors ${isDark ? 'hover:bg-white/10' : 'hover:bg-black/5'}`}>
            Resume.pdf
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center space-x-4 md:hidden">
          <button 
            onClick={toggleTheme}
            className={`p-2 rounded-lg glass ${isDark ? 'text-yellow-400' : 'text-indigo-600'}`}
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button className={isDark ? "text-white" : "text-slate-900"} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute top-full left-0 right-0 backdrop-blur-xl border-b transition-all duration-300 ${isDark ? 'bg-slate-900/95 border-white/5' : 'bg-white/95 border-slate-200'} ${isOpen ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0 overflow-hidden'}`}>
        <div className="px-6 py-8 flex flex-col space-y-6 text-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`mono text-lg ${isDark ? 'text-slate-400 hover:text-cyan-400' : 'text-slate-600 hover:text-blue-600'}`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#" className={`py-3 glass rounded-xl mono ${isDark ? '' : 'text-slate-900'}`}>
            Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;