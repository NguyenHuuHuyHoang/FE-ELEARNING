import React, { useState, useEffect, memo } from "react";

 function Hello() {
    useEffect(() => {
        console.log("Change");
    })
  useEffect(() => {
    console.log("Component mounted");

    //Callback này chỉ được chạy khi compoent bi hủy
    // Tương đương với componentWillUnmount

    return () => {
      console.log("Component unmount");
    };
  }, []);

  return <div>Hello</div>;
}

export default memo(Hello)