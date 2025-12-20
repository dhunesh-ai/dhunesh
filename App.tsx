import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import ProfessionalProfile from './components/ProfessionalProfile';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Background from './components/Background';
import { Github, Linkedin, Youtube, Database, Code } from 'lucide-react';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <div className={`min-h-screen transition-theme ${isDark ? 'theme-dark bg-slate-950 text-slate-50' : 'theme-light bg-slate-50 text-slate-900'} selection:bg-cyan-500 selection:text-slate-900`}>
      <Background isDark={isDark} />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <Hero isDark={isDark} />
        <About isDark={isDark} />
        <ProfessionalProfile isDark={isDark} />
        <Skills isDark={isDark} />
        <Projects isDark={isDark} />
        <Contact isDark={isDark} />
      </main>

      <footer className={`relative z-10 py-12 px-6 sm:px-12 lg:px-24 border-t transition-theme ${isDark ? 'border-white/5 bg-slate-900/50' : 'border-slate-200 bg-white'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-3">
             <div className={`w-8 h-8 rounded-md flex items-center justify-center transition-theme ${isDark ? 'bg-slate-800 text-cyan-400' : 'bg-slate-100 text-blue-600'}`}>
               <Database size={18} />
             </div>
             <div className={`mono text-sm transition-theme ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
               © {new Date().getFullYear()} Dhuneshwaran. 
             </div>
          </div>
          
          <div className="flex space-x-6">
  {/* GitHub Link */}
  <a 
    href="https://github.com/dhunesh-2005" 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`transition-colors ${isDark ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`} 
    aria-label="Github"
  >
    <Github size={20} />
  </a>

  {/* LeetCode Link */}
  <a 
    href="https://leetcode.com/u/dhunesh/" 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`transition-colors ${isDark ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`} 
    aria-label="LeetCode"
  >
    <Code size={20} className={isDark ? "text-slate-500 hover:text-cyan-400" : "text-slate-400 hover:text-blue-600"} />
  </a>

  {/* LinkedIn Link */}
  <a 
    href="https://www.linkedin.com/in/dhuneshwaran-v-741935344" 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`transition-colors ${isDark ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`} 
    aria-label="LinkedIn"
  >
    <Linkedin size={20} />
  </a>
  <a href="#" className={`transition-colors ${isDark ? 'text-slate-500 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`} aria-label="YouTube"><Youtube size={20} /></a>

</div>
        </div>
      </footer>
    </div>
  );
};

export default App;