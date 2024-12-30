import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "James Wilson",
    role: "Property Developer",
    content: "Working with DPR Infra was an exceptional experience. Their attention to detail and commitment to quality is unmatched.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Hotel Chain CEO",
    content: "They transformed our vision into reality with precision and professionalism. Highly recommended for luxury projects.",
    rating: 5
  },
  {
    name: "Michael Roberts",
    role: "Real Estate Investor",
    content: "The team's expertise and dedication to excellence made our project a remarkable success.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Client Testimonials</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear what our clients say about their experience working with us
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}