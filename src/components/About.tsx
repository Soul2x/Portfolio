import React from 'react';
import GlassCard from './GlassCard';
import { User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 px-4" id="about">
      <GlassCard className="max-w-4xl mx-auto p-8">
        <div className="flex flex-col items-center">
          <User className="w-16 h-16 text-blue-200 mb-6" />
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 text-transparent bg-clip-text">
            About Me
          </h2>
          <p className="text-blue-100 leading-relaxed text-center max-w-2xl">
            I'm a passionate developer who finds inspiration in the serene beauty of winter.
            Just as each snowflake is unique, I believe in crafting distinctive digital experiences
            that leave a lasting impression. With a blend of technical expertise and creative vision,
            I transform ideas into immersive digital realities.
          </p>
        </div>
      </GlassCard>
    </section>
  );
};

export default About;