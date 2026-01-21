'use client'

import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, MessageSquare, ArrowRight } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={18} />,
      label: 'EMAIL_ADDRESS',
      value: 'sadiakhalil957@gmail.com',
      link: 'mailto:sadiakhalil957@gmail.com',
      color: 'text-cyan-600 dark:text-cyan-400'
    },
    {
      icon: <Phone size={18} />,
      label: 'PHONE_NUMBER',
      value: '+92 320 4522019',
      link: 'tel:+923204522019',
      color: 'text-emerald-600 dark:text-emerald-400'
    },
    {
      icon: <MapPin size={18} />,
      label: 'CURRENT_LOC',
      value: 'Lahore, Pakistan',
      link: null,
      color: 'text-rose-600 dark:text-rose-400'
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sadia-khalil-851889261/',
      icon: <Linkedin size={20} />,
      className: 'bg-[#0077b5] border-[#0077b5] text-white'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/SadiaKhalil125',
      icon: <Github size={20} />,
      className: 'bg-[#24292e] dark:bg-white dark:text-[#24292e] text-white border-[#24292e] dark:border-white'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-[#0B1120] relative transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
              Initialize <span className="text-cyan-600 dark:text-cyan-400">Connection</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Open to new opportunities, collaborations, and technical discussions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Channel 1: Direct Contact */}
            <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/30 transition-all">
              <div className="flex items-center mb-8">
                <div className="p-2 bg-slate-100 dark:bg-slate-800 rounded mr-3">
                    <MessageSquare className="text-slate-700 dark:text-slate-300" size={20} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-mono uppercase">Direct Lines</h3>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="group">
                    <p className="text-xs font-mono text-slate-400 dark:text-slate-500 mb-1">{item.label}</p>
                    <div className="flex items-center space-x-3">
                      <span className={`${item.color} group-hover:scale-110 transition-transform`}>{item.icon}</span>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-slate-800 dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors font-medium text-lg"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-slate-800 dark:text-slate-200 font-medium text-lg">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Channel 2: Social & Signals */}
            <div className="flex flex-col gap-6">
                
              {/* Social Block */}
              <div className="bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-cyan-500/30 transition-all flex-grow">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-mono uppercase mb-6">Network Nodes</h3>
                
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-between p-4 rounded-lg border transition-all hover:translate-x-1 ${social.className}`}
                    >
                      <div className="flex items-center space-x-3">
                        {social.icon}
                        <span className="font-bold">{social.name}</span>
                      </div>
                      <ArrowRight size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Status Block */}
              <div className="bg-slate-900 dark:bg-cyan-950/20 p-6 rounded-xl border border-slate-800 dark:border-cyan-900/50">
                <p className="text-xs font-mono text-cyan-500 mb-3">&gt; CURRENT_SEEKING_STATUS:</p>
                <ul className="text-sm text-slate-300 dark:text-cyan-100 space-y-2 font-mono">
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span> Software Engineering Roles</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span> AI/ML Development</li>
                  <li className="flex items-center"><span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2"></span> Full-Stack Projects</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Master CTA */}
          <div className="mt-12 text-center">
            <a 
              href="mailto:sadiakhalil957@gmail.com"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-700 to-blue-700 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(8,145,178,0.3)] font-bold tracking-wide"
            >
              <Mail size={20} />
              <span>TRANSMIT MESSAGE</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact