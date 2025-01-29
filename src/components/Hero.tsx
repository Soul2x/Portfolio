import React from 'react';
import { Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative px-4">
      <div className="text-center z-10">
        <div className="inline-flex items-center gap-2 mb-6">
          <Sparkles className="w-6 h-6 text-blue-200 animate-pulse" />
          <span className="text-blue-200 tracking-wider">WELCOME TO MY WORLD</span>
          <Sparkles className="w-6 h-6 text-blue-200 animate-pulse" />
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 text-transparent bg-clip-text">
          Solus
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8">
          Embracing the Chill of Creativity
        </p>
        <button 
          onClick={scrollToProjects}
          className="px-8 py-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 
                   text-white hover:bg-white/20 transition-all duration-300
                   shadow-lg hover:shadow-xl active:scale-95"
        >
          Explore My Work
        </button>
      </div>
    </div>
  );
};

export default Hero;
