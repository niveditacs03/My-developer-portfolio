import React, { useRef, useState, useEffect } from "react";
import AboutCard from "../components/AboutCard";
import Typewriter from "../components/TypeWriter";
import { motion } from "framer-motion";
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
      <motion.section
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >

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
      </motion.section>
    </div>
  );
};

export default About;
