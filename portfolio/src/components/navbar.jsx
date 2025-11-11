import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-linear-to-r from-indigo-900/90 to-emerald-700/90 backdrop-blur-md text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          My<span className="text-emerald-400">Portfolio</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li>
            <a href="#home" className="hover:text-emerald-400 transition duration-300">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-emerald-400 transition duration-300">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-emerald-400 transition duration-300">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-emerald-400 transition duration-300">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-2xl">✖</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-indigo-950/95 backdrop-blur-md md:hidden flex flex-col items-center space-y-4 py-4">
            <a href="#home" className="hover:text-emerald-400 transition duration-300">
              Home
            </a>
            <a href="#about" className="hover:text-emerald-400 transition duration-300">
              About
            </a>
            <a href="#projects" className="hover:text-emerald-400 transition duration-300">
              Projects
            </a>
            <a href="#contact" className="hover:text-emerald-400 transition duration-300">
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
