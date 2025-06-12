import React from "react";
import AboutCard from "../components/AboutCard";
import SpinningDonut from "../components/Donut";

const About=()=>{
    return(
        <div  id="about" className="ml-13 -mt-30">
         <h1 className="text-6xl">About me</h1>
         <div className="flex flex-column h-100">
            <AboutCard/>
            <SpinningDonut/>
         </div>
        </div>
    )
}
export default About
