import React from 'react'
import Image from "next/image";
import Link from 'next/link';

const JoinUsAction = () => {
  return (
    <div className="bg-[url('https://cdn.prod.website-files.com/621defa0940f1fecd5d8d53b/622b6b8e2118bede8a80ff19_confeti-bg.svg')] flex justify-center items-center">
        <div className="max-w-[85rem] flex flex-col sm:flex-row justify-center items-center align-middle pb-16 px-16 sm:px-32">
            <Image className="mt-8 rounded-lg shadow-custom-green-top-left" src="/image/team_teamstarter_office.png" alt="image_computer_smartphone" width={300} height={300} />
            <div className='max-w-[42rem] flex flex-col mt-4 sm:ml-16'>
                <h2 className=" mb-4 text-2xl sm:text-5xl font-black text-neutral-800">Hâte de vous <span className='text-[#ff00ac]'>rejoindre !</span></h2>
                <p className='pb-4 font-light leading-5'>Je suis impatient de pouvoir commencer l&apos;aventure Teamstarter au sein d&apos;une équipe de passionnés et bienveillante.</p>
                <div className=' flex items-center gap-4 text-lg sm:text-2xl'>
                    <p className='font-black text-neutral-800'>Alors n&apos;hésitez plus:</p>
                    <Link href="/Contact">
                      <button className='bg-[#FF00AC] text-white font-normal px-8 sm:px-12 py-4 rounded-xl shadow-custom-dark'>Contacter moi !</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JoinUsAction