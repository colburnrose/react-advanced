import React, { useState } from "react";
// useState - function
// component name must be uppercase
// must be in the function/component body
// cannot call conditionally
const UseStateBasics = () => {
  // console.log(useState("hello, world"));
  // const value = useState(1)[0];
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const [text, setText] = useState("random title");

  const handleClick = () => {
    if (text === "random title") {
      setText("hello, colburn");
    } else {
      setText("random title");
    }
  };
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
