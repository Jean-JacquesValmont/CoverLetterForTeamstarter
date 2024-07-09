import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import Button from './Button';

const Section3MyPhilosophy = () => {
  return (
    <section className="max-w-[90rem] flex flex-col justify-center items-center sm:items-start py-20 px-16 sm:px-32">
        <div className='flex flex-col sm:flex-row justify-center items-center pb-8'>
            <p className='font-light text-xl sm:text-4xl text-center sm:text-left mb-4 sm:mr-8'>Enfin, <span className='text-[#64008C] font-black'>créer ou remettre du lien</span> entre les collaborateurs est un pilier central dans la bonne santé d&apos;une entreprise. <span className='text-[#64008C] font-black'>Les relations humaines et le collectif sont primordiaux dans chaque entreprise.</span></p>
            <Image className="" src="/image/image_philosophy2.svg" alt="image_computer_smartphone" width={450} height={450} />
        </div>
        <div className='flex flex-col items-center sm:items-start'>
          <p className='text-[#64008C] font-black text-2xl sm:text-4xl text-center sm:text-start pb-4'>Prêt à changer le monde ensemble ?</p>
          <Link href="https://port-folio-three-umber.vercel.app/" target="_blank">
            <Button text ="Découvrez moi !" ></Button>
          </Link>
        </div>
    </section>
  )
}

export default Section3MyPhilosophy