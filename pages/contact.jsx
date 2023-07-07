import React from 'react'
import LandingPage2 from '../components/LandingPage2'
import Navbar from '../components/Navbar'
import { MdEmail } from 'react-icons/md'
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
        <div className='flex flex-col gap-10'>
          <h1 className='text-2xl'>Linkedin:</h1>
          <a className='text-xl' href="https://www.linkedin.com/in/austin-hood7/">https://www.linkedin.com/in/austin-hood7/</a>
          <h1 className='text-2xl'>Github:</h1>
          <a className='text-xl' href="https://www.linkedin.com/in/austin-hood7/">https://www.linkedin.com/in/austin-hood7/</a>
          <h1 className='text-2xl'>Email</h1>
          <a className='pb-10' href="mailto:parkerjoyce@soleindustries.com"><MdEmail color='sky-900' size={45}/></a>
        </div>
      </div>
      <PageFooter />
    </div>
  )
}

export default contact