import React from 'react'
import Image from "next/image";

const Section1MyPhilosophy = () => {
  return (
    <section className="max-w-[90rem] bg-[url('https://cdn.prod.website-files.com/621defa0940f1fecd5d8d53b/622b6b8e2118bede8a80ff19_confeti-bg.svg')] flex flex-col sm:flex-row justify-center items-center py-20 px-16 sm:px-32">
        <p className='max-w-[60rem] font-light text-xl sm:text-4xl text-center sm:text-left sm:mr-8'>Tout d&apos;abord, sa culture d&apos;entreprise est totalement en adéquation avec mes valeurs. Après avoir travaillé 4 ans dans un centre social, pouvoir retravailler dans une start-up qui prône <span className='text-[#64008C] font-black'>l&apos;humain au cœur de l&apos;entreprise</span> est un rêve pour moi !</p>
        <Image className="mt-4 rounded-xl shadow-custom-green-bottom-right" src="/image/team_teamstarter.jpeg" alt="image_computer_smartphone" width={600} height={600} />
    </section>
  )
}

export default Section1MyPhilosophy