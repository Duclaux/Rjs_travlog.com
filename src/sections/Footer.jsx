import React from 'react'
import Container from '../tools/Container'
import Logo from '../assets/logo.svg'
import Row from '../assets/row.png'
import Spirale from '../assets/spirale.svg'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  return (
      <div className='py-[32px] px-0 lg:p-[64px] relative'>
        <Container>
          <div className='xl:flex xl:items-center xl:justify-between'>
            <div className='w-full xl:col-span-1 lg:mx-auto xl:ml-0'>
              <div className='flex items-center w-full x'>
                <img src={Logo} alt="" className='w-[40px] h-[40px] xl:w-[65px] xl:h-[65px]'/>
                <h1 className='text-[#191825] ml-[16px] font-extrabold text-[24px] xl:text-3xl xl:mt-[-10px]'>Travlog</h1>
              </div>

              <p className='text-[16px] md:text-[18px] lg:text-[23px] text-[#19182599] mt-[32px]'>Contrary to popular belief, Lorem Ipsum is not simply<br className='hidden xl:flex'/>random text. It has roots in a<br className='xl:hidden'/>piece of classical Latin<br className='hidden xl:flex'/>literature from 45 BC.</p>
              
              <div className='flex items-center w-fit mt-[32px] xl:mt-[64px]'>
                <div className='bg-primaire p-2 w-fit rounded-3xl mr-[32px]'>
                  <FaFacebookF color='white' size={27}/>
                </div>

                <div className='bg-primaire p-2 w-fit rounded-3xl mr-[32px]'>
                  <FaTwitter color='white' size={27}/>
                </div>

                <div className='bg-primaire p-2 w-fit rounded-3xl'>
                  <FaInstagram color='white' size={27}/>
                </div>
              </div>
            </div>

            <div className='w-full xl:col-span-1 mt-[64px] xl:mt-0 lg:grid lg:grid-cols-3'>
              <div className='w-full lg:col-span-1'>
                <div>
                  <div className='flex items-center justify-between'>
                      <p className='text-[23px] font-bold'>Company</p>
                      <img src={Row} alt="" className='w-[24px] h-[24px] lg:hidden'/>
                  </div>

                  <ul className='hidden lg:block'>
                    <li className='mt-[32px] text-[18px] font-light'>About</li>
                    <li className='mt-[32px] text-[18px] font-light'>Career</li>
                    <li className='mt-[32px] text-[18px] font-light'>Mobile</li>
                  </ul>
                </div>
              </div>

              <div className='w-full lg:col-span-1 mt-[64px] lg:mt-0'>
                <div>
                  <div className='flex items-center justify-between'>
                      <p className='text-[23px] font-bold'>Contact</p>
                      <img src={Row} alt="" className='w-[24px] h-[24px] lg:hidden'/>
                  </div>

                  <ul className='hidden lg:block'>
                    <li className='mt-[32px] text-[18px] font-light'>Why Travlog?</li>
                    <li className='mt-[32px] text-[18px] font-light'>Partner with us</li>
                    <li className='mt-[32px] text-[18px] font-light'>FAQ’s</li>
                    <li className='mt-[32px] text-[18px] font-light'>Blog</li>
                  </ul>
                </div>
              </div>

              <div className='w-full lg:col-span-1 mt-[64px] lg:mt-0'>
                <div>
                  <div className='flex items-center justify-between'>
                      <p className='text-[23px] font-bold'>Meet Us</p>
                      <img src={Row} alt="" className='w-[24px] h-[24px] lg:hidden'/>
                  </div>

                  <ul className='hidden lg:block'>
                    <li className='mt-[32px] text-[18px] font-light'>+00 92 1234 56789</li>
                    <li className='mt-[32px] text-[18px] font-light'>info@travlog.com</li>
                    <li className='mt-[32px] text-[18px] font-light'>205. R Street, New York</li>
                    <li className='mt-[32px] text-[18px] font-light'>BD23200</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>

        <img src={Spirale} alt="" className='hidden lg:flex absolute -top-20 xl:-top-36 right-0'/>
      </div>
  )
}

export default Footer