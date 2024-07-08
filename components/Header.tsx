import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import Button from './Button';

const Header = () => {
  return (
    <header className='bg-white flex justify-between pt-2 px-32 font-light text-sm sticky text-neutral-800 top-0 z-10'>
        <Link className='py-4' href="/">
            <Image src="/image/TeamstarterLogoCopie.png" alt="logo_web_white" width={200} height={500} />
        </Link>
        
        <nav className='flex'>
            <ul className='flex gap-4 items-center flex-row '>
                <Link className='transition-colors duration-500 hover:text-[#ff00ac]' href="/MyAddedValue">
                    <li className='p-4'>Ma valeur ajoutée</li>
                </Link>
                <Link className='transition-colors duration-500 hover:text-[#ff00ac]' href="/JoinUs">
                    <li className='p-4'>Vous rejoindre</li>
                </Link>
                <Link className='transition-colors duration-500 hover:text-[#ff00ac]' href="https://port-folio-three-umber.vercel.app/" target="_blank">
                    <li className='p-4'>Mon portfolio</li>
                </Link>
                <Link href="https://www.linkedin.com/in/jean-jacques-valmont-131630130/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className='text-2xl transition-colors duration-500 hover:text-[#ff00ac]' />
                </Link>
                <Link href="https://github.com/Jean-JacquesValmont" target="_blank" rel="noopener noreferrer">
                    <FaGithub className='text-2xl transition-colors duration-500 hover:text-[#ff00ac]' />
                </Link>
                <Link href="/Contact">
                    <Button text ="Me contacter" ></Button>
                </Link> 
            </ul>
        </nav>
    </header>
  )
}

export default Header