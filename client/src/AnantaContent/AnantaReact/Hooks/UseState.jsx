import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UseState = () => {
  const [count, setCount] = useState(0)
  const navigate = useNavigate();

  return (
    <div className="p-6 md:p-10 bg-white text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 border-b-2 border-green-400 pb-2">
        ⚛️ useState Hook in React
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">📌 What is useState?</h2>
        <p className="mb-2">
          <code>useState</code> is a built-in React Hook that lets you add <strong>state</strong> to your function components.
        </p>
        <p>
          It was introduced in React 16.8 to replace the need for class-based state management.
        </p>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-2 text-gray-700">🧾 Syntax:</h2>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300">
          <code>{`const [state, setState] = useState(initialValue)`}</code>
        </div>
        <ul className="list-disc ml-6 mt-2">
          <li><code>state</code> – The current value of your state variable</li>
          <li><code>setState</code> – A function to update the state</li>
          <li><code>initialValue</code> – The starting value of the state</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-medium mb-2 text-gray-700">🧪 Example: Counter</h2>
        <p className="mb-2">Here’s a simple example where we use <code>useState</code> to build a counter:</p>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-4">
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
          ✅ <strong>Output:</strong> You clicked <strong>{count}</strong> times
        </div>
        <button
          className="mt-3 cursor-pointer bg-green-300 hover:bg-green-500 hover:text-white px-4 py-2 rounded"
          onClick={() => setCount(count + 1)}
        >
          Click me
        </button>
        <button
          className="mt-3 ml-3 cursor-pointer bg-green-300 hover:bg-green-500 hover:text-white px-4 py-2 rounded"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">✨ Why use useState?</h2>
        <ul className="list-disc ml-6">
          <li>Manage local state in a functional component</li>
          <li>Simple and minimal syntax</li>
          <li>Can store strings, numbers, arrays, objects, booleans</li>
          <li>Replaces the need for class-based state</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">📏 Rules of useState</h2>
        <ul className="list-decimal ml-6">
          <li>✅ Must be used inside a React function component</li>
          <li>✅ Must be called at the top level, not inside loops or conditions</li>
          <li>✅ You can use multiple <code>useState</code> calls in a single component</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">📌 Summary</h2>
        <ul className="list-disc ml-6">
          <li><code>useState</code> adds state to functional components</li>
          <li>It returns an array with [value, setter function]</li>
          <li>Very useful for counters, forms, toggles, and more</li>
        </ul>
      </section>

      <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <button
          className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
          onClick={() => navigate('/ananta-dashboard/hooks/hooksDefine')}
        >
          ← Back to Hooks
        </button>

        <button
          className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
          onClick={() => navigate('/ananta-dashboard/hooks/useEffect')}
        >
          Use Effect →
        </button>
      </div>
    </div>
  )
}

export default UseState
