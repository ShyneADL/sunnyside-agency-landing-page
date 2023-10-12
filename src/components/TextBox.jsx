import React from 'react'

const TextBox = ({title, text, lineColor}) => {;

  return (
    <div className='flex justify-center items-center h-[600px]'>
      <div className='flex flex-col sm:items-start items-center justify-center'>
        <h2 className='sm:text-[44px] text-[36px] text-darkestBlue sm:text-left text-center font-Fr font-[900] sm:w-[400px] w-[300px] sm:leading-[50px] leading-[40px]'>{title}</h2>
        <p className='text-[18px] text-darkGrayishBlue sm:text-left text-center font-Ba font-[600] mt-10 leading-[32px] sm:w-[450px] w-[335px]'>{text}</p>
        <div className='relative mt-12'>
          <a className=' relative text-[18px] text-darkestBlue font-Fr font-[900] uppercase z-10'>Learn More</a>
          <div style={{background: `${lineColor}`}} className={`absolute bottom-[1px] right-[-7px] rounded-full w-[140px] h-[12px]  z-0`}></div>
        </div>
      </div>
    </div>
  )
}

export default TextBox