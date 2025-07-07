'use client'

import React from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle } from 'lucide-react'

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-blue-600 dark:text-blue-400" size={20} />,
      label: 'Email',
      value: 'sadiakhalil957@gmail.com',
      link: 'mailto:sadiakhalil957@gmail.com'
    },
    {
      icon: <Phone className="text-green-600 dark:text-green-400" size={20} />,
      label: 'Phone',
      value: '+92 320 4522019',
      link: 'tel:+923204522019'
    },
    {
      icon: <MapPin className="text-red-600 dark:text-red-400" size={20} />,
      label: 'Location',
      value: 'Lahore, Pakistan',
      link: null
    }
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sadia-khalil-851889261/',
      icon: <Linkedin size={24} />,
      color: 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/SadiaKhalil125',
      icon: <Github size={24} />,
      color: 'bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 transition-colors">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 gradient-text">
            Let's Connect
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift transition-colors">
              <div className="flex items-center mb-6">
                <MessageCircle className="text-blue-600 dark:text-blue-400 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Get In Touch</h3>
              </div>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    {item.icon}
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{item.label}</p>
                      {item.link ? (
                        <a 
                          href={item.link}
                          className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-800 dark:text-gray-200 font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links & Quick Actions */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover-lift transition-colors">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Connect on Social Media</h3>
              
              <div className="space-y-4 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-3 rounded-lg text-white transition-colors ${social.color}`}
                  >
                    {social.icon}
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 p-4 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                  <strong>Looking for:</strong>
                </p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Software Engineering opportunities</li>
                  <li>• AI/ML development projects</li>
                  <li>• Full-stack development roles</li>
                  <li>• Open source collaborations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="mb-6 opacity-90">
                I'm excited to contribute to innovative projects and grow as a software engineer. 
                Let's build something amazing together!
              </p>
              <a 
                href="mailto:sadiakhalil957@gmail.com"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 dark:bg-gray-100 dark:hover:bg-gray-200 transition-colors font-medium hover-lift"
              >
                <Mail size={20} />
                <span>Send Me an Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact 