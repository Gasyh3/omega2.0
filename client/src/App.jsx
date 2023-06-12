import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import './main.scss'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Contact from './layout/Contact/Contact';
import Hero from './layout/Hero/Hero';
import About from './layout/About/About';
import Prestations from './layout/Prestations/Prestations';
import Portfolio from './layout/Portfolio/Portfolio';
import Blog from './layout/Blog/Blog';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/main" element={<Home />} />
          <Route path="/dvsdfqscoc2qxq7_login_eevzvd23Gvee2" element={<Login />} />
          <Route path="/main#about" element={<About />} />
          <Route path="/main#hero" element={<Hero />} />
          <Route path="/main#contact" element={<Contact />} />
          <Route path="/main#prestation" element={<Prestations />} />
          <Route path="/main#portfolio" element={<Portfolio />} />
          <Route path="/main#blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
