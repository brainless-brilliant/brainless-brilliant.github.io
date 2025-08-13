import React, { useState } from 'react';
import { ExternalLink, Users, Calendar, Award, TrendingUp, Building, Smartphone, Globe } from 'lucide-react';

const ProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Telecommunication Branding Platform",
      subtitle: "Enterprise Telecom • 2023-2024",
      role: "Frontend Lead",
      teamSize: "5 Frontend Developers",
      category: "enterprise",
      technologies: ["Spring Boot", "Angular", "WebComponents", "Stencil.js"],
      challenge: "Traditional telecom companies struggling with spam/scam call identification, losing customer trust and facing regulatory pressure.",
      businessImpact: [
        "95% improvement in call answer rates for branded businesses",
        "100K+ business subscribers within 6 months", 
        "$2M+ ARR from new branding service offerings"
      ],
      hoverColor: "#FF9900"
    },
    {
      id: 2,
      title: "Employee Self Service Portal",
      subtitle: "Big4 US Client • 2022-2023", 
      role: "Frontend Lead",
      teamSize: "6 Frontend Developers",
      category: "enterprise",
      technologies: ["Angular", "Ionic", "MongoDB", "OpenAI"],
      challenge: "Major consulting firm's employees spending 4+ hours weekly navigating multiple HR systems, reducing billable productivity.",
      businessImpact: [
        "75% reduction in time spent on HR tasks",
        "4.8/5.0 user satisfaction score",
        "$500K annual savings in operational overhead"
      ],
      hoverColor: "#EF4444"
    },
    {
      id: 3,
      title: "Embedded Systems Management",
      subtitle: "Industrial Solutions • 2021-2022",
      role: "Architect & Project Manager", 
      teamSize: "4 Developers",
      category: "technical",
      technologies: ["React", "Core Java", "Jetty", "TCP Integration"],
      challenge: "Industrial clients needed modern web-based control systems to replace legacy desktop applications.",
      businessImpact: [
        "Replaced 10+ legacy desktop applications",
        "60% decrease in on-site service requirements",
        "100% client retention and expansion"
      ],
      hoverColor: "#0EA5E9"
    },
    {
      id: 4,
      title: "Influencer Marketing Platform",
      subtitle: "California Startup • 2019-2020",
      role: "Senior Developer & UI Lead",
      teamSize: "8 Cross-functional",
      category: "consumer", 
      technologies: ["Vue.js", "AWS EKS", "Kubernetes", "Python"],
      challenge: "Influencers and brands struggling with transparent collaboration, leading to campaign failures and payment disputes.",
      businessImpact: [
        "10K+ active influencers, 500+ brand partnerships",
        "85% campaign completion vs 45% industry average",
        "$1M+ GMV processed in first year"
      ],
      hoverColor: "#FF9900"
    },
    {
      id: 5,
      title: "Tolling Industry Customer System",
      subtitle: "US Transportation • 2018-2019",
      role: "Senior Developer",
      teamSize: "6 Developers", 
      category: "infrastructure",
      technologies: ["Angular 6", "ReactJS", "Node.js", "Twilio"],
      challenge: "Tolling authorities managing complex free-flow collections with high operational overhead and customer service challenges.",
      businessImpact: [
        "4 independent apps in single Angular project",
        "70% reduction in support ticket volume",
        "Automated deployment pipeline implementation"
      ],
      hoverColor: "#EF4444"
    },
    {
      id: 6,
      title: "Australian Auditing Platform",
      subtitle: "Accounting Firms • 2017-2018",
      role: "Frontend Lead",
      teamSize: "5 Developers",
      category: "enterprise",
      technologies: ["AngularJS", "Node.js", "MySQL", "Java"],
      challenge: "Accounting firms spending excessive time on manual audit processes with disconnected financial systems.",
      businessImpact: [
        "50% reduction in audit completion time",
        "90% decrease in manual calculation errors",
        "Adopted by 25+ accounting firms"
      ],
      hoverColor: "#0EA5E9"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'enterprise', label: 'Enterprise', count: projects.filter(p => p.category === 'enterprise').length },
    { id: 'consumer', label: 'Consumer', count: projects.filter(p => p.category === 'consumer').length },
    { id: 'technical', label: 'Technical', count: projects.filter(p => p.category === 'technical').length },
    { id: 'infrastructure', label: 'Infrastructure', count: projects.filter(p => p.category === 'infrastructure').length }
  ];

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Leading Digital Innovation Across Industries</h2>
          <p className="text-2xl text-gray-600 mb-8">
            7 major platforms • 50+ team members led • millions of users impacted
          </p>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedFilter === category.id
                    ? 'bg-gray-800 text-white shadow-lg scale-105'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300 hover:scale-105'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid - Clean Flat Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-50 border border-gray-200 p-6 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer flex flex-col h-full"
              style={{
                backgroundColor: 'var(--hover-bg-card, #f9fafb)',
                borderColor: 'var(--hover-border-card, #e5e7eb)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.setProperty('--hover-bg-card', '#ffffff');
                e.currentTarget.style.setProperty('--hover-border-card', project.hoverColor);
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.setProperty('--hover-bg-card', '#f9fafb');
                e.currentTarget.style.setProperty('--hover-border-card', '#e5e7eb');
              }}
            >
              {/* Project Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {project.title}
              </h3>
              
              {/* Subtitle */}
              <p className="text-base text-gray-600 mb-4">
                {project.subtitle}
              </p>
              
              {/* Role & Team */}
              <div className="mb-4">
                <div className="text-base font-medium text-gray-800">{project.role}</div>
                <div className="text-base text-gray-600 flex items-center gap-1">
                  <Users size={16} />
                  {project.teamSize}
                </div>
              </div>
              
              {/* Challenge */}
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                {project.challenge}
              </p>
              
              {/* Business Impact */}
              <div className="mb-4 flex-grow">
                <h4 className="text-base font-semibold text-gray-800 mb-2">Business Impact</h4>
                <ul className="space-y-2">
                  {project.businessImpact.map((impact, index) => (
                    <li key={index} className="text-base text-gray-600 flex items-start gap-2">
                      <span className="text-green-600 text-sm mt-1">✓</span>
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Technologies */}
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-200 text-gray-700 text-sm rounded font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* View Case Study - Fixed at bottom */}
              <button className="w-full mt-auto py-3 bg-gray-200 text-gray-700 font-medium text-base transition-all duration-300 hover:bg-gray-800 hover:text-white flex items-center justify-center gap-2">
                <span>View Case Study</span>
                <ExternalLink size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Executive Summary */}
        <div className="mt-16 bg-gray-50 border border-gray-200 p-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Executive Impact Summary</h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">10+</div>
                <div className="text-gray-600 font-medium">Years Leadership</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">$5M+</div>
                <div className="text-gray-600 font-medium">Revenue Impact</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">98%</div>
                <div className="text-gray-600 font-medium">Project Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-800 mb-2">3</div>
                <div className="text-gray-600 font-medium">Tech Ecosystems</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;