import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Features from './components/Features'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'


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
      <Footer />
    </div>
  )
}

export default App
