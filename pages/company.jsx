import React from 'react'
import LandingPage2 from '../components/LandingPage2'
import Navbar from '../components/Navbar'

function company() {
  return (
    <div>
      <Navbar/>
      <LandingPage2
        info='Company'
      />
      <div className='flex h-[100vh] bg-gradient-to-r from-sky-600 to-emerald-600 justify-evenly py-[14vh]'>
        <div className='relative flex flex-col z-1 border-0 rounded-xl w-[15vw] backdrop-blur-[.5rem] items-center p-5'>
          <div className='border-0 rounded-full bg-emerald-500 w-[10vw] min-h-[10vw]'></div>
          <div className='text-6xl text-sky-100'>
            Pre-IPO
          </div>
          <div className='text-6xl text-sky-100'>
            (Current)
          </div>
          <div className='mt-4 text-2xl text-sky-200'>
          Pre-IPO, pre-initial public offering is a late-stage for a private company to raise funds in advance of its listing on a public exchange.
          </div>
        </div>
        <div className='relative flex flex-col z-1 backdrop-blur-[.5rem] border-0 rounded-xl w-[15vw] items-center p-5'>
          <div className='border-0 rounded-full bg-red-600 w-[10vw] min-h-[10vw]'></div>
          <div className='text-6xl text-center text-sky-100'>
            IPO Launch
          </div>
          <div className='mt-4 text-2xl text-sky-200'>
          An initial public offering (IPO) or stock launch is a public offering in which shares of a company are sold to institutional investors and usually also to retail 
          (individual) investors.
          </div>
        </div>
        <div className='relative flex flex-col z-1 backdrop-blur-[.5rem] border-0 rounded-xl w-[15vw] items-center p-5'>
          <div className='border-0 rounded-full bg-red-600 w-[10vw] min-h-[10vw]'></div>
          <div className='text-6xl text-sky-100'>
            Returns
          </div>
          <div className='mt-4 text-2xl text-sky-200'>
          The stage in which the investors see the returns on their investments and can determine if the company has performed up to expectations and have the option to 
          invest more within the company.
          </div>
        </div>
      </div>
    </div>
  )
}

export default company