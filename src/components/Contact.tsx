import React from 'react';
import GlassCard from './GlassCard';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const socialLinks = {
    github: "https://github.com/Soul2x",
    linkedin: "https://linkedin.com/in/sumeet-singh-0935a9301/",
    instagram: "https://instagram.com/solus.18",
    email: "mailto:soul404e@gmail.com"
  };

  const handleClick = (url: string) => {
    if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else {
      window.open(url, '_blank', 'noopener noreferrer');
    }
  };

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
            <button 
              onClick={() => handleClick(socialLinks.github)}
              className="group flex flex-col items-center gap-2 text-blue-200 hover:text-white transition-all duration-300 cursor-pointer active:scale-95"
            >
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                <Github className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </button>
            <button 
              onClick={() => handleClick(socialLinks.linkedin)}
              className="group flex flex-col items-center gap-2 text-blue-200 hover:text-white transition-all duration-300 cursor-pointer active:scale-95"
            >
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                <Linkedin className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </button>
            <button 
              onClick={() => handleClick(socialLinks.instagram)}
              className="group flex flex-col items-center gap-2 text-blue-200 hover:text-white transition-all duration-300 cursor-pointer active:scale-95"
            >
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                <Instagram className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">Instagram</span>
            </button>
            <button 
              onClick={() => handleClick(socialLinks.email)}
              className="group flex flex-col items-center gap-2 text-blue-200 hover:text-white transition-all duration-300 cursor-pointer active:scale-95"
            >
              <div className="p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-all duration-300">
                <Mail className="w-8 h-8" />
              </div>
              <span className="text-sm font-medium">Email</span>
            </button>
          </div>
        </div>
      </GlassCard>
    </section>
  );
};

export default Contact;
