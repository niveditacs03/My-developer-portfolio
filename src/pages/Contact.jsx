import React from "react";
import Dashboard from "../components/Dashboard";
import Tile from "../components/Tile";
import ContactCard from "../components/ContactCard";

const Contact=()=>{
    return(
        <div className="text-black min-h-screen w-screen h-screen overflow-hidden border-2">
           <Dashboard />
            <div className="relative w-full h-screen overflow-hidden">
            <Tile/>
            <ContactCard/>
           </div>
        </div>
    )
}
export default Contact