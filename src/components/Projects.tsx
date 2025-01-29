import React from 'react';
import GlassCard from './GlassCard';
import { Clock, Stars, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Coming Soon',
    description: 'An exciting project is in development',
    image: 'https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&q=80&w=800',
    icon: Clock,
  },
  {
    title: 'Stay Tuned',
    description: 'Something amazing is brewing',
    image: 'https://images.unsplash.com/photo-1457269449834-928af64c684d?auto=format&fit=crop&q=80&w=800',
    icon: Stars,
  },
  {
    title: 'In Progress',
    description: 'Magic in the making',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&q=80&w=800',
    icon: Sparkles,
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
                className="w-full h-48 object-cover opacity-50"
              />
              <div className="p-6 text-center">
                <project.icon className="w-12 h-12 mx-auto mb-4 text-blue-200 animate-pulse" />
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-blue-100">{project.description}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Projects;
