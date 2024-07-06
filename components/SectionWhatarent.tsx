import React from 'react'
import Image from "next/image";

const SectionWhatarent = () => {
  return (
    <div className="bg-[url('https://cdn.prod.website-files.com/621defa0940f1fecd5d8d53b/622a847cd38a27869e9fe5da_Wave-blue.svg')] bg-cover bg-no-repeat flex flex-col justify-center items-center py-20 px-32 text-center font-black text-neutral-800">
        <div className="flex flex-col items-center">
            <h2 className="mt-4 mb-2 text-6xl text-neutral-800">Ce que nous ne sommes pas</h2>
            <Image src="https://cdn.prod.website-files.com/621defa0940f1fecd5d8d53b/623079cc915a8c735079ea67_grey-vector.svg" alt="trait noir" width={500} height={500} />
        </div>
        <div className='flex flex-col gap-8 pt-8 text-3xl font-black'>
            <div>
                <p>Nous ne sommes pas une simple boîte à idées.</p>
                <p className='text-purple-800'>Nous exécutons les idées.</p>
            </div>
            <div>
                <p>Nous ne participons pas à une approche TOP DOWN.</p>
                <p className='text-purple-800'>Nous aidons à mettre en place du BOTTOM UP dans votre organisation.</p>
            </div>
            <div>
                <p>Nous ne sommes pas une plateforme d’innovation grande échelle.</p>
                <p className='text-purple-800'>Nous prônons la frugalité par des projets à bas coût, mis en place rapidement par les collaborateurs eux-mêmes.</p>
            </div>
            <div>
                <p>Nous ne sommes pas un réseau social.</p>
                <p className='text-purple-800'>Notre but est de maintenir le lien entre les collaborateurs, la digitalisation est juste un moyen.</p>
            </div>
        </div>
    </div>
  )
}

export default SectionWhatarent