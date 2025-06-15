import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from './pages/Contact';
import Projects from './pages/Projects';

export default function App() {
  return (
  <div
  style={{
  backgroundImage: "url('/images/1.webp')",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center"
}}
>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/#about" element={<About />} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/#projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
