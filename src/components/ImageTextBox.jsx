import React from 'react'


const ImageTextBox = ({img, title, text, color}) => {
  const styles = {
    backgroundImage: `url(${img})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  
  }

  const textStyle = {
    color: `${color}`
  }

  return (
    <div style={styles} className='flex flex-col justify-end items-center h-[720px] w-full'>
      <h2 style={textStyle} className='text-[28px] font-Fr font-[900]'>{title}</h2>
      <p style={textStyle} className='sm:text-[20px] text-[18px] font-Ba font-[600] text-center sm:w-[430px] w-[375px] mt-8 mb-24'>{text}</p>
    </div>
  )
}

export default ImageTextBox