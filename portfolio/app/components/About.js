'use client'

import React from 'react'
import { GraduationCap, Target, Award } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover-lift transition-colors">
              <div className="flex items-center mb-4">
                <GraduationCap className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-gray-900 dark:text-white">Bachelor of Science in Software Engineering</p>
                <p className="text-gray-600 dark:text-gray-400">PUCIT Lahore</p>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">CGPA: 3.91/4.00</p>
              </div>
            </div>

            {/* Objective */}
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover-lift transition-colors">
              <div className="flex items-center mb-4">
                <Target className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Objective</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Final-year Software Engineering student with a dual focus in full-stack development 
                and applied AI/ML, seeking to build intelligent and scalable software solutions.
              </p>
            </div>
          </div>

          {/* Experience Highlights */}
          <div className="mt-12 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md hover-lift transition-colors">
            <div className="flex items-center mb-6">
              <Award className="text-purple-600 dark:text-purple-400 mr-3" size={24} />
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Experience Highlights</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Machine Learning TA:</strong> Taught 50+ students, leading labs on CNNs, PyTorch, and YOLOv8
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>DSA Mentor:</strong> Solved 160+ LeetCode problems, conducted hands-on sessions with 50+ students
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Event Management:</strong> Organized 2 tech events with 100+ attendees
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 dark:bg-purple-400 rounded-full mt-2 mr-3"></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Hackathon Achievement:</strong> Ranked 7th in a national girls-only hackathon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 