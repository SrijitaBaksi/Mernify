import React from 'react';

const BuildTools = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white shadow-lg rounded-2xl text-gray-800">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">🛠️ Babel, Webpack & Vite</h1>

      {/* Babel */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🔹 What is Babel?</h2>
        <p>
          <strong>Babel</strong> is a JavaScript compiler that converts modern JavaScript (ES6+) and JSX into
          older JavaScript that all browsers can understand.
        </p>
        <ul className="list-disc list-inside mt-2 pl-4">
          <li>Converts JSX → <code>React.createElement()</code></li>
          <li>Converts ES6+ features → ES5 (for compatibility)</li>
          <li>Used behind the scenes in most React build tools</li>
        </ul>
      </section>

      {/* Webpack */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📦 What is Webpack?</h2>
        <p>
          <strong>Webpack</strong> is a module bundler. It takes all your files (JS, CSS, images),
          bundles them together, and optimizes them for production.
        </p>
        <ul className="list-disc list-inside mt-2 pl-4">
          <li>Needs configuration (entry, output, loaders, plugins)</li>
          <li>Often used with Babel</li>
          <li>Slower for large projects due to rebuild time</li>
        </ul>
      </section>

      {/* Vite */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚡ What is Vite?</h2>
        <p>
          <strong>Vite</strong> is a modern alternative to Webpack. It uses ES modules in the browser during development and bundles only for production.
        </p>
        <ul className="list-disc list-inside mt-2 pl-4">
          <li>Instant startup and lightning-fast Hot Module Reload (HMR)</li>
          <li>Zero-config setup for React, Vue, etc.</li>
          <li>Uses Rollup internally for production build</li>
        </ul>
      </section>

      {/* Differences Table */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📊 Key Differences</h2>
        <div className="overflow-auto text-sm">
          <table className="w-full border border-gray-300 text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Feature</th>
                <th className="px-4 py-2 border">Babel</th>
                <th className="px-4 py-2 border">Webpack</th>
                <th className="px-4 py-2 border">Vite</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Purpose</td>
                <td className="px-4 py-2 border">Transpiler</td>
                <td className="px-4 py-2 border">Bundler</td>
                <td className="px-4 py-2 border">Bundler + Dev Server</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Speed</td>
                <td className="px-4 py-2 border">Fast</td>
                <td className="px-4 py-2 border">Slower</td>
                <td className="px-4 py-2 border">Very Fast</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">JSX Support</td>
                <td className="px-4 py-2 border">Yes</td>
                <td className="px-4 py-2 border">With Babel</td>
                <td className="px-4 py-2 border">Built-in</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Setup Complexity</td>
                <td className="px-4 py-2 border">Low</td>
                <td className="px-4 py-2 border">High</td>
                <td className="px-4 py-2 border">Low</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Standalone React App */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧪 React Without Vite/Webpack</h2>
        <p>You can also write simple React apps using just one HTML file using CDN links.</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-xs text-gray-700 mt-3 overflow-auto">
          <pre>
{`<!-- index.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>React App</title>
    <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
      function App() {
        return <h1>Hello from React without Vite!</h1>;
      }

      const root = ReactDOM.createRoot(document.getElementById('root'));
      root.render(<App />);
    </script>
  </body>
</html>`}
          </pre>
        </div>
        <p className="mt-3">
          📝 Use this for learning/demo only. For real projects, use <strong>Vite</strong> or <strong>CRA</strong>.
        </p>
      </section>

      <section className="mt-8">
        <h2 className="text-xl font-semibold mb-2">🎯 Summary</h2>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li><strong>Babel</strong> compiles modern JS/JSX</li>
          <li><strong>Webpack</strong> bundles assets, slower but configurable</li>
          <li><strong>Vite</strong> is faster and simpler for modern React apps</li>
          <li>You can write React without tools using CDN and Babel standalone</li>
        </ul>
      </section>
    </div>
  );
};

export default BuildTools;
