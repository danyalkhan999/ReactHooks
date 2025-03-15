import { useState } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <button
        onClick={() =>
          count >= 0 ? setCount((prevCount) => prevCount + 1) : ""
        }
      >
        Inc. count
      </button>{" "}
      <br />
      <span>Count: {count}</span> <br />
      <button
        onClick={() =>
          count > 0 ? setCount((prevCount) => prevCount - 1) : ""
        }
      >
        Dec. count
      </button>
    </>
  );
};

export default UseState;
