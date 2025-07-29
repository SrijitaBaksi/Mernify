import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const UseRef = () => {
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const countRef = useRef(0)

  const focusInput = () => {
    inputRef.current.focus()
  }

  const increment = () => {
    countRef.current += 1
    alert(`Current count stored in ref: ${countRef.current}`)
  }

  return (
    <div className="p-6 md:p-10 bg-white text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 border-b-2 border-green-400 pb-2">
        useRef Hook in React
      </h1>

      {/* What is useRef */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">What is useRef?</h2>
        <p className="mb-2">
          <code>useRef</code> is a React Hook that returns a mutable object whose <code>.current</code> property is persistent across renders.
        </p>
        <p>
          You can use it to reference DOM nodes, store values without causing re-renders, or hold timer IDs, WebSocket references, etc.
        </p>
      </section>

      {/* Why use useRef? */}
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-2 text-gray-700">❓ Why use useRef?</h2>
        <ul className="list-disc ml-6">
          <li>To access and manipulate DOM elements directly</li>
          <li>To store values across renders without triggering re-render</li>
          <li>To avoid unnecessary state updates</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-2 text-gray-700">🧾 Syntax</h2>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300">
          <code className="whitespace-pre-wrap block">
{`const ref = useRef(initialValue)
ref.current // access or mutate`}
          </code>
        </div>
      </section>

      {/* Code + Output Section */}
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-2 text-gray-700">📦 Code + Output</h2>

        {/* Code Block */}
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-4 rounded border border-gray-300 mb-4 overflow-auto">
          <code className="whitespace-pre block">
{`const inputRef = useRef(null)
const countRef = useRef(0)

const focusInput = () => {
  inputRef.current.focus()
}

const increment = () => {
  countRef.current += 1
  alert(\`Current count: \${countRef.current}\`)
}

return (
  <>
    <input ref={inputRef} placeholder="Focus me" />
    <button onClick={focusInput}>Focus Input</button>
    <button onClick={increment}>Increment Ref Counter</button>
  </>
)`}
          </code>
        </div>

        {/* Output Block */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 text-green-600">🧪 Output</h3>
          <input
            ref={inputRef}
            type="text"
            placeholder="Click the button to focus me"
            className="border px-3 py-2 rounded w-full md:w-1/2 mb-3"
          />
          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={focusInput}
              className="bg-green-300 cursor-pointer hover:bg-green-500 hover:text-white px-4 py-2 rounded"
            >
              Focus Input
            </button>
            <button
              onClick={increment}
              className="bg-green-300 cursor-pointer hover:bg-green-500 hover:text-white px-4 py-2 rounded"
            >
              Increment Ref Counter
            </button>
          </div>
          <p className="text-sm mt-2 text-gray-600">
            (Count is stored in ref and shown in alert — UI won't re-render)
          </p>
        </div>
      </section>

      {/* Summary */}
      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">📌 Summary</h2>
        <ul className="list-disc ml-6">
          <li><code>useRef()</code> gives a ref object with a `.current` value</li>
          <li>Does not cause re-renders on update</li>
          <li>Used to reference DOM elements or persist values</li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <button
          className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
          onClick={() => navigate('/ananta-dashboard/react/hooks/useContext')}
        >
          ← Back to useContext
        </button>

        <button
          className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
          onClick={() => navigate('/ananta-dashboard/react/hooks/useReducer')}
        >
          useReducer →
        </button>
      </div>
    </div>
  )
}

export default UseRef
