import React, { useState, useEffect } from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';
import { cn } from '../utils/cn';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 px-4 py-3">
      <div
        className={cn(
          'max-w-5xl mx-auto rounded-full transition-all duration-300 backdrop-blur-md',
          isScrolled ? 'bg-black/80 shadow-lg shadow-purple-500/10' : 'bg-transparent'
        )}
      >
        <div className="flex justify-between items-center py-2 px-6">
          <div className="text-white font-bold text-xl">iib3xu</div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="flex items-center space-x-4">
            <a href="https://github.com/iib3xu" className="text-gray-300 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/iib3xu" className="text-gray-300 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:contact@iib3xu.com" className="text-gray-300 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
            <button className="md:hidden text-white">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;