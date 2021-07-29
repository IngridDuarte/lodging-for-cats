import React from 'react'


const Button = ({ onClick, type, color, label, icon }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={color} 
      label={label}>
        Default
      {/* {icon ? <FontAwesomeIcon icon={faPaw} /> : '' } */}
    </button>
  )
}

export default Button