import React, { useState, useEffect } from "react";

const CleanUp: React.FC = () => {
  const [currentNum, setCurrentNum] = useState(0);
  const incrementNum = () => {
    setCurrentNum((preNumber) => preNumber + 1);
  };

  useEffect(() => {
    console.log("I'm CleeanUp");
    window.addEventListener("mousedown", incrementNum);
    return () => {
      window.removeEventListener("mousedown", incrementNum);
    };
  }, []);
  return <div>{currentNum}</div>;
};

export default CleanUp;
