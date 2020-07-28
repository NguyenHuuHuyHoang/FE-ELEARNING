import React, { useState, useEffect, useMemo, useCallback } from "react";
import Hello from "./Hello";
import useCounter from "./useCounter";
import useToggle from "./useToggle";
import useWindowDimensions from "./useWindowDimensions";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [count1, increase, decrease] = useCounter(0);
  const { toggle: toggle1, handleSetToggle: handleSetToggle1 } = useToggle(
    false
  );
  const { width, height } = useWindowDimensions();

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

  const [message, setMessage] = useState("");

  //   const handleShowMessage = () => {
  //     console.log("message");
  //   };

  const handleShowMessage = useCallback(() => {
    console.log("message");
  }, [message]);
  console.log(width, height);
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
      <br />
      <br />
      <h1>useCounter</h1>
      <button className="btn btn-primary" onClick={increase}>
        Tăng
      </button>
      <span className="m-2">{count1}</span>
      <button className="btn btn-danger" onClick={decrease}>
        Giảm
      </button>
      <button className="btn btn-secondary m-5" onClick={handleSetToggle1}>
        Toggle 1
      </button>
      {toggle1 ? <Hello showMessage={handleShowMessage} /> : null}
      <br />
      <br />
      {width > 600 ? <p>OK</p> : null}
    </div>
  );
}
