import React from "react";
import { useNavigate } from "react-router-dom";

const Introduction = () => {

  const navigate = useNavigate();

  return (
    <div className="p-6 md:p-10 bg-white text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-green-600 border-b-2 border-green-400 pb-2">
        Introduction to React.js
      </h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-2">
          📌 Basic Introduction
        </h2>
        <p className="mb-2">
          React is a <strong>JavaScript library</strong> for building user interfaces.
        </p>
        <p>
          It was first introduced in <strong>2011</strong> by a Facebook engineer and
          used in the newsfeed feature.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          ⚙️ How to Install React
        </h2>

        <div className="mb-6">
          <h3 className="text-lg font-medium text-gray-600 mb-1">Step 1: Create a React App using Vite</h3>
          <p className="mb-2">
            Use Vite to scaffold a new React application quickly.
          </p>
          <pre className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 overflow-x-auto mb-3">
            <code>npm create vite@latest</code>
          </pre>
          <p className="mb-2">
            You will be prompted for a project name and language choice (e.g., JavaScript or TypeScript).
            Choose accordingly.
          </p>
          <p>
            After setup, a basic React project will be generated in your selected folder.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-600 mb-1">Step 2: Run the Application</h3>
          <pre className="bg-gray-100 text-sm text-gray-800 px-4 py-2 rounded border border-gray-300 overflow-x-auto mb-3">
            <code>npm run dev</code>
          </pre>
          <p className="mb-2">
            This will start the development server and open the app on{" "}
            <code className="bg-gray-200 px-1 py-0.5 rounded">http://localhost:5173</code> if the port is free.
          </p>
          <p>
            You should now see a default counter app running in your browser — that's your React app!
          </p>
        </div>

        <div className="mt-4 flex flex-col md:flex-row items-center justify-between gap-4">

              {/* <p className="text-center md:text-left">Move on to <strong>React Props</strong> next.</p> */}

              <button
                className="rounded-lg cursor-pointer bg-amber-300 hover:bg-amber-500 hover:text-yellow-950 p-3 w-full md:w-auto"
                onClick={() => navigate('/ananta-dashboard/react/renderHtml')}
              >
                Render HTML →
              </button>
            </div>
      </section>
    </div>
  );
};

export default Introduction;
