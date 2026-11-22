import { ArrowDownUp, ArrowUpRight, Clock, FileText, LayoutGrid, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface Tool {
  name: string;
  path: string;
  tagline: string;
  highlights: string[];
  icon: LucideIcon;
  hoverColor: string;
}

const tools: Tool[] = [
  {
    name: 'World Time Zones',
    path: '/timezone/',
    tagline: 'Compare time zones and find a meeting time that works for everyone.',
    highlights: [
      'Type "3pm London" to see it everywhere',
      'Best meeting time across working hours',
      'Add to calendar, share a link, works offline',
    ],
    icon: Clock,
    hoverColor: '#0EA5E9',
  },
  {
    name: 'Markdown Editor',
    path: '/markdown-editor/',
    tagline: 'A two-way live editor: edit the Markdown or the rendered preview.',
    highlights: [
      'Edit either side, both stay in sync',
      'Copy Markdown, HTML or rich text',
      'Runs in your browser, nothing uploaded',
    ],
    icon: FileText,
    hoverColor: '#10B981',
  },
  {
    name: 'Prompt Builder',
    path: '/prompt-builder/',
    tagline: 'Build structured prompts for popular AI tools in three guided steps.',
    highlights: [
      'Templates for common tasks',
      'Tuned output for different AI tools',
      'Copy a ready-to-use prompt',
    ],
    icon: Sparkles,
    hoverColor: '#8B5CF6',
  },
  {
    name: 'Business Model Canvas',
    path: '/bmc-generator/',
    tagline: 'Fill in and preview a Business Model Canvas in minutes.',
    highlights: [
      'All nine canvas blocks on one page',
      'Instant live preview',
      'Free, no sign-up',
    ],
    icon: LayoutGrid,
    hoverColor: '#FF9900',
  },
  {
    name: 'Algorithm Visualizer',
    path: '/algorithm-visualizer/',
    tagline: 'Watch sorting and search algorithms run step by step.',
    highlights: [
      'Bubble, insertion, selection and merge sort',
      'Linear and binary search',
      'Pseudo code and complexity alongside',
    ],
    icon: ArrowDownUp,
    hoverColor: '#EF4444',
  },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Free Tools</h2>
          <p className="text-2xl text-gray-600">
            Small, fast utilities I built and use every day. No sign-up, nothing to install.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const Icon = tool.icon;
            return (
              <a
                key={tool.path}
                href={tool.path}
                target="_blank"
                rel="noopener"
                className="group bg-white border border-gray-200 p-6 flex flex-col h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-300"
                style={{ borderColor: 'var(--tool-accent, #e5e7eb)' }}
                onMouseEnter={(e) => e.currentTarget.style.setProperty('--tool-accent', tool.hoverColor)}
                onMouseLeave={(e) => e.currentTarget.style.removeProperty('--tool-accent')}
                onFocus={(e) => e.currentTarget.style.setProperty('--tool-accent', tool.hoverColor)}
                onBlur={(e) => e.currentTarget.style.removeProperty('--tool-accent')}
              >
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-gray-700 transition-colors duration-300 group-hover:text-white group-focus-visible:text-white"
                    style={{ backgroundColor: 'var(--tool-accent, #f3f4f6)' }}
                  >
                    <Icon size={22} />
                  </div>
                  <ArrowUpRight
                    size={22}
                    className="text-gray-400 transition-all duration-300 group-hover:text-gray-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.name}</h3>
                <p className="text-base text-gray-600 mb-4 leading-relaxed">{tool.tagline}</p>

                <ul className="space-y-2 mb-6 flex-grow">
                  {tool.highlights.map((h) => (
                    <li key={h} className="text-base text-gray-600 flex items-start gap-2">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between gap-3">
                  <span className="text-base font-semibold text-gray-900">Open tool</span>
                  <span className="text-sm text-gray-400 truncate">{tool.path.replace(/\//g, ' ').trim()}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
