import { useEffect, useState } from "react";

const UseEffectDetailed = () => {
  const [count, setCount] = useState(0);

  /*
    first -> side-efect function
    second -> clean-up function
    third -> comma seperated dependency list
    */

  // variation: 1 runs on every render

  //   useEffect(() => {
  //     alert("I will run on each render");
  //   });

  // Variation 2: Runs on only first render

  useEffect(() => {
    alert("I will run on only first render");
  }, []);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <br />
      Count is: {count}
    </div>
  );
};

export default UseEffectDetailed;
