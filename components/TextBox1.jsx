import React from 'react'
import GraphBox1 from './GraphBox1'

function TextBox1(props) {
  return (
    <div className='flex justify-center maxSm:flex-col max-w-[70vw]'>
        <div className=''>
            <GraphBox1
                sign_up={props.boxText}
            />
            <div className='md:w-[15vw] my-5 text-lg font-bold max-w-[50vw] maxSm:mx-[15vw]'>{props.input}</div>
        </div>
    </div>
  )
}

export default TextBox1