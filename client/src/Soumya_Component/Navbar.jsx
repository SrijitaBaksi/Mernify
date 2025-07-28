import React from "react";

const Navbar = ({ activeTopic, onTopicClick }) => {
  // Topics shown in navbar
  const topics = ["React", "JavaScript"];

  return (
    <nav className="bg-teal-600 text-white px-6 py-4 flex justify-between items-center shadow-md">
      {/* Left: Title */}
      <h1 className="text-xl font-bold">
        Mernify : <span className="font-light">Soumya Dashboard</span>
      </h1>

      {/* Right: Topics as buttons */}
      <div className="flex space-x-4">
        {topics.map((topic) => (
          <button
            key={topic}
            onClick={() => onTopicClick(topic)}
            className={`px-4 py-2 rounded-md transition ${
              activeTopic === topic
                ? "bg-white text-teal-700 font-semibold"
                : "hover:bg-teal-500"
            }`}
          >
            {topic}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
