import React, { useState } from "react";
import { useEffect } from "react";

const UseState = () => {
  const [count, setCount] = useState(0);
  function dec() {
    if (count > 0) {
      setCount(count - 1);
    }
    
  }
   useEffect(()=>{
          console.log("the compound mounted");
      },[count]);

  return (
    <div>
      {count}
      <br />
      <button type="button" onClick={() => setCount(count + 1)}>Increase</button>
      <button type="button" onClick={dec}>Decrease</button>
    </div>
  );

};

export default UseState;
