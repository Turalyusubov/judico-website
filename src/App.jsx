import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Features from './components/Features'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Contact from './components/Contact'


function App() {
  return (
    <div className='font-open-sans relative'>
      <Navbar />
      <Header />
      <Features />
      <About />
      <Testimonials />
      <Team />
      <Contact />
    </div>
  )
}

export default App
