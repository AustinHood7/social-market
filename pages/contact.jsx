import React from 'react'
import LandingPage2 from '../components/LandingPage2'
import Navbar from '../components/Navbar'
import { MdEmail } from 'react-icons/md'
import { BsPersonCircle} from 'react-icons/bs'
import { FaPhone } from 'react-icons/fa'
import PageFooter from '../components/PageFooter'
import { Container } from 'postcss'


function contact() {
  return (
    <div className=''>
      <Navbar/>
      <LandingPage2
        info="Contact"  
      />
      <div className='relative z-20 flex justify-center pt-[5vh] bg-white text-sky-900'>
        <div className='flex flex-col gap-6'>
          <h1 className='text-2xl'>Creator:</h1>
            <div className='flex items-center gap-6'>
              <BsPersonCircle color='sky-900' size={45}/>
              <a className='text-xl'>Parker Joyce</a>
            </div>
          <h1 className='text-2xl'>Phone:</h1>
          <div className='flex items-center gap-6'>
              <FaPhone color='sky-900' size={45}/>
              <a className='text-xl'>(239) 284-9089</a>
            </div>
          
          <h1 className='text-2xl'>Email</h1>
          <div className='flex text-xl items-center gap-6 pb-10'>
            <a className='' href="mailto:parkerjoyce@soleindustries.com"><MdEmail color='sky-900' size={45}/></a>
            <span className=''>ParkerJoyce@SoleIndustries.com</span>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  )
}

export default contact