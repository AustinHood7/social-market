import {useState} from "react";
import Link from 'next/link'

const Navbar = () => {

    const [nav,setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return(
        <div className="w-full h-[80px] bg-sky-600 absolute 
        font-body text-sky-400 bg-opacity-0 z-50">
            <div className="flex items-center h-full text-xl md:justify-between">
                <div className="flex items-center ml-[2.5rem]">
                </div>
                <div className="">
                    <div className="nav">
                        <ul className="md:float-right flex border-0 bg-sky-600 rounded-l-full backdrop-blur-[1rem] bg-opacity-0 items-center justify-center">
                            <li className="mx-3 my-2 transition-all duration-200 border-0 rounded-full hover:text-shadow-blue maxSm:text-sm maxSm:mx-1">
                            <span className="text-sky-100"> <Link href="/">Home</Link></span></li>
                            <li className="mx-3 my-2 transition-all duration-200 border-0 rounded-full hover:text-shadow-blue maxSm:text-sm maxSm:mx-1">
                            <span className="text-sky-100"> <Link href="/info">Info</Link></span></li>
                            <li className="mx-3 my-2 transition-all duration-200 border-0 rounded-full hover:text-shadow-blue maxSm:text-sm maxSm:mx-1">
                            <span className="text-sky-100"> <Link href="/resources">Resources</Link></span></li>
                            <li className="mx-3 my-2 transition-all duration-200 border-0 rounded-full hover:text-shadow-blue maxSm:text-sm maxSm:mx-1">
                            <span className="text-sky-100"> <Link href="/company">Company</Link></span></li>
                            <div className="resumeButton">
                                <li className="float-right px-4 mx-4 mr-8 text-xl transition-all border-0 maxSm:text-sm maxSm:mx-1 bg-opacity-20 rounded-xl md:flex hover:text-shadow-blue bg-sky-300 text-sky-100"><Link href="/contact">Contact</Link></li>
                            </div>
                        </ul>
                    </div>
                </div>
                
            </div>

            <ul className={!nav ? 'hidden' : "grid float-right w-full bg-gray-900 font-alt font-bold md:hidden z-20"}>
                <li className="w-full mt-4 text-2xl border-y-2 border-primary rounded-xl text-shadow-blue hover:bg-primary hover:text-gray-900 hover:shadow-brightGlow">Home</li>
                <li className="w-full text-2xl border-y-2 border-primary rounded-xl text-shadow-blue hover:bg-primary hover:text-gray-800 hover:shadow-brightGlow">Projects</li>
                <li className="w-full text-2xl border-y-2 border-primary rounded-xl text-shadow-blue hover:bg-primary hover:text-gray-800 hover:shadow-brightGlow">Work</li>
                <li className="w-full text-2xl border-y-2 border-primary rounded-xl text-shadow-blue hover:bg-primary hover:text-gray-800 hover:shadow-brightGlow">Contact</li>
            </ul>
        </div>
    )
} 

export default Navbar