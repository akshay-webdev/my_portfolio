import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';


function App() {
  const [getcolor, setColor] = useState(false);

  const changeBackground = () => {
    setColor((prev) => !prev);
  };
  
  const backgroundColor = {
    backgroundColor: getcolor ? '#fff' : '#0d2438',
  };
  const changeButtonImage=getcolor? 'bulb-default.svg':'bulb.svg';

  return (
    <div className="App" style={backgroundColor}>
      <Navbar changeBackground={changeBackground} changeButtonImage={changeButtonImage}/>
    </div>
  );
}

export default App;
