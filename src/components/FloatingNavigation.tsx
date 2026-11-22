import { useState, useEffect } from 'react';
import { Briefcase, Clock, Code, Mail, User, UserStar, Wrench } from 'lucide-react';

const FloatingNavigation = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
  { 
    id: 'hero', 
    label: 'Hello', 
    icon: UserStar, 
    hoverColor: '#FF9900',
    action: () => scrollToSection('hero')
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: Wrench,
    hoverColor: '#10B981',
    action: () => scrollToSection('tools')
  },
  { 
    id: 'about', 
    label: 'About', 
    icon: User, 
    hoverColor: '#10B981',
    action: () => scrollToSection('about')
  },
  { 
    id: 'projects', 
    label: 'Projects', 
    icon: Briefcase, 
    hoverColor: '#EF4444',
    action: () => scrollToSection('projects')
  },
  { 
    id: 'timeline', 
    label: 'Journey', 
    icon: Clock, 
    hoverColor: '#8B5CF6',
    action: () => scrollToSection('timeline')
  },
  { 
    id: 'skills', 
    label: 'Skills', 
    icon: Code, 
    hoverColor: '#F59E0B',
    action: () => scrollToSection('skills')
  },
  { 
    id: 'contact', 
    label: 'Contact', 
    icon: Mail, 
    hoverColor: '#0EA5E9',
    action: () => scrollToSection('contact')
  }
];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden md:block fixed right-6 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col space-y-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          
          return (
            <div
              key={item.id}
              className="group flex items-center cursor-pointer"
              onClick={item.action}
            >
              {/* Navigation Button */}
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out bg-gray-300 text-gray-600 shadow-md group-hover:text-white group-hover:scale-105 group-hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-opacity-50"
                style={{
                  backgroundColor: 'var(--hover-bg, #d1d5db)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.setProperty('--hover-bg', item.hoverColor);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.setProperty('--hover-bg', '#d1d5db');
                }}
              >
                <Icon size={24} />
              </div>
              
              {/* Label - slides in on hover */}
              <div 
                className="ml-4 px-4 py-2 rounded-lg shadow-md transform transition-all duration-300 ease-in-out opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:-translate-x-1 pointer-events-none bg-gray-300"
                style={{
                  backgroundColor: 'var(--hover-bg-label, #d1d5db)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.setProperty('--hover-bg-label', item.hoverColor);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.setProperty('--hover-bg-label', '#d1d5db');
                }}
              >
                <span className="text-sm font-semibold text-gray-100 group-hover:text-black whitespace-nowrap"
                  style={{
                    backgroundColor: 'var(--hover-bg-label, #d1d5db)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.setProperty('--hover-bg-label', item.hoverColor);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.setProperty('--hover-bg-label', '#d1d5db');
                  }}
                >
                  {item.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FloatingNavigation;