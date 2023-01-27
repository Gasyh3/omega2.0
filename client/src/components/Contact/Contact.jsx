import React from 'react'
import './Contact.scss'
import FBLogo from "../Logo/Facebook"
import TikTokLogo from "../Logo/TikTok"
import InstaLogo from "../Logo/Instagram"
import WhatLogo from "../Logo/Whatsapp"
import Youtube from '../Logo/Youtube'

function Contact() {
  return (
    <div className="contact" id="contact">
        <section className="contact__reseaux">  
        <FBLogo />    
        <TikTokLogo />
        <InstaLogo />
        <WhatLogo />
        <Youtube />
        </section>
        <section className="contact__form">
          Form
        </section>
    </div>
  )
}

export default Contact