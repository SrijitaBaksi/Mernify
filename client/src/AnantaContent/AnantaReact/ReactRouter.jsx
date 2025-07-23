import React from 'react'
import { useNavigate } from 'react-router-dom'

const Car = (props) => {
  return <li className="text-gray-800">🚗 I am {props.brand}</li>
}

const ReactRouter = () => {
  const navigate = useNavigate()
  const cars = [
    { id: 1, brand: 'Ford' },
    { id: 2, brand: 'BMW' },
    { id: 3, brand: 'Audi' }
  ]

  return (
    <div className="p-6 md:p-10 bg-white text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 border-b-2 border-green-400 pb-2">
        Introduction to <strong>React Router</strong>
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">🚦 What is React Router?</h2>
        <p>
          React Router is a library for routing in React applications. It enables the navigation among views of various components in a React app, manages the browser history, and keeps the UI in sync with the URL.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">🔗 Setting Up Routes</h2>
        <p className="mb-2">
          First, we use the <code>BrowserRouter</code> to wrap our application. Then, we define different <code>Route</code>s using <code>Routes</code>.
        </p>

        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
          <code className="whitespace-pre-wrap break-words block">
{`import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Garage from './Garage'
import Greeting from './Greeting'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Garage />} />
        <Route path="/greeting" element={<Greeting name="Ananta" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App`}
          </code>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">🚗 Garage Component</h2>
        <p className="mb-2">
          In the <strong>Garage</strong> component, we list some cars and use <code>useNavigate</code> from React Router to navigate to the Greeting page on button click.
        </p>

        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
          <code className="whitespace-pre-wrap break-words block">
{`import React from 'react'
import { useNavigate } from 'react-router-dom'

function Car(props) {
  return <li>I am {props.brand}</li>
}

const Garage = () => {
  const navigate = useNavigate()
  const cars = [
    { id: 1, brand: 'Ford' },
    { id: 2, brand: 'BMW' },
    { id: 3, brand: 'Audi' }
  ]

  return (
    <div>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
      <button onClick={() => navigate('/greeting')}>Go to Greeting</button>
    </div>
  )
}

export default Garage`}
          </code>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">🙋 Greeting Component</h2>
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
          <code className="whitespace-pre-wrap break-words block">
{`import React from 'react'

const Greeting = (props) => {
  return <div>Welcome {props.name}</div>
}

export default Greeting`}
          </code>
        </div>
        <p>This component receives a prop and renders a personalized message.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">📋 Output:</h2>
        <div className="bg-gray-50 border border-gray-300 rounded p-4">
          <h1 className="text-lg font-semibold text-gray-700 mb-2">Who lives in my garage?</h1>
          <ul className="list-disc ml-6">
            {cars.map((car) => (
              <Car key={car.id} brand={car.brand} />
            ))}
          </ul>
        </div>
      </section>

      <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <button
          className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
          onClick={() => navigate('/ananta-dashboard/reactLists')}
        >
          ← Back to React Lists
        </button>

        <button
          className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
          onClick={() => navigate('/ananta-dashboard/reactMemo')}
        >
          React Memo →
        </button>
      </div>
    </div>
  )
}

export default ReactRouter
