import React, { useState, useEffect } from "react";

const Typewriter = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete,setComplete]=useState(false);
  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) {
        clearInterval(interval)
        setComplete(true)};
    }, speed);

    return () => clearInterval(interval); 
  }, [text, speed]);
  
  return (
    <span className="whitespace-pre text-6xl">
      {displayedText}
     {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
};

export default Typewriter;
