import React from 'react';
import GlassCard from './GlassCard';
import { Code, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Winter Analytics',
    description: 'A dashboard for tracking winter sports performance metrics',
    image: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&q=80&w=800',
    tags: ['React', 'TypeScript', 'D3.js'],
  },
  {
    title: 'Frost Framework',
    description: 'A minimalist CSS framework inspired by ice crystals',
    image: 'https://images.unsplash.com/photo-1457269449834-928af64c684d?auto=format&fit=crop&q=80&w=800',
    tags: ['CSS', 'JavaScript', 'Design Systems'],
  },
  {
    title: 'Aurora',
    description: 'A real-time northern lights prediction app',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80&w=800',
    tags: ['React Native', 'Node.js', 'API Integration'],
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-20 px-4" id="projects">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-blue-200 text-transparent bg-clip-text">
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <GlassCard key={index} className="overflow-hidden">
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-blue-100 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 rounded-full text-sm bg-white/10 text-blue-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors">
                    <Code className="w-4 h-4" />
                    Code
                  </button>
                  <button className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </button>
                </div>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;