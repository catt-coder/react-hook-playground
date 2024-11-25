import { useEffect, useState } from "react";

export function useKeyPress(startValue: string) {
  const [userText, setUserText] = useState(startValue);

  function handleUserKeyPress(event: KeyboardEvent) {
    const { key, code } = event;
    if (code === "Space" || (code >= "KeyA" && code <= "KeyZ")) {
      setUserText(`${userText}${key}`);
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  });

  return userText;
}
