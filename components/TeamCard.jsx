import React from 'react'
import Image from 'next/image'

function TeamCard(props) {
  return (
    <div className='md:max-w-[25vw] p-5 bg-gradient-to-r from-sky-600 to-emerald-600 md:flex flex-col relative z-1 justify-center border-2 border-sky-900 rounded-xl m-5'>
        <div className='text-2xl text-sky-100 flex justify-center'>{props.position}</div>
        <Image 
            height={400}
            width={400}
            alt='Austin'
            src={props.src}
        />
        <div className='text-sky-100 flex justify-center text-2xl mb-2 text-shadow-blue'>{props.name}</div>
        <div className='text-sky-100 text-lg'>{props.description}</div>
    </div>
  )
}

export default TeamCard