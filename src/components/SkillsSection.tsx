import React from 'react';
import { CodeIcon, LayoutIcon, PencilRulerIcon, ServerIcon, SettingsIcon, SmartphoneIcon } from 'lucide-react';
export function SkillsSection() {
  const skills = [{
    icon: <CodeIcon className="w-8 h-8" />,
    title: 'Frontend Development',
    description: 'React, TypeScript, Next.js, Tailwind CSS, JavaScript, HTML, CSS'
  }, {
    icon: <LayoutIcon className="w-8 h-8" />,
    title: 'UI/UX Design',
    description: 'Figma, Adobe XD, Responsive Design, User-centered Design'
  }, {
    icon: <ServerIcon className="w-8 h-8" />,
    title: 'Backend Integration',
    description: 'RESTful APIs, GraphQL, Firebase, Authentication'
  }, {
    icon: <SmartphoneIcon className="w-8 h-8" />,
    title: 'Responsive Design',
    description: 'Mobile-first Approach, Cross-browser Compatibility'
  }, {
    icon: <SettingsIcon className="w-8 h-8" />,
    title: 'Development Tools',
    description: 'Git, npm, Webpack, Vite, Jest, Testing Library'
  }, {
    icon: <PencilRulerIcon className="w-8 h-8" />,
    title: 'Creative Problem Solving',
    description: 'Performance Optimization, Debugging, Technical Architecture'
  }];
  return <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-gray-700 dark:text-gray-300">
            Here are some of the technologies and skills I've been working with
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-blue-600 dark:text-blue-400 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {skill.description}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
}