import React, { useState, useEffect, useRef } from 'react';
import { Users, Code, Cloud, Award, Briefcase, TrendingUp, Target, Globe } from 'lucide-react';

const SkillsSection = () => {
  const [visibleCategories, setVisibleCategories] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState('leadership');
  const sectionRef = useRef(null);
  const categoryRefs = useRef([]);

  const skillCategories = [
    {
      id: 'leadership',
      title: 'Leadership & Executive Skills',
      icon: Users,
      color: '#FF9900',
      description: 'Strategic leadership and team management expertise',
      skills: [
        { 
          name: 'Digital Strategy & Transformation', 
          level: 95, 
          years: '8+ years',
          description: 'Enterprise digital transformation initiatives and technology roadmap development'
        },
        { 
          name: 'Team Leadership & Development', 
          level: 98, 
          years: '6+ years',
          description: 'Successfully scaled teams from 3 to 50+ members across multiple projects'
        },
        { 
          name: 'Project & Product Management', 
          level: 90, 
          years: '5+ years',
          description: 'PI Planning, Sprint methodology, and enterprise-level delivery ownership'
        },
        { 
          name: 'Community Leadership', 
          level: 88, 
          years: '5+ years',
          description: 'AhmedabadJS community contribution and corporate training programs'
        }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Architecture & Development',
      icon: Code,
      color: '#EF4444',
      description: 'Modern frontend technologies and architecture patterns',
      skills: [
        { 
          name: 'Angular Ecosystem', 
          level: 98, 
          years: '10+ years',
          description: 'AngularJS to Modern Angular, enterprise patterns, micro-frontends'
        },
        { 
          name: 'React Ecosystem', 
          level: 90, 
          years: '6+ years',
          description: 'Modern React, hooks, performance patterns, embedded applications'
        },
        { 
          name: 'Vue.js Ecosystem', 
          level: 85, 
          years: '4+ years',
          description: 'Vue 2 & 3, composition API, enterprise applications'
        },
        { 
          name: 'Web Components & Micro-Frontends', 
          level: 88, 
          years: '3+ years',
          description: 'Stencil.js, cross-framework component libraries, design systems'
        }
      ]
    },
    {
      id: 'backend',
      title: 'Backend & Full-Stack Architecture',
      icon: Globe,
      color: '#0EA5E9',
      description: 'Server-side technologies and system integration',
      skills: [
        { 
          name: 'Node.js Ecosystem', 
          level: 88, 
          years: '7+ years',
          description: 'Express.js, Fastify, microservices, real-time applications'
        },
        { 
          name: 'Java Enterprise Development', 
          level: 80, 
          years: '4+ years',
          description: 'Spring Boot, microservices, TCP integration, enterprise patterns'
        },
        { 
          name: 'Database & Data Architecture', 
          level: 85, 
          years: '8+ years',
          description: 'MySQL optimization, MongoDB, Firebase, multi-million record systems'
        },
        { 
          name: 'API Design & Integration', 
          level: 92, 
          years: '8+ years',
          description: 'RESTful services, third-party integrations, enterprise system connectivity'
        }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps Leadership',
      icon: Cloud,
      color: '#10B981',
      description: 'Cloud infrastructure and deployment automation',
      skills: [
        { 
          name: 'AWS Cloud Architecture', 
          level: 85, 
          years: '5+ years',
          description: 'EKS, Kubernetes, container orchestration, service mesh implementation'
        },
        { 
          name: 'Development Operations', 
          level: 88, 
          years: '6+ years',
          description: 'CI/CD pipelines, automated testing, deployment strategies'
        },
        { 
          name: 'Performance & Monitoring', 
          level: 90, 
          years: '8+ years',
          description: 'Application optimization, user analytics, system reliability'
        },
        { 
          name: 'Security & Compliance', 
          level: 75, 
          years: '5+ years',
          description: 'Enterprise security patterns, data protection, audit compliance'
        }
      ]
    },
    {
      id: 'emerging',
      title: 'Emerging Technologies & Innovation',
      icon: TrendingUp,
      color: '#8B5CF6',
      description: 'Cutting-edge technologies and future-focused development',
      skills: [
        { 
          name: 'AI & Machine Learning Integration', 
          level: 78, 
          years: '2+ years',
          description: 'OpenAI integration, Generative AI chat, Spring AI framework'
        },
        { 
          name: 'Mobile & Hybrid Development', 
          level: 85, 
          years: '4+ years',
          description: 'Ionic framework, Capacitor, Progressive Web Apps, cross-platform'
        },
        { 
          name: 'Advanced Frontend Technologies', 
          level: 88, 
          years: '5+ years',
          description: 'Canvas/Graphics (Fabric.js), WebGL, Three.js, advanced browser APIs'
        },
        { 
          name: 'Innovation & R&D', 
          level: 90, 
          years: '10+ years',
          description: 'Technology evaluation, POC development, future trend analysis'
        }
      ]
    },
    {
      id: 'business',
      title: 'Business & Analytical Skills',
      icon: Briefcase,
      color: '#F59E0B',
      description: 'Strategic business acumen and executive decision making',
      skills: [
        { 
          name: 'Technical Decision Making', 
          level: 95, 
          years: '5+ years',
          description: 'Technology evaluation, architecture decisions, ROI analysis'
        },
        { 
          name: 'Stakeholder Management', 
          level: 92, 
          years: '4+ years',
          description: 'C-Suite communication, client relations, cross-functional collaboration'
        },
        { 
          name: 'Business Impact Analysis', 
          level: 88, 
          years: '6+ years',
          description: 'Revenue impact measurement, cost-benefit analysis, KPI tracking'
        },
        { 
          name: 'Knowledge Transfer & Mentorship', 
          level: 98, 
          years: '5+ years',
          description: 'Corporate training, curriculum development, team skill enhancement'
        }
      ]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const newVisibleCategories = new Set();

      categoryRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const isVisible = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;
          if (isVisible) {
            newVisibleCategories.add(index);
          }
        }
      });

      setVisibleCategories(newVisibleCategories);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const selectedCategoryData = skillCategories.find(cat => cat.id === selectedCategory);

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Executive-Level Technical Expertise</h2>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
            A decade of hands-on development evolution into strategic technology leadership
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            const isActive = selectedCategory === category.id;
            
            return (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  isActive 
                    ? 'text-white shadow-lg scale-105' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                }`}
                style={{
                  backgroundColor: isActive ? category.color : undefined
                }}
              >
                <Icon size={20} />
                <span className="hidden md:inline">{category.title}</span>
                <span className="md:hidden">{category.title.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Details */}
        {selectedCategoryData && (
          <div className="mb-16">
            <div 
              className="bg-gray-50 border-l-4 p-8 mb-8 transition-all duration-300"
              style={{ borderColor: selectedCategoryData.color }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: selectedCategoryData.color }}
                >
                  <selectedCategoryData.icon size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedCategoryData.title}</h3>
                  <p className="text-gray-600">{selectedCategoryData.description}</p>
                </div>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {selectedCategoryData.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  {/* Skill Header */}
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-lg font-bold text-gray-900">{skill.name}</h4>
                    <span className="text-sm font-medium text-gray-600 bg-white px-3 py-1 rounded-full">
                      {skill.years}
                    </span>
                  </div>

                  {/* Skill Description */}
                  <p className="text-gray-700 mb-4 leading-relaxed">{skill.description}</p>

                  {/* Skill Level Bar */}
                  <div className="mb-2">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Expertise Level</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          backgroundColor: selectedCategoryData.color 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Executive Impact Summary */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Executive Success Metrics</h3>
            <p className="text-gray-600">Quantified impact across technical leadership and business delivery</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                <Users size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">95%</div>
              <div className="text-gray-600 font-medium">Team Retention Rate</div>
              <div className="text-sm text-gray-500 mt-1">Over 3+ years</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                <Target size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">98%</div>
              <div className="text-gray-600 font-medium">Project Success Rate</div>
              <div className="text-sm text-gray-500 mt-1">On-time, on-budget delivery</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                <Award size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">200+</div>
              <div className="text-gray-600 font-medium">Developers Trained</div>
              <div className="text-sm text-gray-500 mt-1">Across multiple organizations</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-white mx-auto mb-3">
                <TrendingUp size={24} />
              </div>
              <div className="text-3xl font-bold text-gray-800 mb-1">$5M+</div>
              <div className="text-gray-600 font-medium">Revenue Impact</div>
              <div className="text-sm text-gray-500 mt-1">Direct project value delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;