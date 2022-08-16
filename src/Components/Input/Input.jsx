import React from 'react'
import './Input.scss'
import { Icon } from '@iconify/react';

const Input = ({type, label}) => {
   return (
      <div className="input">
         <label>{label}</label>
         <input type={type} required/>
      </div>
   )
}

export default Input
