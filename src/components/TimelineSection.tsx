import React, { useState, useEffect, useRef } from 'react';
import { Calendar, Users, TrendingUp, Award, Building, Code } from 'lucide-react';

const TimelineSection = () => {
  const [visibleItems, setVisibleItems] = useState(new Set());
  const sectionRef = useRef(null);
  const itemRefs = useRef([]);

  const timelineData = [
    {
      id: 1,
      year: "2024-Present",
      title: "Executive Head Digital & UI Architect",
      company: "Elfonze Technologies",
      side: "left",
      icon: Building,
      description: "Leading comprehensive digital transformation initiatives with executive oversight of 50+ cross-functional team members.",
      achievements: [
        "Full digital department oversight",
        "Enterprise transformation leadership", 
        "Strategic business-technology alignment"
      ],
      technologies: ["Strategic Leadership", "Digital Transformation", "Team Management"],
      color: "#FF9900"
    },
    {
      id: 2,
      year: "2022-2023",
      title: "Frontend Lead & Technical Architect",
      company: "Multi-Project Leadership",
      side: "right",
      icon: Code,
      description: "Led multiple project teams delivering Big4 client solutions with AI integration and microservices architecture.",
      achievements: [
        "Led 5-6 developers per project team",
        "Delivered Big4 client AI solutions",
        "Technical design documentation ownership"
      ],
      technologies: ["Angular", "Spring Boot", "WebComponents", "OpenAI"],
      color: "#EF4444"
    },
    {
      id: 3,
      year: "2020-2021",
      title: "Senior Architect & Project Manager",
      company: "Full-Stack Architecture Leadership",
      side: "left",
      icon: Award,
      description: "End-to-end project ownership with client-facing project management and technical architecture leadership.",
      achievements: [
        "Client-facing project management",
        "Technical architecture decisions",
        "Direct stakeholder communication"
      ],
      technologies: ["React", "Core Java", "Jetty", "TCP Integration"],
      color: "#0EA5E9"
    },
    {
      id: 4,
      year: "2018-2019",
      title: "Senior Developer & Community Trainer",
      company: "Technical Excellence + Knowledge Transfer",
      side: "right",
      icon: Users,
      description: "Individual contributor excellence while building training programs and contributing to AhmedabadJS community.",
      achievements: [
        "JavaScript/Angular corporate trainer",
        "AhmedabadJS community contributor",
        "Complex system development leadership"
      ],
      technologies: ["Vue.js", "AngularJS", "AWS EKS", "Microservices"],
      color: "#FF9900"
    },
    {
      id: 5,
      year: "2016-2017", 
      title: "Full-Stack Developer",
      company: "Multi-Technology Expertise Building",
      side: "left",
      icon: TrendingUp,
      description: "Team member with increasing responsibilities, client deployments, and user acceptance testing leadership.",
      achievements: [
        "Client location deployments",
        "User acceptance testing leadership",
        "Full-stack development mastery"
      ],
      technologies: ["Angular", "ReactJS", "Node.js", "MySQL"],
      color: "#EF4444"
    },
    {
      id: 6,
      year: "2014-2015",
      title: "Frontend Developer",
      company: "Foundation Years",
      side: "right",
      icon: Calendar,
      description: "Individual contributor learning core technologies and leading Flash to HTML5/AngularJS migration initiatives.",
      achievements: [
        "Flash to HTML5/AngularJS migration leadership",
        "Frontend specialization development",
        "Design pattern mastery"
      ],
      technologies: ["PHP", "AngularJS", "FabricJS", "MySQL"],
      color: "#0EA5E9"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const newVisibleItems = new Set();

      itemRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;
          if (isVisible) {
            newVisibleItems.add(index);
          }
        }
      });

      setVisibleItems(newVisibleItems);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      id="timeline" 
      ref={sectionRef}
      className="py-20 bg-gray-50"
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold text-gray-900 mb-6">A Decade of Technical Leadership Evolution</h2>
        <p className="text-2xl text-gray-600">
          From individual contributor to executive leadership
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative max-w-6xl mx-auto px-6">
        
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 top-0 bottom-0"></div>

        {/* Timeline Items */}
        <div className="space-y-16">
          {timelineData.map((item, index) => {
            const Icon = item.icon;
            const isVisible = visibleItems.has(index);
            
            return (
              <div 
                key={item.id} 
                ref={(el) => (itemRefs.current[index] = el)}
                className="relative flex items-center"
              >
                
                {/* Timeline Marker */}
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 z-20 rounded-full flex items-center justify-center text-white transition-all duration-500"
                  style={{
                    width: isVisible ? '48px' : '32px',
                    height: isVisible ? '48px' : '32px',
                    backgroundColor: isVisible ? item.color : '#9ca3af',
                    boxShadow: isVisible ? `0 0 20px ${item.color}40` : 'none'
                  }}
                >
                  <Icon size={isVisible ? 24 : 16} />
                </div>

                {/* Timeline Content Card */}
                <div
                  className={`relative w-5/12 transition-all duration-700 ${
                    item.side === 'left' ? 'mr-auto pr-12' : 'ml-auto pl-12'
                  } ${
                    isVisible 
                      ? 'opacity-100 translate-x-0' 
                      : `opacity-0 ${item.side === 'left' ? '-translate-x-16' : 'translate-x-16'}`
                  }`}
                >
                  <div 
                    className="bg-white border-2 p-6 shadow-lg transition-all duration-500"
                    style={{
                      borderColor: isVisible ? item.color : '#e5e7eb'
                    }}
                  >
                    {/* Year Badge */}
                    <div 
                      className="inline-block px-4 py-2 text-sm font-bold text-white mb-4 rounded-full"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.year}
                    </div>

                    {/* Title & Company */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-base text-gray-600 mb-4 font-medium">{item.company}</p>

                    {/* Description */}
                    <p className="text-base text-gray-700 mb-4 leading-relaxed">{item.description}</p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-base font-semibold text-gray-800 mb-2">Key Achievements</h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <span className="text-green-600 text-xs mt-1">✓</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="mt-16 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">Leadership Evolution Summary</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">6</div>
              <div className="text-gray-600 font-medium">Career Stages</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Team Members Led</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-800 mb-2">10</div>
              <div className="text-gray-600 font-medium">Years Growth</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;