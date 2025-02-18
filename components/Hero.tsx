import React from 'react'
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[url('https://cdn.prod.website-files.com/621defa0940f1fecd5d8d53b/622b6b8e2118bede8a80ff19_confeti-bg.svg')] flex flex-col justify-center items-center pt-20 px-16 sm:px-32">
        <h1 className='mt-4 mb-2 text-center text-4xl sm:text-7xl font-black text-neutral-700 '>Lettre de motivation <span className='text-yellow-300'>au poste de </span> Développeur Fullstack Node JS/React H/F/X</h1>

        <Image className="py-8" src="/image/hero_image_modified.png" alt="image_computer_smartphone" width={500} height={500} />
        <p className='max-w-[87rem] pt-12 text-center text-xl sm:text-3xl font-black text-neutral-800'>
           Actuellement à la recherche d&apos;une alternance de 12 mois (4 jours par semaine en entreprise) à partir de septembre 2024.
        </p>
    </div>
  )
}

export default Hero