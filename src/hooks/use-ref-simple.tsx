/**
 * 任务描述：创建一个输入框，并且在点击按钮时，聚焦到该输入框。
 * 使用 useRef 来获取输入框的引用并控制焦点
 */
import { useRef } from "react";

function FocusInput() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocusInput}>focus</button>
    </>
  );
}

export default FocusInput;
