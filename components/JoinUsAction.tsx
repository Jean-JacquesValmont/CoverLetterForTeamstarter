import React from 'react'
import Image from "next/image";

const JoinUsAction = () => {
  return (
    <div className="bg-[url('https://cdn.prod.website-files.com/621defa0940f1fecd5d8d53b/622b6b8e2118bede8a80ff19_confeti-bg.svg')] flex justify-center items-center">
        <div className="w-[85rem] flex justify-center items-center align-middle pb-16 px-32">
            <Image className="mt-8 rounded-lg shadow-custom-green-top-left" src="/image/team_teamstarter_office.png" alt="image_computer_smartphone" width={300} height={300} />
            <div className='w-[42rem] flex flex-col ml-16'>
                <h2 className=" mb-4 text-5xl font-black text-neutral-800">Rejoins-nous !</h2>
                <p className='pb-4 font-light leading-5'>Teamstarter est en plein développement et pour ce faire, nous proposons régulièrement des offres d’emploi diverses et variées. UX Designer, Développeur Full-Stack, CTO, ... Tu es le/la bienvenue !</p>
                <div className=' flex items-center gap-4 text-2xl'>
                    <p className='font-black text-neutral-800'>Retrouve toutes nos offres sur :</p>
                    <button className='bg-[#FF00AC] text-white font-normal px-12 py-4 rounded-xl shadow-md shadow-custom-dark'>Notre site carrière</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JoinUsAction