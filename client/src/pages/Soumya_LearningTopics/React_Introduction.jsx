import React from "react";

const ReactIntroduction = () => {
  return (
    <div className="p-6 bg-gradient-to-b from-white to-gray-50 rounded-xl shadow-lg max-w-3xl mx-auto">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold text-teal-700 mb-6 border-b-4 border-teal-400 pb-2">
        🚀 React Introduction
      </h1>

      {/* Intro Paragraph */}
      <p className="mb-6 text-gray-700 leading-relaxed text-lg">
        <span className="font-semibold text-teal-600">React</span> is a
        <span className="font-medium"> front-end JavaScript library </span>
        developed by{" "}
        <span className="font-semibold text-teal-600">Jordan Walke</span>, a
        Facebook engineer. It is widely used for building **user interfaces
        (UI)** and creating **reusable components** for web applications.
      </p>

      {/* Section: How does React work */}
      <h2 className="text-2xl font-bold mt-6 mb-3 text-gray-800 border-l-4 border-teal-500 pl-3">
        ⚡ How does React work?
      </h2>
      <p className="text-gray-700 leading-relaxed">
        React creates a{" "}
        <span className="font-semibold text-teal-600">Virtual DOM</span> in
        memory. Instead of manipulating the browser’s DOM directly, it updates
        the Virtual DOM first and then efficiently updates **only the changed
        parts** of the real DOM. This improves performance and makes UI updates
        super fast.
      </p>

      {/* Section: Prerequisites */}
      <h2 className="text-2xl font-bold mt-6 mb-3 text-gray-800 border-l-4 border-teal-500 pl-3">
        ✅ What You Should Know Before React
      </h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        <li className="hover:text-teal-600 transition">Basic HTML</li>
        <li className="hover:text-teal-600 transition">CSS fundamentals</li>
        <li className="hover:text-teal-600 transition">
          JavaScript ES6 basics
        </li>
      </ul>

      {/* Section: History */}
      <h2 className="text-2xl font-bold mt-6 mb-3 text-gray-800 border-l-4 border-teal-500 pl-3">
        📜 React History
      </h2>
      <p className="text-gray-700 leading-relaxed">
        React was first used in **Facebook’s Newsfeed** in 2011 and was publicly
        released in **July 2013**. The latest stable version is{" "}
        <span className="font-semibold text-teal-600">React 19.0.0</span> (Dec
        2024).
      </p>

      {/* Closing Note */}
      <div className="mt-6 p-4 bg-teal-50 border-l-4 border-teal-400 rounded">
        <p className="text-teal-700 font-medium">
          🎯 **Next Step:** Learn about JSX and how React components work!
        </p>
      </div>
    </div>
  );
};

export default ReactIntroduction;
