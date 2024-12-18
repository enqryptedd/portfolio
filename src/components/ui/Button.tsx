import React from 'react';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

const Button = ({ variant = 'primary', children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={cn(
        'px-8 py-3 rounded-lg transition-colors flex items-center justify-center',
        variant === 'primary' && 'bg-purple-600 hover:bg-purple-700 text-white',
        variant === 'outline' && 'border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;