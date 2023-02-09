import React from 'react'
import './Contact.scss'
import FBLogo from "../Logo/Facebook"
import TikTokLogo from "../Logo/TikTok"
import InstaLogo from "../Logo/Instagram"
import WhatLogo from "../Logo/Whatsapp"
import Youtube from '../Logo/Youtube'
import FormContact from '../FormContact/FormContact'

function Contact() {
  return (
    <div className="contact" id="contact">
        <section className="contact__reseaux">
          <a href="https://www.whatsapp.com/?lang=fr" className="contact__link" target="_blank">
            <WhatLogo />
          </a> 
          <a href="https://www.instagram.com/?hl=fr" className="contact__link" target="_blank">
            <InstaLogo />
          </a> 
          <a href="https://www.youtube.com/" className="contact__link" target="_blank">
            <Youtube />
          </a> 
          <a href="https://fr-fr.facebook.com/" className="contact__link" target="_blank">
            <FBLogo /> 
          </a>  
          <a href="https://www.tiktok.com/fr/" className="contact__link" target="_blank">
            <TikTokLogo />
          </a> 
        
        </section>
        <section className="contact__form">
          <FormContact />
        </section>
    </div>
  )
}

export default Contact