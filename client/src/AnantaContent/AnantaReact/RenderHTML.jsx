import React from 'react'
import { useNavigate } from 'react-router-dom'

const RenderHTML = () => {
    const navigate = useNavigate();

  return (
    <div className="p-6 md:p-10 bg-white text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 border-b-2 border-green-400 pb-2">
        Introduction to <strong>RENDER HTML</strong>
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          📌 Meaning of <strong>Rendering</strong>
        </h2>
        <p className="mb-2">
          Rendering means displaying <strong>HTML</strong> content in the website.
        </p>
        <p>
          React uses <strong>JSX(Javascript XML)</strong> which looks like html but also allows <strong>Javascript</strong> functionality too.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          ⚙️ How to render html rendering in react
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-600 mb-1">Step 1: Create a React App using Vite</h3>
          <p className="mb-2">
            Use Vite to scaffold a new React application quickly.
          </p>
          <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
            <code className='whitespace-pre-wrap break-words block'>npm create vite@latest</code>
            <code className='whitespace-pre-wrap break-words block'>cd my-app</code>
            <code className='whitespace-pre-wrap break-words block'>npm run dev</code>
          </div>
        </div>

        <div className='mb-6'>
            <h3 className="text-lg font-medium text-gray-600 mb-1">A simple example of rendering html</h3>
            <p className='mb-2'>
                In the App.jsx file write the following code
            </p>

            <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
                <code className='whitespace-pre-wrap break-words'>
{`
import React from 'react'

const App = ()=>{
    return(
        <div>
            <h1>Hello this is from react</h1>
            <h1>Here i should be wrap in a div or "<></>" like this</h1>
        </div>
    )
}
export default App;
`}
                </code>
            </div>

            <p className='mb-2'>Remember inside the return only one div or '<></>' can be rendered not two div separately can be rendered so wrap the internal code with a div and inside that div we can create as many div as we want.</p>
        </div>

        <div className='mb-6'>
            <h3 className="text-lg font-medium text-gray-600 mb-1">Output of the above code in the browser</h3>
            <p className='mb-2'>
                copy the link (if similar) <span className='bg-gray-100 text-sm text-gray-800 rounded border border-gray-300 mb-3'> http://localhost:5173 </span>
                and paste it in any browser
            </p>

            <div className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
                <code className="whitespace-pre-wrap break-words block">
                    Hello this is from react 
                </code>
                <code className="whitespace-pre-wrap break-words block">
                    Here i should be wrap in a div or "<></>" like this
                </code>
            </div>


            <p className='mb-2'>You will see this output. This is render HTML logic like this is a pure demonstration of how the react will render html</p>
        </div>

        <div className='mb-6'>
            <h3 className="text-lg font-medium text-gray-600 mb-1">Rendering HTML from variables</h3>
            <p className='mb-2'>
                Here below is a demo code showing how HTML is rendered by using variables
            </p>

            <pre className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 mb-3">
                <code className="whitespace-pre-wrap break-words block">
{`
import React from 'react'

const App = ()=>{
    const title = "Welcome to React!"
    const description = "This is a paragraph"

    return(
        <div>
            <h1>{title}</h1>
            <h1>{description}</h1>
        </div>
    )
}

export default App;
`}
                </code>
            </pre>

            <p>This is how the react with render html via variables</p>
        </div>

        <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <button
            className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
            onClick={() => navigate("/ananta-dashboard/connectTailwind")}
          >
            ← Back
          </button>

          {/* <p className="text-center md:text-left">Move on to <strong>React Components</strong> next.</p> */}

          <button
            className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
            onClick={() => navigate('/ananta-dashboard/classComponents')}
          >
            React Class Components →
          </button>
        </div>
        
      </section>
    </div>
  )
}

export default RenderHTML