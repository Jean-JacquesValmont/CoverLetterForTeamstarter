import React from 'react'
import Image from "next/image";

const Section1MyPhilosophy = () => {
  return (
    <section className="w-[90rem] bg-[url('https://cdn.prod.website-files.com/621defa0940f1fecd5d8d53b/622b6b8e2118bede8a80ff19_confeti-bg.svg')] flex justify-center items-center py-20 px-32">
        <p className='font-light text-4xl mr-8'>Teamstarter est une start-up lancée en 2019 par deux jeunes entrepreneurs, Ségolène et Vincent. Le but ? <span className='text-[#64008C] font-black'>Remettre l’humain au cœur de l’entreprise !</span></p>
        <Image className="mt-8 rounded-xl shadow-custom-green-bottom-right" src="/image/team_teamstarter.jpeg" alt="image_computer_smartphone" width={450} height={450} />
    </section>
  )
}

export default Section1MyPhilosophy