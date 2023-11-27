import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact"
function App() {
  const [getcolor, setColor] = useState(false);

  const changeBackground = () => {
    setColor((prev) => !prev);
  };

  const backgroundColor = {
    backgroundColor: getcolor ? "#fff" : "#0d2438",
  };
  const changeButtonImage = getcolor ? "bulb-default.svg" : "bulb.svg";

  return (
    <div style={backgroundColor}>
   <Router>
      <div className="App container">
      <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
        <Navbar
          changeBackground={changeBackground}
          changeButtonImage={changeButtonImage}
        />
        <Home/>
        <About/>
        <Project/>
        <Contact/>
        
        
       
      </div>
    </Router>
    </div>
 
  );
}

export default App;
