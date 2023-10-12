import React from 'react'
import { ImageTextBox } from '../components'
import { graphic, photography } from '../assets'

const ThirdRow = () => {
  return (
    <div className='flex sm:flex-row flex-col w-full'>

      <div className='sm:w-[50%] w-full'>
        <ImageTextBox 
        title='Graphic Design' 
        text='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
        img={graphic}
        color='hsl(212, 27%, 19%)'
         />
      </div>
      <div className='sm:w-[50%] w-full'>
        <ImageTextBox 
        title='Photography' 
        text='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
        img={photography}
        color='hsl(198, 62%, 26%)'
         />
      </div>
    </div>
  )
}

export default ThirdRow