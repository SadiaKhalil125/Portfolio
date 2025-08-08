'use client'

import React from 'react'
import { GraduationCap, Target, Award, User, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
              About Me
            </h2>
            <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
              A glimpse into my academic background, career goals, and key experiences.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover-lift transition-shadow shadow-sm hover:shadow-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-full mr-4">
                  <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-2">
                <p className="font-medium text-gray-900 dark:text-white">B.Sc. in Software Engineering</p>
                <p className="text-gray-600 dark:text-gray-400">PUCIT Lahore</p>
                <p className="text-blue-600 dark:text-blue-400 font-semibold">CGPA: 3.91/4.00</p>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg hover-lift transition-shadow shadow-sm hover:shadow-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-full mr-4">
                  <Target className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Objective</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
               A highly motivated and results-oriented Software Engineering student seeking to leverage my skills in full-stack development and AI/ML to contribute to innovative projects.
              </p>
            </motion.div>
          </div>

          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-full mr-4">
                <Award className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Experience Highlights</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0"><Briefcase size={20} className="text-green-500" /></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Machine Learning TA:</strong> Taught 50+ students, leading labs on CNNs, PyTorch, and YOLOv8.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0"><User size={20} className="text-green-500" /></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>DSA Mentor:</strong> Solved 200+ LeetCode problems, conducted hands-on sessions with 50+ students.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                    <div className="mt-1 flex-shrink-0"><Briefcase size={20} className="text-green-500" /></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Event Management:</strong> Organized 2 tech events with 100+ attendees.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-1 flex-shrink-0"><Award size={20} className="text-green-500" /></div>
                  <p className="text-gray-700 dark:text-gray-300">
                    <strong>Hackathon Achievement:</strong> Ranked 7th in a national girls-only hackathon.
                  </p>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About