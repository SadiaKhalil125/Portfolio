'use client'

import React from 'react'
import { Code, Database, Brain, Globe, Server, Cpu } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={20} />,
      skills: ['Python', 'C++', 'C#', 'JavaScript', 'Kotlin'],
      color: 'text-blue-500'
    },
    {
      title: 'Web Dev',
      icon: <Globe size={20} />,
      skills: ['ASP.NET MVC', 'Blazor WASM', 'React', 'FastAPI', 'SignalR'],
      color: 'text-emerald-500'
    },
    {
      title: 'Frontend',
      icon: <Globe size={20} />, // Reusing Globe distinct context
      skills: ['HTML5/CSS3', 'XML', 'React.js', 'Figma', 'Tailwind'],
      color: 'text-teal-500'
    },
    {
      title: 'Backend/API',
      icon: <Server size={20} />,
      skills: ['.NET Web APIs', 'FastAPI', 'REST', 'Entity Framework'],
      color: 'text-purple-500'
    },
    {
      title: 'AI / ML',
      icon: <Brain size={20} />,
      skills: ['PyTorch', 'YOLOv8', 'OpenCV', 'LangChain', 'LangGraph', 'LLMs'],
      color: 'text-rose-500'
    },
    {
      title: 'Tools/DB',
      icon: <Database size={20} />,
      skills: ['SQL Server', 'MongoDB', 'Docker', 'Git', 'JIRA', 'n8n'],
      color: 'text-amber-500'
    }
  ]

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-[#0B1120] transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 mb-4 bg-purple-500/10 rounded-lg">
              <Cpu className="text-purple-600 dark:text-purple-400" size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Technical <span className="text-cyan-600 dark:text-cyan-400">Stack</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-mono text-sm">
              &gt; ANALYZING CORE COMPETENCIES...
            </p>
          </div>
          
          {/* Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-slate-900 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all hover:-translate-y-1 hover:shadow-lg group"
              >
                <div className="flex items-center mb-6">
                  <div className={`p-2 rounded bg-slate-50 dark:bg-slate-800 ${category.color} mr-3 group-hover:scale-110 transition-transform`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1.5 rounded-md text-xs font-mono font-medium bg-slate-100 dark:bg-[#0f172a] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 group-hover:border-cyan-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key Strengths - "System Diagnostic" Style */}
          <div className="mt-16 bg-[#1e293b] dark:bg-slate-900 rounded-xl border border-slate-700 p-8 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>

            <h3 className="text-xl font-bold text-white mb-6 font-mono flex items-center">
              <span className="text-cyan-400 mr-2">&gt;</span> SYSTEM_DIAGNOSTICS_REPORT
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 text-slate-300">
              <div className="space-y-4">
                <StrengthItem 
                  label="Full-Stack Dev" 
                  value="Expertise in .NET, React, FastAPI integration."
                />
                <StrengthItem 
                  label="AI Architecture" 
                  value="Computer vision (YOLO), RAG pipelines, LLM Agents."
                />
              </div>
              <div className="space-y-4">
                 <StrengthItem 
                  label="Algorithmic Logic" 
                  value="350+ LeetCode Solved. Strong Data Structures grasp."
                />
                <StrengthItem 
                  label="Leadership" 
                  value="Mentored 50+ students in DSA/ML/Web. Hackathon Organizer."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Helper for the "System Report" look
const StrengthItem = ({ label, value }) => (
  <div className="flex flex-col border-l-2 border-slate-600 pl-4">
    <span className="text-xs font-mono text-cyan-400 uppercase mb-1">{label}</span>
    <span className="text-sm text-slate-200">{value}</span>
  </div>
)

export default Skills