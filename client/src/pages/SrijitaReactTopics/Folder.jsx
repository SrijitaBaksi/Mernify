import React from 'react';
import { FolderOpen } from 'lucide-react';

const FolderStructure = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold flex items-center gap-2 text-gray-800 mb-4">
        <FolderOpen className="text-yellow-500" />
        React + Vite Project Structure
      </h1>

      <p className="mb-4">
        When you run <code className="bg-gray-100 px-2 py-1 rounded">npm create vite@latest</code> with React,
        your project has this basic structure:
      </p>

      <pre className="bg-gray-100 rounded p-4 overflow-x-auto text-sm mb-6">
{`my-app/
├── index.html
├── package.json
├── vite.config.js
├── public/
└── src/
    ├── App.jsx
    ├── App.css
    ├── index.css
    └── main.jsx`}
      </pre>

      <div className="space-y-4 text-gray-700">
        <div>
          <h2 className="font-semibold text-lg">📄 App.jsx</h2>
          <p>Main React component. Think of it as your app's root UI layout. You write most components here or import them.</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">🎨 App.css</h2>
          <p>CSS for styling <code>App.jsx</code>. Any custom styles for the main app go here.</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">🎨 index.css</h2>
          <p>Global styles like font settings, background, resets, or Tailwind base classes are defined here.</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">🚀 main.jsx</h2>
          <p>Entry point for your React app. It renders <code>&lt;App /&gt;</code> inside the <code>#root</code> div in <code>index.html</code>.</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">🌐 index.html</h2>
          <p>HTML shell that holds your React app. The <code>&lt;div id="root"&gt;</code> is where React mounts the UI.</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">📦 public/</h2>
          <p>Static assets like logos, icons, etc. Files here are directly served and not bundled.</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">📦 package.json</h2>
          <p>Manages dependencies and scripts like <code>dev</code> and <code>build</code>.</p>
        </div>

        <div>
          <h2 className="font-semibold text-lg">⚙️ vite.config.js</h2>
          <p>Config file for Vite. You can add plugins, aliases, and other settings here.</p>
        </div>
      </div>
    </div>
  );
};

export default FolderStructure;
