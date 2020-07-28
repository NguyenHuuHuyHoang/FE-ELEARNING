import React, { useState } from "react";

export default function useToggle(initialValue) {
  const [toggle, setToggle] = useState(initialValue);

  const handleSetToggle = () => {
    setToggle(!toggle);
  };
  return { toggle, handleSetToggle };
}
