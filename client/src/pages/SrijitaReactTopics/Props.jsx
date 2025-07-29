import React from 'react';

const Props = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white shadow-lg rounded-2xl text-gray-800">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">🎁 React Props</h1>

      {/* What are Props */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📌 What are Props?</h2>
        <p className="mb-2">
          <strong>Props</strong> (short for <em>properties</em>) are how you pass data from one component to another in React, just like passing arguments to functions.
        </p>
        <p className="mb-2">
          Props are read-only. They help make components <strong>dynamic and reusable</strong>.
        </p>
      </section>

      {/* Basic Props Passing */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📤 Passing Props</h2>
        <p className="mb-2">You can pass props as attributes when using a component:</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 mb-4">
          <pre>
{`function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car brand="Ford" />);`}
          </pre>
        </div>
      </section>

      {/* Passing from parent component */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🔗 Parent to Child</h2>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 mb-4">
          <pre>
{`function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="Ford" />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);`}
          </pre>
        </div>
      </section>

      {/* Variable as Prop */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📦 Passing Variables</h2>
        <p className="mb-2">You can also pass variables instead of hardcoded strings:</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 mb-4">
          <pre>
{`function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

function Garage() {
  const carName = "Ford";
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={carName} />
    </>
  );
}`}
          </pre>
        </div>
      </section>

      {/* Object as Prop */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧩 Passing Objects</h2>
        <p className="mb-2">You can pass entire objects as a prop too:</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 mb-4">
          <pre>
{`function Car(props) {
  return <h2>I am a {props.brand.model}!</h2>;
}

function Garage() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand={carInfo} />
    </>
  );
}`}
          </pre>
        </div>
      </section>

      {/* Destructuring Props */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✂️ Destructuring Props</h2>
        <p className="mb-2">
          Instead of writing <code>props.brand</code> or <code>props.color</code>, you can destructure the props directly in the function parameters.
        </p>
        <p className="mb-2">Example with multiple props:</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 mb-4">
          <pre>
{`function Car({ brand, color }) {
  return <h2>I am a {color} {brand}!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <Car brand="BMW" color="blue" />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Garage />);`}
          </pre>
        </div>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-xl font-semibold mb-2">📝 Summary</h2>
        <ul className="list-disc list-inside space-y-1 pl-4">
          <li>✅ Props = data passed to components</li>
          <li>🚫 Props are read-only</li>
          <li>📤 You can pass strings, variables, or objects</li>
          <li>🧼 Props can be destructured for cleaner code</li>
        </ul>
      </section>
    </div>
  );
};

export default Props;
