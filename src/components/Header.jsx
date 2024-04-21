import React from 'react'
import image from './../assets/Troll Face.png'
const Header = () => {
  return (
    <div className="header_container">
      <div className="header_left">
        <img src={image} alt="" />
        <p>Meme Generator</p>
      </div>
      <div className="header_right">
         React Course - Project 3  
      </div>
    </div>
  )
}

export default Header
