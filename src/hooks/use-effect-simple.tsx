/**
 * Hook: useEffect
 * Task: Create a timer, increments by 1 every second and clears the timer use useEffect.
 */
import { useEffect, useState } from "react";

function IntervalTimer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <p>Timer: {timer}</p>;
}

export default IntervalTimer;
