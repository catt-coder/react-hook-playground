/**
 * 任务描述：创建一个计时器组件，显示计时器的秒数。
 * 使用 useRef 来保存定时器的 ID，并在组件卸载时清除定时器，避免内存泄漏
 */
import { useEffect, useRef, useState } from "react";

function IntervalTimer() {
  const [timer, setTimer] = useState(0);
  const intervalIdRef = useRef<number | null>(null);

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  return (
    <>
      <p>Timer: {timer}</p>
    </>
  );
}

export default IntervalTimer;
