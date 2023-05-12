import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Features from './components/Features'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { AiOutlineArrowUp } from 'react-icons/ai'



function App() {
  const [scrollPx, setScrollPx] = useState(0)

  window.addEventListener('scroll', function () {
    setScrollPx(window.pageYOffset);
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='font-open-sans relative scroll-smooth'>
      <div onClick={scrollToTop} className={`z-50 cursor-pointer right-10 bottom-10 text-white text-4xl bg-cyan-800 p-4 rounded-full shadow-xl hover:bg-cyan-900 ${scrollPx > 300 ? 'fixed' : 'hidden'}`}>
        <AiOutlineArrowUp />
      </div>
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
