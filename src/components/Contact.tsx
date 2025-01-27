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
          <p className="text-blue-100 mb-8">
            Let's create something amazing together. Feel free to reach out!
          </p>
          <form className="max-w-lg mx-auto">
            <div className="mb-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200
                         focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent
                         transition-all duration-300"
              />
            </div>
            <div className="mb-6">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200
                         focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent
                         transition-all duration-300"
              />
            </div>
            <div className="mb-6">
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200
                         focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-transparent
                         transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 
                       text-white hover:bg-white/20 transition-all duration-300
                       shadow-lg hover:shadow-xl"
            >
              Send Message
            </button>
          </form>
          <div className="flex justify-center gap-6 mt-8">
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </GlassCard>
    </section>
  );
};

export default Contact;