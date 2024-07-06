import React from 'react'
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-[url('https://cdn.prod.website-files.com/621defa0940f1fecd5d8d53b/622b6b8e2118bede8a80ff19_confeti-bg.svg')] flex flex-col justify-center items-center pt-20 px-32">
        <h1 className='mt-4 mb-2 text-center text-7xl font-black text-neutral-700 '>Donnez vie <span className='text-yellow-300'>aux idées</span> de vos collaborateurs!</h1>

        <Image className="py-4" src="/image/hero_image.png" alt="logo_web_white" width={500} height={500} />
    </div>
  )
}

export default Hero