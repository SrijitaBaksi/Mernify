import React from 'react';

const Events = () => {
  const shoot = (msg, event) => {
    alert(msg + " — Event type: " + event.type);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white shadow-lg rounded-2xl text-gray-800">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">⚡ React Events</h1>

      {/* What are Events */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📌 What are React Events?</h2>
        <p className="mb-2">
          React handles user interactions through <strong>events</strong> just like HTML. Examples: <code>onClick</code>, <code>onChange</code>, <code>onSubmit</code>, <code>onMouseOver</code>, etc.
        </p>
        <ul className="list-disc list-inside pl-4">
          <li>Events use <strong>camelCase</strong> → <code>onClick</code> not <code>onclick</code></li>
          <li>Handlers use <strong>curly braces</strong> → <code>onClick={'{shoot}'}</code> not <code>"shoot()"</code></li>
        </ul>
      </section>

      {/* Basic Event Example */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🎯 Basic Click Example</h2>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 mb-4">
          <pre>
{`function Football() {
  const shoot = () => {
    alert("Great Shot!");
  };

  return <button onClick={shoot}>Take the shot!</button>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Football />);`}
          </pre>
        </div>
      </section>

      {/* Passing Arguments */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📨 Passing Arguments</h2>
        <p className="mb-2">
          Use arrow functions to pass arguments to your event handlers.
        </p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 mb-4">
          <pre>
{`function Football() {
  const shoot = (msg) => {
    alert(msg);
  };

  return <button onClick={() => shoot("Goal!")}>Shoot!</button>;
}`}
          </pre>
        </div>
      </section>

      {/* Event Object */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📦 React Event Object</h2>
        <p className="mb-2">
          Every React event returns a special <strong>synthetic event object</strong>. This object wraps the browser’s native event and provides cross-browser compatibility.
        </p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 mb-4">
          <pre>
{`function Football() {
  const shoot = (msg, event) => {
    alert(msg + " Event type: " + event.type);
  };

  return <button onClick={(e) => shoot("Nice shot!", e)}>Click</button>;
}`}
          </pre>
        </div>

        {/* 🔘 Actual demo button */}
        <div className="mt-4">
          <p className="mb-2 text-sm text-gray-600">👉 Click this live demo button:</p>
          <button
            onClick={(e) => shoot("Nice shot!", e)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            Click Me
          </button>
        </div>
      </section>

      {/* preventDefault */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🛑 preventDefault()</h2>
        <p className="mb-2">
          The <code>preventDefault()</code> method is used to stop the default behavior (e.g., form submission, link navigation).
        </p>
        <p className="mb-2">For example, to stop a link from redirecting:</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 mb-4">
          <pre>
{`function StopLink() {
  const handleClick = (e) => {
    e.preventDefault();
    alert("Link was blocked!");
  };

  return <a href="https://google.com" onClick={handleClick}>Don't go to Google</a>;
}`}
          </pre>
        </div>
      </section>

      {/* Supported Event Types */}
      <section>
        <h2 className="text-xl font-semibold mb-2">📚 Common React Events</h2>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li>📥 <code>onChange</code> – for input fields </li>
          <li>🖱️ <code>onClick</code> – for button or div clicks <div className="mt-4">          <button
            onClick={(e) => shoot("I am onClick!", e)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            Click Me
          </button>
        </div></li>
          <li>🖐️ <code>onMouseOver</code> / <code>onMouseEnter</code>
            <div className="mt-4">
          <button
            onMouseOver={(e) => shoot("I am on mouse over", e)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            Mouseover Me
          </button>
        </div>
          </li>
          <li>📜 <code>onSubmit</code> – for forms</li>
          <li>⌨️ <code>onKeyDown</code>, <code>onKeyUp</code>, <code>onKeyPress</code>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Events;
