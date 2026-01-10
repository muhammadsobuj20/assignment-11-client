import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  BookOpen,
  Users,
  Shield,
  Award,
  Clock,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                eTuitionBD
              </h2>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Bangladesh's most trusted online tuition platform. Connecting
              students with verified tutors across the country since 2020.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/muhammadsobujhossain20"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a
                href="https://instagram.com/muhammadsobujhossain"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a
                href="https://twitter.com/muhammadsobujbd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-400 transition-all duration-300 transform hover:scale-110"
                aria-label="Twitter"
              >
                <FaXTwitter className="text-sm" />
              </a>
              <a
                href="https://youtube.com/etuitionbd"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-all duration-300 transform hover:scale-110"
                aria-label="YouTube"
              >
                <FaYoutube className="text-sm" />
              </a>
              <a
                href="https://linkedin.com/in/md-sobuj-hossain"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/tuitions"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Find Tuitions
                </Link>
              </li>
              <li>
                <Link
                  to="/tutors"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Find Tutors
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* For Students & Tutors */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Users className="h-5 w-5 text-secondary" />
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/help"
                  className="hover:text-secondary transition-colors duration-200"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-secondary transition-colors duration-200"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  to="/coverage"
                  className="hover:text-secondary transition-colors duration-200"
                >
                  Service Areas
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-secondary transition-colors duration-200"
                >
                  Safety Guidelines
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-secondary transition-colors duration-200"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-secondary transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 text-accent" />
              Get in Touch
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:support@etuitionbd.com"
                  className="hover:text-primary transition-colors duration-200"
                >
                  support@etuitionbd.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+8801876543210"
                  className="hover:text-primary transition-colors duration-200"
                >
                  +880 1876-543210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Dhaka, Bangladesh</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span>24/7 Support Available</span>
              </li>
            </ul>

            {/* Trust Badges */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-white mb-3">
                Trusted Platform
              </h4>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1 text-xs bg-gray-800 px-2 py-1 rounded">
                  <Shield className="h-3 w-3 text-green-400" />
                  <span>Verified</span>
                </div>
                <div className="flex items-center gap-1 text-xs bg-gray-800 px-2 py-1 rounded">
                  <Award className="h-3 w-3 text-yellow-400" />
                  <span>Top Rated</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold text-white mb-4">
              Stay Updated
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest tuition opportunities and educational tips
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered flex-1 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-center md:text-left">
              © {currentYear}{" "}
              <span className="text-primary font-bold">eTuitionBD</span>. All
              rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors duration-200"
              >
                Cookies
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-4 text-center">
            Made with <span className="text-red-400">♥</span> in Bangladesh |
            Empowering Education Since 2020
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
