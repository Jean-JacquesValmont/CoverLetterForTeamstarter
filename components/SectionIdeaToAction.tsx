import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import Button from './Button';

const SectionIdeaToAction = () => {
  return (
    <div className="bg-[url('https://cdn.prod.website-files.com/621defa0940f1fecd5d8d53b/622b6b8e2118bede8a80ff19_confeti-bg.svg')] flex justify-center items-center">
        <div className="max-w-[85rem] flex flex-col sm:flex-row justify-center items-center align-middle pb-16 px-16 sm:px-32">
            <div className='border-black border-[1px] rounded-lg sm:mr-12'>
                <Image className="relative top-6 left-4 py-4 " src="/image/hero_image2_modified.png" alt="image_computer_smartphone" width={500} height={500} />
            </div>
            <div className='flex flex-col mt-4'>
                <h2 className="mb-4 text-2xl sm:text-5xl font-black text-neutral-800">Une seule démarche pour consulter <span className='text-[#ff00ac]'>tous mes projets</span></h2>
                <p className='text-sm sm:text-lg pb-4 font-light leading-5'>Ici, vous pouvez retrouver mes différents projets réalisés, en plus de celui-ci, sur mon portfolio ainsi que leurs codes sur GitHub.</p>
                <div className='flex gap-4 text-sm sm:text-lg'>
                    <Link href="https://port-folio-three-umber.vercel.app/" target="_blank">
                        <Button text ="Voir les projets réalisés" bgColor="bg-[#00FFB7]" textColor="text-black" ></Button>
                    </Link>
                    <Link href="https://github.com/Jean-JacquesValmont" target="_blank" rel="noopener noreferrer">
                        <Button text ="Mon Github" bgColor="bg-[#64008C]"></Button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default SectionIdeaToAction