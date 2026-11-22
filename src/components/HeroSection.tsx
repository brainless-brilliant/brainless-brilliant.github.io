import React from 'react';

const HeroSection = () => {
  const personalInfo = {
    name: 'Aatman Bhatt',
    title: 'Executive Head Digital & UI Architect',
    description: 'Executive Head Digital & UI Architect with 10+ years of experience scaling teams and driving business outcomes through strategic technology decisions. Let me share my leadership journey with you.',
    photo: '/images/aatman.jpg'
  };

  return (
    <section id="hero" className="min-h-screen bg-executive-gray font-author">
      {/* Navigation Header */}
      <nav className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-executive-orange rounded-full"></div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-semibold text-gray-900">{personalInfo.name}</h1>
            <p className="text-base text-gray-600">{personalInfo.title}</p>
          </div>
        </div>

        <div className="md:flex space-x-8">
          <a href="#tools" className="text-lg text-gray-600 hover:text-gray-900 transition-colors duration-200">
            Tools
          </a>
          <a href="#resume" className="text-lg text-gray-600 hover:text-gray-900 transition-colors duration-200">
            Resume
          </a>
          <a href="#projects" className="text-lg text-gray-600 hover:text-gray-900 transition-colors duration-200">
            Projects
          </a>
          <a href="#contact" className="text-lg text-gray-600 hover:text-gray-900 transition-colors duration-200">
            Contact
          </a>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex flex-col justify-between min-h-[80vh] h-[90vh] px-8">
        <div className="flex-1 flex items-center justify-center">
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
                  <h1 className="text-7xl lg:text-8xl font-bold text-gray-900 mb-4">
                    Hello
                  </h1>

                  <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                    Leading Digital Transformation
                  </h2>

                  <p className="text-xl text-gray-600 leading-relaxed max-w-md">
                    {personalInfo.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Contact Information */}
        <div className="border-t border-gray-300 pt-6 pb-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
              
              {/* Phone */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone</h3>
                <p className="text-base text-gray-600">+91 98765 43210</p>
              </div>

              {/* Email */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-base text-gray-600">aatman@example.com</p>
              </div>

              {/* Follow Me */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow Me</h3>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a 
                    href="https://linkedin.com/in/aatman-bhatt" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-600 text-white rounded flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                  >
                    in
                  </a>
                  <a 
                    href="https://github.com/aatman-bhatt" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-600 text-white rounded flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                  >
                    gh
                  </a>
                  <a 
                    href="https://twitter.com/aatman_bhatt" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-8 h-8 bg-gray-600 text-white rounded flex items-center justify-center hover:bg-gray-800 transition-colors duration-200"
                  >
                    tw
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeroSection;