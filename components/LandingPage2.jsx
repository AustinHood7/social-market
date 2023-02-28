import Image from 'next/image'
import Footer from '../components/Footer'
import Particle from '../components/Particle'

const LandingPage2 = (props) => {
    return (
        <>
            <div className="h-screen bg-gradient-to-r from-sky-600 to-emerald-600 flex flex-col max-w-[100vw]">
                <div className='relative z-0'>            
                    <Particle/>
                </div>
                <div className='flex justify-center items-center h-[92vh] z-100 relative'>
                    <div className='m-0 border-0 rounded-full backdrop-blur-[.5rem] maxSm:hidden'>
                        <Image
                            src='/Logo_White.png'
                            alt=''
                            width={500}
                            height={500}
                        />
                    </div>
                    <hr className='border-sky-500 border-[1px] rounded-lg w-[15rem] md:mr-10 maxSm:hidden'/>
                    <div className="maxSm:mr-0 text-sky-100 border-0 backdrop-blur-[.5rem] rounded-xl md:p-5 max-w-[25vw] flex justify-center">
                        <div className='text-6xl font-bold ]'>{props.info}</div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
        
    )
}

export default LandingPage2