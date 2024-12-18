import React from 'react';
import { cn } from '../../utils/cn';

interface SectionProps {
  id?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const Section = ({ id, title, children, className }: SectionProps) => {
  return (
    <section id={id} className={cn('py-20 bg-black', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{title}</h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;