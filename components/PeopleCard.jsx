import React from 'react'
import Image from 'next/image'

function PeopleCard(props) {
  return (
    <div className='flex-col justify-center items-center max-w-[20rem] p-5 border-slate-700 border rounded-xl bg-sky-600 m-2 drop-shadow-md'>
        <div className='flex justify-center'>
            <div className='overflow-hidden border-2 border-slate-700 rounded-[50%] drop-shadow-md'>
                <Image
                    src={props.src}
                    alt=''
                    width={129}
                    height={150}
                />
            </div>
        </div>
        <div className='flex-col justify-center text-center text-sky-100'>
            <h1 className='my-3 text-2xl text-sky-100 backdrop-blur-[1rem] bg-sky-100 bg-opacity-0 border-0 rounded-xl'>{props.name}</h1>
            <h1 className='my-3 text-xl text-sky-200 backdrop-blur-[1rem] bg-sky-100 bg-opacity-0 border-0 rounded-xl text-shadow-blue'>{props.category}</h1>
            <div className='bg-sky-100 border-0 backdrop-blur-[1rem] bg-opacity-20 rounded-xl flex-col justify-center p-3 my-3'>
                    <div className=''>Total following: {props.following}</div>
            </div>
            <hr className='border-slate-700 border-[1px] rounded-full w-[50%] mx-[25%] my-2'/>
            <div className='flex flex-wrap justify-center'>
                <div className='bg-sky-100 border-0 backdrop-blur-[1rem] bg-opacity-20 rounded-xl flex-col justify-center p-3 my-1 mx-[3%] min-w-[40%]'>                
                    <div className='text-lg text-slate-700'>Instagram </div>
                    <div> {props.instagram} </div>
                </div>
                <div className='bg-sky-100 border-0 backdrop-blur-[1rem] bg-opacity-20 rounded-xl flex-col justify-center p-3 my-1 mx-[3%] min-w-[40%]'>                
                    <div className='text-lg text-slate-700'>Twitter </div>
                    <div> {props.twitter} </div>
                </div>
                <div className='bg-sky-100 border-0 backdrop-blur-[1rem] bg-opacity-20 rounded-xl flex-col justify-center p-3 my-1 mx-[3%] min-w-[40%]'>                
                    <div className='text-lg text-slate-700'>Youtube </div>
                    <div> {props.youtube} </div>
                </div>
                <div className='bg-sky-100 border-0 backdrop-blur-[1rem] bg-opacity-20 rounded-xl flex-col justify-center p-3 my-1 mx-[3%] min-w-[40%]'>                
                    <div className='text-lg text-slate-700'>Spotify </div>
                    <div> {props.spotify} </div>
                </div>
                <div className='bg-sky-100 border-0 backdrop-blur-[1rem] bg-opacity-20 rounded-xl flex-col justify-center p-3 my-1 mx-[3%] min-w-[40%]'>                
                    <div className='text-lg text-slate-700'>Facebook </div>
                    <div> {props.facebook} </div>
                </div>
                <div className='bg-sky-100 border-0 backdrop-blur-[1rem] bg-opacity-20 rounded-xl flex-col justify-center p-3 my-1 mx-[3%] w-[40%]'>                
                    <div className='text-lg text-slate-700'>TikTok </div>
                    <div> {props.tiktok} </div>
                </div>
            </div>
            <hr className='border-slate-700 border-[1px] rounded-full w-[50%] mx-[25%] my-2'/>
            <div className='bg-sky-100 border-0 backdrop-blur-[1rem] bg-opacity-20 rounded-xl flex-col justify-center p-3 my-3'>
                    <div className=''>Social Equity: {props.social_equity}</div>
            </div>
        </div>
    </div>
  )
}

export default PeopleCard