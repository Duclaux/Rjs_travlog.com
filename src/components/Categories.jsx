import React from "react";

import Word from '../assets/word.png'
import Book from '../assets/book.png'
import Cloudy from '../assets/cloudy.png'
import { motion } from "framer-motion"; 


const Categories = () => {
    
  return (
    <div className='xl:ml-[190px]'>
        <div className='xl:grid xl:grid-cols-3'>
            <motion.div 
                className='xl:col-span-1'
                initial={{
                    opacity:0,
                    y:300
                }}
                whileInView={{
                    opacity:1,
                    y:0,
                    transition:{
                        type:"spring",
                        duration:1
                    }
                }}

                viewport={{once:true, amount:1}}
            >
                <div className='mb-[32px] text-center xl:text-start xl:my-[210.5px]'>
                    <h1 className='text-secondaire text-sm mb-[16px] uppercase font-bold md:text-[23px]'>Services</h1>
                    <p className='text-[32px] font-bold md:text-[40px] xl:text-[44px]'>Our top value <br className='hidden xl:flex'/>categories <br className='lg:hidden'/>for you</p>
                </div>
            </motion.div>

            <motion.div 
                className='xl:col-span-2 px-[32px] lg:px-0 xl:py-[64px] lg:flex lg:items-center mt-[32px] lg:mt-0 lg:justify-between'>
                {/* bloc 1 */}
                <div className='border-[1px] border-[#19182570] text-center px-[32px] w-full py-[64px] lg:px-[64px] rounded-[32px] lg:mx-[8px] xl:mr-[10.5px]'>
                    <img src={Word} alt="" sizes={64} className='m-auto mb-[32px] lg:mb-[64px]'/>

                    <div className="xl:mb-[40px]">
                        <h1 className='text-[24px] lg:text-[28px] font-bold mb-[32px]'>Best Tour<br className="hidden lg:flex xl:hidden"/>Guide</h1>
                        <p className='text-[18px] text-[#191825] opacity-[50%]'>What looked like a <br className="hidden lg:flex xl:hidden"/> small patch of purple grass, above five feet.</p>
                    </div>
                </div>

                {/* bloc 2 */}
                <div className='border-[1px] mt-[32px] lg:mt-0 border-[#19182570] text-center w-full px-[32px] py-[64px] lg:px-[64px] rounded-[32px] lg:mx-[8px] xl:mx-[10.5px]'>
                    <img src={Book} alt="" sizes={64} className='m-auto mb-[32px] lg:mb-[64px]'/>

                    <div className="xl:mb-[40px]">
                        <h1 className='text-[24px] lg:text-[28px] font-bold mb-[32px]'>Easy<br className="hidden lg:flex xl:hidden"/>Booking</h1>
                        <p className='text-[18px] text-[#191825] opacity-[50%]'>Square, was moving<br className="hidden lg:flex"/> across the sand in their direction.</p>
                    </div>
                </div>
                
                {/* block 3 */}
                <div className='border-[1px] mt-[32px] lg:mt-0 border-[#19182570] w-full text-center px-[32px] py-[64px] lg:px-[64px] rounded-[32px] lg:mx-[8px] xl:mx-[10.5px]'>
                    <img src={Cloudy} alt="" sizes={64} className='m-auto mb-[32px] lg:mb-[64px]'/>

                    <div>
                        <h1 className='text-[24px] lg:text-[28px] font-bold mb-[32px]'>Weather Forecast</h1>
                        <p className='text-[18px] text-[#191825] opacity-[50%]'>What looked like a<br className="hidden lg:flex xl:hidden"/> small patch of <br className="hidden lg:flex xl:hidden"/>purple grass, above <br className="hidden lg:flex xl:hidden"/>five feet.</p>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Categories