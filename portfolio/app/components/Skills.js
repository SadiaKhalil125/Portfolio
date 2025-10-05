'use client'

import React from 'react'
import { Code, Database, Brain, Globe, Wrench, Server } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="text-blue-600 dark:text-blue-400" size={24} />,
      skills: ['Python', 'C++', 'C#', 'JavaScript', 'Kotlin'],
      highlight: true
    },
    {
      title: 'Web Development',
      icon: <Globe className="text-green-600 dark:text-green-400" size={24} />,
      skills: ['ASP.NET MVC', 'ASP.NET Core', 'Blazor WASM', 'REST APIs', 'Entity Framework', 'SignalR', 'React+FastAPI'],
      highlight: true
    },
    {
      title: 'Frontend Technologies',
      icon: <Globe className="text-teal-600 dark:text-teal-400" size={24} />,
      skills: ['HTML/CSS', 'XML', 'React.js', 'Figma'],
      highlight: true
    },
    {
      title: 'Backend & APIs',
      icon: <Server className="text-purple-600 dark:text-purple-400" size={24} />,
      skills: ['.NET Web APIs', 'FastAPI', 'REST APIs', 'Entity Framework'],
      highlight: true
    },
    {
      title: 'AI & Machine Learning',
      icon: <Brain className="text-red-600 dark:text-red-400" size={24} />,
      skills: ['PyTorch', 'CNNs', 'YOLOv5/v8', 'OpenCV', 'Neural Networks', 'LangChain','LangGraph' ,'LLMs'],
      highlight: true
    },
    {
      title: 'Databases & Tools',
      icon: <Database className="text-orange-600 dark:text-orange-400" size={24} />,
      skills: ['VS Code','Visual Studio','SQL Server', 'MongoDB', 'Firebase', 'Git', 'JIRA', 'Figma', 'n8n'],
      highlight: false
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            Technical Skills
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Specialized in full-stack development (.NET, React, FastAPI) and applied AI/ML
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className={`p-6 rounded-lg hover-lift transition-all duration-300 ${
                  category.highlight 
                    ? 'bg-white dark:bg-gray-800 shadow-lg border-2 border-blue-100 dark:border-blue-900' 
                    : 'bg-white dark:bg-gray-800 shadow-md'
                }`}
              >
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className={`ml-3 text-lg font-semibold ${
                    category.highlight ? 'text-blue-900 dark:text-blue-100' : 'text-gray-800 dark:text-gray-200'
                  }`}>
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        category.highlight
                          ? 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Key Strengths */}
          <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Key Strengths</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></div>
                  <p><strong>Full-Stack Development:</strong> Expertise in .NET, React, and FastAPI</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></div>
                  <p><strong>AI/ML Applications:</strong> Computer vision, LLMs, and neural networks</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></div>
                  <p><strong>Problem Solving:</strong> 300+ LeetCode problems and competitive programming</p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></div>
                  <p><strong>Teaching & Mentoring:</strong> ML, DSA, WebDev TA for 50+ students, hackathon experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 