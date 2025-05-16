import React,{use, useState} from "react";

const ContactCard = () => {
    
   const [check,setCheck]=useState(false);
    function handleCheck()
    {
        setCheck(!check);
    }
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-xl shadow w-80 border-1">
      <h2 className="text-lg font-medium mb-4">Contact Me!</h2>
      <input
        type="text"
        placeholder="Your name"
        className="w-full mb-3 px-3 py-2 border rounded"
      />
      <input
        type="email"
        placeholder="you@example.com"
        className="w-full px-3 py-2 border rounded mb-3"
      />
      <input type="text" 
      placeholder="Write something.."
      className="w-full h-auto px-3 py-2 border rounded mb-3 max-w-70" />
      
      <button type="submit" className="cursor-pointer shadow-md w-20 h-10" onClick={handleCheck}>Submit</button>
      <br />
      <br />
      <span className="text-green-500 text-xl">{check && "✔ Message recieved"}</span>
      <br />
      <span className="text-gray-500 text-sm">{check && "This feature is coming soon, till then please use my mail."}</span>
      <br />
     { check&&<a href="mailto:niveditacherpil@gmail.com">Use this!</a>}
    </div>
  );
};

export default ContactCard;
