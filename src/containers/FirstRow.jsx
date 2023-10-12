import React from 'react'
import { TextBox } from '../components'
import { transform } from '../assets'

const FirstRow = () => {
  return (
    <div className=' flex sm:flex-row flex-col-reverse w-full'>
      <div className='sm:w-[50%] w-full'>
        <TextBox title='Transform your brand'
        text=' We are a full-service creative agency specializing in helping brands grow fast. 
        Engage your clients through compelling visuals that do most of the marketing for you.'
        lineColor='hsl(51, 100%, 49%)' // yellow
         />
      </div>
      <div className='sm:w-[50%] w-full'>
        <img src={transform} alt='egg' className='w-full'/>
      </div>
    </div>
  )
}

export default FirstRow