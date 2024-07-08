import React from 'react'

const SectionMyAddedValue = () => {
  return (
    <section className="bg-[url('https://cdn.prod.website-files.com/621defa0940f1fecd5d8d53b/622b6b8e2118bede8a80ff19_confeti-bg.svg')] bg-cover bg-no-repeat flex flex-col justify-center items-center py-20 px-16 sm:px-32 text-center font-black text-neutral-800">
        <div className="flex flex-col items-center">
            <h2 className="mt-4 mb-2 text-5xl sm:text-7xl text-neutral-800 [text-shadow:4px_4px_0px_var(--tw-shadow-color)] shadow-[#ff00ac]">Ma valeur ajoutée</h2>
        </div>
        <div className='max-w-[70rem] flex flex-col gap-8 pt-8 text-xl sm:text-3xl font-light'>
            <div>
                <p>Je suis une personne <span className='text-[#64008C] font-black'>proactive</span>. Mon expérience professionnelle dans le domaine de l&apos;animation m&apos;a permis d&apos;apprendre à <span className='text-[#64008C] font-black'>m&apos;adapter rapidement</span> et à développer une <span className='text-[#64008C] font-black'>grande autonomie.</span></p>
            </div>
            <div>
                <p>Le <span className='text-[#64008C] font-black'>travail d&apos;équipe</span>, ça me connaît ! J&apos;ai travaillé en équipe pour des événements associatifs, ce qui m&apos;a permis d&apos;acquérir <span className='text-[#64008C] font-black'>l&apos;esprit d&apos;équipe</span> et d&apos;apprendre à collaborer efficacement.</p>
            </div>
            <div>
                <p>Je suis <span className='text-[#64008C] font-black'>curieux</span> par nature. J&apos;adore apprendre de nouvelles choses, ce qui me pousse à toujours <span className='text-[#64008C] font-black'>m&apos;améliorer</span>. J&apos;intègre ce que j&apos;apprends au quotidien pour devenir une <span className='text-[#64008C] font-black'>meilleure version de moi-même</span>.</p>
            </div>
            <div>
                <p>J&apos;ai déjà conçu des projets en équipe avec la <span className='text-[#64008C] font-black'>méthode agile</span>, mais aussi seul en <span className='text-[#64008C] font-black'>React et NodeJS</span>. J&apos;ai les bases nécessaires pour commencer sereinement ce nouveau projet qui me sera attribué.</p>
            </div>
        </div>
    </section>
  )
}

export default SectionMyAddedValue