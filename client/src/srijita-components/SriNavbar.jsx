

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const SriNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const stacks = ['react', 'express', 'node', 'mongodb'];
  const activeStack = location.pathname.split('/')[2];

  return (
    <nav className="bg-gray-800 text-white px-6 py-4">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <div className="text-xl font-bold">Mernify</div>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Normal horizontal menu (hidden on small screens) */}
        <div className="hidden md:flex space-x-4">
          {stacks.map((stack) => (
            <button
              key={stack}
              onClick={() => navigate(`/srijita-dashboard/${stack}/intro`)}
              className={`capitalize px-3 py-1 rounded-md transition-all duration-300 ${
                activeStack === stack
                  ? 'bg-white text-gray-800 font-semibold'
                  : 'hover:bg-gray-700'
              }`}
            >
              {stack}
            </button>
          ))}
        </div>
      </div>

      {/* Dropdown menu on small screens */}
      {isOpen && (
        <div className="mt-10 space-y-2 md:hidden">
          {stacks.map((stack) => (
            <button
              key={stack}
              onClick={() => {
                navigate(`/srijita-dashboard/${stack}/intro`);
                setIsOpen(false); // close after click
              }}
              className={`block w-full text-left capitalize px-4 py-2 rounded-md transition-all duration-300 ${
                activeStack === stack
                  ? 'bg-white text-gray-800 font-semibold'
                  : 'hover:bg-gray-700'
              }`}
            >
              {stack}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default SriNavbar;