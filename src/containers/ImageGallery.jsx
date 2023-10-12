import React from 'react'
import { cone, milkbottles, orange, sugarcubes } from '../assets'

const ImageGallery = () => {
  return (
    <div className='flex flex-wrap w-full'>
      <img src={milkbottles} alt="milkbottles"  className='sm:w-[25%] w-[50%] object-cover'/>
      <img src={orange} alt="orange"  className='sm:w-[25%] w-[50%] object-cover'/>
      <img src={cone} alt="cone"  className='sm:w-[25%] w-[50%] object-cover'/>
      <img src={sugarcubes} alt="sugarcubes"  className='sm:w-[25%] w-[50%] object-cover'/>
    </div>
  )
}

export default ImageGallery