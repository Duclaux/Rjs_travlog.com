import React from 'react'


import Container from '../tools/Container'
import Layer from '../assets/layer.svg'
import Rect1 from '../assets/rectangle1.png'
import Rect2 from '../assets/rectangle2.png'
import Rect3 from '../assets/rectangle3.png'
import Send from '../assets/send.svg'
import Location from '../assets/location.svg'
import Add from '../assets/add.svg'
import Market from '../assets/market.svg'
import Play from '../assets/play.svg'

const HeroTop = () => {
  return (
    <Container>
        <div className='xl:grid xl:grid-cols-3 flex flex-col-reverse items-start justify-center mb-10'>
            {/* block pour le texte */}
            <div className='h-96 w-full xl:col-span-1'>
                <div className='w-full mt-16 xl:mt-[130px]'>
                    <div className='flex items-center justify-center mx-auto xl:ml-0 w-fit px-[32px] py-[18px] rounded-[120px] bg-white drop-shadow-lg'>
                        <p className='text-secondaire size-[14px] font-bold w-auto mr-[32px]'>Explore the world!</p>
                        <img src={Market} alt=""/>
                    </div>
                </div>

                <div className='mt-10 w-full'>
                    <div className='text-center'>
                        <p className='text-4xl sm:text-5xl lg:text-6 xl:text-7xl xl:text-left w-full font-bold'>Travel <span className='text-secondaire'>top destination<br className='hidden lg:flex'/></span> of the word</p>
                    </div>
                </div>

                <div className='h-10 w-full text-center xl:text-left mt-[24px]'>
                    <p className='text-base sm:text-lg text-[#191825] opacity-[50%]'>We always make our customer happy by<br className='hidden xl:flex'/> providing<br /> as many choices as possible</p>
                </div>

                <div className='w-full mt-[70px] sm:mt-[32px] xl:mt-[70px]'>
                    <div className='lg:flex sm:justify-center sm:items-center xl:justify-start'>
                        <button className='font-bold text-sm w-full lg:w-[35%] bg-primaire h-16 text-white rounded-[30px] drop-shadow-[0px_30px_10px_#26232355]'>Get Started</button>

                        <button className='font-bold text-sm w-full border-[1px] h-16 rounded-[50px] border-gray-300 flex items-center justify-center mt-[24px] lg:mt-0 lg:w-[35%] lg:ml-[16px]'>
                            <img src={Play} alt="" className='w-[20px] h-[20px]'/>
                            <p className='ml-[8px]'>Watch Demo</p>
                        </button>
                    </div>
                </div>
            </div>

            {/* bloc pour les images */}
            <div className='h-auto w-full xl:col-span-2 mt-[32px] xl:mt-[64px] relative'>

                <div className='absolute top-0 w-[100%] xl:object-cover'>
                    <img src={Layer} alt="" className='h-[147.52px] lg:w-[772px] lg:[287.38] xl:[287.38] sm:w-[772px] sm:h-[287.38px] lg:mx-auto'/>
                </div>

                <div className='w-[295.16px] mx-auto sm:w-[400px] lg:w-[600px]'>
                    <div className='relative mt-[50px] sm:mt-[100px]'>
                        <div className=''>
                            <img src={Rect1} alt="" className='w-[139.62px] h-[154px] lg:w-[272px] sm:h-[200px] sm:w-[150px] lg:h-[300px]'/>
                            <div className='p-[15px] bg-secondaire rounded-[100%] w-fit absolute top-32 -left-5 sm:top-44 lg:top-64'>
                                <img src={Send} alt="" className='w-[13.69px] h-[13.69px] sm:w-[26.67px] sm:h-[26.67px]'/>
                            </div>
                        </div>

                        <div className='mt-[32px] sm:mt-[40px]'>
                            <img src={Rect2} alt="" className='w-[139.62px] h-[154] sm:h-[200px] sm:w-[150px] lg:w-[272px] lg:h-[300px]'/>
                        </div>

                        <div className='absolute top-[59.55px] -right-2 xl:top-[100px]'>
                            <img src={Rect3} alt="" className='w-[139.62px] sm:h-[300px] sm:w-[200px] h-[205.33px] lg:w-[272px] lg:h-[400px]'/>
                            <div className='hidden sm:flex items-center justify-center px-[10px] py-[5px] sm:px-[30px] sm:py-[12px] rounded-[120px] bg-white drop-shadow-lg  absolute bottom-5 -right-10'>
                                <img src={Location} alt="" className='w-[20px] h-[20px] sm:w-[26.67px] sm:h-[26.67px]'/>
                                <p className='text-[#393E46] size-[3px] font-bold w-auto h-auto ml-2 sm:ml-3 sm:text-md sm:w-auto'>Top Places</p>
                            </div>
                        </div>

                        <div className='p-[15px] bg-tertiaire rounded-[100%] w-fit absolute bottom-0 right-16'>
                            <img src={Add} alt="" className='w-[13.69px] h-[13.69px] sm:w-[26.67px] sm:h-[26.67px]'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default HeroTop