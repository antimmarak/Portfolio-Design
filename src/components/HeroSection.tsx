import React from 'react';
import { ArrowDownIcon, GithubIcon, LinkedinIcon, TwitterIcon } from 'lucide-react';
export function HeroSection() {
  return <section id="home" className="relative pt-20 pb-32 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Hi, I'm{' '}
              <span className="text-blue-600 dark:text-blue-400">John Doe</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-400 font-medium">
              Frontend Developer & UI Designer
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl">
              I build exceptional digital experiences that are fast, accessible,
              visually appealing, and responsive. Let's create something amazing
              together.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                Get in touch
              </a>
              <a href="#projects" className="px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 font-medium rounded-lg transition-colors">
                View my work
              </a>
            </div>
            <div className="flex items-center gap-4 pt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="GitHub">
                <GithubIcon className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors" aria-label="Twitter">
                <TwitterIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="John Doe" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <a href="#about" className="flex items-center justify-center w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow animate-bounce" aria-label="Scroll down">
            <ArrowDownIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </a>
        </div>
      </div>
    </section>;
}