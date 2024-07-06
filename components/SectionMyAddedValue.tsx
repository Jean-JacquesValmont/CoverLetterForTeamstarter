import React from 'react'

const SectionMyAddedValue = () => {
  return (
    <section className="bg-[url('https://cdn.prod.website-files.com/621defa0940f1fecd5d8d53b/622b6b8e2118bede8a80ff19_confeti-bg.svg')] bg-cover bg-no-repeat flex flex-col justify-center items-center py-20 px-32 text-center font-black text-neutral-800">
        <div className="flex flex-col items-center">
            <h2 className="mt-4 mb-2 text-7xl text-neutral-800 [text-shadow:4px_4px_0px_var(--tw-shadow-color)] shadow-[#ff00ac]">Notre valeur ajoutée</h2>
        </div>
        <div className='w-[70rem] flex flex-col gap-8 pt-8 text-3xl font-light'>
            <div>
                <p>Ces dernières années, les attentes de vos collaborateurs se sont complètement transformées. Le monde du travail a changé.</p>
            </div>
            <div>
                <p>D’ici 2025, 75 % de la population mondiale seront des millénials, engager et attirer les talents n’est plus un luxe mais un prérequis.</p>
            </div>
            <div>
                <p>Désormais, les collaborateurs sont <span className='text-[#64008C] font-black'>en quête de sens et d&apos;impact.</span> Ils ne sont pas suffisamment mis en mouvement et impliqués dans l&apos;entreprise.</p>
            </div>
            <div>
                <p>Et pourtant sans leur engagement, il est difficile de créer une vraie <span className='text-[#64008C] font-black'>transformation</span>, d&apos;où la nécessité de les <span className='text-[#64008C] font-black'>rendre acteurs.</span></p>
            </div>
        </div>
    </section>
  )
}

export default SectionMyAddedValue