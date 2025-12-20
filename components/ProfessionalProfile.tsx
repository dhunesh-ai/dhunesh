
import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { EDUCATION, EXPERIENCE, CERTIFICATIONS } from '../constants';

interface ProfessionalProfileProps {
  isDark: boolean;
}

// Complete ProfessionalProfile component with all tabs and default export
const ProfessionalProfile: React.FC<ProfessionalProfileProps> = ({ isDark }) => {
  const [activeTab, setActiveTab] = useState<'education' | 'experience' | 'certifications'>('education');

  const tabs = [
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'certifications', label: 'Certifications', icon: Award },
  ];

  return (
    <section id="profile" className={`py-24 px-6 sm:px-12 lg:px-24 transition-theme relative overflow-hidden ${isDark ? 'bg-slate-950 text-slate-50' : 'bg-slate-50 text-slate-900'}`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Briefcase className={isDark ? 'text-cyan-400' : 'text-blue-600'} />
            Professional Profile
          </h2>
          <p className={`max-w-xl mx-auto px-4 transition-theme ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            A track record of academic excellence, industry impact, and continuous technical growth.
          </p>
        </div>

        {/* Tab Switcher - Scrollable on Mobile */}
        <div className={`flex justify-start sm:justify-center mb-12 border-b overflow-x-auto no-scrollbar transition-theme ${isDark ? 'border-white/10' : 'border-slate-200'}`}>
          <div className="flex space-x-6 sm:space-x-16 px-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex flex-col items-center pb-4 px-2 whitespace-nowrap transition-all relative ${
                  activeTab === tab.id 
                    ? (isDark ? 'text-cyan-400' : 'text-blue-600') 
                    : (isDark ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600')
                }`}
              >
                <div className="flex items-center gap-2 mb-2">
                  <tab.icon size={18} />
                  <span className="font-bold text-[10px] sm:text-sm uppercase tracking-widest">{tab.label}</span>
                </div>
                {activeTab === tab.id && (
                  <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-t-full bg-gradient-to-r ${isDark ? 'from-cyan-400 to-purple-500' : 'from-blue-600 to-indigo-600'}`} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px] px-2 sm:px-0">
          {activeTab === 'education' && (
            <div className="space-y-6 sm:space-y-8 animate-fadeIn">
              {EDUCATION.map((edu, i) => (
                <div key={i} className={`glass p-6 sm:p-8 rounded-2xl border transition-theme ${isDark ? 'border-white/5 hover:border-cyan-500/20' : 'border-slate-200 hover:border-blue-500/20'}`}>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 sm:gap-4 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">{edu.institution}</h3>
                      <div className={`text-base sm:text-lg font-medium ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>{edu.degree}</div>
                    </div>
                    <div className={`flex items-center gap-4 text-[10px] sm:text-sm mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      <span className="flex items-center gap-1"><Calendar size={14} /> {edu.date}</span>
                    </div>
                  </div>
                  <p className={`text-sm sm:text-base mb-4 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{edu.description}</p>
                  <div className={`flex items-center gap-1 text-[10px] sm:text-xs mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                    <MapPin size={12} /> {edu.location}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-6 sm:space-y-8 animate-fadeIn">
              {EXPERIENCE.map((exp, i) => (
                <div key={i} className={`glass p-6 sm:p-8 rounded-2xl border transition-theme ${isDark ? 'border-white/5 hover:border-purple-500/20' : 'border-slate-200 hover:border-blue-500/20'}`}>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-start gap-2 sm:gap-4 mb-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-1">{exp.company}</h3>
                      <div className={`text-base sm:text-lg font-medium ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>{exp.role}</div>
                    </div>
                    <div className={`flex items-center gap-4 text-[10px] sm:text-sm mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                      <span className="flex items-center gap-1"><Calendar size={14} /> {exp.date}</span>
                    </div>
                  </div>
                  <p className={`text-sm sm:text-base mb-6 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map(h => (
                      <span key={h} className={`px-3 py-1 rounded-md text-[9px] sm:text-[10px] mono font-bold border ${isDark ? 'bg-white/5 border-white/10 text-slate-300' : 'bg-slate-50 border-slate-200 text-slate-600'}`}>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'certifications' && (
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 animate-fadeIn">
              {CERTIFICATIONS.map((cert, i) => (
                <div key={i} className={`glass p-6 rounded-2xl border transition-theme flex flex-col justify-between ${isDark ? 'border-white/5 hover:border-cyan-500/20' : 'border-slate-200 hover:border-blue-500/20'}`}>
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div className={`p-2 rounded-lg ${isDark ? 'bg-cyan-500/10 text-cyan-400' : 'bg-blue-600/10 text-blue-600'}`}>
                        <Award size={20} />
                      </div>
                      <span className={`text-[10px] mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>{cert.date}</span>
                    </div>
                    <h3 className="font-bold mb-2 line-clamp-2">{cert.title}</h3>
                    <p className={`text-xs mb-4 ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>{cert.issuer}</p>
                    {cert.score && (
                      <div className={`text-xs mb-4 inline-block px-2 py-1 rounded ${isDark ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-600'}`}>
                        Score: {cert.score}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                    <span className={`text-[10px] mono truncate max-w-[150px] ${isDark ? 'text-slate-600' : 'text-slate-400'}`}>ID: {cert.credentialId}</span>
                    <a href={cert.viewUrl} target="_blank" rel="noopener noreferrer" className={`text-xs flex items-center gap-1 font-bold ${isDark ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'}`}>
                      Verify <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Fix for Error in file App.tsx on line 6: Module '"file:///components/ProfessionalProfile"' has no default export.
export default ProfessionalProfile;
