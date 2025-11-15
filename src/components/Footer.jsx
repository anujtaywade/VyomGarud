import React from 'react';
import { Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
         =
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-3">
              Vyom<span className="text-orange-500">Garud</span>
            </h3>
            <p className="text-gray-400 mb-4 max-w-sm">
              Advanced UAV systems engineered for precision, reliability, and superior performance in defense operations.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.linkedin.com/in/anuj-taywade-326881270/." 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
              </a>
              <a 
                href="https://x.com/Anujjj69" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-zinc-900 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
              </a>
              <a 
                href="mailto:anujtaywade456@gmail.com"
                className="w-10 h-10 bg-zinc-900 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors group"
              >
                <Mail className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
              </a>
            </div>
          </div>

      =
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-orange-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#capabilities" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Capabilities
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

       =
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 7276587797</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">contact@vyomgarud.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">India</span>
              </li>
            </ul>
          </div>
        </div>

     =
        <div className="pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 VyomGarud. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="text-gray-500 hover:text-orange-500 transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-500 hover:text-orange-500 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;