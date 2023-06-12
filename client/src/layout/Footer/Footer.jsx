import React from 'react'
import './Footer.scss'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className="footer">
        <p className="footer__text goudy">Maquilleuse et coiffeuse professionnelle</p>
        <p className="footer__text  goudy">Styliste ongulaire et évènementiel</p>
        <div className="footer__right">
          <p className="footer__text goudy">Copyright Omega 2.0 - 2023</p>
          <p className="footer__text goudy">Tous droits réservés</p>
          <a href="/" className="footer__text goudy">Mentions légales</a>
          <Link to="/dvsdfqscoc2qxq7_login_eevzvd23Gvee2" className="footer__text goudy">Connexion</Link>
        </div>
    </div>
  )
}

export default Footer