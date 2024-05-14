import React, { useEffect, useRef, useState } from "react";

const CompA = () => {
  const [data, setdata] = useState("");
  const myRef = useRef();
  const mineref = useRef();

  useEffect(() => {
    myRef.current.focus();
  }, []);

  const handleSubmit = () => {
    console.log(myRef.current.value);
    mineref.current=myRef.current.value
    setdata(data => data + 1);
  };
  return (
    <div>
      <h1>USING USEREF HOOK</h1>
      <label >NAME: </label>
      <input type="text"  placeholder="Enter your name" ref={myRef} />
      <button onClick={handleSubmit}>submit</button>
      <br />
      <div>{mineref.current}</div>
    </div>
  );
};

export default CompA;
