import React from 'react'
import './IllustrationBox.scss'
import img from '../../Assets/Images/login.png'

const IllustrationBox = () => {
   return (
      <div className="illustration-box">
         <img src={img} alt="imgae" />
      </div>
   )
}

export default IllustrationBox
