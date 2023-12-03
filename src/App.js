import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Notfound from "./components/Notfound";


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
          <Navbar
            changeBackground={changeBackground}
            changeButtonImage={changeButtonImage}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Project" element={<Project />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<Notfound/>}/>
          </Routes>
      <Footer />
          
       
       
        </div>
      </Router>
    </div>
  );
}

export default App;
