import React, { useState } from 'react';
import { MenuIcon, XIcon, MoonIcon, SunIcon } from 'lucide-react';
interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}
export function Header({
  darkMode,
  setDarkMode
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigation = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold tracking-tight">
            John Doe
          </a>
        </div>
        {/* Desktop navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navigation.map(item => <a key={item.name} href={item.href} className="text-sm font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {item.name}
            </a>)}
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle dark mode">
            {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          </button>
        </div>
        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle dark mode">
            {darkMode ? <SunIcon className="w-5 h-5" /> : <MoonIcon className="w-5 h-5" />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle menu">
            {mobileMenuOpen ? <XIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && <div className="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4 py-3 space-y-1">
            {navigation.map(item => <a key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {item.name}
              </a>)}
          </div>
        </div>}
    </header>;
}