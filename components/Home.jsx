import LandingPage from './LandingPage'
import PeopleCard from './PeopleCard'
import PageFooter from './PageFooter'
import TextBox1 from './TextBox1'
import BenefitCard from './BenefitCard'
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';

const Home = () => {
    return (
        <>
        <div className='w-full overflow-hidden'>
            <LandingPage/>
            <div className='relative z-20 flex justify-center pt-[5vh] bg-white text-sky-900'>
                <div className='flex flex-col items-center justify-center text-center'>
                    <span className='text-4xl font-bold'>What is The Social Market? </span>
                    <div className='flex items-center justify-center w-[100vw] mt-10 py-10 border maxSm:flex-col md:justify-evenly bg-gradient-to-r from-sky-600 to-emerald-600'>
                        <PeopleCard
                            name="Lebron James"
                            following="206M"
                            category="Athletics"
                            instagram="139M"
                            twitter="52M"
                            youtube="-"
                            social_equity="TBD"
                            spotify="-"
                            tiktok="-"
                            facebook="91M"
                            src='/lebronJames300x300.png'
                        />
                        <PeopleCard
                            name="Justin Bieber"
                            following="569M"
                            category="Music"
                            instagram="267M"
                            twitter="113M"
                            youtube="70M"
                            social_equity="109M"
                            spotify="73M"
                            tiktok="26M"
                            facebook="91M"
                            src='/JustinBieberSquare.png'
                        />                        
                        <PeopleCard
                            name="J-Cole"
                            following="56M"
                            category="Music"
                            instagram="-"
                            twitter="14M"
                            youtube="7M"
                            social_equity="35M"
                            spotify="29M"
                            tiktok="-"
                            facebook="6M"
                            src='/j-coleSquare.png'
                        />                
                        <PeopleCard
                            name="PewDiePie"
                            following="140M"
                            category="Social Media"
                            instagram="21.6M"
                            twitter="520K"
                            youtube="111M"
                            social_equity="TBD"
                            spotify="417K"
                            tiktok="-"
                            facebook="9M"
                            src='/pewdiepieSquare.png'
                        />
                        <PeopleCard
                            name="Charli D'Amelio"
                            following="206M"
                            category="Social Media"
                            instagram="49M"
                            twitter="5M"
                            youtube="9M"
                            social_equity="TBD"
                            spotify="-"
                            tiktok="150M"
                            facebook="3M"
                            src='/charlieSquare.png'
                        />
                    </div>
                    <div className='my-10 text-4xl font-bold text-center'>Take the power back</div>
                    <div className='flex text-center text-2xl bg-opacity-10 border-0 rounded-xl bg-sky-500 p-5 mb-10 max-w-[80vw] maxSm:ml-[15vw] mx-[15vw]'>
                        With the expansion of digital media over the past decade millions of people see opportunites every day; whether stumbling across an exciting new start-up
                        , an up and coming musician, new actors in their premier film, or a first-year athlete. Accredited investors are the ony people able to tap into this market.
                        Allowing the general public access through a public market of TV shows, a new artist album, or a revolutionary new start-up through a public market would allow 
                        seemingly endless opportunities across the globe. 
                    </div>
                    <div className='mb-[2rem] max-w-[100vw]'>
                        <div className='hidden md:block'>
                            <iframe 
                                width="853" 
                                height="480" 
                                src="https://www.youtube.com/embed/daPdjNf521w" 
                                title="Sole Industries The Social Market" 
                                frameBorder="0" 
                                allow="accelerometer autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                            />
                        </div>
                        <div className='md:hidden border-2 rounded-xl border-sky-900 overflow-hidden'>
                            <iframe 
                                    width="400" 
                                    height="400" 
                                    src="https://www.youtube.com/embed/daPdjNf521w" 
                                    title="Sole Industries The Social Market" 
                                    frameBorder="0" 
                                    allow="accelerometer autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowFullscreen
                                />
                        </div>
                    </div>     
                    <hr className='border-sky-900 border-[1px] rounded-xl w-[80vw]'/>
                    <div className='my-10 text-4xl font-bold text-center'>How does it work? </div>
                    <div className='maxSm:flex-col flex text-center justify-center maxSm:items-center'>
                        <div className='md:flex'>
                            <TextBox1 
                                input='Sign up for the Social Market and browse all participating creators'
                                boxText="Sign up"
                            />
                            <div className='m-5 mt-[25%] text-6xl text-sky-900 hidden md:block'>
                                <FaArrowRight/>
                            </div>
                            <div className='m-5 text-6xl text-sky-900 md:hidden flex justify-center'>
                                <FaArrowDown/>
                            </div>
                        </div>
                        <div className='mt-[5%] md:flex'>
                            <TextBox1 
                                input='See what is on the Social Market and check the Social Equity of your favorite 
                                artists'
                                boxText="Browse the Social Market"
                            />
                             <div className='m-5 mt-[25%] text-6xl text-sky-900 hidden md:block'>
                                <FaArrowRight/>
                            </div>
                            <div className='m-5 text-6xl text-sky-900 md:hidden flex justify-center'>
                                <FaArrowDown/>
                            </div>
                        </div>
                        <div className='mt-[10%] md:flex'>
                            <TextBox1 
                                input='Send a request to be evaluated and become a publically traded figure'
                                boxText="Opt into trading on the market"
                            />
                            <div className='m-5 mt-[25%] text-6xl text-sky-900 hidden md:block'>
                                <FaArrowRight/>
                            </div>
                            <div className='m-5 text-6xl text-sky-900 md:hidden flex justify-center'>
                                <FaArrowDown/>
                            </div>
                        </div>
                        <div className='mt-[15%]'>
                            <TextBox1 
                                input='Sign up for the Social Market and browse all participating creators'
                                boxText="Trade or invest on the Social Market"
                            />
                        </div>
                    </div>
                        <hr className='border-sky-900 border-[1px] rounded-xl w-[80vw] mx-[10vw] mt-5'/>
                        <div className='relative flex items-center justify-center w-full py-10 text-6xl font-bold bg-white text-sky-900 z-1'>Benefits</div>
                        <div className='py-10 bg-white flex justify-evenly gap-10 flex-col md:flex-row'>
                            <BenefitCard 
                            title='Users'
                            info="Users benefit from using this product because they are better able to monitize and own their own online persona.
                            They can create new products and follow their dreams with the help of supporters and already existing followers"
                            src='/users.png'
                            />
                            <BenefitCard 
                            title='Investors'
                            info="Investors can benefit from the creation of this platform by gaining an opportunity to invest directly to their 
                            favorite content creators and athletes. It is also a great opportunity to invest in individual products, such as an upcoming
                            album or product"
                            src='/coins.png'
                            />
                            <BenefitCard 
                            title='Developers'
                            info="The developers and creators of this product benefit from this by taking a small portion of each transaction similar to how brokerages operate and is very small in comparison to record labels or management companies."
                            src='/developersWhite.png'
                            />
                        </div>
                </div>
                
            </div>
            <PageFooter />
            </div>
        </>   
    )
}

export default Home