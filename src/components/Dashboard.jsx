import React from "react";
import LinkWithUnderline from "./LinkWithUnderline";

const Dashboard = () => {
  return (
    <nav className="flex space-x-8 p-4 bg-transparent text-black text-lg ml-8 w-screen">
      <LinkWithUnderline href="/">Home</LinkWithUnderline>
      <LinkWithUnderline href="/about">About</LinkWithUnderline>
      <LinkWithUnderline href="/projects">Projects</LinkWithUnderline>
      <LinkWithUnderline href="/contact">Contact</LinkWithUnderline>
    </nav>
  );
};

export default Dashboard;
