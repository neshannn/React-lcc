import React, { useState } from "react";

const UseState1 = () => {
  const [toggle, setToggle] = useState(true);
  function handleToggle() {
    setToggle(!toggle);
  }


    return (
      <div>
        {toggle ? "ON" : "OFF"}
        <br />
        <button type = "button" onClick={handleToggle}>Toggle</button>
      </div>
    );

};

export default UseState1;
