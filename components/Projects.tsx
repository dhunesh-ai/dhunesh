import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github, PieChart, Activity, Zap } from 'lucide-react';

interface ProjectsProps {
  isDark: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDark }) => {
  return (
    <section id="projects" className="py-24 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <PieChart className={isDark ? 'text-cyan-400' : 'text-blue-600'} />
            Featured Deployments
          </h2>
          <p className={`max-w-2xl transition-theme ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            A curation of computational models and data-driven applications built with scalability and precision in mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className={`glass rounded-2xl overflow-hidden group border transition-all flex flex-col hover:scale-[1.01] ${isDark ? 'border-white/5 hover:border-purple-500/30' : 'border-slate-200 shadow-sm hover:border-blue-500/30'}`}>
              {/* Card Header */}
              <div className={`p-4 border-b flex items-center justify-between transition-theme ${isDark ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'}`}>
                <div className="flex items-center space-x-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                </div>
                <div className={`text-xs mono ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>model_v2.04.json</div>
              </div>

              <div className="p-8 flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className={`text-2xl font-bold transition-colors ${isDark ? 'text-white group-hover:text-cyan-400' : 'text-slate-900 group-hover:text-blue-600'}`}>
                    {project.title}
                  </h3>
                  <div className="flex space-x-3">
                    
                    {/* --- GITHUB LINK UPDATED BELOW --- */}
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`} 
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>

                    {/* --- DEMO LINK UPDATED BELOW --- */}
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={`transition-colors ${isDark ? 'text-slate-400 hover:text-white' : 'text-slate-400 hover:text-slate-900'}`} 
                        title="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <p className={`mb-8 leading-relaxed transition-theme ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className={`px-3 py-1 border rounded-full text-xs mono font-medium transition-theme ${isDark ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' : 'bg-blue-50 text-blue-600 border-blue-100'}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Performance Metrics */}
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  {project.metrics.map(metric => (
                    <div key={metric.label} className={`rounded-xl p-3 border transition-theme ${isDark ? 'bg-black/20 border-white/5' : 'bg-white border-slate-100 shadow-sm'}`}>
                      <div className={`text-[10px] uppercase tracking-wider mb-1 flex items-center gap-1 font-semibold ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
                        {metric.label === 'Accuracy' || metric.label === 'Precision' ? <Zap size={10} /> : <Activity size={10} />}
                        {metric.label}
                      </div>
                      <div className={`text-lg font-bold mono transition-theme ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>{metric.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;