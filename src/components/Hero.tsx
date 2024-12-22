import React from 'react';
import { Code2, Sparkles, Terminal } from 'lucide-react';
import Button from './ui/Button';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-black text-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex justify-center space-x-4 mb-8">
            <Code2 size={32} className="text-purple-500" />
            <Terminal size={32} className="text-green-500" />
            <Sparkles size={32} className="text-yellow-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text">
            Hello, I'm enqryptedd
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8">
            Full Stack Developer & Creative Problem Solver
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
