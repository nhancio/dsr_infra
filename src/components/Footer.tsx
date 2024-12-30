import { Building2, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Building2 className="h-8 w-8" />
              <span className="ml-2 text-2xl font-semibold">DPR Infra</span>
            </div>
            <p className="text-gray-300 mb-6">
              Creating exceptional spaces with uncompromising quality and innovative design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300 transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300 transition">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300 transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-gray-300 transition">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition">Luxury Homes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Commercial Buildings</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Interior Design</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Renovation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Our Team</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Careers</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Locations</h3>
            <ul className="space-y-4">
              <li><button className="footer-link">Builder in Hyderabad</button></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Builders in Banjara Hills</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Builders in Jubliee Hills</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition">Builders in Financial District</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} DPR Infra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}