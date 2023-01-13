import React from 'react'
import LandingPage2 from '../components/LandingPage2'
import Navbar from '../components/Navbar'
import PageFooter from '../components/PageFooter'
import Image from 'next/image';

function info() {
  return (
    <div className='w-full bg-white '>
      <Navbar/>
      <LandingPage2
        info="How does the Social Market work?"  
      />
      <div className='relative flex flex-wrap items-center bg-white justify-evenly z-100'>
        <div className='relative flex items-center justify-center w-full py-10 text-6xl font-bold bg-white text-sky-900 z-1'>Real Life Scenario</div>
        <div className='items-center md:flex justify-evenly'>
        <div className='md:max-w-[25vw] border rounded-xl bg-gradient-to-r from-sky-600 to-emerald-600 flex flex-col p-5 px-10 items-center mx-8'>
          <h2 className='mb-4 text-4xl text-sky-100'>Phase 1</h2>
          <Image
                src='/piano.png'
                alt=''
                width={150}
                height={150}
                />
            <ul className='p-0 text-xl text-sky-100'>
              <li>For this example, a mid-tier musician has asked Sole Industries to appraise a new album project which will cost $100,000. 
                The artists social equity value came to $1,000,000 and is offering 10% revenue to initial investors. 
                The price for each social equity share will be $10 (1,000,000 / $100,000).</li>
              <li className='p-0 mt-4'>Initial prices: 
                <ul className='p-0 list-disc'>
                  <li className='p-1 ml-4'>Cost of Project: $100,000</li>
                  <li className='p-1 ml-4'>Current Social Equity Value: $1,000,000 </li>
                  <li className='p-1 ml-4'>Price Per Share: $10</li>
                  <li className='p-1 ml-4'>ROI contract: 10% net revenue paid in dividends quarterly</li>
                </ul>
              </li>
            </ul>
        </div>
        <div className='md:max-w-[25vw] border rounded-xl bg-gradient-to-r from-sky-600 to-emerald-600 flex flex-col p-5 px-10 items-center mx-8'>
          <h2 className='mb-2 text-4xl text-sky-100'>Phase 2</h2>
          <Image
                src='/recordIcon.png'
                alt=''
                width={150}
                height={150}
                />
            <ul className='p-0 text-xl text-sky-100'>
              <li>The IPO releases, based on previous notoriety and a dedicated following 100 investors buy up 1000 shares each. (1 investor = $1,000)</li>
              <li>$96,500 goes to the artist to fund the album. (3.5% fee for Sole Industries)</li>
              <li className='p-0 mt-4'>The artist releases the album: 
                <ul className='p-0 list-disc'>
                  <li className='p-1 ml-4'>Album generates $1 million in sales</li>
                  <li className='p-1 ml-4'>Increased their following by 1 million people across all platforms</li>
                  <li className='p-1 ml-4'>Top 25 on the US billboards for 3 weeks</li>
                  <li className='p-1 ml-4'>Increases streaming listens by 50,000 per month</li>
                </ul>
              </li>
            </ul>
        </div>
        <div className='md:max-w-[25vw] border rounded-xl bg-gradient-to-r from-sky-600 to-emerald-600 flex flex-col p-5 px-10 items-center mx-8 pb-14'>
          <h2 className='mb-2 text-4xl text-sky-100'>Phase 3</h2>
            <Image
              src='/money2.png'
              alt=''
              width={150}
              height={150}
            />
            <ul className='p-0 text-xl text-sky-100'>
              <li>From the success of the album release their social equity share price has increased from $10 per share to $35 per share.</li>
              <li>Investors are given 10% of the revenue generated from sales at the end of the quarter.</li>
              <li className='p-0 mt-4'>Initial investors returns: 
                <ul className='p-0 list-disc'>
                  <li className='p-1 ml-4'>Initial investors sell their shares for $3,500</li>
                  <li className='p-1 ml-4'>$1,000 for the 10% revenue was paid out </li>
                  <li className='p-1 ml-4'>Total Profit: $4,500 from a $1,000 investment</li>
                </ul>
              </li>
            </ul>
        </div>
        </div>
        <hr className='border-sky-900 border-[1px] rounded-xl w-[80vw] mt-10'/>
        <div className='relative flex items-center justify-center w-full py-10 text-6xl font-bold bg-white text-sky-900 z-1'>Mockup</div>
        <div className='overflow-hidden border-2 rounded-xl border-sky-600'>
          <a href='https://www.figma.com/proto/Fh14LSDAXdrvdoqWVeUAyd/Sole-Mockup-V4?node-id=1%3A17&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A16' target="_blank">
            <Image
              src='/mockup2.png'
              alt=''
              width={1210}
              height={870}
            />
          </a>
        </div>
        <div className='flex text-center text-2xl bg-opacity-10 border-0 rounded-xl bg-sky-500 p-5 mb-10 max-w-[60vw] maxSm:ml-[15vw] mx-[15vw] mt-10 text-sky-900'>
          This is an interactive mockup that outlines the general features and flow of using this type of social media application. It shows typical features such
          as top charts, different generes, and a page to discover new artists. The most important feature that this mockup describes is the ability to obtain a market 
          value and display it to the public. This makes your likeness a publically traded entity rather than being subject to the many different record/music labels
          that have created so many horror stories is the past. 
        </div>
      </div>
      <PageFooter/>
    </div>
    
  )
}

export default info