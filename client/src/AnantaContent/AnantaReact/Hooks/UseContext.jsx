import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

// 1️⃣ Create the context
const UserContext = createContext()

const UseContext = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({ name: 'Ananta', role: 'Developer' })

  return (
    // 2️⃣ Provide the context value
    <UserContext.Provider value={{ user, setUser }}>
      <div className="p-6 md:p-10 bg-white text-gray-800">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 border-b-2 border-green-400 pb-2">
          useContext Hook in React
        </h1>

        {/* What is useContext */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-2 text-gray-700">What is useContext?</h2>
          <p className="mb-2">
            <code>useContext</code> is a React Hook that lets you access values from a <strong>React Context</strong> without passing props manually.
          </p>
          <p>
            It helps avoid <strong>prop drilling</strong> by sharing data like user info, theme, or language settings deeply in the component tree.
          </p>
        </section>

        {/* The Problem (Before useContext) */}
        <section className="mb-10">
          <h2 className="text-xl font-medium text-gray-700 mb-2">🚨 The Problem: Prop Drilling</h2>
          <p className="mb-2">
            Before <code>useContext</code>, data had to be passed through multiple components via props, even if intermediate components didn’t use it.
          </p>
          <p>
            This made the code harder to maintain and refactor.
          </p>
        </section>

        {/* The Solution */}
        <section className="mb-10">
          <h2 className="text-xl font-medium text-gray-700 mb-2">✅ The Solution: useContext</h2>
          <p className="mb-2">
            Using <code>useContext</code> with a <code>Context.Provider</code>, you can share data across the tree without passing it manually.
          </p>
        </section>

        {/* Syntax */}
        <section className="mb-10">
          <h2 className="text-xl font-medium mb-2 text-gray-700">🧾 Syntax</h2>
          <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300">
            <code className="whitespace-pre-wrap block">{`const value = useContext(MyContext)`}</code>
          </div>
        </section>

        {/* Example */}
        <section className="mb-10">
          <h2 className="text-xl font-medium mb-2 text-gray-700">👨‍💻 Example: Live Context</h2>
          <p className="mb-2">
            Below is a live example of context usage. You can update the user's name or role, and the nested component will access the latest context value using <code>useContext</code>.
          </p>

          <div className="mb-4">
            <label className="block mb-1">Update Name:</label>
            <input
              type="text"
              value={user.name}
              onChange={(e) => setUser(prev => ({ ...prev, name: e.target.value }))}
              className="border px-3 py-2 rounded w-full md:w-1/2 mb-3"
            />

            <label className="block mb-1">Update Role:</label>
            <input
              type="text"
              value={user.role}
              onChange={(e) => setUser(prev => ({ ...prev, role: e.target.value }))}
              className="border px-3 py-2 rounded w-full md:w-1/2"
            />
          </div>

          <UserDetails />
        </section>

        {/* Summary */}
        <section className="mb-10">
          <h2 className="text-xl font-medium text-gray-700 mb-2">📌 Summary</h2>
          <ul className="list-disc ml-6">
            <li><strong>Prop drilling</strong> leads to unnecessary props</li>
            <li><code>useContext</code> allows any component to access shared state</li>
            <li>Wrap components with a <code>Context.Provider</code> and access via <code>useContext</code></li>
            <li>Good for sharing theme, user, auth, language, etc.</li>
          </ul>
        </section>

        {/* Navigation */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <button
            className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
            onClick={() => navigate('/ananta-dashboard/react/hooks/useEffect')}
          >
            ← Back to useEffect
          </button>

          <button
            className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
            onClick={() => navigate('/ananta-dashboard/react/hooks/useReducer')}
          >
            useReducer →
          </button>
        </div>
      </div>
    </UserContext.Provider>
  )
}

// Consumer component that reads from context
const UserDetails = () => {
  const { user } = useContext(UserContext)

  return (
    <div className="mt-4 p-4 border-l-4 border-green-500 bg-green-50 text-green-700">
      👤 <strong>Live User Info:</strong> {user.name} — {user.role}
    </div>
  )
}

export default UseContext
