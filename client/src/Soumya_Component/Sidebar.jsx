import React, { useState } from "react";
import { motion } from "framer-motion";

const Sidebar = ({ activeTopic, onSubtopicClick }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Subtopics
  const reactTopics = ["React Introduction"];
  const jsTopics = ["Variables", "Functions", "ES6 Features", "Async", "DOM"];

  let topicsToShow = [];
  if (activeTopic === "React") topicsToShow = reactTopics;
  if (activeTopic === "JavaScript") topicsToShow = jsTopics;

  // If no topic selected → don't render sidebar at all
  if (!activeTopic) return null;

  return (
    <motion.aside
      animate={{ width: isCollapsed ? 64 : 256 }}
      transition={{ type: "spring", stiffness: 80 }}
      className="bg-gray-800 text-white min-h-screen p-4 shadow-lg relative flex flex-col items-center"
    >
      {/* Collapse / Expand Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute top-1/2 -right-4 bg-teal-500 hover:bg-teal-600 text-white p-2 rounded-full shadow-md transition"
      >
        {isCollapsed ? "▶" : "◀"}
      </button>

      {!isCollapsed && (
        <>
          <h2 className="text-lg font-bold mb-4">{activeTopic} Topics</h2>
          <ul className="space-y-2 w-full">
            {topicsToShow.map((topic, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-2 rounded hover:bg-gray-700 cursor-pointer"
                onClick={() => onSubtopicClick(topic)}
              >
                {topic}
              </motion.li>
            ))}
          </ul>
        </>
      )}
    </motion.aside>
  );
};

export default Sidebar;
