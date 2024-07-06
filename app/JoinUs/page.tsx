import JoinUsAction from '@/components/JoinUsAction'
import Section1MyPhilosophy from '@/components/Section1MyPhilosophy'
import Section2MyPhilosophy from '@/components/Section2MyPhilosophy'
import Section3MyPhilosophy from '@/components/Section3MyPhilosophy'
import React from 'react'

const JoinUs = () => {
  return (
    <div>
      <h1 className='mt-4 mb-2 text-center text-7xl font-black text-neutral-700 '>Notre Philosophie</h1>
      <Section1MyPhilosophy />
      <Section2MyPhilosophy />
      <Section3MyPhilosophy />
      <JoinUsAction />
    </div>
  )
}

export default JoinUs