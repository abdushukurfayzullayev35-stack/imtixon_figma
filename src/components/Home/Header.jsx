import React from 'react'

import shashliklogo from "./img/shashliklogo.png"

const Header = () => {
  return (
    <div className='h-[921px] bg-[#BB2339] flex justify-around items-center'>

        <div className='header_content w-[555px] h-[477px]  '>
            <h3 className='text-[23px] font-[arial]'>Chase the new Flavour</h3>
            <h1 className='text-[90px] leading-[130%] font-[verdana] pt-2'>The key to Fine dining</h1>
            <p className='text-[16px] pt-5 font-[verdana]'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
            <button className='w-[173px] h-[43px] rounded-[100px] mt-[40px] border'> Explore Menu </button>
        </div>

    <img src={shashliklogo} alt="" />

    </div>
  )
}

export default Header