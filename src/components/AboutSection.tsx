import React, { useState, useEffect, useRef } from 'react';
import { Target, Users, Building, Award, TrendingUp, Globe, Code, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const sectionRef = useRef(null);
  const elementRefs = useRef([]);

  const expertiseAreas = [
    {
      id: 'strategy',
      icon: Target,
      title: 'Digital Strategy & Transformation',
      description: 'Leading enterprise-level digital initiatives that bridge business objectives with technical innovation. Experience transforming traditional development teams into agile, high-performing digital units.',
      color: '#FF9900'
    },
    {
      id: 'leadership',
      icon: Users,
      title: 'Executive Team Leadership',
      description: 'Successfully scaled and led cross-functional teams of 50+ members, including frontend developers, backend engineers, UI/UX designers, and product strategists.',
      color: '#EF4444'
    },
    {
      id: 'architecture',
      icon: Building,
      title: 'Enterprise Architecture',
      description: 'Architecting scalable solutions for telecommunications, healthcare, and fintech sectors. Specializing in microservices architecture, web components, and hybrid application strategies.',
      color: '#0EA5E9'
    },
    {
      id: 'community',
      icon: Globe,
      title: 'Community & Knowledge Transfer',
      description: 'Active contributor to AhmedabadJS Community and recognized JavaScript/Angular trainer. Passionate about elevating the broader developer ecosystem through mentorship.',
      color: '#10B981'
    }
  ];

  const businessHighlights = [
    {
      title: 'Telecommunication Platform Leadership',
      description: 'Led a team of 5 frontend developers in architecting a complex telecommunication branding platform, implementing microservices architecture that serves enterprise clients across multiple verticals.',
      impact: 'Microservices Architecture • Enterprise Clients'
    },
    {
      title: 'Big4 Client Success',
      description: 'Spearheaded the technical architecture for an Employee Self Service Portal serving a major Big4 US client, integrating AI capabilities with enterprise systems like Workday.',
      impact: '40% Reduction in Employee Overhead'
    },
    {
      title: 'Cross-Stack Innovation',
      description: 'Successfully delivered projects across React, Angular, and Vue.js ecosystems, demonstrating technology-agnostic leadership focused on choosing the right tool for business outcomes.',
      impact: 'Technology-Agnostic Leadership'
    }
  ];

  const evolutionStages = [
    { years: '2014-2016', stage: 'Foundational Development', tech: 'PHP, AngularJS' },
    { years: '2017-2019', stage: 'Team Leadership & Full-Stack', tech: 'React, Vue.js, Node.js' },
    { years: '2020-2022', stage: 'Architecture & Strategic Roles', tech: 'Microservices, Cloud' },
    { years: '2023-Present', stage: 'Executive Leadership', tech: 'Digital Transformation' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const newVisibleElements = new Set();

      elementRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;
          if (isVisible) {
            newVisibleElements.add(index);
          }
        }
      });

      setVisibleElements(newVisibleElements);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">From Developer to Digital Executive</h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            A unique journey combining deep technical expertise with executive leadership, 
            driving digital transformation through strategic technology decisions.
          </p>
        </div>

        {/* Executive Summary */}
        <div 
          ref={(el) => (elementRefs.current[0] = el)}
          className={`bg-gray-50 p-8 rounded-2xl mb-16 transition-all duration-700 ${
            visibleElements.has(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Executive Summary</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                As Executive Head Digital & UI Architect at Elfonze Technologies, I lead comprehensive digital transformation initiatives while maintaining deep technical involvement in frontend architecture decisions. My unique journey from hands-on developer to C-suite executive provides me with both strategic business acumen and the technical depth to drive meaningful innovation.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-4 py-2 rounded-lg border">
                  <span className="text-2xl font-bold text-gray-900">10+</span>
                  <span className="text-gray-600 ml-2">Years Experience</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg border">
                  <span className="text-2xl font-bold text-gray-900">50+</span>
                  <span className="text-gray-600 ml-2">Team Members Led</span>
                </div>
                <div className="bg-white px-4 py-2 rounded-lg border">
                  <span className="text-2xl font-bold text-gray-900">7</span>
                  <span className="text-gray-600 ml-2">Major Platforms</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 bg-gray-300 rounded-full flex items-center justify-center">
                <Code size={80} className="text-gray-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Philosophy */}
        <div 
          ref={(el) => (elementRefs.current[1] = el)}
          className={`mb-16 transition-all duration-700 delay-200 ${
            visibleElements.has(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Leadership Philosophy</h3>
            <div className="max-w-4xl mx-auto">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">"Technical Leadership Through Empowerment"</h4>
              <blockquote className="text-xl text-gray-700 italic leading-relaxed border-l-4 border-gray-300 pl-6">
                "Great technology organizations aren't built on brilliant individuals—they're built on brilliant systems that empower every team member to contribute their best work. My role is to create those systems while ensuring our technical decisions serve real business outcomes."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Core Expertise Areas */}
        <div 
          ref={(el) => (elementRefs.current[2] = el)}
          className={`mb-16 transition-all duration-700 delay-400 ${
            visibleElements.has(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Core Expertise Areas</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.id}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300"
                      style={{ backgroundColor: area.color }}
                    >
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h4>
                      <p className="text-base text-gray-700 leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Business Impact Highlights */}
        <div 
          ref={(el) => (elementRefs.current[3] = el)}
          className={`mb-16 transition-all duration-700 delay-600 ${
            visibleElements.has(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Business Impact Highlights</h3>
          <div className="space-y-6">
            {businessHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-300 hover:border-gray-600 transition-all duration-300"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-3">{highlight.title}</h4>
                <p className="text-base text-gray-700 mb-3 leading-relaxed">{highlight.description}</p>
                <div className="inline-block bg-white px-4 py-2 rounded-full text-base font-medium text-gray-700">
                  {highlight.impact}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Evolution Timeline */}
        <div 
          ref={(el) => (elementRefs.current[4] = el)}
          className={`mb-16 transition-all duration-700 delay-800 ${
            visibleElements.has(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Technical Evolution Timeline</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {evolutionStages.map((stage, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="text-lg font-bold text-gray-900 mb-2">{stage.years}</div>
                <h4 className="text-base font-semibold text-gray-800 mb-3">{stage.stage}</h4>
                <div className="text-base text-gray-600 bg-white px-3 py-1 rounded-full">
                  {stage.tech}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What Drives Me */}
        <div 
          ref={(el) => (elementRefs.current[5] = el)}
          className={`text-center transition-all duration-700 delay-1000 ${
            visibleElements.has(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-white mx-auto mb-6">
              <Lightbulb size={32} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">What Drives Me</h3>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto mb-6">
              The intersection of people, technology, and business outcomes. I'm energized by transforming complex technical challenges into clear business value while building teams that deliver sustainable innovation.
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="text-left">
                <h4 className="text-base font-semibold text-gray-900 mb-2">Beyond Work</h4>
                <p className="text-base text-gray-700">
                  Contributing to open-source projects, mentoring emerging developers in the AhmedabadJS community, and exploring the latest frontend frameworks to stay ahead of industry trends.
                </p>
              </div>
              <div className="text-left">
                <h4 className="text-base font-semibold text-gray-900 mb-2">Community Impact</h4>
                <p className="text-base text-gray-700">
                  Active contributor to AhmedabadJS Community, recognized JavaScript/Angular trainer, and passionate about elevating the broader developer ecosystem through knowledge sharing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;