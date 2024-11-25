/**
 * Hook: useState
 * Task: Implement a button counter, the number increases by one when clicked button.
 */
import { useState } from "react";

function IncreaseCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase
      </button>
    </div>
  );
}

export default IncreaseCounter;
