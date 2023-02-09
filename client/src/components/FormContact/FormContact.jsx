import React from 'react'
import './FormContact.scss'
import SubmitButton from '../SubmitButton/SubmitButton'



function FormContact() {
  return (
    <>
        
        <div className="form">
            <form>
                <div className="form__name">
                    <p id="np-form" className="form__label goudy" >Parlez-moi de vous
                    </p>
                    <div className="form__flex">
                        <input type="text" className="form__input margin-right  goudy" placeholder="Prénom..." id="prenom" required />
                        <input type="text" className="form__input goudy" placeholder="Nom..." id="nom" required />
                    </div>
                </div>
                <div className="form__group">
                    <p id="email-form" htmlFor="email" className="form__label goudy">Partagez-moi votre adresse éléctronique</p>
                    <input type="email" className="form__input  goudy" placeholder="Email..." id="email" required />
                </div>
                <div className="form__group">
                    <div className="form__label goudy tooltip">Et votre numéro de téléphone &#9432;
                    <span className="tooltip-text top-first">
                        &#9432;
                        <br />
                        Le premier contact se fera grâce à lui.
                        <br />
                        Si vous êtes à l'étranger, précisez l'indicatif de votre pays.
                    </span>
                    </div>
                    <input type="tel" className="form__input goudy" placeholder="Téléphone..." id="phone" required />
                </div>
                <div className="form__group">
                    <p id='mess-form' htmlFor="message" className="form__label goudy tooltip">Parlez-moi de ce que vous désirez &#9432;
                    <span className="tooltip-text top-second">
                        &#9432;
                        < br />
                        Si vous m'écrivez pour une prestation événementielle, pensez à me préciser toutes les informations que vous jugerez nécessaires : 
                        date, lieu, thème, prestations choisies, couleur de la tenue, envies, préférences, etc.
                        <br />
                        Vous pouvez m'appeler directement sur mon numéro en cliquant sur le logo Whatsapp.
                    </span>
                    </p>
                    <textarea className="form__area goudy" placeholder="Votre message..." id="message" required></textarea>
                </div>
                <div className="center">
                    <SubmitButton />
                </div>
            </form>
        </div>
    </> 

  )
}

export default FormContact