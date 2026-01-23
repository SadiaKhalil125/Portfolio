'use client'

import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Cpu, ChevronRight } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 dark:bg-[#0B1120] transition-colors">
      
      {/* Background Tech Grid - CSS only, no images */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]" 
        style={{
          backgroundImage: `linear-gradient(#64748b 1px, transparent 1px), linear-gradient(to right, #64748b 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
      {/* Radial Gradient Glow for depth */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/5 dark:bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          <div className="animate-fade-in flex flex-col items-center">
            
            {/* System Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-mono font-medium text-slate-600 dark:text-slate-300 tracking-wide">
                SYSTEM ONLINE // OPEN FOR WORK
              </span>
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white" style={{ fontFamily: 'Space Mono, monospace' }}>
              Sadia <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-500">Khalil</span>
            </h1>

            {/* Role Title with Monospace Brackets */}
            <div className="flex items-center gap-3 mb-8">
              <span className="hidden md:block h-px w-8 bg-slate-300 dark:bg-slate-700"></span>
              <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-light">
                <span className="text-cyan-600 dark:text-cyan-500 font-mono">&lt;</span>
                Software Engineer & AI/ML Developer
                <span className="text-cyan-600 dark:text-cyan-500 font-mono">/&gt;</span>
              </p>
              <span className="hidden md:block h-px w-8 bg-slate-300 dark:bg-slate-700"></span>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed border-l-2 border-slate-200 dark:border-slate-800 pl-6 italic">
              Final-year Software Engineering student architecting intelligent full-stack systems. 
              Specialized in <span className="text-slate-900 dark:text-white font-medium">React, FastAPI, .NET</span> and advancing 
              human-computer interaction via <span className="text-slate-900 dark:text-white font-medium">LangChain & LLMs</span>.
            </p>
            
            {/* Tech/Social Dock (Contact Info) */}
            <div className="flex flex-wrap justify-center gap-6 mb-12 p-4 rounded-2xl bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-default">
                <Phone size={16} />
                <span className="font-mono">+92 320 4522019</span>
              </div>
              <div className="w-px h-4 bg-slate-300 dark:bg-slate-700"></div>
              <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors cursor-default">
                <MapPin size={16} />
                <span>Lahore, PK</span>
              </div>
              <div className="w-px h-4 bg-slate-300 dark:bg-slate-700"></div>
              <a href="mailto:sadiakhalil957@gmail.com" className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                <Mail size={16} />
                <span>Email Me</span>
              </a>
            </div>

            {/* CTA Buttons - Robotic/Tactical Style */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto mb-10">
              <a 
                href="#projects" 
                className="group relative px-8 py-3.5 bg-slate-900 dark:bg-cyan-600 text-white rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(8,145,178,0.5)] hover:-translate-y-1"
              >
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <div className="flex items-center justify-center gap-2 font-bold tracking-wide">
                  <Cpu size={18} />
                  <span>VIEW PROJECTS</span>
                </div>
              </a>

              <a 
                href="#contact" 
                className="group px-8 py-3.5 rounded-lg border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:border-cyan-600 dark:hover:border-cyan-500 hover:text-cyan-700 dark:hover:text-cyan-400 transition-all bg-transparent hover:bg-cyan-50 dark:hover:bg-cyan-900/10"
              >
                <div className="flex items-center justify-center gap-2">
                  <span>GET IN TOUCH</span>
                  <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </a>
            </div>

            {/* Separate Line for Social Icons */}
            <div className="flex items-center gap-4 justify-center">
              <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest hidden sm:block">Connect Via ::</span>
              <a 
                href="https://github.com/SadiaKhalil125" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-black dark:hover:text-white transition-colors border border-transparent hover:border-slate-300 dark:hover:border-slate-600"
              >
                <Github size={22} />
              </a>
              <a 
                href="https://www.linkedin.com/in/sadia-khalil-851889261/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors border border-transparent hover:border-slate-300 dark:hover:border-slate-600"
              >
                <Linkedin size={22} />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero