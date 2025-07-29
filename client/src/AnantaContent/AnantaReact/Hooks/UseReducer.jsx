import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'

const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return { count: 0 }
    default:
      return state
  }
}

const UseReducer = () => {
  const navigate = useNavigate()
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="p-6 md:p-10 bg-white text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 border-b-2 border-green-400 pb-2">
        useReducer Hook in React
      </h1>

      {/* What is useReducer */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">What is useReducer?</h2>
        <p className="mb-2">
          <code>useReducer</code> is a React Hook that is used for managing more complex state logic in functional components.
        </p>
        <p>
          It works similarly to <code>useState</code>, but gives more control and is preferred when the state logic involves multiple sub-values or when the next state depends on the previous one.
        </p>
      </section>

      {/* Why useReducer */}
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-2 text-gray-700">❓ Why use useReducer?</h2>
        <ul className="list-disc ml-6">
          <li>Ideal for complex state transitions</li>
          <li>Keeps state logic separate from the component</li>
          <li>Useful for state management with multiple actions</li>
        </ul>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-2 text-gray-700">🧾 Syntax</h2>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300">
          <code className="whitespace-pre-wrap block">
{`const [state, dispatch] = useReducer(reducerFunction, initialState)

function reducerFunction(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    default:
      return state
  }
}`}
          </code>
        </div>
      </section>

      {/* Code + Output */}
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-2 text-gray-700">📦 Code + Output</h2>

        {/* Code */}
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-4 rounded border border-gray-300 mb-4 overflow-auto">
          <code className="whitespace-pre block">
{`const initialState = { count: 0 }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return { count: 0 }
    default:
      return state
  }
}

const [state, dispatch] = useReducer(reducer, initialState)

return (
  <>
    <p>Count: {state.count}</p>
    <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
    <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
  </>
)`}
          </code>
        </div>

        {/* Output */}
        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2 text-blue-600">🧪 Output</h3>
          <div className="text-xl font-bold text-gray-700 mb-3">
            Count: <span className="text-blue-500">{state.count}</span>
          </div>
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={() => dispatch({ type: 'increment' })}
              className="bg-blue-300 hover:bg-blue-500 cursor-pointer hover:text-white px-4 py-2 rounded"
            >
              Increment
            </button>
            <button
              onClick={() => dispatch({ type: 'decrement' })}
              className="bg-blue-300 hover:bg-blue-500 cursor-pointer hover:text-white px-4 py-2 rounded"
            >
              Decrement
            </button>
            <button
              onClick={() => dispatch({ type: 'reset' })}
              className="bg-blue-300 hover:bg-blue-500 cursor-pointer hover:text-white px-4 py-2 rounded"
            >
              Reset
            </button>
          </div>
        </div>
      </section>

      {/* Summary */}
      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">📌 Summary</h2>
        <ul className="list-disc ml-6">
          <li><code>useReducer()</code> is ideal for managing complex state</li>
          <li>It uses a reducer function and action types to update state</li>
          <li>Keeps logic centralized and predictable</li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <button
          className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
          onClick={() => navigate('/ananta-dashboard/react/hooks/useRef')}
        >
          ← Back to useRef
        </button>

        <button
          className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
          onClick={() => navigate('/ananta-dashboard/react/hooks/customHooks')}
        >
          Custom Hooks →
        </button>
      </div>
    </div>
  )
}

export default UseReducer
