import React from 'react'


function GraphBox1(props) {
  return (
    <div className='md:w-[18vw] h-[15.1rem] bg-gradient-to-r from-sky-600 to-emerald-600 border rounded-2xl bg-opacity-40 
    text-sky-100 font-bold text-4xl flex items-center justify-center p-[3%] px-5'>
      {props.sign_up}
    </div>
  )
}

export default GraphBox1