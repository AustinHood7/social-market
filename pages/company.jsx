import React from 'react'
import LandingPage2 from '../components/LandingPage2'
import Navbar from '../components/Navbar'
import BenefitCard from '../components/BenefitCard'
import PageFooter from '../components/PageFooter'
import TeamCard from '../components/TeamCard'
import { FaArrowRight, FaArrowDown, FaCheckCircle, FaMinusCircle } from 'react-icons/fa';

function company() {
  return (
    <div className='bg-gradient-to-r from-sky-600 to-emerald-600 backdrop-blur-[.5rem]'>
      <Navbar/>
      <LandingPage2
        info='Company'
      />
      <div className='text-sky-900 text-6xl font-bold relative z-1 flex justify-center pt-[10vh] pb-3 min-h-[2em] bg-sky-100'>Business Stages </div>
      <div className='md:flex bg-sky-100 justify-center p-[5rem] relative z-1 items-center'>
        <div className='relative flex flex-col z-1 border-2 border-sky-900 rounded-xl min-w-[20vw] backdrop-blur-[.5rem] items-center p-5 bg-gradient-to-r from-sky-600 to-emerald-600'>
          <FaCheckCircle size={200} color='#16a34a' className='border-0 rounded-full bg-white'/>
          <div className='text-6xl text-sky-100'>
            Pre-IPO
          </div>
          <div className='mt-4 text-2xl text-sky-200 px-[1em]'>
          Pre-IPO, pre-initial public offering is a late-stage for a private company to raise funds in advance of its listing on a public exchange.
          </div>
        </div>
        <div className='m-5 text-6xl text-sky-900 hidden md:block'>
            <FaArrowRight/>
        </div>
        <div className='m-5 text-6xl text-sky-900 md:hidden flex justify-center'>
            <FaArrowDown/>
        </div>
        <div className='relative flex flex-col z-1 backdrop-blur-[.5rem] border-2 border-sky-900 rounded-xl min-w-[20vw] items-center p-5 bg-gradient-to-r from-sky-600 to-emerald-600'>
          <FaMinusCircle size={200} color='#dc2626' className='border-0 rounded-full bg-white'/>
          <div className='text-6xl text-center text-sky-100'>
            IPO Launch
          </div>
          <div className='mt-4 text-2xl text-sky-200'>
          An initial public offering (IPO) or stock launch is a public offering in which shares of a company are sold to institutional investors and usually also to retail 
          (individual) investors.
          </div>
        </div>
        <div className='m-5 text-6xl text-sky-900 hidden md:block'>
            <FaArrowRight/>
        </div>
        <div className='m-5 text-6xl text-sky-900 md:hidden flex justify-center'>
            <FaArrowDown/>
        </div>
        <div className='relative flex flex-col z-1 backdrop-blur-[.5rem] border-2 border-sky-900 rounded-xl min-w-[15vw] items-center p-5 bg-gradient-to-r from-sky-600 to-emerald-600'>
        <FaMinusCircle size={200} color='#dc2626' className='border-0 rounded-full bg-white'/>
          <div className='text-6xl text-sky-100'>
            Returns
          </div>
          <div className='mt-4 text-2xl text-sky-200'>
          The stage in which the investors see the returns on their investments and can determine if the company has performed up to expectations and have the option to 
          invest more within the company.
          </div>
        </div>
      </div>
      <div className='text-sky-900 text-6xl font-bold relative z-1 flex justify-center pt-[10vh] bg-sky-100 pl-10 md:pl-0'>Products and Services</div>
      <div className='bg-sky-100 relative z-1 pt-10'>
        <div className='flex text-center text-2xl bg-opacity-10 backdrop-blur-[.5rem] pt-10 text-sky-900 bg-sky-100 relative z-1 border-2 border-sky-900 rounded-xl bg-sky-500 p-5 pb-10 max-w-[80vw] maxSm:ml-[15vw] mx-[15vw]'>
            The Social Market is a multi-stage market similar model to the traditonal Stock Market. 
            There are billions of people around the world who are involved in the entertainment industry,
              as there are millions of companoes around the world. Srock markets include the New York Stock 
              Exchange (NYSE), Over the Counter Bulletin Board(OTCBB) and Pink Sheets(Pennies). 
              The Social Market will have similar levels in our market.
        </div>
      </div>
      <div className='md:flex-row pt-10 relative z-1 justify-evenly bg-sky-100 pb-5 flex flex-col gap-6'>
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
      <div className='text-sky-900 text-6xl font-bold relative z-1 flex justify-center pt-[10vh] 
      pb-3 min-h-[2em] bg-sky-100'>Team </div>

      <div className='md:flex flex-wrap relative z-1 bg-sky-100 justify-evenly'>
        <div className='py-10'>
          <TeamCard 
            position='Software Developer'
            name='Austin Hood'
            description='Works on software development, mockups, requirements elicitation, and software architecture'
            src='/me.png'        
          />
        </div>
        <div className='pb-10'>
          <TeamCard 
            position='CEO'
            name='Parker Joyce'
            description='Works on software development, mockups, requirements elicitation, and helping to structure the overall software product.'
            src=''        
          />
        </div>
      </div>
      <PageFooter />
    </div>
  )
}   

export default company