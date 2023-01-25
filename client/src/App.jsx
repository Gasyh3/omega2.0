import { useState } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Prestations from './components/Prestations/Prestations'
import Portfolio from './components/Portfolio/Portfolio'
import Blog from './components/Blog/Blog'
import Footer from './components/Footer/Footer'
import './main.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
      <Hero />
      <About />
      <Contact />
      <Prestations />
      <Portfolio />
      <Blog />
      <Footer />
      </div>
    </div>
  )
}

export default App
