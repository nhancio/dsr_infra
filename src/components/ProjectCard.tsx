import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-gray-600">{project.description}</p>
      </div>
    </div>
  );
}