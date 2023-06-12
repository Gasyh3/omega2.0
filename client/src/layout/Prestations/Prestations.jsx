import React from 'react'
import './Prestations.scss'

function Prestations() {
  return (
    <div className="prestations" id="prestation">
      <div className="prestations__container">
        <a href="#" className="prestations__cases">Mariage</a>
        <a href="#" className="prestations__cases">Maquillage</a>
        <a href="#" className="prestations__cases">Coiffure</a>
        <a href="#" className="prestations__cases">Onglerie</a>
        <a href="#" className="prestations__cases">Press-on nails</a>
        <a href="#" className="prestations__cases">Tatouages éphémère</a>
      </div>
    </div>
  )
}

export default Prestations