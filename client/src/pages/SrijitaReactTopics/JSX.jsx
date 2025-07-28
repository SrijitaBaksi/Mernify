import React from 'react';

const JSX = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white shadow-lg rounded-2xl text-gray-800">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">⚛️ JSX in React</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🔹 What is JSX?</h2>
        <p className="mb-2">
          <strong>JSX</strong> stands for <strong>JavaScript XML</strong>. It allows us to write HTML-like code directly inside JavaScript.
        </p>
        <p>JSX makes creating UI components easier and more readable in React.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 text-blue-600">🆚 JS vs JSX</h2>
        <p className="mb-4 text-gray-700">
          In JavaScript, you use <code className="bg-gray-100 px-1 rounded">createElement()</code> and <code className="bg-gray-100 px-1 rounded">appendChild()</code>. In JSX, you just write HTML-like syntax.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="bg-blue-50 border border-blue-200 p-5 rounded-lg shadow-sm">
            <p className="font-semibold text-green-700 mb-2">✅ With JSX</p>
            <pre className="bg-white p-3 rounded text-sm text-gray-800 overflow-x-auto"><code>{`const element = <h1>I love JSX!</h1>;`}</code></pre>
          </div>
          <div className="bg-red-50 border border-red-200 p-5 rounded-lg shadow-sm">
            <p className="font-semibold text-red-700 mb-2">❌ Without JSX</p>
            <pre className="bg-white p-3 rounded text-sm text-gray-800 overflow-x-auto"><code>{`const element = React.createElement('h1', {}, 'I do not use JSX!');`}</code></pre>
          </div>
        </div>
      </section>


      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧮 Expressions in JSX</h2>
        <p>You can insert JavaScript expressions inside <code>{'{ }'}</code> in JSX.</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700">
          <pre>{`const element = <h1>React is {5 + 5} times better!</h1>;`}</pre>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📦 Multi-line HTML</h2>
        <p>Wrap multiple elements in parentheses and a single parent tag:</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700">
          <pre>{`const element = (
  <div>
    <p>I am a paragraph.</p>
    <p>Me too!</p>
  </div>
);`}</pre>
        </div>

        <p className="mt-2">Or use <strong>fragments</strong> to avoid extra DOM elements:</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700">
          <pre>{`const element = (
  <>
    <p>I am a paragraph.</p>
    <p>Me too!</p>
  </>
);`}</pre>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ Properly Closing Tags</h2>
        <p>JSX follows XML rules, so all elements must be closed:</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700">
          <pre>{`<input type="text" />`}</pre>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🔤 class → className</h2>
        <p>In JSX, use <code>className</code> instead of <code>class</code> because <code>class</code> is a reserved word in JavaScript.</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700">
          <pre>{`<h1 className="my-title">Hello</h1>`}</pre>
        </div>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🧠 Conditional Rendering</h2>

        <p className="mb-1 font-medium">Option 1: Using <code>if</code> outside JSX</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 mb-4">
          <pre>{`let message;
if (x < 10) {
  message = "Hello";
} else {
  message = "Goodbye";
}

const element = <h1>{message}</h1>;`}</pre>
        </div>

        <p className="mb-1 font-medium">Option 2: Using ternary operator inside JSX</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700">
          <pre>{`const element = <h1>{x < 10 ? "Hello" : "Goodbye"}</h1>;`}</pre>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">🎯 Summary</h2>
        <ul className="list-disc list-inside space-y-1 pl-4">
          <li>JSX lets you write HTML inside JavaScript</li>
          <li>Expressions are allowed inside <code>{'{ }'}</code></li>
          <li>Use one parent element or fragments</li>
          <li>Always close tags properly</li>
          <li>Use <code>className</code> instead of <code>class</code></li>
          <li>Use conditionals with <code>if</code> or <code>ternary</code> syntax</li>
        </ul>
      </section>
    </div>
  );
};

export default JSX;
