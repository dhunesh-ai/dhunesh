import React from 'react';
import { SKILLS, TECH_STACK } from '../constants';
import * as LucideIcons from 'lucide-react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

interface SkillsProps {
  isDark: boolean;
}

const Skills: React.FC<SkillsProps> = ({ isDark }) => {
  const radarData = SKILLS.map(s => ({ subject: s.name, A: s.level, fullMark: 100 }));

  // Triple buffer for a truly circular seamless loop on all resolutions
  const tripleStack = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  return (
    <section id="skills" className={`py-24 px-6 sm:px-12 lg:px-24 transition-theme relative overflow-hidden ${isDark ? 'bg-slate-900/50' : 'bg-slate-100/50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
              <LucideIcons.Cpu className={isDark ? 'text-purple-500' : 'text-indigo-600'} />
              Technical Ecosystem
            </h2>
            <p className={`max-w-xl transition-theme ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
              Specialized in high-dimensional data processing, neural architecture design, and cloud-native analytics pipelines.
            </p>
          </div>
          <div className={`mono text-sm flex items-center gap-2 transition-theme ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
            <LucideIcons.Layers size={16} />
            <span>Multi-modal Proficiencies</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="grid sm:grid-cols-2 gap-6">
            {SKILLS.map((skill) => {
              const Icon = (LucideIcons as any)[skill.icon];
              return (
                <div key={skill.name} className={`glass p-6 rounded-2xl group transition-all hover:scale-[1.02] ${isDark ? 'hover:border-cyan-500/50' : 'hover:border-blue-500/50'}`}>
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-lg transition-theme group-hover:scale-110 ${isDark ? 'bg-white/5 text-cyan-400' : 'bg-black/5 text-blue-600'}`}>
                      {Icon && <Icon size={24} />}
                    </div>
                    <span className={`mono font-bold ${isDark ? 'text-cyan-400/80' : 'text-blue-600/80'}`}>{skill.level}%</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{skill.name}</h3>
                  <div className={`h-1.5 w-full rounded-full overflow-hidden transition-theme ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                    <div 
                      className={`h-full rounded-full transition-all duration-1000 bg-gradient-to-r ${isDark ? 'from-cyan-400 to-purple-500' : 'from-blue-600 to-indigo-600'}`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="h-[400px] glass rounded-3xl p-8 flex items-center justify-center relative shadow-sm">
            <div className={`absolute top-4 left-6 text-xs mono uppercase transition-theme ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>Skill Vector Analysis</div>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={radarData}>
                <PolarGrid stroke={isDark ? "#334155" : "#cbd5e1"} />
                <PolarAngleAxis dataKey="subject" tick={{ fill: isDark ? '#94a3b8' : '#475569', fontSize: 12 }} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke={isDark ? "#22d3ee" : "#2563eb"}
                  fill={isDark ? "#22d3ee" : "#2563eb"}
                  fillOpacity={0.3}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Tech Marquee with Circular Loop Logic */}
        <div className={`mt-12 overflow-hidden py-14 border-y relative transition-theme ${isDark ? 'border-white/5 bg-black/40' : 'border-slate-200 bg-white/50'}`}>
          <div className={`absolute left-0 top-0 bottom-0 w-48 bg-gradient-to-r z-10 ${isDark ? 'from-slate-950/80' : 'from-slate-50/80'} to-transparent`} />
          <div className={`absolute right-0 top-0 bottom-0 w-48 bg-gradient-to-l z-10 ${isDark ? 'from-slate-950/80' : 'from-slate-50/80'} to-transparent`} />
          
          <div className="flex space-x-12 sm:space-x-24 animate-marquee whitespace-nowrap items-center w-max">
            {tripleStack.map((tech: any, i) => (
              <div key={i} className="flex flex-col items-center justify-center space-y-4 group cursor-pointer transition-all">
                <div className={`h-20 w-20 flex items-center justify-center p-3 rounded-2xl border transition-all transform group-hover:-translate-y-2 shadow-sm backdrop-blur-md ${isDark ? 'bg-white/10 border-white/10 group-hover:border-cyan-500/40' : 'bg-white border-slate-200 group-hover:border-blue-500/40'}`}>
                  {tech.customIcon ? (
                    <img 
                      src={tech.customIcon} 
                      alt={tech.name}
                      className="h-full w-full object-contain transition-all group-hover:scale-110 drop-shadow-sm"
                    />
                  ) : (
                    <img 
                      src={`https://cdn.simpleicons.org/${tech.slug}${isDark && (tech.slug === 'github' || tech.slug === 'visualstudiocode' || tech.slug === 'sqlite' || tech.slug === 'postgresql') ? '/eeeeee' : (!isDark && tech.slug === 'github' ? '/181717' : '')}`} 
                      alt={tech.name}
                      className="h-full w-full object-contain transition-all filter brightness-110 contrast-150 saturate-150 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                      loading="lazy"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = `https://cdn.simpleicons.org/code/888`;
                      }}
                    />
                  )}
                </div>
                <span className={`text-[10px] mono font-bold uppercase tracking-widest transition-colors ${isDark ? 'text-slate-300 group-hover:text-cyan-400' : 'text-slate-500 group-hover:text-blue-600'}`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;