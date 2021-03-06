import React, { useState, useEffect } from "react";

export default function useWindowDimensions() {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  };

  const [dimensions, setDimensions] = useState(getWindowDimensions);

  useEffect(() => {
    const handleResize = () => {
      const { width, height } = getWindowDimensions();
      setDimensions({ width, height });
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { ...dimensions };
}
