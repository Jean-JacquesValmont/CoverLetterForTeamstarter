import React from 'react'
import Link from 'next/link';

const TakingAction = () => {
  return (
    <div className="bg-[url('https://cdn.prod.website-files.com/621defa0940f1fecd5d8d53b/622b6b8e2118bede8a80ff19_confeti-bg.svg')] flex flex-col justify-center items-center pb-32 px-32">
        <h2 className="w-[60rem] text-center mt-4 mb-20 text-7xl text-neutral-800 font-black leading-[5.5rem]">Je suis impatients d’en parler avec vous.</h2>
        <div className=''>
        <Link href="/Contact">
            <button className='bg-[#ff00ac] text-white font-extrabold px-4 py-2 rounded-full transition transform duration-700 shadow-md hover:-translate-y-1 hover:shadow-custom-dark' >
                Me contacter
            </button>
        </Link>
        </div>
    </div>
  )
}

export default TakingAction