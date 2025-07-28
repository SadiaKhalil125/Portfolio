'use client'

import React from 'react'
import { ExternalLink, Github, Globe, Bot, Heart, Activity, Code, FileText } from 'lucide-react'

const Projects = () => {
  const projects = [
     {
      title: 'AI Code Lab',
      description: 'An intelligent coding platform with user authentication, topic selection, and AI-powered question generation. Features dual-pane code editor, real-time AI based evaluation and scoring, and AI assistance for enhanced learning experience.',
      tech: ['React.js', 'FastAPI', 'Llama 3', 'JWT Auth', 'Python', 'Material-UI'],
      github: 'https://github.com/SadiaKhalil125/AI-Code-Lab.git',
      icon: <Code className="text-indigo-500 dark:text-indigo-400" size={24} />,
      featured: true
    },
    {
      title: 'Autonomous News-to-Video Agent ',
      description: 'An autonomous agent that converts news articles into engaging videos using AI. It scrapes news, generates scripts, creates voiceovers, and compiles videos with visuals and subtitles.',
      tech: ['Langgraph', 'Langchain', 'Grok', 'Llama','OpenAI API', 'Streamlit', 'Python', 'ElevenLabs','BeautifulSoup','Moviepy'],
      github: 'https://github.com/SadiaKhalil125/Auto-News-Cast-Agent.git',
      icon: <Code className="text-indigo-500 dark:text-indigo-400" size={24} />,
      featured: true
    },
    {
      title: 'Edu-Career Navigator Agent',
      description: 'EduCareer Navigator is an intelligent ReAct agent using multi-agent orchestration to deliver personalized guidance. It routes queries to a University Agent or Career Agent based on user needs, using reasoning to adapt, switch, or combine agents for tailored educational and career recommendations. ',
      tech: ['Langchain', 'Langgraph', 'OpenAI API', 'Streamlit', 'Python', 'Random Forest', 'Skicit-Learn'],
      github: 'https://github.com/SadiaKhalil125/EduCareer-Navigator.git',
      icon: <Code className="text-indigo-500 dark:text-indigo-400" size={24} />,
      featured: true
    },
    {
      title: 'MultiRAGBot',
      description: 'It is a rag based bot who can answer any query provided the document, youtube video id and your concern, built purely using langchain ',
      tech: ['LangChain', 'OpenAI', 'Streamlit', 'Youtube API', 'FAISS', 'Python'],
      github: 'https://github.com/SadiaKhalil125/RAGBasedChatBot.git',
      icon: <Bot className="text-purple-500 dark:text-purple-400" size={24} />,
      featured: true
    },
    {
      title: 'GenAI Report Generator',
      description: 'An AI-based report generator with GPT integration, secure JWT authentication, and PDF export functionality. Built with responsive React UI using Material-UI for real-time report creation.',
      tech: ['FastAPI', 'React.js','LangChain','OpenAI API', 'ReportLab', 'JWT', 'Material-UI'],
      github: 'https://github.com/SadiaKhalil125/AIReportGenerator.git',
      icon: <FileText className="text-emerald-500 dark:text-emerald-400" size={24} />,
      featured: true
    },
    {
      title: 'Bonded Social Network',
      description: 'A real-time social platform with follow, like, comment, notifications, and chat functionality using SignalR. Dockerized the application and published to Docker Hub.',
      tech: ['ASP.NET MVC', 'SignalR', 'Docker', 'SQL Server'],
      github: 'https://github.com/SadiaKhalil125/FullStack-SocialMediaBasedProject.git',
      docker: 'sadia2004/dockerbonded',
      icon: <Heart className="text-red-500 dark:text-red-400" size={24} />,
      featured: true
    },
    {
      title: 'HealWell - E-Healthcare System',
      description: 'A role-based healthcare portal with doctor search, appointment booking, admin dashboards, and an AI chatbot. Implemented dark mode, secure data handling using .NET Web APIs, Entity Framework and JWT authentication.',
      tech: ['Blazor WASM', '.NET Core', 'SQL Server', 'Web APIs', 'JWT', 'Entity Framework'],
      github: 'https://github.com/SadiaKhalil125/HealWell-FullStack-Blazor-Restful-APIs.git',
      icon: <Heart className="text-blue-500 dark:text-blue-400" size={24} />,
      featured: true
    },
    
    {
      title: 'Plant Disease Detection',
      description: 'Trained YOLOv5 and YOLOv8 object detection models achieving 95% accuracy on 30+ plant diseases. Deployed a Flask-based web app for real-time image predictions.',
      tech: ['Python', 'PyTorch', 'YOLOv5', 'YOLOv8', 'Flask', 'OpenCV'],
      github: 'https://github.com/SadiaKhalil125/PlantDiseaseDetection.git',
      icon: <Globe className="text-green-500 dark:text-green-400" size={24} />,
      featured: true
    }
  ]

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            A showcase of full-stack applications and AI/ML solutions demonstrating technical expertise
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg overflow-hidden hover-lift transition-all duration-300 ${
                  project.featured 
                    ? 'bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-2 border-blue-100 dark:border-blue-900' 
                    : 'bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700'
                }`}
              >
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h3 className="ml-3 text-xl font-bold text-gray-800 dark:text-gray-200">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.featured
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                          : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Links */}
                <div className="flex flex-col space-y-2">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Source Code</span>
                  </a>
                  
                  {project.docker && (
                    <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                      <ExternalLink size={18} />
                      <span className="text-sm font-medium">Docker: {project.docker}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* GitHub CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Interested in seeing more of my work?
            </p>
            <a 
              href="https://github.com/SadiaKhalil125" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors hover-lift"
            >
              <Github size={20} />
              <span>Visit My GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects 