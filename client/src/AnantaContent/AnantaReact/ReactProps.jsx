import React from 'react'
import { useNavigate } from 'react-router-dom'

const ReactProps = () => {
    const navigate = useNavigate();

  return (
    <div className="p-6 md:p-10 bg-white text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 border-b-2 border-green-400 pb-2">
        Introduction to <strong>React Props</strong>
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          📌 Meaning of <strong>Props</strong>
        </h2>
        <p className="mb-2">
          Props means properties.
        </p>
        <p>
          React props are used to transfer information from one file to another.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          ⚙️ How to transfer props from one file to another.
        </h2>
        <p className='mb-2'>There are two ways to do that. At first lets see the first way to transfer the props from one file to another.</p>
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-600 mb-1">Step 1: In the App.jsx, write the following code</h3>
          <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
            <code className='whitespace-pre-wrap break-words block'>
                {`import React from 'react'
import Greeting from './components/Greeting';

const App = () => {
  const name = "Ananta";
  return (
    <div>
      <Greeting name={name}/>
    </div>
  )
}

export default App
                `}
            </code>
          </div>
        </div>
        <p className='mb-2'>So in the previous code snippit. We are sending the name="Ananta" as props to Greeting component.</p>
        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-600 mb-1">Step 2: In the Greeting.jsx, write the following code</h3>
          <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
            <code className='whitespace-pre-wrap break-words block'>
                {`import React from 'react'

const Greeting = ({name}) => { // here we are destructuring the name as "name"
  return (
    <div>Welcome {name}</div>
  )
}

export default Greeting
                `}
            </code>
          </div>
        </div>

        <p className='mb-2'>This is one of the way of destructuring a props. The other way will discuss later in this module. Now if you see in the web browser, you will see the output as : </p>
        
        <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
            <code className='whitespace-pre-wrap block break-words'>Welcome Ananta</code>
        </div>

        <p className='mb-2'>This Ananta is came from the props in App.jsx</p>

        <h2 className="text-lg font-medium text-gray-600 mb-1">The second approach of passing props are : </h2>

        <div className='mb-6'>
            <h3 className="text-lg font-medium text-gray-600 mb-1">Step 1: Create the App.jsx file and write the below code</h3>

            <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
                <code className='whitespace-pre-wrap break-words'>
{`
import React from 'react'
import Greeting from './components/Greeting';

const App = () => {
  const name = "Ananta";
  return (
    <div>
      <Greeting name={name}/>
    </div>
  )
}

export default App
`}
                </code>
            </div>

            <p className='mb-2'>In this App.jsx code, it is exactly same like previous method.</p>
        </div>

        <div className='mb-6'>
            <h3 className="text-lg font-medium text-gray-600 mb-1">Step 2: In the Greetings.jsx write the following code.</h3>

            <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
                <code className='whitespace-pre-wrap break-words block'>
                    {`import React from 'react'

const Greeting = (props) => { // in this way props can be used
  return (
    <div>Welcome {props.name}</div>
  )
}

export default Greeting 
                    `}
                </code>
            </div>


            <p className='mb-2'>This is the another way of doing this. The output will be similar</p>
        </div>

        

        <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
              <button
                className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
                onClick={() => navigate("/ananta-dashboard/react/reactComponents")}
              >
                ← Back
              </button>


              <button
                className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
                onClick={() => navigate('/ananta-dashboard/react/reactEvents')}
              >
                React Events →
              </button>
            </div>
        
      </section>
    </div>
  )
}

export default ReactProps