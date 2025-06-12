import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Contact from './pages/Contact';
import Projects from './pages/Projects';

export default function App() {
  return (
    <div className='max-w-screen'>
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
