import React from 'react'
import Image from "next/image";

const Section3MyPhilosophy = () => {
  return (
    <section className="w-[100rem] flex flex-col justify-start items-start py-20 px-32">
        <div className='flex justify-center items-center pb-8'>
            <p className='font-light text-4xl mr-8'>Concrètement, Teamstarter propose à la fois 
                <span className='text-[#64008C] font-black'> une plateforme de crowdfunding interne </span> 
                qui permet à chaque salarié de créer et financer des projets grâce à un budget alloué à chaque salarié par l&apos;entreprise ;
                et <span className='text-[#64008C] font-black'>un accompagnement individuel</span> spécialisé 
                pour aider à la réalisation de ces idées.
            </p>
            <Image className="" src="/image/image_philosophy2.svg" alt="image_computer_smartphone" width={450} height={450} />
        </div>
        <p className='text-[#64008C] font-black text-4xl pb-4'>Prêt à changer le monde avec nous ?</p>
        <button className='bg-[#ff00ac] text-white font-extrabold px-4 py-2 rounded-full transition transform duration-700 shadow-md hover:-translate-y-1 hover:shadow-custom-dark' >
            Découvrir nos offres !
        </button>
    </section>
  )
}

export default Section3MyPhilosophy