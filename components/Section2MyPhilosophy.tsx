import React from 'react'
import Image from "next/image";

const Section2MyPhilosophy = () => {
  return (
    <section className="bg-[url('https://cdn.prod.website-files.com/621defa0940f1fecd5d8d53b/621e394e2f5305f88870c034_Wave%20yellow.svg')] bg-cover bg-no-repeat flex justify-center items-center py-20 px-32">
        <Image className="" src="/image/image_philosophy.svg" alt="image_computer_smartphone" width={450} height={450} />
        <p className='font-light text-4xl ml-8'>Ensuite, donner à chaque personne <span className='text-[#64008C] font-black'>les moyens</span> de mettre en place un projet qui leur tient à cœur mais pour lequel ils n&apos;avaient pas les compétences ou les finances nécessaires. C&apos;est permettre à tout le monde de <span className='text-[#64008C] font-black'>s&apos;exprimer et d&apos;agir</span> grâce à un dispositif simple et collectif.</p>
    </section>
  )
}

export default Section2MyPhilosophy
