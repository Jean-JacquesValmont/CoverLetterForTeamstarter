import React from 'react'
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[url('https://cdn.prod.website-files.com/621defa0940f1fecd5d8d53b/622b6b8e2118bede8a80ff19_confeti-bg.svg')] flex flex-col justify-center items-center pt-20 px-32">
        <h1 className='mt-4 mb-2 text-center text-7xl font-black text-neutral-700 '>Lettre de motivation <span className='text-yellow-300'>au poste de </span> Développeur Fullstack Node JS/React H/F/X</h1>

        <Image className="py-8" src="/image/hero_image.png" alt="image_computer_smartphone" width={500} height={500} />
        <p className='w-[87rem] pt-12 text-center text-2xl font-black text-neutral-800'>
          Je suis étudiant en développement web à Ada Tech School, une école qui favorise l&apos;apprentissage autonome 
          par la pratique et la réalisation de projets en groupe, en utilisant la méthode Agile. Actuellement, 
          je suis à la recherche d&apos;une alternance de 12 mois (4 jours par semaine en entreprise) à partir de septembre 2024.
        </p>
    </div>
  )
}

export default Hero