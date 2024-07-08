import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-[#060606] flex flex-col py-8 px-32 text-white'>
        <div className='flex'>
            <Link className='py-4' href="/">
                <Image src="/image/TeamstarterLogoCopie2.png" alt="logo_web_white" width={200} height={500} />
            </Link>
            
            <nav className='flex pl-8'>
                <ul className='flex gap-4 items-center flex-row '>
                    <Link className='hover:text-[#ff00ac]' href="/MyAddedValue">
                        <li className='p-4'>Ma valeur ajoutée</li>
                    </Link>
                    <Link className='hover:text-[#ff00ac]' href="/JoinUs">
                        <li className='p-4'>Vous rejoindre</li>
                    </Link>
                    <Link className='hover:text-[#ff00ac]' href="https://port-folio-three-umber.vercel.app/" target="_blank">
                        <li className='p-4'>Mon portfolio</li>
                    </Link>
                </ul>
            </nav>
        </div>
        <div className='flex justify-between px-32'>
            <p>
                Copyright © 2024 Jean-Jacques Valmont. This site is a partial copy of the Teamstarter site
                <a className='transition-colors duration-500 hover:text-[#ff00ac]' href="https://www.teamstarter.com/" target="_blank" rel="noopener noreferrer"> https://www.teamstarter.com/</a> 
                . All rights reserved to Teamstarter.
            </p>

            <div className='flex text-neutral-700'>
                <Link href="https://www.linkedin.com/in/jean-jacques-valmont-131630130/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='text-2xl mx-2 transition-colors duration-500 hover:text-[#ff00ac]' />
                </Link>
                <Link href="https://github.com/Jean-JacquesValmont" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='text-2xl mx-2 transition-colors duration-500 hover:text-[#ff00ac]' />
                </Link>
            </div>
        </div>
        
    </footer>
  )
}

export default Footer