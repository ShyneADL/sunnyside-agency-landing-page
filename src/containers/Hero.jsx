import React from 'react'
import { Navbar } from '../components'
import { arrowDown } from '../assets'

const Hero = () => {
  return (
    <div className='header-image'>
        <header className='absolute w-full'>
          <Navbar/>
        </header>
        <div className='flex flex-col justify-center items-center w-full sm:pt-[200px] pt-[180px]'>
          <h1 className='text-white sm:text-[56px] text-[44px] text-center font-Fr font-[900] uppercase tracking-[0.2em] sm:leading-[75px] leading-[55px]'>We are creatives</h1>
          <img src={arrowDown} className='sm:pt-[60px] pt-[50px]'/>
        </div>
        <div>
        </div>
    </div>
  )
}

export default Hero