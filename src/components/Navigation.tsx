import React, { useState } from 'react';
import { Menu, X, Building2 } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-900" />
            <span className="ml-2 text-2xl font-semibold text-blue-900">DPR Infra</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-900 transition">Home</a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-900 transition">Portfolio</a>
            <a href="#services" className="text-gray-700 hover:text-blue-900 transition">Services</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-900 transition">Testimonials</a>
            <a 
              href="#contact" 
              className="bg-blue-900 text-white px-6 py-2 rounded-md hover:bg-blue-800 transition"
            >
              Contact Us
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 text-gray-700">Home</a>
            <a href="#portfolio" className="block px-3 py-2 text-gray-700">Portfolio</a>
            <a href="#services" className="block px-3 py-2 text-gray-700">Services</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-700">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}