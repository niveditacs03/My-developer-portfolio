import Typewriter from "../components/TypeWriter";
import React, { useRef, useState, useEffect } from "react";
import Carousel from "../components/Carousel";
import {motion} from 'framer-motion'

const Projects = () => {
  const headingRef = useRef(null);
  const [shouldType, setShouldType] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setShouldType(true);
      },
      { threshold: 1 }
    );

    if (headingRef.current) observer.observe(headingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="projects" className="ml-13 mt-50 ">
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h1 ref={headingRef} className="text-6xl">
          {shouldType ? (
            <Typewriter text="Prrojects" speed={300} />
          ) : (
            <span className="invisible">Abbout me</span>
          )}
        </h1>
      </motion.section>
      <Carousel />
    </div>
  );
};
export default Projects;
