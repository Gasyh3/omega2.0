import React from 'react'
import './Header.scss'
import Logo from '../../assets/img/logo-png.png'
import { useState } from 'react'
import { Link } from 'react-router-dom';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
  <nav className={`nav ${isMenuOpen ? "show" : "hide"}`}>
    <a href="/" className="nav__logo">
      <img className="nav__img" src={Logo} alt="Logo du site" />
    </a>
    <ul className='nav__links'>

      <li className="nav__item">
      <Link onClick={closeMenu} to="/main" className="nav__link lato">Ω</Link>
      </li>
      <li className="nav__item">
      <Link onClick={closeMenu} to="/main#about" className="nav__link lato">À PROPOS</Link>
      </li>
      <li className="nav__item">
      <Link onClick={closeMenu} to="/main#contact" className="nav__link lato">CONTACT</Link>
      </li>
      <li className="nav__item">
      <Link onClick={closeMenu} to="/main#prestation" className="nav__link lato">PRESTATIONS</Link>
      </li>
      <li className="nav__item">
      <Link onClick={closeMenu} to="/main#portfolio" className="nav__link lato">PORTFOLIO</Link>
      </li>
      <li className="nav__item">
      <Link onClick={closeMenu} to="/main#blog" className="nav__link lato">BLOG</Link>
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
