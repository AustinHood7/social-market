import Image from 'next/image'
import Particle from '../components/Particle'
import Footer from '../components/Footer'

const LandingPage = () => {
    return (
        <>
            <div className="flex-col items-center h-screen bg-gradient-to-r from-sky-600 to-emerald-600">
                <div className='relative z-0'>            
                    <Particle/>
                </div>
                <div className='flex justify-center items-center h-[92vh] z-100 relative'>
                    <div className='m-0 border-0 rounded-full backdrop-blur-[.5rem] maxSm:hidden'>
                            <Image
                                src='/logo_White.png'
                                alt=''
                                width={500}
                                height={500}
                            />
                        </div>
                        <hr className='border-sky-500 border-[1px] rounded-lg w-[15rem] mr-10 maxSm:hidden'/>
                        <div className="text-sky-100 border-0 backdrop-blur-[.5rem] rounded-xl p-5 maxSm:ml-[10vw]">
                            <div className="text-2xl">Welcome to <h1 className="font-bold text-8xl">The</h1></div>
                            <h1 className="mt-3 font-bold text-8xl">Social Market</h1>
                            <div className='mt-5 text-2xl text-blue-200'>Creating better opportunities for creators and investors</div>
                            <button className='flex items-center p-5 m-5 mt-10 ml-10 text-xl border-sky-500 rounded-2xl bg-gradient-to-r from-emerald-600 to-sky-600 bg-opacity-20'>
                                Contact Us
                            </button>
                        </div>
                </div>
                <Footer />
            </div>
        </>
        
    )
}

export default LandingPage