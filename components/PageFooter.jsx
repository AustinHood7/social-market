import React from 'react'
import Image from 'next/image'

function PageFooter() {
  return (
        <div className="h-[16vh] flex justify-between bg-sky-700 items-center z-10 relative text-sky-100 px-[5%]">
            <a href='SoleIndustries.com'>
            2022 © SoleIndustries All Rights Reserved
            </a>
            <Image
                src='/logo_White.png'
                alt=''
                width={250}
                height={250}
            />
            <a className="mailto" href="mailto:ParkerJoyce@soleindustries.com">
                <div className='p-3 border-0 md:p-6 bg-gradient-to-r from-sky-600 to-emerald-600 rounded-2xl maxSm:ml-5'>
                    Send us a message
                </div>
            </a>
        </div>
  )
}

export default PageFooter