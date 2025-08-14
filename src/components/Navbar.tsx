"use client";

import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="BelTech Logo" className="w-20 h-10 rounded-lg" />
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8 ml-auto">
            <div className="flex items-baseline space-x-6">
              <a
                href="#"
                className="text-gray-700 hover:text-[#61C7D5] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#61C7D5] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#61C7D5] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#61C7D5] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Solutions
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#61C7D5] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Insights
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#61C7D5] px-3 py-2 text-sm font-medium transition-colors duration-200"
              >
                Contact
              </a>
            </div>
            <Button className="text-white transition-all duration-200 hover:scale-105 bg-[#61C7D5] hover:bg-[#4FB3C1]">
              Get Demo
            </Button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-[#61C7D5] transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a
                href="#"
                className="text-gray-700 hover:bg-gray-100 block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:bg-gray-100 block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-700 hover:bg-gray-100 block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:bg-gray-100 block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Solutions
              </a>
              <a
                href="#"
                className="text-gray-700 hover:bg-gray-100 block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Insights
              </a>
              <a
                href="#"
                className="text-gray-700 hover:bg-gray-100 block px-3 py-2 text-base font-medium transition-colors duration-200"
              >
                Contact
              </a>
              <div className="px-3 py-2">
                <Button className="w-full text-white transition-all duration-200 hover:scale-105 bg-[#61C7D5] hover:bg-[#4FB3C1]">
                  Get Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
