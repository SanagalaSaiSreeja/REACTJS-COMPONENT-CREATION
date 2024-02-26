import React from 'react';
import './button.css';

export const Button = ({buttonClick,show}) => {
  return (
    <button  onClick={buttonClick}>
        {show ? 'Back' : 'Click to view the Image and Description' } 
    </button>   
  )
}