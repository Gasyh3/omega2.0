import React from 'react'
import './About.scss'
import ProfilePicture from '../../assets/img/picture-profile.png'

function About() {
  return (
    <div className="about" id="about">
       <section className="about__first">
        <article className="about__article">
          <h2 className="about__title goudy">Qui suis-je ?</h2>
          <p className="about__text goudy">
             Coiffeuse et esthéticienne diplômée ainsi que maquilleuse certifiée et major de promo trois années consécutives, j'exerce avec passion et dévouement mon métier artistique. Faisant preuve de patience, de douceur, de bienveillance et d'attention, j'aime, le temps des préparatifs, devenir votre confidente afin de vous proposer une prestation idoine et combler le moindre de vos désirs.
          </p>
          </article>
          <img src={ProfilePicture} alt="picture profile" className="about__img" />
        </section> 
    </div>
  )
}

export default About