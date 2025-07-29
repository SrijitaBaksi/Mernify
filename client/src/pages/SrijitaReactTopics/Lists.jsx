import React from 'react';

const Lists = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white shadow-lg rounded-2xl text-gray-800">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">📃 React Lists</h1>

      {/* Intro */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🔁 What are Lists in React?</h2>
        <p className="mb-2">
          In React, when you want to display multiple items (like a list of cars or users), you loop through data using JavaScript's <code>map()</code> method.
        </p>
        <p className="mb-2">
          Each item is typically rendered as a component inside the loop.
        </p>
      </section>

      {/* Simple List with Array */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📋 Simple List Example</h2>
        <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-700">
          <pre>{`function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];

  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car, index) => (
          <Car key={index} brand={car} />
        ))}
      </ul>
    </>
  );
}`}</pre>
        </div>
        <p className="text-sm text-gray-600 mt-2">⚠️ Using array index as a key is fine in static lists, but not recommended for dynamic ones.</p>
      </section>

      {/* List with Objects and Unique Keys */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🆔 Using Unique Keys</h2>
        <p className="mb-2">
          A <strong>key</strong> is a special attribute that helps React identify which items changed, were added, or removed.
        </p>
        <p className="mb-2">
          Always use a unique ID for each item when available.
        </p>
        <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-700">
          <pre>{`function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function Garage() {
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" }
  ];

  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
    </>
  );
}`}</pre>
        </div>
        <p className="text-sm text-green-600 mt-2">✅ Now React can track each list item uniquely and efficiently.</p>
      </section>

      {/* Bonus: Inline Mapping */}
      <section>
        <h2 className="text-xl font-semibold mb-2">⚡ Quick Tip: Inline Mapping</h2>
        <p className="mb-2">You can also render items directly without extracting a separate component.</p>
        <div className="bg-gray-100 p-4 rounded-md text-sm font-mono text-gray-700">
          <pre>{`function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  
  return (
    <>
      <h1>Garage</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>I am a {car}</li>
        ))}
      </ul>
    </>
  );
}`}</pre>
        </div>
      </section>
    </div>
  );
};

export default Lists;
