import React from 'react'
import GraphBox1 from './GraphBox1'
import { FaArrowRight } from 'react-icons/fa';

function TextBox1(props) {
  return (
    <div className='flex items-center justify-center maxSm:flex-col max-w-[70vw] mt-5'>
        <div className=''>
            <GraphBox1
                sign_up={props.boxText}
            />
            <div className='md:w-[15vw] my-5 text-lg font-bold max-w-[50vw] maxSm:mx-[15vw]'>{props.input}</div>
        </div>
        <div className='m-5 mb-[2%] text-6xl text-sky-900'>
            <FaArrowRight/>
        </div>
    </div>
  )
}

export default TextBox1