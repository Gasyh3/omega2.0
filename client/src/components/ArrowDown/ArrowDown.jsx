import * as React from "react"
import "./ArrowDown.scss"

const SvgArrow = (props) => (
  <svg className="arrows" {...props}>
    <path className="a1" d="m0 0 30 32L60 0" />
    <path className="a2" d="m0 20 30 32 30-32" />
    <path className="a3" d="m0 40 30 32 30-32" />
  </svg>
)


export default SvgArrow