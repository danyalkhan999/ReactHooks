import { useEffect } from "react";
import { useRef } from "react";

const UseRef = () => {
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.focus();
  };
  const handleLog = () => {
    inputRef.current.value = "Danyal";
    console.log(inputRef.current.value);
  };

  useEffect(() => {
    console.log("Page rerender");
  });
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus</button>
      <button onClick={handleLog}>Log</button>
    </div>
  );
};

export default UseRef;
