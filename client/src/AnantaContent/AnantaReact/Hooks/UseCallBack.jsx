import React, { useState, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'

// 🧸 Child component optimized using React.memo
const ExpensiveChild = React.memo(({ onAdd }) => {
  console.log("Child re-rendered") // Will log only if `onAdd` reference changes

  return (
    <button
      onClick={onAdd}
      className="bg-green-300 cursor-pointer hover:bg-green-500 px-4 py-2 rounded"
    >
      ➕ Add to Count
    </button>
  )
})

const UseCallBack = () => {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)
  const [text, setText] = useState('')

  // ✅ useCallback: memoizes the function unless dependencies change
  const handleAdd = useCallback(() => {
    setCount(prev => prev + 1)
  }, []) // 🔁 Created only once (no dependency)

  // ✅ useMemo: used for derived value to prevent recomputation
  const double = useMemo(() => {
    console.log("⚙️ Computing double...")
    return count * 2
  }, [count])

  return (
    <div className="p-6 md:p-10 bg-white text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 border-b-2 border-green-400 pb-2">
        useCallback Hook in React
      </h1>

      {/* 🧠 useCallback Concept */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">🔁 What is useCallback?</h2>
        <p className="mb-2">
          <code>useCallback</code> returns a <strong>memoized version of a callback function</strong> that only changes if its dependencies change.
        </p>
        <p>
          It's useful when passing functions as props to <code>React.memo</code>-wrapped child components, to prevent re-renders.
        </p>
      </section>

      {/* useCallback vs useMemo */}
      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">🧠 useCallback vs useMemo</h2>
        <ul className="list-disc ml-6">
          <li><code>useCallback</code> ➜ Memoizes <strong>functions</strong></li>
          <li><code>useMemo</code> ➜ Memoizes <strong>values/computed results</strong></li>
          <li>Both help improve performance in different use cases</li>
        </ul>
      </section>

      {/* Syntax Highlight */}
      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">🧾 Syntax</h2>
        <div className="bg-gray-100 p-4 rounded text-sm text-gray-800">
          <pre className="whitespace-pre-wrap">
{`const memoizedFunction = useCallback(() => {
  // your logic
}, [dependencies])`}
          </pre>
        </div>
      </section>

      {/* 🧪 Live Example */}
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-2 text-gray-700">🧪 Live Example</h2>
        <p className="mb-4">
          Typing in the input below re-renders the parent. But the child button only re-renders when <code>handleAdd</code> changes.
        </p>

        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="border px-3 py-2 mb-4 rounded w-full md:w-1/2"
        />

        <div className="flex items-center gap-4 mb-4">
          <ExpensiveChild onAdd={handleAdd} />
          <span className="text-lg">Count: <strong>{count}</strong></span>
          <span className="text-lg">Double: <strong>{double}</strong></span>
        </div>

        {/* 📋 Show the actual code used in example */}
        <div className="bg-gray-100 p-4 rounded text-sm text-gray-800 mt-6">
          <h3 className="font-semibold text-md mb-2">📋 Example Code:</h3>
          <pre className="whitespace-pre-wrap text-xs">
{`const handleAdd = useCallback(() => {
  setCount(prev => prev + 1);
}, []);

const double = useMemo(() => {
  console.log("Computing double...");
  return count * 2;
}, [count]);

<ExpensiveChild onAdd={handleAdd} />
<span>Count: {count}</span>
<span>Double: {double}</span>`}
          </pre>
        </div>
      </section>

      {/* 🔍 Explanation */}
      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">🔍 Explanation</h2>
        <ul className="list-disc ml-6">
          <li><code>handleAdd</code> is wrapped in <code>useCallback</code> → stable function reference</li>
          <li><code>React.memo</code> makes <code>ExpensiveChild</code> re-render only if <code>onAdd</code> changes</li>
          <li><code>useMemo</code> used for computing <code>double</code> only when <code>count</code> updates</li>
        </ul>
      </section>

      {/* 🧪 Dev Tip */}
      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">🧪 Dev Tip: Testing Re-renders</h2>
        <p>
          Add <code>console.log("🔁 Child re-rendered")</code> in the child component to see when it renders.
        </p>
      </section>

      {/* 📌 Summary */}
      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">📌 Summary</h2>
        <ul className="list-disc ml-6">
          <li><code>useCallback</code> memoizes functions → performance boost</li>
          <li>Used to avoid unnecessary re-renders in memoized child components</li>
          <li><code>useMemo</code> is better for expensive value computation</li>
        </ul>
      </section>

      {/* 🔁 Navigation Buttons */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <button
          onClick={() => navigate('/ananta-dashboard/react/hooks/useReducer')}
          className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
        >
          ← Back to useReducer
        </button>

        <button
          onClick={() => navigate('/ananta-dashboard/react/hooks/useMemo')}
          className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
        >
          useMemo →
        </button>
      </div>
    </div>
  )
}

export default UseCallBack
