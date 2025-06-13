import React, { useRef, useState, useEffect } from "react";
import AboutCard from "../components/AboutCard";
import Typewriter from "../components/TypeWriter";

const About = () => {
  const headingRef = useRef(null);
  const [shouldType, setShouldType] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShouldType(true);
      },
      { threshold: 0.8 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" className="ml-13 -mt-30">
      <h1 ref={headingRef} className="text-6xl">
        {shouldType ? (
          <Typewriter text="Abbout me" speed={300} />
        ) : (
          <span className="invisible">Abbout me</span>
        )}
      </h1>
      <div className="flex flex-column h-auto mt-4">
        <AboutCard />
      </div>
    </div>
  );
};

export default About;
