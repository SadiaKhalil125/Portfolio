'use client'

import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">Sadia Khalil</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Software Engineer & AI/ML Developer
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Final-year Software Engineering student passionate about building intelligent full-stack applications. Experienced in React, FastAPI, and .NET with a strong focus on AI/ML using LangChain, LangGraph, and LLMs.
            </p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-4 mb-8 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-2">
                <Phone size={18} />
                <span>+92 320 4522019</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={18} />
                <span>Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} />
                <span>sadiakhalil957@gmail.com</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6 mb-8">
              <a 
                href="https://github.com/SadiaKhalil125" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors hover-lift"
              >
                <Github size={24} className="text-gray-700 dark:text-gray-300" />
              </a>
              <a 
                href="https://www.linkedin.com/in/sadia-khalil-851889261/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors hover-lift"
              >
                <Linkedin size={24} className="text-gray-700 dark:text-gray-300" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 transition-colors hover-lift font-medium"
              >
                View My Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-lg hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-colors hover-lift font-medium"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 