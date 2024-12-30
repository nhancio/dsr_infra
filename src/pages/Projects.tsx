import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Projects</h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl">
          Discover our portfolio of exceptional properties and developments that showcase our commitment to excellence.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}