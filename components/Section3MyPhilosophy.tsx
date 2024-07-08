import React from 'react'
import Image from "next/image";

const Section3MyPhilosophy = () => {
  return (
    <section className="w-[90rem] flex flex-col justify-start items-start py-20 px-32">
        <div className='flex justify-center items-center pb-8'>
            <p className='font-light text-4xl mr-8'>Enfin, <span className='text-[#64008C] font-black'>créer ou remettre du lien</span> entre les collaborateurs est un pilier central dans la bonne santé d&apos;une entreprise. <span className='text-[#64008C] font-black'>Les relations humaines et le collectif sont primordiaux dans chaque entreprise.</span></p>
            <Image className="" src="/image/image_philosophy2.svg" alt="image_computer_smartphone" width={450} height={450} />
        </div>
        <p className='text-[#64008C] font-black text-4xl pb-4'>Prêt à changer le monde ensemble ?</p>
        <button className='bg-[#ff00ac] text-white font-extrabold px-4 py-2 rounded-full transition transform duration-700 shadow-md hover:-translate-y-1 hover:shadow-custom-dark' >
            Découvrez moi !
        </button>
    </section>
  )
}

export default Section3MyPhilosophy