import { useEffect, useState } from "react";

const UseEffectDetailed = () => {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
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

  //   useEffect(() => {
  //     alert("I will run on only first render");
  //   }, []);

  // variation 3 : runs on dependency

  //   useEffect(() => {
  //     alert("I wil render on count change");
  //   }, [count]);

  // variation 3: multiple dependency
  //   useEffect(() => {
  //     alert("I will run everytime when count/total is updated");
  //   }, [count, total]);

  // Variation 4 : let's add up a clean up function

  useEffect(() => {
    alert("Count is updated");

    return () => {
      alert("count is unmounted from UI");
    };
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleClickTotal = () => {
    setTotal(total + 2);
  };

  return (
    <div>
      <button onClick={handleClick}>Click me</button>
      <br />
      Count is: {count}
      <br />
      <button onClick={handleClickTotal}>Update Total</button>
      <br />
      Total is: {total}
    </div>
  );
};

export default UseEffectDetailed;
