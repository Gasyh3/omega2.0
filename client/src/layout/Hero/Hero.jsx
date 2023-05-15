import React from 'react'
import './Hero.scss'
import MainLogo from '../../assets/img/LOGO-FINAL.png'
import ArrowDown from "../../components/ArrowDown/ArrowDown"

function Hero() {
  return (
    <div className="hero" id="hero">
        <div className="hero__logo">
          <img className='hero__img' src={MainLogo} alt="Logo du Hero" />
          <h1 className="hero__title centaur">OMEGA 2.0</h1>
        </div>
        <ArrowDown />
    </div>
  )
}

export default Hero