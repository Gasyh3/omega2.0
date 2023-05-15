import React from 'react'
import './Header.scss'
import Logo from '../../assets/img/logo-png.png'
import { useState } from 'react'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
  <nav className={`nav ${isMenuOpen ? "show" : "hide"}`}>
    <a href="/" className="nav__logo">
          <img className="nav__img" src={Logo} alt="Logo du site" />
    </a>
    <ul className='nav__links'>

      <li className="nav__item">
        <a href="/" className="nav__link lato">Ω</a>
      </li>
      <li className="nav__item">
        <a href="/about" className="nav__link lato">À PROPOS</a>
      </li>
      <li className="nav__item">
        <a href="/contact" className="nav__link lato">CONTACT</a>
      </li>
      <li className="nav__item">
        <a href="/contact" className="nav__link lato">PRESTATIONS</a>
      </li>
      <li className="nav__item">
        <a href="/contact" className="nav__link lato">PORTFOLIO</a>
      </li>
      <li className="nav__item">
        <a href="/contact" className="nav__link lato">BLOG</a>
      </li>
    </ul>
    <button className="nav__burger" onClick={toggleMenu}>
      <span className={`burger-bar ${isMenuOpen ? "white" : "black"}`}>

      </span>
    </button>
  </nav>
  )
}

export default Header