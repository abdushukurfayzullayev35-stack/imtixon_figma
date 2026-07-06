import React from 'react'

import logo from "./img/rasm.png"

const Navbar = () => {
  return (
    <div className='h-[100px] bg-[#BB2339] flex items-center flex-row justify-around'>

    <img src={logo} alt="" />

    <ul className='flex items-center gap-[40px] text-[16px] "Open Sans", sans-serif'>
        <li>Menu</li>
        <li>news</li>
        <li>about us</li>
        <li>contact us </li>
        <button className='w-[131px] h-[48px] border rounded-[100px]'> login in </button>
    </ul>

    </div>
  )
}

export default Navbar