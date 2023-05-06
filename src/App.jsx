import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Features from './components/Features'
import About from './components/About'

function App() {
  return (
    <div className='font-open-sans relative'>
      <Navbar />
      <Header />
      <Features />
      <About />
    </div>
  )
}

export default App
