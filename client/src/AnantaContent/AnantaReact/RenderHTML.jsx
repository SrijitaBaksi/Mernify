import React from 'react'
import { useNavigate } from 'react-router-dom'

const RenderHTML = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 md:p-10 bg-white text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 border-b-2 border-green-400 pb-2">
        Introduction to <strong>RENDER HTML</strong>
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          📌 Meaning of <strong>Rendering</strong>
        </h2>
        <p className="mb-2">
          Rendering means displaying <strong>HTML</strong> content in the website.
        </p>
        <p>
          React uses <strong>JSX (Javascript XML)</strong> which looks like HTML but also allows <strong>JavaScript</strong> functionality too.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          ⚙️ How to render HTML in React
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-600 mb-1">Step 1: Create a React App using Vite</h3>
          <p className="mb-2">
            Use Vite to scaffold a new React application quickly.
          </p>
          <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
            <code className="block whitespace-pre-wrap">npm create vite@latest</code>
            <code className="block whitespace-pre-wrap">cd my-app</code>
            <code className="block whitespace-pre-wrap">npm run dev</code>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-600 mb-1">A simple example of rendering HTML</h3>
          <p className="mb-2">
            In the <strong>App.jsx</strong> file, write the following code:
          </p>
          <pre className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3 overflow-x-auto">
            <code className="whitespace-pre-wrap">
{`import React from 'react'

const App = () => {
  return (
    <div>
      <h1>Hello this is from React</h1>
      <h1>Here I should be wrapped in a div or &lt;&gt;&lt;/&gt; like this</h1>
    </div>
  )
}

export default App;`}
            </code>
          </pre>
          <p className="mb-2">
            Remember: Inside the return, only one parent element can be rendered. So wrap your internal code with a <code className="bg-gray-100 px-1 py-0.5 rounded">&lt;div&gt;</code> or <code className="bg-gray-100 px-1 py-0.5 rounded">&lt;&gt;&lt;/&gt;</code> (Fragment). Inside that, you can create multiple child elements.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-600 mb-1">Output of the above code in the browser</h3>
          <p className="mb-2">
            Copy the link (if similar) <span className="bg-gray-100 text-sm text-gray-800 px-2 py-1 rounded border border-gray-300">http://localhost:5173</span> and paste it in any browser.
          </p>
          <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
            <code className="block">Hello this is from React</code>
            <code className="block">Here I should be wrapped in a div or &lt;&gt; like this</code>
          </div>
          <p className="mb-2">
            You will see this output. This is the basic demonstration of how React renders HTML.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-600 mb-1">Rendering HTML from variables</h3>
          <p className="mb-2">
            Below is a demo code showing how HTML is rendered by using variables.
          </p>
          <pre className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3 overflow-x-auto">
            <code className="whitespace-pre-wrap">
{`import React from 'react'

const App = () => {
  const title = "Welcome to React!"
  const description = "This is a paragraph"

  return (
    <div>
      <h1>{title}</h1>
      <h1>{description}</h1>
    </div>
  )
}

export default App;`}
            </code>
          </pre>
          <p>This is how React renders HTML via variables.</p>
        </div>

        <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <button
            className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
            onClick={() => navigate("/ananta-dashboard/react/connectTailwind")}
          >
            ← Back
          </button>

          <button
            className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
            onClick={() => navigate('/ananta-dashboard/react/classComponents')}
          >
            React Class Components →
          </button>
        </div>
      </section>
    </div>
  )
}

export default RenderHTML
