import React from 'react'
import { useNavigate } from 'react-router-dom'

const ReactEvents = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6 md:p-10 bg-white text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 border-b-2 border-green-400 pb-2">
        Introduction to <strong>React Events</strong>
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          📌 Meaning of <strong>Events</strong>
        </h2>
        <p>
          React events are like HTML DOM events. It has the same events like click, onChange, mouseover etc...
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          How to write react events
        </h2>
        <p className='mb-2'>At first lets see how react events works : </p>
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-600 mb-1">Step 1: In the App.jsx write the following code</h3>
          <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
            <code className='whitespace-pre-wrap break-words block'>
{`import React from 'react'

const App = () => {

  const shoot = ()=>{
    alert("Hello this is react event");
  }

  return (
    <div>
      <button onClick={shoot}>Take the shot</button> // this is the react event if it was a html event it should be like shoot() so this is the difference
    </div>
  )
}

export default App
`}
            </code>
          </div>
        </div>
        <p className='mb-2'>So in the previous code snippit. It was the react event which on opening in browser will display "Hello this is react event"</p>

        <h3 className='text-lg font-medium text-gray-800 mb-2'>Now lets see how to pass argument to a react event</h3>
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-600 mb-1">Step 2: In the App.jsx, write the following code</h3>
          <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
            <code className='whitespace-pre-wrap break-words block'>
{`import React from 'react'

const App = () => {

  const shoot = (e)=>{
    alert(e);
  }

  return (
    <div>
      <button onClick={()=>shoot("Hello")}>Take the shot</button>// so in a callback we can pass arguments to the function
    </div>
  )
}

export default App
`}
            </code>
          </div>
        </div>

        <p className='mb-2'>The output will be similar to the previous.</p>

        <h2 className="text-lg font-medium text-gray-600 mb-1">Now lets see the react event object</h2>

        <div className='mb-6'>
          <h3 className="text-lg font-medium text-gray-600 mb-1">Step 1: In the App.jsx file write the below code</h3>

          <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
            <code className='whitespace-pre-wrap break-words'>
{`import React from 'react'

const App = () => {

  const shoot = (a, b)=>{
    alert(b.type); // so it will display the event that is click
  }

  return (
    <div>
      <button onClick={(event)=>shoot("Hello", event)}>Take the shot</button>
    </div>
  )
}

export default App
`}
            </code>
          </div>

          <p className='mb-2'>Here we can pass the argument and the event so in the function the event can be accesible</p>
        </div>

        <div className='mb-6'>
          <h3 className="text-lg font-medium text-gray-600 mb-1">Output of the previous code: </h3>

          <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
            <code className='whitespace-pre-wrap break-words block'>
              click
            </code>
          </div>

          <p className='mb-2'>This is all about the react events and the difference between react events and html events.</p>
        </div>


        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-600 mb-1">Commonly used React Events</h3>
          <p className='mb-2'>Here are some of the most commonly used events in React:</p>
          <ul className='list-disc ml-6 text-sm text-gray-800'>
            <li><strong>onClick:</strong> Triggers when an element is clicked.</li>
            <li><strong>onChange:</strong> Used for input elements to detect value change.</li>
            <li><strong>onSubmit:</strong> Fires when a form is submitted.</li>
            <li><strong>onMouseEnter / onMouseLeave:</strong> For hover-based interactions.</li>
            <li><strong>onKeyDown / onKeyUp:</strong> Used to detect keyboard interactions.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-600 mb-1">Difference between React event and HTML event</h3>
          <ul className='list-disc ml-6 text-sm text-gray-800'>
            <li>React uses camelCase (e.g., <code>onClick</code>) whereas HTML uses lowercase (e.g., <code>onclick</code>).</li>
            <li>React passes a synthetic event object which is cross-browser compatible.</li>
            <li>React events must be passed a function reference or an arrow function. HTML events can directly call functions using <code>onclick="myFunc()"</code>.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-600 mb-1">Inline vs Separate Event Handlers</h3>
          <p className="mb-2">React supports both inline and external functions as handlers:</p>
          <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300">
            <code className="whitespace-pre-wrap break-words block">
{`// Inline
<button onClick={() => alert('Hello')}>Click</button>

// Separate handler
const handleClick = () => {
  alert('Clicked');
}

<button onClick={handleClick}>Click</button>
`}
            </code>
          </div>
        </div>

        <h3 className='mb-2 text-lg text-gray-800'>Now we will learn the react conditionals in easiest way.</h3>
        <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
            
          <button
            className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
            onClick={() => navigate('/ananta-dashboard/reactProps')}
          >
            ← Back
          </button>

          <button
            className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
            onClick={() => navigate('/ananta-dashboard/reactConditionals')}
          >
            React Conditionals →
          </button>
        </div>

      </section>
    </div>
  )
}

export default ReactEvents
