import { useState, useMemo } from "react";

const UseMemo = () => {
  const [text, setText] = useState("");
  const [input, setInput] = useState(0);

  const expensiveFunction = (n) => {
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }
    return total * n;
  };

  const sum = useMemo(() => expensiveFunction(input), [input]);

  console.log("Component Re-render");
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a text"
        className="inputClass"
      />{" "}
      {text}
      <br />
      <input
        type="number"
        placeholder="enter a number"
        onChange={(e) => setInput(e.target.value)}
      />{" "}
      <br />
      <span>Total: {sum} </span>
    </div>
  );
};

export default UseMemo;
