import React from 'react';
export function Footer() {
  return <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold">
              John Doe
            </a>
            <p className="text-gray-400 text-sm mt-1">
              Frontend Developer & UI Designer
            </p>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
            <div className="mt-2 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <span className="mx-2 text-gray-600">|</span>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}