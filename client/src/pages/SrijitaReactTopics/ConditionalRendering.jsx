import React, { useState } from 'react';

const MadeGoal = () => <h2 className="text-green-700 font-bold text-xl">⚽ Goal!</h2>;
const MissedGoal = () => <h2 className="text-red-600 font-bold text-xl">❌ MISSED!</h2>;

const ConditionalRendering = () => {
  const [isGoal, setIsGoal] = useState(false);
  const [cars] = useState(["Ford", "BMW", "Audi"]);

  return (
    <div className="max-w-4xl mx-auto px-6 py-8 bg-white shadow-lg rounded-2xl text-gray-800">
      <h1 className="text-3xl font-bold mb-6 border-b pb-2">🔀 React Conditional Rendering</h1>

      {/* if Statement */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">📌 Using <code>if</code> Statement</h2>
        <p className="mb-2">Classic conditionals can be handled using <code>if</code> statements.</p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 mb-3">
          <pre>
{`function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal />;
  }
  return <MissedGoal />;
}`}
          </pre>
        </div>
      </section>

      {/* && Operator */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🔗 Using <code>&&</code> Operator</h2>
        <p className="mb-2">
          When condition is true, render something after <code>&&</code>.
        </p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 mb-3">
          <pre>
{`function Garage(props) {
  const cars = props.cars;
  return (
    <>
      <h1>Garage</h1>
      {cars.length > 0 &&
        <h2>You have {cars.length} cars in your garage.</h2>}
    </>
  );
}`}
          </pre>
        </div>
        {cars.length > 0 && (
          <p className="text-green-700 font-semibold mb-3">
            ✅ You have {cars.length} cars in your garage.
          </p>
        )}
      </section>

      {/* Ternary Operator */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">❓ Using Ternary Operator</h2>
        <p className="mb-2">Short syntax: <code>condition ? trueExpr : falseExpr</code></p>
        <div className="bg-gray-100 p-4 rounded-md font-mono text-sm text-gray-700 mb-3">
          <pre>
{`function Goal(props) {
  const isGoal = props.isGoal;
  return (
    <>
      { isGoal ? <MadeGoal /> : <MissedGoal /> }
    </>
  );
}`}
          </pre>
        </div>
      </section>

      {/* Live Toggle Example */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🎮 Live Conditional Rendering Demo</h2>
        <p className="mb-3">Click the button to toggle between <strong>Goal</strong> and <strong>Missed</strong>.</p>
        <div className="mb-3">
          {isGoal ? <MadeGoal /> : <MissedGoal />}
        </div>
        <button
          onClick={() => setIsGoal(!isGoal)}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
        >
          Toggle Goal
        </button>
        <p className="mt-2 text-sm text-gray-600">Current state: <strong>{isGoal ? "true" : "false"}</strong></p>
      </section>
    </div>
  );
};

export default ConditionalRendering;
