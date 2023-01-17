import React from 'react'
import Image from 'next/image'

function BenefitCard(props) {
  return (
    <div className='md:max-w-[25vw] border rounded-xl bg-gradient-to-r from-sky-600 to-emerald-600 flex flex-col p-5 px-10 items-center mx-8'>
      <h2 className='mb-2 text-4xl text-sky-100 flex justify-center'>{props.title}</h2>
        <Image
            src={props.src}
            alt=''
            width={150}
            height={150}
        />
      <div className='text-xl text-sky-100'>
        {props.info}
      </div>
    </div>
  )
}

export default BenefitCard