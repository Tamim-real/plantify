import React from "react";
// import { Facebook, Instagram, Pinterest } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-green-50 text-gray-700 pt-10 pb-6 mt-20 border-t border-green-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-green-700 mb-3">🌿 GreenNest</h2>
          <p className="text-sm text-gray-600">
            Bringing nature closer to your home — one plant at a time.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-green-700 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">About</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">Contact</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-600 transition-colors">Privacy Policy</a>
            </li>
          </ul>
        </div>

        {/* Social Icons */}
        {/* <div>
          <h3 className="text-lg font-semibold text-green-700 mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" aria-label="Instagram" className="hover:text-pink-600 transition">
              <Instagram size={22} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-600 transition">
              <Facebook size={22} />
            </a>
            <a href="#" aria-label="Pinterest" className="hover:text-red-600 transition">
              <Pinterest size={22} />
            </a>
          </div>
        </div> */}
      </div>

      {/* Bottom Text */}
      <div className="mt-10 text-center border-t border-gray-200 pt-4 text-sm text-gray-500">
        © 2025 <span className="font-semibold text-green-700">GreenNest</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
