import React from 'react'
import { useNavigate } from 'react-router-dom'

const ConnectTailwind = () => {
    const navigate = useNavigate();
  return (
    <div className="p-6 md:p-10 bg-white text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 border-b-2 border-green-400 pb-2">
        🌟 React + Tailwind CSS Setup using Vite Plugin
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">1️⃣ Create Your Vite + React Project</h2>
        <p className="mb-2">Start by creating a new Vite project:</p>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300">
          <code className="whitespace-pre-wrap block">
{`npm create vite@latest my-project
cd my-project`}
          </code>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">2️⃣ Install Tailwind CSS and Plugin</h2>
        <p className="mb-2">Install <code>tailwindcss</code> and <code>@tailwindcss/vite</code>:</p>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300">
          <code className="whitespace-pre-wrap block">
{`npm install tailwindcss @tailwindcss/vite`}
          </code>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">3️⃣ Configure Vite to Use Tailwind Plugin</h2>
        <p className="mb-2">Edit your <code>vite.config.js</code> or <code>vite.config.ts</code>:</p>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300">
          <code className="whitespace-pre-wrap block">
{`// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})`}
          </code>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">4️⃣ Import Tailwind in Your CSS</h2>
        <p className="mb-2">In your <code>src/style.css</code> file:</p>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300">
          <code className="whitespace-pre-wrap block">
{`@import "tailwindcss";`}
          </code>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">5️⃣ Link CSS File in HTML</h2>
        <p className="mb-2">Make sure your compiled CSS is linked in <code>index.html</code>:</p>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300">
          <code className="whitespace-pre-wrap block">
{`<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="/src/style.css" rel="stylesheet">
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </body>
</html>`}
          </code>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">6️⃣ Run Your Development Server</h2>
        <p className="mb-2">Start the dev server to see Tailwind in action:</p>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300">
          <code className="whitespace-pre-wrap block">
{`npm run dev`}
          </code>
        </div>
      </section>

      <div className="mt-8 p-4 border-l-4 border-green-500 bg-green-50 text-green-700">
        ✅ That’s it! Tailwind CSS is now integrated into your React project using the Vite plugin.
        You can now start using utility classes like <code>bg-indigo-600</code>, <code>text-lg</code>, <code>p-4</code>, etc.
      </div>

      <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <button
          className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
          onClick={() => navigate('/ananta-dashboard/introduction')}
        >
          ← Back to React Introduction
        </button>

        <button
          className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
          onClick={() => navigate('/ananta-dashboard/renderHtml')}
        >
          React HTML →
        </button>
      </div>
    </div>
  )
}

export default ConnectTailwind
