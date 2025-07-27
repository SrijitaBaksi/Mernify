import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'

const ClassComponents = () => {

    const navigate = useNavigate();
  return (
    <div className="p-6 md:p-10 bg-white text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 border-b-2 border-green-400 pb-2">
        Understanding <strong>Class Components</strong> in React
      </h1>

      {/* What is a Class Component */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">📌 What are Class Components?</h2>
        <p className="mb-2">
          Class components are one of the two primary ways to define components in React (the other being functional components). They use ES6 class syntax and provide additional features like lifecycle methods and internal state.
        </p>
        <p>
          Before the introduction of React Hooks in 2019, class components were the only way to manage state and side effects in React.
        </p>
      </section>

      {/* Syntax Example */}
      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">🧾 Basic Syntax</h2>
        <p className="mb-2">Here's a simple example of a class component with state:</p>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
          <code className="whitespace-pre-wrap break-words block">
{`import React, { Component } from 'react'

class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Ananta'
    }
  }

  render() {
    return <h1>Hello, {this.state.name}!</h1>
  }
}

export default Welcome`}
          </code>
        </div>
        <p className="text-green-700 bg-green-50 border-l-4 border-green-400 p-3 rounded">
          ✅ <strong>Output:</strong> <code>Hello, Ananta!</code>
        </p>
      </section>

      {/* State Handling */}
      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">⚙️ State and Event Handling</h2>
        <p className="mb-2">You can update state using <code>this.setState()</code>:</p>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300">
          <code className="whitespace-pre-wrap block">
{`handleClick = () => {
  this.setState({ name: 'Chatterjee' })
}`}
          </code>
        </div>
        <p>Then call this method on a button click to update state.</p>
      </section>

      {/* Lifecycle Methods */}
      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">⏳ Lifecycle Methods</h2>
        <p>Some common lifecycle methods in class components:</p>
        <ul className="list-disc ml-6">
          <li><code>componentDidMount()</code> – Called once after the component is rendered.</li>
          <li><code>componentDidUpdate()</code> – Called after a component updates.</li>
          <li><code>componentWillUnmount()</code> – Called before component is removed from DOM.</li>
        </ul>
      </section>

      {/* Why Not Used Much */}
      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">🚫 Why Are Class Components Less Common Now?</h2>
        <ul className="list-disc ml-6 mb-2">
          <li>More verbose syntax</li>
          <li>Harder to manage logic reuse (before Hooks)</li>
          <li>React Hooks made functional components more powerful and cleaner</li>
        </ul>
        <p>
          With Hooks like <code>useState</code> and <code>useEffect</code>, you can now do everything in function components that required class components earlier.
        </p>
      </section>

      {/* Summary */}
      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">📌 Summary</h2>
        <ul className="list-disc ml-6">
          <li>Used before Hooks for stateful and lifecycle-based logic</li>
          <li>Still supported in React, but less preferred for new projects</li>
          <li>Helps in understanding React’s evolution and core principles</li>
        </ul>
      </section>

      {/* Back Button (Optional Navigation Placeholder) */}
      <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <button
            className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
            onClick={() => navigate("/ananta-dashboard/renderHtml")}
          >
            ← Back
          </button>

          {/* <p className="text-center md:text-left">Move on to <strong>React Components</strong> next.</p> */}

          <button
            className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
            onClick={() => navigate('/ananta-dashboard/reactComponents')}
          >
            React Components →
          </button>
        </div>
    </div>
  )
}

export default ClassComponents
