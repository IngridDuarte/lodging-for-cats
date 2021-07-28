import React from 'react'

const Button = ({ onClick, type, children, color }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      color={color} >
      {children}
    </button>
  )
}

export default Button