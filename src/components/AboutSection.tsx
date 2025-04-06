import React from 'react';
export function AboutSection() {
  return <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-12"></div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">Who I am</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                I'm a passionate frontend developer with 5+ years of experience
                creating responsive and intuitive user interfaces. Based in San
                Francisco, I specialize in building modern web applications
                using React and TypeScript.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                When I'm not coding, you can find me hiking, reading sci-fi
                novels, or experimenting with new cooking recipes. I'm
                constantly learning and exploring new technologies to stay at
                the forefront of web development.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">
                Education & Experience
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium">Senior Frontend Developer</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    TechCorp Inc. | 2020 - Present
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">Frontend Developer</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    WebSolutions | 2018 - 2020
                  </p>
                </div>
                <div>
                  <h4 className="font-medium">B.S. Computer Science</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    University of Technology | 2014 - 2018
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}