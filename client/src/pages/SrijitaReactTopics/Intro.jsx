
import React from 'react';

const Intro = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white shadow-lg rounded-2xl text-gray-800">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">📘 React Introduction</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🔹 What is React?</h2>
        <p className="mb-2">
          <strong>React</strong> is a powerful <strong>JavaScript library</strong> for building modern, interactive user interfaces, especially <strong>single-page applications</strong>.
        </p>
        <ul className="list-disc list-inside space-y-1 pl-4">
          <li>💻 Developed by <strong>Facebook</strong> (now Meta)</li>
          <li>🧱 Built using <strong>reusable components</strong></li>
          <li>⚛️ Follows a <strong>declarative and component-based architecture</strong></li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📜 Short History</h2>
        <p className="mb-2">
          Facebook’s News Feed was growing increasingly complex, making UI updates sluggish and error-prone.
          To solve this, React was created.
        </p>
        <p className="mb-2">
          React introduced the concept of a <strong>Virtual DOM</strong> – a lightweight copy of the actual DOM.
          When data changes, React efficiently updates only the parts of the real DOM that changed.
        </p>
        <p>Result: smoother performance and better user experience. ⚡</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🚀 Setting up React with Vite</h2>
        <p className="mb-2">
          Vite is a fast modern build tool for React, offering instant HMR and minimal config.
        </p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 overflow-auto">
          <pre>
{`# 1. Create a new React + Vite project
npm create vite@latest my-react-app -- --template react

# 2. Navigate into your project folder
cd my-react-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev`}
          </pre>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📦 Production Commands</h2>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 overflow-auto">
          <pre>
{`# Build for production
npm run build

# Preview production build
npm run preview`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">🧩 Why Developers Love React</h2>
        <ul className="list-disc list-inside space-y-1 pl-4">
          <li>🔁 Component Reusability</li>
          <li>⚙️ One-way Data Flow (easier debugging)</li>
          <li>🧠 Huge Ecosystem (Redux, React Router)</li>
          <li>📱 Cross-platform (React Native for mobile)</li>
        </ul>
      </section>
    </div>
  );
};

export default Intro;