import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { FaGithub } from 'react-icons/fa';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { MdAlternateEmail } from 'react-icons/md';

const Footer = () => {
    return (
        <div className="h-[8vh] flex justify-center bg-sky-700 items-center z-10 relative">
            <div className='mx-6'>
                <TiSocialLinkedinCircular color='#e0f2fe' size={60}/>
            </div>
            <div className='mx-6'>
                <FaGithub color='#e0f2fe' size={45}/>
            </div>
            <div className='mx-6'>
                <AiFillTwitterCircle color='#e0f2fe' size={55}/>
            </div>
            <div className='mx-6'>
                <MdAlternateEmail color='#e0f2fe' size={55}/>
            </div>
        </div>
    )
}

export default Footer