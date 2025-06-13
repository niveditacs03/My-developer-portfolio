import React, { useState, useEffect } from "react";

const Typewriter = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval); 
  }, [text, speed]);

  return (
    <span className="whitespace-pre text-6xl">
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;
