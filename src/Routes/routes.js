import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from '../components/Home'
import About from '../components/About'
import Project from "../components/Project";
import Contact from "../components/Contact"
const routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default routes;
