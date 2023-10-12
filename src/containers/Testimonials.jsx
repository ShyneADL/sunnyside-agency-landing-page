import React from 'react'
import userReviews from '../components/Users'


const Testimonials = () => {
  return (
    <div className='flex flex-col items-center justify-center sm:py-40 py-16 w-full'>
      <h2 className='text-[24px] text-grayishBlue font-Fr font-[700] uppercase tracking-widest'>Client Testimonials</h2>
      <div className='flex sm:flex-row flex-col justify-between items-center w-[80%] mt-24'>
        {userReviews.map((item) => (
          <div key={item.id} className='flex flex-col items-center justify-center'>
            <img src={item.img} alt={item.name}  className='rounded-full w-[70px] '/>
            <p className='text-[18px] text-darkestGrayishBlue font-Ba font-[600] text-center w-[350px] mt-16'>{item.review}</p>
            <h3 className='text-[18px] text-darkestBlue font-Fr font-[900] mt-16'>{item.name}</h3>
            <p className='text-[14px] text-grayishBlue font-Ba font-[600] mt-2'>{item.position}</p>
          </div>
        ))}
    </div>
    </div>
  )
}

export default Testimonials