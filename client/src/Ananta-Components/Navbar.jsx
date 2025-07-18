import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // for hamburger icon

const Navbar = ({ selectedTech, setSelectedTech }) => {
  const techs = ['React.js', 'Node.js', 'Express.js', 'MongoDB'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-800 text-white px-6 py-4 shadow-md">
      {/* Top bar with hamburger */}
      <div className="relative flex items-center justify-between">
        <h1 className="text-lg font-bold text-green-400 sm: ml-35 left-1/2 transform -translate-x-1/2 md:static md:transform-none">MERNify</h1>

        <button 
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FaBars />
        </button>

        {/* Horizontal menu for medium and above */}
        <div className="hidden md:flex space-x-6">
          {techs.map((tech) => (
            <button
              key={tech}
              className={`hover:text-green-400 cursor-pointer transition ${
                selectedTech === tech ? 'text-green-400 cursor-pointer font-semibold underline' : ''
              }`}
              onClick={() => setSelectedTech(tech)}
            >
              {tech}
            </button>
          ))}
        </div>
      </div>

      {/* Dropdown menu for small screens */}
      {isMenuOpen && (
        <div className="mt-4 flex flex-col space-y-2 md:hidden">
          {techs.map((tech) => (
            <button
              key={tech}
              className={`hover:text-green-400 transition cursor-pointer text-left ${
                selectedTech === tech ? 'text-green-400 font-semibold cursor-pointer underline' : ''
              }`}
              onClick={() => {
                setSelectedTech(tech);
                setIsMenuOpen(false); // auto close after selection
              }}
            >
              {tech}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
