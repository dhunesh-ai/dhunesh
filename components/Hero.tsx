import React, { useState, useEffect } from 'react';
import { ChevronRight, Database, TrendingUp, Search, Terminal } from 'lucide-react';

interface HeroProps {
  isDark: boolean;
}

const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const [text, setText] = useState('');
  const titles = [
    "Turning raw data into actionable insights.",
    "Python Developer.",
    "Data Analyst Enthusiast.",
    "Data Storyteller."
  ];
  
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(70);

  useEffect(() => {
    const currentFullText = titles[titleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        setText(currentFullText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        setTypingSpeed(70);

        if (charIndex + 1 === currentFullText.length) {
          // Pause at the end
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        setText(currentFullText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        setTypingSpeed(40);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTitleIndex((prev) => (prev + 1) % titles.length);
          setCharIndex(0);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex, titles, typingSpeed]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">
            <div className={`flex items-center justify-center lg:justify-start space-x-2 mono mb-6 text-xs sm:text-sm tracking-widest uppercase transition-theme ${isDark ? 'text-cyan-400' : 'text-blue-600 font-semibold'}`}>
              <Database size={16} />
              <span>Data Science & Engineering</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight transition-theme">
              Hi, I'm <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-cyan-400 to-purple-500' : 'from-blue-600 to-indigo-600'}`}>Dhuneshwaran</span>.
            </h1>
            
            <p className={`text-lg sm:text-xl md:text-2xl mono min-h-[6rem] sm:min-h-[4rem] transition-theme mb-8 px-4 lg:px-0 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              {text}<span className={`animate-pulse inline-block w-1 h-6 sm:h-8 ml-1 align-middle ${isDark ? 'bg-cyan-400' : 'bg-blue-600'}`}></span>
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-8">
              <a href="#projects" className={`px-8 py-4 font-bold rounded-xl transition-all flex items-center justify-center space-x-2 group shadow-xl ${isDark ? 'bg-cyan-500 hover:bg-cyan-400 text-slate-900 glow-cyan' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}>
                <span>Explore My Models</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a href="#contact" className={`px-8 py-4 glass rounded-xl font-semibold transition-all border flex items-center justify-center ${isDark ? 'text-white border-white/10 hover:bg-white/10' : 'text-slate-900 border-slate-200 hover:bg-black/5'}`}>
                Get In Touch
              </a>
            </div>

            {/* Terminal Snippet */}
            <div className={`hidden md:block mt-12 p-4 rounded-xl mono text-xs max-w-md mx-auto lg:mx-0 border transition-theme ${isDark ? 'bg-black/40 border-white/5 text-slate-500' : 'bg-slate-900/5 border-slate-200 text-slate-400'}`}>
               <div className="flex space-x-2 mb-2">
                 <div className="w-2 h-2 rounded-full bg-red-500/50" />
                 <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                 <div className="w-2 h-2 rounded-full bg-green-500/50" />
               </div>
               <span className="text-cyan-500">$</span> fetch user_profile --status<br/>
               <span className="text-purple-400">Location:</span> Chennai, India<br/>
               <span className="text-purple-400">Specialization:</span> AI & Data Science
            </div>
          </div>

          {/* Right Column: Portrait Visual */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="relative group scale-90 sm:scale-100">
              {/* Background Glows */}
              <div className={`absolute -inset-4 rounded-[2.5rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-gradient-to-tr ${isDark ? 'from-cyan-500 to-purple-600' : 'from-blue-400 to-indigo-500'}`} />
              
              {/* Technical Frame Decorations */}
              <div className={`absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 rounded-tl-xl transition-theme ${isDark ? 'border-cyan-500/50' : 'border-blue-600/50'}`} />
              <div className={`absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 rounded-br-xl transition-theme ${isDark ? 'border-purple-500/50' : 'border-indigo-600/50'}`} />
              
              {/* Portrait Container */}
              <div className={`relative w-56 h-72 sm:w-80 sm:h-[28rem] rounded-[2rem] overflow-hidden border-2 glass transition-all duration-500 group-hover:scale-[1.02] group-hover:rotate-1 animate-float ${isDark ? 'border-white/10' : 'border-slate-200 shadow-2xl'}`}>
                <img 
                  src="img/dhuneshimg.png" 
                  alt="Dhuneshwaran Portrait" 
                  className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Overlay Scanlines */}
                <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
              </div>
              
              {/* Floating Badge */}
              <div className={`absolute -bottom-6 -left-6 glass px-3 py-2 sm:px-4 sm:py-3 rounded-2xl border flex items-center space-x-3 transition-theme animate-float-delayed ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center ${isDark ? 'bg-cyan-500/20 text-cyan-400' : 'bg-blue-600/10 text-blue-600'}`}>
                  <Terminal size={18} />
                </div>
                <div>
                  <div className={`text-[8px] sm:text-[10px] uppercase tracking-tighter mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Core_Engine</div>
                  <div className="text-xs sm:text-sm font-bold">Active_Session</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 5s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
};

export default Hero;