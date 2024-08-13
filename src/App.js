import React from'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Destination from './components/Destination';
import Packages from './components/Packages';
import Blog from './components/Blog';
import Contact from './components/Contact';

import './App.css';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Destination />
      <Packages />
      <Blog />
      <Contact />
      
    </div>
  );
}

export default App;
