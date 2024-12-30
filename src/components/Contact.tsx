import { Phone, Mail, MapPin } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-4 border-gradient custom-rounded p-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Ready to start your luxury construction project? Contact us for a consultation.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-blue-900 mr-4" />
                  <div>
                    <p className="font-semibold">Call Us</p>
                    <p className="text-gray-600">+91 9988776655</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-blue-900 mr-4" />
                  <div>
                    <p className="font-semibold">Email Us</p>
                    <p className="text-gray-600">contact@dprinfra.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-blue-900 mr-4" />
                  <div>
                    <p className="font-semibold">Visit Us</p>
                    <p className="text-gray-600">Hyderabad, Hyderabad</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Type
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent">
                    <option>Residential</option>
                    <option>Commercial</option>
                    <option>Industrial</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}