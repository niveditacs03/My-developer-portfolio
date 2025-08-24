import React from "react";

const AboutCard = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow w-[1000px] border-1 mt-5 ml-50">
      <p className="text-xl tracking-wide p-5">
        I am a Computer Science student at IIIT-Kottayam, who enjoys the process of solving problems through code.
      </p>

      <h2 className="ml-5 text-2xl font-semibold mb-2">Skills & Frameworks</h2>

      <div className="flex justify-between px-40 text-xl">
        <ul className="list-disc space-y-1">
          <li>JavaScript</li>
          <li>Solidity</li>
          <li>Python</li>
          <li>React</li>
          <li>SQL</li>
          <li>PostgreSQL</li>
        </ul>

        <ul className="list-disc space-y-1">
          <li>Node.js</li>
          <li>Express</li>
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>Python</li>
          <li>C/C++</li>
        </ul>
      </div>
       <h2 className="ml-5 text-2xl font-semibold mb-2 mt-3">Experience</h2>
       <ul className="list-disc space-y-1 text-xl ml-15">
          <li>Research intern @ TCS AI <i className="text-lg">(July 2025-Present)</i></li>
          <li>Software-AI intern @ Techvantage.AI <i className="text-lg">(May 2025 - Current)</i></li>
          <li>Summer research intern @ NIT-Trichy <i className="text-lg">(June 2024-August 2024</i>)</li>
        </ul>

    </div>
  );
};

export default AboutCard;
