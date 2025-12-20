
import React from 'react';
import { User, Code2, Coffee, Brain, Terminal, ChevronRight } from 'lucide-react';

interface AboutProps {
  isDark: boolean;
}

const About: React.FC<AboutProps> = ({ isDark }) => {
  const stats = [
    { label: 'Lines of Python', value: '45k+', icon: Code2 },
    { label: 'Neural Models Built', value: '12', icon: Brain },
    { label: 'Kaggle Solutions', value: '8', icon: Terminal },
    { label: 'Liters of Coffee', value: '250', icon: Coffee },
  ];

  return (
    <section id="about" className="py-24 px-6 sm:px-12 lg:px-24 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Narrative */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold mb-6 flex items-center gap-3">
              <User className={isDark ? 'text-cyan-400' : 'text-blue-600'} />
              System Profile
            </h2>
            
            <div className={`space-y-6 text-lg leading-relaxed transition-theme ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              <p>
                I am a passionate <span className={isDark ? 'text-white font-medium' : 'text-slate-900 font-medium'}>third-year B.Tech student</span> specializing in <span className={isDark ? 'text-cyan-400 font-medium' : 'text-blue-600 font-medium'}>Artificial Intelligence and Data Science</span>. Driven by curiosity and a love for problem solving, I enjoy building projects that turn complex data into valuable insights.
              </p>
              <p>
                My academic journey includes hands-on experience with <span className={`mono text-sm px-2 py-0.5 rounded ${isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-blue-50 text-blue-600'}`}>Python programming</span>, web scraping, and machine learning, complemented by strong skills in data analysis and Excel workflows.
              </p>
              <p>
                I thrive on tackling algorithm challenges and have contributed to projects ranging from home price prediction to digital electronics assignments. Eager to keep learning, I regularly explore new tools in <span className={isDark ? 'text-purple-400 font-medium' : 'text-indigo-600 font-medium'}>cloud computing</span> and advanced analytics, always aiming to create solutions that make a real impact.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className={`px-4 py-2 rounded-full text-xs font-bold mono border transition-theme ${isDark ? 'bg-white/5 border-white/10 text-cyan-400' : 'bg-slate-100 border-slate-200 text-blue-600'}`}>
                #AvailableForCollaboration
              </div>
              <div className={`px-4 py-2 rounded-full text-xs font-bold mono border transition-theme ${isDark ? 'bg-white/5 border-white/10 text-purple-400' : 'bg-slate-100 border-slate-200 text-indigo-600'}`}>
                #OpenSourceContributor
              </div>
            </div>
          </div>

          {/* Right Side: Stats & Visual */}
          <div className="order-1 lg:order-2">
            <div className={`glass p-8 rounded-3xl border relative transition-all overflow-hidden ${isDark ? 'border-white/10 glow-cyan' : 'border-slate-200 shadow-2xl'}`}>
              {/* Fake Window Controls */}
              <div className="flex space-x-2 mb-8">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className={`ml-4 text-[10px] mono uppercase tracking-widest ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>identity_matrix.exe</span>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className={`p-6 rounded-2xl border transition-all hover:scale-105 ${isDark ? 'bg-white/5 border-white/5 hover:bg-white/10' : 'bg-slate-50 border-slate-100 hover:bg-white hover:shadow-lg'}`}>
                    <div className={`mb-3 p-2 w-fit rounded-lg ${isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-blue-600/10 text-blue-600'}`}>
                      <stat.icon size={20} />
                    </div>
                    <div className="text-2xl font-bold mb-1">{stat.value}</div>
                    <div className={`text-[10px] uppercase tracking-wider font-bold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Console Output Style Footer */}
              <div className={`mt-8 p-4 rounded-xl mono text-xs leading-relaxed ${isDark ? 'bg-black/40 text-green-400/80' : 'bg-slate-900 text-green-400'}`}>
                <div className="flex items-center gap-2 mb-1">
                  <ChevronRight size={12} />
                  <span>status_check --verbose</span>
                </div>
                <div className="opacity-70 ml-4">
                  [OK] Core cognitive processors active.<br />
                  [OK] Creative buffer overflow minimized.<br />
                  [OK] Analyzing new data streams...
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
