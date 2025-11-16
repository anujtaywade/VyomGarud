import { useState } from 'react'
import React from 'react';
import './App.css'
import About from './components/about';
import Hero from './components/hero';
import Capabilities from './components/Capabilities';
import Highlight from './components/Highlights';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div >
      <Hero/>
      <About/>
      <Capabilities/>
      <Highlight/>
      <Contact/>
      <Footer/>
     </div>
    </>
  )
}

export default App
