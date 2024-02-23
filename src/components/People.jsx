import React from 'react'
import Container from '../tools/Container'

import Peoples from '../assets/people.png'
import Ticket from '../assets/ticket.png'

const People = () => {
  return (
    <div className='py-10 lg:py-20 lg:px-5 xl:px-0 mb-20 xl:flex items-center'>
        {/* bloc Img */}
        <div className='w-full xl:w-[67%] mb-[64px] xl:mb-0'>
            <img src={Peoples} alt="personne" className='xl:w-[1000px]'/>
        </div>

        <div className='px-2 lg:px-0 xl:mr-[200px] xl:w-[33%]'>
            {/* bloc texte */}
            <div className='text-center xl:text-start'>
                {/* bloc 1 */}
                <div className='w-full xl:mt-[50px] xl:relative'>
                    <div className='mb-[32px]'>
                        <h1 className='text-secondaire text-sm mb-[16px] uppercase font-bold md:text-[23px]'>Travel Point</h1>
                        <p className='text-[32px] font-bold md:text-[40px] xl:text-[44px]'>We helping you find your dream location</p>
                    </div>

                    <p className='text-sm md:text-[18px] text-[#19182599]'>Contrary to popular belief, Lorem Ipsum is not<br className='hidden xl:flex'/>simply random text. It has roots in a piece of<br className='hidden xl:flex'/>classical Latin literature from 45 BC.</p>

                    {/* img du ticket */}
                    <div className='hidden xl:flex'>
                        <img src={Ticket} alt="" className='absolute -right-36 -bottom-20' />
                    </div>
                </div>

                {/* bloc 2 */}  
                <div className='lg:grid lg:grid-cols-2 lg:grid-rows-2 lg:gap-7 mt-[32px] lg:mt-[64px]'>
                    <div className='border-[1px] border-[#19182532] rounded-[32px] lg:col-span-1 text-center p-[32px]'>
                        <h1 className='text-tertiaire text-[35px] font-bold'>500+</h1>
                        <p className='text-[18px]'>Holiday Package</p>
                    </div>

                    <div className='border-[1px] border-[#19182532] rounded-[32px] lg:col-span-1 text-center p-[32px] mt-5 lg:mt-0'>
                        <h1 className='text-tertiaire text-[35px] font-bold'>100</h1>
                        <p className='text-[18px]'>Luxury Hotel</p>
                    </div>

                    <div className='border-[1px] border-[#19182532] rounded-[32px] text-center p-[32px] lg:col-span-1 mt-5 lg:mt-0'>
                        <h1 className='text-tertiaire text-[35px] font-bold'>7</h1>
                        <p className='text-[18px]'>Premium Airlines</p>
                    </div>

                    <div className='border-[1px] border-[#19182532] rounded-[32px] text-center p-[32px] lg:col-span-1 mt-5 lg:mt-0'>
                        <h1 className='text-tertiaire text-[35px] font-bold'>2k+</h1>
                        <p className='text-[18px]'>Happy Customer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default People