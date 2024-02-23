import React from 'react'

import Container from '../tools/Container'
import Objet from '../assets/OBJECTS.svg'
import Logo1 from '../assets/group1.png'
import Logo2 from '../assets/group 2.png'
import Logo3 from '../assets/group3.png'
import Logo4 from '../assets/group4.png'
import Logo5 from '../assets/group5.png'


const Partners = () => {
  return (
    <div className='mb-28 xl:mb-32 mt-72'>
        <div className='hidden lg:flex'>
            <img src={Objet} alt="" className='w-[65px] h-[169.95px]'/>
        </div>

        <Container>
            <div className='mt-10 sm:mt-[170px] lg:-mt-[70px] xl:grid relative'>
                <div className='flex items-center justify-evenly xl:justify-between'>
                    <img src={Logo1} alt="" className='w-[132.39px] h-[20px] lg:w-[211.83px] lg:h-[47px] object-fill'/>
                    <img src={Logo2} alt="" className='w-[70.66px] h-[20px] lg:w-[113.06px] lg:h-[47px] object-fill'/>
                    <img src={Logo3} alt="" className='w-[117.88px] h-[20px] lg:w-[188.6px] lg:h-[47px] object-fill'/>

                    <img src={Logo4} alt="" className='w-[64.08px] h-[20px] lg:w-[170px] lg:h-[47px] object-fill hidden xl:flex'/>
                    <img src={Logo5} alt="" className='w-[108.48px] h-[20px] lg:w-[240x] lg:h-[47px] object-fill hidden xl:flex'/>
                </div>

                <div className='flex items-center justify-evenly xl:col-span-1 xl:hidden mt-10 xl:mt-0'>
                    <img src={Logo4} alt="" className='w-[64.08px] h-[20px] lg:w-[170px] lg:h-[47px] object-fill'/>
                    <img src={Logo5} alt="" className='w-[108.48px] h-[20px] lg:w-[240x] lg:h-[47px] object-fill'/>
                </div>
            </div>
        </Container>

        <div className='w-[100px] h-[700px] bg-[#FACD49] ml-80 right-[-100px] absolute drop-shadow-[-50px_-300px_100px_#FACD49] hidden lg:flex rounded-l-[100%] rounded-br -z-10'></div>
    </div>
  )
}

export default Partners