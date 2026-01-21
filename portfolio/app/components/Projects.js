'use client'

import React from 'react'
import { ExternalLink, Github, Globe, Bot, Heart, Activity, Code, FileText, Scale, Terminal, Database } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'LeadGenerationPro (FYP)',
      description: 'A Smart Lead Generation & Outreach software for B2B leads. Features a powerful general web scraper capable of extracting structured business information across multiple site formats. Orchestrates scalable parallel task execution using Apache Kafka, Docker containers, and Kubernetes clusters.',
      tech: ['React', 'FastAPI', 'PostgreSQL', 'Apache Kafka', 'Docker', 'Kubernetes'],
      github: 'https://github.com/SadiaKhalil125/LeadGenerationPro', 
      icon: <Activity size={24} />,
      featured: true,
      color: 'text-blue-500'
    },
    {
      title: 'LUKE - AI Legal Integrator',
      description: 'An advanced, live AI agent framework specialized for Peruvian Law. Designed for legal professionals, it answers questions with official citations/PDF links, performs clause audits, compares document versions, and automates regulatory alerts.',
      tech: ['RAG', 'OpenAI', 'OCR', 'Selenium', 'FastAPI', 'Python','TypeScript'],
      github: 'https://github.com/cleonruiz-netizen/LUKE.git',
      icon: <Scale size={24} />,
      featured: true,
      color: 'text-orange-500'
    },
    {
      title: 'AI Code Lab',
      description: 'An intelligent coding platform with user authentication, topic selection, and AI-powered question generation. Features dual-pane code editor, real-time AI based evaluation and scoring.',
      tech: ['React.js', 'FastAPI', 'Llama 3', 'JWT Auth', 'Python', 'MUI'],
      github: 'https://github.com/SadiaKhalil125/AI-Code-Lab.git',
      icon: <Code size={24} />,
      featured: true,
      color: 'text-indigo-500'
    },
    {
      title: 'Autonomous News Agent',
      description: 'An autonomous agent that converts news articles into engaging videos using AI. It scrapes news, generates scripts, creates voiceovers, and compiles videos with visuals.',
      tech: ['LangGraph', 'Grok', 'Llama', 'OpenAI', 'ElevenLabs', 'Moviepy'],
      github: 'https://github.com/SadiaKhalil125/Auto-News-Cast-Agent.git',
      icon: <Bot size={24} />,
      featured: true,
      color: 'text-cyan-500'
    },
    {
      title: 'Edu-Career Navigator',
      description: 'Intelligent ReAct agent using multi-agent orchestration to deliver personalized guidance. It routes queries to a University Agent or Career Agent based on user needs.',
      tech: ['LangGraph', 'OpenAI API', 'Streamlit', 'Random Forest', 'Scikit-Learn'],
      github: 'https://github.com/SadiaKhalil125/EduCareer-Navigator.git',
      icon: <Globe size={24} />,
      featured: true,
      color: 'text-emerald-500'
    },
    {
      title: 'Queryly-AI',
      description: 'Comprehensive SQL learning platform with AI-powered ReAct agent featuring NLP-to-SQL converter (Llama 3.1), quiz generator (GPT-4), and RAG document Q&A.',
      tech: ['LangChain', 'ChromaDB', 'Llama-4', 'Python', 'MongoDB'],
      github: 'https://github.com/SadiaKhalil125/Queryly-AI.git',
      icon: <Database size={24} />, 
      featured: true,
      color: 'text-purple-500'
    },
    {
      title: 'VocaHire-AI Interview',
      description: 'AI-powered interview practice platform simulating real-time sessions. Provides detailed feedback, tracks history, and supports body language analysis.',
      tech: ['FastAPI', 'React', 'OpenAI', 'Redux', 'Pose Detection'],
      github: 'https://github.com/SadiaKhalil125/VocaHire-AIInterviewPartner.git',
      icon: <FileText size={24} />,
      featured: true,
      color: 'text-teal-500'
    },
    {
      title: 'Bonded Social Network',
      description: 'Real-time social platform with follow, like, comment, notifications, and chat using SignalR. Dockerized and published to Docker Hub.',
      tech: ['ASP.NET MVC', 'SignalR', 'Docker', 'SQL Server'],
      github: 'https://github.com/SadiaKhalil125/FullStack-SocialMediaBasedProject.git',
      docker: 'sadia2004/dockerbonded',
      icon: <Heart size={24} />,
      featured: true,
      color: 'text-red-500'
    },
    {
      title: 'HealWell - E-Healthcare',
      description: 'Role-based healthcare portal with doctor search, appointment booking, and AI chatbot. Implemented dark mode, secure data handling and JWT auth.',
      tech: ['Blazor WASM', '.NET Core', 'SQL', 'JWT', 'Entity Framework'],
      github: 'https://github.com/SadiaKhalil125/HealWell-FullStack-Blazor-Restful-APIs.git',
      icon: <Heart size={24} />,
      featured: true,
      color: 'text-rose-500'
    },
    {
      title: 'Plant Disease Detection',
      description: 'Trained YOLOv5 and YOLOv8 object detection models achieving 95% accuracy on 30+ plant diseases. Deployed a Flask-based web app.',
      tech: ['Python', 'PyTorch', 'YOLOv8', 'Flask', 'OpenCV'],
      github: 'https://github.com/SadiaKhalil125/PlantDiseaseDetection.git',
      icon: <Globe size={24} />,
      featured: true,
      color: 'text-green-500'
    }
  ]

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-[#0B1120] transition-colors relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 mb-4 bg-blue-500/10 rounded-lg">
              <Terminal className="text-blue-600 dark:text-blue-400" size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Featured <span className="text-cyan-600 dark:text-cyan-400">Projects</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-mono text-sm">
              &gt; EXECUTING PORTFOLIO.EXE... displaying full_stack && ai_solutions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)] flex flex-col group h-full"
              >
                <div className="p-6 flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg bg-slate-50 dark:bg-slate-800 ${project.color}`}>
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm">
                    {project.description}
                  </p>
                  
                  {/* Technologies - Tech Badges */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 rounded text-[10px] uppercase font-mono tracking-wide font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Footer / Links */}
                <div className="px-6 py-4 bg-slate-50 dark:bg-[#0f172a] border-t border-slate-200 dark:border-slate-800 flex items-center gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors text-sm font-bold"
                  >
                    <Github size={16} />
                    <span>SOURCE_CODE</span>
                  </a>
                  
                  {project.docker && (
                    <div className="flex items-center space-x-2 text-slate-500 dark:text-slate-500 text-sm">
                      <ExternalLink size={16} />
                      <span className="font-mono text-xs">{project.docker}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a 
              href="https://github.com/SadiaKhalil125" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-cyan-600 dark:hover:border-cyan-500 rounded-lg text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all font-bold"
            >
              <Github size={20} />
              <span>ACCESS FULL REPOSITORY</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects