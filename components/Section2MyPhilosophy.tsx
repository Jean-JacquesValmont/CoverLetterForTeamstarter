import React from 'react'
import Image from "next/image";

const Section2MyPhilosophy = () => {
  return (
    <section className="bg-[url('https://cdn.prod.website-files.com/621defa0940f1fecd5d8d53b/621e394e2f5305f88870c034_Wave%20yellow.svg')] bg-cover bg-no-repeat flex justify-center items-center py-20 px-32">
        <Image className="" src="/image/image_philosophy.svg" alt="image_computer_smartphone" width={450} height={450} />
        <p className='font-light text-4xl ml-8'>Teamstarter accompagne la transformation des entreprises en laissant s’exprimer les salariés, convaincue que <span className='text-[#64008C] font-black'>le bottom-up et l&apos;intelligence collective</span> permettent de faire émerger les projets de demain.</p>
    </section>
  )
}

export default Section2MyPhilosophy