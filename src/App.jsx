import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Features from './components/Features'

function App() {
  return (
    <div className='font-open-sans relative'>
      <Navbar />
      <Header />
      <Features />
    </div>
  )
}

export default App
