'use client'

import React from 'react'
import { GraduationCap, Target, Award, User, Briefcase, Code, Users, Terminal } from 'lucide-react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-[#0B1120] relative overflow-hidden transition-colors">
      
      {/* Tech Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.03] dark:opacity-[0.05]" 
        style={{
          backgroundImage: `linear-gradient(#64748b 1px, transparent 1px), linear-gradient(to right, #64748b 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center p-2 mb-4 bg-cyan-500/10 rounded-lg">
              <User className="text-cyan-600 dark:text-cyan-400" size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              About <span className="text-cyan-600 dark:text-cyan-400">Me</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-mono text-sm">
              &gt; INITIALIZING PROFILE SUMMARY...
              <br/>
              &gt; LOADING ACADEMIC & CAREER DATA...
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            
            {/* Education Card - Tech Style */}
            <motion.div
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg mr-4 group-hover:bg-cyan-500/10 transition-colors">
                  <GraduationCap className="text-slate-700 dark:text-slate-300 group-hover:text-cyan-500" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-wider">Education</h3>
              </div>
              <div className="space-y-3 font-mono text-sm">
                <p className="text-cyan-600 dark:text-cyan-400 font-bold">B.Sc. Software Engineering</p>
                <p className="text-slate-600 dark:text-slate-400">PUCIT Lahore</p>
                <div className="inline-block px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded border border-emerald-500/20">
                  CGPA: 3.90 / 4.00
                </div>
              </div>
            </motion.div>

            {/* Objective Card - Tech Style */}
            <motion.div
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-xl hover:border-cyan-500/50 transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg mr-4 group-hover:bg-cyan-500/10 transition-colors">
                  <Target className="text-slate-700 dark:text-slate-300 group-hover:text-cyan-500" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-wider">Objective</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed border-l-2 border-cyan-500/30 pl-4">
                Final-year Software Engineering student architecting full-stack and AI-driven applications using <span className="text-slate-900 dark:text-white font-medium">React, FastAPI, .NET, and LLMs</span>. Seeking a role as a <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Web & AI/ML Engineer</span>.
              </p>
            </motion.div>
          </div>

          {/* Experience Log Section */}
          <motion.div
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 rounded-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {/* Decorative Top Bar */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>

            <div className="flex items-center mb-8">
              <Award className="text-cyan-600 dark:text-cyan-400 mr-3" size={24} />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white uppercase tracking-wider">Experience Logs</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
              
              <ExperienceItem 
                icon={<Briefcase size={18} />}
                title="Software Engineer @ Spiral Labs"
                desc="Developed software products using modern JavaScript frameworks."
              />
              

              <ExperienceItem 
                icon={<Users size={18} />}
                title="Teaching Assistant (TA)"
                desc="Mentored students in Web Engineering (DOTNET C#), ML (CNNs, PyTorch), and OOP/PF (C++)."
              />

              <ExperienceItem 
                icon={<Terminal size={18} />}
                title="DSA Mentor"
                desc="Solved a number of LeetCode problems and conducted sessions for peers."
              />

              <ExperienceItem 
                icon={<User size={18} />}
                title="Class Representative"
                desc="Liaised between students and faculty; advocated for peers throughout the degree."
              />

              <ExperienceItem 
                icon={<Award size={18} />}
                title="Events & Hackathons"
                desc="Member of Event Management Society (Production Team) and hackathon participant."
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Helper Component for consistency
const ExperienceItem = ({ icon, title, desc }) => (
  <div className="flex items-start space-x-4 group">
    <div className="mt-1 flex-shrink-0 p-2 bg-slate-100 dark:bg-slate-800 rounded text-slate-500 dark:text-slate-400 group-hover:text-cyan-500 group-hover:bg-cyan-500/10 transition-colors">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm mb-1 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
        {title}
      </h4>
      <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-l border-slate-200 dark:border-slate-700 pl-3">
        {desc}
      </p>
    </div>
  </div>
)

export default About