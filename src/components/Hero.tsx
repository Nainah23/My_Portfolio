// src/components/Hero.tsx
"use client"
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/Nainah23',
    icon: Github,
  },
  {
    name: 'Email',
    href: 'mailto:kamauwainaina29@gmail.com',
    icon: Mail,
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kamau-wainaina-534616189/',
    icon: Linkedin,
  }
]

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-semibold">Hi, I'm</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-2">
              Ian Wainaina Kamau
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mt-4">
              Full Stack Developer & Data Analytics Enthusiast
            </h2>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              A versatile software engineer with expertise in building scalable web solutions 
              and data analytics-driven platforms. Passionate about creating impactful 
              applications that solve real-world problems.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Get in Touch
              </a>
              <a href="#projects" className="btn-outline">
                View Projects
              </a>
            </div>

            <div className="mt-8 flex gap-6">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors"
                  >
                    <Icon size={24} />
                  </a>
                )
              })}
            </div>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/10 rounded-full filter blur-3xl"></div>
                <div className="relative bg-gradient-to-br from-primary to-secondary p-1 rounded-full">
                  <div className="bg-white dark:bg-dark rounded-full p-8">
                    <img
                      src="/Profile.jpg"
                      alt="Ian Wainaina Kamau"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

        </div>
      </div>
    </section>
  )
}