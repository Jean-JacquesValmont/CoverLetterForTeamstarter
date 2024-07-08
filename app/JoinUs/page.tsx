import JoinUsAction from '@/components/JoinUsAction'
import Section1MyPhilosophy from '@/components/Section1MyPhilosophy'
import Section2MyPhilosophy from '@/components/Section2MyPhilosophy'
import Section3MyPhilosophy from '@/components/Section3MyPhilosophy'
import React from 'react'

const JoinUs = () => {
  return (
    <div>
      <h1 className='px-16 sm:px-32 mt-20 mb-4 text-center text-4xl sm:text-7xl font-black text-neutral-700 '>Pourquoi je veux rejoindre Teamstarter?</h1>
      <Section1MyPhilosophy />
      <Section2MyPhilosophy />
      <Section3MyPhilosophy />
      <JoinUsAction />
    </div>
  )
}

export default JoinUs