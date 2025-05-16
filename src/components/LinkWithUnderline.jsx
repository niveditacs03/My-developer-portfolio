import React from "react";

const LinkWithUnderline = ({ href, children }) => {
  return (
    <a
      href={href}
      className="relative text-black pb-1 inline-block group"
    >
      {children}
      <span
        className="
          absolute left-0 bottom-0 h-[2px] w-0 bg-black 
          transition-[width] duration-300 ease-in-out
          group-hover:w-full
        "
      ></span>
    </a>
  );
};

export default LinkWithUnderline;
