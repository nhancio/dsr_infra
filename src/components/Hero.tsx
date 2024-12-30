import React from 'react';
import { ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    title: "Luxury Living Redefined",
    subtitle: "Creating exceptional spaces for discerning clients"
  },
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80",
    title: "Architectural Excellence",
    subtitle: "Where innovation meets sophistication"
  },
  {
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
    title: "Premium Quality",
    subtitle: "Uncompromising standards in every detail"
  }
];

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              animation: `fade 15s infinite ${index * 5}s`
            }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl px-4">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Building Tomorrow's Legacy
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12">
            DPR Infra: Where Vision Meets Excellence in Construction
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="#portfolio" 
              className="bg-blue-900 text-white px-8 py-4 rounded-md hover:bg-blue-800 transition flex items-center justify-center group"
            >
              Explore Projects 
              <ChevronRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white/10 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}