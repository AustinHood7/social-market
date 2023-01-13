import React from 'react'
import LandingPage2 from '../components/LandingPage2'
import Navbar from '../components/Navbar'
import Image from 'next/image';
import PageFooter from '../components/PageFooter';


function resources() {
  return (
    <div>
      <Navbar/>
      <LandingPage2
        info="Resources"
        />
      <div className='relative flex flex-wrap items-center bg-white justify-evenly z-100'>
      <div className='flex items-center justify-center w-full py-10 text-6xl font-bold text-sky-900 '>A deeper look</div>
        <div className='flex w-full bg-gradient-to-r from-sky-600 to-emerald-600 px-[5vw] justify-evenly py-10 items-center maxSm:flex-col'>
          <div className='text-2xl text-sky-100 md:max-w-[30vw]'>
              The entertainment industry is worth $2.5 trillion dollars globally up $400 billion since 2018, coupled with the rise of social media millions of people have now become 
              a globally recognizable brand more so than companies.  Social equity has now become one of the most valuable assets in the online world, the Social Market evaluates the 
              social equity, revenue, and other metrics. This social equity value allows a new investment tool to invest in projects like albums, movies, games, or athletics on a globally 
              accessible public trading platform. 
              <ul className='ml-10 list-disc'>
                <li>Esports // Video Games ($150 Billion)</li>
                <li>TV // Film ($380 Billion)</li>
                <li>Music ($113 Billion)</li>
                <li>Athletics ($501.5 Billion)</li>
              </ul>
              The entertainment industry is projected to have an annual growth of 13% over the next five years. 
          </div>
          <div className='text-2xl text-sky-100 md:max-w-[35vw] mx-[5vw] flex-col'>
            Gen-Z / Millennials are investing in the content of 750,000 creators. The Social Market is giving the investors a monetary return for this venture. 
            The increase in interest with investing shows the market is ripe for a new investing platform for the entertainment industry. 
            <div className='my-[2vh]'>
              <div className='overflow-hidden border rounded-2xl border-slate-700 w-[74%]'>
                <Image
                  src={'/marketSize3-2.png'}
                  alt=''
                  width={500}
                  height={330}
                />
              </div>
            </div>
            Paid subscription services like Patreon and Twitch allow a creator's fan base to pay a monthly fee to fuel a creator's content.
            Approximately 10 million people subscribe to over 750,000 creators who utilize these paid subscriptions as a form of investing in their content. 
            This is likely a factor to why many people are investing less into the traditional market as the trend presents on the bottom graph. 
          </div>
        </div>
      </div>
      <hr className='border-sky-900 border-[1px] rounded-xl w-[80vw] mx-[10vw] '/>
      <div className='relative flex flex-col items-center bg-white z-1'>
        <div className='relative flex items-center justify-center w-full py-10 text-6xl font-bold bg-white text-sky-900 z-1'>Under the hood</div>
        <div className='text-sky-900 max-w-[75vw] text-xl border-2 border-sky-900 rounded-xl p-[3rem] bg-sky-100'>
        With the implementation of a Central Bank Digital Currency (CBDC) from the Federal Reserve (Fed) the government understands that a digital market is on the horizon. 
        Social media has become more of a business enterprise than staying in touch with friends. Social media influencers, artists, movies, tv shows, and athletes are allowing 
        fans to fund projects with GoFundMe to stock options in the Green Bay Packers. Influencer marketing is now a $2.5 trillion industry, up $400 billion three years ago. 
        This influencer market has grown on average 146% for the past five years. The entertainment industry is growing annually by 13%. Top creators like Taylor Swift have had 
        multiple controversies regarding the power of record labels. People want a way to help their favorite entertainers create content. With the entertainment market in a huge 
        boom due to COVID-19, the multiple controversies with labels taking power away from creators, and alternative investments explosion Sole Industries “The Social Market” 
        is in the perfect position for filling the market need. 
        <ul className='my-2'>
            <li>
            On Jun 23, 2022, Federal Reserve Chair Powell stated the “Federal Reserve understand the time of a digital market is coming and it’s coming quick.” 
            This indicates a strong shift dynamic shift to a more digital market within 5-10 years.  
            </li>
            <li>
            On Jun 23, 2022, Chairwomen Waters & the FED recognized the importance a need to decrease volatility of the cryptocurrency market. 
            The Social Market does exactly that but giving a purpose for CBDC on a custom market
            </li>
          </ul>
          <div className='md:flex justify-evenly'>
            <a href='https://www.federalreserve.gov/newsevents/speech/powell20220617a.htm'>
              <div className='border rounded-2xl border-slate-700 my-[2rem] mx-5 overflow-hidden filter hue-rotate-60 blur-sm hover:hue-rotate-0 hover:blur-0
              transition ease-in-out delay-150'>
                <Image
                    src={'/powell934-717.png'}
                    alt=''
                    width={535}
                    height={412}
                />
              </div>
            </a>
            <a href='https://financialservices.house.gov/news/documentsingle.aspx?DocumentID=408969'>
              <div className='border rounded-2xl border-slate-700 my-[2rem] mx-5 overflow-hidden filter hue-rotate-60 blur-sm hover:hue-rotate-0 hover:blur-0
              transition ease-in-out delay-150'>
                <Image
                    src={'/watersLg.png'}
                    alt=''
                    width={535}
                    height={412}
                />
              </div>
            </a>
          </div>
        </div>
        <div className='mx-[25vw] text-center my-10 text-4xl font-bold text-sky-900'>Resources </div>
        <div className='flex mx-4 my-8 justify-evenly maxSm:flex-col text-sky-900'>
              <div className='flex-col mx-4 text-2xl font-bold text-center'>
                  CBDC
                  <a href='https://www.federalreserve.gov/central-bank-digital-currency.htm'>
                          <div className='border rounded-2xl border-slate-700 my-[2rem] mx-5 overflow-hidden filter hue-rotate-60 blur-sm hover:hue-rotate-0 hover:blur-0
                          transition ease-in-out delay-150'>
                              <Image
                                  src={'/cbdc412x412.png'}
                                  alt=''
                                  width={412}
                                  height={412}
                              />
                          </div>
                  </a>
              </div>

              <div className='flex-col mx-4 text-2xl font-bold text-center'>
                  Crypto-currency
                  <a href='https://www.kaspersky.com/resource-center/definitions/what-is-cryptocurrency'>
                          <div className='border rounded-2xl border-slate-700 my-[2rem] mx-5 overflow-hidden filter hue-rotate-60 blur-sm hover:hue-rotate-0 hover:blur-0
                          transition ease-in-out delay-150'>
                              <Image
                                  src={'/cryptoSquare.png'}
                                  alt=''
                                  width={412}
                                  height={412}
                              />
                          </div>
                  </a>
              </div>

              <div className='flex-col mx-4 text-2xl font-bold text-center'>
                  CBDC Regional Map
                  <a href='https://cbdctracker.org/'>
                      <div className='border rounded-2xl border-slate-700 my-[2rem] mx-5 overflow-hidden filter hue-rotate-60 blur-sm hover:hue-rotate-0 hover:blur-0
                      transition ease-in-out delay-150'>
                          <Image
                              src={'/cbdcTracker1x1.png'}
                              alt=''
                              width={412}
                              height={412}
                          />
                      </div>
                  </a>
              </div>
          </div>
        </div>
        <PageFooter/>
    </div>
  )
}

export default resources