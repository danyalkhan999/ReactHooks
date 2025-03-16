import { useEffect } from "react";

const useEffectDetailed = () => {
  /*
    first -> side-efect function
    second -> clean-up function
    third -> comma seperated dependency list
    */
  useEffect(
    () => {
      //first

      return () => {
        //second
      };
    },
    [
      /* third */
    ]
  );

  return <div>useEffectDetailed</div>;
};

export default useEffectDetailed;
