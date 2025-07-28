import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UseEffect = () => {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)
  const [show, setShow] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    console.log("This runs on every render")
  })

  useEffect(() => {
    console.log("This runs only once on mount (componentDidMount)")
  }, [])

  return (
    <div className="p-6 md:p-10 bg-white text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 border-b-2 border-green-400 pb-2">
        useEffect Hook in React
      </h1>

      {/* What is useEffect */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2 text-gray-700">What is useEffect?</h2>
        <p className="mb-2">
          <code>useEffect</code> is a React Hook that lets you perform <strong>side effects</strong> in function components.
        </p>
        <p>
          Examples include: fetching data, setting up subscriptions, manually changing the DOM, timers, etc.
        </p>
      </section>

      {/* Syntax */}
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-2 text-gray-700">🧾 Syntax:</h2>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300">
          <code>{`useEffect(() => {\n  // side effect\n  return () => {\n    // cleanup (optional)\n  }\n}, [dependencies])`}</code>
        </div>
      </section>

      {/* Example 1: Every render */}
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-2 text-gray-700">🔁 Example 1: Runs on Every Render</h2>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-4">
          <code className="whitespace-pre-wrap block">
{`useEffect(() => {
  console.log("This runs on every render");
});`}
          </code>
        </div>
        <p className="mb-2">
          <strong>Output:</strong> Logged every time the component re-renders (like after every state change).
        </p>
        <button
          className="bg-green-300 cursor-pointer hover:bg-green-500 hover:text-white px-4 py-2 rounded"
          onClick={() => setCount(count + 1)}
        >
          Re-render (Count: {count})
        </button>
        <button
          className="bg-green-300 ml-3 cursor-pointer hover:bg-green-500 hover:text-white px-4 py-2 rounded"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </section>

      {/* Example 2: Empty dependency */}
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-2 text-gray-700">✅ Example 2: Runs Once on Mount</h2>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-4">
          <code className="whitespace-pre-wrap block">
{`useEffect(() => {
  console.log("Runs only on first render");
}, []);`}
          </code>
        </div>
        <p>Use this pattern for API calls or initialization logic.</p>
      </section>

      {/* Example 3: Fetching data */}
      <section className="mb-10">
        <h2 className="text-xl font-medium mb-2 text-gray-700">🌐 Example 3: Fetching Data</h2>
        <button
          className="mb-2 bg-green-300 cursor-pointer hover:bg-green-500 hover:text-white px-4 py-2 rounded"
          onClick={() => {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
              .then(res => res.json())
              .then(json => setData(json))
          }}
        >
          Fetch Data
        </button>
        {data && (
          <div className="p-4 border-l-4 border-green-500 bg-green-50 text-green-700 mt-2">
            ✅ <strong>Fetched:</strong> {JSON.stringify(data)}
          </div>
        )}
      </section>

      {/* Cleanup example */}
      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">🧹 Memory Leak Handling (Cleanup)</h2>
        <p className="mb-2">
          In some cases, like intervals, subscriptions, or async effects, React needs a way to <strong>clean up</strong> before unmounting or re-running the effect.
        </p>

        <p className="mb-2">Below is an example using <code>setInterval</code> with proper cleanup.</p>

        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-4">
          <code className="whitespace-pre-wrap block">
{`useEffect(() => {
  const timer = setInterval(() => {
    console.log("⏱ Interval tick");
  }, 1000);

  return () => {
    clearInterval(timer); // Cleanup
    console.log("🧹 Cleanup on unmount");
  };
}, []);`}
          </code>
        </div>

        <button
          className="bg-green-300 cursor-pointer hover:bg-green-500 hover:text-white px-4 py-2 rounded"
          onClick={() => setShow(!show)}
        >
          Toggle Component
        </button>

        {show && <TickingComponent />}
      </section>

      {/* Summary */}
      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">📌 Summary</h2>
        <ul className="list-disc ml-6">
          <li><code>useEffect</code> runs after every render by default</li>
          <li>Pass an empty array to run once (like componentDidMount)</li>
          <li>Add dependencies to control when it re-runs</li>
          <li>Always clean up subscriptions or timers to avoid memory leaks</li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <button
          className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
          onClick={() => navigate('/ananta-dashboard/react/hooks/useState')}
        >
          ← Back to useState
        </button>

        <button
          className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
          onClick={() => navigate('/ananta-dashboard/react/hooks/useContext')}
        >
          useContext →
        </button>
      </div>
    </div>
  )
}

const TickingComponent = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("⏱ Interval running...")
    }, 1000)

    return () => {
      clearInterval(timer)
      console.log("🧹 Interval cleaned up")
    }
  }, [])

  return (
    <div className="mt-4 text-green-700">
      ⏱ Interval started — open console to see logs
    </div>
  )
}

export default UseEffect
