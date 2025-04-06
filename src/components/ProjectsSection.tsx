import React, { useState, Component } from 'react';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [{
    id: 'all',
    name: 'All'
  }, {
    id: 'web',
    name: 'Web Apps'
  }, {
    id: 'ui',
    name: 'UI Design'
  }, {
    id: 'other',
    name: 'Other'
  }];
  const projects = [{
    id: 1,
    title: 'E-commerce Dashboard',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'A responsive admin dashboard for e-commerce businesses with analytics and inventory management.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
    demoLink: '#',
    githubLink: '#'
  }, {
    id: 2,
    title: 'Travel App UI Design',
    category: 'ui',
    image: 'https://images.unsplash.com/photo-1476900966873-ab290e38e3f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'A sleek and modern UI design for a travel booking application with user-friendly interfaces.',
    technologies: ['Figma', 'Adobe XD', 'UI/UX', 'Prototyping'],
    demoLink: '#',
    githubLink: '#'
  }, {
    id: 3,
    title: 'Task Management App',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'A productivity application that helps users organize tasks, set priorities, and track progress.',
    technologies: ['React', 'Redux', 'Firebase', 'Styled Components'],
    demoLink: '#',
    githubLink: '#'
  }, {
    id: 4,
    title: 'Portfolio Template',
    category: 'ui',
    image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'A customizable portfolio template for creative professionals with multiple layout options.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
    demoLink: '#',
    githubLink: '#'
  }, {
    id: 5,
    title: 'Weather Forecast Widget',
    category: 'other',
    image: 'https://images.unsplash.com/photo-1530908295418-a12e326966ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'A weather widget that displays current conditions and forecasts based on geolocation.',
    technologies: ['JavaScript', 'Weather API', 'CSS Animations'],
    demoLink: '#',
    githubLink: '#'
  }, {
    id: 6,
    title: 'Recipe Finder App',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1556911261-6bd341186b2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'An application that allows users to search for recipes based on ingredients they have.',
    technologies: ['React', 'Node.js', 'MongoDB', 'RESTful API'],
    demoLink: '#',
    githubLink: '#'
  }];
  const filteredProjects = activeCategory === 'all' ? projects : projects.filter(project => project.category === activeCategory);
  return <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Check out some of my recent work
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category.id ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700'}`}>
                {category.name}
              </button>)}
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <div key={project.id} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => <span key={index} className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-md text-xs font-medium">
                      {tech}
                    </span>)}
                </div>
                <div className="flex justify-between">
                  <a href={project.demoLink} className="flex items-center text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium" target="_blank" rel="noopener noreferrer">
                    Live Demo <ExternalLinkIcon className="w-4 h-4 ml-1" />
                  </a>
                  <a href={project.githubLink} className="flex items-center text-gray-700 dark:text-gray-300 hover:underline text-sm font-medium" target="_blank" rel="noopener noreferrer">
                    Code <GithubIcon className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}