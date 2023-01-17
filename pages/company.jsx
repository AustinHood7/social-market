import React from 'react'
import LandingPage2 from '../components/LandingPage2'
import Navbar from '../components/Navbar'
import BenefitCard from '../components/BenefitCard'
import PageFooter from '../components/PageFooter'
import { FaArrowRight } from 'react-icons/fa';

function company() {
  return (
    <div className='bg-gradient-to-r from-sky-600 to-emerald-600 backdrop-blur-[.5rem]'>
      <Navbar/>
      <LandingPage2
        info='Company'
      />
      <div className='text-sky-100 text-6xl font-bold relative z-1 flex justify-center mt-[10vh]'>Business Stages </div>
      <div className='flex bg-gradient-to-r from-sky-600 to-emerald-600 justify-center p-[5rem]'>
        <div className='relative flex flex-col z-1 border-0 rounded-xl min-w-[20vw] backdrop-blur-[.5rem] items-center p-5 bg-sky-100 bg-opacity-5'>
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
        <div className='m-5 text-6xl text-sky-200 flex items-center'>
          <FaArrowRight/>
        </div>
        <div className='relative flex flex-col z-1 backdrop-blur-[.5rem] border-0 rounded-xl min-w-[20vw] items-center p-5 bg-sky-100 bg-opacity-5'>
          <div className='border-0 rounded-full bg-red-600 w-[10vw] min-h-[10vw]'></div>
          <div className='text-6xl text-center text-sky-100'>
            IPO Launch
          </div>
          <div className='mt-4 text-2xl text-sky-200'>
          An initial public offering (IPO) or stock launch is a public offering in which shares of a company are sold to institutional investors and usually also to retail 
          (individual) investors.
          </div>
        </div>
        <div className='m-5 text-6xl text-sky-200 flex items-center'>
          <FaArrowRight/>
        </div>
        <div className='relative flex flex-col z-1 backdrop-blur-[.5rem] border-0 rounded-xl min-w-[15vw] items-center p-5 bg-sky-100 bg-opacity-5'>
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
      <div className='text-sky-100 text-6xl font-bold relative z-1 flex justify-center mt-[10vh]'>Products and Services</div>
      <div className='flex text-center text-2xl bg-opacity-10 backdrop-blur-[.5rem] mt-10 bg-sky-100 text-sky-100 relative z-1 border-0 rounded-xl bg-sky-500 p-5 mb-10 max-w-[80vw] maxSm:ml-[15vw] mx-[15vw]'>
           The Social Market is a multi-stage market similar model to the traditonal Stock Market. 
           There are billions of people around the world who are involved in the entertainment industry,
            as there are millions of companoes around the world. Srock markets include the New York Stock 
            Exchange (NYSE), Over the Counter Bulletin Board(OTCBB) and Pink Sheets(Pennies). 
            The Social Market will have similar levels in our market.
      </div>
      <div className='flex mt-10 relative z-1 justify-evenly'>
        <BenefitCard 
          title='The Social Market'
          info="Large investments for large creators, projects, untimately low-risk investments given their work and social-equity
          The creators themselves are in control of issuing new shares to people. Users are vetted for accuracy and will report to Sole Industries with quarterly reports"
          src='/developersWhite.png'
        />
        <BenefitCard 
          title='OTCBB'
          info="This market will be active 24/7 with bidding and purchasing from investors looking to sell their shares of a given investment. 
          All bids/purchasing will not publish on the price until the next morning at 0900, 
          but can be tracked using the Social Market,"
          src='/developersWhite.png'
        />        
        <BenefitCard 
        title='Pennies'
        info="This is a market for high-risk investments to include people who are just starting or early in their entertainment careers
        creators worth under $100,000 will be placed on this market"
        src='/developersWhite.png'
        />
      </div>
      <PageFooter />
    </div>
  )
}   

export default company