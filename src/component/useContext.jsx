import { createContext, useContext } from "react";
import { useState } from "react";

const GlobalStateContext = createContext(null);

const UseContext = () => {
  const [isToggle, setToggle] = useState(false);

  return (
    <GlobalStateContext.Provider value={{ isToggle, setToggle }}>
      <div>
        <h1>Parent Component</h1>
        <ChildToggle />
        <ChildDisplay />
      </div>
    </GlobalStateContext.Provider>
  );
};

const ChildToggle = () => {
  const { setToggle } = useContext(GlobalStateContext);
  return (
    <div>
      <button onClick={() => setToggle((prev) => !prev)}>Toggle State</button>
    </div>
  );
};

const ChildDisplay = () => {
  const { isToggle } = useContext(GlobalStateContext);
  return (
    <div>
      <p>Current State: {isToggle ? "ON" : "OFF"}</p>
    </div>
  );
};

export default UseContext;
