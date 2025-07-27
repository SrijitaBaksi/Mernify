import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Child = ({ name }) => {
  console.log('👶 Child rendered')
  return <p className="text-lg text-green-700">Hello, {name}!</p>
}

const MemoizedChild = React.memo(Child)

const ReactMemo = () => {
  const navigate = useNavigate()
  const [count, setCount] = useState(0)

  return (
    <div className="p-6 md:p-10 bg-white text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 border-b-2 border-green-400 pb-2">
        Introduction to <strong>React.memo</strong>
      </h1>

      {/* What is React.memo */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">🧠 What is React.memo?</h2>
        <p>
          <code>React.memo</code> is a higher-order component used to optimize performance by preventing unnecessary re-renders. If a component receives the same props, React skips rendering and reuses the last output.
        </p>
      </section>

      {/* Why use it */}
      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">🚀 Why use React.memo?</h2>
        <ul className="list-disc ml-6 text-sm text-gray-800 mb-2">
          <li><strong>Performance:</strong> Avoids re-rendering components if props haven't changed.</li>
          <li><strong>Efficiency:</strong> Improves speed in large apps with many components.</li>
          <li><strong>Simple:</strong> Works great for functional components with predictable props.</li>
        </ul>
      </section>

      {/* Without React.memo */}
      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">🚫 Without React.memo</h2>
        <p>
          Even if props don’t change, the <strong>Child</strong> component re-renders when the parent changes.
        </p>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
          <code className="whitespace-pre-wrap break-words block">
{`const Child = ({ name }) => {
  console.log('Child rendered')
  return <p>Hello, {name}!</p>
}

const Parent = () => {
  const [count, setCount] = useState(0)
  return (
    <>
      <Child name="Ananta" />
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  )
}`}
          </code>
        </div>
        <p>🔁 Clicking <code>Increment</code> causes <code>Child</code> to re-render even though <code>name</code> didn’t change.</p>
      </section>

      {/* With React.memo */}
      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">✅ With React.memo</h2>
        <p>By wrapping the component in <code>React.memo</code>, it only re-renders when its props change.</p>

        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
          <code className="whitespace-pre-wrap break-words block">
{`const Child = React.memo(({ name }) => {
  console.log('Child rendered')
  return <p>Hello, {name}!</p>
})`}
          </code>
        </div>
        <p>Now, when the parent updates state, the <code>Child</code> component doesn't re-render unless <code>name</code> changes.</p>
      </section>

      {/* Output Simulation */}
      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">📋 Output:</h2>
        <div className="bg-gray-50 border border-gray-300 rounded p-4">
          <MemoizedChild name="Ananta" />
          <button
            className="mt-4 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => setCount(count + 1)}
          >
            Increment Count
          </button>
          <p className="mt-2">Count: <strong>{count}</strong></p>
          <p className="mt-2 text-sm text-gray-600">
            🧪 Open your console to see whether <code>Child</code> re-renders or not.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <button
          className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
          onClick={() => navigate('/ananta-dashboard/reactRouter')}
        >
          ← Back to React Router
        </button>

        <button
          className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
          onClick={() => navigate('/ananta-dashboard/hooks/hooksDefine')}
        >
          React Hooks →
        </button>
      </div>
    </div>
  )
}

export default ReactMemo
