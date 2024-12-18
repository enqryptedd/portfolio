import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={cn('bg-gray-900 rounded-xl overflow-hidden', className)}>
      {children}
    </div>
  );
};

export default Card;