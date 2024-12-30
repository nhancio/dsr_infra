import React from 'react';
import { Shield, Award, Clock, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Quality Assured",
    description: "Premium materials and superior craftsmanship in every project",
    bgColor: "bg-rose-50",
    iconColor: "text-rose-600",
    hoverBg: "hover:bg-rose-100",
    borderColor: "border-rose-200"
  },
  {
    icon: Award,
    title: "Award Winning",
    description: "Recognized excellence in luxury construction and design",
    bgColor: "bg-sky-50",
    iconColor: "text-sky-600",
    hoverBg: "hover:bg-sky-100",
    borderColor: "border-sky-200"
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "Precise project management and timely completion",
    bgColor: "bg-violet-50",
    iconColor: "text-violet-600",
    hoverBg: "hover:bg-violet-100",
    borderColor: "border-violet-200"
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Skilled professionals with decades of combined experience",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600",
    hoverBg: "hover:bg-emerald-100",
    borderColor: "border-emerald-200"
  }
];

export default function Features() {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We bring together expertise, innovation, and dedication to deliver exceptional construction projects
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className={`${feature.bgColor} border ${feature.borderColor} p-8 rounded-xl ${feature.hoverBg} transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div className={`${feature.iconColor} mb-6`}>
                  <Icon className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}