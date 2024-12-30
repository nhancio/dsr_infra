import React from 'react';
import { ArrowRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function Portfolio() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our portfolio of exceptional properties and developments
            </p>
          </div>
          <a 
            href="/projects" 
            className="hidden md:flex items-center text-blue-900 hover:text-blue-800 transition group"
          >
            View All Projects 
            <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-80 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-sm mb-2">{project.category}</p>
                  <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                  <p className="text-gray-200">{project.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <a 
          href="/projects"
          className="md:hidden w-full mt-8 flex items-center justify-center text-blue-900 hover:text-blue-800 transition group"
        >
          View All Projects 
          <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}