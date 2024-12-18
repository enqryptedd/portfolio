import React from 'react';
import { Github, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} iib3xu. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/iib3xuu"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://instagram.com/iib3xu"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
