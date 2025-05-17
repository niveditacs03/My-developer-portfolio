import React from "react";
import FractalTree from "../components/FractalTree"
import CursorTrail from "../components/CursorTrail"
import Dashboard from "../components/Dashboard"
import Heading from "../components/TypeWriter";
import About from "./About";
import Projects from "./Projects";


const Home = () => {
  return (
 <div className="paper-bg text-black">
      <CursorTrail/>
      <Dashboard/>
      <FractalTree />
      <Heading/>
      <About/>
      <Projects/>
    </div>

)};
export default Home;
