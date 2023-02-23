import React from 'react'
import './DetailsCards.css';
const DetailsCards = (props) => {
  const dark = { color: "#f7a7c1" }
  const light = { color: "#cf3868" }
  return (
    <div className="DetailsCards">
      <h2 style={props.darkTheme ? dark : light}>{props.heading}</h2>
      <i>{props.date}</i>
      <p>{props.para}</p>
    </div>
  )
}

export default DetailsCards