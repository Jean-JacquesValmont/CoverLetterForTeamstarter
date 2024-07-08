import React from 'react'
import Link from 'next/link';
import Button from './Button';

const TakingAction = () => {
  return (
    <div className="bg-[url('https://cdn.prod.website-files.com/621defa0940f1fecd5d8d53b/622b6b8e2118bede8a80ff19_confeti-bg.svg')] flex flex-col justify-center items-center pb-32 px-16 sm:px-32">
        <h2 className="max-w-[60rem] text-center mt-4 mb-20 text-4xl sm:text-7xl text-neutral-800 font-black sm:leading-[5.5rem]">Je suis impatients d’en parler avec vous.</h2>
        <div className=''>
        <Link href="/Contact">
          <Button text ="Me contacter" ></Button>
        </Link>
        </div>
    </div>
  )
}

export default TakingAction