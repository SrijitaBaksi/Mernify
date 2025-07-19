import React from 'react';

const TailwindSetup = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white shadow-lg rounded-2xl text-gray-800">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">🎨 Tailwind CSS Setup with Vite</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🔧 Step 1: Install Tailwind</h2>
        <p className="mb-2">Run this command to install Tailwind and its dependencies:</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 overflow-auto">
          <pre>npm install -D tailwindcss postcss autoprefixer</pre>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚙️ Step 2: Initialize Tailwind</h2>
        <p className="mb-2">Generate config files using this command:</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 overflow-auto">
          <pre>npx tailwindcss init -p</pre>
        </div>
        <p>This creates:</p>
        <ul className="list-disc list-inside pl-4">
          <li><code>tailwind.config.js</code></li>
          <li><code>postcss.config.js</code></li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📁 Step 3: Configure Paths</h2>
        <p className="mb-2">Update <code>tailwind.config.js</code>:</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 overflow-auto">
          <pre>
{`content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],`}
          </pre>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💅 Step 4: Add Tailwind Directives</h2>
        <p className="mb-2">In <code>src/index.css</code> (or any global CSS file), add:</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 overflow-auto">
          <pre>
{`@tailwind base;
@tailwind components;
@tailwind utilities;`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">✅ Done!</h2>
        <p>Now you can use Tailwind classes throughout your components. Start styling!</p>
      </section>
    </div>
  );
};

export default TailwindSetup;
