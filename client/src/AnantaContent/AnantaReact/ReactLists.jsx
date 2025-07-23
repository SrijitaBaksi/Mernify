import React from 'react'
import { useNavigate } from 'react-router-dom'

function Car(props) {
  return <li className="text-gray-800">🚗 I am {props.brand}</li>
}

const ReactLists = () => {
  const navigate = useNavigate()

  const cars = [
    { id: 1, brand: 'Ford' },
    { id: 2, brand: 'BMW' },
    { id: 3, brand: 'Audi' }
  ]

  return (
    <div className="p-6 md:p-10 bg-white text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 border-b-2 border-green-400 pb-2">
        Introduction to <strong>React Lists</strong>
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          📌 What is List Rendering in React?
        </h2>
        <p>
          In React, you can build collections of elements and include them in JSX using JavaScript’s <code>map()</code> function.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">🔁 Rendering a List</h2>
        <p className="mb-2">We create a list of cars and render each item using a component:</p>

        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
          <code className="whitespace-pre-wrap break-words block">
{`function Car(props) {
  return <li>I am {props.brand}</li>
}

const Garage = () => {
  const cars = [
    { id: 1, brand: 'Ford' },
    { id: 2, brand: 'BMW' },
    { id: 3, brand: 'Audi' }
  ];

  return (
    <div>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
    </div>
  );
}`}
          </code>
        </div>

        <p className="mb-2">
          Each car is rendered using the <code>Car</code> component. The <strong><code>key</code></strong> prop is used to help React keep track of which items have changed.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-medium text-gray-700 mb-2">🔑 Why is <code>key</code> Important?</h2>
        <ul className="list-disc ml-6 text-sm text-gray-800 mb-2">
          <li><strong>Performance:</strong> Keys help React identify which items have changed, added, or removed.</li>
          <li><strong>Stability:</strong> Without keys, React may re-render the wrong components, causing bugs.</li>
          <li><strong>Uniqueness:</strong> Keys should be unique for each item in the list.</li>
        </ul>
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
          onClick={() => navigate('/ananta-dashboard/react/reactConditionals')}
        >
          ← Back
        </button>

        <button
          className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
          onClick={() => navigate('/ananta-dashboard/react/reactRouter')}
        >
          React Forms →
        </button>
      </div>
    </div>
  )
}

export default ReactLists
