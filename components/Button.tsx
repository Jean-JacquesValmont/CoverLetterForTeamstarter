import React from 'react'

type ButtonProp = {
  text: string;
  bgColor?: string;
  textColor?: string;
}

const Button = ({ text, bgColor = 'bg-[#ff00ac]', textColor = "text-white" } : ButtonProp) => {
  return (
    <button className={`${bgColor} ${textColor} font-extrabold px-4 py-2 rounded-full transition transform duration-700 shadow-md hover:-translate-y-1 hover:shadow-custom-dark`} >
        {text}
    </button>
  )
}

export default Button