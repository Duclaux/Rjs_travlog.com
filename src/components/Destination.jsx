import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import Beach from '../assets/beach.png'
import Fish from '../assets/fish.png'
import Mountain from '../assets/mountain.png'
import Start1 from '../assets/start1.png'


import Container from '../tools/Container'

const Destination = () => {

    const responsive ={
        0: {
            items: 1
        },
        1024:{
            items:3
        }
    }

    const items=[
        // carousel 1
        <div className="w-fit mb-10 sm:mx-auto mt-[30px] lg:mt-0 mx-[10px]">
            <div className="w-full">
                <img src={Beach} alt="" className="w-full"/>
            </div>

            <div className="w-full rounded-b-3xl bg-white drop-shadow-[0px_10px_10px_#26232355] p-[32px]">
                <div className="xl:flex xl:items-center xl:justify-between mb-[16px]">
                    <p className="font-bold text-[23px]">Paradise Beach, <br className="hidden sm:flex"/>Bantayan Island</p>
                    <h1 className="font-bold text-secondaire text-[23px] mt-[8px] xl:mt-0">$550.16</h1>
                </div>

                <h2 className="text-[#191825b3] mb-[30px] text-[18px]">Rome, Italy</h2>

                <div className="flex items-center ">
                    <h1 className="font-bold text-tertiaire text-[23px] mr-[8px]">4.8</h1>
                    <img src={Start1} alt="" />
                </div>
            </div>
        </div>,

        // carousel 2
        <div className="w-fit mb-10 sm:mx-auto mt-[35px] lg:mt-0 mx-[10px]">
            <div className="w-full">
                <img src={Fish} alt="" className="w-full"/>
            </div>

            <div className="w-full rounded-b-3xl bg-white drop-shadow-[0px_10px_10px_#26232355] p-[32px]">
                <div className="xl:flex xl:items-center xl:justify-between mb-[16px]">
                    <p className="font-bold text-[23px]">Ocean with full of <br className="flex"/>Colors</p>
                    <h1 className="font-bold text-secondaire text-[23px] mt-[8px] xl:mt-0">$20.99</h1>
                </div>

                <h2 className="text-[#191825b3] mb-[30px] text-[18px]">Maldives</h2>

                <div className="flex items-center ">
                    <h1 className="font-bold text-tertiaire text-[23px] mr-[8px]">4.5</h1>
                    <img src={Start1} alt="" />
                </div>
            </div>
        </div>,

        // carousel 3
        <div className="w-fit mb-10 sm:mx-auto mt-[30px] lg:mt-0 mx-[10px]">
            <div className="w-full">
                <img src={Mountain} alt="" className="w-full"/>
            </div>

            <div className="w-full rounded-b-3xl bg-white drop-shadow-[0px_10px_10px_#26232355] p-[32px]">
                <div className="xl:flex xl:items-center xl:justify-between mb-[16px]">
                    <p className="font-bold text-[23px]">Mountain View, <br className="hidden sm:flex"/>Above the cloud</p>
                    <h1 className="font-bold text-secondaire text-[23px] mt-[8px] xl:mt-0">$150.99</h1>
                </div>

                <h2 className="text-[#191825b3] mb-[30px] text-[18px]">United Arab Emeries </h2>

                <div className="flex items-center ">
                    <h1 className="font-bold text-tertiaire text-[23px] mr-[8px]">5.0</h1>
                    <img src={Start1} alt="" />
                </div>
            </div>
        </div>,
    ]


  return (
        <Container>
        <div className="slider-container py-[32px] lg:py-[64px] relative">
            <div className='w-full pb-[64px]'>
                <div className='text-center xl:text-start'>
                    <h1 className='text-secondaire text-sm mb-[16px] uppercase font-bold md:text-[23px]'>Top Destination</h1>
                    <p className='text-[32px] font-bold md:text-[40px] xl:text-[44px]'>Explore top destination</p>
                </div>
            </div>
            
            <AliceCarousel 
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                infinite={true}
                mouseTracking={true}
            />
        </div>
    </Container>
    )
}

export default Destination