import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">
              eTuitionBD
            </h2>
            <p className="mt-4 text-gray-400 max-w-md leading-relaxed">
              Bangladesh's most trusted online tuition platform. 
              Connecting students with the best tutors across the country.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-cyan-500 transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <FaXTwitter className="text-lg" />
                
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-all duration-300 transform hover:scale-110"
                aria-label="YouTube"
              >
                <FaYoutube className="text-lg" />
              </a>
              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-cyan-400 transition">Home</Link></li>
              <li><Link to="/tuitions" className="hover:text-cyan-400 transition">Find Tuitions</Link></li>
              <li><Link to="/tutors" className="hover:text-cyan-400 transition">Find Tutors</Link></li>
              <li><Link to="/become-tutor" className="hover:text-cyan-400 transition">Become a Tutor</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition">About Us</Link></li>
            </ul>
          </div>

          {/* For Students */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">For Students</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-pink-400 transition">How It Works</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">Success Stories</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">FAQ</a></li>
              <li><a href="#" className="hover:text-pink-400 transition">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Get in Touch</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>support@etuitionbd.com</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a10.953 10.953 0 004.252 4.252l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span>+880 1876-543210</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500">
            © 2025 <span className="text-cyan-400 font-bold">eTuitionBD</span>. All rights reserved.
          </p>
          <p className="text-xs text-gray-600 mt-2">
            Made with <span className="text-pink-400">♥</span> in Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;