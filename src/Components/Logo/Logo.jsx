import React from 'react'
import './Logo.scss'
import img from '../../Assets/Images/logo.png'

const LogoBox = () => {
   return (
      <div className="logo">
         <img src={img} alt="imgae" />
      </div>
   )
}

export default LogoBox 