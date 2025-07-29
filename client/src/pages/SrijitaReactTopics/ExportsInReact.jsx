import React from 'react';

const ExportsInReact = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white shadow-lg rounded-2xl text-gray-800">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">📦 React Exports: Default vs Named</h1>

      {/* What is an export */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🔹 What is an Export in JavaScript?</h2>
        <p>
          JavaScript modules can export values (like functions, objects, or variables) so that they can be reused in other files. There are two main types of exports:
        </p>
        <ul className="list-disc list-inside pl-4 space-y-1 mt-2">
          <li><strong>Default Export</strong> – Only one per file, imported without curly braces.</li>
          <li><strong>Named Export</strong> – Multiple allowed, imported using curly braces.</li>
        </ul>
      </section>

      {/* Default Export */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ Default Export</h2>
        <p>In React, the main <code>React</code> object is exported as a default export:</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 my-2">
          <pre>{`// From 'react' library
export default React;`}</pre>
        </div>
        <p>You can import it like this:</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 my-2">
          <pre>{`import React from 'react';`}</pre>
        </div>
      </section>

      {/* Named Export */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📎 Named Export</h2>
        <p>React also provides components like <code>Component</code>, <code>useState</code>, etc., using named exports:</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 my-2">
          <pre>{`// Inside React source
export const Component = React.Component;
export const useState = React.useState;`}</pre>
        </div>
        <p>You can import them like this:</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 my-2">
          <pre>{`import { Component, useState } from 'react';`}</pre>
        </div>
      </section>

      {/* Combined Import */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🔄 Importing Both Together</h2>
        <p>To import both default and named exports from React:</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 my-2">
          <pre>{`import React, { Component, useState } from 'react';`}</pre>
        </div>
      </section>

      {/* Summary */}
      <section>
        <h2 className="text-xl font-semibold mb-2">📌 Summary</h2>
        <ul className="list-disc list-inside pl-4 space-y-1">
          <li><code>React</code> is the default export → <code>import React from 'react'</code></li>
          <li><code>Component</code>, <code>useState</code>, etc. are named exports → <code>import {'{ Component }'}</code></li>
          <li>You can import both in one line using: <code>import React, {'{ useState }'} from 'react'</code></li>
        </ul>
      </section>
    </div>
  );
};

export default ExportsInReact;
