import React, { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
const topics={
    react:['intro','folder','tailwind','buildtools','jsx','components','exports','props','events','conditional-rendering','lists'],
    express:['intro'],
    node:['intro'],
    mongodb:['intro'],
}

const SriSidebar = ({stack}) => {
    const location = useLocation();
     const [isOpen, setIsOpen] = useState(false);

     const toggleSidebar =()=> setIsOpen(!isOpen);
  return (
       <>
      {/* Hamburger for small screens */}
      <div className="absolute top-15 left-4 z-50 md:hidden">
        {/* <h2 className="text-lg font-bold capitalize">{stack} Topics</h2> */}
        <button onClick={toggleSidebar} className="text-gray-700 focus:outline-none">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:block w-64 bg-white border-r shadow-sm h-full p-4 transition-all duration-300 ease-in-out`}
      >
        <h2 className="text-xl font-semibold mb-4 capitalize text-gray-800">{stack} Topics</h2>
        <ul className="space-y-2">
          {topics[stack]?.map((topic) => {
            const path = `/srijita-dashboard/${stack}/${topic}`;
            const isActive = location.pathname === path;

            return (
              <li key={topic}>
                <Link
                  to={path}
                  className={`block px-3 py-2 rounded-lg text-sm font-medium capitalize transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-700 hover:bg-blue-100 hover:text-blue-700'
                  }`}
                >
                  {topic}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  )
}

export default SriSidebar