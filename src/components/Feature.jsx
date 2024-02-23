import React from 'react'
import Container from '../tools/Container'

import LocationWhite from '../assets/localWhite.svg'
import Calendar from '../assets/calendar.svg'
import Ticket from '../assets/ticket.svg'
import Features from '../assets/features.png'

const Feature = () => {
  return (
    <>

        {/* bloc principale */}
        <div className='w-full p-[20px] lg:p-[32px] flex flex-col-reverse xl:flex-row xl:px-0 xl:py-[64px] xl:justify-between xl:items-center mb-10 px-2 lg:px-0'>
            
            {/* blocs du texte */}
            <div className='w-full xl:w-[45%] xl:ml-[200px]'>
                <div className='mb-[32px] text-center xl:text-start'>
                    <h1 className='text-secondaire text-sm mb-[16px] uppercase font-bold md:text-[23px]'>Key features</h1>
                    <p className='text-[32px] font-bold md:text-[40px] xl:text-[44px]'>We offer best services</p>
                    <p className='text-sm md:text-[18px] text-[#19182599] mt-[32px]'>Contrary to popular belief, Lorem Ipsum is not<br className='hidden xl:flex'/>simply random text. It has roots in a piece of<br className='hidden xl:flex'/>classical Latin literature from 45 BC.</p>
                </div>

                <div className=''>
                    <div className='p-[32px] lg:flex lg:items-center'>
                        <div className='p-[33px] bg-tertiaire w-[100px] h-[100px] rounded-[32px] mb-[32px] '>
                            <img src={LocationWhite} alt="" className='w-[34px] h-[40px]' />
                        </div>

                        <div className='lg:mb-[20px] lg:ml-[19px]'>
                            <h1 className='text-[23px] font-bold mb-[8px]'>We offer best services</h1>
                            <p className='text-sm md:text-[18px] text-[#19182599]'>Lorem Ipsum is not simply <br className='sm:hidden'/>random text</p>
                        </div>
                    </div>

                    <div className='border-[1px] border-[#19182532] rounded-[32px] p-[32px] lg:flex lg:items-center'>
                        <div className='p-[33px] bg-[#FACD49] w-[100px] h-[100px] rounded-[32px] mb-[32px]'>
                            <img src={Calendar} alt="" className='w-[34px] h-[40px]' />
                        </div>

                        <div className='lg:mb-[20px] lg:ml-[19px]'>
                            <h1 className='text-[23px] font-bold mb-[8px]'>Schedule your trip</h1>
                            <p className='text-sm md:text-[18px] text-[#19182599]'>It has roots in a piece of <br className='sm:hidden'/>classical</p>
                        </div>
                    </div>

                    <div className='p-[32px] lg:flex lg:items-center'>
                        <div className='p-[33px] bg-secondaire w-[100px] h-[100px] rounded-[32px] mb-[32px]'>
                            <img src={Ticket} alt="" className='w-[34px] h-[40px]' />
                        </div>

                        <div className='lg:mb-[20px] lg:ml-[19px]'>
                            <h1 className='text-[23px] font-bold mb-[8px]'>Get discounted coupons</h1>
                            <p className='text-sm md:text-[18px] text-[#19182599]'>Lorem Ipsum is not simply <br className='sm:hidden'/>random text</p>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* blocs de l'image */}
            <div className='w-full xl:w-[55%] lg:flex lg:justify-center flex justify-center'>
                <img src={Features} alt="" className='w-[350px] h-[438.89px] md:w-[693px] md:h-[869px] xl:object-contain'/>
            </div>
        </div>
    </>
  )
}

export default Feature