import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="txt-white py-8 px-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <nav className="flex gap-8 justify-around">
            <a
              href="/discovery"
              className="hover:text-gray-300 transition-colors"
            >
              Discovery
            </a>
            <a
              href="/planets"
              className="hover:text-gray-300 transition-colors"
            >
              Planets
            </a>
            <a href="/about" className="hover:text-gray-300 transition-colors">
              About
            </a>
          </nav>

          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="flex justify-around text-sm text-gray-400 border-t border-gray-800 pt-4">
          <span>© 2022 Prime Space Travel</span>

          <a href="/privacy" className="hover:text-gray-300 transition-colors">
            Privacy policy
          </a>
          <a href="/terms" className="hover:text-gray-300 transition-colors">
            Terms of service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
