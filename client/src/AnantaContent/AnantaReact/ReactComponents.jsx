import React from 'react';
import { useNavigate } from 'react-router-dom';

const ReactComponents = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full overflow-x-hidden bg-white text-gray-800">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 border-b-2 border-green-400 pb-2">
          Introduction to <strong>REACT COMPONENTS</strong>
        </h1>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Meaning of components
          </h2>
          <p className="mb-2">
            React components are the reusable blocks of code which are used to optimize development.
          </p>
          <p>
            React uses functional and class components. Class components are older, so in this tutorial we focus on functional components.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Let’s see the work of React components in action:
          </h2>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-600 mb-1">In the <code>App.jsx</code>, write the following code:</h3>
            <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
                <code className='whitespace-pre-wrap break-words block'>
                    {`import React from 'react'
import Greeting from './components/Greeting';

const App = () => {
  const name = "Ananta"; // this is the name which will be passed to the Greeting component later
  return (
    <div>
      <Greeting name={name}/> // this is the component being used here.
      {/* We can add as many components here */}
    </div>
  )
}

export default App;
`}
                </code>
            </div>

            <p className="mb-2">
              In the above code, we are passing the name "Ananta" as a prop to the <code>Greeting</code> component.
            </p>

            <h3 className="text-lg font-medium text-gray-600 mb-1">In the <code>Greeting.jsx</code>, write the following code:</h3>
            <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
                <code className='whitespace-pre-wrap break-words block'>
                    {`import React from 'react'

const Greeting = ({ name }) => {
  return (
    <div>Welcome {name}</div> // it will render: Welcome Ananta
  )
}

export default Greeting;
`}
                </code>
            </div>

            <p className="mb-2">
              In the <code>Greeting</code> component, the <code>name</code> prop from <code>App.jsx</code> is received and rendered dynamically.
            </p>

            <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
              <code className='whitespace-pre-wrap break-words block'>Welcome Ananta</code>
            </div>

            <p className="mb-2">
              This system allows us to reuse components. You can pass any name or value through props and the component will adapt.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-600 mb-1">How to create a component:</h3>
            <div className="space-y-2">
              <p className="bg-amber-100 px-4 py-2 rounded">Step 1: Create a folder named <code>components</code> in your <code>src</code> directory.</p>
              <p className="bg-amber-100 px-4 py-2 rounded">Step 2: Add a file named <code>Greeting.jsx</code> inside it.</p>
              <p className="bg-amber-100 px-4 py-2 rounded">Step 3: Write your component code in <code>Greeting.jsx</code>.</p>
              <p className="bg-amber-100 px-4 py-2 rounded">Step 4: Import <code>Greeting</code> in <code>App.jsx</code> to use it.</p>
              <p className="bg-red-300 px-4 py-2 rounded">⚠️ Note: All React component filenames must start with a <strong>capital letter</strong>.</p>
            </div>

            <p className="mt-4">
              You can create and import as many components as needed for modularity and reusability.
            </p>

            <p>
              React components help with maintainability, readability, and flexibility — you can pass properties (props) to make them dynamic.
            </p>
          </div>

          <div className="p-4 bg-amber-200 rounded">
            <p>Now the next concept is <strong>React Props</strong> and their usage.</p>

            <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <button
                className="rounded-lg cursor-pointer bg-amber-50 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
                onClick={() => navigate('/ananta-dashboard/renderHtml')}
              >
                ← Back
              </button>

              {/* <p className="text-center md:text-left">Move on to <strong>React Props</strong> next.</p> */}

              <button
                className="rounded-lg cursor-pointer bg-amber-50 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
                onClick={() => navigate('/ananta-dashboard/reactProps')}
              >
                React Props →
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReactComponents;
