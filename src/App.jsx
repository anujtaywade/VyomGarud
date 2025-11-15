import { useState } from 'react'
import React from 'react';
import './App.css'
import About from './components/About';
import Hero from './components/Hero';
import Capabilities from './components/Capabilities';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div >
      <Hero/>
      <About/>
      <Capabilities/>
     </div>
    </>
  )
}

export default App
