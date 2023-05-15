import React, { useState } from 'react'
import './About.scss'
import ProfilePicture from '../../assets/img/picture-profile.png'
import Modal from 'react-modal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRectangleXmark, faArrowRight } from '@fortawesome/free-solid-svg-icons'

const customStyles = {
  content: {
    height: '100%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    background: 'rgba(255, 255, 255, 1)',
    borderradius: '50px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function About() {

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <div className="about" id="about">
      <section className="about__first">
        <article className="about__article">
          <h2 className="about__title goudy">Qui suis-je ?</h2>
          <p className="about__text goudy">
             Coiffeuse et esthéticienne diplômée ainsi que maquilleuse certifiée et major de promo trois années consécutives, j'exerce avec passion et dévouement mon métier artistique.
             </p>
             <p className="about__text goudy">
             Faisant preuve de patience, de douceur, de bienveillance et d'attention, j'aime, le temps des préparatifs, devenir votre confidente afin de vous proposer une prestation idoine et combler le moindre de vos désirs.
          </p>
          <section className="about__second">
        <button className='about__btn goudy' onClick={openModal}>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
          {` `}
           En savoir plus ...</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="En savoir plus"
        >

          <button className="btn-close" onClick={closeModal}>
            <FontAwesomeIcon icon={faRectangleXmark} size="3x" />
          </button>
          <div className="about__inmodal">
        
          <article className="about__article left-none">
            <h2 className="about__title goudy">Pourquoi OMEGA 2.0 ?</h2>
            <p className="about__text goudy">
              Déjà, le 2.0 reflète une manière plus évoluée, plus aboutie de fonctionner.
              De par les recherches d'inspirations de la part des clients ainsi qu'une prise de contact moderne, je travaille beaucoup plus en coulisse pour proposer quelque chose de précis et de personnalisé. Plus contraint de se déplacer en studio, c'est le studio qui se rapprochera de vous.
            </p>
            <p className="about__text goudy">
              De l'Alpha à l'Omega, c'est un peu ma manière de dire que je vous accompagnerai de A à Z dans tout le processus d'un « Ô grand » projet. L'Omega, dernière lettre de l'alphabet grec, fait aussi référence à la dernière étape avant le mariage, un joli rouge à lèvre et hop, on est parti pour le grand Jour ! Omega est aussi un dérivé de « Eyn » qui signifie « Œil » en phénicien et qui me fait tout simplement penser à tous les yeux pétillants que je maquille. C'est également l'interlude d'un des albums de mon groupe préféré. Mais c'est également là 24ème étoile la plus brillante d'une constellation, et si je peux vous mettre des milliers d'étincelles dans les yeux et des papillons dans le ventre, alors j'aurais réussi mon pari 2.0 !
            </p>
          </article>
          <article className="about__article">
            <h2 className="about__title goudy">Ma méthode de travail</h2>
            <p className="about__text goudy">
              Je vous propose différentes options ainsi qu'un service à la carte pour que vous puissiez bénéficier des meilleurs tarifs pour une mise en beauté sur mesure et idéale. Vous profiterez d'essais selon la formule choisie ainsi que les frais de déplacement compris dans les prestations* 
              </p>
              <p className="about__text goudy">
              Qu'elle que soit la prestation choisie, je fais de ma priorité, la création d'une complicité précieuse afin de travailler ensemble dans les meilleures dispositions pour éviter le stress de l'organisation et de certains préparatifs. Votre implication dans chaque projet est donc primordiale pour que je puisse étudier très précisément vos souhaits.Depuis la covid, il m'a fallu m'adapter et trouver une nouvelle manière de fonctionner. 
              </p>
              <p className="about__text goudy">
              
              C'est pourquoi aujourd'hui, je propose une nouvelle démarche plus précise et moderne. Ainsi, les premiers contacts se font via les réseaux ou par téléphone. Chaque client m’envoie donc à son rythme ses inspirations, en vue de tout préparer en coulisse et de constituer un dossier personnalisé pour offrir quelque chose de toujours plus abouti.
              
            </p>
            <span>*suivant le kilométrage parcouru.</span>
            
          </article>
        </div>
      </Modal>

      </section>

        </article>
        <img src={ProfilePicture} alt="picture profile" className="about__img" />
      </section> 
      
    </div>
  )
}

export default About