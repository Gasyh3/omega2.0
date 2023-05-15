import React from 'react'
import Header from '../../layout/Header/Header'
import Hero from '../../layout/Hero/Hero'
import About from '../../layout/About/About'
import Contact from '../../layout/Contact/Contact'
import Prestations from '../../layout/Prestations/Prestations'
import Portfolio from '../../layout/Portfolio/Portfolio'
import Blog from '../../layout/Blog/Blog'
import Footer from '../../layout/Footer/Footer'


function Home() {
  return (
    <div>
        <Header />
        <Hero />
        <About />
        <Contact />
        <Prestations />
        <Portfolio />
        <Blog />
        <Footer />
    </div>
  )
}

export default Home