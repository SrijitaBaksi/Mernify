import React from 'react';

const Components = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white shadow-lg rounded-2xl text-gray-800">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">🧩 React Components</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🔹 What Are Components?</h2>
        <p className="mb-2">
          Components are <strong>reusable blocks</strong> of UI that return HTML elements. They behave like JavaScript functions and help break the UI into independent pieces.
        </p>
        <p>React has two types of components:</p>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>🧱 <strong>Function Components</strong> (Modern, recommended)</li>
          <li>🏗️ <strong>Class Components</strong> (Older, still used in some projects)</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🏷️ Function Component Example</h2>
        <p>A simple, preferred way to create a component:</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 overflow-auto">
          <pre>
{`function Car() {
  return <h2>I am a Car!</h2>;
}`}
          </pre>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🏷️ Class Component Example</h2>
        <p>Older style of component using class and <code>render()</code> method:</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 overflow-auto">
          <pre>
{`class Car extends React.Component {
  render() {
    return <h2>Hi, I am a Car!</h2>;
  }
}`}
          </pre>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🚗 Rendering Components</h2>
        <p>To display a component on screen, use:</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 overflow-auto">
          <pre>
{`const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Car />);`}
          </pre>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🎁 Using Props</h2>
        <p>Props are like parameters passed into components:</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 overflow-auto">
          <pre>
{`function Car(props) {
  return <h2>I am a {props.color} Car!</h2>;
}

root.render(<Car color="red" />);`}
          </pre>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🔗 Nesting Components</h2>
        <p>You can use components inside other components:</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 overflow-auto">
          <pre>
{`function Car() {
  return <h2>I am a Car!</h2>;
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}

root.render(<Garage />);`}
          </pre>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📁 Components in Files</h2>
        <p>For better code structure, define components in separate files:</p>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>Create a file <code>Car.js</code></li>
          <li>Write the component code</li>
          <li>Export it using <code>export default</code></li>
        </ul>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 overflow-auto mt-2">
          <pre>
{`// Car.js
function Car() {
  return <h2>Hi, I am a Car!</h2>;
}
export default Car;`}
          </pre>
        </div>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 overflow-auto mt-2">
          <pre>
{`// App.js
import Car from './Car';
root.render(<Car />);`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">✅ Conclusion</h2>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>Function components are shorter, easier, and modern</li>
          <li>Class components use <code>render()</code> and are older style</li>
          <li>Components can accept props and be nested</li>
          <li>Split components into files for better structure</li>
        </ul>
      </section>
    </div>
  );
};

export default Components;
