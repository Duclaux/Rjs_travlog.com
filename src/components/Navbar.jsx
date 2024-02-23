import React, { useState } from 'react'
import Container from '../tools/Container'
import Logo from '../assets/logo.svg'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const showLink = () => {
    setNav (!nav)
  }

  return (
    <>
      <div className='w-[300px] h-[300px] bg-tertiaire top-[-210px] left-[-210px] drop-shadow-[100px_100px_700px_#FF5722] hidden lg:flex xl:hidden rounded-r-[100%] rounded-tr absolute -z-10'></div>
      <Container>
          <div className='grid grid-cols-2 lg:grid-cols-3 justify-between py-3 lg:py-7 xl:grid-cols-5 '>

              {/* menu hambergur s'affichant a gauche */}
              <div className='hidden h-20 lg:flex items-center lg:col-span-1 xl:hidden z-10'>
                  <div className='bg-primaire p-2 rounded-xl mx-auto ml-0 lg:mr-auto' onClick={showLink}>
                    { nav ? <AiOutlineClose size={35} color='white' className='rounded-sm ease-in-out duration-500'/> : <AiOutlineMenu size={35} color='white' className='rounded-sm ease-in-out duration-500'/>}
                  </div>
              </div>

              {/* logo */}
              <div className='h-20 flex items-center col-span-1 lg:mx-auto xl:ml-0'>
                  <img src={Logo} alt="" className='w-[40px] h-[40px] xl:w-[65px] xl:h-[65px]'/>
                  <h1 className='text-[#191825] ml-[16px] font-extrabold size-[24px] xl:text-3xl xl:mt-[-10px]'>Travlog</h1>
              </div>

              {/* lien en plein ecran */}
              <div className='col-span-3 xl:flex items-center justify-center hidden'>
                <ul className='flex items-center justify-evenly w-full'>
                  <li className='font-bold text-xl'>Home</li>
                  <li className='font-bold text-xl text-[#191825] opacity-[50%] hover:text-black hover:opacity-[100%] duration-200 cursor-pointer'>Discover</li>
                  <li className='font-bold text-xl w-auto text-[#191825] opacity-[50%] hover:text-black hover:opacity-[100%] duration-200 cursor-pointer'>Special Deals</li>
                  <li className='font-bold text-xl text-[#191825] opacity-[50%] hover:text-black hover:opacity-[100%] duration-200 cursor-pointer'>Contact</li>
                </ul>
              </div>

              {/* menu hambergur s'affichant a Droite */}
              <div className='h-20 flex items-center lg:col-span-1 lg:hidden z-10'>
                  <div className='bg-primaire p-2 rounded-xl mx-auto mr-0 lg:mr-auto' onClick={showLink}>
                    { nav ? <AiOutlineClose size={35} color='white' className='rounded-sm ease-in-out duration-500'/> : <AiOutlineMenu size={35} color='white' className='rounded-sm ease-in-out duration-500'/>}
                  </div>
              </div>

              {/* les bouttons login */}
              <div className='hidden lg:flex items-center justify-end w-auto col-span-1 xl:ml-0'>
                <button className='font-bold size-[14px] w-16 bg-transparent hover:bg-primaire hover:w-32 h-16 hover:text-white hover:rounded-[40px] duration-700 xl:text-xl xl:hover:xl:w-40 xl:hover:xl:h-[65px] xl:w-40 xl:h-[65px]'>Log In</button>
                <button className='font-bold size-[14px] w-32 h-16 bg-primaire text-center rounded-[40px] text-white ml-5 xl:text-xl xl:w-40 xl:h-[65px]'>Sign Up</button>
              </div>

              <div className={nav ? 'fixed top-0 bg-[#FACD49] px-10 pt-32 right-0 w-[60%] xl:hidden h-full lg:left-0 ease-in-out duration-500' : 'bg-[#fff] px-10 pt-5 xl:hidden fixed top-0 right-[-100%] w-[60%] h-full lg:left-[-100%] lg:z-0 ease-in-out duration-500'}>
                <ul className='flex-col items-center justify-evenly'>
                  <li className='font-bold text-xl mb-7 border-b-2 pb-3 border-tertiaire'>Home</li>
                  <li className='font-bold text-xl mb-7 border-b-2 pb-3 border-tertiaire duration-200 cursor-pointer'>Discover</li>
                  <li className='font-bold text-xl mb-7 border-b-2 pb-3 border-tertiaire w-auto duration-200 cursor-pointer'>Special Deals</li>
                  <li className='font-bold text-xl border-b-2 pb-3 border-tertiaire duration-200 cursor-pointer'>Contact</li>
                </ul>
              </div>
          </div>
      </Container>
    </>
  )
}

export default Navbar