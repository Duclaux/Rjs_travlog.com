import React from 'react'

import Pointille from '../assets/pointille.svg'

const Newsletter = () => {
  return (
    <div className='w-full my-[100px] lg:mb-[64px] relative'>
        <img src={Pointille} alt="" className='hidden lg:flex absolute -top-16 left-[17px] xl:left-40'/>


        <div className='mx-auto max-w-[398px] px-2 sm:max-w-[700px] md:px-0 lg:max-w-[950px] xl:max-w-[1500px]'>
            <div className='bg-[#face4921] w-full px-[32px] py-[64px] lg:py-[128px] rounded-[30px]'>
                <div className='opacity-[8px] w-full mb-[64px] text-center'>
                    <h1 className='text-secondaire text-sm mb-[16px] uppercase font-bold md:text-[23px]'>subscribe to our newsletter</h1>
                    <p className='text-[32px] font-bold md:text-[40px] xl:text-[44px]'>Prepare yourself & let’s explore the <br className='hidden md:flex' />beauty of the world</p>
                </div>
                <div className='opacity-[8px] lg:flex lg:items-center justify-evenly'>
                    <input type="email" placeholder='Your Email' className='px-[32px] w-full lg:w-[55%] py-[24px] lg:py-[34px] rounded-[30px] mb-[32px] lg:mb-0'/>
                    <button className='font-bold text-sm lg:text-[23px] px-[64px] w-full lg:w-[30%] xl:w-[15%] py-[24px] lg:py-[34px] bg-primaire text-white rounded-[30px]'>Subscribe</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Newsletter