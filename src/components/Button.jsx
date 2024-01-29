import React from 'react'

const Button = ({bgColor, text, color, borderRadius, size, icon, closeFunc}) => {
  return (
    <button style={{ backgroundColor: bgColor, color,borderRadius }}
      className={`text-${size} p-3
      hover:drop-shadow-xl`} onClick={()=>closeFunc()}>
        {icon}
        {text}
    </button>
  )
}

export default Button