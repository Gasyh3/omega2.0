import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <div className="footer">
        <p className="footer__text goudy">Maquilleuse et coiffeuse professionnelle</p>
        <p className="footer__text  goudy">Styliste ongulaire et évènementiel</p>
        <div className="footer__right">
          <p className="footer__text goudy">Copyright Omega 2.0 - 2023</p>
          <p className="footer__text goudy">Tous droits réservés</p>
          <a href="/" className="footer__text goudy">Mentions légales</a>
        </div>
    </div>
  )
}

export default Footer