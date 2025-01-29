import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`
      relative
      backdrop-blur-md bg-white/10 rounded-2xl
      border border-white/20
      shadow-lg hover:shadow-2xl
      transition-all duration-300 ease-in-out
      hover:transform hover:scale-[1.02]
      hover:bg-white/20
      group
      ${className}
    `}>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 pointer-events-none" />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default GlassCard;
