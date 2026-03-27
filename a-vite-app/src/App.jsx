import * as React from "react";

export default function App() {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <main>
      <span>{count}</span>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </main>
  );
}
