import React from "react";
import Wave from "react-wavify";

const ThreeWaves= () => {
  return (
    <div style={{ position: "relative", height: "200px", overflow: "hidden" }} className="-mt-50 ">

      <Wave
        fill="rgba(107, 121, 131, 0.88)" // light
        options={{
          height:25,
          amplitude: 30,
          speed: 0.3,
          points: 3,
        }}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          opacity: 0.5,
          zIndex:3
        }}
      />
      <Wave
        fill="rgb(112, 124, 129)" // medium 
        options={{
          height: 25,
          amplitude: 25,
          speed: 0.3,
          points: 3,
        }}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          opacity: 0.6,
          zIndex:2
        }}
      />

      <Wave
        fill="rgb(48, 55, 59)" // darker
        options={{
          height: 25,
          amplitude: 25,
          speed: 0.3,
          points: 4,
        }}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          opacity: 0.8,
          zIndex:1
        }}
      />
    </div>
  );
};

export default  ThreeWaves;