import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="bg-[url('https://cdn.prod.website-files.com/621defa0940f1fecd5d8d53b/621e2b0bded72bf8fed2f615_Wave%20pink.svg')] bg-cover bg-no-repeat flex flex-col justify-center items-center align-middle py-32 px-32 text-center font-black text-neutral-800">
        <h1 className='mt-16 mb-8 text-center text-7xl font-black text-neutral-800 [text-shadow:4px_4px_0px_var(--tw-shadow-color)] shadow-[#FFFFFF]'>Me contacter</h1>
        <div className='w-[60rem] flex gap-4 text-2xl'>
          <div className='flex gap-4'>
            <FaPhone />
            <p>Par téléphone:</p>
            <a className='text-neutral-600 underline-offset-2 border-b-2 border-black transition-colors duration-500 hover:text-neutral-800' href="tel:0788333203" target="_blank" rel="noopener noreferrer">
              07 88 63 32 03
            </a>
          </div>
        
          <div className='flex gap-4 pl-16'>
            <IoMailSharp />
            <p>Par mail:</p>
            <a className='text-neutral-600 underline-offset-2 border-b-2 border-black transition-colors duration-500 hover:text-neutral-800' href="mailto:jeanjacquesvalmont@gmail.com" target="_blank" rel="noopener noreferrer">
              jeanjacquesvalmont@gmail.com
            </a>
          </div>
        </div>
    </div>
  )
}

export default Contact