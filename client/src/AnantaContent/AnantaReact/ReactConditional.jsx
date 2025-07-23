import React from 'react'
import { useNavigate } from 'react-router-dom'

const ReactConditional = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 md:p-10 bg-white text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 border-b-2 border-green-400 pb-2">
        Introduction to <strong>React Conditionals</strong>
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          Meaning of <strong>Conditionals</strong>
        </h2>
        <p>
          In React, conditionals are used to render elements or components only when certain conditions are met.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          Example using <code>&&</code> operator
        </h2>
        <p className='mb-2'>Let’s understand how to use conditional rendering with <strong>logical AND (&&)</strong>:</p>

        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-600 mb-1">Garage.jsx</h3>
          <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
            <code className='whitespace-pre-wrap break-words block'>
{`import React from 'react'

const Garage = (props) => {
  const cars = props.cars;

  return (
    <div>
      <h1>Garage</h1>
      {cars.length > 0 && 
        <h2>You have {cars.length} cars in your garage.</h2>
      }
    </div>
  )
}

export default Garage`}
            </code>
          </div>
        </div>

        <h3 className='text-lg font-medium text-gray-800 mb-2'>Explanation:</h3>
        <p className='mb-2'>
          The <code>&&</code> operator checks if the left side is true. If so, the right side will render.
          In this case, if <code>cars.length &gt; 0</code>, it renders the <code>&lt;h2&gt;</code>.
        </p>

        <h3 className="text-lg font-medium text-gray-600 mb-1">App.jsx</h3>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
          <code className='whitespace-pre-wrap break-words block'>
{`import React from 'react'
import Garage from './components/Garage'

const App = () => {
  const cars = ["BMW", "Toyota", "Ferrari"];
  return (
    <Garage cars={cars} />
  )
}

export default App`}
          </code>
        </div>

        <h3 className="text-lg font-medium text-gray-800 mb-2">Output:</h3>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300">
          <code className="whitespace-pre-wrap break-words block">
You have 3 cars in your garage.
          </code>
        </div>
      </section>

      <section className="mb-10 mt-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">Using Ternary Operator</h2>
        <p className='mb-2'>
          The ternary operator is a concise way to conditionally render one of two expressions:
        </p>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
          <code className="whitespace-pre-wrap break-words block">
{`condition ? expressionIfTrue : expressionIfFalse`}
          </code>
        </div>

        <h3 className='text-lg font-medium text-gray-800 mb-2'>Example:</h3>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
          <code className="whitespace-pre-wrap break-words block">
{`import React from 'react'

const Garage = (props) => {
  const cars = props.cars;

  return (
    <div>
      <h1>Garage</h1>
      {
        cars.length > 0 
        ? <h2>You have {cars.length} cars.</h2>
        : <h2>Your garage is empty.</h2>
      }
    </div>
  )
}

export default Garage`}
          </code>
        </div>

        <h3 className='text-lg font-medium text-gray-800 mb-2'>Output when <code>cars = ["BMW"]</code>:</h3>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
          <code className="whitespace-pre-wrap break-words block">
You have 1 cars.
          </code>
        </div>

        <h3 className='text-lg font-medium text-gray-800 mb-2'>Output when <code>cars = []</code>:</h3>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300">
          <code className="whitespace-pre-wrap break-words block">
Your garage is empty.
          </code>
        </div>
      </section>

      <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <button
          className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
          onClick={() => navigate('/ananta-dashboard/react/reactProps')}
        >
          ← Back
        </button>

        <button
          className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
          onClick={() => navigate('/ananta-dashboard/react/reactLists')}
        >
          React lists →
        </button>
      </div>
    </div>
  )
}

export default ReactConditional
