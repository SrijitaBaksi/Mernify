import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const DefineHooks = () => {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  return (
    <div className="p-6 md:p-10 bg-white text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 border-b-2 border-green-400 pb-2">
        🪝 Introduction to <strong>React Hooks</strong>
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">📌 What are Hooks?</h2>
        <p className="mb-2">
          Hooks are special functions introduced in <strong>React 16.8</strong> that allow you to use state and other React features in <strong>function components</strong>.
        </p>
        <p>
          Before Hooks, only <code>class components</code> could manage state and lifecycle methods. Hooks allow functional components to be just as powerful — with much simpler and cleaner syntax.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">🧠 Why Use Hooks?</h2>
        <ul className="list-disc ml-6 mb-2">
          <li>Enable stateful logic inside functional components</li>
          <li>Allow sharing logic easily using custom hooks</li>
          <li>Make components more readable and reusable</li>
          <li>No need to use class components for state or side effects</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">📏 Hook Rules</h2>
        <p className="mb-2">There are 3 core rules for using Hooks correctly:</p>
        <ul className="list-decimal ml-6">
          <li>✅ Hooks must be called inside <strong>React function components</strong> only</li>
          <li>✅ Hooks must be called at the <strong>top level</strong> of the component</li>
          <li>✅ Hooks cannot be called inside <strong>conditions, loops, or nested functions</strong></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">🧪 Basic useState Example</h2>
        <p className="mb-2">Let’s see a simple counter example using the <code>useState</code> hook:</p>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
          <code className="whitespace-pre-wrap block">
{`import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}

export default Counter`}
          </code>
        </div>

        <div className="p-4 border-l-4 border-green-500 bg-green-50 text-green-700">
          ✅ <strong>Output:</strong> You clicked {count} times
        </div>
        <button
          className="mt-3 bg-yellow-300 cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2 rounded"
          onClick={() => setCount(count + 1)}
        >
          Click me
        </button>
        <button
          className="mt-3 ml-3 bg-yellow-300 cursor-pointer hover:bg-yellow-500 hover:text-white px-4 py-2 rounded"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">📌 Summary</h2>
        <ul className="list-disc ml-6">
          <li>Hooks were introduced in React 16.8</li>
          <li>They bring state and lifecycle features to function components</li>
          <li>They replaced many use-cases for class components</li>
          <li>Common Hooks include <code>useState</code>, <code>useEffect</code>, <code>useContext</code>, and more</li>
        </ul>
      </section>

      <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <button
          className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
          onClick={() => navigate('/ananta-dashboard/reactMemo')}
        >
          ← Back to React Memo
        </button>

        <button
          className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
          onClick={() => navigate('/ananta-dashboard/hooks/useState')}
        >
          Use State →
        </button>
      </div>
    </div>
  )
}

export default DefineHooks
