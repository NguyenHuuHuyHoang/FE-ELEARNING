import React, { useState, useEffect, useMemo , useCallback} from "react";
import Hello from "./Hello";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  const pow = useMemo(() => console.log(count * count), [count]);

  useEffect(() => {
    console.log("mounted", count);
  }, []);

  useEffect(() => {
    console.log("update", count);
  }, [count]);

  useEffect(() => {
    console.log("Togglechange", toggle);
  }, [toggle]);


  const [message, setMessage] = useState("")

//   const handleShowMessage = () => {
//     console.log("message");
//   };

const handleShowMessage = useCallback(()=>{
    console.log("message")
},[message])

  return (
    <div>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Tăng
      </button>
      <span className="m-2">{count}</span>
      <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
        Giảm
      </button>
      <br />
      <button
        className="btn btn-secondary m-5"
        onClick={() => setToggle(!toggle)}
      >
        Toggle
      </button>
      {toggle ? <Hello showMessage={handleShowMessage} /> : null}
    </div>
  );
}
