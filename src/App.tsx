import React from 'react';
import type { NavigationItem, PersonalInfo } from './types';
import { scrollToSection, downloadResume, openContact } from './utils';
import './App.css';

const App: React.FC = () => {
  const navigationItems: NavigationItem[] = [
    { label: 'Resume', href: '#resume' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const personalInfo: PersonalInfo = {
    name: 'Aatman Bhatt',
    title: 'Executive Head Digital & UI Architect',
    description: 'Executive Head Digital & UI Architect with 10+ years of experience scaling teams and driving business outcomes through strategic technology decisions. Let me share my leadership journey with you.',
    photo: '/images/aatman.jpg'
  };

  const handleCTAClick = (action: string) => {
    switch (action) {
      case 'resume':
        downloadResume();
        break;
      case 'projects':
        scrollToSection('projects');
        break;
      case 'contact':
        openContact();
        break;
      default:
        console.log('Unknown action:', action);
    }
  };

  return (
    <div className="min-h-screen bg-executive-gray font-author">
      {/* Navigation Header */}
      <nav className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-executive-orange rounded-full"></div>
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold text-gray-900">{personalInfo.name}</h1>
            <p className="text-sm text-gray-600">{personalInfo.title}</p>
          </div>
        </div>

        <div className="md:flex space-x-8">
          {navigationItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-[80vh] px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Side - Professional Photo */}
            <div className="flex justify-center lg:justify-end order-2 lg:order-1">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gray-400 rounded-full overflow-hidden shadow-2xl">
                  <img
                    src={personalInfo.photo}
                    alt="Professional Headshot"
                    className="w-full h-full object-cover hero-image"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8 order-1 lg:order-2">
            <div>
              <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
                Hello
              </h1>

              <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                Leading Digital Transformation
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed max-w-md">
                {personalInfo.description}
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleCTAClick('resume')}
                className="w-24 h-24 cursor-pointer bg-executive-orange bg-yellow-500 rounded-full flex items-center justify-center text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-200"
                aria-label="Download Resume"
              >
                Resume
              </button>

              <button
                onClick={() => handleCTAClick('projects')}
                className="w-24 h-24 cursor-pointer bg-executive-red bg-red-600 rounded-full flex items-center justify-center text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-red-200"
                aria-label="View Projects"
              >
                Projects
              </button>

              <button
                onClick={() => handleCTAClick('contact')}
                className="w-24 h-24 cursor-pointer bg-executive-blue bg-cyan-600 rounded-full flex items-center justify-center text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-cyan-200"
                aria-label="Contact Me"
              >
                Contact
              </button>
            </div>
          </div>
        </div></div>
      </main>
    </div>
  );
};

export default App;