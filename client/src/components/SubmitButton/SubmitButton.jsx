import React from 'react'
import './SubmitButton.scss'

function SubmitButton({ text, onClick}) {
  return (
    <button className="submit-button" onClick={onClick}>
      {text}
    </button>
  )
}

export default SubmitButton