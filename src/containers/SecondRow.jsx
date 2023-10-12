import React from 'react'
import { TextBox } from '../components'
import { stand } from '../assets'

const SecondRow = () => {
  return (
    <div className=' flex sm:flex-row flex-col w-full'>
      <div className='sm:w-[50%] w-full'>
        <img src={stand} alt='stand' className='w-full'/>
      </div>
      <div className='sm:w-[50%] w-full'>
        <TextBox title='Stand out to the right audience'
        text="Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places."
        lineColor='hsl(7, 99%, 70%)' // red
         />
      </div>
    </div>
  )
}

export default SecondRow