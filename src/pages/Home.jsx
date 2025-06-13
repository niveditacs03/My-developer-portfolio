import React from "react";
import FractalTree from "../components/FractalTree"
import Dashboard from "../components/Dashboard"
import Heading from "../components/Heading";
import About from "./About";
import Projects from "./Projects";
import Footer from "../components/Footer";

const Home = () => {
  return (
 <div className="paper-bg text-black">
      <Dashboard/>
      <FractalTree />
      <Heading/>
      <About/>
      <Projects/>
      <Footer/>
    </div>

)};
export default Home;
