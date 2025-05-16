import React from "react";
import FractalTree from "../components/FractalTree"
import CursorTrail from "../components/CursorTrail"
import Dashboard from "../components/Dashboard"
import Heading from "../components/TypeWriter";
const Home = () => {
  return (
 <div className="paper-bg text-black max-w-screen max-h-screen overflow-hidden">

      <CursorTrail/>
      <Dashboard/>
      <FractalTree />
      <Heading/>
    </div>

)};
export default Home;
