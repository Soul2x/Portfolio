import React from 'react';
import GlassCard from './GlassCard';
import { Code2, Palette, Database, Globe, Cpu, LineChart } from 'lucide-react';

const skills = [
  {
    category: 'Frontend Development',
    icon: Code2,
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Design',
    icon: Palette,
    items: ['UI/UX Design', 'Figma', 'Animation', 'Design Systems'],
  },
  {
    category: 'Backend Development',
    icon: Database,
    items: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs'],
  },
  {
    category: 'Web Technologies',
    icon: Globe,
    items: ['HTML5', 'CSS3', 'JavaScript', 'WebGL'],
  },
  {
    category: 'Tools & DevOps',
    icon: Cpu,
    items: ['Git', 'Docker', 'AWS', 'CI/CD'],
  },
  {
    category: 'Analytics',
    icon: LineChart,
    items: ['Google Analytics', 'SEO', 'Performance Optimization', 'A/B Testing'],
  },
];

const Skills: React.FC = () => {
  return (
    <section className="py-20 px-4" id="skills">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-blue-200 text-transparent bg-clip-text">
        Skills & Expertise
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {skills.map((skill, index) => (
          <GlassCard key={index} className="p-6">
            <div className="flex flex-col items-center">
              <skill.icon className="w-10 h-10 text-blue-200 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">{skill.category}</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={itemIndex}
                    className="px-3 py-1 rounded-full text-sm bg-white/10 text-blue-100"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};

export default Skills;