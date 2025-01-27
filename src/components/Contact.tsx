import React from 'react';
import GlassCard from './GlassCard';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 px-4" id="contact">
      <GlassCard className="max-w-4xl mx-auto p-8">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-blue-200 text-transparent bg-clip-text">
            Get in Touch
          </h2>
          <p className="text-blue-100 mb-12">
            Feel free to reach out through any of these platforms. I'm always excited to connect!
          </p>
          <div className="flex justify-center gap-12">
            <a 
              href="https://github.com/Soul2x" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center gap-2 text-blue-200 hover:text-white transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                <Github className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/sumeet-singh-0935a9301/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center gap-2 text-blue-200 hover:text-white transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                <Linkedin className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            <a 
              href="https://twitter.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group flex flex-col items-center gap-2 text-blue-200 hover:text-white transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                <Twitter className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">Twitter</span>
            </a>
            <a 
              href="mailto:soul404e@gmail.com" 
              className="group flex flex-col items-center gap-2 text-blue-200 hover:text-white transition-all duration-300"
            >
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                <Mail className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>
        </div>
      </GlassCard>
    </section>
  );
};

export default Contact;
