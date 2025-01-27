import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`
      backdrop-blur-md bg-white/10 rounded-2xl
      border border-white/20
      shadow-lg hover:shadow-2xl
      transition-all duration-300 ease-in-out
      hover:transform hover:scale-[1.02]
      hover:bg-white/20
      group
      ${className}
    `}>
      <div className="relative overflow-hidden rounded-2xl h-full">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {children}
      </div>
    </div>
  );
}

export default GlassCard;