import React from 'react'
import Container from '../tools/Container'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

import People1 from '../assets/people1.png'
import YellowStar from '../assets/yellowStar.png'
import Bg_img from '../assets/bg2.svg'

const Testimonial = () => {

    const items = [

        // carousel 
        <div className="w-fit mx-auto">

            <div className='w-fit mx-auto'>
                <img src={People1} alt="" />
            </div>

            <p className='text-[23px] font-bold mt-[56px] w-fit mx-auto'><span className='text-tertiaire'>Mark Smith</span> / Travel Enthusiast</p>

            <div className='flex items-center w-fit mx-auto mt-[32px]'>
                <img src={YellowStar} alt="" className='mr-[16px]'/>
                <img src={YellowStar} alt="" className='mr-[16px]'/>
                <img src={YellowStar} alt="" className='mr-[16px]'/>
                <img src={YellowStar} alt="" className='mr-[16px]'/>
                <img src={YellowStar} alt="" className='mr-[16px]'/>
                <img src={YellowStar} alt="" />
            </div>

            <p className='text-sm md:text-[23px] text-[#191825c4] mt-[32px] leading-10 text-center'>Contrary to popular belief, Lorem Ipsum is not <br className='lg:hidden'/>simply <br className='hidden lg:flex xl:hidden'/>random text. It has roots <br className='hidden xl:flex'/>in a piece of<br className='lg:hidden'/> classical Latin <br className='hidden lg:flex xl:hidden'/>literature from 45 BC.</p>
        </div>,

        // carousel 2
        <div className='w-fit mx-auto'>
            <div className='w-fit mx-auto'>
                <img src={People1} alt="" />
            </div>

            <p className='text-[23px] font-bold mt-[56px] w-fit mx-auto'><span className='text-tertiaire'>Mark Smith</span> / Travel Enthusiast</p>

            <div className='flex items-center w-fit mx-auto mt-[32px]'>
                <img src={YellowStar} alt="" className='mr-[16px]'/>
                <img src={YellowStar} alt="" className='mr-[16px]'/>
                <img src={YellowStar} alt="" className='mr-[16px]'/>
                <img src={YellowStar} alt="" className='mr-[16px]'/>
                <img src={YellowStar} alt="" className='mr-[16px]'/>
                <img src={YellowStar} alt="" />
            </div>

            <p className='text-sm md:text-[23px] text-[#191825c4] mt-[32px] leading-10 text-center'>Contrary to popular belief, Lorem Ipsum is not <br className='lg:hidden'/>simply <br className='hidden lg:flex xl:hidden'/>random text. It has roots <br className='hidden xl:flex'/>in a piece of<br className='lg:hidden'/> classical Latin <br className='hidden lg:flex xl:hidden'/>literature from 45 BC.</p>
        </div>,

        // crousel 3
        <div className='w-fit mx-auto'>
            <div className='w-fit mx-auto'>
                <img src={People1} alt="" />
            </div>

            <p className='text-[23px] font-bold mt-[56px] w-fit mx-auto'><span className='text-tertiaire'>Mark Smith</span> / Travel Enthusiast</p>

            <div className='flex items-center w-fit mx-auto mt-[32px]'>
                <img src={YellowStar} alt="" className='mr-[16px]'/>
                <img src={YellowStar} alt="" className='mr-[16px]'/>
                <img src={YellowStar} alt="" className='mr-[16px]'/>
                <img src={YellowStar} alt="" className='mr-[16px]'/>
                <img src={YellowStar} alt="" className='mr-[16px]'/>
                <img src={YellowStar} alt="" />
            </div>

            <p className='text-sm md:text-[23px] text-[#191825c4] mt-[32px] leading-10 text-center'>Contrary to popular belief, Lorem Ipsum is not <br className='lg:hidden'/>simply <br className='hidden lg:flex xl:hidden'/>random text. It has roots <br className='hidden xl:flex'/>in a piece of<br className='lg:hidden'/> classical Latin <br className='hidden lg:flex xl:hidden'/>literature from 45 BC.</p>
        </div>
    ]


  return (
    <div className={`mb-[32px] lg:mb-[100px] relative speciale`}>
        <img src={Bg_img} alt="" className='w-full absolute top-[-500px] -z-10 opacity-35 hidden lg:flex'/>
        <Container>
            <div className='text-center'>
                <div className='mb-[64px] lg:mb-[56px]'>
                    <h1 className='text-secondaire text-sm mb-[16px] uppercase font-bold md:text-[23px]'>Testimonials</h1>
                    <p className='text-[32px] font-bold md:text-[40px] xl:text-[44px]'>Trust our clients</p>
                </div>                
            </div>
            <AliceCarousel 
                items={items}
                controlsStrategy="alternate"
                infinite={true}
                mouseTracking={true}
            />
        </Container>
    </div>
  )
}

export default Testimonial