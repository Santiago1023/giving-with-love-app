
import React from 'react'

interface ButtonProps {
    bg: string;
    textColor: string;
    text: string;
}
const Button = ({bg, textColor, text} : ButtonProps) => {
  return (
    <button className={`bg-${bg} text-${textColor} px-2 py-1 rounded-lg font-bold hover:bg-blue-2 debug transform hover:scale-105 transition`}>
        {text}
    </button>
  )
}

export {Button};