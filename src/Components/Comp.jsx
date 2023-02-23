import React from 'react'
import './Comp.css';
import DetailsCards from './DetailsCards';
const Comp = (props) => {
  const dark = { backgroundColor: "#282c35", color: "white" }
  const light = { backgroundColor: "white", color: "black" }
  return (
    <div className="Comp" style={props.darkTheme ? dark : light}>
      <DetailsCards heading="The WET Codbase" date="Sunday 4th, 2020 11min read" para=" Come waste your time with me" />
      <DetailsCards heading="Goodby, Clean Code" date="Friday 22nd, 2019 5min read" para="Let clean code guide you.Then let it go" />
      <DetailsCards heading="My Decade In Review" date="Saturday 11th, 2018 11min read" para="A personal reflection" />
      <DetailsCards heading="What Are The React Team Principles" date="thursday 4th, 2015 11min read" />
    </div>


  )
}

export default Comp