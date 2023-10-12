import React, {useState} from 'react'
import {logo, menu} from '../assets'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='sm:px-10 px-6 py-10 flex justify-between items-center w-full'>
      {/* Logo */}
      <div>
        <img src={logo} className=''/>
      </div>
      {/* Navigation Links */}
      <nav className='hidden sm:flex justify-between items-center w-[500px]'>
        <a href="" className='text-white text-[18px] font-Ba font-[400] tracking-wide'>About</a>
        <a href="" className='text-white text-[18px] font-Ba font-[400] tracking-wide'>Services</a>
        <a href="" className='text-white text-[18px] font-Ba font-[400] tracking-wide'>Projects</a>
        <a href=""className='text-black hover:text-white text-[16px] font-Fr font-[900] uppercase bg-white hover:bg-[#6ECFFF] transition-[0.5s] px-6 py-3 rounded-full'>Contact</a>
      </nav>

      {/* Mobile Nav */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
                <img
                  src={menu}
                  alt="menu"
                  className="w-[28px] h-[28px] object-contain"
                  onClick={() => setToggle(!toggle)} />

                <div
                  className={`${
                    !toggle ? "hidden" : "flex"
                  } flex flex-col justify-between items-center pt-20 pb-12 px-[115px] menu-box absolute top-[100px] right-[50%] translate-x-[50%] z-50`}
                >
                  <a href="" className='text-darkGrayishBlue sm:text-[18px] text-[20px] font-Ba font-[600] tracking-wide'>About</a>
                  <a href="" className='text-darkGrayishBlue sm:text-[18px] text-[20px] font-Ba font-[600] tracking-wide'>Services</a>
                  <a href="" className='text-darkGrayishBlue sm:text-[18px] text-[20px] font-Ba font-[600] tracking-wide'>Projects</a>
                  <a href=""className='text-black hover:text-white text-[16px] font-Fr font-[900] uppercase bg-yellow transition-[0.5s] sm:px-6 px-8 sm:py-3 py-4 rounded-full'>Contact</a>
                </div>
              </div>
    </div>
  )
}

export default Navbar