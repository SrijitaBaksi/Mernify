// src/pages/SoumyaDashboard.jsx
import React, { useState } from "react";
import Navbar from "../../Soumya_Component/Navbar";
import Sidebar from "../../Soumya_Component/Sidebar";
import ReactIntroduction from "../Soumya_LearningTopics/React_Introduction";

const SoumyaDashboard = () => {
  const [activeTopic, setActiveTopic] = useState(""); // Initially no topic selected
  const [selectedSubtopic, setSelectedSubtopic] = useState("");

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar at the top */}
      <Navbar
        activeTopic={activeTopic}
        onTopicClick={(topic) => {
          setActiveTopic(topic); // ✅ Only set once
          setSelectedSubtopic(""); // Reset subtopic when switching main topic
        }}
      />

      {/* Main area below navbar */}
      <div className="flex flex-1">
        {/* Sidebar only shows when topic is selected */}
        <Sidebar
          activeTopic={activeTopic}
          onSubtopicClick={setSelectedSubtopic}
        />

        {/* Main content area */}
        <main className="flex-1 p-6 bg-gray-100">
          {/* If no topic selected */}
          {!activeTopic && (
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome to Mernify Dashboard
            </h1>
          )}

          {/* If topic selected but no subtopic */}
          {activeTopic && !selectedSubtopic && (
            <h1 className="text-2xl font-bold text-gray-800">
              {activeTopic} Selected - Choose a Subtopic
            </h1>
          )}

          {/* Show React Introduction when selected */}
          {activeTopic === "React" &&
            selectedSubtopic === "React Introduction" && <ReactIntroduction />}

          <p className="mt-4 text-gray-600">
            Click a topic on the navbar to explore its subtopics in the sidebar.
          </p>
        </main>
      </div>
    </div>
  );
};

export default SoumyaDashboard;
