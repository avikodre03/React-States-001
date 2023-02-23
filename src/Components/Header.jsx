import React from 'react'
import './Header.css';

const Header = ({ darkTheme, setdarkTheme }) => {
  const dark = { backgroundColor: "#282c35", color: "white" }
  const light = { backgroundColor: "white", color: "black" }
  const buttonLight = { backgroundColor: "rgb(207, 56, 104)", color: "white" }
  const buttonDark = { backgroundColor: "#f7a7c1", color: "white" }
  return (
    <>
      <div className="Header" style={darkTheme ? dark : light}>
        <h1>Overreacted</h1>
        <div className="button">

          <button onClick={() => {
            setdarkTheme(!darkTheme)
          }} style={darkTheme ? buttonDark : buttonLight}>Toggle</button>

        </div>
      </div>
    </>
  )
}

export default Header
