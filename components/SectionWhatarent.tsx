import React from 'react'
import Image from "next/image";

const SectionWhatarent = () => {
  return (
    <section className="bg-[url('https://cdn.prod.website-files.com/621defa0940f1fecd5d8d53b/622a847cd38a27869e9fe5da_Wave-blue.svg')] bg-cover bg-no-repeat flex flex-col justify-center items-center py-20 px-32 text-center font-black text-neutral-800">
        <div className="flex flex-col items-center">
            <h2 className="mt-4 mb-2 text-6xl text-neutral-800">Ce que je ne suis pas</h2>
            <Image src="https://cdn.prod.website-files.com/621defa0940f1fecd5d8d53b/623079cc915a8c735079ea67_grey-vector.svg" alt="trait noir" width={500} height={500} />
        </div>
        <div className='flex flex-col gap-8 pt-8 text-3xl font-black'>
            <div>
                <p>Je ne suis pas un simple développeur.</p>
                <p className='text-purple-800'>Je suis un développeur qui a envie de se donner à fond pour développer, améliorer et maintenir la solution logicielle mise en place, tout en travaillant sur d&apos;autres projets spécifiques à l&apos;avenir.</p>
            </div>
            <div>
                <p>Je ne suis pas un simple salarié qui vient seulement travailler.</p>
                <p className='text-purple-800'>Je suis un salarié qui a envie de s&apos;investir pleinement dans l&apos;entreprise, en prenant part à une aventure passionnante et innovante. Grâce aux projets portés par Teamstarter, ainsi qu&apos;au partage de connaissances et de compétences entre moi et l&apos;équipe, je souhaite contribuer et grandir au sein de l&apos;entreprise.</p>
            </div>
        </div>
    </section>
  )
}

export default SectionWhatarent