import React from 'react'

const Button = ({ text, bgColor = '#ff00ac', textColor = "text-white" } : any) => {
  return (
    <button className={`bg-[${bgColor}] ${textColor} font-extrabold px-4 py-2 rounded-full transition transform duration-700 shadow-md hover:-translate-y-1 hover:shadow-custom-dark`} >
        {text}
    </button>
  )
}

export default Button